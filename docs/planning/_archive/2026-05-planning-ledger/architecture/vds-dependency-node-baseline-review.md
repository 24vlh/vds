# VDS Dependency and Node Baseline Review

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-0290`

This file records the VDS dependency and Node baseline review for the library structure track. It is a planning artifact only: no `package.json`, `pnpm-lock.yaml`, dependency version, workflow, source CSS, generated `dist`, docs, generated report, selector, token, npm tag, or version field changes happen here.

## Policy Summary

- VDS currently has no runtime npm dependencies.
- All current npm packages are development/build/audit/docs tooling dependencies.
- `src/` remains the canonical authored CSS source and `dist/` remains checked-in generated package output.
- Current package metadata does not declare a Node engine or pnpm version.
- The current practical Node floor from dependency evidence is `>=20.19.0`, but no metadata change is made here.
- Dependency updates, dependency removals, engine/package-manager metadata, lockfile refreshes, and workflow runtime alignment require later approved items.

## Current Package Metadata

- Package name: `@24vlh/vds`.
- Current version: `0.3.8`.
- Package `main`: `dist/vds.css`.
- Package `style`: `dist/vds.css`.
- Package `files`: `dist`.
- Runtime dependencies: `0`.
- Development dependencies: `12`.
- Missing or deferred metadata:
  - no `engines`;
  - no `packageManager`;
  - no `type`;
  - no `exports`;
  - no `publishConfig`;
  - no `sideEffects`;
  - no `homepage`;
  - no `bugs`;
  - no `types` or `typings`.

## Current Config Surface

- Present:
  - `@24vlh/vds/.npmrc` sets `registry=https://registry.npmjs.org/`.
- Not present:
  - `.pnpmrc`;
  - `pnpm-workspace.yaml`;
  - `.nvmrc`;
  - `.node-version`;
  - `.tool-versions`;
  - `postcss.config.*`;
  - `.browserslistrc`;
  - Browserslist config.

## Current Lockfile Surface

- Lockfile: `@24vlh/vds/pnpm-lock.yaml`.
- Lockfile version: `9.0`.
- Lockfile settings:
  - `autoInstallPeers: true`;
  - `excludeLinksFromLockfile: false`.
- Direct locked versions:
  - `@types/node`: `25.3.0`;
  - `autoprefixer`: `10.4.24`;
  - `cssnano`: `7.1.2`;
  - `express`: `5.2.1`;
  - `glob`: `13.0.6`;
  - `husky`: `9.1.7`;
  - `lint-staged`: `16.2.7`;
  - `postcss`: `8.5.6`;
  - `postcss-cli`: `11.0.1`;
  - `postcss-import`: `16.1.1`;
  - `postcss-preset-env`: `11.2.0`;
  - `rimraf`: `6.1.3`.

## Current Runtime Evidence

- Local Node: `v24.15.0`.
- Local pnpm: `11.2.2`.
- Publish workflow build job:
  - `actions/setup-node@v4`;
  - Node `20`;
  - `pnpm/action-setup@v4`;
  - pnpm `9`;
  - install command: `pnpm install --frozen-lockfile`;
  - build command: `pnpm run build:prod`.
- Publish workflow publish job:
  - `actions/setup-node@v4`;
  - Node `24`;
  - npm publish from sanitized `publish` directory;
  - Node `24` is used because trusted publishing requires npm CLI `>=11.5.1`.

## Direct Dependency Roles

| Package | Current Role | Engine Evidence |
| --- | --- | --- |
| `@types/node` | Type metadata only; no TypeScript build currently exists. | none |
| `autoprefixer` | PostCSS build plugin used by `static/js/build.js`. | `^10 || ^12 || >=14` |
| `cssnano` | Minification plugin used by `static/js/build.js`. | `^18.12.0 || ^20.9.0 || >=22.0` |
| `express` | Local docs server dependency for `static/js/server.js`. | `>= 18` |
| `glob` | File discovery for build, audit, and generated report scripts. | `18 || 20 || >=22` |
| `husky` | Git hook launcher via `prepare` and `.husky/pre-commit`. | `>=18` |
| `lint-staged` | Staged-file router for pre-commit checks. | `>=20.17` |
| `postcss` | CSS parser/API used by audit and generated report scripts. | `^10 || ^12 || >=14` |
| `postcss-cli` | CLI binary invoked by `static/js/build.js`. | `>=18` |
| `postcss-import` | Import plugin used by the build pipeline. | `>=18.0.0` |
| `postcss-preset-env` | Modern CSS transform plugin used by the build pipeline. | `>=20.19.0` |
| `rimraf` | Present in dev dependencies; no current script/source usage found. | `20 || >=22` |

## Effective Node Floor

- Current direct dependency floor requiring the newest Node patch level: `postcss-preset-env` with `>=20.19.0`.
- Current transitive lockfile evidence:
  - total Node engine mentions: `214`;
  - most common requirement: `>=20.19.0` with `76` mentions.
- Treat `>=20.19.0` as the current practical floor for tooling until a later approved metadata item makes an explicit support decision.
- Do not infer browser support from Node support. Browser support remains governed by `VDS-0050`.

## Current Risks

- No `engines.node` field means local development can run on unsupported Node versions without a package-level warning.
- No `packageManager` field means pnpm version drift can continue between local development and CI.
- CI build uses Node `20` shorthand, while current dependency evidence specifically requires at least `20.19.0`.
- Local pnpm `11.2.2` and CI pnpm `9` are intentionally recorded as drift, not corrected here.
- `@types/node@25.3.0` is ahead of both the CI build Node line and publish Node line; because there is no TypeScript build, this is an alignment risk rather than a current runtime failure.
- `rimraf` may be stale dependency surface because no current script/source usage was found.
- Dependency updates can change PostCSS output, audit behavior, lint-staged behavior, or docs server behavior and must be reviewed with targeted validation.

## Future Work Contract

- `VDS-0300` continues with file naming and component alias policy; it should not depend on dependency changes.
- `VDS-0310` must handle generated artifact freshness without requiring dependency updates.
- Build tooling work must decide whether to centralize PostCSS/Browserslist configuration before release.
- Package/release work must decide whether to add `engines`, `packageManager`, `sideEffects`, `publishConfig`, or related metadata.
- `VDS-4080` must include package smoke scenarios under the approved Node/pnpm baseline.
- `VDS-4100` must review workflow Node and pnpm versions, including the Node `20` build job and Node `24` publish job.
- `VDS-5030` and `VDS-5060` must use final dependency/runtime evidence before dist refresh, release candidate checks, and publish.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Package surface review: `@24vlh/vds/docs/planning/architecture/vds-package-metadata-and-exports-review.md`
- Build-script modernization plan: `@24vlh/vds/docs/planning/architecture/vds-build-script-modernization-plan.md`
- Audit-script modernization plan: `@24vlh/vds/docs/planning/architecture/vds-audit-script-modernization-plan.md`
- Lint-staged and Husky policy review: `@24vlh/vds/docs/planning/architecture/vds-lint-staged-husky-policy-review.md`
- Demo server and doc loader review: `@24vlh/vds/docs/planning/architecture/vds-demo-server-doc-loader-review.md`
- Package metadata: `@24vlh/vds/package.json`
- Lockfile: `@24vlh/vds/pnpm-lock.yaml`
- Registry config: `@24vlh/vds/.npmrc`
- Publish workflow: `@24vlh/vds/.github/workflows/npm-publish.yml`
- Build script: `@24vlh/vds/static/js/build.js`
