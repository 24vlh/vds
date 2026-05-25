# VDS Tables Component Audit

Last updated: `2026-05-24`

Source item: `VDS-2280`

Next recommended item: `VDS-2290 Tabs component audit`

This file records the tables component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/tables.css` is the source truth for current table CSS behavior.
- `@24vlh/vds/doc-raw/vds-tables.doc.html` and `@24vlh/agents/docs_vds/components/vds-tables.json` are docs/index evidence.
- Current tables CSS provides visual/layout hooks for semantic tables: wrappers, captions, density and visual variants, sticky headers/columns/footers, row states, selection and expandable hooks, empty/loading states, responsive collapse, metric tables, and numeric/currency/trend helpers.
- Consumer/application code owns semantic table structure, captions, `scope`, sorting controls and `aria-sort`, row selection state and labels, `aria-selected`, expansion behavior and `aria-expanded`, loading/empty state lifecycle, keyboard behavior, pagination, virtualization, data accuracy, and live announcements.
- Existing table selectors, local variables, sticky hooks, density/visual variants, row state hooks, expandable/selected hooks, responsive behavior, numeric/trend helpers, docs examples, and package-facing outputs are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, selector inventory update, or generated output refresh happens in `VDS-2280`.

## Source CSS Evidence

`@24vlh/vds/src/components/tables.css` currently has:

- Lines: `637`.
- Selector blocks: `98`.
- Expanded selectors: `120`.
- Declarations: `244`.
- Local custom property declaration lines: `14`.
- Unique local custom property names: `4`.
- `var(...)` references: `154`.
- `!important` declarations: `0`.
- Hard-coded hex/rgb color references: `0`.
- `color-mix(...)` uses: `1`.

State and motion evidence:

- `:hover` selector matches: `2`.
- `:focus-visible` selector matches: `0`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled selector matches: `0`.
- Selected selector matches: `1`.
- Expanded selector matches: `2`.
- Source sort/sortable selector matches: `0`.
- Loading selector matches: `5`.
- Empty selector matches: `4`.
- Transition declarations: `0`.
- Transform declarations: `3`.
- Animation declarations: `1`.
- `@keyframes`: `1`, named `table-loading`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Responsive and layout evidence:

- Media blocks: `1`, at `max-width: 640px`.
- Flex display declarations: `8`.
- Inline-flex display declarations: `1`.
- Grid display declarations: `0`.
- Gap declarations: `3`.
- Overflow declarations: `6`.
- Position declarations: `7`.
- Z-index declarations: `5`.
- Width declarations: `6`.
- Height declarations: `2`.
- White-space declarations: `8`.
- Text-align declarations: `10`.
- Vertical-align declarations: `1`.
- `table-layout` declarations: `1`.

Package-facing output:

- `@24vlh/vds/dist/components/tables.css` exists.
- `@24vlh/vds/dist/components/tables.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/tables.css`.
- `@24vlh/vds/src/core.css` does not import tables.

## Component Contract

Current tables source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root scope | `[data-vds-table]`, `.vds-table` | local table variable scope |
| Wrappers and panels | `.table-wrapper`, `.table-panel`, `.table-panel__*` | scroll shell, framed surface, header/meta/action composition |
| Base table | `.table`, `caption`, `th`, `td` | semantic table presentation and cell defaults |
| Density variants | `.table--a`, `.table--b`, `.table--c`, `.table--compact`, `.table--hf` | row/cell density and high-frequency financial table presentation |
| Visual variants | `.table--bordered`, `.table--striped`, `.table--hover`, `.table--minimal`, `.table--clear`, `.table--inset`, `.table--nowrap`, `.table--truncate-cells` | border, background, hover, inset, and overflow behavior |
| Sticky hooks | `.table--sticky-header`, `.table--sticky-footer`, `.table--sticky-col`, `.table--sticky-col-end` | sticky table regions with z-index layering |
| Cell helpers | `.table-cell--numeric`, `.table-cell--nowrap`, `.table-cell--truncate`, `.table-cell--muted` | alignment, wrapping, truncation, and muted cell styling |
| Row hooks | `.table-row--selected`, semantic row state classes, `.table-row--expandable`, `.table-row--expanded`, `.table-row--details` | selected, status, expandable, and detail-row visual hooks |
| Supporting sections | `.table-actions`, `.table-group-header`, `.metric-table`, `.table-empty`, `.table-loading` | inline actions, grouped headers, metric tables, empty and loading states |
| Numeric helpers | `.t-num`, `.t-pct`, `.t-cur`, `.cur-*`, `.t-trend`, `.t-up`, `.t-down`, `.t-flat` | tabular numeric alignment, currency prefixes, and visual trend indicators |

Source interpretation:

- Tables CSS owns visual/layout hooks for semantic tables, sticky regions, density, row states, empty/loading states, responsive collapse, and numeric/trend display helpers.
- CSS does not own sorting behavior, selection behavior, expansion behavior, data loading, pagination, virtualization, live updates, or ARIA synchronization.
- Runtime and composition hooks such as `.table--collapse`, `.table-row--selected`, `.table-row--expandable`, `.table-row--expanded`, `.table-row--details`, `.table--sticky-header`, `.table--sticky-col`, `.table--sticky-footer`, and numeric/trend helpers must remain compatibility-sensitive until later approved migration work.

Source/docs mismatch:

- The master-map focus mentions sorting.
- Current source has selected and expandable row hooks but no source-defined sort or sortable selectors.
- Raw docs mention sorting once and do not document `aria-sort`.
- This item records the mismatch only; it does not add sorting CSS or docs.

## Token and Local Variable Surface

Local custom properties declared by source:

- `--table-cell-font-size`
- `--table-cell-pad-x`
- `--table-cell-pad-y`
- `--table-currency-tint`

Fallback aliases referenced by source:

- `--table-trend-up`
- `--table-trend-down`
- `--table-trend-flat`
- `--table-row-good-bg`
- `--table-row-bad-bg`
- `--table-row-warning-bg`
- `--table-row-info-bg`
- `--table-row-muted-bg`
- `--table-row-flagged-bg`
- `--table-row-curious-bg`

Audit conclusions:

- Tables rely primarily on global VDS spacing, color, radius, border, text, icon, and z-index tokens.
- Local variables cover cell density and currency tint, while row and trend aliases allow table-specific semantic overrides.
- No local variable, token reference, fallback alias, sticky hook, row state, or numeric helper is approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- Table-source classes: `75`.
- Public classes: `68`.
- Candidate-public classes: `7`.

Candidate-public classes:

- `.cur-chf`
- `.table--clear`
- `.table--inset`
- `.table--minimal`
- `.table--sticky-col`
- `.table-cell--nowrap`
- `.vds-table`

Audit conclusions:

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- Candidate-public table selectors are source-defined and remain compatibility-sensitive.
- Source defines row selection and expansion hooks but does not define sorting classes.
- Future selector pruning, sorting API introduction, or reclassification requires migration approval.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-tables.doc.html` has `2057` lines.
- Docs cover semantic table anatomy, captions, sticky header/footer, wrappers/panels, density and visual variants, alignment helpers, row states, selection checkboxes, expandable rows, metric tables, empty/loading states, responsive collapse, high-frequency numeric helpers, accessibility usage rules, and trend guidance.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-tables.json`
- Blocks: `15`.
- Code examples: `15`.
- Generated class tokens: `83`.
- Generated `source_css`: `base.css`, `layout.css`, `tables.css`, and `typography.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `table` | `463` |
| `caption` | `8` |
| `sticky` | `23` |
| `sort` | `1` |
| `selection` | `2` |
| `selected` | `8` |
| `expandable` | `7` |
| `expanded` | `6` |
| `loading` | `10` |
| `empty` | `10` |
| `skeleton` | `21` |
| `responsive` | `4` |
| `scroll` | `8` |
| `aria` | `13` |
| `aria-sort` | `0` |
| `aria-selected` | `0` |
| `aria-expanded` | `0` |
| `aria-busy` | `0` |
| `role` | `2` |
| `keyboard` | `0` |
| `focus` | `0` |
| `focus-visible` | `0` |
| `sr-only` | `1` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |
| `contrast` | `0` |
| `density` | `9` |
| `numeric` | `11` |
| `currency` | `1` |
| `percent` | `2` |
| `trend` | `45` |

