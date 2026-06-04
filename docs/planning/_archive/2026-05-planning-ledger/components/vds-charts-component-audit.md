# VDS Charts Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-2080`

This file records the charts component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/charts.css` is the source truth for current chart CSS behavior.
- `@24vlh/vds/doc-raw/vds-charts.doc.html` and `@24vlh/agents/docs_vds/components/vds-charts.json` are docs/index evidence.
- The current implementation is a CSS chart shell and styling hook layer for SVG, canvas, and third-party chart libraries.
- Consumer/application code owns chart rendering, data accuracy, accessible names/descriptions, table/stat/text alternatives, interaction keyboard support, tooltip behavior, live updates, and loading/error state changes.
- Existing chart classes, series hooks, state classes, local variables, `!important` canvas/SVG sizing rules, and responsive behavior are compatibility-sensitive.
- No selector rewrite, docs rewrite, rendering behavior, generated index refresh, or generated output refresh happens in `VDS-2080`.

## Source CSS Evidence

`@24vlh/vds/src/components/charts.css` currently has:

- Lines: `485`.
- Selector blocks: `68`.
- Expanded selectors: `74`.
- Declarations: `204`.
- Custom property declarations: `37`.
- Unique `--chart-*` local token names: `37`.
- `var(...)` references: `132`.
- `!important` declarations: `2`, both for canvas/SVG sizing.
- Hard-coded hex colors: `0`.
- `rgb(...)` / `rgba(...)` colors: `0`.
- `color-mix(...)` uses: `15`.

Media and interaction evidence:

- Media blocks: `1`, `(max-width: 768px)`.
- Feature queries: `0`.
- `@keyframes`: `1`, `chart-loading-shimmer`.
- `:hover` selector matches: `0`.
- `:focus-visible` selector matches: `0`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled or `aria-disabled` selector matches: `0`.
- Loading selector matches: `8`.
- Empty selector matches: `3`.
- Error selector matches: `3`.
- Transition declarations: `0`.
- Animation declarations: `1`.
- Transform declarations: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Layout and structure evidence:

- Flex display declarations: `11`.
- Grid display declarations: `0`.
- Position declarations: `5`.
- Z-index declarations: `0`.
- Overflow declarations: `0`.
- Min-height declarations: `8`.
- `width: 100% !important`: `1`.
- `height: 100% !important`: `1`.

Package-facing output:

- `@24vlh/vds/dist/components/charts.css` exists.
- `@24vlh/vds/dist/components/charts.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/charts.css`.
- `@24vlh/vds/src/core.css` does not import charts.

## Component Contract

Current chart source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Scope root | `[data-vds-chart]`, `.vds-chart` | activate chart-local variables |
| Base | `.chart` | shell surface for charts |
| Size/surface variants | `.chart--sm`, `.chart--lg`, `.chart--bare` | density and bare embedded treatments |
| Header/meta/actions | `.chart__header`, `.chart__title`, `.chart__subtitle`, `.chart__meta`, `.chart__meta-item`, `.chart__meta-dot`, `.chart__actions` | title, subtitle, metadata, and action layout |
| Body/canvas | `.chart__body`, `.chart__canvas`, `.chart__canvas canvas`, `.chart__canvas svg` | chart rendering wrapper and sizing |
| Legend | `.chart__legend`, `.chart__legend--right`, `.chart-legend__item`, `.chart-legend__swatch`, `.chart-legend__swatch--1` through `.chart-legend__swatch--6`, `.chart-legend__label` | series labels and swatches |
| Axis/grid | `.chart-axis`, `.chart-axis--x`, `.chart-axis--y`, `.chart-grid`, `.major` | SVG axis and gridline hooks |
| Series/area/bar | `.chart-series--1` through `.chart-series--6`, `.chart-area--1` through `.chart-area--6`, `.chart-bar--1` through `.chart-bar--6`, `.chart-bar--positive`, `.chart-bar--negative`, `.chart-bar--neutral` | SVG/data visualization color hooks |
| States | `.chart--empty`, `.chart--error`, `.chart--loading`, `.chart-state`, `.chart-state__icon`, `.chart-state__title`, `.chart-state__body` | empty, error, loading, and stable state content |
| Cross-component | `.card .chart` | embedded chart behavior in card surfaces |

Source interpretation:

- Charts are visual shells and styling hooks, not rendering or state-management runtime.
- CSS provides layout, surfaces, legends, axis/grid/series styling hooks, state visuals, responsive wrapping, and embedded renderer sizing.
- Consumer/application code owns data rendering, exact-value exposure, interactivity, live updates, and accessible alternatives.

## Local Token Surface

Current local variable groups:

| Family | Variables | Role |
| --- | --- | --- |
| Sizing | `--chart-min-height-sm`, `--chart-min-height`, `--chart-min-height-lg` | chart shell height scale |
| Spacing | `--chart-padding-sm`, `--chart-padding`, `--chart-padding-lg`, `--chart-gap`, `--chart-legend-gap` | shell and legend rhythm |
| Axis/grid | `--chart-axis-color`, `--chart-axis-text-color`, `--chart-gridline-color`, `--chart-gridline-emph` | SVG axis and gridline styling |
| Surface | `--chart-surface-bg`, `--chart-surface-subtle`, `--chart-border-color` | chart container surface and border |
| Series scale | `--chart-series-1` through `--chart-series-6`, plus `*-soft` and `*-line` aliases | line, area, swatch, and bar colors |
| Semantic series | `--chart-series-positive`, `--chart-series-negative`, `--chart-series-neutral` | semantic bar/status mapping |
| Loading | `--chart-loading-stripes` | loading shimmer background |

Audit conclusions:

- Local chart variables are component-owned aliases.
- Series and semantic variables currently resolve through generic theme/accent/success/info/warning/danger/text-muted tokens.
- There are no chart-prefixed theme tokens in the per-theme audits; chart data surfaces need theme-context review.
- No local variable or token reference is approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- Chart source classes: `59`.
- Public classes: `43`.
- Candidate-public classes: `16`.

Class family counts:

| Group | Total |
| --- | ---: |
| root | `1` |
| base | `1` |
| size | `3` |
| header/meta/actions | `7` |
| body/canvas | `2` |
| legend | `11` |
| axis/grid | `3` |
| series | `6` |
| state | `4` |
| other/cross-hook | `21` |

Candidate-public classes:

- `.vds-chart`
- `.chart--lg`
- `.chart-area--2`
- `.chart-area--3`
- `.chart-area--4`
- `.chart-area--5`
- `.chart-area--6`
- `.chart-bar--5`
- `.chart-bar--6`
- `.chart-legend__swatch--4`
- `.chart-legend__swatch--5`
- `.chart-legend__swatch--6`
- `.chart-series--3`
- `.chart-series--4`
- `.chart-series--5`
- `.chart-series--6`

Audit conclusions:

- Candidate-public status reflects current docs coverage, not permission to remove or rename source-defined selectors.
- Later series, area, bar, and swatch classes are compatibility-sensitive even when not currently covered by examples.
- `.card` and `.major` appear through charts source selectors and need classification before any cross-component selector cleanup.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-charts.doc.html` has `924` lines.
- Docs cover installation/dependencies, structural model, chart sizes, headers/meta/actions, legends, SVG axes, SVG series, bars, empty/error/loading states, dashboards, accessibility rules, and usage guidance.
- Docs examples include SVG/canvas wrappers, `aria-label`, `role="img"`, `aria-hidden`, `aria-busy`, `aria-live`, legends, and table/stat alternatives.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-charts.json`
- Blocks: `10`.
- Code examples: `10`.
- Generated class tokens: `85`.
- Generated `source_css`: `base.css`, `charts.css`, `content-blocks.css`, `layout.css`, `primitives.css`, and `typography.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `chart` | `300` |
| `data` | `46` |
| `canvas` | `44` |
| `svg` | `18` |
| `legend` | `67` |
| `axis` | `9` |
| `axes` | `7` |
| `gridline` | `4` |
| `series` | `19` |
| `palette` | `1` |
| `empty` | `7` |
| `error` | `9` |
| `loading` | `9` |
| `aria` | `14` |
| `label` | `21` |
| `table` | `8` |
| `keyboard` | `1` |
| `focus` | `1` |
| `tooltip` | `1` |
| `interactive` | `1` |
| `contrast` | `0` |
| `responsive` | `0` |
| `mobile` | `0` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |
| `animation` | `0` |
| `shimmer` | `0` |

