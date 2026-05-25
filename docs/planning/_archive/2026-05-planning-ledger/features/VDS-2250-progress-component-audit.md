# VDS-2250 Progress Component Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2250`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2250-progress-component-audit.md`

## 1. Goal

Create the progress component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only progress contract: determinate and indeterminate progress bars, labels/meta/value text, density/size/style variants, semantic fill variants, striped/animated behavior, stepper indicators, active/complete/disabled step states, responsive stepper collapse, docs/index metadata, package-facing dist presence, and accessibility/theming/motion risks before any progress CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/progress.css` selector, local variable, progress bar, indeterminate, striped, animated, stepper, state, responsive, motion, theme, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the progress class surface.
- Record raw docs and generated docs-index metadata for `vds-progress`.
- Record package-facing `dist/components/progress.css` and `.min.css` presence.
- Add a progress component audit artifact for later progress CSS fixes, docs rewrite, selector classification, ARIA/progressbar guidance, stepper semantics, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2250` is done, and the next recommended item is `VDS-2260 Skeleton component audit`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding progress calculation, async loading, ARIA synchronization, live announcements, wizard routing, step validation behavior, accessibility smoke tests, responsive screenshots, visual checks, selector reclassification, docs rewrites, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-progress.json`
- Repo files:
  - `@24vlh/vds/src/components/progress.css`
  - `@24vlh/vds/doc-raw/vds-progress.doc.html`
  - `@24vlh/vds/dist/components/progress.css`
  - `@24vlh/vds/dist/components/progress.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/progress.css` has `317` lines.
- Selector blocks: `44`.
- Expanded selectors: `48`.
- Declarations: `140`.
- Local custom property declaration lines: `28`.
- Unique local custom property names: `20`.
- `var(...)` references: `83`.
- `!important` declarations: `0`.
- Hard-coded `rgba(...)` references: `7`, all in striped progress gradients.
- `color-mix(...)` uses: `1`.

State and motion evidence:

- `:hover` selector matches: `0`.
- `:focus-visible` selector matches: `0`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled selector matches: `2`.
- Active selector matches: `6`.
- Complete selector matches: `1`.
- Indeterminate selector matches: `4`.
- Animated selector matches: `1`.
- Transition declarations: `1`.
- Transform declarations: `2`.
- Animation declarations: `2`.
- `@keyframes`: `2`, named `vds-progress-stripes` and `progress-indeterminate`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Responsive and layout evidence:

- Media blocks: `1`, at `max-width: 768px`.
- Flex display declarations: `4`.
- Inline-flex display declarations: `1`.
- Grid display declarations: `1`.
- Gap declarations: `7`.
- Overflow declarations: `1`.
- Position declarations: `6`.
- Z-index declarations: `3`.
- Width declarations: `7`.
- Height declarations: `8`.
- Container queries: `0`.

Package-facing output evidence:

- `@24vlh/vds/dist/components/progress.css` exists.
- `@24vlh/vds/dist/components/progress.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/progress.css`.
- `@24vlh/vds/src/core.css` does not import progress.

## 5. Component Contract

Current progress source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root scope | `[data-vds-progress]`, `.vds-progress` | local progress and stepper variable scope |
| Progress stack | `.progress-stack`, `.progress-stack--compact` | label/value/meta and bar grouping |
| Progress text | `.progress__header`, `.progress__label`, `.progress__value`, `.progress__meta` | visible task, percent, and supporting text |
| Track and bar | `.progress`, `.progress__track`, `.progress__bar` | determinate/indeterminate visual bar surface |
| Size/style variants | `.progress--sm`, `.progress--lg`, `.progress--outlined`, `.progress--pill` | height, border, and radius modifiers |
| Motion variants | `.progress--striped`, `.progress--animated`, `.progress--indeterminate` | striped fill, infinite stripe motion, and indeterminate translation |
| Semantic variants | `.progress--success`, `.progress--info`, `.progress--warning`, `.progress--danger` | semantic fill token variants |
| Stepper | `.stepper`, `.stepper__item`, `.stepper__marker`, `.stepper__content`, `.stepper__title`, `.stepper__desc` | multi-step visual sequence |
| Stepper states | `.stepper__item--active`, `.stepper__item--complete`, `.stepper__item--disabled` | visual active, complete, and disabled states |
| Stepper variants | `.stepper--compact`, `.stepper--vertical` | compact spacing and vertical layout |

Source interpretation:

- `@24vlh/vds/src/components/progress.css` is the source truth for current progress CSS behavior.
- Progress CSS owns visual/layout/state hooks for determinate bars, indeterminate bars, striped/animated fills, semantic fills, labels/meta/value text, and steppers.
- CSS does not own progress calculation, async loading, ARIA synchronization, live announcements, wizard routing, step validation, or keyboard behavior.
- Existing progress selectors, local variables, semantic variants, striped/animated/indeterminate behavior, stepper states, responsive behavior, docs examples, and package-facing outputs are compatibility-sensitive.

## 6. Token and Local Variable Surface

Local custom properties:

- `--progress-value`
- `--progress-height-sm`
- `--progress-height-md`
- `--progress-height-lg`
- `--progress-radius`
- `--progress-track-bg`
- `--progress-track-border`
- `--progress-fill`
- `--progress-label-color`
- `--progress-value-color`
- `--progress-meta-color`
- `--stepper-gap`
- `--stepper-marker-size`
- `--stepper-line-size`
- `--stepper-line`
- `--stepper-marker-bg`
- `--stepper-marker-border`
- `--stepper-marker-text`
- `--stepper-active`
- `--stepper-title-bg`

Audit conclusions:

- Progress uses local variables for bar value, size, track/fill, text colors, and stepper geometry.
- Semantic progress variants override `--progress-fill`.
- Stepper compact mode overrides `--stepper-gap` and `--stepper-marker-size`.
- No local variable, token reference, animation hook, state hook, or responsive rule is approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

Selector inventory totals:

- Progress-source classes: `32`.
- Public classes: `27`.
- Candidate-public classes: `5`.

Candidate-public classes:

- `.progress--danger`
- `.progress--outlined`
- `.progress--pill`
- `.progress__track`
- `.vds-progress`

Audit conclusions:

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- `.progress--animated` and `.progress--indeterminate` are compatibility-sensitive because they trigger source animations.
- `.stepper__item--active`, `.stepper__item--complete`, and `.stepper__item--disabled` are state hooks even though this item does not add runtime behavior.
- Future selector pruning or reclassification requires migration approval.

## 8. Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-progress.doc.html` has `258` lines.
- Docs cover progress indicators, determinate progress, `--progress-value`, density, stripes, indeterminate loading, steppers, active and complete step states, disabled step examples, usage patterns, labels, contrast, and accessibility rules.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-progress.json`
- Blocks: `5`.
- Code examples: `3`.
- Generated class tokens: `33`.
- Generated `source_css`: `[]`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `progress` | `80` |
| `stepper` | `55` |
| `step` | `60` |
| `determinate` | `6` |
| `indeterminate` | `5` |
| `aria` | `2` |
| `aria-valuenow` | `1` |
| `aria-valuemax` | `1` |
| `progressbar` | `0` |
| `aria-valuemin` | `0` |
| `aria-current` | `0` |
| `aria-disabled` | `0` |
| `keyboard` | `0` |
| `focus` | `0` |
| `loading` | `1` |
| `animation` | `1` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |
| `contrast` | `2` |

Docs coverage and gaps:

- Raw docs cover determinate progress, `--progress-value`, density, stripes, indeterminate loading, steppers, active/complete/disabled states, usage rules, `aria-valuenow`, `aria-valuemax`, labels, contrast, and reduced-motion guidance.
- Raw docs do not mention `progressbar`, `aria-valuemin`, `aria-current`, `aria-disabled`, keyboard, focus, responsive/mobile, forced-colors, or source keyframe names.
- Generated metadata currently has `source_css: []`; this is a docs-index metadata gap, not a manual generated-index fix.
- Source has animations but no file-local reduced-motion handling.

## 9. Accessibility, Runtime, and Behavior Boundaries

Consumer/application code owns:

- Progress values and `--progress-value` updates.
- `role="progressbar"` and `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, labels, and descriptions.
- Loading state changes, live announcements, and exact value exposure.
- Step current, complete, disabled, and validation state.
- Wizard routing, keyboard behavior, and step interaction semantics.

