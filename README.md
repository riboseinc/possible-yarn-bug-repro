This demonstrates a bug with duplicate virtual package entries
for the same package & same version.

Reproduction is in `.pnp.cjs`, [from around line 5379](https://github.com/riboseinc/possible-yarn-bug-repro/blob/26c88320abcff6b22f4ded86de6f7b868ae46ac7/package-root/.pnp.cjs#L5378-L5432).

This situation causes runtime bugs as packages
end up using two different JavaScript objects,
even as you’re referencing the same import.

You should be able to derive the identical `.pnp.cjs` from scratch
by running `yarn` in `package-root`.

In `package-root`, if you swap `package.json` for `package-with-fix.json`
and re-run `yarn`, you will no longer see the duplicate virtual entries.

`react-spectrum-utils` & `react-spectrum-utils-broken` have only one change
between them: the broken version has a peer dependency on `react-dom`.

Dependency on `@react-spectrum/provider` is necessary, as it is apparently
a contributing triggering condition. 

It doesn’t seem reasonable
that the same version should have multiple virtual entries, so this is
either a bug in Yarn, or intended behavior of Yarn and a bug in how
React Spectrum packages specify their dependencies.
