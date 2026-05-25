# VDS-1230 Layout System Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-1230`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1230-layout-system-audit.md`

## 1. Goal

Create the layout-system audit for the `VDS-0400 Base, Layout, Utilities, and Global CSS` track. This item records the current `src/layout.css` contract: page frame, content regions, containers, section spacing helpers, structural grids, sidebar/split layouts, responsive collapse behavior, docs coverage, and risks before section/utilities work continues.

## 2. Scope

### In scope

- Record `src/layout.css` line, token, reference, selector, media-query, declaration, and class-inventory evidence.
- Record the layout contract for page frame selectors, content regions, containers, full/bleed helpers, section spacing helpers, structural grids, sidebar layouts, and split layouts.
- Record responsive collapse behavior at `768px` and `1024px`.
- Record raw-doc coverage and generated docs metadata gaps.
- Record source/doc coverage gaps for safe-area and overflow behavior.
- Add a layout-system audit artifact for later section-system work, utilities taxonomy, responsive QA, docs rewrite, import/package guidance, migration notes, and release verification.
- Update the master feature map so `VDS-1230` is done and the next recommended item is `VDS-1240`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing layout CSS, docs examples, generated docs metadata, responsive screenshots, selector classification, package/import guidance, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/foundation/vds-base-layer-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-core-import-contract-audit.md`
  - `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`
  - `@24vlh/vds/docs/planning/tokens/vds-spacing-layout-rhythm-audit.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-layout.json`
- Repo files:
  - `@24vlh/vds/src/layout.css`
  - `@24vlh/vds/src/core.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/base.css`
  - `@24vlh/vds/src/primitives.css`
  - `@24vlh/vds/doc-raw/vds-layout.doc.html`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

- `src/layout.css` evidence:
  - `255` lines.
  - `0` custom property definitions and `31` `var(...)` references.
  - `44` non-at-rule selector blocks in the current read-only scan.
  - `5` media query blocks: four `max-width: 768px` blocks and one `max-width: 1024px` block.
  - Referenced tokens include content widths, `gap-lg`, `grid-min`, section spacing tokens, `sidebar-width-md`, `space-3`, `space-4`, `z-base`, and `z-header`.
- Declaration evidence:
  - `display: grid`: `9`.
  - `grid-template-columns`: `12`.
  - `gap`: `9`.
  - `width`: `22`.
  - `max-width`: `10`.
  - `padding-inline`: `7`.
  - `padding-block`: `6`.
  - `order`: `6`.
  - `position`: `2`.
  - `z-index`: `2`.
- Selector/API evidence:
  - Selector inventory finds `29` layout-defined classes.
  - `19` layout-defined classes are `public`.
  - `10` layout-defined classes are `candidate-public`.
  - Public/candidate surfaces include `.page-*`, `.content-*`, `.container*`, `.full-bleed`, `.section-*`, `.layout-grid-*`, `.sidebar-layout*`, `.split`, and `.split-reverse`.
- Docs evidence:
  - `doc-raw/vds-layout.doc.html` has `797` lines.
  - Raw docs strongly cover containers, grids, sidebar layouts, split layouts, semantic order guidance, and breakpoint behavior.
  - Generated `@24vlh/agents/docs_vds/components/vds-layout.json` currently has empty `source_css`.
  - Raw docs mention `safe-area` `0` times.
  - Raw docs mention overflow `1` time.
  - `src/layout.css` has no `env()` usage and no overflow declarations.

## 5. Proposed Architecture or Change

### Layout contract

- No source CSS, selector, token, raw-doc, package, selector-inventory, consumer-report, or generated-output changes.
- Treat `src/layout.css` as part of both `core.css` and `index.css`, per `VDS-1220`.
- Treat `src/layout.css` as owner of page frame selectors, reusable content regions, max-width containers, full/bleed helpers, section spacing helpers, structural grids, sidebar layouts, and split layouts.
- Treat `src/layout.css` as not owning atomic utilities, section component variants, component-local layout, themes, identity, or docs-shell runtime behavior.
- Treat layout classes and responsive collapse behavior as compatibility-sensitive until a later approved cleanup or migration item says otherwise.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/foundation/vds-layout-system-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1230` and set next recommended item to `VDS-1240`.
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
  - None for package consumers in this item. Later layout selector, collapse behavior, section-helper, container, sidebar, split, or docs guidance changes may need migration notes.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future layout changes must preserve semantic DOM order and keyboard order, especially for `.sidebar-layout-right` and `.split-reverse`.
