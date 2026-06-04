# VDS-2230 Navigation Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2230`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2230-navigation-component-audit.md`

## 1. Goal

Create the navigation component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only navigation contract: primary nav, mobile panel/backdrop hooks, sidebars, breadcrumbs, pagination, tabs, toolbar, footer navigation, announcement bars, brand/action slots, responsive toggle behavior, docs/index metadata, package-facing dist presence, and accessibility/theming/motion risks before any navigation CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/navigation.css` selector, local variable, primary navigation, sidebar, breadcrumb, pagination, tabs, toolbar, footer navigation, announcement, mobile panel/backdrop, z-index, motion, theme, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the navigation class surface.
- Record raw docs and generated docs-index metadata for `vds-navigation`.
- Record package-facing `dist/components/navigation.css` and `.min.css` presence.
- Add a navigation component audit artifact for later CSS fixes, docs rewrite, selector classification, accessibility review, APG tabs/navigation guidance, mobile panel/focus policy, responsive QA, z-index review, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2230` is done, and the next recommended item is `VDS-2240 Overlays component audit`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding routing, mobile-menu JavaScript, focus trapping, dismiss behavior, active route synchronization, tab keyboard behavior, pagination data/state, announcement lifecycle behavior, accessibility smoke tests, responsive screenshots, visual checks, selector reclassification, docs rewrites, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-navigation.json`
- Repo files:
  - `@24vlh/vds/src/components/navigation.css`
  - `@24vlh/vds/doc-raw/vds-navigation.doc.html`
  - `@24vlh/vds/dist/components/navigation.css`
  - `@24vlh/vds/dist/components/navigation.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/navigation.css` has `946` lines.
- Selector blocks: `124`.
- Expanded selectors: `185`.
- Declarations: `422`.
- Local custom property declaration lines: `16`.
- Unique local custom property names: `8`.
- `var(...)` references: `230`.
- `!important` declarations: `0`.
- Hard-coded hex/rgb color references: `0`.
- `color-mix(...)` uses: `0`.

State and motion evidence:

- `:hover` selector matches: `20`.
- `:focus` selector matches: `0`.
- `:focus-visible` selector matches: `13`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `4`.
- Disabled selector matches: `10`.
- Current/`aria-current` selector matches: `3`.
- Selected/`aria-selected` selector matches: `4`.
- Expanded/open selector matches: `2`.
- Transition declarations: `8`.
- Transform declarations: `3`.
- Animation declarations: `0`.
- `@keyframes`: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Responsive and layout evidence:

- Media blocks: `1`, at `max-width: 768px`.
- Flex display declarations: `18`.
- Inline-flex display declarations: `16`.
- Grid display declarations: `0`.
- Gap declarations: `33`.
- Overflow declarations: `1`.
- Position declarations: `6`.
- Z-index declarations: `2`.
  - `.nav-panel`: `z-index: 40`.
  - `.nav-backdrop`: `z-index: 30`.
- Container queries: `0`.

Package-facing output evidence:

- `@24vlh/vds/dist/components/navigation.css` exists.
- `@24vlh/vds/dist/components/navigation.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/navigation.css`.
- `@24vlh/vds/src/core.css` does not import navigation.

## 5. Component Contract

Current navigation source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Core nav | `.nav`, `.nav__item`, `.nav__link`, active/disabled modifiers | shared navigation primitives |
| Density/level variants | `.nav--a`, `.nav--b`, `.nav--c`, `.nav--primary`, `.nav--sub`, `.nav--pills`, `.nav--vertical`, `.nav--mobile` | spacing, hierarchy, and orientation variants |
| Brand/actions | `.nav__brand`, `.nav__brand--compact`, `.nav__logo`, `.nav__actions`, `.nav-section` | brand, logo, and action slots |
| Toggle | `.nav__toggle`, `.nav__toggle--active` | mobile nav toggle visual state |
| Mobile panel | `.nav-panel`, `.nav-panel--open`, `.nav-backdrop`, `.nav-backdrop--visible` | mobile overlay panel and backdrop hooks |
| Sidebar | `.sidebar`, `.sidebar__section`, `.sidebar__nav`, collapsible/collapsed/expanded section hooks | vertical sidebar navigation and section disclosure hooks |
| Announcement | `.announcement`, `.announcement__*`, semantic announcement modifiers | announcement bar visuals and close control styling |
| Breadcrumbs | `.breadcrumbs`, `.breadcrumbs__item`, `.breadcrumbs__link`, `.breadcrumbs__separator` | breadcrumb trail layout and link styling |
| Pagination | `.pagination`, pagination variants, item/meta/status/prev/next/ellipsis classes | pagination and load-more visual patterns |
| Toolbar | `.toolbar`, `.toolbar--dense`, `.toolbar--spacious`, `.toolbar__*` | navigation-adjacent action bars |
| Footer nav | `.footer .nav`, `.footer .nav__item`, `.footer .nav__link` | footer-specific nav treatment |
| Tabs | `.nav-tabs`, `.nav-tabs--compact`, `.nav-tabs__item`, `.nav-tabs__icon`, `.nav-tabs__badge` | standalone tab visual system |

Source interpretation:

- `@24vlh/vds/src/components/navigation.css` is the source truth for current navigation CSS behavior.
- Navigation CSS owns visual/layout/state hooks for nav links, mobile panel/backdrop, sidebars, breadcrumbs, pagination, tabs, toolbar, footer nav, announcements, brand/action slots, and responsive toggle display.
- CSS does not own routing, mobile menu JavaScript, focus trapping, Escape/outside-click dismissal, active route synchronization, tab keyboard behavior, pagination data, announcement dismissal, live announcements, or disabled semantics beyond visual hooks.
- Existing navigation selectors, local variables, route/current hooks, active/selected/disabled hooks, mobile panel/backdrop behavior, tab/pagination/sidebar variants, responsive toggle behavior, docs examples, and package-facing outputs are compatibility-sensitive.

## 6. Token and Local Variable Surface

Local custom properties:

- `--pagination-gap`
- `--pagination-item-height`
- `--pagination-item-min-width`
- `--pagination-item-padding-x`
- `--pagination-item-radius`
- `--pagination-item-border`
- `--pagination-item-bg`
- `--pagination-item-color`

Audit conclusions:

- Navigation mostly relies on broader VDS spacing, type, border, radius, surface, footer, overlay, focus, and semantic tokens.
- Pagination is the only source-local token surface.
- Mobile panel and backdrop z-index values are hard-coded and should be classified against overlay stack guidance before cleanup.
- No local variable, token reference, state hook, z-index value, or responsive rule is approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

Selector inventory totals:

- Navigation-source classes: `83`.
- Public classes: `63`.
- Candidate-public classes: `20`.

Candidate-public classes:

- `.nav--a`
- `.nav--b`
- `.nav--c`
- `.nav-backdrop`
- `.nav-backdrop--visible`
- `.nav-panel`
- `.nav-panel--open`
- `.nav-tabs__item--disabled`
- `.nav__item--depth-2`
- `.nav__item--depth-3`
- `.nav__item--disabled`
- `.nav__link--depth-2`
- `.nav__link--depth-3`
- `.pagination--spacious`
- `.sidebar__section--collapsed`
- `.sidebar__section--collapsible`
- `.sidebar__section--expanded`
- `.sidebar__section-header`
- `.sidebar__section-title`
- `.sidebar__section-toggle-icon`

Audit conclusions:

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- Mobile panel/backdrop hooks are compatibility-sensitive because JavaScript is expected to toggle them.
- Sidebar collapse/expand and depth helper hooks are compatibility-sensitive because they may represent app state.
- Future selector pruning or reclassification requires migration approval.

## 8. Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-navigation.doc.html` has `1461` lines.
- Docs cover installation/dependencies, structural model, primary navigation, sidebar navigation, breadcrumbs, pagination, tabs, toolbar, footer navigation, announcement, navigation brand/actions, navigation toggle, primary/contextual navigation, and accessibility/usage rules.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-navigation.json`
- Blocks: `14`.
- Code examples: `24`.
- Generated class tokens: `82`.
- Generated `source_css`: `base.css`, `navigation.css`, and `typography.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `navigation` | `52` |
| `nav` | `360` |
| `primary` | `26` |
| `sidebar` | `20` |
| `breadcrumb` | `31` |
| `pagination` | `86` |
| `tabs` | `82` |
| `tab` | `122` |
| `toolbar` | `54` |
| `footer` | `27` |
| `announcement` | `70` |
| `brand` | `17` |
| `toggle` | `21` |
| `aria` | `64` |
| `aria-current` | `8` |
| `aria-selected` | `22` |
| `aria-expanded` | `3` |
| `aria-controls` | `2` |
| `aria-disabled` | `0` |
| `role` | `35` |
| `keyboard` | `3` |
| `focus` | `13` |
| `focus-visible` | `10` |
| `responsive` | `3` |
| `mobile` | `10` |
| `disabled` | `23` |
| `current` | `16` |
| `active` | `59` |
| `selected` | `22` |
| `contrast` | `1` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |

