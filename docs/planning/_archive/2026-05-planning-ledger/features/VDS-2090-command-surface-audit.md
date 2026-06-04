# VDS-2090 Command Surface Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2090`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2090-command-surface-audit.md`

## 1. Goal

Create the command surface audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only command palette contract: modal overlay shell, panel/search input, grouped listbox-style results, item states, empty/footer helpers, page/action/card/queue/progress surfaces, responsive behavior, z-index, docs/index metadata, package-facing dist presence, and accessibility/theming risks before any command CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/command.css` selector, token, modal overlay, panel, search, hint, listbox-style result, item state, empty/footer, command page, toolbar, layout, card/action, queue, progress, responsive, z-index, reduced-motion, and theme evidence.
- Record public and candidate-public selector inventory evidence for the command class surface.
- Record raw docs and generated docs-index metadata for `vds-command`.
- Record package-facing `dist/components/command.css` and `.min.css` presence.
- Add a command surface audit artifact for later CSS fixes, docs rewrite, accessibility review, APG dialog/listbox/combobox guidance, responsive/mobile QA, overlay/z-index review, theme/contrast checks, selector classification, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2090` is done, and the next recommended item is `VDS-2100`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding JavaScript command-controller behavior, router integration, search/filter logic, modal management, focus trapping, shortcut handling, live updates, or command execution.
- Adding forced-colors handling, responsive screenshots, visual checks, selector reclassification, docs rewrites, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local standards docs:
  - `@24vlh/agents/docs_md/design/patterns/dialog-modal.md`
  - `@24vlh/agents/docs_md/design/patterns/combobox.md`
  - `@24vlh/agents/docs_md/design/patterns/menu-button.md`
  - `@24vlh/agents/docs_md/design/patterns/toolbar.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-command.json`
- Repo files:
  - `@24vlh/vds/src/components/command.css`
  - `@24vlh/vds/doc-raw/vds-command.doc.html`
  - `@24vlh/vds/dist/components/command.css`
  - `@24vlh/vds/dist/components/command.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/command.css` has `1292` lines.
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

Media, interaction, and state evidence:

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

Layout, overlay, and structure evidence:

- Flex display declarations: `42`.
- Grid display declarations: `11`.
- Position declarations: `6`.
- Z-index declarations: `1`.
- Overflow declarations: `8`.
- Max-height declarations: `4`.
- Backdrop-filter declarations: `0`.

Package-facing output evidence:

- `@24vlh/vds/dist/components/command.css` exists.
- `@24vlh/vds/dist/components/command.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/command.css`.
- `@24vlh/vds/src/core.css` does not import command.

## 5. Component Contract

Current command source surfaces:

- Root and overlay:
  - `[data-vds-commands]`
  - `.vds-commands`
  - `.command`
  - `.command::before`
  - `.command--open`
  - `.command[data-command-open="true"]`
  - `.command[aria-hidden="false"]`
  - `.command--center`
- Panel and search:
  - `.command__panel`
  - `.command__header`
  - `.command__leading-icon`
  - `.command__input`
  - `.command__hint`
  - `.command__hint-text`
  - `.command__shortcut`
  - `.command__kbd-key`
- Body, scroll, sections, and result items:
  - `.command__body`
  - `.command__scroll`
  - `.command__section`
  - `.command__section-label`
  - `.command__list`
  - `.command__item`
  - `.command__item--active`
  - `.command__item--disabled`
  - `.command__item[aria-selected="true"]`
  - `.command__item[aria-disabled="true"]`
  - `.command__item-main`
  - `.command__item-label`
  - `.command__item-description`
  - `.command__item-icon`
  - `.command__item-meta`
- Empty and footer:
  - `.command__empty`
  - `.command__footer`
  - `.command-empty`
  - `.command-empty__title`
  - `.command-empty__body`
  - `.command-empty__actions`
- Command page and dashboard surfaces:
  - `.command-page`
  - `.command-page--dense`
  - `.command-page__header`
  - `.command-page__kicker`
  - `.command-page__title`
  - `.command-page__subtitle`
  - `.command-page__actions`
  - `.command-page__meta`
  - `.command-layout`
  - `.command-layout--balanced`
  - `.command-stack`
  - `.command-stack--loose`
  - `.command-toolbar`
  - `.command-grid`
  - `.command-card`
  - `.command-pill`
  - `.command-action`
  - `.command-steps`
  - `.command-lanes`
  - `.command-queue`
  - `.command-progress`
  - `.command-glance`
  - `.command-nudge`
  - `.command-activity`
- Variant hooks:
  - `[data-variant="info"]`
  - `[data-variant="success"]`
  - `[data-variant="warning"]`
  - `[data-variant="danger"]`
  - `[data-variant="accent"]`
  - `[data-variant="neutral"]`

Source interpretation:

- Command is a CSS surface system, not a controller.
- CSS owns the visual overlay shell, panel, list, state, page/dashboard, variant, responsive, z-index, and reduced-motion styling.
- Consumer/application code owns open/close behavior, keyboard behavior, search, command execution, focus management, live updates, and modal semantics.
- Command selectors, local tokens, modal/open hooks, item state hooks, command-page helpers, responsive behavior, and docs examples are compatibility-sensitive.

