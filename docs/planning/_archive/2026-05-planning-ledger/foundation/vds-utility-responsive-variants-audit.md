# VDS Utility Responsive Variants Audit

Last updated: `2026-05-24`

Source item: `VDS-1260`

This file records the utility responsive variants audit for the base, layout, utilities, and global CSS track. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/utilities.css` is the source truth for current responsive utility behavior.
- Current responsive utility selectors are compatibility-sensitive, including escaped `sm`, `md`, `lg`, and `xl` prefixed selectors.
- Source-defined responsive classes must not be renamed, removed, inverted, reclassified, or deprecated without a later approved cleanup and migration item.
- Raw-doc claims such as “mobile-first” are audit findings when they conflict with source behavior.
- Selector inventory escaping/colon representation gaps are audit findings only in this item.
- Any future source CSS change that touches responsive utilities while generated output is out of scope must record `dist refresh pending`.

## Source Media Query Evidence

`@24vlh/vds/src/components/utilities.css` currently has `12` responsive media blocks:

| Line | Query | Current role |
| ---: | --- | --- |
| `85` | `(max-width: 640px)` | mobile show/hide helpers |
| `95` | `(min-width: calc(640px + 1px)) and (max-width: 768px)` | tablet show/hide helpers |
| `105` | `(min-width: 1024px)` | desktop show/hide helpers |
| `2707` | `(max-width: 768px)` | `.layout-grid-inner-2` and `.layout-grid-inner-3` collapse |
| `2784` | `(max-width: 640px)` | `sm:` grid column variants |
| `2814` | `(max-width: 768px)` | `md:` grid column variants |
| `2844` | `(max-width: 1024px)` | `lg:` grid column variants |
| `2874` | `(max-width: 1280px)` | `xl:` grid column variants |
| `2966` | `(max-width: 640px)` | `sm:` flex variants |
| `3053` | `(max-width: 768px)` | `md:` flex variants |
| `3140` | `(max-width: 1024px)` | `lg:` flex variants |
| `3227` | `(max-width: 1280px)` | `xl:` flex variants |

## Visibility Helper Evidence

Current visibility helpers:

- `.hide-mobile`: `display: none !important` at `max-width: 640px`.
- `.show-mobile`: `display: block !important` at `max-width: 640px`.
- `.hide-tablet`: `display: none !important` from `641px` through `768px`.
- `.show-tablet`: `display: block !important` from `641px` through `768px`.
- `.hide-desktop`: `display: none !important` at `min-width: 1024px`.
- `.show-desktop`: `display: block !important` at `min-width: 1024px`.

Visibility conclusions:

- Visibility helpers use mixed range logic: mobile max-width, tablet bounded range, and desktop min-width.
- There is no matching show/hide helper for the `769px` through `1023px` range.
- These helpers use `!important` and remain compatibility-sensitive.
- Do not normalize helper ranges without later responsive migration planning.

## Layout Grid Collapse Evidence

Current layout-grid collapse behavior:

- `.layout-grid-inner-2` defaults to two columns.
- `.layout-grid-inner-3` defaults to three columns.
- Both collapse to `grid-template-columns: 1fr` at `max-width: 768px`.

Layout-grid conclusions:

- This behavior is responsive utility-adjacent, but it overlaps conceptually with layout-system behavior from `VDS-1230`.
- It should not be changed without coordinating layout-system docs, utility docs, responsive QA, and migration notes.

## Responsive Prefixed Selector Evidence

Source contains `112` escaped responsive utility selectors:

- `sm`: `28`.
- `md`: `28`.
- `lg`: `28`.
- `xl`: `28`.

Family totals:

- Grid column selectors: `28`.
- Flex selectors: `84`.
- Other responsive prefixed selectors: `0`.

Responsive grid classes:

- `grid-cols-1`
- `grid-cols-2`
- `grid-cols-3`
- `grid-cols-4`
- `grid-cols-5`
- `grid-cols-6`
- `grid-cols-12`

Responsive flex classes:

- `flex`
- `inline-flex`
- `flex-row`
- `flex-row-reverse`
- `flex-col`
- `flex-col-reverse`
- `flex-wrap`
- `flex-nowrap`
- `flex-wrap-reverse`
- `justify-start`
- `justify-center`
- `justify-end`
- `justify-between`
- `justify-around`
- `justify-evenly`
- `items-start`
- `items-center`
- `items-end`
- `items-stretch`
- `flex-1`
- `flex-none`

Responsive prefix conclusions:

- Grid/flex prefixed variants are currently max-width scoped, not min-width scoped.
- Source prefix names resemble common breakpoint labels, but their current behavior should be treated as VDS source truth.
- Any future mobile-first inversion would be a behavior change and needs migration approval.

## Selector Inventory Evidence

Current selector inventory evidence:

- Utility-defined classes represented in inventory: `648`.
- Colon-prefixed responsive utility classes represented in inventory: `0`.
- Source-defined escaped responsive selectors in `utilities.css`: `112`.

Inventory conclusions:

- The current selector inventory under-represents responsive utility public surface.
- This is not fixed in `VDS-1260` because selector inventory changes are out of scope.
- Later selector inventory work should decide whether escaped selectors should appear as `sm:grid-cols-1` style public/candidate-public class names.
- Until that decision, source-defined escaped responsive selectors remain compatibility-sensitive.

## Docs Evidence

`@24vlh/vds/doc-raw/vds-utilities.doc.html` currently has:

- Lines: `1182`.
- Responsive mentions: `5` in the read-only text scan.
- Mobile-first mentions: `2`.
- Breakpoint mentions: `2`.
- Prefix mentions: `sm:` `1`, `md:` `1`, `lg:` `1`, and `xl:` `1`.
- Responsive-prefixed class attribute usages found in the read-only scan: `0`.
- Safe-area mentions: `0`.

Raw docs currently say:

- Use responsive prefixes `sm:`, `md:`, `lg:`, and `xl:` for mobile-first design.
- Responsive prefixes follow mobile-first behaviour.

Docs/source conclusions:

- Raw docs describe a mobile-first model, but the source grid/flex prefix blocks are max-width scoped.
- Raw docs mention prefix names but do not include runnable responsive-prefixed class attributes in the scan.
- `@24vlh/agents/docs_vds/components/vds-utilities.json` currently has empty `source_css`, so generated docs metadata does not identify `src/components/utilities.css` as the source.
- Repo truth for this audit is that `vds-utilities` maps to `@24vlh/vds/src/components/utilities.css`.

## Adjacent Mobile Evidence

Source contains `.safe-area`:

- `.safe-area` uses `env(safe-area-inset-top)`, `env(safe-area-inset-right)`, `env(safe-area-inset-bottom)`, and `env(safe-area-inset-left)`.
- The declaration uses `!important`.
- Raw utility docs mention safe-area `0` times.

Safe-area conclusions:

- `.safe-area` is adjacent to responsive/mobile behavior but should be handled by later docs and accessibility/helper work.
- `VDS-1270` should decide whether `.safe-area` belongs with accessibility helpers, responsive helpers, or utility docs cleanup.

## Current Risks

- Docs/source mismatch: docs say mobile-first, source prefixed grid/flex utilities are max-width scoped.
- Visibility helpers use mixed max-width, bounded-range, and min-width logic.
- The `769px` through `1023px` range has no show/hide helper coverage.
- Source-defined responsive selectors are missing from selector inventory as colon-prefixed class names.
- Raw docs mention prefixes but do not provide class-attribute examples using them.
- Responsive grid/flex classes use escaped colon selectors, which can be easy to mis-document or mis-scan.
- `.layout-grid-inner-*` responsive behavior overlaps with layout-system ownership.
- `.safe-area` exists in source but is undocumented in raw utility docs.

## Audit Rules for Later Responsive Utility Work

- Do not rename, remove, invert, or reclassify responsive utility selectors without later approved migration work.
- Do not change max-width breakpoint behavior to min-width/mobile-first behavior without migration notes and consumer risk review.
- Do not treat raw docs as authoritative when docs conflict with source CSS.
- Do not rely only on current selector inventory to judge responsive utility compatibility risk.
- Coordinate responsive utility changes with the viewport matrix from `VDS-0070`.
- Coordinate `.layout-grid-inner-*` behavior with `VDS-1230`.
- Coordinate `.safe-area` and overflow/focus helper behavior with `VDS-1270`.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1270` must use this audit when reviewing `.safe-area`, screen-reader, focus, and overflow utility behavior.
- Selector inventory follow-up must decide whether escaped responsive selectors need explicit class inventory representation.
- Docs rewrite work must correct or explain the responsive prefix model.
- Responsive QA must test responsive utility behavior against the `VDS-0070` viewport matrix.
- Migration planning must classify whether current max-width prefixes are canonical, legacy-compatible, or deprecation candidates before any source change.

## Reference Sources

- `@24vlh/vds/src/components/utilities.css`
- `@24vlh/vds/doc-raw/vds-utilities.doc.html`
- `@24vlh/vds/docs/planning/foundation/vds-utilities-taxonomy-and-pruning-plan.md`
- `@24vlh/vds/docs/planning/foundation/vds-layout-system-audit.md`
- `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`
- `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- `@24vlh/agents/docs_vds/components/vds-utilities.json`
