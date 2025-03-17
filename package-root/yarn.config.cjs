/** @type {import('@yarnpkg/types')} */
const { defineConfig } = require('@yarnpkg/types');
const semver = require('semver');

// If otherRange is a greater version, return it.  Otherwise return range.
function preferredRange(range, otherRange) {
  if (otherRange === '*') {
    return range;
  }
  const version = semver.coerce(range);
  const otherVersion = semver.coerce(otherRange);
  if (
    version && otherVersion && !semver.eq(version, otherVersion)
      ? semver.gt(otherVersion, version)
      : range.localeCompare(otherRange) > 0
  ) {
    return otherRange;
  }
  return range;
}

// Require that if two workspaces have the same dependency, the greater version must be used in both.
function enforceConsistentDependencies(Yarn) {
  // Force consistent dependency versions of all dependencies and devDependencies
  for (const dependency of Yarn.dependencies()) {
    for (const otherDependency of Yarn.dependencies({
      ident: dependency.ident,
    })) {
      if (dependency.range !== otherDependency.range) {
        dependency.update(
          preferredRange(dependency.range, otherDependency.range),
        );
      }
    }
  }
}

// Having multiple instances can break many popular packages like react-dom, styled-components, and so on.
// This constraint enforces that peer dependencies of packages are satisfied in the same way, so that there
// will only be a single instance.  To allow packages to have multiple instances, add them to the
// multipleInstancesWhitelist list here.
const multipleInstancesWhitelist = [
  'debug',
  'isomorphic-ws',
  /^@babel/,
  /^@types/,
];
function enforceSingletonPackagesWithPeerDependencies(Yarn) {
  // Whitelist deps we don't mind having multiple instances
  // Force all dependencies to be singletons
  const inverseDepTree = new Map();
  const walked = new Set();
  for (const dependency of Yarn.dependencies()) {
    // We don't consider duplicate dev dependencies to be an issue; only multiple instances
    // of regular or peer dependencies cause problems
    if (dependency.type === 'devDependencies') {
      continue;
    }
    // Can't do much if the dependency failed to resolve
    if (!dependency.resolution) {
      continue;
    }
    const inverseDepNode = package => {
      const existing = inverseDepTree.get(package.ident);
      if (existing) {
        return existing;
      }
      const result = {
        dependents: new Map(),
        workspace: dependency.workspace,
        package,
      };
      inverseDepTree.set(package.ident, result);
      return result;
    };

    const walk = package => {
      if (walked.has(package.ident)) {
        return;
      }
      walked.add(package.ident);
      for (const depPkg of package.dependencies.values()) {
        // Don't register a dependency for this purpose if it's a peer dependency.  Only direct
        // dependencies cause problems
        if (
          package.peerDependencies.has(depPkg.ident) ||
          package.optionalPeerDependencies.has(depPkg.ident)
        ) {
          continue;
        }
        if (
          depPkg.peerDependencies.size &&
          !multipleInstancesWhitelist.some(pattern =>
            typeof pattern === 'string'
              ? depPkg.ident === pattern
              : pattern instanceof RegExp
                ? pattern.test(depPkg.ident)
                : false,
          )
        ) {
          const node = inverseDepNode(depPkg);
          node.dependents.set(package.ident, package);
        }
        walk(depPkg);
      }
    };

    walk(dependency.resolution);
  }

  for (const { package, dependents, workspace } of inverseDepTree.values()) {
    if (dependents.size > 1) {
      const peerDeps = [...new Set([...package.peerDependencies.keys()])].map(
        peerDep => ({
          ident: peerDep,
          providedVersions: new Map(),
        }),
      );
      for (const dependent of dependents.values()) {
        for (const { ident, providedVersions } of peerDeps) {
          const providedVersion =
            dependent.dependencies.get(ident)?.version ||
            dependent.peerDependencies.get(ident) ||
            dependent.optionalPeerDependencies.get(ident) ||
            (dependent.ident === ident ? dependent.version : null) ||
            'none';
          const versionProviders = providedVersions.get(providedVersion);
          const dependentId = `${dependent.ident}@${dependent.version}`;
          if (!versionProviders) {
            providedVersions.set(
              providedVersion,
              new Map([[dependentId, dependent]]),
            );
          } else {
            versionProviders.set(dependentId, dependent);
          }
        }
      }
      for (const peerDep of peerDeps) {
        if (peerDep.providedVersions.size > 1) {
          // Pick the target range that should be provided, and assert that all dependents should
          // have provided a dependency with that version.
          const bestVersion = [...peerDep.providedVersions.keys()]
            .filter(r => r !== '*' && r !== 'none')
            .reduce((a, b) => preferredRange(b, a), '*');
          const wrongVersionProviders = new Map(peerDep.providedVersions);
          wrongVersionProviders.delete(bestVersion);
          for (const [
            providedVersion,
            providersMap,
          ] of wrongVersionProviders.entries()) {
            for (const dependent of providersMap.values()) {
              (dependent.workspace || workspace).error(
                [
                  dependent.workspace ? 'Package' : dependent.ident,
                  providedVersion === 'none'
                    ? `does not provide ${peerDep.ident}`
                    : `provides ${peerDep.ident}@${providedVersion}`,
                  `while other packages provide "${bestVersion}".`,
                  `This could result in multiple instances of ${package.ident}.`,
                  `Run "yarn info --all --dependents --virtuals --recursive ${package.ident}" for details.`,
                ].join(' '),
              );
              if (dependent.workspace) {
                // If the dependent has peer dependencies then propagate/satisfy the peer dependency using
                // devDependencies/peerDependencies.  Otherwise put as the same kind of dependency.
                if (dependent.peerDependencies.size) {
                  for (const depType of [
                    'devDependencies',
                    'peerDependencies',
                  ]) {
                    console.log(
                      'requesting',
                      dependent.workspace.ident,
                      depType,
                      peerDep.ident,
                      bestVersion,
                    );
                    dependent.workspace.set(
                      [depType, peerDep.ident],
                      bestVersion,
                    );
                  }
                } else {
                  for (const packageWorkspaceDep of Yarn.dependencies({
                    workspace: dependent.workspace,
                    ident: package.ident,
                  })) {
                    console.log(
                      'requesting 2',
                      packageWorkspaceDep.type,
                      depType,
                      peerDep.ident,
                      bestVersion,
                    );
                    dependent.workspace.set(
                      [packageWorkspaceDep.type, peerDep.ident],
                      bestVersion,
                    );
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

module.exports = defineConfig({
  async constraints({ Yarn }) {
    enforceConsistentDependencies(Yarn);
    enforceSingletonPackagesWithPeerDependencies(Yarn);
  },
});
