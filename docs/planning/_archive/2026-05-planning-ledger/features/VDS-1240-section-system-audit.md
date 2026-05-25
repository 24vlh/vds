# VDS-1240 Section System Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-1240`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1240-section-system-audit.md`

## 1. Goal

Create the section-system audit for the `VDS-0400 Base, Layout, Utilities, and Global CSS` track. This item records the current `src/components/sections.css` contract: section bands, inner rhythm, density variants, section headers, surfaces, split/reverse layouts, grids, stacks, lists, responsive behavior, docs coverage, and overlap with `layout.css`.

## 2. Scope

### In scope

- Record `src/components/sections.css` line, token, reference, selector, media-query, declaration, and class-inventory evidence.
- Record the section contract for `.section`, `.section--*`, and `.section__*` component surfaces.
- Record responsive behavior at `1280px`, `1024px`, and `768px`.
- Record the ownership overlap between `layout.css` section helpers and `sections.css` section component selectors.
- Record raw-doc coverage and generated docs metadata gaps.
- Record source/doc coverage gaps for safe-area and overflow behavior.
- Add a section-system audit artifact for later section cleanup, utilities taxonomy, responsive QA, docs rewrite, import/package guidance, migration notes, and release verification.
- Update the master feature map so `VDS-1240` is done and the next recommended item is `VDS-1250`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing section CSS, docs examples, generated docs metadata, responsive screenshots, selector classification, package/import guidance, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/foundation/vds-layout-system-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-core-import-contract-audit.md`
  - `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`
  - `@24vlh/vds/docs/planning/tokens/vds-spacing-layout-rhythm-audit.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-sections.json`
- Repo files:
  - `@24vlh/vds/src/components/sections.css`
  - `@24vlh/vds/src/layout.css`
  - `@24vlh/vds/src/core.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/doc-raw/vds-sections.doc.html`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

- `src/components/sections.css` evidence:
  - `575` lines.
  - `63` custom property definitions and `117` `var(...)` references.
  - `6` unique local custom property names: `section-pad-top`, `section-pad-bottom`, `section-inner-max`, `section-inner-pad`, `section-inner-gap`, and `surface`.
  - `100` non-at-rule selector blocks in the current read-only scan.
  - `3` media query blocks: `max-width: 1280px`, `max-width: 1024px`, and `max-width: 768px`.
- Declaration evidence:
  - `display: grid`: `3`.
  - `display: flex`: `10`.
  - `grid-template-columns`: `12`.
  - `gap`: `22`.
  - `background-color`: `7`.
  - `color`: `13`.
  - `order`: `4`.
  - `overflow`: `0`.
  - `env()`: `0`.
  - `!important`: `0`.
- Selector/API evidence:
  - Selector inventory finds `75` section-defined classes.
  - `59` section-defined classes are `public`.
  - `16` section-defined classes are `candidate-public`.
  - Selector groups include `47` modifiers, `27` elements, `9` grid classes, `3` stack classes, `4` inline classes, and `4` list classes.
- Docs evidence:
  - `doc-raw/vds-sections.doc.html` has `1395` lines.
  - Raw docs cover legacy A/B/C density, XS-XL rhythm, split/reverse behavior, grids, stacks, insets, surfaces, semantic guidance, ARIA naming, and contrast reminders.
  - Generated `@24vlh/agents/docs_vds/components/vds-sections.json` currently has empty `source_css`.
  - Raw docs mention safe-area `0` times.
  - Raw docs mention overflow `0` times.
  - `src/components/sections.css` has no `env()` usage and no overflow declarations.
- Import/ownership evidence:
  - `src/core.css` imports `layout.css` and does not import `sections.css`.
  - `src/index.css` imports `layout.css` before `components/sections.css`.
  - `layout.css` and `sections.css` both define `.section`.
  - In `core.css`, consumers get the layout section helper surface only.
  - In `index.css` and generated `vds.css`, `components/sections.css` loads after `layout.css` and provides the richer section component surface.

## 5. Proposed Architecture or Change

### Section contract

- No source CSS, selector, token, raw-doc, package, selector-inventory, consumer-report, or generated-output changes.
- Treat `src/components/sections.css` as a component file in `index.css` and standalone component dist output, not as part of `core.css`.
- Treat `sections.css` as owner of `.section`, `.section--*`, and `.section__*` section component surfaces.
- Treat `sections.css` as not owning foundation layout helpers, atomic utilities, themes, identity, or docs-shell runtime behavior.
- Treat section selectors, density variants, local custom properties, and responsive behavior as compatibility-sensitive until a later approved cleanup or migration item says otherwise.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/foundation/vds-section-system-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1240` and set next recommended item to `VDS-1250`.
- Do not change README, raw docs, docs shell, docs demos, generated docs indexes, or agents docs output in this item.

