This demonstrates how Yarn’s duplicate virtual package entries
for the same package & same version causes bugs in React Spectrum.

It doesn’t seem reasonable
that the same version should have multiple virtual entries, so this is
either a bug in Yarn, or intended behavior of Yarn and a bug in how
React Spectrum packages specify their dependencies.

## Reproduction of duplicate virtual packages

Reproduction is evident in `.pnp.cjs`, from around line 5606:
in RAW_RUNTIME_STATE under the entry for
`@react-spectrum/utils` there are multiple “virtual” packages.

This situation causes runtime bugs as packages
end up using two different JavaScript objects,
even as you’re referencing the same import.

You should be able to derive the identical `.pnp.cjs` from scratch
by running `yarn` in `package-root`.

## Runtime bug reproduction

To be more specific, the bug arises in the bundle of the Web app
where esbuild (a well-behaved bundler) dutifully outputs code
instantiating distinct JavaScript objects for distinct virtual
packages at runtime. 

To build the app and observe the bug, run `yarn build` and serve
`package-root` on localhost.

As before, switching package resolution can turn the bug on or off
(just remember to run `yarn` and `yarn build` after any package.json
changes).

## Investigating duplicate packages

It may be helpful to use a plugin linked in this issue:

https://github.com/yarnpkg/berry/issues/6724#issuecomment-2908150089

and checking `yarn why` with duplicate packages.

The plugin can be configured with the following in `.yarnrc.yml`:

```
preventMultipleInstances:
- 'virtual:*'
```

In some projects, the root cause may be in your own `package.json` dependency
specifications. In this case, the root cause cannot be narrowed down to that,
and thus seems to be in Spectrum package dependency specifications.

## Notes

- The issue will not reproduce if you upgrade `@adobe/react-spectrum` to `3.42.0`
  and `@react-spectrum/provider` to `3.10.5`. This make it apparent that it’s a bug
  affecting particular Spectrum versions, and probably caused by Spectrum packages’
  dependency specifications.

- The demo package uses Yarn’s zero-installs.

- Dependency on `@react-spectrum/provider` is necessary, as it is apparently
  a contributing triggering condition. 

- To see a list of all packages with duplicate virtual entries,
  run `node duplicateVirtualChecker.cjs` or add constraint from the snippet
  in [this comment](https://github.com/yarnpkg/berry/issues/4688#issuecomment-2726079576)
  and run `yarn constraints`.

- The `packageExtensions` entry in `.yarnrc.yml` is required because
  of an unrelated suspected issue in `@spectrum-icons/ui` where it
  does not declare a dependency on `@babel/runtime`.
