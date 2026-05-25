# VDS Advanced Forms Component Audit

Last updated: `2026-05-24`

Source item: `VDS-2160`

This file records the advanced forms component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/forms-advanced.css` is the source truth for current advanced forms CSS behavior.
- `@24vlh/vds/doc-raw/vds-forms-advanced.doc.html` and `@24vlh/agents/docs_vds/components/vds-forms-advanced.json` are docs/index evidence.
- Advanced forms CSS provides visual and control scaffolding for multiselects, tag inputs, choice buttons/cards/chips, selected chip fields, segmented controls, toggles, steppers, native date/time normalization, calendar scaffolding, density variants, and state hooks.
- Consumer/application code owns multiselect behavior, tag creation/removal, chip removal, segmented/toggle/stepper state, calendar/date-picker logic, validation, `aria-*` synchronization, keyboard behavior, focus management, and announcements.
- Existing advanced form selectors, local variables, density variants, JavaScript-controlled open/close hooks, calendar scaffold, state hooks, and docs examples are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, selector inventory update, or generated output refresh happens in `VDS-2160`.

## Source CSS Evidence

`@24vlh/vds/src/components/forms-advanced.css` currently has:

- Lines: `1009`.
- Selector blocks: `138`.
- Expanded selectors: `154`.
- Declarations: `483`.
- Custom property declaration lines: `29`.
- Unique local custom property names: `9`.
- `var(...)` references: `296`.
- `!important` declarations: `0`.
- Hard-coded color references: `0`.
- `color-mix(...)` uses: `0`.

Media, interaction, and state evidence:

- Media blocks: `0`.
- `@keyframes`: `0`.
- `:hover` selector matches: `14`.
- `:focus` selector matches: `1`.
- `:focus-visible` selector matches: `6`.
- `:focus-within` selector matches: `3`.
- `:active` selector matches: `0`.
- Disabled/`aria-disabled` selector matches: `11`.
- Readonly selector matches: `0`.
- Invalid/error selector matches: `4`.
- Selected/`aria-selected` selector matches: `4`.
- Checked selector matches: `9`.
- Open/`aria-expanded` selector matches: `1`.
- Loading/busy selector matches: `2`.
- Required selector matches: `0`.
- Animation declarations: `1`.
- Transition declarations: `16`.
- Transform declarations: `4`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Layout and visual evidence:

- Inline-flex declarations: `20`.
- Flex display declarations: `9`.
- Grid display declarations: `3`.
- Gap declarations: `20`.
- Padding-related declarations: `31`.
- Position declarations: `16`.
- Z-index declarations: `2`.
- Overflow declarations: `4`.
- Width declarations: `23`.
- Height declarations: `14`.
- Min-height declarations: `1`.
- Grid-template-columns declarations: `3`.
- Box-shadow declarations: `16`.
- Outline declarations: `4`.
- Border-related declarations: `64`.
- Border-radius declarations: `20`.
- Background/background-color declarations: `39`.
- Color declarations: `35`.
- Opacity declarations: `17`.
- Cursor declarations: `22`.
- Pointer-events declarations: `8`.
- `appearance` declarations: `0`.

Package-facing output:

- `@24vlh/vds/dist/components/forms-advanced.css` exists.
- `@24vlh/vds/dist/components/forms-advanced.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/forms-advanced.css`.
- `@24vlh/vds/src/core.css` does not import advanced forms.

## Component Contract

Current advanced forms source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root | `[data-vds-form-advanced]`, `.vds-form-advanced` | advanced form local variables |
| Multiselect | `.multi-select`, `.multi-select--*`, `.multi-select__*` | chips, control, input, option list, selected option visuals, open/disabled/error/loading hooks |
| Tag input | `.tag-input`, `.tag-input--*`, `.tag-input__*` | freeform tag builder shell, chip, remove, input, disabled/error hooks |
| Choice buttons | `.choice-buttons`, `.choice-buttons--grid`, `.choice-button`, `.choice-button__input`, `.choice-button__surface` | native-input-backed button-like choices |
| Choice cards | `.choice-cards`, `.choice-card`, `.choice-card__input`, `.choice-card__surface`, `.choice-card__title`, `.choice-card__meta` | card-style native-input-backed choices |
| Choice chips | `.choice-chips`, `.choice-chip`, `.choice-chip--*`, `.choice-chip__*` | compact native-input-backed chip choices |
| Selected chips and fields | `.chip-choice`, `.chip-choice--*`, `.chip-choice__*`, `.chip-field`, `.chip-field__*` | selected chip, transfer chip, remove affordance, and chip field rows |
| Segmented controls | `.segmented-control`, `.segmented-control__option`, `.segmented-control__input`, `.segmented-control__label` | radio-backed segmented control visuals |
| Toggles | `.toggle`, `.toggle--sm`, `.toggle__input`, `.toggle__track`, `.toggle__thumb` | checkbox-backed switch visual |
| Steppers | `.stepper`, `.stepper--*`, `.stepper__button`, `.stepper__input` | numeric stepper shell, buttons, input, disabled/error hooks |
| Calendar scaffold | `.calendar`, `.calendar--*`, `.calendar__*` | calendar/date-picker visual scaffold and popover hook |
| Native date/time | `.input[type="date"]::-webkit-calendar-picker-indicator` | native date picker indicator normalization |
| Density | `.form--a`, `.form--c` | advanced-control density adjustments |

Source interpretation:

- Advanced forms CSS provides visual and control scaffolding, not runtime behavior.
- CSS owns advanced control layout, choice visuals, selected-chip visuals, toggle/stepper/calendar visuals, density adjustments, state hooks, and focus/hover styling.
- Consumer/application code owns multiselect behavior, tag creation/removal, chip removal, segmented/toggle/stepper state, calendar/date-picker logic, validation, `aria-*` synchronization, keyboard behavior, focus management, and announcements.

## Local Token Surface

Current local variables:

| Variable | Role |
| --- | --- |
| `--control-height-md` | advanced control height alias |
| `--choice-chip-accent` | choice chip semantic accent alias |
| `--choice-chip-on` | choice chip check/dot color alias |
| `--chip-choice-bg` | selected chip background alias |
| `--chip-choice-border` | selected chip border alias |
| `--chip-choice-text` | selected chip text alias |
| `--toggle-width` | toggle track width |
| `--toggle-height` | toggle track height |
| `--toggle-thumb` | toggle thumb size |

Audit conclusions:

- Local advanced forms variables are component-owned aliases for control sizing, choice chip color, selected chip color, and toggle geometry.
- They rely on primitive spacing, border, radius, typography, focus, and theme semantic color tokens.
- `--choice-chip-accent` and `--choice-chip-on` are reassigned by choice-chip semantic variants.
- `--chip-choice-*` variables are reassigned by selected chip variants.
- `--toggle-*` variables are reassigned by toggle size and density variants.
- No local variable or token reference is approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- Advanced-forms-source classes: `83`.
- Public classes: `65`.
- Candidate-public classes: `18`.

Class family counts:

| Group | Total |
| --- | ---: |
| root | `1` |
| multiselect | `12` |
| tag input | `6` |
| choice buttons | `5` |
| choice cards | `6` |
| choice chips | `5` |
| selected chips/chip field | `12` |
| segmented control | `4` |
| toggle | `5` |
| stepper | `5` |
| calendar | `14` |
| native date/time | `0` class selectors |

Candidate-public classes:

- `.vds-form-advanced`
- `.multi-select--disabled`
- `.multi-select--error`
- `.multi-select--loading`
- `.tag-input--disabled`
- `.tag-input--error`
- `.stepper--disabled`
- `.stepper--error`
- `.calendar--disabled`
- `.calendar--error`
- `.calendar__day--disabled`
- `.calendar__day--range-start`
- `.calendar__day--range-end`
- `.calendar__popover`
- `.chip-choice--disabled`
- `.choice-chip--info`
- `.form--a`
- `.form--c`

Audit conclusions:

- Candidate-public status reflects current docs coverage and selector classification, not permission to remove or rename source-defined selectors.
- Native date/time normalization is represented through a type/pseudo-element selector, not a class selector.
- Core UFAL controls remain governed by `VDS-2150`; this item records the advanced-controls layer built on top of forms.
- Future selector pruning or reclassification requires migration approval.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-forms-advanced.doc.html` has `1137` lines.
- Docs cover choice buttons, choice chips, choice cards, selected chips and chip fields, segmented controls, toggle switches, numeric steppers, multiselects, tag inputs, native date/time controls, calendar scaffolding, density variants, usage guidance, and accessibility notes.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-forms-advanced.json`
- Blocks: `14`.
- Code examples: `16`.
- Generated class tokens: `94`.
- Generated `source_css`: `base.css`, `forms-advanced.css`, `forms.css`, `icons.css`, and `typography.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `multi-select` | `29` |
| `tag-input` | `8` |
| `choice-button` | `57` |
| `choice-card` | `21` |
| `choice-chip` | `75` |
| `chip-choice` | `40` |
| `chip-field` | `40` |
| `segmented-control` | `14` |
| `toggle` | `17` |
| `stepper` | `14` |
| `calendar` | `32` |
| `date` | `11` |
| `time` | `10` |
| `native` | `12` |
| `selected` | `23` |
| `checked` | `18` |
| `disabled` | `6` |
| `loading` | `3` |
| `open` | `3` |
| `aria` | `28` |
| `aria-expanded` | `0` |
| `aria-selected` | `0` |
| `aria-disabled` | `0` |
| `aria-valuenow` | `0` |
| `role` | `3` |
| `keyboard` | `3` |
| `focus` | `7` |
| `focus-visible` | `2` |
| `escape` | `0` |
| `responsive` | `0` |
| `mobile` | `0` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |
| `contrast` | `0` |
| `JavaScript` | `8` |

