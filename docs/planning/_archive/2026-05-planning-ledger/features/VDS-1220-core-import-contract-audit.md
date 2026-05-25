# VDS-1220 Core Import Contract Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-1220`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1220-core-import-contract-audit.md`

## 1. Goal

Create the core/full-bundle import contract audit for the `VDS-0400 Base, Layout, Utilities, and Global CSS` track. This item records what `core.css`, `index.css`, `vds.css`, standalone component files, themes, identity, and docs-shell loading mean today before layout/utilities work continues.

## 2. Scope

### In scope

- Record `src/core.css` and `src/index.css` import roles and import lists.
- Record source CSS counts, top-level source files, component source files, theme source files, and files containing `@import`.
- Record current dist/package-facing surfaces for `vds`, `core`, `identity`, standalone component files, and themes.
- Record docs-shell CSS loading order and how it differs from bundle import behavior.
- Record README/package/docs mismatches that affect the import contract.
- Record current consumer evidence from earlier compatibility reports.
- Add a foundation import-contract artifact for later layout, utilities, docs rewrite, package exports, standalone component dependency policy, migration notes, and release verification.
- Update the master feature map so `VDS-1220` is done and the next recommended item is `VDS-1230`.

### Out of scope

- Changing CSS imports, selectors, tokens, raw docs, README, docs shell HTML, generated `dist`, package metadata, package scripts, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing README examples, docs shell order, theme loading guidance, package metadata, standalone component dependency policy, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/foundation/vds-base-layer-audit.md`
  - `@24vlh/vds/docs/planning/architecture/vds-source-module-architecture-audit.md`
  - `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`
  - `@24vlh/vds/docs/planning/architecture/vds-package-metadata-and-exports-review.md`
  - `@24vlh/vds/docs/planning/architecture/vds-build-script-modernization-plan.md`
  - `@24vlh/vds/docs/planning/api/vds-consumer-compatibility.md`
- Repo files:
  - `@24vlh/vds/src/core.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/identity.css`
  - `@24vlh/vds/src/base.css`
  - `@24vlh/vds/src/layout.css`
  - `@24vlh/vds/src/primitives.css`
  - `@24vlh/vds/static/js/build.js`
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/README.md`
  - `@24vlh/vds/index.html`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

- Source/import evidence:
  - `43` source CSS files exist: `6` top-level files, `33` component files, and `4` theme files.
  - Top-level source CSS files are `base.css`, `core.css`, `identity.css`, `index.css`, `layout.css`, and `primitives.css`.
  - Only `src/index.css` and `src/core.css` contain `@import`.
  - `src/core.css` imports `3` files: `primitives.css`, `base.css`, and `layout.css`.
  - `src/index.css` imports `36` files: those same `3` foundations plus all `33` component CSS files.
  - `src/index.css` imports `components/utilities.css` as part of the full component bundle.
  - `src/index.css` does not import themes or identity.
  - `src/core.css` does not import utilities, themes, identity, or components.
- Dist/package evidence:
  - `static/js/build.js` builds `src/index.css` to `dist/vds.css`, `src/core.css` to `dist/core.css`, and `src/identity.css` to `dist/identity.css`.
  - Checked-in `dist` has `80` CSS files.
  - Top-level dist bundle pairs are `vds`, `core`, and `identity`.
  - Package `main` and `style` point to `dist/vds.css`.
  - Package `files` includes only `dist`.
  - Existing package-facing direct `dist` paths remain compatibility-sensitive.
- Docs-shell evidence:
  - `index.html` loads `43` CSS links.
  - Docs shell loads all four source theme files.
  - Theme CSS links appear before `src/base.css` in the docs shell.
  - `src/identity.css` is loaded as a separate docs-shell stylesheet.
  - Docs-shell order differs from source bundle import behavior and is recorded as documentation/runtime evidence, not an approved change.
- README/docs mismatch evidence:
  - README says full framework load includes themes, while `src/index.css` and `dist/vds.css` do not include themes.
  - README source-consumption wording says foundation order includes utilities, while `src/core.css` does not include utilities.
  - README component examples mention stale paths such as `button.css` and `card.css`.
  - README examples use `vds/dist/...` instead of the current package identity `@24vlh/vds/dist/...`.
  - README says all outputs include source maps, while current checked-in `dist` has no maps.
- Consumer evidence:
  - `@24vlh/keep-exec` loads `@24vlh/vds/dist/vds.css` plus `@24vlh/vds/dist/themes/graphite.css`.
  - `@24vlh/vlah.io` uses vendored VDS CSS assets rather than package imports.

## 5. Proposed Architecture or Change

### Import contract

