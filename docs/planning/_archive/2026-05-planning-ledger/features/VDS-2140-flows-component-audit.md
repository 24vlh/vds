# VDS-2140 Flows Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2140`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2140-flows-component-audit.md`

## 1. Goal

Create the flows component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only flow contract: steps, timelines, journeys, process flows, branches, state/form flows, progress bars, current/disabled semantics, responsive collapse, docs/index metadata, package-facing dist presence, and accessibility/theming/motion risks before any flow CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/flows.css` selector, token, step, timeline, journey, process-flow, branch, state-flow, form-flow, progress, state, responsive, motion, theme, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the flow class surface.
- Record raw docs and generated docs-index metadata for `vds-flows`.
- Record package-facing `dist/components/flows.css` and `.min.css` presence.
- Add a flows component audit artifact for later CSS fixes, docs rewrite, selector classification, accessibility review, progress semantics, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2140` is done, and the next recommended item is `VDS-2150`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding JavaScript routing, wizard behavior, validation, progress-value synchronization, navigation state, state management, live announcements, or keyboard behavior.
- Adding forced-colors handling, responsive screenshots, visual checks, selector reclassification, docs rewrites, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-flows.json`
- Repo files:
  - `@24vlh/vds/src/components/flows.css`
  - `@24vlh/vds/doc-raw/vds-flows.doc.html`
  - `@24vlh/vds/dist/components/flows.css`
  - `@24vlh/vds/dist/components/flows.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/flows.css` has `1097` lines.
- Selector blocks: `172`.
- Expanded selectors: `195`.
- Declarations: `453`.
- Custom property declaration lines: `30`.
- Unique local token names: `26`.
- `var(...)` references: `390`.
- `!important` declarations: `0`.
- Hard color references: `3`.
- `color-mix(...)` uses: `0`.

Media, interaction, and state evidence:

- Media blocks: `3`: two `prefers-reduced-motion: reduce` blocks and one `max-width: 768px` block.
- `@keyframes`: `1`.
- Keyframe name: `flow-progress-stripes`.
- `:hover` selector matches: `4`.
- `:focus-visible` selector matches: `5`.
- `:active` selector matches: `4`.
- Disabled/`aria-disabled` selector matches: `18`.
- Current/`aria-current` selector matches: `2`.
- Complete selector matches: `7`.
- Upcoming selector matches: `7`.
- Clickable selector matches: `17`.
- Loading/busy selector matches: `0`.
- Animation declarations: `3`.
- Transition declarations: `2`.
- Transform declarations: `4`.
- Reduced-motion media matches: `2`.
- Forced-colors blocks: `0`.

Layout and style evidence:

- Flex display declarations: `25`.
- Grid display declarations: `1`.
- Inline-flex declarations: `2`.
- Gap declarations: `40`.
- Padding-related declarations: `8`.
- Position declarations: `0`.
- Z-index declarations: `0`.
- Overflow declarations: `2`.
- Width declarations: `22`.
- Height declarations: `21`.
- Grid-template-columns declarations: `1`.
- Outline declarations: `1`.
- Outline-offset declarations: `1`.
- Border-related declarations: `53`.
- Border-radius declarations: `10`.
- Background/background-color declarations: `58`.
- Color declarations: `47`.
- Opacity declarations: `10`.
- Cursor declarations: `5`.
- Pointer-events declarations: `4`.

Package-facing output evidence:

- `@24vlh/vds/dist/components/flows.css` exists.
- `@24vlh/vds/dist/components/flows.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/flows.css`.
- `@24vlh/vds/src/core.css` does not import flows.

## 5. Component Contract

Current flow source surfaces:

- Root/local variables:
  - `[data-vds-flow]`
  - `.vds-flow`
- Flow container:
  - `.flow`
  - `.flow--compact`
  - `.flow__header`
  - `.flow__title`
  - `.flow__subtitle`
  - `.flow__body`
  - `.flow__nav`
- Steps:
  - `.steps`
  - `.steps--a`
  - `.steps--c`
  - `.steps--vertical`
  - `.steps__item`
  - `.steps__item--active`
  - `.steps__item--clickable`
  - `.steps__item--complete`
  - `.steps__item--disabled`
  - `.steps__item--error`
  - `.steps__item--upcoming`
  - `.steps__item--warning`
  - `.steps__bullet`
  - `.steps__label`
  - `.steps__line`
- Progress bars:
  - `.flow-progress`
  - `.flow-progress--segments`
  - `.flow-progress--striped`
  - `.flow-progress--striped-right`
  - `.flow-progress__bar`
  - `.flow-progress__bar--success`
  - `.flow-progress__bar--warning`
  - `.flow-progress__bar--error`
  - `.flow-progress__bar--info`
  - `.flow-progress__segment`
  - `.flow-progress__segment--complete`
  - `.flow-progress__segment--error`
  - `.flow-progress__segment--warning`
  - `.flow-progress__segment--info`
- Timelines:
  - `.timeline`
  - `.timeline--audit`
  - `.timeline--compact`
  - `.timeline--horizontal`
  - `.timeline--rich`
  - `.timeline-events`
  - `.timeline__item`
  - `.timeline__point`
  - `.timeline__point--upcoming`
  - `.timeline__point--error`
  - `.timeline__point--warning`
  - `.timeline__point--success`
  - `.timeline__point--info`
  - `.timeline__icon`
  - `.timeline__line`
  - `.timeline__content`
  - `.timeline__label`
  - `.timeline__note`
  - `.timeline__timestamp`
  - `.timeline__meta`
  - `.timeline__body`
- Journeys:
  - `.journey`
  - `.journey--compact`
  - `.journey__stage`
  - `.journey__stage--active`
  - `.journey__stage--clickable`
  - `.journey__stage--complete`
  - `.journey__stage--disabled`
  - `.journey__stage--error`
  - `.journey__stage--info`
  - `.journey__stage--success`
  - `.journey__stage--upcoming`
  - `.journey__stage--warning`
  - `.journey__icon`
  - `.journey__marker`
  - `.journey__title`
  - `.journey__details`
- Process flows:
  - `.process-flow`
  - `.process-flow--compact`
  - `.process-flow--vertical`
  - `.process-flow__node`
  - `.process-flow__node--active`
  - `.process-flow__node--clickable`
  - `.process-flow__node--complete`
  - `.process-flow__node--disabled`
  - `.process-flow__node--error`
  - `.process-flow__node--info`
  - `.process-flow__node--success`
  - `.process-flow__node--upcoming`
  - `.process-flow__node--warning`
  - `.process-flow__icon`
  - `.process-flow__arrow`
  - `.process-flow__arrow--error`
  - `.process-flow__arrow--warning`
- State and form flows:
  - `.state-flow`
  - `.state-flow__item`
  - `.state-flow__item--active`
  - `.state-flow__item--complete`
  - `.state-flow__item--error`
  - `.state-flow__item--info`
  - `.state-flow__item--upcoming`
  - `.state-flow__item--warning`
  - `.form-flow`
  - `.form-flow__step`
  - `.form-flow__step--error`
  - `.form-flow__step--success`
  - `.form-flow__step--valid`
  - `.form-flow__step--warning`
  - `.form-flow__actions`
  - `.form-flow__actions-right`
- Branching flows:
  - `.flow-branch`
  - `.flow-branch--compact`
  - `.flow-branch__option`
  - `.flow-branch__option--active`
  - `.flow-branch__option--clickable`
  - `.flow-branch__option--complete`
  - `.flow-branch__option--disabled`
  - `.flow-branch__option--error`
  - `.flow-branch__option--info`
  - `.flow-branch__option--success`
  - `.flow-branch__option--upcoming`
  - `.flow-branch__option--warning`
  - `.flow-branch__arrow`
  - `.flow-branch__arrow--error`
  - `.flow-branch__arrow--warning`
  - `.flow-branch__icon`
  - `.flow-branch__title`
  - `.flow-branch__details`

Source interpretation:

- Flows CSS provides visual and state surfaces, not runtime behavior.
- CSS owns flow layout, step and timeline visuals, journey/process/branch cards, state and form flow markers, progress bars, semantic state coloring, clickable/disabled visuals, reduced-motion handling for striped progress, and responsive stacking.
- Consumer/application code owns current step state, `aria-current`, `aria-disabled`, click/keyboard behavior, route/wizard behavior, form validation state, progress values, labels, live announcements, and state synchronization.
- Flow selectors, local variables, state classes, progress variants, responsive behavior, and docs examples are compatibility-sensitive.

## 6. Local Token Surface

Current local variables:

| Variable | Role |
| --- | --- |
| `--flow-component-disabled-opacity` | disabled/upcoming visual opacity |
| `--flow-step-bullet-sm` | small step bullet size |
| `--flow-step-bullet-md` | medium step bullet size |
| `--flow-step-bullet-lg` | large step bullet size |
| `--flow-timeline-point-xs` | compact timeline point size |
| `--flow-timeline-point-sm` | standard timeline point size |
| `--flow-timeline-point-md` | rich timeline point size |
| `--flow-node-min-width` | process node minimum width |
| `--flow-stage-min-width` | journey stage minimum width |
| `--flow-grid-min-md` | flow grid minimum width |
| `--flow-icon-size-sm` | small flow icon size |
| `--flow-icon-size-md` | medium flow icon size |
| `--flow-icon-size-lg` | large flow icon size |
| `--flow-gap-xs` | extra-small flow gap |
| `--flow-gap-sm` | small flow gap |
| `--flow-gap-md` | medium flow gap |
| `--flow-gap-lg` | large flow gap |
| `--flow-gap-xl` | extra-large flow gap |
| `--flow-inset-xs` | extra-small flow inset |
| `--flow-inset-sm` | small flow inset |
| `--flow-inset-md` | medium flow inset |
| `--flow-inset-lg` | large flow inset |
| `--flow-progress-stripe-size` | striped progress background size |
| `--flow-progress-stripe-speed` | striped progress animation speed |
| `--flow-progress-track` | progress track color alias |
| `--flow-progress-fill` | progress fill color alias |

Audit conclusions:

- Local flow variables are component-owned aliases for sizing, spacing, disabled opacity, and progress styling.
- They rely on primitive spacing/border/motion and theme semantic color, text, surface, border, focus, muted, and accent tokens.
- Progress fill aliases map success, warning, error, and info states to theme semantic tokens.
- No local variable or token reference is approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

Selector inventory totals:

- Flow-source classes: `129`.
- Public classes: `118`.
- Candidate-public classes: `11`.

Class family counts:

| Group | Total |
| --- | ---: |
| root | `1` |
| flow | `7` |
| steps | `15` |
| timeline | `25` |
| journey | `16` |
| process flow | `17` |
| branch | `18` |
| state flow | `8` |
| form flow | `8` |
| progress | `14` |

Candidate-public classes:

- `.vds-flow`
- `.steps__item--disabled`
- `.journey__stage--upcoming`
- `.process-flow__node--info`
- `.process-flow__node--upcoming`
- `.timeline__icon`
- `.timeline__icon--top`
- `.timeline__point--info`
- `.timeline__point--success`
- `.flow-branch__option--disabled`
- `.flow-branch__option--upcoming`

Audit conclusions:

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- `form-flow` overlaps with the upcoming forms audits.
- Progress styling overlaps with feedback/progress guidance but remains part of the current flows component surface.
- Future selector pruning or reclassification requires migration approval.

## 8. Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-flows.doc.html` has `1784` lines.
- Docs cover flow containers, steps, timelines, journeys, process flows, branching choices, state flows, form flows, progress indicators, semantic variants, compact density, responsive behavior, and accessibility/usage guidance.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-flows.json`
- Blocks: `13`.
- Code examples: `22`.
- Generated class tokens: `139`.
- Generated `source_css`: empty array.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `flow` | `315` |
| `steps` | `197` |
| `step` | `229` |
| `journey` | `92` |
| `timeline` | `352` |
| `process` | `69` |
| `branch` | `77` |
| `state-flow` | `26` |
| `form-flow` | `14` |
| `progress` | `78` |
| `segment` | `22` |
| `current` | `6` |
| `aria-current` | `3` |
| `aria-disabled` | `0` |
| `disabled` | `5` |
| `active` | `34` |
| `complete` | `37` |
| `success` | `18` |
| `warning` | `39` |
| `error` | `28` |
| `info` | `15` |
| `clickable` | `19` |
| `keyboard` | `2` |
| `focus` | `4` |
| `responsive` | `3` |
| `mobile` | `0` |
| `reduced-motion` | `1` |
| `forced-colors` | `0` |
| `animation` | `1` |
| `progressbar` | `0` |

Audit conclusions:

- Generated `source_css: []` is a docs-index metadata gap.
- Raw docs mention `aria-current`, but do not mention `aria-disabled` or `progressbar`.
- Raw docs lightly mention reduced-motion and do not mention forced-colors.
- Docs examples mix flow classes with adjacent component and docs presentation dependencies; later docs rewrite should separate runtime requirements from demo scaffolding.

## 9. Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Setting and synchronizing current step, active, complete, upcoming, error, warning, info, and success states.
- Applying `aria-current` where current step or location semantics are needed.
- Applying `aria-disabled` only when behavior and keyboard handling also match disabled semantics.
- Supplying keyboard behavior for clickable steps, stages, nodes, and branch options.
- Choosing real button or link elements for actionable flow items.
- Supplying readable labels and nearby text for visual state markers.
- Supplying semantic progress values and labels for progress bars.
- Announcing progress, validation, or route changes when needed.
- Managing route/wizard navigation, form validation, and state persistence.

CSS source currently provides:

- Flow, steps, timeline, journey, process-flow, state-flow, form-flow, branch, and progress visuals.
- Visual current, active, complete, upcoming, disabled, error, warning, info, and success states.
- Focus-visible outlines for clickable flow elements.
- Hover and active styling for clickable flow elements.
- Disabled opacity and pointer-events styling.
- Striped progress animation and reduced-motion fallback blocks.
- Responsive stacking/collapse at `max-width: 768px`.
- No file-local forced-colors block.

Audit findings:

- Flow state classes are visual hooks and do not supply semantics by themselves.
- Clickable flow surfaces need consumer-owned element semantics and keyboard behavior.
- Progress bars need consumer-owned progress semantics and current values.
- Color-coded state markers must be paired with readable labels and cannot rely on color alone.
- Forced-colors handling is absent.
- Reduced-motion handling exists for striped progress, but future motion review should verify all motion/transition paths.

## 10. Risks and Future Routing

- Flows is a broad component surface covering steps, timelines, journeys, process flows, branches, state flows, form-flow scaffolding, and progress bars; splitting or pruning requires migration approval.
- `form-flow` overlaps with the upcoming forms and advanced forms audits.
- Progress styling overlaps with feedback/progress semantics and needs coordinated accessibility guidance.
- Semantic state colors inherit contrast risks from prior theme audits.
- Generated `source_css: []` can weaken ownership checks until a later docs-index refresh is approved.
- Responsive behavior is limited to one `max-width: 768px` block and needs later visual QA.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Flow CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Progress semantics and wizard/step navigation guidance: later approved accessibility/docs-runtime item.
- Generated docs metadata refresh: later approved docs-index item.
- Responsive screenshots and visual QA: later approved responsive/visual verification item.

## 11. Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-flows-component-audit.md` becomes the decision source for later flow CSS fixes, docs rewrite, selector classification, accessibility review, progress semantics, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.

## 12. Validation Plan

Approved validation commands:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
- Read-only flows audit scan.
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
- `pnpm run audit:dist` was attempted and started `node static/js/check-generated-artifacts.js --check`, but the checker did not return after several quiet minutes and was stopped. No write/regeneration command was run.
- `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `.md` are stale; per plan, `pnpm run consumer:scan` was not run.
- Read-only flows audit scan confirmed CSS counts, local variable count, selector inventory totals, docs/index evidence, import/package evidence, responsive behavior, reduced-motion evidence, and forced-colors gap.
- Markdown sanity checks passed after this validation log update.
- `git diff --check` for changed planning files passed.