- Semantics or ARIA:
  - No runtime behavior changes. Layout CSS does not provide JavaScript-driven accessibility behavior.
- Reduced motion:
  - No runtime behavior changes. Layout currently has no motion behavior.
- Forced colors or contrast:
  - No runtime behavior changes. Future layout surface changes must coordinate with theme and contrast work.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Future work must validate against the viewport matrix from `VDS-0070`.
  - Current layout collapse rules use `768px` for containers, grids, section bleed, and splits, and `1024px` for sidebars.
- Theme coverage:
  - No theme values change. Layout consumes token values supplied by primitives and active themes where applicable.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:dist`
  - `pnpm run audit:consumers`
- Layout-system scan:
  - Record line, token, reference, selector, media-query, declaration, and class-inventory counts.
  - Record page frame, content region, container, section spacing, grid, sidebar, split, breakpoint, order, overflow, and safe-area evidence.
  - Record raw-doc coverage and generated docs metadata gaps.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only. If it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Planning sanity checks:
  - Confirm master map, feature plan, and layout artifact agree that no CSS, docs, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1240`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting the layout-system contract.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later layout behavior changes may require migration notes.

## 10. Risks

- `.section-*` helpers in `layout.css` overlap conceptually with `.section--*` variants in `sections.css`.
- `.sidebar-layout-right` and `.split-reverse` use CSS `order`; future changes must preserve semantic DOM guidance.
- `.container-relaxed` uses hard-coded `90ch`, which must be classified before token cleanup.
- Layout classes are compatibility-sensitive because `layout.css` ships in both `core.css` and `vds.css`.
- Generated docs metadata for `vds-layout` currently has empty `source_css`, so docs index metadata is not authoritative for layout ownership.
- Safe-area and overflow expectations exist in the responsive baseline, but `layout.css` and `vds-layout` docs do not currently cover them deeply.

## 11. Open Questions

- Should `.section-*` helpers remain in layout or move closer to section component ownership? Deferred to `VDS-1240`.
- Should `.container-relaxed` use a primitive token instead of `90ch`? Deferred to later token/layout cleanup.
- Should CSS `order` usage remain in right/reverse layout helpers? Deferred to later accessibility/responsive cleanup.
- Should generated docs metadata include `src/layout.css` for `vds-layout`? Deferred to docs index/docs rewrite work.

## 12. Approval

- Requested on: `2026-05-24`
- Approved by: user
- Approved on: `2026-05-24`

## 13. Implementation Log

- `2026-05-24`: Created this plan file.
- `2026-05-24`: Added layout-system audit artifact.
- `2026-05-24`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1230` and set next recommended item to `VDS-1240`.
- `2026-05-24`: Ran/read a read-only layout-system scan. Summary: `src/layout.css` has `255` lines; `0` custom property definitions; `31` `var(...)` references; `44` selector blocks; `5` media queries; selector inventory finds `29` layout-defined classes with `19` public and `10` candidate-public; docs have `797` lines; generated docs metadata has empty `source_css`; safe-area coverage is absent and overflow coverage is thin.

## 14. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed: generated artifacts are fresh with `80` CSS files checked.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-1230` forbids write/regeneration commands.
  - Read-only layout-system scan completed.
  - VDS-1230 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1230-layout-system-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-layout-system-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None planned; section system audit continues in `VDS-1240`.
