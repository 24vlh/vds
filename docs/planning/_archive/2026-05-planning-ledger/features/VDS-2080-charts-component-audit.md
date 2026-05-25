# VDS-2080 Charts Component Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2080`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2080-charts-component-audit.md`

## 1. Goal

Create the charts component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only chart shell contract: chart containers, SVG/canvas wrappers, legends, axes, gridlines, series/area/bar hooks, empty/error/loading states, responsive behavior, docs/index metadata, package-facing dist presence, and accessibility/theming risks before any chart CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/charts.css` selector, token, chart shell, legend, axis, gridline, series, area, bar, state, animation, responsive, and third-party chart wrapper evidence.
- Record public and candidate-public selector inventory evidence for the chart class surface.
- Record raw docs and generated docs-index metadata for `vds-charts`.
- Record package-facing `dist/components/charts.css` and `.min.css` presence.
- Add a charts component audit artifact for later CSS fixes, docs rewrite, accessibility review, theme/contrast checks, data-visualization guidance, selector classification, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2080` is done, and the next recommended item is `VDS-2090`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding JavaScript rendering, chart-library adapters, tooltips, selection, data tables, live updates, loading behavior, or interactive chart keyboard behavior.
- Adding reduced-motion handling, forced-colors handling, responsive screenshots, visual checks, selector reclassification, docs rewrites, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-charts.json`
- Repo files:
  - `@24vlh/vds/src/components/charts.css`
  - `@24vlh/vds/doc-raw/vds-charts.doc.html`
  - `@24vlh/vds/dist/components/charts.css`
  - `@24vlh/vds/dist/components/charts.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/charts.css` has `485` lines.
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

Media, interaction, and state evidence:

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

Package-facing output evidence:

- `@24vlh/vds/dist/components/charts.css` exists.
- `@24vlh/vds/dist/components/charts.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/charts.css`.
- `@24vlh/vds/src/core.css` does not import charts.

## 5. Component Contract

Current chart source surfaces:

- Root scopes:
  - `[data-vds-chart]`
  - `.vds-chart`
- Base and size variants:
  - `.chart`
  - `.chart--sm`
  - `.chart--lg`
  - `.chart--bare`
- Header, meta, and actions:
  - `.chart__header`
  - `.chart__title`
  - `.chart__subtitle`
  - `.chart__meta`
  - `.chart__meta-item`
  - `.chart__meta-dot`
  - `.chart__actions`
- Body and rendering wrapper:
  - `.chart__body`
  - `.chart__canvas`
  - `.chart__canvas canvas`
  - `.chart__canvas svg`
- Legend system:
  - `.chart__legend`
  - `.chart__legend--right`
  - `.chart-legend__item`
  - `.chart-legend__swatch`
  - `.chart-legend__swatch--1` through `.chart-legend__swatch--6`
  - `.chart-legend__label`
- Axis and grid hooks:
  - `.chart-axis`
  - `.chart-axis--x`
  - `.chart-axis--y`
  - `.chart-grid`
  - `.major`
- Series, area, and bar hooks:
  - `.chart-series--1` through `.chart-series--6`
  - `.chart-area--1` through `.chart-area--6`
  - `.chart-bar--1` through `.chart-bar--6`
  - `.chart-bar--positive`
  - `.chart-bar--negative`
  - `.chart-bar--neutral`
- State surfaces:
  - `.chart--empty`
  - `.chart--error`
  - `.chart--loading`
  - `.chart-state`
  - `.chart-state__icon`
  - `.chart-state__title`
  - `.chart-state__body`
- Cross-component hook:
  - `.card .chart`

Source interpretation:

- Charts are CSS shells and hooks for rendering engines, not a rendering runtime.
- CSS owns layout, surfaces, legends, axis/grid/series styling hooks, state visuals, and responsive header/action wrapping.
- Consumer/application code owns data rendering, accessible data exposure, interaction, live updates, tooltip behavior, and state changes.
- Chart classes, local tokens, series hooks, state classes, canvas/SVG sizing rules, and responsive behavior are compatibility-sensitive.

## 6. Local Token Surface

Current local token groups:

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
- They pull from primitive spacing/radius/border, theme surface/text/border tokens, semantic state tokens, and `color-mix(...)`.
- The series palette uses generic theme/semantic tokens rather than chart-prefixed theme tokens.
- No local token is approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

Selector inventory evidence:

- `59` chart-source classes are defined in selector inventory.
- Classification totals:
  - `43` public.
  - `16` candidate-public.

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
- Later series, area, bar, and swatch classes are compatibility-sensitive because they are source-defined palette hooks.
- `.card` and `.major` appear in charts source through `.card .chart` and `.chart-grid line.major`; those cross-component/global hooks must be classified before cleanup.

## 8. Docs and Generated Index Evidence

Raw docs evidence:

- `@24vlh/vds/doc-raw/vds-charts.doc.html` has `924` lines.
- Raw docs cover installation/dependencies, structural model, chart sizes, headers/meta/actions, legends, SVG axes, SVG series, bars, empty/error/loading states, dashboards, accessibility rules, and usage guidance.
- Raw docs examples include SVG/canvas wrappers, `aria-label`, `role="img"`, `aria-hidden`, `aria-busy`, `aria-live`, legends, and table/stat alternatives.

Generated index evidence:

- `@24vlh/agents/docs_vds/components/vds-charts.json`
- Blocks: `10`.
- Code examples: `10`.
- Generated class tokens: `85`.
- Generated `source_css`:
  - `base.css`
  - `charts.css`
  - `content-blocks.css`
  - `layout.css`
  - `primitives.css`
  - `typography.css`

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
- Generated `source_css` does not list a theme file even though chart tokens rely on theme color and semantic tokens.
- Docs cover accessibility responsibilities for chart names, alternate data exposure, and non-interactive canvas/SVG usage.
- Docs do not directly cover contrast, responsive/mobile behavior, reduced-motion, forced-colors, animation, or shimmer, despite source evidence for responsive behavior and loading animation.

## 9. Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Rendering data with SVG, canvas, or a third-party chart library.
- Ensuring data accuracy and keeping visual output synchronized with source data.
- Providing accessible names/descriptions through `aria-label`, `aria-labelledby`, or `aria-describedby`.
- Providing table, stat, text, or downloadable alternatives when exact values matter.
- Marking decorative or redundant visual charts `aria-hidden="true"` only when equivalent data exists nearby.
- Managing `aria-busy`, `aria-live`, loading, empty, and error state changes.
- Implementing keyboard support and focus management for interactive chart controls, tooltips, selection, or drilldown behavior.
- Avoiding color-only encoding for critical distinctions.

CSS source currently provides:

- Tokenized chart shell surfaces.
- Header, title, subtitle, meta, actions, body, canvas, and legend layout.
- SVG axis, gridline, series, area, and bar styling hooks.
- Empty, error, and loading state visuals.
- Loading shimmer animation.
- A single responsive collapse/wrap behavior at `max-width: 768px`.
- `!important` canvas/SVG sizing intended to keep embedded renderers filling the chart canvas.

Audit findings:

- Loading shimmer has animation without file-local reduced-motion handling.
- Forced-colors handling is absent.
- No focus styles exist because charts are not inherently interactive; interactive chart controls remain consumer-owned.
- Series/legend/axis color hooks inherit contrast and color-only risks from theme audits.
- Responsive behavior exists in source but is not directly documented.
- `!important` canvas/SVG sizing rules may be necessary third-party library compatibility and need classification before cleanup.

## 10. Risks and Future Routing

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

## 11. Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-charts-component-audit.md` becomes the decision source for later chart CSS fixes, docs rewrite, accessibility review, theme/contrast checks, data-visualization guidance, selector classification, migration notes, and release verification.