Docs coverage and gaps:

- Raw docs strongly cover semantic markup, captions, sticky behavior, density, row states, responsive collapse, loading/empty rows, and trend text pairing.
- Raw docs do not mention `aria-sort`, `aria-selected`, `aria-expanded`, `aria-busy`, keyboard, focus, reduced-motion, forced-colors, or contrast directly.
- Generated metadata includes `tables.css`; no manual generated-index edit is approved in this item.

## Accessibility, Runtime, and Behavior Boundaries

Consumer/application code owns:

- Semantic `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<th>`, and `<td>` structure.
- Header `scope`, correct reading order, and deciding when tabular data should remain a table rather than cards or lists.
- Sorting controls, `aria-sort`, labels, and keyboard behavior.
- Row selection state, checkbox labels, `aria-selected` if a selected-row interaction pattern uses it, and selection announcements.
- Expand/collapse behavior, `aria-expanded`, `aria-controls`, row detail lifecycle, and focus management.
- Loading and empty state lifecycle, `aria-busy`, live announcements, data fetching, pagination, virtualization, and data accuracy.

Accessibility interpretation:

- Tables CSS can preserve visual density and responsive collapse, but cannot create semantic table structure.
- `.table--collapse` uses `data-label` for mobile labels; consumers must keep those labels accurate and aligned with headers.
- Trend helpers use icons and color; source/docs require explicit visible text so trend direction is not color-only.
- Inline actions, sorting buttons, checkboxes, and expandable rows inherit interaction semantics from consumer markup and other components.

