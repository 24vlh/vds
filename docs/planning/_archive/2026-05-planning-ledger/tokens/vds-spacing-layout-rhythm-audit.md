# VDS Spacing and Layout Rhythm Audit

Last updated: `2026-05-23`

Source item: `VDS-1040`

This file records the VDS spacing and layout rhythm audit for the tokens, themes, and foundation track. It is a planning artifact only: no CSS, token names, token values, raw docs, generated `dist`, package metadata, scripts, workflows, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/primitives.css` owns spacing/rhythm tokens and layout sizing tokens.
- `@24vlh/vds/src/layout.css` owns high-level structural layout primitives.
- `@24vlh/vds/src/components/sections.css` owns section component rhythm and section variants.
- `@24vlh/vds/src/components/utilities.css` owns atomic spacing, sizing, layout, grid, flex, stack, cluster, overflow, width, and positioning utilities.
- Existing spacing tokens, layout selectors, section variants, and utility classes remain compatibility-sensitive until a later approved cleanup or migration item says otherwise.

## Primitive Spacing and Layout Tokens

`@24vlh/vds/src/primitives.css` currently defines `42` spacing/rhythm tokens:

- Raw spacing scale:
  - `space-0`, `space-0_5`, `space-1`, `space-1_5`, `space-2`, `space-2_5`, `space-3`, `space-3_5`, `space-4`, `space-5`, `space-5_5`, `space-6`, `space-7`, `space-8`, `space-10`, `space-12`, `space-14`, `space-16`, `space-20`, `space-24`, `space-28`, `space-32`, `space-36`, `space-40`, `space-44`, `space-48`, `space-64`.
- Section spacing:
  - `section-spacing-xs`, `section-spacing-sm`, `section-spacing-md`, `section-spacing-lg`, `section-spacing-xl`.
- Generic gaps:
  - `gap-xs`, `gap-sm`, `gap-md`, `gap-lg`, `gap-xl`.
- Component gaps:
  - `component-gap-xs`, `component-gap-sm`, `component-gap-md`, `component-gap-lg`, `component-gap-xl`.

`@24vlh/vds/src/primitives.css` currently defines `8` layout sizing tokens:

- `layout-max-width`
- `content-width-sm`
- `content-width-md`
- `content-width-lg`
- `content-width-xl`
- `content-width-2xl`
- `sidebar-width-md`
- `grid-min`

Unreferenced spacing primitives:

- `space-0`
- `space-28`
- `space-36`
- `space-44`
- `gap-xs`
- `gap-sm`
- `gap-xl`

All layout sizing primitives are currently referenced somewhere in source.

## Source Roles and Evidence

| Source | Lines | Custom property definitions | Unique local token names | `var(...)` references | Selector blocks | Media queries | Role |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `src/layout.css` | `255` | `0` | `0` | `31` | `44` | `5` | Page frame, content regions, containers, section spacing helpers, structural grids, sidebar layouts, and split layouts. |
| `src/components/sections.css` | `575` | `63` | `6` | `117` | `100` | `3` | Section bands, inner rhythm, density variants, section grids/stacks/splits, surfaces, and legacy A/B/C spacing. |
| `src/components/utilities.css` | `3312` | `0` | `0` | `490` | `776` | `12` | Public atomic spacing, layout, sizing, grid, flex, stack, cluster, overflow, width, and positioning utilities. |
| `doc-raw/vds-layout.doc.html` | `797` | n/a | n/a | n/a | n/a | n/a | Runnable layout examples and guidance. |
| `doc-raw/vds-sections.doc.html` | `1395` | n/a | n/a | n/a | n/a | n/a | Runnable section examples and guidance. |
| `doc-raw/vds-utilities.doc.html` | `1182` | n/a | n/a | n/a | n/a | n/a | Runnable utility examples and guidance. |

`src/components/sections.css` currently defines these unique local token names:

- `section-pad-top`
- `section-pad-bottom`
- `section-inner-max`
- `section-inner-pad`
- `section-inner-gap`
- `surface`

These are component-local aliases for now, not global primitives.

## Source-Wide Spacing and Layout Declarations

Key source-wide declaration counts:

| Declaration | Total |
| --- | ---: |
| `gap` | `539` |
| `padding` | `334` |
| `margin` | `73` |
| `max-width` | `61` |
| `min-width` | `59` |
| `width` | `294` |

High-volume declaration areas include:

- `gap`: `android-shell.css`, `command.css`, `content-blocks.css`, `utilities.css`, `inbox.css`, and `flows.css`.
- `padding`: `forms-advanced.css`, `command.css`, `guidance.css`, `navigation.css`, `utilities.css`, and `content-blocks.css`.
- `margin`: `utilities.css`, `base.css`, `guidance.css`, `command.css`, `forms-advanced.css`, and `content-blocks.css`.
- `max-width`: `overlays.css`, `utilities.css`, `hero.css`, `layout.css`, `command.css`, and `navigation.css`.
- `width`: `icons.css`, `forms-advanced.css`, `flows.css`, `inbox.css`, `content-blocks.css`, and `feedback.css`.

Hard-coded spacing/layout values are findings only. Later cleanup must classify whether each value is an intentional layout constraint, a component-local alias need, a primitive gap, or a cleanup candidate.

## Public Selector Evidence

The broad spacing/layout selector inventory currently contains `520` matching selectors:

- `170` are `public`.
- `350` are `candidate-public`.

Top source files for these selectors:

- `@24vlh/vds/src/components/utilities.css`: `384`.
- `@24vlh/vds/src/components/sections.css`: `75`.
- `@24vlh/vds/src/components/flows.css`: `39`.
- `@24vlh/vds/src/layout.css`: `23`.

Relevant compatibility-sensitive surfaces include:

- Containers and page layout:
  - `.container`, `.container-wide`, `.container-relaxed`, `.container-narrow`, `.container-tight`, `.full-bleed`, `.section-bleed`.
- Structural layout:
  - `.layout-grid-*`, `.sidebar-layout`, `.sidebar-layout-right`, `.split`, `.split-reverse`.
- Section rhythm:
  - `.section`, `.section-*`, `.section--*`, `.section__*`.
- Utilities:
  - spacing utilities such as `gap-*`, `gap-x-*`, `gap-y-*`, `p-*`, `px-*`, `py-*`, `m-*`, `mx-*`, and `my-*`;
  - sizing and layout utilities such as `w-*`, `max-w-*`, `min-w-*`, grid, flex, stack, cluster, overflow, and positioning classes.

Do not rename, remove, merge, or deprecate these selectors without selector inventory evidence, consumer risk review, and migration notes.

## Docs and Source Metadata Notes

- `@24vlh/agents/docs_vds/components/vds-layout.json` currently has empty `source_css`.
- `@24vlh/agents/docs_vds/components/vds-sections.json` currently has empty `source_css`.
- `@24vlh/agents/docs_vds/components/vds-utilities.json` currently has empty `source_css`.
- Repo truth for this audit is:
  - layout docs map to `@24vlh/vds/src/layout.css`;
  - sections docs map to `@24vlh/vds/src/components/sections.css`;
  - utilities docs map to `@24vlh/vds/src/components/utilities.css`;
  - all three depend on `@24vlh/vds/src/primitives.css`, `@24vlh/vds/src/base.css`, and an active theme for token values.

These are docs metadata findings only. Actual docs index refresh or raw-doc cleanup remains deferred.

## Current Risks

- `layout.css` and `sections.css` both expose section spacing concepts, creating overlap between `.section-*` helpers and `.section--*` component variants.
- `sections.css` has a local rhythm alias layer that must be classified before cleanup.
- Legacy section density classes `section--a`, `section--b`, and `section--c` coexist with `section--xs` through `section--xl`.
- Utility spacing selectors are broad and compatibility-sensitive.
- Generated docs metadata does not currently name source CSS for layout, sections, or utilities.
- Spacing rhythm overlaps with typography rhythm and responsive behavior.
- Unreferenced spacing primitives may be deliberate public scale reserves, not stale tokens.

## Audit Rules for Later Work

- Classify each spacing/layout change as primitive, layout helper, section variant, component-local alias, utility class, docs-only, legacy-compatible, or deprecated.
- Preserve public and candidate-public layout/spacing utilities unless a later approved migration/deprecation plan allows changes.
- Treat raw docs and generated docs metadata as secondary to source truth when they conflict, but record mismatches before changing docs.
- Do not promote hard-coded layout values into primitives without checking whether they are deliberate component constraints.
- Keep typography rhythm decisions from `VDS-1030` separate from spacing/layout rhythm decisions while documenting overlap.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1050` must use this audit when motion touches layout rhythm or animated spacing.
- `VDS-1060` must preserve spacing around focus and interaction states.
- `VDS-1070` must account for layout stack and positioned surfaces when auditing z-index.
- `VDS-1080` must use this audit when radius, border, and shadow choices affect section/card density.
- Foundation and utility cleanup must classify layout and spacing selectors before changing them.
- Documentation rewrite work must reconcile generated `source_css` gaps and explain the layout versus sections split.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Primitive token taxonomy: `@24vlh/vds/docs/planning/tokens/vds-primitives-token-taxonomy-audit.md`
- Typography scale and rhythm audit: `@24vlh/vds/docs/planning/tokens/vds-typography-scale-and-rhythm-audit.md`
- Semantic token naming cleanup plan: `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
- Selector inventory: `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Primitive source: `@24vlh/vds/src/primitives.css`
- Layout source: `@24vlh/vds/src/layout.css`
- Sections source: `@24vlh/vds/src/components/sections.css`
- Utilities source: `@24vlh/vds/src/components/utilities.css`
- Layout raw docs: `@24vlh/vds/doc-raw/vds-layout.doc.html`
- Sections raw docs: `@24vlh/vds/doc-raw/vds-sections.doc.html`
- Utilities raw docs: `@24vlh/vds/doc-raw/vds-utilities.doc.html`
