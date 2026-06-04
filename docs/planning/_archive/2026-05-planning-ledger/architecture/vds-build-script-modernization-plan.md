# VDS Build Script Modernization Plan

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-0240`

This file records the VDS build-script modernization review for the library structure track. It is a planning artifact only: no `static/js/build.js`, package scripts, package metadata, source CSS, generated `dist`, README, workflow, lockfile, docs demo, selector, token, or version field changes happen here.

## Policy Summary

- `static/js/build.js` is the current package build script.
- `src/` remains the canonical authoring source.
- `dist/` remains checked-in generated package output.
- Current direct `dist` package paths remain compatibility-sensitive.
- Full build commands remain guarded in this environment.
- Build implementation changes require later approved tooling or release items.

## Current Build Entrypoints

- `pnpm run build`: `NODE_ENV=development node static/js/build.js`.
- `pnpm run build:prod`: `NODE_ENV=production node static/js/build.js`.
- `lint-staged`: currently runs `pnpm run build` for `src/**/*.css`.
- Publish workflow: `.github/workflows/npm-publish.yml` runs `pnpm run build:prod` before preparing a sanitized publish directory.

## Current Build Script Behavior

- `static/js/build.js` is `229` lines.
- `node --check static/js/build.js` passes.
- The script uses `execSync` to shell out to the local PostCSS CLI.
- The script removes and recreates `dist` unconditionally.
- The script records timing and file-size metrics after outputs are created.
- The script uses an OS temp directory keyed by process id for minified batch output.
- The script cleans the temp directory after minified batch copies complete.

## Current Output Contract

- Top-level source inputs:
  - `src/index.css` to `dist/vds.css` and `dist/vds.min.css`.
  - `src/core.css` to `dist/core.css` and `dist/core.min.css`.
  - `src/identity.css` to `dist/identity.css` and `dist/identity.min.css`.
- Component source inputs:
  - `33` files from `src/components/**/*.css`.
  - Standard and minified outputs under `dist/components`.
- Theme source inputs:
  - `4` files from `src/themes/**/*.css`.
  - Standard and minified outputs under `dist/themes`.
- Expected CSS output count: `80`.
- Current checked-in dist CSS count: `80`.

## Current Plugin and Source-Map Policy

- Inline CLI plugins:
  - `postcss-import`
  - `postcss-preset-env`
  - `autoprefixer`
  - `cssnano` for minified output
- No `postcss.config.*` file exists.
- No `.browserslistrc` or Browserslist config file exists.
- Top-level builds always include `postcss-import`.
- Batch builds include `postcss-import` only when matched files contain `@import`.
- Current files with `@import`:
  - `src/core.css`
  - `src/index.css`
- Source maps:
  - opt-in through `VDS_BUILD_MAPS=1`;
  - disabled for minified output;
  - disabled for production output;
  - absent from current checked-in `dist`.

## Stale Build-Adjacent Helpers

- `static/js/combine-vds-css.js` references an outdated `../../css` root and writes `static/js/vds.css` if run.
- `static/js/combine-vds-doc.js` references `static/js/doc-raw`, while current raw docs live at `@24vlh/vds/doc-raw`, and writes `static/js/vds-doc.html` if run.
- These scripts are not current package build sources of truth.
- Later tooling work must decide whether to delete, archive, replace, or document them.

## Risks

- Unconditional clean builds are too broad for lint-staged and local targeted validation.
- Full builds are guarded in this environment and should not be treated as the default local validation path.
- Build failure output is inherited from child processes and lacks structured failure summaries.
- Source-map behavior currently conflicts with README claims.
- Plugin configuration is embedded in CLI arguments rather than centralized in a config artifact.
- Future build changes can accidentally reshape package-facing dist paths unless tied back to source/dist and package-surface policy.

## Modernization Direction

- Preserve the `src` canonical and `dist` generated-output policy from `VDS-0220`.
- Preserve package-facing direct `dist` paths from `VDS-0230`.
- Prefer targeted build/check modes before wiring any full clean build into local hooks.
- Make source-map policy explicit before release.
- Improve failure reporting and output inventory checks before release gates rely on build output.
- Classify stale combine helpers before removing or replacing them.
- Keep generated artifact freshness in `VDS-0310`.
- Keep lint-staged/Husky policy in `VDS-0260`.
- Keep package smoke testing in `VDS-4080`.
- Keep publish workflow review in `VDS-4100`.
- Keep final dist refresh and verification in `VDS-5030`.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Source architecture audit: `@24vlh/vds/docs/planning/architecture/vds-source-module-architecture-audit.md`
- Source/dist policy: `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`
- Package surface review: `@24vlh/vds/docs/planning/architecture/vds-package-metadata-and-exports-review.md`
- Build script: `@24vlh/vds/static/js/build.js`
- Stale helper scripts: `@24vlh/vds/static/js/combine-vds-css.js`, `@24vlh/vds/static/js/combine-vds-doc.js`
- Package metadata: `@24vlh/vds/package.json`
- Publish workflow: `@24vlh/vds/.github/workflows/npm-publish.yml`
- Generated dist: `@24vlh/vds/dist`
