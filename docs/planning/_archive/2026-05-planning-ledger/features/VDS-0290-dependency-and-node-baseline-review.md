# VDS-0290 Dependency and Node Baseline Review

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0290`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0290-dependency-and-node-baseline-review.md`

## 1. Goal

Create the dependency and Node baseline review for VDS before file naming, package, build, and release tooling work continues. This item records the current package dependency surface, lockfile state, local and CI runtime evidence, effective Node floor, and dependency update posture.

## 2. Scope

### In scope

- Record current package dependency and metadata evidence.
- Record current local and CI Node/pnpm runtime evidence.
- Record direct dependency roles, locked versions, and engine requirements.
- Record config-file presence or absence for Node, pnpm, PostCSS, and Browserslist.
- Add a dependency/runtime artifact for later dependency updates, Node baseline policy, package metadata, workflow review, package smoke, and release verification.
- Update the master feature map so the library structure track continues to `VDS-0300`.

### Out of scope

- Changing `package.json`, `pnpm-lock.yaml`, dependency versions, workflows, source CSS, generated `dist`, docs, generated reports, selectors, tokens, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running `pnpm run docs:vds:index`.
- Running write/regeneration commands such as `pnpm run inventory:selectors` or `pnpm run consumer:scan`.
- Running dependency write commands such as `pnpm install`, `pnpm update`, or lockfile refreshes.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/pnpm-node/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/architecture/vds-package-metadata-and-exports-review.md`
  - `@24vlh/vds/docs/planning/architecture/vds-build-script-modernization-plan.md`
  - `@24vlh/vds/docs/planning/architecture/vds-audit-script-modernization-plan.md`
  - `@24vlh/vds/docs/planning/architecture/vds-lint-staged-husky-policy-review.md`
  - `@24vlh/vds/docs/planning/architecture/vds-demo-server-doc-loader-review.md`
- Repo files:
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/pnpm-lock.yaml`
  - `@24vlh/vds/.npmrc`
  - `@24vlh/vds/.github/workflows/npm-publish.yml`
  - `@24vlh/vds/static/js/build.js`
  - `@24vlh/vds/static/js`
  - `@24vlh/vds/js`
- Current audit results:
  - `pnpm run audit` passes.
  - `pnpm run audit:consumers` passes.
  - `node --check` passes for `static/js/*.js`.
  - `node --check` passes for `js/*.js`.
- Legacy or consumer context reviewed:
  - No package consumers are changed by this planning item.

## 4. Current Behavior Snapshot

- Package identity:
  - Name: `@24vlh/vds`.
  - Version: `0.3.8`.
  - Package `main`: `dist/vds.css`.
  - Package `style`: `dist/vds.css`.
  - Package `files`: `dist`.
- Dependency surface:
  - Runtime `dependencies`: `0`.
  - Development `devDependencies`: `12`.
  - No `engines`, `packageManager`, `type`, `exports`, `publishConfig`, `sideEffects`, `homepage`, `bugs`, `types`, or `typings` field.
- Config files:
  - `.npmrc` exists and sets `registry=https://registry.npmjs.org/`.
  - No `.pnpmrc`, `pnpm-workspace.yaml`, `.nvmrc`, `.node-version`, `.tool-versions`, `postcss.config.*`, `.browserslistrc`, or Browserslist config file was found.
- Lockfile:
  - `pnpm-lock.yaml` uses `lockfileVersion: '9.0'`.
  - Lockfile settings are `autoInstallPeers: true` and `excludeLinksFromLockfile: false`.
  - Direct locked versions match the current package specifiers.
- Local runtime evidence:
  - Local Node: `v24.15.0`.
  - Local pnpm: `11.2.2`.
- CI runtime evidence:
  - Publish workflow build job uses `actions/setup-node@v4` with Node `20`.
  - Publish workflow build job uses `pnpm/action-setup@v4` with pnpm `9`.
  - Publish workflow publish job uses Node `24` because trusted publishing requires npm CLI `>=11.5.1`.
- Effective Node floor:
  - Direct/transitive dependency engine evidence currently makes the practical Node floor `>=20.19.0`.
  - The strongest direct dependency floor is `postcss-preset-env` with `>=20.19.0`.
  - The lockfile has `214` engine mentions; `76` of them are `>=20.19.0`.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token, theme, selector, or generated report changes.
- Keep browser/CSS feature support governed by `VDS-0050`; this item only records Node and package tooling runtime evidence.

### Build, audit, or package surface