Audit conclusions:

- Generated docs metadata already lists `navigation.css`.
- Raw docs strongly cover structure, ARIA current/selected/expanded/controls examples, keyboard notes, focus-visible guidance, disabled guidance, and mobile panel/backdrop warnings.
- Raw docs do not mention `aria-disabled`, reduced-motion, or forced-colors.
- Docs examples include adjacent button, card, icon, logo, layout, typography, and utility dependencies; later docs rewrite should separate runtime requirements from demo scaffolding.

## 9. Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Routing and active route synchronization.
- `aria-current` on current navigation or pagination items.
- Mobile menu open/close state, `aria-expanded`, `aria-controls`, Escape/outside-click dismissal, and focus return.
- Focus trapping or inert background behavior when mobile panels are modal-like.
- Tab selection state, `aria-selected`, roving focus, and keyboard behavior if APG tabs semantics are used.
- Pagination page data, disabled behavior, next/previous state, and result announcements.
- Announcement dismissal/lifecycle and live announcement semantics if needed.
- Disabled semantics for anchors versus buttons.

CSS source currently provides:

- Hover, active, focus-visible, disabled, active/current, selected, expanded/open, and panel/backdrop visual hooks.
- Mobile toggle display at `max-width: 768px`.
- Fixed panel/backdrop layering through `z-index: 40` and `z-index: 30`.
- No file-local reduced-motion or forced-colors handling.
- No runtime behavior for routing, tabs, mobile panels, pagination, or announcements.