APG/WCAG interpretation:

- ARIA progressbar guidance applies when progress is exposed to assistive technology.
- Stepper visuals do not imply wizard routing, keyboard behavior, or validation semantics.
- Animated and indeterminate progress should coordinate with motion guidance before any cleanup.

Audit conclusions:

- Progress CSS is compatibility-sensitive because it exposes value, animation, and stepper state hooks used by docs examples and consumers.
- Source CSS wins where raw docs provide incomplete ARIA or reduced-motion wording.
- Actual accessibility behavior remains a later implementation/docs task.

## 10. Responsive, Motion, and Forced-Colors Evidence

Responsive source behavior:

- One `max-width: 768px` media block changes `.stepper` to column layout.
- The same block positions markers absolutely and converts connector lines to vertical connectors.
- Progress bars themselves have no viewport media query.

Motion source behavior:

- `.progress__bar` transitions width with `var(--transition-normal)`.
- `.progress--animated .progress__bar` uses `vds-progress-stripes`.
- `.progress--indeterminate .progress__bar` uses `progress-indeterminate` and transform translation.
- No reduced-motion media block exists in `progress.css`.

Forced-colors evidence:

- Source has `0` forced-colors blocks.
- Raw docs mention forced-colors `0` times.

Audit conclusions:

- Responsive stepper collapse is source truth and should not be inverted or renamed without migration approval.
- Source has animations but no file-local reduced-motion block; this is an audit finding only.
- Forced-colors review remains future work.

