# VDS Section System Audit

Last updated: `2026-05-24`

Source item: `VDS-1240`

This file records the section-system audit for the base, layout, utilities, and global CSS track. It is a planning artifact only: no CSS, raw docs, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/sections.css` is a component file in `@24vlh/vds/src/index.css` and standalone component dist output.
- `sections.css` is not part of `@24vlh/vds/src/core.css`.
- `sections.css` owns `.section`, `.section--*`, and `.section__*` section component surfaces.
- `sections.css` does not own foundation layout helpers, atomic utilities, themes, identity, or docs-shell runtime behavior.
- Existing section selectors, density variants, local custom properties, and responsive behavior remain compatibility-sensitive until a later approved cleanup or migration item says otherwise.
- Any future source CSS change that touches sections while generated output is out of scope must record `dist refresh pending`.

## Source Evidence

`@24vlh/vds/src/components/sections.css` currently has:

- Lines: `575`.
- Custom property definitions: `63`.
- Unique local custom property names: `6`.
- `var(...)` references: `117`.
- Non-at-rule selector blocks in the read-only scan: `100`.
- Media query blocks: `3`.

Local custom properties:

- `--section-pad-top`
- `--section-pad-bottom`
- `--section-inner-max`
- `--section-inner-pad`
- `--section-inner-gap`
- `--surface`

Declaration evidence:

| Declaration | Count |
| --- | ---: |
| `display: grid` | `3` |
| `display: flex` | `10` |
| `grid-template-columns` | `12` |
| `gap` | `22` |
| `background-color` | `7` |
| `color` | `13` |
| `order` | `4` |
| `overflow` | `0` |
| `env()` | `0` |
| `!important` | `0` |

## Section Surface Contract

Base section band:

- `.section`
- `.section__inner`

Width, edge, and inner rhythm modifiers:

- `.section--tight`
- `.section--narrow`
- `.section--relaxed`
- `.section--wide`
- `.section--full`
- `.section--pad-x-sm`
- `.section--pad-x-md`
- `.section--pad-x-lg`
- `.section--pad-x-xl`
- `.section--edge`
- `.section--gap-sm`
- `.section--gap-lg`
- `.section--gap-xl`

Density and padding modifiers:

- `.section--a`
- `.section--b`
- `.section--c`
- `.section--flush`
- `.section--xs`
- `.section--sm`
- `.section--md`
- `.section--lg`
- `.section--xl`
- `.section--pad-top-*`
- `.section--pad-bottom-*`

Header and text elements:

- `.section__header`
- `.section__eyebrow`
- `.section__title`
- `.section__subtitle`
- `.section__header--tight`
- `.section__header--wide`
- `.section--center`
- `.section--right`

Surfaces, dividers, and inset sections:

- `.section--divided`
- `.section--divided-x`
- `.section--surface`
- `.section--subtle`
- `.section--brand`
- `.section--alt`
- `.section--inset`
- `.section--inset-sm`
- `.section--inset-lg`

Layout helpers inside the section component:

- `.section--split`
- `.section--split-reverse`
- `.section__grid-*`
- `.section__stack*`
- `.section__inline*`
- `.section__list*`

These selectors are runtime API surfaces. They must not be renamed, removed, merged, or deprecated without selector inventory evidence, consumer risk review, migration notes, and later approved cleanup work.

## Import and Ownership Evidence

Current import order:

- `@24vlh/vds/src/core.css` imports `layout.css` and does not import `sections.css`.
- `@24vlh/vds/src/index.css` imports `layout.css` at line `3`.
- `@24vlh/vds/src/index.css` imports `components/sections.css` at line `29`.
- `components/sections.css` therefore loads after `layout.css` in the full `vds.css` bundle.

Ownership conclusions:

- In `core.css`, `.section` is the foundation layout helper from `layout.css`.
- In `index.css` and generated `vds.css`, `.section` is enriched by `components/sections.css`.
- `layout.css` and `sections.css` both define `.section`, so cleanup must classify the intended package behavior before changing either file.
- Section grids and layout grids are separate public surfaces: `.section__grid-*` versus `.layout-grid-*`.

## Responsive Behavior Evidence

Current section media queries:

- `max-width: 1280px`: section grids shift to `repeat(auto-fit, minmax(280px, 1fr))`.
- `max-width: 1024px`: split/reverse sections collapse to one column, and section grids shift to `repeat(auto-fit, minmax(180px, 1fr))`.
- `max-width: 768px`: legacy/default section density compresses to `--space-10`, XS-XL rhythm is reasserted, section grids shift to `repeat(auto-fit, minmax(140px, 1fr))`, title/subtitle sizes reduce, and inset padding reduces.

Responsive conclusions:

- Sections use fixed breakpoint values rather than breakpoint tokens.
- Split/reverse sections collapse at `1024px`.
- Section grids remain auto-fit instead of forcing a single column at narrow widths.
- `.section--split-reverse` uses CSS `order` on wide layouts and relies on docs to preserve semantic DOM guidance.
- Safe-area behavior is not present in `sections.css`.
- Overflow behavior is not directly owned by `sections.css`.

## Selector Inventory Evidence

Selector inventory currently finds `75` section-defined classes:

- `59` are `public`.
- `16` are `candidate-public`.

Selector groups:

- Base section classes: `1`.
- Modifier classes: `47`.
- Element classes: `27`.
- Grid classes: `9`.
- Stack classes: `3`.
- Inline classes: `4`.
- List classes: `4`.

Candidate-public examples include:

- `.section__header--tight`
- `.section--gap-lg`
- `.section--gap-xl`
- `.section--narrow`
- `.section--pad-bottom-lg`
- `.section--pad-bottom-md`
- `.section--pad-bottom-none`
- `.section--pad-bottom-xs`
- `.section--pad-top-lg`
- `.section--pad-top-md`
- `.section--pad-top-xs`
- `.section--pad-x-md`
- `.section--pad-x-sm`
- `.section--pad-x-xl`
- `.section--relaxed`

Candidate-public is conservative. These selectors remain protected until a later approved selector reclassification, deprecation, or migration item says otherwise.

## Docs Evidence

`@24vlh/vds/doc-raw/vds-sections.doc.html` currently has:

- Lines: `1395`.
- Section mentions: `704`.
- Legacy mentions: `3`.
- Density mentions: `9`.
- Grid mentions: `57`.
- Stack mentions: `37`.
- Split mentions: `44`.
- Reverse mentions: `14`.
- Surface mentions: `40`.
- Inset mentions: `33`.
- ARIA mentions: `19`.
- Semantic mentions: `10`.
- Contrast mentions: `5`.
- Overflow mentions: `0`.
- Safe-area mentions: `0`.

The raw docs cover:

- Legacy A/B/C density.
- XS-XL universal rhythm.
- Independent top and bottom padding overrides.
- Flush and divided sections.
- Surface, subtle, brand, alt, and inset sections.
- Split and split-reverse behavior.
- Section grids, stacks, inline stacks, and lists.
- Semantic HTML guidance, ARIA naming, heading order, visual-only section classes, and contrast reminders.

Docs/source metadata gap:

- `@24vlh/agents/docs_vds/components/vds-sections.json` currently has empty `source_css`.
- Repo truth for this audit is that `vds-sections` maps to `@24vlh/vds/src/components/sections.css`.
- Generated docs metadata should not be treated as authoritative for section ownership until a later docs index item refreshes or fixes it.

## Current Risks

- `.section` ownership differs between `core.css` and `vds.css`.
- Legacy `.section--a`, `.section--b`, and `.section--c` densities coexist with `.section--xs`, `.section--sm`, `.section--md`, `.section--lg`, and `.section--xl`.
- `.section--split-reverse` uses CSS `order`; future changes must preserve semantic DOM guidance and keyboard order.
- `.section--relaxed` uses hard-coded `90ch`; this may be intentional readable-measure behavior or a token cleanup candidate.
- Section grids and layout grids overlap conceptually but are different public surfaces.
- Safe-area and overflow expectations exist in the responsive baseline, but `sections.css` does not directly implement them and raw section docs do not mention them.
- Generated docs metadata omits `source_css`, so docs tooling currently under-reports the section source relationship.

## Audit Rules for Later Section Work

- Do not rename or remove public or candidate-public section classes without a later approved migration/deprecation plan.
- Do not change `.section` ownership without coordinating `core.css`, `index.css`, docs, package paths, and migration notes.
- Keep section component helpers separate from foundation layout helpers and atomic utilities until later audits classify overlap.
- Do not change section breakpoints without responsive validation and migration notes.
- Do not change split-reverse CSS `order` behavior without accessibility and semantic order review.
- Do not remove legacy A/B/C densities without a deprecation and migration plan.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1250` must use this audit when deciding how section layout helpers relate to utilities.
- Documentation rewrite work must clarify the `core.css` versus `vds.css` meaning of `.section`.
- Responsive QA must validate section classes against the `VDS-0070` viewport matrix.
- Theme and contrast work must review surface, subtle, brand, alt, inset, divider, and list surfaces in every theme.
- Package/import guidance must preserve that `sections.css` is a component surface, not part of `core.css`.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Layout system audit: `@24vlh/vds/docs/planning/foundation/vds-layout-system-audit.md`
- Core import contract audit: `@24vlh/vds/docs/planning/foundation/vds-core-import-contract-audit.md`
- Responsive baseline: `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`
- Spacing and layout rhythm audit: `@24vlh/vds/docs/planning/tokens/vds-spacing-layout-rhythm-audit.md`
- Selector inventory: `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Section source: `@24vlh/vds/src/components/sections.css`
- Layout source: `@24vlh/vds/src/layout.css`
- Core entrypoint: `@24vlh/vds/src/core.css`
- Full bundle entrypoint: `@24vlh/vds/src/index.css`
- Section raw docs: `@24vlh/vds/doc-raw/vds-sections.doc.html`
- Generated section docs metadata: `@24vlh/agents/docs_vds/components/vds-sections.json`