Audit conclusions:

- Generated `source_css` metadata is present and includes `forms-advanced.css`.
- Raw docs mention JS/JavaScript and some keyboard/focus guidance.
- Raw docs do not mention `aria-expanded`, `aria-selected`, `aria-disabled`, `aria-valuenow`, Escape, responsive/mobile, reduced-motion, forced-colors, or contrast.
- Docs examples include adjacent component and docs presentation dependencies; later docs rewrite should separate runtime requirements from demo scaffolding.

## Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Multiselect open/close behavior, option filtering, selection state, and `aria-expanded`/`aria-selected` synchronization.
- Tag creation, tag removal, chip removal, and announcement behavior.
- Segmented control, toggle, and stepper value/state synchronization.
- Calendar/date-picker navigation, date selection, range selection, disabled dates, and focus management.
- Keyboard behavior, including Escape handling where popovers or dropdowns are used.
- Numeric validation and accessible value semantics such as `aria-valuenow` where applicable.
- Disabled and loading behavior beyond visual styles.
- Avoiding color-only communication for selected, error, warning, success, and disabled states.

CSS source currently provides:

- Advanced form control visuals and state hooks.
- Focus-visible styling for native-input-backed controls.
- Focus-within styling for composite controls.
- Hover styling for pointer affordances.
- Disabled, error, loading, selected, checked, open, range, today, and density visual hooks.
- No file-local reduced-motion block.
- No file-local forced-colors block.
- No viewport media queries.