## 6. Local Token Surface

Current local token groups:

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
- They pull from primitive spacing, radius, border, shadow, motion, z-index, theme surface/text/border tokens, semantic state tokens, and focus tokens.
- Generic variant hooks inherit theme contrast risks from prior theme audits.
- No local token is approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

Selector inventory evidence:

- `118` command source classes are defined in selector inventory.
- Classification totals:
  - `105` public.
  - `13` candidate-public.

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
- Command contains both modal palette selectors and broader command-page/dashboard helper selectors.
- Any future split, pruning, or selector reclassification requires migration approval and docs/package review.

## 8. Docs and Generated Index Evidence

Raw docs evidence:

- `@24vlh/vds/doc-raw/vds-command.doc.html` has `2530` lines.
- Raw docs cover global command palette purpose, keyboard shortcuts, launcher patterns, command page modules, modal dialog markup, search input, grouped result lists, active item state, empty states, compact density, footer/keycap hints, accessibility rules, and command-controller responsibilities.
- Raw docs examples include `role="dialog"`, `aria-modal="true"`, `role="listbox"`, `role="option"`, `aria-selected`, `aria-activedescendant`, `aria-busy`-adjacent live guidance, and focus return guidance.

Generated index evidence:

- `@24vlh/agents/docs_vds/components/vds-command.json`
- Blocks: `21`.
- Code examples: `16`.
- Generated class tokens: `129`.
- Generated `source_css`:
  - `base.css`
  - `command.css`
  - `icons.css`
  - `layout.css`
  - `overlays.css`
  - `primitives.css`
  - `slate.css`
  - `typography.css`
  - `utilities.css`

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

- Generated command `source_css` metadata is present and lists a theme file (`slate.css`) plus overlays/utilities/icons dependencies.
- Raw docs strongly cover APG-style dialog/listbox behavior and controller responsibilities.
- Docs do not directly cover disabled/`aria-disabled`, forced-colors, loading, error, mobile, or pressed behavior, despite source support for disabled item styling and responsive CSS.

## 9. Accessibility and Behavior Boundaries

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

APG alignment notes:

- Dialog-modal guidance applies to the command panel when it is used as a modal overlay.
- Editable combobox/listbox guidance applies to search input plus results when consumers implement an input-driven popup/result set.
- The docs describe listbox/option semantics and active-item synchronization, but implementation remains consumer-owned.
- Toolbar guidance applies only to command toolbar groupings that intentionally implement toolbar semantics.

Audit findings:

- Source supports reduced-motion and docs mention it.
- Source has no forced-colors block and docs do not mention forced-colors.
- Source supports disabled item styling, but docs do not mention disabled or `aria-disabled`.
- Source has no loading/error selectors, while docs also do not cover loading/error command states.
- Mobile-specific docs coverage is absent even though source has multiple responsive media blocks.
- Overlay behavior cannot be validated through CSS alone.

## 10. Risks and Future Routing

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

## 11. Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-command-surface-audit.md` becomes the decision source for later command CSS fixes, docs rewrite, accessibility review, APG dialog/listbox/combobox guidance, responsive/mobile QA, overlay/z-index review, theme/contrast checks, selector classification, migration notes, and release verification.

## 12. Validation Plan

Run after documentation updates:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
  - If this fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Read-only command audit scan.
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

- Added `@24vlh/vds/docs/planning/features/VDS-2090-command-surface-audit.md`.
- Added `@24vlh/vds/docs/planning/components/vds-command-surface-audit.md`.
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
  - Per `VDS-2090` scope, `pnpm run consumer:scan` was not run.
- Read-only command audit scan:
  - Recorded `1292` source CSS lines, `157` selector blocks, `219` selectors, `627` declarations, `94` custom property declarations, `47` unique `--command-*` tokens, `425` `var(...)` references, `9` media blocks, `2` hover matches, `2` `:focus-visible` matches, `4` disabled/`aria-disabled` matches, `7` selected/`aria-selected` matches, `11` active/current matches, `7` empty matches, `7` transitions, `9` transforms, `0` animations/keyframes, `1` reduced-motion block, `0` forced-colors blocks, `42` flex display declarations, `11` grid display declarations, `1` z-index declaration, `8` overflow declarations, `5` `color-mix(...)` uses, `1` hard-coded hex value, `1` `!important`, `118` command-source classes, `105` public classes, `13` candidate-public classes, `2530` raw-doc lines, `21` generated docs blocks, `16` code examples, `129` generated class tokens, non-empty generated `source_css`, index import presence, core import absence, and package-facing dist file presence.
- Markdown sanity checks:
  - Passed: `VDS-2090` appears as `done`, `VDS-0500` remains `in-progress`, the command artifact path resolves, plan/artifact scope agrees that no runtime/generated files changed, and the next recommended item is `VDS-2100 Content blocks audit`.
- `git diff --check`
  - Passed for changed planning files.

Notes:

- The WSL wrapper command is not available in this shell, so validation commands were run directly from `@24vlh/vds`.
