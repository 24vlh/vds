# VDS Dist and Source-of-Truth Policy

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-0220`

This file defines the VDS source/dist policy for the library structure track. It is a planning artifact only: no source CSS, selector, token, package metadata, build script, README, docs demo, workflow, generated `dist`, or version field changes happen here.

## Policy Summary

- `src/` is the canonical source of truth for authored VDS behavior.
- `dist/` is checked-in generated distribution output used for package consumption.
- `dist/` is not a manually edited behavioral source.
- Generated output changes must come from approved build/release work and be reviewed alongside the source changes that caused them.
- If source changes land before an approved dist refresh, the implementation log for that item must record `dist refresh pending`.

## Current Package Evidence

- Current package version: `0.3.8`.
- Package `main`: `dist/vds.css`.
- Package `style`: `dist/vds.css`.
- Package `files`: `dist`.
- Because package publication currently includes only `dist`, checked-in generated files remain package-facing until a later approved package metadata item changes that.

## Current Source and Dist Inventory

- Source CSS files: `43`.
- Component source CSS files: `33`.
- Theme source CSS files: `4`.
- Checked-in dist CSS files: `80`.
- Top-level dist bundle pairs:
  - `dist/vds.css` and `dist/vds.min.css`
  - `dist/core.css` and `dist/core.min.css`
  - `dist/identity.css` and `dist/identity.min.css`
- Component dist pairs:
  - standard and minified files under `dist/components`
  - generated from `src/components/**/*.css`
- Theme dist pairs:
  - standard and minified files under `dist/themes`
  - generated from `src/themes/**/*.css`
- Source maps:
  - not part of current checked-in dist output
  - build script source maps are opt-in through `VDS_BUILD_MAPS=1`

## Current Build Assumptions

- `static/js/build.js` removes and recreates `dist`.
- Top-level bundles are built from:
  - `src/index.css` to `dist/vds.css` and `dist/vds.min.css`
  - `src/core.css` to `dist/core.css` and `dist/core.min.css`
  - `src/identity.css` to `dist/identity.css` and `dist/identity.min.css`
- Component files are batch-built from `src/components/**/*.css` to `dist/components`.
- Theme files are batch-built from `src/themes/**/*.css` to `dist/themes`.
- Standard and minified outputs are both package-facing generated artifacts.
- Full builds remain guarded in this environment; this policy does not refresh or verify generated output equivalence.

## Manual Edit Rule

- Do not manually edit checked-in files under `dist/`.
- Do not treat a dist-only change as an implementation fix.
- Do not remove, rename, or reshape package-facing dist files without an approved package/release item.
- If generated output changes are needed, use the approved build command or future targeted generation command in that item, then review source and dist changes together.

## Dist Freshness Rule

- Source changes may be approved before a dist refresh when the item scope explicitly excludes generated output.
- In that case, the completed feature plan must record `dist refresh pending`.
- Dist freshness checking is deferred to `VDS-0310 Generated artifact freshness checker`.
- Final dist refresh and package verification are deferred to later release/build-output work, especially `VDS-5030`.
- Release readiness must not infer fresh generated output from source audits alone.

## Known Risks

- `dist/` is package-facing because current package metadata publishes only `dist`.
- Checked-in dist can drift from `src/` until a targeted freshness checker exists.
- The current `lint-staged` configuration runs `pnpm run build`, which conflicts with the VDS router build guardrail and is deferred to `VDS-0260`.
- Package/export policy is not settled until `VDS-0230`.
- Build script behavior, performance, source map policy, minification, and batch output assumptions remain deferred to `VDS-0240`.

## Future Work Contract

- `VDS-0230` must review package metadata, package `files`, public package surfaces, and component-level import paths with this source/dist policy in mind.
- `VDS-0240` must review build script behavior without changing the source-of-truth contract casually.
- `VDS-0260` must replace or justify lint-staged behavior that currently runs a guarded full build.
- `VDS-0310` must add targeted generated artifact freshness checking without requiring blind full builds.
- Release/build-output items, especially `VDS-5030`, must decide when checked-in dist is refreshed and how the final package-facing output is verified.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Source architecture audit: `@24vlh/vds/docs/planning/architecture/vds-source-module-architecture-audit.md`
- Release policy: `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
- Source entrypoints: `@24vlh/vds/src/index.css`, `@24vlh/vds/src/core.css`, `@24vlh/vds/src/identity.css`
- Component source: `@24vlh/vds/src/components`
- Theme source: `@24vlh/vds/src/themes`
- Generated dist: `@24vlh/vds/dist`
- Build script: `@24vlh/vds/static/js/build.js`
- Package metadata: `@24vlh/vds/package.json`
