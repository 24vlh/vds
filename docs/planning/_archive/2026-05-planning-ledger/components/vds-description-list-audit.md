# VDS Description List Audit

Last updated: `2026-05-24`

Source item: `VDS-2110`

This file records the description list component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/description-list.css` is the source truth for current description-list CSS behavior.
- `@24vlh/vds/doc-raw/vds-description-list.doc.html` and `@24vlh/agents/docs_vds/components/vds-description-list.json` are docs/index evidence.
- Description lists are CSS key/value layout primitives for compact metadata and attribute summaries.
- Consumer/application code owns semantic `dl/dt/dd` markup, term/value content quality, accessible labeling where needed, dynamic value updates, and choosing tables for true tabular data.
- Existing description-list selectors, density modifiers, layout variants, style variants, responsive stacking behavior, and local `--dl-*` variables are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, or generated output refresh happens in `VDS-2110`.

## Source CSS Evidence

`@24vlh/vds/src/components/description-list.css` currently has:

- Lines: `110`.
- Selector blocks: `15`.
- Expanded selectors: `16`.
- Declarations: `35`.
- Custom property declaration lines: `11`.
- Unique local `--dl-*` token names: `7`.
- `var(...)` references: `24`.
- `!important` declarations: `0`.
- Hard-coded hex/rgb color references: `0`.
- `color-mix(...)` uses: `0`.

Media and interaction evidence:

- Media blocks: `1`, at `max-width: 768px`.
- `@keyframes`: `0`.
- `:hover` selector matches: `0`.
- `:focus-visible` selector matches: `0`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled selector matches: `0`.
- Selected selector matches: `0`.
- Loading/busy selector matches: `0`.
- Transition declarations: `0`.
- Transform declarations: `0`.
- Animation declarations: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Layout and visual evidence:

- Grid display declarations: `2`.
- Flex display declarations: `0`.
- Grid-template declarations: `5`.
- Gap declarations: `2`.
- Padding declarations: `2`.
- Align-items declarations: `1`.
- Overflow declarations: `0`.
- Border declarations: `1`.
- Border-radius declarations: `2`.
- Background declarations: `2`.
- Color declarations: `2`.
- Letter-spacing declarations: `1`.

Package-facing output:

- `@24vlh/vds/dist/components/description-list.css` exists.
- `@24vlh/vds/dist/components/description-list.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/description-list.css`.
- `@24vlh/vds/src/core.css` does not import description list.

## Component Contract

Current description-list source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root | `[data-vds-description-list]`, `.vds-description-list` | description-list-local variables |
| Base list | `.description-list`, `.description-list__item`, `.description-list__term`, `.description-list__desc` | key/value list layout and term/value text styles |
| Layout variants | `.description-list--inline`, `.description-list--stacked`, `.description-list--columns` | inline term/value pairs, stacked rows, and multi-column groups |
| Style variants | `.description-list--bordered`, `.description-list--striped` | bordered item cards and alternating row surfaces |
| Density variants | `.description-list--compact`, `.description-list--spacious` | local spacing and padding density aliases |

Source interpretation:

- Description lists are visual key/value layout primitives, not behavior components.
- CSS provides grid layout, term/value typography, bordered/striped surfaces, density aliases, and responsive inline collapse.
- Consumer/application code owns semantic markup, content quality, context labels, dynamic updates, and table-vs-description-list decisions.

## Local Token Surface

Current local variables:

| Variable | Role |
| --- | --- |
| `--dl-gap` | spacing between list items |
| `--dl-term-width` | inline term column width |
| `--dl-term-color` | term text color |
| `--dl-desc-color` | value text color |
| `--dl-border` | bordered item color |
| `--dl-radius` | bordered/striped item radius |
| `--dl-pad` | bordered/striped item padding |

Audit conclusions:

- Local description-list variables are component-owned aliases.
- They rely on primitive spacing/radius and theme text/border/surface tokens.
- Hard-coded layout values such as `12rem` and `minmax(220px, 1fr)` are classification candidates for later token/layout work.
- No local variable or token reference is approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- Description-list-source classes: `12`.
- Public classes: `10`.
- Candidate-public classes: `2`.

Public classes:

- `.description-list`
- `.description-list__item`
- `.description-list__term`
- `.description-list__desc`
- `.description-list--inline`
- `.description-list--stacked`
- `.description-list--columns`
- `.description-list--bordered`
- `.description-list--striped`
- `.description-list--compact`

Candidate-public classes:

- `.vds-description-list`
- `.description-list--spacious`

Audit conclusions:

- Candidate-public status reflects current docs coverage, not permission to remove or rename source-defined selectors.
- `.description-list--spacious` is source-defined but currently undocumented in raw docs/index tokens.
- Future selector pruning or reclassification requires migration approval.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-description-list.doc.html` has `169` lines.
- Docs cover basic description lists, inline layout, stacked and bordered lists, columns, striped lists, compact density, usage patterns, best practices, and accessibility rules.
- Docs use semantic `<dl>`, `<dt>`, and `<dd>` examples.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-description-list.json`
- Blocks: `4`.
- Code examples: `2`.
- Generated class tokens: `16`.
- Generated `source_css`: empty array.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `description` | `56` |
| `list` | `61` |
| `dl` | `14` |
| `dt` | `22` |
| `dd` | `21` |
| `term` | `17` |
| `desc` | `65` |
| `metadata` | `3` |
| `value` | `7` |
| `inline` | `3` |
| `stacked` | `5` |
| `bordered` | `3` |
| `striped` | `2` |
| `columns` | `2` |
| `compact` | `3` |
| `spacious` | `0` |
| `aria` | `0` |
| `keyboard` | `0` |
| `focus` | `0` |
| `responsive` | `0` |
| `mobile` | `0` |
| `forced-colors` | `0` |
| `reduced-motion` | `0` |
| `contrast` | `1` |
| `table` | `0` |

Audit conclusions:

- Generated `source_css: []` is a docs-index metadata gap.
- Raw docs cover semantic `dl/dt/dd` usage but do not mention the source responsive collapse behavior.
- Raw docs do not mention `.description-list--spacious`.
- Raw docs do not discuss table-vs-description-list boundaries directly.

## Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Using semantic `<dl>`, `<dt>`, and `<dd>` for term/value pairs.
- Avoiding description lists for true tabular comparison data.
- Keeping terms short and values scannable.
- Providing accessible context or headings for standalone metadata groups where needed.
- Updating dynamic values and announcing meaningful changes where needed.
- Preserving readable order when responsive stacking collapses inline pairs.

CSS source currently provides:

- Grid-based key/value layout.
- Inline, stacked, and column variants.
- Bordered and striped item surfaces.
- Compact and spacious density aliases.
- Responsive collapse of inline item columns at `max-width: 768px`.
- No file-local interaction, reduced-motion, forced-colors, loading, disabled, or selected states.

Audit findings:

- Description-list behavior is mostly static and semantic; CSS cannot provide meaningful term/value content.
- Empty generated `source_css` metadata can weaken docs ownership checks.
- `.description-list--spacious` is source-defined but absent from docs examples.
- Theme contrast risks apply to muted term text, bordered surfaces, and striped backgrounds.

## Risks and Future Routing

- Description-list selectors are a small but package-facing public surface; pruning or renaming requires migration approval.
- `source_css: []` should be fixed only through a later approved docs-index refresh.
- Hard-coded layout dimensions should be classified before token cleanup.
- Inline layout collapse must preserve semantic reading order.
- Description-list docs should later clarify when a table is more appropriate than a description list.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Description-list CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Generated docs metadata refresh: later approved docs-index item.
- Selector classification changes: later approved selector inventory item.
- Theme/contrast checks: later approved visual/contrast QA items.
- Dist refresh: later approved release/build-output item.

## Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-description-list-audit.md` becomes the decision source for later description-list CSS fixes, docs rewrite, selector classification, metadata refresh, accessibility review, theme/contrast checks, migration notes, and release verification.
