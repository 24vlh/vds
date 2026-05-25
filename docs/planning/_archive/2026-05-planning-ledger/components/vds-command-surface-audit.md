# VDS Command Surface Audit

Last updated: `2026-05-24`

Source item: `VDS-2090`

This file records the command surface audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/command.css` is the source truth for current command CSS behavior.
- `@24vlh/vds/doc-raw/vds-command.doc.html` and `@24vlh/agents/docs_vds/components/vds-command.json` are docs/index evidence.
- The current implementation is a CSS surface system for modal command palettes and command-page/dashboard helpers.
- Consumer/application code owns open/close state, focus movement/restoration, inert background behavior, Escape handling, search filtering, active index, `aria-selected`, `aria-activedescendant`, disabled action semantics, command execution, and live announcements.
- Existing command selectors, state classes, `[data-command-open]`, `[aria-hidden="false"]`, local variables, variant hooks, responsive behavior, and `z-modal` layering are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, or generated output refresh happens in `VDS-2090`.

## Source CSS Evidence

`@24vlh/vds/src/components/command.css` currently has:

- Lines: `1292`.
- Selector blocks: `157`.
- Expanded selectors: `219`.
- Declarations: `627`.
- Custom property declarations: `94`.
- Unique `--command-*` local token names: `47`.
- `var(...)` references: `425`.
- `!important` declarations: `1`.
- Hard-coded hex colors: `1`, in the backdrop `color-mix(...)`.
- `rgb(...)` / `rgba(...)` colors: `0`.
- `color-mix(...)` uses: `5`.

Media and interaction evidence:

- Media blocks: `9`, including `max-width: 640px`, `max-width: 1024px`, `max-width: 720px`, and `prefers-reduced-motion: reduce`.
- Feature queries: `0`.
- `@keyframes`: `0`.
- `:hover` selector matches: `2`.
- `:focus-visible` selector matches: `2`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled or `aria-disabled` selector matches: `4`.
- Selected or `aria-selected` selector matches: `7`.
- Active/current selector matches: `11`.
- Loading selector matches: `0`.
- Empty selector matches: `7`.
- Expanded selector matches: `0`.
- Transition declarations: `7`.
- Transform declarations: `9`.
- Animation declarations: `0`.
- Reduced-motion blocks: `1`.
- Forced-colors blocks: `0`.

Layout and overlay evidence:

- Flex display declarations: `42`.
- Grid display declarations: `11`.
- Position declarations: `6`.
- Z-index declarations: `1`.
- Overflow declarations: `8`.
- Max-height declarations: `4`.
- Backdrop-filter declarations: `0`.

Package-facing output:

- `@24vlh/vds/dist/components/command.css` exists.
- `@24vlh/vds/dist/components/command.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/command.css`.
- `@24vlh/vds/src/core.css` does not import command.

## Component Contract

Current command source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root | `[data-vds-commands]`, `.vds-commands` | command-local variables |
| Overlay shell | `.command`, `.command::before`, `.command--open`, `.command[data-command-open="true"]`, `.command[aria-hidden="false"]`, `.command--center` | fixed overlay, backdrop, open state, alignment |
| Panel/search | `.command__panel`, `.command__header`, `.command__leading-icon`, `.command__input`, `.command__hint`, `.command__hint-text`, `.command__shortcut`, `.command__kbd-key` | dialog panel, search row, keyboard hints |
| List/results | `.command__body`, `.command__scroll`, `.command__section`, `.command__section-label`, `.command__list`, `.command__item`, `.command__item--active`, `.command__item--disabled`, `[aria-selected="true"]`, `[aria-disabled="true"]` | result list, item state, disabled/selected visuals |
| Empty/footer | `.command__empty`, `.command__footer`, `.command-empty`, `.command-empty__title`, `.command-empty__body`, `.command-empty__actions` | empty state and helper text |
| Page/layout | `.command-page`, `.command-page--dense`, `.command-layout`, `.command-layout--balanced`, `.command-stack`, `.command-stack--loose`, `.command-toolbar`, `.command-grid` | command landing page and layout helpers |
| Cards/actions | `.command-card`, `.command-pill`, `.command-action` and descendants | dashboard cards, pills, primary/row actions |
| Workflow helpers | `.command-steps`, `.command-step`, `.command-lanes`, `.command-lane`, `.command-queue`, `.command-progress`, `.command-glance`, `.command-nudge`, `.command-activity` | task, queue, progress, glance, nudge, and activity surfaces |
| Variants | `[data-variant="info"]`, `[data-variant="success"]`, `[data-variant="warning"]`, `[data-variant="danger"]`, `[data-variant="accent"]`, `[data-variant="neutral"]` | semantic visual aliases |

Source interpretation:

- Command is a visual surface system, not a JavaScript command runtime.
- CSS provides overlay, panel, list, state, page, dashboard, responsive, and reduced-motion styling.
- Consumer/application code owns modal behavior, search behavior, command execution, active state sync, focus trap, and live updates.

## Local Token Surface

Current local variable groups:

| Family | Variables | Role |
| --- | --- | --- |
| Overlay/panel | `--command-backdrop-bg`, `--command-panel-bg`, `--command-panel-border`, `--command-panel-radius`, `--command-panel-shadow`, `--command-panel-max-width`, `--command-panel-max-height` | modal shell and dialog surface |
| Header/input | `--command-header-bg`, `--command-input-bg`, `--command-input-border`, `--command-input-placeholder` | search row and input styling |
| Items/list | `--command-item-radius`, `--command-item-gap`, `--command-item-pad-y`, `--command-item-pad-x`, `--command-item-bg-hover`, `--command-item-bg-active`, `--command-item-border-active`, `--command-divider`, `--command-label-muted`, `--command-scrollbar-thumb`, `--command-scrollbar-track` | list, section, item, scrollbar, active/hover styling |
| Command page | `--command-page-bg`, `--command-page-gap`, `--command-page-padding`, `--command-page-max-width` | standalone command page layout |
| Surface | `--command-surface-bg`, `--command-surface-border`, `--command-surface-radius`, `--command-surface-shadow`, `--command-surface-pad`, `--command-surface-gap`, `--command-surface-title`, `--command-surface-muted`, `--command-rail-width` | cards/actions/queues/dashboard helpers |
| Accent/pill/progress | `--command-accent`, `--command-accent-soft`, `--command-accent-text`, `--command-pill-bg`, `--command-pill-border`, `--command-pill-text`, `--command-progress-track`, `--command-progress-fill` | action accents, pills, progress |
| Variants | `--command-variant-rail`, `--command-variant-tint`, `--command-variant-text`, `--command-variant-muted` | `data-variant` component-local aliases |

Audit conclusions:

- Local command variables are component-owned aliases.
- They rely on primitive spacing/radius/border/shadow/motion, theme surface/text/border, semantic state, focus, and z-index tokens.
- Generic variant hooks inherit prior theme contrast risks.
- No local variable or token reference is approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- Command source classes: `118`.
- Public classes: `105`.
- Candidate-public classes: `13`.

Class family counts:

| Group | Total |
| --- | ---: |
| root | `1` |
| overlay shell | `5` |
| panel/search/list shell | `12` |
| item | `8` |
| empty/footer | `6` |
| command page | `8` |
| toolbar | `4` |
| grid/stack/layout | `8` |
| card/action | `17` |
| queue/activity | `15` |
| glance/nudge | `14` |
| progress/step/lane | `19` |
| icon | `1` |

Candidate-public classes:

- `.vds-commands`
- `.command__item--disabled`
- `.command__item-icon`
- `.command__scroll`
- `.command-grid--2`
- `.command-grid--4`
- `.command-layout`
- `.command-layout--balanced`
- `.command-page__meta`
- `.command-page--dense`
- `.command-progress--danger`
- `.command-progress--warning`
- `.command-stack--loose`

Audit conclusions:

- Candidate-public status reflects current docs coverage, not permission to remove or rename source-defined selectors.
- Command combines modal palette selectors with command-page/dashboard helper selectors.
- Future component splitting, pruning, or selector reclassification requires migration approval.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-command.doc.html` has `2530` lines.
- Docs cover global command palette purpose, keyboard shortcuts, launcher patterns, command page modules, modal dialog markup, search input, grouped result lists, active item state, empty states, compact density, footer/keycap hints, accessibility rules, and command-controller responsibilities.
- Docs examples include `role="dialog"`, `aria-modal="true"`, `role="listbox"`, `role="option"`, `aria-selected`, `aria-activedescendant`, live-region guidance, and focus return guidance.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-command.json`
- Blocks: `21`.
- Code examples: `16`.
- Generated class tokens: `129`.
- Generated `source_css`: `base.css`, `command.css`, `icons.css`, `layout.css`, `overlays.css`, `primitives.css`, `slate.css`, `typography.css`, and `utilities.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `command` | `695` |
| `palette` | `54` |
| `dialog` | `22` |
| `modal` | `25` |
| `overlay` | `9` |
| `search` | `55` |
| `input` | `30` |
| `listbox` | `19` |
| `option` | `34` |
| `menu` | `14` |
| `item` | `209` |
| `keyboard` | `36` |
| `shortcut` | `35` |
| `focus` | `28` |
| `aria` | `134` |
| `role` | `55` |
| `aria-activedescendant` | `1` |
| `aria-selected` | `25` |
| `aria-modal` | `14` |
| `Enter` | `23` |
| `Arrow` | `1` |
| `Home` | `2` |
| `End` | `22` |
| `Tab` | `7` |
| `responsive` | `1` |
| `z-index` | `1` |
| `empty` | `32` |
| `selected` | `26` |
| `active` | `23` |
| `reduced-motion` | `2` |
| `transition` | `2` |
| `screen reader` | `2` |
| `live` | `5` |
| `aria-disabled` | `0` |
| `aria-expanded` | `0` |
| `aria-controls` | `0` |
| `forced-colors` | `0` |
| `loading` | `0` |
| `error` | `0` |
| `disabled` | `0` |
| `mobile` | `0` |
| `pressed` | `0` |

