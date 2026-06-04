# VDS-0220 Dist and Source-of-Truth Policy

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0220`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0220-dist-and-source-of-truth-policy.md`

## 1. Goal

Define the VDS `src/` versus `dist/` contract before package/export or build tooling work continues. This item records that source CSS is the canonical authoring truth, `dist/` is checked-in generated publish output, and dist freshness must be validated by explicit approved release/tooling work rather than casual manual edits.

## 2. Scope

### In scope

- Record the source-of-truth policy for `src/` and `dist/`.
- Record current package-facing evidence for `dist`.
- Record current dist/build output shape without refreshing generated files.
- Define the manual-edit rule for generated `dist` files.
- Define how future source changes must record pending dist refresh work.
- Add a policy artifact for later package metadata, build tooling, generated artifact freshness, release verification, migration, and version-bump items.
- Update the master feature map so the library structure track continues to `VDS-0230`.

### Out of scope

- Source CSS changes, selector changes, token changes, package metadata changes, build script changes, README changes, docs demo changes, generated `dist`, workflow changes, or version changes.
- Running `pnpm run build` or `pnpm run build:prod`.
- Adding automated dist freshness tooling; this remains deferred to `VDS-0310`.
- Refreshing or verifying publish artifacts for release; this remains deferred to later release/build-output work, especially `VDS-5030`.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/pnpm-node/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/features/VDS-0210-source-module-architecture-audit.md`
  - `@24vlh/vds/docs/planning/architecture/vds-source-module-architecture-audit.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
- Repo files:
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/dist`
  - `@24vlh/vds/static/js/build.js`
  - `@24vlh/vds/package.json`
- Current audit results:
  - Existing aggregate audits remain the mechanical baseline.
  - `VDS-0210` records current source architecture and dist-facing assumptions.
- Legacy or consumer context reviewed:
  - Current package metadata points package consumers at `dist/vds.css` and publishes only `dist`.

## 4. Current Behavior Snapshot

- Source files:
  - `43` source CSS files total.
  - `33` component source CSS files.
  - `4` theme source CSS files.
- Dist files:
  - `80` checked-in dist CSS files.
  - Top-level bundle pairs: `vds`, `core`, and `identity`.
  - Component dist pairs are generated from `src/components/**/*.css`.
  - Theme dist pairs are generated from `src/themes/**/*.css`.
  - Source maps are not part of current checked-in dist output.
- Package metadata:
  - Current package version is `0.3.8`.
  - `main` and `style` point to `dist/vds.css`.
  - Package `files` currently includes only `dist`.
- Build behavior:
  - `static/js/build.js` removes and recreates `dist`.
  - It builds standard and minified top-level, component, and theme CSS outputs.
  - Source maps are opt-in through `VDS_BUILD_MAPS=1`, but current checked-in dist contains no maps.
- Known mismatches:
  - `dist/` is package-facing, but source CSS is the only safe authoring source.
  - Checked-in dist can drift from `src/` until a freshness checker exists.
  - Current `lint-staged` runs `pnpm run build`, which conflicts with the router guardrail and remains deferred to `VDS-0260`.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS implementation changes.
- Establish this policy:
  - `src/` is the canonical source of truth for authored VDS behavior.
  - `dist/` is checked-in generated distribution output used for package consumption.
  - `dist/` is not a manually edited behavioral source.
  - Theme and component dist files inherit their source-of-truth status from their matching `src` files.
- If an approved source change happens before an approved dist refresh item, the implementation log must record `dist refresh pending`.

### Build, audit, or package surface

- Add `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`.
- Do not change package scripts, package fields, build logic, dist files, or generated artifacts.
- Defer automated dist freshness checking to `VDS-0310`.
- Defer full dist refresh and final package verification to later release/build-output items, especially `VDS-5030`.
- Defer package metadata and export decisions to `VDS-0230`.
- Defer build script modernization to `VDS-0240`.
- Defer lint-staged/Husky build guardrail changes to `VDS-0260`.

### Documentation or demo surface

- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0220` and set `VDS-0230` as next.
- Do not change README, raw docs, docs shell, docs demos, or generated docs indexes in this item.

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None in this item.
- Breaking changes:
  - None in this item.
- Migration notes:
  - Future migration notes must distinguish source API changes from generated dist refreshes.
  - Any dist output removal, rename, or package-facing path change must be handled by a later approved package/release item.

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
  - Theme source files remain canonical; generated theme dist files remain package-facing output.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit`
  - `pnpm run audit:consumers`
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Source/dist inventory scan:
  - Read-only scan of source CSS counts, component/theme counts, checked-in dist CSS count, top-level output names, package `main`/`style`/`files`, and build script behavior.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, and policy artifact agree that `src/` is canonical and `dist/` is checked-in generated output.
  - Confirm the next recommended item is `VDS-0230`.
  - Confirm no source CSS, package metadata, build output, or version changes are included.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by defining generated artifact policy before package/export and build tooling work.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None in this item.
  - `dist/` remains checked in for now because current package metadata publishes only `dist`.
- Migration guide impact:
  - Later migration/release notes must describe any approved package-facing dist path, file, or export changes.

## 10. Risks

- Consumers currently depend on package metadata that points to `dist`, so stale generated output can affect real package usage.
- Dist can drift from source until `VDS-0310` introduces targeted freshness checking.
- Avoiding full builds in this environment means this item records policy and inventory, not generated-output equivalence.
- Future source edits must be disciplined about logging pending dist refresh work.

## 11. Open Questions

- What exact package fields and public import surfaces should ship for `1.0.0`? Deferred to `VDS-0230`.
- What build script changes are needed for fast, reliable, targeted dist checks? Deferred to `VDS-0240` and `VDS-0310`.
- Should lint-staged keep any generated-output behavior? Deferred to `VDS-0260`.
- When should final checked-in dist be refreshed? Deferred to later release/build-output items, especially `VDS-5030`.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added dist and source-of-truth policy artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0220` and set next recommended item to `VDS-0230`.
- `2026-05-23`: Ran/read a read-only source/dist inventory scan. Summary: `43` source CSS files; `33` component source CSS files; `4` theme source CSS files; `80` checked-in dist CSS files; top-level dist bundle pairs are `vds`, `core`, and `identity`; component dist pairs are generated from `src/components/**/*.css`; theme dist pairs are generated from `src/themes/**/*.css`; current checked-in dist contains no source maps; package `main` and `style` point to `dist/vds.css`; package `files` includes only `dist`; `static/js/build.js` removes and recreates `dist`.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - Read-only source/dist inventory scan completed.
  - VDS-0220 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0220-dist-and-source-of-truth-policy.md`
  - `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; package metadata and exports review continues in `VDS-0230`.
