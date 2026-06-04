# VDS Lint-Staged and Husky Policy Review

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-0260`

This file records the VDS lint-staged and Husky policy review for the library structure track. This item changes only the development lint-staged task for `src/**/*.css`; it does not change source CSS, runtime behavior, generated `dist`, generated reports, docs demos, workflows, lockfiles, package version, selectors, or tokens.

## Policy Summary

- Husky remains the pre-commit launcher.
- lint-staged remains the staged-file router.
- Pre-commit checks must be check-only, repo-local, deterministic, and safe for ordinary commits.
- Pre-commit must not run guarded full builds or write/regeneration commands.
- Full builds, generated artifact freshness, consumer compatibility scans, package smoke, visual checks, accessibility checks, responsive screenshots, and publish workflow checks remain later approved work.

## Current Hook Entrypoints

- `@24vlh/vds/.husky/pre-commit`: `pnpm run lint-staged`.
- `package.json` script `lint-staged`: `lint-staged`.
- `package.json` script `prepare`: `husky`.
- Husky version: `9.1.7`.
- lint-staged version: `16.2.7`.

## Previous Risk

- Previous lint-staged config ran `pnpm run build` for `src/**/*.css`.
- `pnpm run build` invokes `static/js/build.js`.
- The build script unconditionally deletes and recreates `dist`.
- Full build commands are guarded in the VDS router and are too broad for local staged validation.
- Running a generated-output build from pre-commit conflicts with the source/dist policy from `VDS-0220` and the build-script review from `VDS-0240`.

## New Staged CSS Policy

The `src/**/*.css` lint-staged task now runs this ordered check-only sequence:

1. `pnpm run audit:css`
2. `pnpm run audit:tokens`
3. `pnpm run audit:classes`
4. `pnpm run audit:selectors`

These commands cover CSS parse validity, token reference validity, raw-doc class compatibility, and selector inventory freshness without running the build or writing generated artifacts.

## Explicit Non-Goals

- No `pnpm run build` or `pnpm run build:prod` in pre-commit.
- No `pnpm run inventory:selectors` or `pnpm run consumer:scan` in pre-commit.
- No `pnpm run audit:consumers` in pre-commit, because it depends on sibling repositories.
- No package smoke, dist freshness, visual, accessibility, responsive, contrast, or publish workflow checks in pre-commit.
- No separate lint-staged JavaScript config file in this item.

## Compatibility Notes

- Package-level lint-staged object config appends matched staged file paths to commands.
- Current VDS audit scripts ignore extra positional arguments, so they are safe under the existing package-level config.
- Function-based lint-staged config could suppress appended filenames later if audit scripts become argument-sensitive.
- `@24vlh/vds/.husky/pre-commit` remains unchanged, so developer workflow continues to enter through `pnpm run lint-staged`.
- `prepare` remains `husky`; package dry-run and CI behavior remain deferred to workflow and release items.

## Future Work Contract

- `VDS-0270` must review docs indexing without relying on hook changes made here.
- `VDS-0310` must handle generated artifact freshness without adding blind full builds to pre-commit.
- `VDS-4010` may revisit aggregate audit expansion and decide whether additional checks belong in hooks.
- `VDS-4080` must handle package smoke outside pre-commit.
- `VDS-4100` must review publish workflow build and sanitization behavior.
- `VDS-5030` must handle final dist refresh and verification for release.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Build-script modernization plan: `@24vlh/vds/docs/planning/architecture/vds-build-script-modernization-plan.md`
- Audit-script modernization plan: `@24vlh/vds/docs/planning/architecture/vds-audit-script-modernization-plan.md`
- Source/dist policy: `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`
- Package metadata: `@24vlh/vds/package.json`
- Husky hook: `@24vlh/vds/.husky/pre-commit`
- Publish workflow: `@24vlh/vds/.github/workflows/npm-publish.yml`