Audit conclusions:

- Source CSS is compatibility-sensitive because it exposes dense-data hooks used by docs examples and package consumers.
- Source CSS wins over backlog wording where sorting is not currently implemented.
- Actual sorting, selection, expansion, loading, pagination, virtualization, and announcement behavior remain later implementation/docs tasks.

## Responsive, Motion, and Forced-Colors Evidence

Responsive source behavior:

- One `max-width: 640px` media block collapses `.table--collapse`.
- The collapse hides `thead`, turns body rows into block cards, and uses `td::before { content: attr(data-label); }` for mobile labels.
- Source has no container queries.

Motion source behavior:

- `.table-loading td::after` uses the `table-loading` keyframe.
- Source has one animation declaration and no file-local reduced-motion block.
- Source has no transition declarations.

Forced-colors evidence:

- Source has `0` forced-colors blocks.
- Raw docs mention forced-colors `0` times.

Audit conclusions:

- Responsive collapse and `data-label` behavior are source truth and should not be inverted or renamed without migration approval.
- Loading shimmer lacks file-local reduced-motion handling; this is an audit finding only.
- Lack of forced-colors and contrast documentation is an audit finding only.

## Risks and Future Routing

- Sorting appears in backlog focus but not source selectors; future sorting guidance needs later approved docs/CSS/API work.
- Selection and expansion hooks are visual only; consumer code must own state, ARIA, keyboard, and focus behavior.
- Sticky headers, sticky columns, and sticky footers use z-index layering and should be reviewed before any cleanup.
- `.table--collapse` depends on accurate `data-label` attributes; stale labels can harm mobile comprehension and assistive context.
- Loading shimmer has no file-local reduced-motion handling.
- Trend and finance row states inherit semantic color and contrast risks from prior theme audits.
- Numeric helpers and currency prefixes are compatibility-sensitive; changing them can affect dense finance/accounting consumers.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Table CSS fixes or selector cleanup: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Selector classification: later approved selector inventory/docs item.
- Sorting, selection, and expansion semantics: later approved accessibility/docs item.
- Theme/contrast, reduced-motion, forced-colors, sticky layering, and responsive screenshots: later approved visual integrity item.

## Public Interfaces

- No runtime CSS APIs change.
- No CSS, raw docs, generated docs index, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-tables-component-audit.md` becomes the decision source for later table CSS fixes, docs rewrite, selector classification, accessibility review, sorting/selection/expansion guidance, responsive QA, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.

## Validation Plan

Approved validation commands:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
- Read-only tables audit scan.
- Markdown sanity checks for master-map status, artifact path, no runtime/source/generated changes, and next recommended item.
- `git diff --check` for changed planning files.

Forbidden commands for this item:

- `pnpm run build`
- `pnpm run build:prod`
- `pnpm run docs:vds:index`
- `pnpm run inventory:selectors`
- `pnpm run consumer:scan`

## Post-Implementation Validation Log

- `pnpm run audit:tokens` passed: token usage audit passed for `43` files.
- `pnpm run audit` passed: CSS parse, class, token, doc dependency, and selector inventory freshness checks passed.
- `pnpm run audit:dist` was attempted with a `120s` timeout. It started `node static/js/check-generated-artifacts.js --check` but did not complete before timing out. No write/regeneration command was run.
- `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale; per plan, `pnpm run consumer:scan` was not run.
- Read-only tables audit scan confirmed CSS counts, local variables, fallback aliases, selector inventory totals, docs/index evidence, import/package evidence, semantic table/caption/density/sticky/row-state/selection/expansion/loading/responsive/numeric/trend evidence, ARIA/motion/forced-colors gaps, and dist presence.
- Markdown sanity checks passed for master-map status, `VDS-0500` in-progress status, artifact path, no runtime/source/generated/inventory/consumer-report changes, and next recommended item.
- `git diff --check` for changed planning files passed.