Audit findings:

- Navigation behavior cannot be solved by CSS; docs and consumers must preserve route, mobile-panel, tab, pagination, and announcement behavior boundaries.
- `aria-disabled` is absent from raw docs despite disabled navigation states.
- Source has transitions and transforms but no file-local reduced-motion handling.
- Forced-colors handling is absent.
- Mobile panel/backdrop hooks use hard-coded z-index values and need overlay stack review before cleanup.

## 10. Responsive, Motion, and Forced-Colors Evidence

Responsive source behavior:

- `.nav__toggle` is hidden by default and becomes `inline-flex` at `max-width: 768px`.
- Mobile panel/backdrop behavior is state-class driven, not media-query scoped.

Motion source behavior:

- Core links, toggle, sub/pill nav, announcement close, pagination items, mobile panel/backdrop, and tabs use transitions.
- Sidebar section toggle icon rotates for expanded state.
- Mobile panel uses `translateX(...)` transforms for closed/open state.
- No animations or keyframes.
- No reduced-motion media block.

Forced-colors evidence:

- Source has `0` forced-colors blocks.
- Raw docs mention forced-colors `0` times.

Audit conclusions:

- Responsive toggle behavior is source truth and should not be inverted or renamed without migration approval.
- Source has transitions/transforms but no file-local reduced-motion block; this is an audit finding only.
- Forced-colors review remains future work.

## 11. Risks and Future Routing

- Navigation is a broad public component surface with core links, sidebars, breadcrumbs, pagination, tabs, toolbar, footer nav, announcements, mobile panel, and backdrop APIs.
- Mobile panel/backdrop hooks cross into overlay behavior and should coordinate with `VDS-2240`.
- Footer nav selectors cross component boundaries with header/footer CSS and docs-only footer overrides.
- Tab classes overlap conceptually with any dedicated tabs guidance and require APG review before behavior recommendations change.
- Hard-coded z-index values require review against overlay stack guidance.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Navigation CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Selector classification: later approved selector inventory/docs item.
- Mobile panel/focus/backdrop policy: later approved overlay/accessibility item.
- Tabs keyboard and ARIA guidance: later approved accessibility/docs item.
- Theme/contrast, reduced-motion, and forced-colors checks: later approved visual integrity item.

## 12. Public Interfaces

- No runtime CSS APIs change.
- No CSS, raw docs, generated docs index, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-navigation-component-audit.md` becomes the decision source for later navigation CSS fixes, docs rewrite, selector classification, accessibility review, APG tabs/navigation guidance, mobile panel/focus policy, responsive QA, z-index review, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.

## 13. Validation Plan

Approved validation commands:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
- Read-only navigation audit scan.
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
- `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale; per plan, `pnpm run consumer:scan` was not run.
- Read-only navigation audit scan confirmed CSS counts, local variables, selector inventory totals, docs/index evidence, import/package evidence, primary/sidebar/breadcrumb/pagination/tabs/toolbar/footer/announcement/mobile-panel evidence, state hooks, z-index, reduced-motion/forced-colors gaps, docs metadata, and dist presence.
- Markdown sanity checks passed for master-map status, `VDS-0500` in-progress status, artifact path, no runtime/source/generated/inventory/consumer-report changes, and next recommended item.
- `git diff --check` for changed planning files passed.
