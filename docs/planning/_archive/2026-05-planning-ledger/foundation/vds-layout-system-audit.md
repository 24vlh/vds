# VDS Layout System Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-1230`

This file records the layout-system audit for the base, layout, utilities, and global CSS track. It is a planning artifact only: no CSS, raw docs, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/layout.css` is part of both `@24vlh/vds/src/core.css` and `@24vlh/vds/src/index.css`.
- `layout.css` owns page frame selectors, reusable content regions, max-width containers, full/bleed helpers, section spacing helpers, structural grids, sidebar layouts, and split layouts.
- `layout.css` does not own atomic utilities, section component variants, component-local layout, themes, identity, or docs-shell runtime behavior.
- Existing layout selectors and responsive collapse behavior remain compatibility-sensitive until a later approved cleanup or migration item says otherwise.
- Any future source CSS change that touches layout while generated output is out of scope must record `dist refresh pending`.

## Source Evidence

`@24vlh/vds/src/layout.css` currently has:

- Lines: `255`.
- Custom property definitions: `0`.
- `var(...)` references: `31`.
- Unique referenced tokens: `16`.
- Non-at-rule selector blocks in the read-only scan: `44`.
- Media query blocks: `5`.

Referenced token groups:

- Content width tokens: `--content-width-md`, `--content-width-lg`, `--content-width-xl`, and `--content-width-2xl`.
- Spacing and gap tokens: `--space-3`, `--space-4`, and `--gap-lg`.
- Layout sizing tokens: `--grid-min` and `--sidebar-width-md`.
- Section spacing tokens: `--section-spacing-xs`, `--section-spacing-sm`, `--section-spacing-md`, `--section-spacing-lg`, and `--section-spacing-xl`.
- Stack tokens: `--z-header` and `--z-base`.

Declaration evidence:

| Declaration | Count |
| --- | ---: |
| `display: grid` | `9` |
| `grid-template-columns` | `12` |
| `gap` | `9` |
| `width` | `22` |
| `max-width` | `10` |
| `padding-inline` | `7` |
| `padding-block` | `6` |
| `order` | `6` |
| `position` | `2` |
| `z-index` | `2` |

## Layout Surface Contract

Page frame:

- `header.page-header`
- `main.page-content`
- `footer.page-footer`

Content regions:

- `.content-header`
- `.content-body`
- `.content-footer`

Containers and bleed helpers:

- `.container`
- `.container-wide`
- `.container-narrow`
- `.container-tight`
- `.container-relaxed`
- `.full-bleed`
- `.section-bleed`

Section spacing helpers:

- `.section-none`
- `.section-xs`
- `.section-sm`
- `.section`
- `.section-lg`
- `.section-xl`

Structural grids:

- `.layout-grid-auto`
- `.layout-grid-2`
- `.layout-grid-3`
- `.layout-grid-4`
- `.layout-grid-5`
- `.layout-grid-6`

High-level layouts:

- `.sidebar-layout`
- `.sidebar-layout-right`
- `.split`
- `.split-reverse`

These selectors are runtime API surfaces. They must not be renamed, removed, merged, or deprecated without selector inventory evidence, consumer risk review, migration notes, and later approved cleanup work.

## Responsive Behavior Evidence

Current layout media queries:

- `max-width: 768px`: reduces container padding from `--space-4` to `--space-3`.
- `max-width: 768px`: adjusts `.section-bleed` negative inline margin from `--space-4` to `--space-3`.
- `max-width: 768px`: collapses `.layout-grid-2` through `.layout-grid-6` to one column.
- `max-width: 1024px`: collapses `.sidebar-layout` and `.sidebar-layout-right` to one column and resets child order.
- `max-width: 768px`: collapses `.split` and `.split-reverse` to one column and resets child order.

Responsive conclusions:

- Layout uses fixed breakpoint values rather than breakpoint tokens.
- Sidebar layouts collapse earlier than grids and split layouts.
- Right/reverse helpers use CSS `order` on wide layouts and reset order at collapse breakpoints.
- Safe-area behavior is not present in `layout.css`.
- Overflow behavior is not directly owned by `layout.css`.

## Selector Inventory Evidence

Selector inventory currently finds `29` layout-defined classes:

- `19` are `public`.
- `10` are `candidate-public`.

Public classes:

- `.container`
- `.container-relaxed`
- `.container-wide`
- `.content-body`
- `.content-footer`
- `.content-header`
- `.full-bleed`
- `.layout-grid-3`
- `.page-content`
- `.page-footer`
- `.page-header`
- `.section`
- `.section-bleed`
- `.section-lg`
- `.section-xl`
- `.section-xs`
- `.sidebar-layout`
- `.split`
- `.split-reverse`

Candidate-public classes:

- `.container-narrow`
- `.container-tight`
- `.layout-grid-auto`
- `.layout-grid-2`
- `.layout-grid-4`
- `.layout-grid-5`
- `.layout-grid-6`
- `.section-none`
- `.section-sm`
- `.sidebar-layout-right`

Candidate-public is conservative. These selectors remain protected until a later approved selector reclassification, deprecation, or migration item says otherwise.

## Docs Evidence

`@24vlh/vds/doc-raw/vds-layout.doc.html` currently has:

- Lines: `797`.
- Container mentions: `52`.
- Grid mentions: `72`.
- Sidebar mentions: `20`.
- Split mentions: `26`.
- Overflow mentions: `1`.
- Safe-area mentions: `0`.
- Media or `@media` mentions: `6`.
- Breakpoint mentions: `3`.
- Semantic mentions: `11`.
- Order mentions: `12`.

The raw docs cover:

- Layout layer responsibilities.
- Page frame and content region primitives.
- Max-width containers and readable line lengths.
- Full-bleed and section-bleed helpers.
- Section spacing helpers.
- Structural grids.
- Sidebar and split layouts.
- Semantic DOM order guidance.
- Breakpoint/collapse guidance.

Docs/source metadata gap:

- `@24vlh/agents/docs_vds/components/vds-layout.json` currently has empty `source_css`.
- Repo truth for this audit is that `vds-layout` maps to `@24vlh/vds/src/layout.css`.
- Generated docs metadata should not be treated as authoritative for layout ownership until a later docs index item refreshes or fixes it.

## Current Risks

- `.section-*` helpers in `layout.css` overlap conceptually with `.section--*` variants in `@24vlh/vds/src/components/sections.css`.
- `.sidebar-layout-right` and `.split-reverse` use CSS `order`; future changes must preserve semantic DOM guidance and keyboard order.
- `.container-relaxed` uses hard-coded `90ch`; this may be intentional readable-measure behavior or a token cleanup candidate.
- Layout uses fixed breakpoint values instead of breakpoint tokens.
- Safe-area and overflow expectations exist in the responsive baseline, but `layout.css` does not directly implement them and raw layout docs barely mention them.
- Layout classes are compatibility-sensitive because `layout.css` ships in both `core.css` and `vds.css`.
- Generated docs metadata omits `source_css`, so docs tooling currently under-reports the layout source relationship.

## Audit Rules for Later Layout Work

- Do not rename or remove public or candidate-public layout classes without a later approved migration/deprecation plan.
- Keep layout helper ownership separate from section component variants and utilities until later audits classify overlap.
- Do not change collapse breakpoints without responsive validation and migration notes.
- Do not change wide-layout CSS `order` behavior without accessibility and semantic order review.
- Do not move `.section-*` helpers without coordinating with `VDS-1240`.
- Do not fold atomic utility behavior into `layout.css`; route that work to utilities items.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1240` must use this audit when deciding how `layout.css` section helpers relate to `sections.css` variants.
- `VDS-1250` must keep atomic utilities separate from layout-system helpers.
- Documentation rewrite work must clarify layout ownership, generated `source_css` gaps, breakpoint behavior, safe-area expectations, and overflow responsibility.
- Responsive QA must validate layout classes against the `VDS-0070` viewport matrix.
- Package/import guidance must preserve that `layout.css` is part of both `core.css` and `vds.css`.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Base layer audit: `@24vlh/vds/docs/planning/foundation/vds-base-layer-audit.md`
- Core import contract audit: `@24vlh/vds/docs/planning/foundation/vds-core-import-contract-audit.md`
- Responsive baseline: `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`
- Spacing and layout rhythm audit: `@24vlh/vds/docs/planning/tokens/vds-spacing-layout-rhythm-audit.md`
- Selector inventory: `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Layout source: `@24vlh/vds/src/layout.css`
- Core entrypoint: `@24vlh/vds/src/core.css`
- Full bundle entrypoint: `@24vlh/vds/src/index.css`
- Layout raw docs: `@24vlh/vds/doc-raw/vds-layout.doc.html`
- Generated layout docs metadata: `@24vlh/agents/docs_vds/components/vds-layout.json`