- Add `@24vlh/vds/docs/planning/architecture/vds-dependency-node-baseline-review.md`.
- Do not change package metadata, dependency versions, lockfile entries, scripts, workflows, build tooling, generated output, or release version fields.
- Record direct dependency roles:
  - PostCSS build stack: `postcss-cli`, `postcss-import`, `postcss-preset-env`, `autoprefixer`, and `cssnano`.
  - Audit/generator stack: `postcss` and `glob`.
  - Docs runtime: `express`.
  - Hook tooling: `husky` and `lint-staged`.
  - Type metadata: `@types/node`, with no TypeScript build currently present.
  - Cleanup/legacy: `rimraf` is present but no current script/source usage was found.
- Record future-work routing:
  - package metadata edits remain deferred to later approved package/release work;
  - workflow runtime alignment remains deferred to `VDS-4100`;
  - generated artifact freshness remains deferred to `VDS-0310`;
  - package smoke and final release verification remain deferred to `VDS-4080`, `VDS-5030`, and `VDS-5060`.

### Documentation or demo surface

- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0290` and set `VDS-0300` as next.
- Do not change README, raw docs, docs shell, docs demos, generated docs indexes, or agents docs output in this item.

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None in this item.
- Breaking changes:
  - None in runtime CSS, package metadata, package import paths, dependency versions, lockfile entries, workflows, or generated output.
- Migration notes:
  - None for package consumers. Later Node/package metadata changes must state whether they affect contributors, CI, package consumers, or publish automation.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes.
- Semantics or ARIA:
  - No runtime behavior changes.
- Reduced motion:
  - No runtime behavior changes.
- Forced colors or contrast:
  - No runtime behavior changes.
- Mobile/adaptive behavior:
  - No runtime behavior changes.
- Theme coverage:
  - No runtime behavior changes.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit`
  - `pnpm run audit:consumers`
- Script syntax checks:
  - `node --check` for every `static/js/*.js` file.
  - `node --check` for every `js/*.js` file.
- Dependency baseline scan:
  - Record package metadata fields and dependency counts.
  - Record direct dependency roles and engine requirements.
  - Record lockfile version and direct locked versions.
  - Record local Node/pnpm versions.
  - Record CI Node/pnpm workflow versions.
  - Record Node, pnpm, PostCSS, and Browserslist config files present or absent.
  - Record usage evidence for each direct dev dependency.
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, and dependency/runtime artifact agree that no package metadata, dependency version, lockfile, workflow, generated output, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-0300`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting dependency and runtime baselines before package/tooling work.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later engine/package-manager metadata changes may need maintainer-facing notes.

## 10. Risks

- No explicit `engines` field means contributors can run unsupported Node versions until a later metadata policy is approved.
- No explicit `packageManager` field means pnpm version drift can continue between local development and CI.
- CI build uses Node `20` shorthand while current dependency evidence points to an effective `>=20.19.0` floor.
- Local pnpm `11.2.2` and CI pnpm `9` are drift evidence that needs a later policy decision.
- `@types/node` is on the `25.x` line while CI build runs on Node `20` and publish runs on Node `24`; there is no TypeScript build today, so this is alignment risk rather than runtime breakage.
- `rimraf` appears unused by current scripts/source and should be reviewed before release cleanup.
- Dependency updates can reshape PostCSS output or audit behavior and must be handled in later approved items with targeted validation.

## 11. Open Questions

- Should VDS commit an `engines.node` floor, and should it be `>=20.19.0` or a newer release line? Deferred to a later approved package/runtime policy item.
- Should VDS commit `packageManager` to pnpm `11.x`, align CI to pnpm `11`, or intentionally stay on pnpm `9` for release workflow stability? Deferred to workflow/package tooling work.
- Should unused or type-only dev dependencies be removed before `1.0.0`? Deferred to later approved dependency cleanup.
- Should PostCSS and Browserslist config be centralized? Deferred to build tooling modernization work.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added dependency/runtime review artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0290` and set next recommended item to `VDS-0300`.
- `2026-05-23`: Ran/read a read-only dependency baseline scan. Summary: package remains `@24vlh/vds@0.3.8`; package has `0` runtime dependencies and `12` dev dependencies; no `engines`, `packageManager`, `type`, PostCSS config, Browserslist config, pnpm workspace/config, or Node version file exists; `.npmrc` only sets the npm registry; `pnpm-lock.yaml` uses lockfile version `9.0`; local Node is `v24.15.0`; local pnpm is `11.2.2`; CI build uses Node `20` and pnpm `9`; CI publish uses Node `24`; current dependency engine evidence makes the practical Node floor `>=20.19.0`; `rimraf` has no current script/source usage found.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - `node --check` passed for all `static/js/*.js` files.
  - `node --check` passed for all `js/*.js` files.
  - Read-only dependency baseline scan completed.
  - VDS-0290 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0290-dependency-and-node-baseline-review.md`
  - `@24vlh/vds/docs/planning/architecture/vds-dependency-node-baseline-review.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; file naming and component alias policy continues in `VDS-0300`.
