# VDS Utilities Taxonomy and Pruning Plan

Last updated: `2026-05-24`

Source item: `VDS-1250`

This file records the utilities taxonomy and pruning plan for the base, layout, utilities, and global CSS track. It is a planning artifact only: no CSS, raw docs, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/utilities.css` is a component file in `@24vlh/vds/src/index.css` and standalone component dist output.
- `utilities.css` is not part of `@24vlh/vds/src/core.css`.
- `utilities.css` owns atomic helpers for display/visibility, flex/grid, spacing/gap, typography/text, sizing, surface/color/radius/shadow, overflow, position/z-index, stack/cluster composition, and state/interaction.
- `utilities.css` does not own foundation layout semantics, section component variants, component behavior, themes, identity, or docs-shell runtime behavior.
- Existing utility selectors, responsive variants, `!important` behavior, z-index helpers, accessibility helpers, and docs examples remain compatibility-sensitive until a later approved cleanup or migration item says otherwise.
- Any future source CSS change that touches utilities while generated output is out of scope must record `dist refresh pending`.

## Source Evidence

`@24vlh/vds/src/components/utilities.css` currently has:

- Lines: `3312`.
- Custom property definitions: `0`.
- `var(...)` references: `490`.
- Unique referenced token names: `87`.
- Selector blocks in the read-only source scan: `776`.
- Media query blocks: `12`.
- `!important` declarations: `413`.
- Hard-coded hex/rgb color literals: `0`.

Declaration evidence:

| Declaration | Count |
| --- | ---: |
| `gap` | `83` |
| `display` | `44` |
| `grid-template-columns` | `43` |
| `color` | `34` |
| `width` | `32` |
| `justify-content` | `32` |
| `flex-direction` | `31` |
| `align-items` | `30` |
| `margin` | `28` |
| `height` | `26` |
| `padding` | `22` |
| `max-width` | `22` |
| `z-index` | `13` |

## Utility Taxonomy

Current utility families:

- Display and visibility helpers, including block/inline/flex/grid display and show/hide patterns.
- Flex helpers, including direction, wrap, alignment, distribution, grow/shrink, and ordering helpers.
- Grid helpers, including template, span, auto-fit, dense, and responsive grid helpers.
- Spacing helpers, including margin, padding, negative margin, axis-specific, and logical spacing classes.
- Gap helpers, including all-axis, row/column, and responsive gap variants.
- Text helpers, including alignment, weight, size, tone, wrapping, truncation, transform, and prose-adjacent adjustments.
- Sizing helpers, including width, min/max width, height, aspect, object-fit, and intrinsic sizing helpers.
- Surface and visual helpers, including background, border, radius, shadow, opacity, separator, and color helpers.
- Overflow and scroll helpers, including hidden/auto/scroll and containment-related helpers.
- Position and z-index helpers, including relative/absolute/fixed/sticky helpers and numeric/semantic z-index helpers.
- Stack, cluster, and composition helpers that overlap conceptually with layout and section helpers but remain a separate utility surface.
- State and interaction helpers, including pointer, cursor, disabled/interactive, and screen-reader accessibility helpers.

Taxonomy conclusions:

- Utility classes are broad public/candidate-public API surfaces, not implementation details by default.
- Atomic utility helpers may intentionally use `!important`; cleanup must classify this policy before changing declarations.
- Utilities should remain exceptional composition helpers and should not replace foundation layout contracts or component-specific variants.
- Negative margin, z-index, overflow, and state helpers require extra migration care because they can affect layout, stacking, accessibility, or interaction.

## Selector Inventory Evidence

Selector inventory currently finds `648` utility-defined classes:

- `146` are `public`.
- `502` are `candidate-public`.

Utility family counts from the read-only scan:

| Family | Count |
| --- | ---: |
| spacing, margin, and padding | `304` |
| text | `60` |
| gap | `57` |
| grid | `41` |
| flex | `39` |
| surface and color | `37` |
| sizing | `28` |
| stack, cluster, and layout composition | `23` |
| position and z-index | `22` |
| state and interaction | `12` |
| display | `8` |
| overflow | `7` |
| screen-reader helpers | `2` |

Candidate-public is conservative. These selectors remain protected until a later approved selector reclassification, deprecation, or migration item says otherwise.

## Responsive Utility Evidence

Source contains `112` escaped responsive utility selectors:

- `sm`: `28`.
- `md`: `28`.
- `lg`: `28`.
- `xl`: `28`.

Current utility media-query blocks:

- `max-width: 640px`.
- `min-width: calc(640px + 1px)` and `max-width: 768px`.
- `min-width: 1024px`.
- `max-width: 768px`.
- Repeated responsive grid/flex blocks at `max-width: 640px`, `768px`, `1024px`, and `1280px`.

Responsive conclusions:

- Source responsive utility behavior is primarily `max-width` based for grid/flex responsive prefixes.
- Raw docs describe responsive prefixes as mobile-first behavior, so docs/source terminology needs detailed review.
- Current selector inventory does not expose escaped responsive utility names as colon-prefixed class names.
- `VDS-1260` must classify whether current responsive prefix behavior is canonical, legacy-compatible, or a migration candidate.

## Import and Ownership Evidence

Current import behavior:

- `@24vlh/vds/src/core.css` imports primitives, base, and layout only.
- `@24vlh/vds/src/core.css` does not import `utilities.css`.
- `@24vlh/vds/src/index.css` imports `components/utilities.css`.
- `utilities.css` ships in the full generated `vds.css` bundle and as standalone component dist output.

Ownership conclusions:

- Core consumers do not receive utilities from `core.css`.
- Full bundle consumers receive utilities through `index.css`/`vds.css`.
- Standalone utility package paths remain package-facing compatibility surfaces.
- Layout helpers in `layout.css`, section variants in `sections.css`, and atomic utilities in `utilities.css` are separate surfaces even when they solve adjacent layout problems.

## Overlap and Pruning Rules

Utility cleanup must classify overlap before changing selectors:

- `layout.css` owns page frame, content regions, containers, section spacing helpers, structural grids, sidebar layouts, and split layouts.
- `sections.css` owns `.section`, `.section--*`, and `.section__*` component surfaces.
- `utilities.css` owns atomic one-off helpers and composition helpers.
- Z-index utilities must not casually override overlay, modal, drawer, toast, tooltip, header, or sticky stack semantics from `VDS-1070`.
- Accessibility helpers such as screen-reader utilities, focus helpers, and overflow helpers need dedicated review in `VDS-1270`.

Pruning rules:

- Do not remove, rename, merge, reclassify, or deprecate any public or candidate-public utility class without selector inventory evidence, consumer risk review, migration notes, and a later approved cleanup item.
- Do not change responsive prefix semantics without `VDS-1260` findings and migration review.
- Do not change `!important` behavior without a utility policy decision and compatibility review.
- Do not replace negative margin, z-index, overflow, or accessibility helpers without focused migration notes.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Docs Evidence

`@24vlh/vds/doc-raw/vds-utilities.doc.html` currently has:

- Lines: `1182`.
- `!important` mentions: `85`.
- Responsive behavior mentions: `27`.
- Spacing mentions: `36`.
- Gap mentions: `56`.
- Flex mentions: `61`.
- Grid mentions: `71`.
- Overflow mentions: `23`.
- Z-index mentions: `17`.
- `sr-only` mentions: `5`.
- Safe-area mentions: `0`.

The raw docs cover:

- Atomic utility purpose and when not to use utilities.
- Display, flex, grid, spacing, gap, sizing, typography, color, surface, border, radius, shadow, overflow, position, z-index, state, screen-reader, stack, and cluster helpers.
- `!important` examples and utility-cascade expectations.
- Z-index guidance warning that utility classes must not override modal/overlay stack semantics.
- Overflow/scroll guidance warning that scroll utilities must remain keyboard-accessible.
- Responsive prefix guidance, with a docs/source behavior mismatch that must be reviewed in `VDS-1260`.

Docs/source metadata gap:

- `@24vlh/agents/docs_vds/components/vds-utilities.json` currently has empty `source_css`.
- Repo truth for this audit is that `vds-utilities` maps to `@24vlh/vds/src/components/utilities.css`.
- Generated docs metadata should not be treated as authoritative for utilities ownership until a later docs index item refreshes or fixes it.

## Current Risks

- `utilities.css` is the largest source CSS file and has the broadest utility selector surface.
- `413` `!important` declarations make utility cascade behavior intentional but high-risk to change.
- Candidate-public utility volume is high; cleanup requires reclassification before pruning.
- Docs say responsive prefixes follow mobile-first behavior, while source responsive utilities are primarily `max-width` based.
- Escaped responsive source selectors are not exposed as colon-prefixed class names by the current selector inventory.
- Utility layout helpers overlap conceptually with `layout.css` and `sections.css`.
- Z-index utilities overlap with overlay stack semantics.
- Overflow utilities can affect keyboard navigation and focus visibility.
- Screen-reader/accessibility helpers need a dedicated audit before any cleanup.
- Raw docs do not mention safe-area behavior.
- Generated docs metadata omits `source_css`, so docs tooling currently under-reports the utilities source relationship.

## Audit Rules for Later Utility Work

- Keep public and candidate-public utility classes compatibility-sensitive until later approved pruning or migration work.
- Classify every proposed utility cleanup as public, candidate-public, legacy-compatible, deprecated, internal, docs-only, or component-owned before changing CSS.
- Preserve utility/import behavior unless a later import/package item changes it.
- Preserve the separation between foundation layout helpers, section component variants, and atomic utilities.
- Coordinate responsive utility changes with `VDS-1260`.
- Coordinate accessibility helper changes with `VDS-1270`.
- Coordinate z-index utility changes with `VDS-1070`.
- Coordinate surface/color/shadow utility changes with theme and contrast audits.

## Future Work Contract

- `VDS-1260` must use this audit when reviewing responsive utility prefix behavior.
- `VDS-1270` must use this audit when reviewing screen-reader, skip/focus, overflow, and visually-hidden helpers.
- Docs rewrite work must clarify when to use utilities versus layout helpers, section variants, and components.
- Selector inventory follow-up must decide whether escaped responsive utility classes need a clearer public inventory representation.
- Package/import guidance must preserve that `utilities.css` is not part of `core.css`.

## Reference Sources

- `@24vlh/vds/src/components/utilities.css`
- `@24vlh/vds/doc-raw/vds-utilities.doc.html`
- `@24vlh/vds/src/layout.css`
- `@24vlh/vds/src/components/sections.css`
- `@24vlh/vds/src/core.css`
- `@24vlh/vds/src/index.css`
- `@24vlh/vds/docs/planning/foundation/vds-layout-system-audit.md`
- `@24vlh/vds/docs/planning/foundation/vds-section-system-audit.md`
- `@24vlh/vds/docs/planning/tokens/vds-spacing-layout-rhythm-audit.md`
- `@24vlh/vds/docs/planning/tokens/vds-z-index-overlay-stack-audit.md`
- `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- `@24vlh/agents/docs_vds/components/vds-utilities.json`
