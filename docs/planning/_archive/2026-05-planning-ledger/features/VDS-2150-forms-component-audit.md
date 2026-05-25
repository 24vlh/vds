# VDS-2150 Forms Component Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2150`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2150-forms-component-audit.md`

## 1. Goal

Create the forms component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only UFAL forms contract: controls, wrappers, labels, help/error text, validation states, field groups, file surfaces, native checkbox/radio choices, required/disabled/readonly/loading states, responsive grid behavior, docs/index metadata, package-facing dist presence, and accessibility/theming/motion risks before any forms CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/forms.css` selector, token, control, wrapper, label, help, message, choice, file upload, grid, section, state, responsive, motion, theme, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the forms class surface.
- Record raw docs and generated docs-index metadata for `vds-forms`.
- Record package-facing `dist/components/forms.css` and `.min.css` presence.
- Add a forms component audit artifact for later CSS fixes, docs rewrite, selector classification, accessibility review, validation/message semantics, file-control guidance, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2150` is done, and the next recommended item is `VDS-2160`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding JavaScript validation, submission, file handling, state management, loading behavior, error announcements, focus management, or keyboard behavior.
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
  - `@24vlh/agents/docs_vds/components/vds-forms.json`
- Repo files:
  - `@24vlh/vds/src/components/forms.css`
  - `@24vlh/vds/doc-raw/vds-forms.doc.html`
  - `@24vlh/vds/dist/components/forms.css`
  - `@24vlh/vds/dist/components/forms.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/forms.css` has `834` lines.
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

Layout and style evidence:

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

Package-facing output evidence:

- `@24vlh/vds/dist/components/forms.css` exists.
- `@24vlh/vds/dist/components/forms.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/forms.css`.
- `@24vlh/vds/src/core.css` does not import forms.

## 5. Component Contract

Current forms source surfaces:

- Root/local variables:
  - `[data-vds-form]`
  - `.vds-form`
- Core control primitive:
  - `.form-control`
  - native `input.form-control`, `select.form-control`, and `textarea.form-control`
  - `.form-control--error`
  - `.form-control--warning`
  - `.form-control--success`
  - `.form-control--info`
  - `.form-control--loading`
  - `.form-control--disabled`
  - `.form-control--readonly`
  - `.form-control--file`
- Control wrappers and adornments:
  - `.form-control-wrapper`
  - `.form-control-icon`
  - `.form-control-prefix`
  - `.form-control-suffix`
  - `.form-control-group`
- Field, label, help, and message surfaces:
  - `.form-field`
  - `.form-field--inline`
  - `.form-label-row`
  - `.form-label`
  - `.form-label-meta`
  - `.form-label-meta--required`
  - `.form-help`
  - `.form-help--error`
  - `.form-help--warning`
  - `.form-help--success`
  - `.form-help--info`
  - `.form-help-row`
  - `.form-help-row__counter`
  - `.form-message`
  - `.form-message__icon`
  - `.form-message__content`
  - `.form-message--neutral`
  - `.form-message--error`
  - `.form-message--warning`
  - `.form-message--success`
  - `.form-message--info`
- Native choice controls:
  - `.choice-group`
  - `.choice-group--inline`
  - `.choice-group--grid`
  - `.choice`
  - `.choice--checkbox`
  - `.choice--radio`
  - `.choice--success`
  - `.choice--warning`
  - `.choice--error`
  - `.choice--info`
  - `.choice--disabled`
  - `.choice__input`
  - `.choice__indicator`
  - `.choice__label`
  - `.choice__label-text`
  - `.choice__hint`
- File surfaces:
  - `.form-control-file-surface`
  - `.form-control-file-surface--disabled`
  - `.form-control-file-surface--error`
  - `.form-control-file-surface--warning`
  - `.form-control-file-surface--success`
  - `.form-control-file-surface--info`
  - `.file-upload-inline`
  - `.file-upload-inline__input`
  - `.file-upload-inline__label`
- Layout surfaces:
  - `.form-row`
  - `.form-grid`
  - `.form-grid--two`
  - `.form-grid--three`
  - `.form-grid--four`
  - `.form-section--error`
  - `.form-section--warning`
  - `.form-section--success`
  - `.form-section--info`

Source interpretation:

- Forms CSS provides visual and layout surfaces, not runtime form behavior.
- CSS owns UFAL control visuals, native control normalization, validation/loading/disabled/readonly visuals, wrappers, adornments, field layout, help/message text, native choice styling, file upload surfaces, form grids, section state rails, and responsive grid collapse.
- Consumer/application code owns semantic labels, `for`/`id` wiring, `aria-describedby`, validation state, submission, disabled/readonly behavior, file upload behavior, loading state changes, error announcements, and keyboard behavior.
- Form selectors, local variables, UFAL control patterns, native choice patterns, file surfaces, state hooks, responsive behavior, and docs examples are compatibility-sensitive.

## 6. Local Token Surface

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

## 7. Selector/API Evidence

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

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- Native `.choice` controls belong to this forms audit; button-like choices and segmented controls remain routed to `VDS-2160`.
- Future selector pruning or reclassification requires migration approval.

## 8. Docs and Generated Index Evidence

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

## 9. Accessibility and Behavior Boundaries

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

## 10. Risks and Future Routing

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

## 11. Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-forms-component-audit.md` becomes the decision source for later form CSS fixes, docs rewrite, selector classification, accessibility review, validation/message semantics, file-control guidance, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.

## 12. Validation Plan

Approved validation commands:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
- Read-only forms audit scan.
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
- Read-only forms audit scan confirmed CSS counts, local variables, selector inventory totals, docs/index evidence, import/package evidence, responsive behavior, reduced-motion gap, and forced-colors gap.
- Markdown sanity checks passed after this validation log update.
- `git diff --check` for changed planning files passed.
