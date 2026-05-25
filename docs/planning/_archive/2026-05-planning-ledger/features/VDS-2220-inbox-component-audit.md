# VDS-2220 Inbox Component Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2220`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2220-inbox-component-audit.md`

## 1. Goal

Create the inbox component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only inbox contract: dense row lists, top navigation, search open state, tabs, filters, row densities, flat/card rendering, badges, status icons, actions, expandable details, local responsive helpers, docs/index metadata, package-facing dist presence, and accessibility/theming/motion risks before any inbox CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/inbox.css` selector, local variable, row, navigation, search, tab, filter, action, expanded-details, status, responsive-helper, z-index, motion, theme, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the inbox class surface.
- Record raw docs and generated docs-index metadata for `vds-inbox`.
- Record package-facing `dist/components/inbox.css` and `.min.css` presence.
- Add an inbox component audit artifact for later CSS fixes, docs rewrite, selector classification, accessibility review, APG tabs/disclosure/filter guidance, responsive/mobile QA, z-index review, motion/forced-colors cleanup, theme/contrast checks, virtualization guidance, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2220` is done, and the next recommended item is `VDS-2230`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding search, filtering, tab selection, expand/collapse, routing, row selection, loading, virtualization, live announcements, focus management, keyboard behavior, accessibility smoke tests, responsive screenshots, visual checks, selector reclassification, docs rewrites, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-inbox.json`
- Repo files:
  - `@24vlh/vds/src/components/inbox.css`
  - `@24vlh/vds/doc-raw/vds-inbox.doc.html`
  - `@24vlh/vds/dist/components/inbox.css`
  - `@24vlh/vds/dist/components/inbox.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/inbox.css` has `1303` lines.
- Selector blocks: `171`.
- Expanded selectors: `204`.
- Declarations: `583`.
- Local custom property declaration lines: `36`.
- Unique local custom property names: `18`.
- `var(...)` references: `338`.
- `!important` declarations: `15`.
- Hard-coded hex/rgb color references: `0`.
- `color-mix(...)` uses: `0`.

State and motion evidence:

- `:hover` selector matches: `7`.
- `:focus` selector matches: `0`.
- `:focus-visible` selector matches: `2`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `1`.
- Disabled/`aria-disabled` selector matches: `40`.
- Selected/`aria-selected` selector matches: `1`.
- Expanded/open selector matches: `15`.
- Hidden/visible selector matches: `6`.
- Loading selector matches: `0`.
- Transition declarations: `4`.
- Transform declarations: `5`.
- Animation declarations: `0`.
- `@keyframes`: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Responsive and layout evidence:

- Media blocks: `6`.
  - `max-width: 768px`: `3`.
  - `min-width: 769px`: `1`.
  - `max-width: 1024px`: `1`.
  - `min-width: 1025px`: `1`.
- Flex display declarations: `18`.
- Inline-flex display declarations: `20`.
- Grid display declarations: `2`.
- Gap declarations: `45`.
- Grid-template references: `10`.
- Overflow declarations: `9`.
- Position declarations: `4`.
- Hard-coded z-index declarations: `1`, `z-index: 40` on `.inbox-cornerbar`.
- Container queries: `0`.

Package-facing output evidence:

- `@24vlh/vds/dist/components/inbox.css` exists.
- `@24vlh/vds/dist/components/inbox.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/inbox.css`.
- `@24vlh/vds/src/core.css` does not import inbox.

## 5. Component Contract

Current inbox source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root scope | `[data-vds-inbox]`, `.vds-inbox` | local inbox token scope |
| Top nav | `.inbox-nav`, `.inbox-nav__*`, `.inbox-nav__bar--search-full` | search, tabs, and action rails |
| Tabs | `.inbox-tabs`, `.inbox-tab`, `.inbox-tab__count`, `.is-active`, `[aria-selected="true"]` | visual tablist styling and state hooks |
| Search | `.inbox-search`, `.inbox-search__toggle`, `.inbox-search__field`, `.inbox-search__input`, `.is-open`, `[aria-expanded="true"]` | collapsed/open search visuals |
| List | `.inbox__list`, `.inbox--flat` | rounded card list and flat separator list rendering |
| Rows | `.inbox-row`, `.inbox-row__main`, `.inbox-row__inner`, `.inbox-row__meta`, `.inbox-row__data`, `.inbox-row__actions` | row grid and action layout |
| Density | `.inbox-row--minimal`, `.inbox-row--normal`, `.inbox-row--rich`, `.inbox-row--mega`, `.inbox--dense` | row density and type scale variants |
| Content | `.inbox-row__titleline`, `.inbox-row__title`, `.inbox-row__labels`, `.inbox-label`, `.inbox-row__glance`, `.inbox-row__details`, `.inbox-row__metafoot` | scannable row metadata |
| Status | `.inbox-row__status`, `.inbox-row__status-icon`, `.is-bookmarked`, `.is-starred`, `.is-flagged`, `.icon-flag--*` | visual bookmark/star/flag state hooks |
| Badges | `.inbox-row__badges`, `.inbox-badge`, semantic badge modifiers | row badge chips |
| Actions | `.inbox-action`, action style/placement modifiers, disabled hooks | row/nav/corner action styling |
| Expansion | `.inbox-row__expanded`, `.inbox-row--open`, `.inbox-row--glance-open`, `.is-hidden`, `.is-visible` | expanded details and hidden-row helpers |
| Filters | `.inbox-filter`, `.inbox-filter__*`, `.inbox-filter__chip--active`, `[aria-pressed="true"]` | lightweight filter chip surfaces |
| Corner bar | `.inbox-cornerbar`, `.inbox-cornerbar--left`, `.inbox-cornerbar__inner` | fixed bottom action cluster |
| Local helpers | `.inbox__hide-sm`, `.inbox__show-sm`, `.inbox__hide-md`, `.inbox__show-md`, `.inbox__truncate`, `.inbox__stack`, `.inbox__cluster`, `.inbox__form`, `.inbox__sr-only` | component-local responsive, composition, form, and accessibility helpers |

Source interpretation:

- `@24vlh/vds/src/components/inbox.css` is the source truth for current inbox CSS behavior.
- Inbox CSS owns visual/layout/state hooks for inbox rows, navigation, search, tabs, actions, filters, details, responsive helpers, and local utility helpers.
- CSS does not own search open/close state, search filtering, tab selection, `aria-*` synchronization, filter state, route state, expand/collapse behavior, row selection, action execution, keyboard behavior, focus management, virtualization, loading states, or live announcements.
- Existing inbox selectors, local variables, density variants, row/action/filter/search/tab hooks, expanded/hidden state hooks, responsive helpers, accessibility helpers, docs examples, and package-facing outputs are compatibility-sensitive.

## 6. Token and Local Variable Surface

Local custom properties:

- `--inbox-row-radius`
- `--inbox-row-border`
- `--inbox-row-bg`
- `--inbox-row-bg-hover`
- `--inbox-row-shadow`
- `--inbox-title-size`
- `--inbox-desc-size`
- `--inbox-icon-size`
- `--inbox-icon-muted`
- `--inbox-icon-strong`
- `--inbox-action-gap`
- `--inbox-badge-gap`
- `--inbox-row-pad-x`
- `--inbox-row-pad-y`
- `--inbox-actions-min-width`
- `--inbox-actions-justify`
- `--inbox-flag-color`
- `--inbox-flag-surface`

Audit conclusions:

- Inbox local variables mostly alias VDS spacing, type, icon, radius, surface, semantic, and border tokens.
- Flag and semantic badge colors inherit contrast risks from prior theme audits.
- The hard-coded `z-index: 40` on `.inbox-cornerbar` should be classified against z-index token guidance before cleanup.
- No local variable, token reference, density value, or responsive helper is approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

Selector inventory totals:

- Inbox-source classes: `112`.
- Public classes: `99`.
- Candidate-public classes: `13`.

Candidate-public classes:

- `.inbox--dense`
- `.inbox-badge--danger`
- `.inbox-badge--warning`
- `.inbox-nav__bottom--center`
- `.inbox-nav__bottom--right`
- `.inbox-row__actions--center`
- `.inbox-row__focus-visible`
- `.inbox-row__hover`
- `.inbox__stack--loose`
- `.inbox__truncate`
- `.is-disabled`
- `.is-hidden`
- `.is-visible`

Audit conclusions:

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- Generic state classes such as `.is-disabled`, `.is-hidden`, and `.is-visible` are compatibility-sensitive because inbox CSS consumes them.
- Component-local helpers overlap conceptually with utilities, forms, and accessibility helpers, but no reclassification is approved here.
- Future selector pruning or reclassification requires migration approval.

## 8. Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-inbox.doc.html` has `2606` lines.
- Docs cover installation/dependencies, expanded forms and layout utilities, structural model, top navigation bar, search open/full-width search, disabled buttons, row variants, list styles, badges row, status icons, title label reflow, action layout patterns, flat versus rich actions, expandable details, hidden row pattern, filter template, bottom corner action bar, and responsive visibility helpers.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-inbox.json`
- Blocks: `19`.
- Code examples: `20`.
- Generated class tokens: `113`.
- Generated `source_css`: `[]` (`source_css: []`).

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `inbox` | `1099` |
| `row` | `544` |
| `search` | `51` |
| `filter` | `70` |
| `action` | `292` |
| `details` | `45` |
| `expanded` | `28` |
| `hidden` | `83` |
| `badge` | `53` |
| `status` | `96` |
| `bookmark` | `19` |
| `star` | `14` |
| `flag` | `90` |
| `density` | `2` |
| `minimal` | `9` |
| `rich` | `16` |
| `mega` | `10` |
| `aria` | `172` |
| `aria-expanded` | `10` |
| `aria-controls` | `0` |
| `aria-disabled` | `5` |
| `aria-selected` | `9` |
| `role` | `46` |
| `keyboard` | `0` |
| `focus` | `1` |
| `focus-visible` | `0` |
| `responsive` | `5` |
| `mobile` | `3` |
| `disabled` | `26` |
| `loading` | `0` |
| `selected` | `9` |
| `virtual` | `0` |
| `contrast` | `0` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |

Audit conclusions:

- Generated `source_css: []` is a docs-index metadata gap and is not manually fixed here.
- Raw docs strongly cover structure, examples, ARIA state examples, disabled examples, responsive helper examples, and stateful filter chips.
- Raw docs do not mention keyboard, `aria-controls`, virtualized lists, contrast, reduced-motion, forced-colors, or loading.
- Docs examples include adjacent button, icon, forms, layout, section, doc-block, and utility dependencies; later docs rewrite should separate runtime requirements from demo scaffolding.

## 9. Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Search open/close state and search filtering.
- Tab selection state, `aria-selected`, focus movement, and keyboard behavior if APG tabs semantics are used.
- Expand/collapse state, `aria-expanded`, `aria-controls`, and disclosure keyboard behavior.
- Filter state, `aria-pressed`, sort/order state, and result announcements.
- Disabled behavior differences between native buttons and anchors using `aria-disabled`.
- Row selection, route state, action execution, destructive-action confirmation, loading state changes, and live announcements.
- Virtualized list semantics, if the inbox is used with virtualization.
- Icon-only action labels and visible status text for bookmark/star/flag state.

CSS source currently provides:

- Focus-visible styles for tabs and row focus helpers.
- Hover, active, disabled, selected, expanded, hidden, visible, and pressed visual hooks.
- Component-local `.inbox__sr-only`.
- No file-local reduced-motion or forced-colors handling.
- No runtime behavior for tabs, disclosure, filters, or search.

Audit findings:

- Inbox behavior cannot be solved by CSS; docs and consumers must preserve tab, disclosure, filter, search, and action behavior boundaries.
- `aria-controls` is absent from raw docs despite expandable/search examples using `aria-expanded`.
- Keyboard guidance is absent from raw docs.
- Status icons and flag colors can become color-only signals without readable text.
- `!important` is used for hidden/visible responsive/accessibility helpers and should remain compatibility-sensitive until later cleanup.
- Generated docs metadata does not list `inbox.css`, weakening automated docs ownership checks until a later docs-index refresh/fix.

## 10. Responsive, Motion, and Forced-Colors Evidence

Responsive source behavior:

- At `max-width: 768px`, row inner grids collapse, actions move below, title/labels wrap, nav bars stack, bottom rails stretch, search expands, and filter groups wrap.
- `.inbox__hide-sm` hides at `max-width: 768px`.
- `.inbox__show-sm` hides at `min-width: 769px`.
- `.inbox__hide-md` hides at `max-width: 1024px`.
- `.inbox__show-md` hides at `min-width: 1025px`.

Motion source behavior:

- Search field width/opacity transitions.
- Row background/border/transform transitions.
- Action background/border/color/transform transitions.
- No animations or keyframes.
- No reduced-motion media block.

Forced-colors evidence:

- Source has `0` forced-colors blocks.
- Raw docs mention forced-colors `0` times.

Audit conclusions:

- Responsive helper behavior is source truth and should not be inverted or renamed without migration approval.
- Source has transitions but no file-local reduced-motion block; this is an audit finding only.
- Forced-colors review remains future work.

## 11. Risks and Future Routing

- Inbox is a broad public component surface with row, nav, search, tabs, filter, action, details, and local helper APIs.
- Component-local visibility, stack, truncate, form, and sr-only helpers overlap with utilities/forms/accessibility helper ownership and need classification before cleanup.
- `z-index: 40` on `.inbox-cornerbar` should be reviewed against z-index token policy from the overlay stack audit.
- `source_css: []` is a generated docs metadata gap.
- Raw docs contain rich demo dependencies and state examples that may obscure the package-facing runtime requirements.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Inbox CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Selector classification: later approved selector inventory/docs item.
- Tabs/disclosure/filter keyboard and ARIA guidance: later approved accessibility/docs item.
- Responsive screenshots and virtualization guidance: later approved responsive/consumer guidance item.
- Theme/contrast and forced-colors checks: later approved visual integrity item.

## 12. Public Interfaces

- No runtime CSS APIs change.
- No CSS, raw docs, generated docs index, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-inbox-component-audit.md` becomes the decision source for later inbox CSS fixes, docs rewrite, selector classification, accessibility review, APG tabs/disclosure/filter guidance, responsive/mobile QA, z-index review, motion/forced-colors cleanup, theme/contrast checks, virtualization guidance, migration notes, and release verification.