## 11. Risks and Future Routing

- Progress values and exact status cannot be solved by CSS; ARIA values and live announcements remain consumer-owned.
- Generated docs metadata currently omits `progress.css`; this is a docs-index metadata gap, not a manual generated-index fix.
- Source animations lack file-local reduced-motion handling despite docs advising reduced-motion care.
- Forced-colors handling is absent and should be routed to a later visual/accessibility item.
- Hard-coded `rgba(...)` stripe colors may need theme/contrast review before cleanup.
- Stepper active/complete/disabled states may need APG/wizard guidance before behavior recommendations change.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Progress CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Selector classification: later approved selector inventory/docs item.
- ARIA progressbar and stepper semantics: later approved accessibility/docs item.
- Theme/contrast, reduced-motion, and forced-colors checks: later approved visual integrity item.

## 12. Public Interfaces

- No runtime CSS APIs change.
- No CSS, raw docs, generated docs index, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-progress-component-audit.md` becomes the decision source for later progress CSS fixes, docs rewrite, selector classification, ARIA/progressbar guidance, stepper semantics, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.

## 13. Validation Plan

Approved validation commands:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
- Read-only progress audit scan.
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
- Read-only progress audit scan confirmed CSS counts, local variables, selector inventory totals, docs/index evidence, import/package evidence, progress bar/indeterminate/striped/animated/stepper/state/responsive evidence, ARIA/motion/forced-colors gaps, generated metadata gap, and dist presence.
- Markdown sanity checks passed for master-map status, `VDS-0500` in-progress status, artifact path, no runtime/source/generated/inventory/consumer-report changes, and next recommended item.
- `git diff --check` for changed planning files passed.
