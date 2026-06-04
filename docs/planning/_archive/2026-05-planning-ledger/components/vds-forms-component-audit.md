# VDS Forms Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-2150`

This file records the forms component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/forms.css` is the source truth for current forms CSS behavior.
- `@24vlh/vds/doc-raw/vds-forms.doc.html` and `@24vlh/agents/docs_vds/components/vds-forms.json` are docs/index evidence.
- Forms CSS provides visual and layout surfaces for UFAL controls, wrappers, labels, help/error text, validation states, field groups, file surfaces, native checkbox/radio choices, required/disabled/readonly/loading states, and responsive grid behavior.
- Consumer/application code owns semantic labels, `aria-describedby`, validation state, form submission, disabled/readonly behavior, file upload behavior, loading state changes, error announcements, focus management, and keyboard behavior.
- Existing form selectors, local variables, UFAL control behavior, native choice patterns, file upload surfaces, validation/loading/disabled/readonly visuals, responsive behavior, and docs examples are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, selector inventory update, or generated output refresh happens in `VDS-2150`.

## Source CSS Evidence

`@24vlh/vds/src/components/forms.css` currently has:

- Lines: `834`.
- Selector blocks: `119`.
- Expanded selectors: `139`.
- Declarations: `343`.
- Custom property declaration lines: `15`.
- Unique local custom property names: `7`.
- `var(...)` references: `194`.
- `!important` declarations: `0`.
- Hard-coded color references: `0`.
- `color-mix(...)` uses: `0`.

Media, interaction, and state evidence:

- Media blocks: `1`, at `max-width: 768px`.
- `@keyframes`: `2`.
- Keyframe names: `input-loading-shimmer` and `formControlLoading`.
- `:hover` selector matches: `3`.
- `:focus` selector matches: `1`.
- `:focus-visible` selector matches: `5`.
- `:focus-within` selector matches: `1`.
- `:active` selector matches: `0`.
- Disabled/`aria-disabled` selector matches: `9`.
- Readonly selector matches: `3`.
- Invalid/error selector matches: `7`.
- Success selector matches: `17`.
- Warning selector matches: `17`.
- Info selector matches: `16`.
- Loading/busy selector matches: `5`.
- Checked selector matches: `3`.
- Required selector matches: `1`.
- Animation declarations: `2`.
- Transition declarations: `3`.
- Transform declarations: `3`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Layout and visual evidence:

- Flex display declarations: `13`.
- Grid display declarations: `3`.
- Inline-flex declarations: `4`.
- Gap declarations: `15`.
- Padding-related declarations: `10`.
- Position declarations: `18`.
- Z-index declarations: `2`.
- Overflow declarations: `1`.
- Width declarations: `11`.
- Height declarations: `7`.
- Min-height declarations: `2`.
- Grid-template-columns declarations: `6`.
- Box-shadow declarations: `12`.
- Outline declarations: `2`.
- Border-related declarations: `54`.
- Border-radius declarations: `12`.
- Background/background-color declarations: `27`.
- Color declarations: `20`.
- Opacity declarations: `10`.
- Cursor declarations: `9`.
- Pointer-events declarations: `7`.
- `appearance` declarations: `1`.
- `resize` declarations: `1`.

Package-facing output:

- `@24vlh/vds/dist/components/forms.css` exists.
- `@24vlh/vds/dist/components/forms.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/forms.css`.
- `@24vlh/vds/src/core.css` does not import forms.

## Component Contract

Current forms source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root | `[data-vds-form]`, `.vds-form` | form-local variables |
| Core control | `.form-control`, native input/select/textarea hooks, state modifiers | UFAL control primitive and validation/loading/disabled/readonly visuals |
| Wrappers/adornments | `.form-control-wrapper`, `.form-control-icon`, `.form-control-prefix`, `.form-control-suffix`, `.form-control-group` | icon, prefix, suffix, and grouped control composition |
| Field shell | `.form-field`, `.form-field--inline` | label/control/help layout shell |
| Labels | `.form-label-row`, `.form-label`, `.form-label-meta`, `.form-label-meta--required` | label row, metadata, and required visual marker |
| Help/counter | `.form-help`, `.form-help--*`, `.form-help-row`, `.form-help-row__counter` | helper text, semantic helper text, and counters |
| Messages | `.form-message`, `.form-message__icon`, `.form-message__content`, `.form-message--*` | form message rows and semantic states |
| Choices | `.choice-group`, `.choice`, `.choice__input`, `.choice__indicator`, `.choice__label`, choice modifiers | native checkbox/radio composition |
| File surfaces | `.form-control-file-surface`, file-surface state modifiers, `.file-upload-inline` and descendants | drag/click visual surface and inline upload label |
| Layout/state sections | `.form-row`, `.form-grid`, grid modifiers, `.form-section--*` | layout grids and semantic section rails |

Source interpretation:

- Forms CSS provides visual and layout surfaces, not runtime form behavior.
- CSS owns UFAL control visuals, native control normalization, validation/loading/disabled/readonly visuals, wrappers, adornments, field layout, help/message text, native choice styling, file upload surfaces, form grids, section state rails, and responsive grid collapse.
- Consumer/application code owns semantic labels, `for`/`id` wiring, `aria-describedby`, validation state, submission, disabled/readonly behavior, file upload behavior, loading state changes, error announcements, and keyboard behavior.

## Local Token Surface

Current local variables:

| Variable | Role |
| --- | --- |
| `--form-flow-textarea-min-height` | default textarea minimum height |
| `--size-10` | local control size alias |
| `--control-min-height` | default form control minimum height |
| `--choice-size` | checkbox/radio indicator size |
| `--choice-gap` | choice label/indicator gap |
| `--choice-accent` | choice semantic accent alias |
| `--choice-on-accent` | choice check/dot color alias |

Audit conclusions:

- Local forms variables are component-owned aliases for control sizing, textarea sizing, and native choice controls.
- They rely on primitive spacing, border, radius, typography, motion, focus, and theme semantic color tokens.
- `--choice-accent` and `--choice-on-accent` are reassigned by choice semantic variants.
- `--size-10` is a component-local size alias and should be classified before any token cleanup.
- No local variable or token reference is approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- Forms-source classes: `71`.
- Public classes: `56`.
- Candidate-public classes: `15`.

Class family counts:

| Group | Total |
| --- | ---: |
| root | `1` |
| controls/wrappers/adornments | `20` |
| field | `2` |
| label | `4` |
| help | `7` |
| message | `8` |
| row/grid/section | `9` |
| choice | `16` |
| file | `9` |

Candidate-public classes:

- `.vds-form`
- `.choice--info`
- `.form-control--disabled`
- `.form-control--file`
- `.form-control--readonly`
- `.form-control-file-surface--disabled`
- `.form-control-file-surface--error`
- `.form-control-file-surface--info`
- `.form-control-file-surface--success`
- `.form-control-file-surface--warning`
- `.form-grid--four`
- `.form-help--info`
- `.form-help--success`
- `.form-message--neutral`
- `.form-message__icon`

Audit conclusions:

- Candidate-public status reflects current docs coverage and selector classification, not permission to remove or rename source-defined selectors.
- Native `.choice` controls belong to this forms audit; button-like choices and segmented controls remain routed to `VDS-2160`.
- Future selector pruning or reclassification requires migration approval.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-forms.doc.html` has `1078` lines.
- Docs cover installation/dependencies, the Unified Form Abstraction Layer, complete UFAL examples, controls, wrappers, icons, prefixes/suffixes, control groups, validation states, disabled/readonly examples, file upload surfaces, fields, label rows, help text, counters, and native choice controls.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-forms.json`
- Blocks: `4`.
- Code examples: `17`.
- Generated class tokens: `53`.
- Generated `source_css`: `base.css`, `forms.css`, and `typography.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `UFAL` | `9` |
| `form-control` | `166` |
| `form-field` | `14` |
| `form-label` | `36` |
| `form-help` | `36` |
| `form-message` | `18` |
| `choice` | `120` |
| `checkbox` | `24` |
| `radio` | `4` |
| `select` | `16` |
| `textarea` | `25` |
| `file` | `41` |
| `required` | `6` |
| `disabled` | `17` |
| `readonly` | `13` |
| `aria-invalid` | `5` |
| `aria-describedby` | `0` |
| `aria-disabled` | `0` |
| `loading` | `16` |
| `keyboard` | `0` |
| `focus` | `0` |
| `responsive` | `0` |
| `mobile` | `0` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |
| `contrast` | `0` |