Audit conclusions:

- Generated command `source_css` metadata is present and lists a theme file (`slate.css`) plus overlays, utilities, and icons dependencies.
- Raw docs strongly cover dialog/listbox behavior, keyboard behavior, focus management, and command-controller responsibilities.
- Docs do not directly cover disabled/`aria-disabled`, forced-colors, loading, error, mobile, or pressed behavior.

## Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Opening and closing the command surface.
- Moving focus into the search input on open.
- Trapping focus while the modal is open.
- Returning focus to the trigger on close.
- Handling Escape, Enter, Arrow keys, Home/End, Tab behavior, and optional shortcut maps.
- Maintaining active index and syncing `.command__item--active` with `aria-selected`.
- Maintaining `aria-activedescendant` if that focus model is used.
- Applying `aria-disabled` semantics and preventing disabled command activation.
- Running commands, routing navigation, filtering search results, and updating empty states.
- Announcing result changes or async command output through live regions where needed.
- Managing inert/background behavior, portal/mount order, and nested modal policy.

CSS source currently provides:

- Fixed overlay shell and backdrop.
- `--z-modal` layering.
- Open state hooks through `.command--open`, `[data-command-open="true"]`, and `[aria-hidden="false"]`.
- Panel transform/opacity transitions and reduced-motion fallback.
- Search header, list, section, item, active, selected, disabled, empty, and footer visuals.
- Scrollbar styling.
- Command page, layout, toolbar, grid, card, action, step, queue, progress, glance, nudge, activity, and empty helper surfaces.
- Responsive behavior at `640px`, `720px`, and `1024px`.

