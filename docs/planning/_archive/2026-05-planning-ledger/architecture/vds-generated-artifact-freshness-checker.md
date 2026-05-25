# VDS Generated Artifact Freshness Checker

Last updated: `2026-05-23`

Source item: `VDS-0310`

This file records the VDS generated artifact freshness checker for the library structure track. It is a planning artifact only: no source CSS, generated `dist`, docs, package metadata beyond the explicit `audit:dist` script, workflow, selector inventory, consumer report, npm tag, or version field changes happen here.

## Policy Summary

- `src/` remains canonical authoring truth.
- `dist/` remains checked-in generated package output.
- `dist/` must not be edited by hand.
- `audit:dist` is a check-only command.
- `audit:dist` renders expected CSS into a temp directory and compares it to checked-in `dist`.
- A failing `audit:dist` means generated output is stale or malformed; it does not authorize a dist refresh inside an unrelated item.
- Generated artifact refreshes remain approved build/release work.

## Tooling Interface

- Package script: `pnpm run audit:dist`.
- Script target: `node static/js/check-generated-artifacts.js --check`.
- Supported mode: `--check` only.
- Unsupported modes:
  - no `--write`;
  - no dist refresh;
  - no source rewrite;
  - no package metadata rewrite;
  - no generated report output.

`audit:dist` is intentionally not part of aggregate `pnpm run audit` in this item because it renders expected CSS with PostCSS and `cssnano`, which is slower than normal repo-local audits.

## Artifact Contract

The checker computes expected outputs from current source:

- Top-level bundles:
  - `src/index.css` to `dist/vds.css` and `dist/vds.min.css`;
  - `src/core.css` to `dist/core.css` and `dist/core.min.css`;
  - `src/identity.css` to `dist/identity.css` and `dist/identity.min.css`.
- Component files:
  - `src/components/*.css` to `dist/components/*.css`;
  - `src/components/*.css` to `dist/components/*.min.css`.
- Theme files:
  - `src/themes/*.css` to `dist/themes/*.css`;
  - `src/themes/*.css` to `dist/themes/*.min.css`.

Current expected output count:

- Top-level CSS files: `6`.
- Standard component CSS files: `33`.
- Minified component CSS files: `33`.
- Standard theme CSS files: `4`.
- Minified theme CSS files: `4`.
- Total dist CSS files: `80`.
- Expected source maps: `0`.

## Render Contract

The checker uses the local PostCSS CLI with the current build plugin contract:

- `postcss-import` for top-level bundles;
- conditional `postcss-import` for batch component/theme inputs only when source files contain `@import`;
- `postcss-preset-env`;
- `autoprefixer`;
- `cssnano` for minified outputs;
- `--no-map` for every temp render.

Expected files are rendered under a temp directory, then compared byte-for-byte against checked-in `dist`.

## Temp Directory Contract

- Use `VDS_DIST_CHECK_TMPDIR` when set.
- Prefer `/tmp` on Linux/WSL to avoid slow mounted Windows temp paths.
- Fall back to `os.tmpdir()` when `/tmp` is unavailable.
- Always remove the temp directory in success and failure paths.

The `/tmp` preference was added because `os.tmpdir()` resolved to a mounted Windows temp path in this environment, making PostCSS temp rendering much slower.

## Failure Output Contract

On failure, the checker prints stable grouped output:

- missing files;
- extra files;
- unexpected source maps;
- stale files.

The checker also prints a reminder that `dist` must not be edited by hand and that `VDS-0310` itself must not refresh `dist`.

## Current Freshness Evidence

Read-only inventory after implementation:

- Source CSS files: `43`.
- Checked-in dist CSS files: `80`.
- Checked-in dist source maps: `0`.
- Expected dist CSS files: `80`.
- Missing expected dist CSS files: `0`.
- Extra dist CSS files: `0`.
- Stale dist files from byte comparison: `0`.
- Freshness command result: `Generated artifacts are fresh (80 CSS files checked).`

## Future Work Contract

- `VDS-1010` and later source-token/component items must record `dist refresh pending` if they change source CSS while generated output is out of scope.
- Package smoke work must use `audit:dist` as one source of package-facing evidence.
- Publish workflow review must decide whether `audit:dist` belongs in CI.
- Release dist refresh work must use `audit:dist` after generated output is refreshed.
- Build-tooling modernization may later share rendering helpers between `static/js/build.js` and `static/js/check-generated-artifacts.js`.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Source/dist policy: `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`
- Build-script modernization plan: `@24vlh/vds/docs/planning/architecture/vds-build-script-modernization-plan.md`
- Audit-script modernization plan: `@24vlh/vds/docs/planning/architecture/vds-audit-script-modernization-plan.md`
- Lint-staged and Husky policy review: `@24vlh/vds/docs/planning/architecture/vds-lint-staged-husky-policy-review.md`
- File naming and component alias policy: `@24vlh/vds/docs/planning/architecture/vds-file-naming-component-alias-policy.md`
- Freshness checker: `@24vlh/vds/static/js/check-generated-artifacts.js`
- Build script: `@24vlh/vds/static/js/build.js`
- Source CSS: `@24vlh/vds/src`
- Generated dist: `@24vlh/vds/dist`
- Package metadata: `@24vlh/vds/package.json`