- No source CSS, import, selector, token, raw-doc, package, or generated-output changes.
- Treat `src/core.css` as the foundation bundle: `primitives.css`, `base.css`, and `layout.css` only.
- Treat `src/index.css` as the full component bundle: core foundations plus all `33` component CSS files, including `utilities.css`.
- Treat themes as separate top-level load surfaces; they are not imported by `src/index.css` or `src/core.css`.
- Treat `src/identity.css` as a separate top-level identity surface; it is not imported by `src/index.css` or `src/core.css`.
- Treat standalone component dist files as package-facing compatibility surfaces, while leaving their dependency assumptions unchanged in this item.

### Build, audit, or package surface

- Do not change build scripts, package scripts, package metadata, generated reports, generated `dist`, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that generated output remains fresh and unchanged.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/foundation/vds-core-import-contract-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1220` and set next recommended item to `VDS-1230`.
- Do not change README, raw docs, docs shell, docs demos, generated docs indexes, or agents docs output in this item.

## 6. Component API and Compatibility Impact

- Existing selectors preserved:
  - All runtime selectors remain unchanged.
- New selectors:
  - None.
- Deprecated selectors:
  - None in this item.
- Breaking changes:
  - None in CSS imports, selectors, tokens, package paths, raw docs, generated `dist`, workflows, selector inventory, consumer reports, or package version fields.
- Migration notes:
  - None for package consumers in this item. Later import-order, package-export, theme-loading, standalone-component, or docs guidance changes may need migration notes.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future bundle/import changes must preserve the base focus contract from `VDS-1210`.
- Semantics or ARIA:
  - No runtime behavior changes. Import guidance must not imply JavaScript-driven accessibility behavior that CSS cannot provide.
- Reduced motion:
  - No runtime behavior changes. `core.css` currently includes the base reduced-motion safety net through `base.css`.
- Forced colors or contrast:
  - No runtime behavior changes. `core.css` currently includes the base forced-colors baseline through `base.css`.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Future layout/import work must coordinate with `VDS-0070`.
- Theme coverage:
  - No theme values or load behavior change. Themes remain separate load surfaces.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:dist`
  - `pnpm run audit:consumers`
- Import-contract scan:
  - Record source CSS counts and top-level files.
  - Record `core.css` and `index.css` import lists.
  - Record files containing `@import`.
  - Record top-level dist outputs and package-facing paths.
  - Record docs-shell CSS order.
  - Record README/docs mismatch evidence.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only. If it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Planning sanity checks:
  - Confirm master map, feature plan, and import-contract artifact agree that no CSS imports, docs, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1230`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting the foundation/full-bundle import contract.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later import/package/docs changes may require migration notes.

## 10. Risks

- README currently implies the full framework load includes themes, while `src/index.css` and `dist/vds.css` do not include themes.
- README source-consumption wording names utilities in the foundation order, while `src/core.css` does not import utilities.
- Docs shell loads themes before `src/base.css`, which differs from source bundle import behavior.
- Standalone component dist files are package-facing but their foundation/theme dependency assumptions are not yet formalized.
- Any future import-order change can affect cascade, component defaults, utilities, and theme token availability.
- Package `main` and `style` point only to `dist/vds.css`, while direct `dist` subpaths remain compatibility-sensitive.

## 11. Open Questions

- Should README define the full bundle as "components only, themes separate" or should package output change later? Deferred to docs/package/release work.
- Should `core.css` ever include `utilities.css`? Deferred to later approved package/import work.
- Should standalone component files declare dependency expectations in docs, package metadata, or generated checks? Deferred to later component/package work.
- Should docs shell CSS order be aligned with source bundle order? Deferred to later docs runtime/docs rewrite work.

## 12. Approval

- Requested on: `2026-05-24`
- Approved by: user
- Approved on: `2026-05-24`

## 13. Implementation Log

- `2026-05-24`: Created this plan file.
- `2026-05-24`: Added core import contract audit artifact.
- `2026-05-24`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1220` and set next recommended item to `VDS-1230`.
- `2026-05-24`: Ran/read a read-only import-contract scan. Summary: `43` source CSS files; `6` top-level source CSS files; `33` component source files; `4` theme source files; only `src/index.css` and `src/core.css` contain `@import`; `src/core.css` imports `3` foundation files; `src/index.css` imports `36` files; themes and identity are separate; `dist` has `80` CSS files; package `main` and `style` point to `dist/vds.css`; docs shell loads `43` CSS links and all four themes before `src/base.css`; README/package/docs mismatches are recorded.

## 14. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed: generated artifacts are fresh with `80` CSS files checked.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-1220` forbids write/regeneration commands.
  - Read-only import-contract scan completed.
  - VDS-1220 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1220-core-import-contract-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-core-import-contract-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None planned; layout system audit continues in `VDS-1230`.
