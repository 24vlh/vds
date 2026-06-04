# VDS-2160 Advanced Forms Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2160`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2160-advanced-forms-component-audit.md`

## 1. Goal

Create the advanced forms component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only advanced form controls contract: multiselects, tag inputs, choice buttons/cards/chips, selected chip fields, segmented controls, toggles, steppers, native date/time normalization, calendar scaffolding, density variants, docs/index metadata, package-facing dist presence, and accessibility/theming/motion risks before any advanced-forms CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/forms-advanced.css` selector, token, multiselect, tag-input, choice button/card/chip, chip field, segmented control, toggle, stepper, native date/time, calendar, density, state, motion, theme, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the advanced forms class surface.
- Record raw docs and generated docs-index metadata for `vds-forms-advanced`.
- Record package-facing `dist/components/forms-advanced.css` and `.min.css` presence.
- Add an advanced forms component audit artifact for later CSS fixes, docs rewrite, selector classification, accessibility review, JavaScript behavior boundaries, date/calendar guidance, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2160` is done, and the next recommended item is `VDS-2170`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding JavaScript multiselect behavior, tag creation/removal, chip removal, open/close behavior, calendar/date-picker logic, numeric validation, state management, announcements, focus management, or keyboard behavior.
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
  - `@24vlh/agents/docs_vds/components/vds-forms-advanced.json`
- Repo files:
  - `@24vlh/vds/src/components/forms-advanced.css`
  - `@24vlh/vds/doc-raw/vds-forms-advanced.doc.html`
  - `@24vlh/vds/dist/components/forms-advanced.css`
  - `@24vlh/vds/dist/components/forms-advanced.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/forms-advanced.css` has `1009` lines.
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

Layout and style evidence:

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

Package-facing output evidence:

- `@24vlh/vds/dist/components/forms-advanced.css` exists.
- `@24vlh/vds/dist/components/forms-advanced.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/forms-advanced.css`.
- `@24vlh/vds/src/core.css` does not import advanced forms.

## 5. Component Contract

Current advanced forms source surfaces:

- Root/local variables:
  - `[data-vds-form-advanced]`
  - `.vds-form-advanced`
- Multiselect:
  - `.multi-select`
  - `.multi-select--open`
  - `.multi-select--disabled`
  - `.multi-select--error`
  - `.multi-select--loading`
  - `.multi-select__control`
  - `.multi-select__input`
  - `.multi-select__chip`
  - `.multi-select__chip-remove`
  - `.multi-select__list`
  - `.multi-select__option`
  - `.multi-select__option--selected`
- Tag input:
  - `.tag-input`
  - `.tag-input--disabled`
  - `.tag-input--error`
  - `.tag-input__chip`
  - `.tag-input__chip-remove`
  - `.tag-input__input`
- Choice buttons:
  - `.choice-buttons`
  - `.choice-buttons--grid`
  - `.choice-button`
  - `.choice-button__input`
  - `.choice-button__surface`
- Choice cards:
  - `.choice-cards`
  - `.choice-card`
  - `.choice-card__input`
  - `.choice-card__surface`
  - `.choice-card__title`
  - `.choice-card__meta`
- Choice chips:
  - `.choice-chips`
  - `.choice-chip`
  - `.choice-chip--radio`
  - `.choice-chip--success`
  - `.choice-chip--warning`
  - `.choice-chip--danger`
  - `.choice-chip--info`
  - `.choice-chip__input`
  - `.choice-chip__indicator`
  - `.choice-chip__label`
- Selected chips and chip fields:
  - `.chip-choice`
  - `.chip-choice--selected`
  - `.chip-choice--disabled`
  - `.chip-choice--transfer`
  - `.chip-choice__check`
  - `.chip-choice__remove`
  - `.chip-choice__label`
  - `.chip-field`
  - `.chip-field__row`
  - `.chip-field__label`
  - `.chip-field__items`
  - `.chip-field__input`
- Segmented controls:
  - `.segmented-control`
  - `.segmented-control__option`
  - `.segmented-control__input`
  - `.segmented-control__label`
- Toggles:
  - `.toggle`
  - `.toggle--sm`
  - `.toggle__input`
  - `.toggle__track`
  - `.toggle__thumb`
- Steppers:
  - `.stepper`
  - `.stepper--disabled`
  - `.stepper--error`
  - `.stepper__button`
  - `.stepper__input`
- Calendar scaffold and native date/time normalization:
  - `.input[type="date"]::-webkit-calendar-picker-indicator`
  - `.calendar`
  - `.calendar--disabled`
  - `.calendar--error`
  - `.calendar__header`
  - `.calendar__nav`
  - `.calendar__nav-button`
  - `.calendar__grid`
  - `.calendar__day`
  - `.calendar__day--today`
  - `.calendar__day--selected`
  - `.calendar__day--range-start`
  - `.calendar__day--range-end`
  - `.calendar__day--disabled`
  - `.calendar__popover`
- Density hooks:
  - `.form--a`
  - `.form--c`

Source interpretation:

- Advanced forms CSS provides visual and control scaffolding, not runtime behavior.
- CSS owns advanced control layout, choice visuals, selected-chip visuals, toggle/stepper/calendar visuals, density adjustments, state hooks, and focus/hover styling.
- Consumer/application code owns multiselect behavior, tag creation/removal, chip removal, segmented/toggle/stepper state, calendar/date-picker logic, validation, `aria-*` synchronization, keyboard behavior, focus management, and announcements.
- Advanced form selectors, local variables, density hooks, state hooks, calendar scaffold, docs examples, and package-facing outputs are compatibility-sensitive.

## 6. Local Token Surface

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

## 7. Selector/API Evidence

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

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- Native date/time normalization is represented through a type/pseudo-element selector, not a class selector.
- Core UFAL controls remain governed by `VDS-2150`; this item records the advanced-controls layer built on top of forms.
- Future selector pruning or reclassification requires migration approval.

## 8. Docs and Generated Index Evidence

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

## 9. Accessibility and Behavior Boundaries

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

## 10. Risks and Future Routing

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

## 11. Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-advanced-forms-component-audit.md` becomes the decision source for later advanced form CSS fixes, docs rewrite, selector classification, accessibility review, JavaScript behavior boundaries, date/calendar guidance, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.

## 12. Validation Plan

Approved validation commands:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
- Read-only advanced forms audit scan.
- Markdown sanity checks for master-map status, artifact path, no runtime/source/generated changes, and next recommended item.
- `git diff --check` for changed planning files.

Forbidden commands for this item:

- `pnpm run build`
- `pnpm run build:prod`
- `pnpm run docs:vds:index`
- `pnpm run inventory:selectors`
- `pnpm run consumer:scan`

## 13. Post-Implementation Validation Log

- `pnpm run audit:tokens` passed: token usage audit passed for `43` files.
- `pnpm run audit` passed: CSS parse, class, token, doc dependency, and selector inventory freshness checks passed.
- `pnpm run audit:dist` was attempted with a `120s` timeout. It started `node static/js/check-generated-artifacts.js --check` but produced no result before timing out. No write/regeneration command was run.
- `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `.md` are stale; per plan, `pnpm run consumer:scan` was not run.
- Read-only advanced forms audit scan confirmed CSS counts, local variables, selector inventory totals, docs/index evidence, import/package evidence, state hooks, density hooks, reduced-motion gap, and forced-colors gap.
- Markdown sanity checks passed after this validation log update.
- `git diff --check` for changed planning files passed.
