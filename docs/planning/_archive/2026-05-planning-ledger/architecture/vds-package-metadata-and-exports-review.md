# VDS Package Metadata and Exports Review

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-0230`

This file records the VDS package metadata and package-facing surface for the library structure track. It is a planning artifact only: no `package.json`, source CSS, selector, token, build script, workflow, generated `dist`, README, docs demo, lockfile, or version field changes happen here.

## Policy Summary

- `@24vlh/vds` is the canonical package identity.
- `src/` is canonical authoring source but is not a published package surface under the current `files: ["dist"]` policy.
- `dist/` is checked-in generated package output and is currently the published CSS surface.
- Current direct `dist` package paths are compatibility-sensitive until a later approved migration/export plan says otherwise.
- Adding `exports` is a package API change because unlisted subpaths become inaccessible in supported Node/package resolver behavior.

## Current Package Metadata

- Package name: `@24vlh/vds`.
- Current version: `0.3.8`.
- Description: `VDS — Vlah Design System CSS Framework`.
- License: `Apache-2.0`.
- Author: `@vlah.io`.
- Repository: `https://github.com/24vlh/vds.git`.
- Package `main`: `dist/vds.css`.
- Package `style`: `dist/vds.css`.
- Package `files`: `dist`.
- Registry config: `.npmrc` points to `https://registry.npmjs.org/`.

## Missing or Deferred Metadata

- No `exports` field.
- No `publishConfig` field.
- No `sideEffects` field.
- No `homepage` field.
- No `bugs` field.
- No `engines` field.
- No `type` field.
- No `packageManager` field.
- No `types` or `typings` field.

These fields are not added in `VDS-0230`. Exact metadata edits require a later approved package/release item.

## Current Packed Surface

`pnpm pack --dry-run` reports `83` packed files:

- `80` CSS files under `dist`.
- `LICENSE`.
- `package.json`.
- `README.md`.

Not packed under the current `files` policy:

- `src`.
- `static`.
- `doc-raw`.
- `docs/planning`.
- `pnpm-lock.yaml`.
- package audit/planning scripts.

The dry run invokes `prepare`/`husky`; package workflow behavior remains deferred to `VDS-0260`, `VDS-4100`, and release items.

## Package-Facing CSS Paths

Treat these paths as compatibility-sensitive package surfaces:

- `@24vlh/vds/dist/vds.css`
- `@24vlh/vds/dist/vds.min.css`
- `@24vlh/vds/dist/core.css`
- `@24vlh/vds/dist/core.min.css`
- `@24vlh/vds/dist/identity.css`
- `@24vlh/vds/dist/identity.min.css`
- `@24vlh/vds/dist/components/*.css`
- `@24vlh/vds/dist/components/*.min.css`
- `@24vlh/vds/dist/themes/*.css`
- `@24vlh/vds/dist/themes/*.min.css`

Current dist inventory:

- Top-level dist CSS files: `6`.
- Standard component CSS files: `33`.
- Minified component CSS files: `33`.
- Standard theme CSS files: `4`.
- Minified theme CSS files: `4`.
- Source map files: `0`.

## Consumer Evidence

- `@24vlh/keep-exec` depends on `@24vlh/vds@^0.3.8`.
- `@24vlh/keep-exec` loads:
  - `@24vlh/vds/dist/vds.css`
  - `@24vlh/vds/dist/themes/graphite.css`
- `@24vlh/vlah.io` uses vendored VDS CSS assets:
  - `src/assets/css/vds.css`
  - `src/assets/css/vds.min.css`
  - `src/assets/css/identity.css`
  - `src/assets/css/graphite.css`

## Exports Rule

- Do not add a restrictive `exports` map without preserving current package-facing direct `dist` subpaths or approving a migration plan.
- If an `exports` map is added later, include explicit compatibility decisions for top-level bundles, component paths, theme paths, `package.json`, and any minified file paths.
- Do not treat `main` and `style` as a full public-surface definition; consumers already use direct package subpaths.
- Any future removal, rename, or package path reshaping must be classified as package API work and reviewed with consumer compatibility evidence.

## README and Package Mismatches

- README install command uses `vds` instead of `@24vlh/vds`.
- README import examples use `vds/dist/...` instead of `@24vlh/vds/dist/...`.
- README says the full framework load includes themes, while `dist/vds.css` does not include themes.
- README component examples mention `button.css` and `card.css`, which are not current dist filenames.
- README says all outputs include source maps, while current checked-in dist has no maps.
- README describes direct source consumption, but current package `files` excludes `src`.

These are documentation and package-policy findings only. README fixes remain deferred to documentation/release work.

## Future Work Contract

- `VDS-0240` must review build script behavior with the current package-facing surface in mind.
- `VDS-0260` must review `prepare`, Husky, and lint-staged behavior, including package dry-run side effects.
- `VDS-0310` must support generated artifact freshness checking without changing package metadata casually.
- `VDS-4080` must verify package smoke scenarios for full import, core import, component import, theme import, and package `files` behavior.
- `VDS-4100` must validate CI and publish workflow expectations.
- `VDS-5020` must handle the actual version bump and package metadata changes if approved.
- `VDS-5030` must refresh and verify final generated dist output.
- `VDS-5060` must include final package smoke, docs, changelog, and release candidate checks.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Source/dist policy: `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`
- Release policy: `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
- Consumer compatibility report: `@24vlh/vds/docs/planning/api/vds-consumer-compatibility.md`
- Package metadata: `@24vlh/vds/package.json`
- README: `@24vlh/vds/README.md`
- Generated dist: `@24vlh/vds/dist`
- pnpm package metadata reference: `@24vlh/agents/docs_md/pnpm-node/pnpm/package_json.md`
- Node package exports reference: `@24vlh/agents/docs_md/pnpm-node/nodejs/packages-api.md`
