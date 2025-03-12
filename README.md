This demonstrates a bug with duplicate virtual package entries
for the same package & same version.

Reproduction is visible in `.pnp.cjs`, line 5379.

You should be able to derive the identical `.pnp.cjs` from scratch
by running `yarn` in `package-root`.

In `package-root`, if you swap `package.json` for `package-with-fix.json`
and re-run `yarn`, you will no longer see the duplicate virtual entries.