APG alignment:

- Dialog-modal guidance applies to the command panel when it is used as a modal overlay.
- Editable combobox/listbox guidance applies to search input plus results when consumers implement an input-driven popup/result set.
- Docs describe listbox/option semantics and active-item synchronization, but implementation remains consumer-owned.
- Toolbar guidance applies only to command toolbar groupings that intentionally implement toolbar semantics.

Audit findings:

- Source supports reduced-motion and docs mention it.
- Source has no forced-colors block and docs do not mention forced-colors.
- Source supports disabled item styling, but docs do not mention disabled or `aria-disabled`.
- Source has no loading/error selectors, and docs do not cover loading/error command states.
- Mobile-specific docs coverage is absent even though source has multiple responsive media blocks.
- Overlay behavior cannot be validated through CSS alone.

## Risks and Future Routing

- Command behavior cannot be solved by CSS; modal focus trap, inert background, Escape handling, route/action execution, search filtering, active-index sync, and focus return remain consumer-owned.
- APG dialog and combobox/listbox guidance applies, but this item records current CSS/docs evidence rather than requiring new behavior.
- Source supports `.command__item--disabled` and `[aria-disabled="true"]`, while raw docs do not mention disabled or `aria-disabled`; record as a docs coverage gap.
- Source supports reduced-motion, but has no forced-colors block; forced-colors coverage is an audit finding only.
- Overlay layering uses `--z-modal`; portal/mount order and nested modal policy remain consumer/application concerns.
- The command surface includes both modal palette classes and broader command-page/dashboard helpers; selector pruning or splitting requires later migration approval.
- Generic variant hooks through `data-variant` inherit theme contrast risks from prior audits.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Command CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Generated docs metadata refresh: later approved docs-index item.
- Selector classification changes: later approved selector inventory item.
- APG dialog/listbox/combobox guidance: later approved accessibility/docs item.
- Overlay/z-index/focus-trap review: later approved accessibility/runtime guidance item.
- Theme/contrast checks: later approved visual/contrast QA items.
- Dist refresh: later approved release/build-output item.