Audit findings:

- Advanced form behavior cannot be solved by CSS alone.
- Source comments explicitly state open/close behavior is JS-controlled.
- Loading animation exists without file-local reduced-motion handling.
- Forced-colors handling is absent.
- Raw docs do not mention several ARIA states that advanced controls commonly need.
- Semantic and selected states inherit contrast risks from prior theme audits.

## Responsive and Motion Evidence

Responsive source behavior:

- No `@media` blocks are present.
- Dense controls, dropdowns, popovers, grids, and calendars rely on surrounding layout and component sizing.
- Responsive/mobile behavior needs later visual QA and docs guidance.

Motion source behavior:

- Source has `16` transition declarations.
- Source has `4` transform declarations.
- Source has `1` animation declaration for loading behavior.
- Source relies on `input-loading-shimmer` from `forms.css`; there are no local `@keyframes`.
- No file-local `prefers-reduced-motion` block is present.
- No file-local `forced-colors` block is present.

Audit conclusions:

- Advanced forms source behavior is compatibility-sensitive and should not be inverted without visual QA and migration notes.
- Loading animation and transitions need later reduced-motion review.
- Forced-colors review remains future work.

## Risks and Future Routing

- Advanced forms is a broad CSS surface built on core UFAL forms; selector pruning or component splitting requires migration approval.
- Multiselect and tag-input surfaces are JS-controlled and need explicit docs-runtime boundaries.
- Calendar scaffold is not a date-picker implementation and needs careful docs wording before consumers rely on it.
- No viewport responsive behavior exists in source despite dense controls and popovers needing future responsive QA.
- Loading animation and transitions need later reduced-motion review.
- Forced-colors handling is absent and needs later accessibility review.
- Generated docs metadata is present, but docs examples still include demo dependencies and incomplete accessibility coverage.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Advanced forms CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- JavaScript behavior boundaries and ARIA guidance: later approved accessibility/docs-runtime item.
- Responsive screenshots and visual QA: later approved responsive/visual verification item.
- Date/calendar behavior and package guidance: later approved forms/date-picker item if the scaffold becomes a runtime component.

