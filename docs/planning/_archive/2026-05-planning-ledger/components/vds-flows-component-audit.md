# VDS Flows Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-2140`

This file records the flows component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/flows.css` is the source truth for current flows CSS behavior.
- `@24vlh/vds/doc-raw/vds-flows.doc.html` and `@24vlh/agents/docs_vds/components/vds-flows.json` are docs/index evidence.
- Flows CSS provides visual and state surfaces for steps, timelines, journeys, process flows, branches, state/form flows, progress bars, current/disabled states, semantic state variants, and responsive collapse.
- Consumer/application code owns current step state, `aria-current`, `aria-disabled`, keyboard/click behavior, progress values, route/wizard behavior, form validation state, live announcements, and state synchronization.
- Existing flow selectors, local variables, state classes, progress variants, responsive behavior, and docs examples are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, selector inventory update, or generated output refresh happens in `VDS-2140`.

## Source CSS Evidence

`@24vlh/vds/src/components/flows.css` currently has:

- Lines: `1097`.
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

- Media blocks: `3`.
- Media conditions:
  - `prefers-reduced-motion: reduce`
  - `prefers-reduced-motion: reduce`
  - `max-width: 768px`
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

Layout and visual evidence:

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

Package-facing output:

- `@24vlh/vds/dist/components/flows.css` exists.
- `@24vlh/vds/dist/components/flows.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/flows.css`.
- `@24vlh/vds/src/core.css` does not import flows.

## Component Contract

Current flow source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root | `[data-vds-flow]`, `.vds-flow` | flow-local variables |
| Flow container | `.flow`, `.flow--compact`, `.flow__header`, `.flow__title`, `.flow__subtitle`, `.flow__body`, `.flow__nav` | page/section flow shell and compact density |
| Steps | `.steps`, `.steps--a`, `.steps--c`, `.steps--vertical`, `.steps__item`, `.steps__bullet`, `.steps__label`, `.steps__line` | stepper layout, bullets, labels, connectors, and active/current/complete/error/warning states |
| Progress | `.flow-progress`, `.flow-progress__bar`, `.flow-progress__segment`, striped and segmented modifiers | CSS progress visuals and semantic fill aliases |
| Timelines | `.timeline`, `.timeline--audit`, `.timeline--compact`, `.timeline--horizontal`, `.timeline--rich`, `.timeline-events`, `.timeline__*` | vertical, horizontal, rich, compact, and audit timeline layouts |
| Journeys | `.journey`, `.journey--compact`, `.journey__stage`, `.journey__*` | journey stage cards and state variants |
| Process flows | `.process-flow`, `.process-flow--compact`, `.process-flow--vertical`, `.process-flow__node`, `.process-flow__arrow`, `.process-flow__icon` | process nodes, arrows, vertical mode, and state variants |
| State flows | `.state-flow`, `.state-flow__item` and state modifiers | compact state progression surface |
| Form flows | `.form-flow`, `.form-flow__step`, `.form-flow__actions`, `.form-flow__actions-right` | form-step scaffolding and validation visual states |
| Branches | `.flow-branch`, `.flow-branch--compact`, `.flow-branch__option`, `.flow-branch__arrow`, `.flow-branch__icon`, `.flow-branch__title`, `.flow-branch__details` | branching choice cards, arrows, details, and state variants |

Source interpretation:

- Flows CSS provides visual and state surfaces, not runtime behavior.
- CSS owns flow layout, step and timeline visuals, journey/process/branch cards, state and form flow markers, progress bars, semantic state coloring, clickable/disabled visuals, reduced-motion handling for striped progress, and responsive stacking.
- Consumer/application code owns current step state, `aria-current`, `aria-disabled`, click/keyboard behavior, route/wizard behavior, form validation state, progress values, labels, live announcements, and state synchronization.

## Local Token Surface

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

## Selector Inventory Evidence

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

- Candidate-public status reflects current docs coverage and selector classification, not permission to remove or rename source-defined selectors.
- `form-flow` overlaps with upcoming forms audits.
- Flow progress overlaps with progress/status guidance but remains part of the current flows source surface.
- Future selector pruning or reclassification requires migration approval.

## Docs and Generated Index Evidence

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

- Generated `source_css: []` is a docs-index metadata gap, not a manual generated-index fix.
- Raw docs mention `aria-current`, but do not mention `aria-disabled` or `progressbar`.
- Raw docs lightly mention reduced-motion and do not mention forced-colors.
- Docs examples mix flow classes with adjacent component and docs presentation dependencies; later docs rewrite should separate runtime requirements from demo scaffolding.

## Accessibility and Behavior Boundaries

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

## Responsive and Motion Evidence

Responsive source behavior:

- One `max-width: 768px` block.
- `.steps` uses wrapping.
- `.process-flow` stacks vertically and aligns to flex-start.
- `.process-flow__arrow` becomes a vertical connector.
- `.journey` stacks vertically.
- `.journey__stage` becomes full width.

Motion source behavior:

- Striped progress uses `flow-progress-stripes`.
- Two `prefers-reduced-motion: reduce` blocks target progress transitions and striped animation.
- Transitions remain present outside the reduced-motion blocks.
- No `will-change` declarations are present.

Audit conclusions:

- Responsive behavior is compatibility-sensitive and should not be inverted without visual QA and migration notes.
- Reduced-motion exists for striped progress, but all motion paths should be rechecked during later cleanup.
- Forced-colors review remains future work.

## Risks and Future Routing

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