## 12. Validation Plan

Run after documentation updates:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
  - If this fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Read-only charts audit scan.
- Markdown sanity checks.
- `git diff --check`

Forbidden commands:

- `pnpm run build`
- `pnpm run build:prod`
- `pnpm run docs:vds:index`
- `pnpm run inventory:selectors`
- `pnpm run consumer:scan`
- any write/regeneration command.

## 13. Implementation Log

- Added `@24vlh/vds/docs/planning/features/VDS-2080-charts-component-audit.md`.
- Added `@24vlh/vds/docs/planning/components/vds-charts-component-audit.md`.
- Updated `@24vlh/vds/docs/planning/master-feature-map.md`.

Validation commands:

- `pnpm run audit:tokens`
  - Passed: token usage audit passed for `43` files.
- `pnpm run audit`
  - Passed: CSS parse, class usage, token usage, docs dependency, and selector inventory checks passed.
- `pnpm run audit:dist`
  - Passed: generated artifacts are fresh with `80` CSS files checked.
- `pnpm run audit:consumers`
  - Failed only because generated consumer compatibility reports are stale:
    - `docs/planning/api/vds-consumer-compatibility.json`
    - `docs/planning/api/vds-consumer-compatibility.md`
  - Per `VDS-2080` scope, `pnpm run consumer:scan` was not run.
- Read-only charts audit scan:
  - Recorded `485` source CSS lines, `68` selector blocks, `74` selectors, `204` declarations, `37` custom property declarations, `37` unique `--chart-*` tokens, `132` `var(...)` references, `1` `(max-width: 768px)` media block, `1` `@keyframes chart-loading-shimmer`, `8` loading matches, `3` empty matches, `3` error matches, `1` animation declaration, `0` reduced-motion blocks, `0` forced-colors blocks, `15` `color-mix(...)` uses, `2` `!important` canvas/SVG sizing declarations, `0` hard-coded hex/rgb colors, `59` chart-source classes, `43` public classes, `16` candidate-public classes, `924` raw-doc lines, `10` generated docs blocks, `10` code examples, `85` generated class tokens, non-empty generated `source_css`, index import presence, core import absence, and package-facing dist file presence.
- Markdown sanity checks:
  - Passed: `VDS-2080` appears as `done`, `VDS-0500` remains `in-progress`, the charts artifact path resolves, plan/artifact scope agrees that no runtime/generated files changed, and the next recommended item is `VDS-2090 Command surface audit`.
- `git diff --check`
  - Passed for changed planning files.

Notes:

- The WSL wrapper command is not available in this shell, so validation commands were run directly from `@24vlh/vds`.
