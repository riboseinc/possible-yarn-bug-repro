/**
 * Goes through Yarn PNP definition and notices duplicate virtual entries.
 */

const api = require('./.pnp.cjs');

const loc = api.getAllLocators();
const virtualByPackageName = {};
for (const l of loc) {
  const pkg = api.getPackageInformation(l);
  if (pkg) {
    let path;
    try {
      path = api.resolveUnqualified(pkg.packageLocation);
    } catch (e) {
      //console.warn("Cannot resolve path for", l.name);
      continue;
    }
    if (path.indexOf('__virtual__') >= 1) {
      if (virtualByPackageName[l.name]) {
        virtualByPackageName[l.name].push(path);
      } else {
        virtualByPackageName[l.name] = [path];
      }
    }
  }
}
for (const [pkgName, pkgVirtualPath] of Object.entries(virtualByPackageName)) {
  if (pkgVirtualPath.length > 1) {
    console.warn("More than one virtual path for package:", pkgName);
    console.debug(`  - ${pkgVirtualPath.map(p => {
      const noprefix = p.split('__virtual__/')[1];
      return `${noprefix.slice(0, noprefix.indexOf('/'))}`;
    }).join('\n  - ')}`);
  }
}