Audit conclusions:

- Generated `source_css` metadata is present and includes `forms.css`.
- Raw docs mention `aria-invalid`, but do not mention `aria-describedby` or `aria-disabled`.
- Raw docs do not mention keyboard, focus, responsive/mobile, reduced-motion, forced-colors, or contrast.
- Docs examples include docs presentation dependencies and relative `/css/...`-style examples; later docs rewrite should separate runtime requirements from demo scaffolding.

## Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Semantic labels and `for`/`id` wiring.
- `aria-describedby` references for help, error, hint, and counter text.
- Validation state and error announcement behavior.
- Required, disabled, readonly, loading, and file-upload runtime behavior.
- Form submission, reset, persistence, and server/client validation.
- Keyboard behavior for custom wrappers or any non-native interactive patterns.
- Ensuring icon, prefix, suffix, and file upload controls have accessible names where needed.
- Avoiding color-only communication for validation and semantic states.

CSS source currently provides:

- Native input/select/textarea normalization when used with `.form-control`.
- Placeholder styling.
- Focus and focus-visible styling for controls and choices.
- `aria-invalid` border/focus treatment.
- Disabled and readonly visual styles.
- Loading shimmer visuals.
- Native checkbox/radio choice visuals.
- File upload surface visuals.
- Form grid responsive collapse at `max-width: 768px`.
- No file-local reduced-motion block.
- No file-local forced-colors block.

