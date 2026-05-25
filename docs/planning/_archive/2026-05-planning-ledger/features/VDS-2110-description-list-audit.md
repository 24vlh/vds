# VDS-2110 Description List Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2110`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2110-description-list-audit.md`

## 1. Goal

Create the description list component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only key/value list contract: semantic `dl/dt/dd` usage, inline/stacked/columns layouts, bordered/striped surfaces, compact/spacious density, responsive stacking, docs/index metadata, package-facing dist presence, and accessibility/theming risks before any description-list CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/description-list.css` selector, token, semantic description-list, inline, stacked, columns, bordered, striped, compact, spacious, responsive, theme, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the description-list class surface.
- Record raw docs and generated docs-index metadata for `vds-description-list`.
- Record package-facing `dist/components/description-list.css` and `.min.css` presence.
- Add a description-list audit artifact for later CSS fixes, docs rewrite, selector classification, metadata refresh, accessibility review, theme/contrast checks, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2110` is done, and the next recommended item is `VDS-2120`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding table, form, disclosure, filtering, data-loading, focus, or keyboard behavior.
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
  - `@24vlh/agents/docs_vds/components/vds-description-list.json`
- Repo files:
  - `@24vlh/vds/src/components/description-list.css`
  - `@24vlh/vds/doc-raw/vds-description-list.doc.html`
  - `@24vlh/vds/dist/components/description-list.css`
  - `@24vlh/vds/dist/components/description-list.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/description-list.css` has `110` lines.
- Selector blocks: `15`.
- Expanded selectors: `16`.
- Declarations: `35`.
- Custom property declaration lines: `11`.
- Unique local `--dl-*` token names: `7`.
- `var(...)` references: `24`.
- `!important` declarations: `0`.
- Hard-coded hex/rgb color references: `0`.
- `color-mix(...)` uses: `0`.

Media, interaction, and state evidence:

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

Layout and style evidence:

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

Package-facing output evidence:

- `@24vlh/vds/dist/components/description-list.css` exists.
- `@24vlh/vds/dist/components/description-list.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/description-list.css`.
- `@24vlh/vds/src/core.css` does not import description list.

## 5. Component Contract

Current description-list source surfaces:

- Root/local variables:
  - `[data-vds-description-list]`
  - `.vds-description-list`
- Base list:
  - `.description-list`
  - `.description-list__item`
  - `.description-list__term`
  - `.description-list__desc`
- Layout variants:
  - `.description-list--inline`
  - `.description-list--stacked`
  - `.description-list--columns`
- Style variants:
  - `.description-list--bordered`
  - `.description-list--striped`
- Density variants:
  - `.description-list--compact`
  - `.description-list--spacious`

Source interpretation:

- Description lists are visual key/value layout primitives, not behavior components.
- CSS owns key/value grid layout, term/value typography, bordered/striped surfaces, density aliases, and responsive collapse for inline layout.
- Consumer/application code owns semantic `dl/dt/dd` markup, term/value content quality, accessible labeling where needed, dynamic value updates, and choosing tables for true tabular comparison data.
- Description-list selectors, local variables, layout variants, density variants, responsive behavior, and docs examples are compatibility-sensitive.

## 6. Local Token Surface

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

## 7. Selector/API Evidence

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

## 8. Docs and Generated Index Evidence

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

## 9. Accessibility and Behavior Boundaries

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

## 10. Risks and Future Routing

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

## 11. Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-description-list-audit.md` becomes the decision source for later description-list CSS fixes, docs rewrite, selector classification, metadata refresh, accessibility review, theme/contrast checks, migration notes, and release verification.

## 12. Validation Plan

Run after documentation updates:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
  - If this fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Read-only description-list audit scan.
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

- Added `@24vlh/vds/docs/planning/features/VDS-2110-description-list-audit.md`.
- Added `@24vlh/vds/docs/planning/components/vds-description-list-audit.md`.
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
  - Per `VDS-2110` scope, `pnpm run consumer:scan` was not run.
- Read-only description-list audit scan:
  - Recorded `110` source CSS lines, `15` selector blocks, `16` selectors, `35` declarations, `11` custom property declaration lines, `7` unique local `--dl-*` token names, `24` `var(...)` references, `0` hover matches, `0` `:focus-visible` matches, `0` active matches, `0` disabled matches, `0` selected matches, `0` loading matches, `0` transitions, `0` animations/keyframes, `0` reduced-motion blocks, `0` forced-colors blocks, `1` media block, `2` grid display declarations, `5` grid-template declarations, `2` gap declarations, `2` padding declarations, `1` border declaration, `2` border-radius declarations, `2` background declarations, `2` color declarations, `1` letter-spacing declaration, `0` hard color references, `0` `!important`, `12` description-list-source classes, `10` public classes, `2` candidate-public classes, `169` raw-doc lines, `4` generated docs blocks, `2` code examples, `16` generated class tokens, empty generated `source_css`, index import presence, core import absence, and package-facing dist file presence.
- Markdown sanity checks:
  - Passed: `VDS-2110` appears as `done`, `VDS-0500` remains `in-progress`, the description-list artifact path resolves, plan/artifact scope agrees that no runtime/generated files changed, and the next recommended item is `VDS-2120 Documentation block audit`.
- `git diff --check`
  - Passed for changed planning files.

Notes:

- The WSL wrapper command is not available in this shell, so validation commands were run directly from `@24vlh/vds`.