## 6. Component API and Compatibility Impact

- Existing selectors preserved:
  - All runtime selectors remain unchanged.
- New selectors:
  - None.
- Deprecated selectors:
  - None in this item.
- Breaking changes:
  - None in CSS, selectors, tokens, custom property names, raw docs, generated `dist`, package fields, workflows, selector inventory, consumer reports, or package version fields.
- Migration notes:
  - None for package consumers in this item. Later section selector, density, split/reverse, responsive, import/ownership, or docs guidance changes may need migration notes.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future section changes must preserve semantic DOM and keyboard order, especially for `.section--split-reverse`.
- Semantics or ARIA:
  - No runtime behavior changes. Section CSS remains visual; docs already remind that semantics come from HTML and ARIA naming from consumer markup.
- Reduced motion:
  - No runtime behavior changes. Section surface hover transition remains audit evidence only.
- Forced colors or contrast:
  - No runtime behavior changes. Future surface, subtle, brand, alt, and inset changes must coordinate with theme contrast work.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Future work must validate against the viewport matrix from `VDS-0070`.
  - Current section responsive behavior uses `1280px`, `1024px`, and `768px` breakpoints.
- Theme coverage:
  - No theme values change. Sections consume active theme tokens for text, borders, backgrounds, surfaces, and accent color.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:dist`
  - `pnpm run audit:consumers`
- Section-system scan:
  - Record line, token, reference, selector, media-query, declaration, and class-inventory counts.
  - Record base section, modifiers, elements, grid, stack, inline, list, split/reverse, inset, surface, breakpoint, order, overflow, and safe-area evidence.
  - Record raw-doc coverage and generated docs metadata gaps.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only. If it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Planning sanity checks:
  - Confirm master map, feature plan, and section artifact agree that no CSS, docs, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1250`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting the section-system contract.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later section behavior changes may require migration notes.

## 10. Risks

- `.section` ownership differs between `core.css` and `vds.css`.
- Legacy `.section--a`, `.section--b`, and `.section--c` densities coexist with `.section--xs`, `.section--sm`, `.section--md`, `.section--lg`, and `.section--xl`.
- `.section--split-reverse` uses CSS `order`; future changes must preserve semantic DOM guidance.
- `.section--relaxed` uses hard-coded `90ch`, which must be classified before token cleanup.
- Section grids and layout grids overlap conceptually but are different public surfaces.
- Generated docs metadata for `vds-sections` currently has empty `source_css`, so docs index metadata is not authoritative for section ownership.
- Safe-area and overflow expectations exist in the responsive baseline, but `sections.css` and `vds-sections` docs do not currently cover them.

## 11. Open Questions

- Should `.section` stay duplicated between layout and sections, or should ownership split be clarified through docs/package guidance only? Deferred to later cleanup work.
- Should legacy `.section--a/b/c` remain indefinitely or become documented legacy-compatible aliases? Deferred to migration planning.
- Should `.section--relaxed` use a primitive token instead of `90ch`? Deferred to later token/layout cleanup.
- Should generated docs metadata include `src/components/sections.css` for `vds-sections`? Deferred to docs index/docs rewrite work.

## 12. Approval

- Requested on: `2026-05-24`
- Approved by: user
- Approved on: `2026-05-24`

## 13. Implementation Log

- `2026-05-24`: Created this plan file.
- `2026-05-24`: Added section-system audit artifact.
- `2026-05-24`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1240` and set next recommended item to `VDS-1250`.
- `2026-05-24`: Ran/read a read-only section-system scan. Summary: `src/components/sections.css` has `575` lines; `63` custom property definitions; `6` unique local custom property names; `117` `var(...)` references; `100` selector blocks; `3` media queries; selector inventory finds `75` section-defined classes with `59` public and `16` candidate-public; docs have `1395` lines; generated docs metadata has empty `source_css`; safe-area and overflow coverage are absent.

## 14. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed: generated artifacts are fresh with `80` CSS files checked.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-1240` forbids write/regeneration commands.
  - Read-only section-system scan completed.
  - VDS-1240 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1240-section-system-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-section-system-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None planned; utilities taxonomy and pruning continues in `VDS-1250`.