Audit findings:

- Form semantics cannot be solved by CSS alone.
- Loading animations are present without file-local reduced-motion handling.
- Forced-colors handling is absent.
- Raw docs do not mention several accessibility-critical form wiring terms.
- Validation and semantic colors inherit contrast risks from prior theme audits.

## Responsive and Motion Evidence

Responsive source behavior:

- One `max-width: 768px` block.
- `.form-grid--two`, `.form-grid--three`, and `.form-grid--four` collapse to one column.

Motion source behavior:

- Loading surfaces use `input-loading-shimmer` and `formControlLoading`.
- Source has `3` transition declarations and `3` transform declarations.
- No file-local `prefers-reduced-motion` block is present.
- No file-local `forced-colors` block is present.

Audit conclusions:

- Responsive behavior is compatibility-sensitive and should not be inverted without visual QA and migration notes.
- Loading animation needs later reduced-motion review.
- Forced-colors review remains future work.

## Risks and Future Routing

- Forms is the UFAL source surface; selector pruning or alternative form systems require migration approval.
- Native choice controls are part of `forms.css`, while advanced choice buttons/cards/chips, segmented controls, toggles, and steppers remain routed to `VDS-2160`.
- Loading shimmer and transitions need later reduced-motion review.
- File upload visuals need later accessibility and browser behavior review.
- `--size-10` is a local sizing alias that should be classified before token cleanup.
- Generated docs metadata is present, but docs examples still include demo dependencies and incomplete accessibility coverage.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Forms CSS fixes: later approved component cleanup item.
- Advanced form controls: `VDS-2160`.
- Docs rewrite/package guidance: later approved docs item.
- Validation semantics and form accessibility guidance: later approved accessibility/docs-runtime item.
- Responsive screenshots and visual QA: later approved responsive/visual verification item.