## 13. Validation Plan

Approved validation commands:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
- Read-only inbox audit scan.
- Markdown sanity checks for master-map status, artifact path, no runtime/source/generated changes, and next recommended item.
- `git diff --check` for changed planning files.

Forbidden commands for this item:

- `pnpm run build`
- `pnpm run build:prod`
- `pnpm run docs:vds:index`
- `pnpm run inventory:selectors`
- `pnpm run consumer:scan`

## 14. Post-Implementation Validation Log

- `pnpm run audit:tokens` passed: token usage audit passed for `43` files.
- `pnpm run audit` passed: CSS parse, class, token, doc dependency, and selector inventory freshness checks passed.
- `pnpm run audit:dist` was attempted with a `120s` timeout. It started `node static/js/check-generated-artifacts.js --check` but did not complete before timing out. No write/regeneration command was run.
- `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `.md` are stale; per plan, `pnpm run consumer:scan` was not run.
- Read-only inbox audit scan confirmed CSS counts, local variables, selector inventory totals, docs/index evidence, import/package evidence, nav/search/tabs/filters/rows/actions/details/status/responsive-helper evidence, state hooks, z-index, `!important`, reduced-motion/forced-colors gaps, generated metadata gap, and dist presence.
- Markdown sanity checks passed for master-map status, `VDS-0500` in-progress status, artifact path, no runtime/source/generated/inventory/consumer-report changes, and next recommended item.
- `git diff --check` for changed planning files passed.