Audit conclusions:

- Generated charts `source_css` metadata is present.
- Generated `source_css` does not list a theme file even though chart variables rely on theme color and semantic tokens.
- Docs include meaningful accessibility guidance for chart names, equivalent data, and non-interactive chart visuals.
- Docs do not directly mention contrast, responsive/mobile behavior, reduced-motion, forced-colors, animation, or shimmer.

## Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Rendering charts with SVG, canvas, or third-party chart libraries.
- Keeping visual output synchronized with source data.
- Providing accessible chart names and descriptions.
- Providing text, stat, table, or downloadable alternatives when exact values matter.
- Marking redundant visuals `aria-hidden="true"` only when nearby content exposes the same information.
- Managing `aria-busy`, `aria-live`, loading, empty, and error state changes.
- Implementing keyboard/focus behavior for interactive chart controls, tooltips, selection, drilldowns, or hover alternatives.
- Avoiding color-only encoding for critical distinctions.

CSS source currently provides:

- Tokenized chart shell surfaces.
- Header, meta, actions, body, canvas, and legend layout.
- SVG axis, gridline, series, area, and bar styling hooks.
- Empty, error, and loading visuals.
- Loading shimmer animation.
- Responsive header/actions/legend wrapping at `max-width: 768px`.
- Canvas/SVG fill sizing for embedded renderers.

Audit findings:

- Loading shimmer has animation without file-local reduced-motion handling.
- Forced-colors handling is absent.
- No focus styles exist because charts are not inherently interactive; interactive chart controls remain consumer-owned.
- Series/legend/axis color hooks inherit contrast and color-only risks from theme audits.
- Responsive behavior exists in source but is not directly documented.
- `!important` canvas/SVG sizing rules may be necessary third-party renderer compatibility and must be classified before cleanup.

## Risks and Future Routing

- Chart meaning cannot be solved by CSS; accessible names, descriptions, table/stat alternatives, exact value exposure, and dynamic updates remain consumer-owned.
- Series, bar, legend, and axis classes are visual hooks and must not be treated as semantic data encoding by themselves.
- The palette relies on generic theme/semantic tokens and `color-mix(...)`; contrast and color-only risks must coordinate with prior theme audits.
- Loading shimmer has animation without file-local reduced-motion handling; record as an audit finding only.
- Forced-colors handling is absent; record as an audit finding only.
- The `!important` canvas/SVG sizing rules may be intentional third-party chart-library compatibility and must be classified before cleanup.
- `.card .chart` and `.chart-grid line.major` create cross-component/global hook evidence that must be reviewed before selector cleanup.
- Responsive behavior is limited to one `max-width: 768px` media block; docs do not directly describe responsive/mobile behavior.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Charts CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Generated docs metadata refresh: later approved docs-index item.
- Selector classification changes: later approved selector inventory item.
- Theme/contrast/data-viz checks: later approved visual/contrast QA items.
- Accessibility/data alternatives guidance: later approved accessibility/docs item.
- Dist refresh: later approved release/build-output item.
