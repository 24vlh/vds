# VDS Feedback System Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-2130`

This file records the feedback system component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/feedback.css` is the source truth for current feedback CSS behavior.
- `@24vlh/vds/doc-raw/vds-feedback.doc.html` and `@24vlh/agents/docs_vds/components/vds-feedback.json` are docs/index evidence.
- Feedback CSS provides visual and state surfaces for alerts, banners, toasts, inline form feedback hooks, status indicators, info/result blocks, progress bars, guidance-adjacent blocks, and semantic variants.
- Consumer/application code owns alert/status semantics, `aria-live`, dismiss actions, toast lifecycle, progress values, form validation state, notification timing, and keyboard behavior.
- Existing feedback selectors, local variables, semantic variants, toast/progress animations, close controls, density variants, z-index usage, and docs examples are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, or generated output refresh happens in `VDS-2130`.

## Source CSS Evidence

`@24vlh/vds/src/components/feedback.css` currently has:

- Lines: `733`.
- Selector blocks: `89`.
- Expanded selectors: `104`.
- Declarations: `312`.
- Custom property declaration lines: `41`.
- Unique local token names: `11`.
- `var(...)` references: `227`.
- `!important` declarations: `32`.
- `rgba(...)` references: `3`, in the progress sheen.
- `color-mix(...)` uses: `0`.

Media and interaction evidence:

- Media blocks: `1`, at `max-width: 640px`.
- `@keyframes`: `4`.
- Keyframe names: `toast-enter`, `progress-stripes`, `progress-stripes-relaxed`, and `progress-sheen`.
- `:hover` selector matches: `3`.
- `:focus-visible` selector matches: `3`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled selector matches: `0`.
- Selected selector matches: `0`.
- Close-related matches: `10`.
- Sticky-related matches: `3`.
- Loading/busy selector matches: `0`.
- Animation declarations: `5`.
- Transition declarations: `1`.
- Transform declarations: `2`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Layout and visual evidence:

- Flex display declarations: `12`.
- Grid display declarations: `1`.
- Inline-flex declarations: `1`.
- Gap declarations: `12`.
- Padding-related declarations: `14`.
- Position declarations: `9`.
- Z-index declarations: `2`.
- Overflow declarations: `2`.
- Width declarations: `14`.
- Height declarations: `12`.
- Box-shadow declarations: `1`.
- Outline declarations: `3`.
- Outline-offset declarations: `3`.
- Border-related declarations: `26`.
- Border-radius declarations: `9`.
- Background/background-color declarations: `19`.
- Color declarations: `20`.
- Opacity declarations: `9`.
- Cursor declarations: `3`.
- Pointer-events declarations: `1`.

Package-facing output:

- `@24vlh/vds/dist/components/feedback.css` exists.
- `@24vlh/vds/dist/components/feedback.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/feedback.css`.
- `@24vlh/vds/src/core.css` does not import feedback.

## Component Contract

Current feedback source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root | `[data-vds-feedback]`, `.vds-feedback` | feedback-local variables |
| Semantic variants | `.feedback[data-variant]` and broad `[data-variant]` hooks | semantic background, border, and text aliases |
| Alerts | `.alert`, `.alert__*`, `.alert--outline` | inline feedback message with optional close control |
| Banners | `.banner`, `.banner__*`, `.banner--sticky` | full-width announcement and sticky mode |
| Toasts | `.feedback-toast`, `.feedback-toast__*`, `.feedback-toast-stack`, stack position helpers, `.feedback-toast--static` | floating notification, stack positioning, docs/demo static mode |
| Form/input feedback | `.form-feedback`, `.input-feedback--*` | form-validation visual hooks |
| Status/progress | `.status`, `.status--outline`, `.status--dot`, `.progress`, `.progress__bar`, progress modifiers | inline status and quantitative progress visuals |
| Guidance/info/result | `.guidance`, `.info-block`, `.result` and descendants | adjacent guidance, information, and result feedback surfaces |
| Density | `[data-density="compact"]` hooks | compact feedback sizing |

Source interpretation:

- Feedback CSS provides visual and state surfaces, not runtime behavior.
- CSS owns semantic variant color aliases, alert/banner/toast/status/progress/result/info/guidance surfaces, close-control focus styles, sticky/toast stack positioning, animation styling, density adjustments, and responsive tightening.
- Consumer/application code owns alert/status semantics, `aria-live`, dismiss actions, toast lifecycle, progress values, form validation state, notification timing, and keyboard behavior.

## Local Token Surface

Current local variables:

| Variable | Role |
| --- | --- |
| `--feedback-padding-sm` | compact feedback padding |
| `--feedback-padding-md` | default feedback padding |
| `--feedback-padding-lg` | large feedback padding |
| `--feedback-gap` | inner feedback gap |
| `--feedback-info-block-border-width` | info-block border width |
| `--feedback-bg` | semantic feedback background alias |
| `--feedback-border` | semantic feedback border alias |
| `--feedback-text` | semantic feedback text alias |
| `--guidance-bg` | guidance background alias |
| `--guidance-border` | guidance border alias |
| `--guidance-text` | guidance text alias |

Audit conclusions:

- Local feedback variables are component-owned aliases.
- They rely on primitive spacing/border/motion/z-index and theme semantic color, text, surface, border, shadow, focus, and accent tokens.
- Broad semantic `data-variant` aliases can affect nested surfaces beyond `.feedback`.
- No local variable or token reference is approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- Feedback-source classes: `57`.
- Public classes: `43`.
- Candidate-public classes: `14`.

Class family counts:

| Group | Total |
| --- | ---: |
| root | `1` |
| alert | `7` |
| banner | `5` |
| toast/position | `8` |
| guidance | `10` |
| info block | `1` |
| status | `3` |
| progress | `5` |
| result | `5` |

Candidate-public classes:

- `.vds-feedback`
- `.feedback`
- `.form-feedback`
- `.form-feedback--error`
- `.form-feedback--info`
- `.form-feedback--success`
- `.form-feedback--warning`
- `.input-feedback--error`
- `.input-feedback--info`
- `.input-feedback--success`
- `.input-feedback--warning`
- `.is-top-right`
- `.is-bottom-right`
- `.is-bottom-left`

Audit conclusions:

- Candidate-public status reflects current docs coverage, not permission to remove or rename source-defined selectors.
- Form/input feedback hooks overlap with later forms audits.
- Guidance selectors overlap with the later guidance component audit.
- Future selector pruning or reclassification requires migration approval.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-feedback.doc.html` has `887` lines.
- Docs cover overview/dependencies, feedback primitives/design rules, alerts, banners, feedback toasts, guidance blocks, info blocks, status indicators, progress bars, result blocks, density system, doc-block integration, accessibility rules, usage rules, and do/don't guidance.
- Docs explicitly require accessible labels for dismiss controls and real keyboard-accessible buttons for toast dismiss actions.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-feedback.json`
- Blocks: `14`.
- Code examples: `12`.
- Generated class tokens: `70`.
- Generated `source_css`: `base.css`, `feedback.css`, `icons.css`, `layout.css`, `primitives.css`, `themes/slate.css`, and `utilities.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `feedback` | `86` |
| `alert` | `74` |
| `banner` | `29` |
| `toast` | `57` |
| `guidance` | `28` |
| `info-block` | `11` |
| `status` | `27` |
| `progress` | `53` |
| `result` | `20` |
| `close` | `15` |
| `dismiss` | `11` |
| `sticky` | `4` |
| `semantic` | `20` |
| `variant` | `70` |
| `aria` | `75` |
| `role` | `1` |
| `live` | `1` |
| `keyboard` | `2` |
| `focus` | `3` |
| `responsive` | `1` |
| `mobile` | `0` |
| `forced-colors` | `0` |
| `reduced-motion` | `1` |
| `animation` | `2` |
| `loading` | `0` |
| `contrast` | `0` |

Audit conclusions:

- Generated `source_css` metadata is present and includes a theme file.
- Raw docs cover accessibility guidance for dismiss controls and semantic variants.
- Raw docs say the layer supports reduced-motion, but source has no file-local `prefers-reduced-motion` block.
- Raw docs do not mention forced-colors, contrast, loading, or mobile directly.

## Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Choosing semantic roles for alerts, statuses, banners, and notifications.
- Adding `aria-live` behavior where updates need announcement.
- Implementing dismiss actions and removing dismissed UI from the accessibility tree when appropriate.
- Managing toast lifecycle, timing, queuing, persistence, and focus behavior.
- Keeping toast dismiss buttons keyboard-accessible and labeled.
- Supplying form validation state and binding input feedback to fields.
- Supplying progress values and semantic `progressbar` attributes where needed.
- Avoiding color-only communication for critical statuses.

CSS source currently provides:

- Semantic visual variant aliases.
- Alert, banner, toast, status, progress, guidance, info-block, and result visuals.
- Close-control hover and focus-visible styling.
- Sticky banner positioning.
- Fixed toast stack positioning with `--z-toast`.
- CSS-only toast and progress animations.
- Compact density adjustments.
- Mobile tightening at `max-width: 640px`.
- No file-local reduced-motion block.
- No file-local forced-colors block.

Audit findings:

- Animations are present without file-local reduced-motion handling.
- Forced-colors handling is absent.
- Broad `[data-variant]` selectors are cascade-sensitive.
- Semantic variants and status dots can become color-only communication if not paired with text.
- `!important` use is widespread on semantic variants and the static toast docs/demo mode.
- Progress bars need consumer-owned values and accessible progress semantics.

## Risks and Future Routing

- Feedback is a broad component surface covering runtime UI, form feedback hooks, guidance-adjacent blocks, and docs-demo static toasts; splitting or pruning requires migration approval.
- Broad unscoped `[data-variant]` selectors can influence other components and must be classified before cleanup.
- Toast and progress animations overlap with the earlier motion audit and need reduced-motion review.
- Z-index usage overlaps with the overlay stack audit.
- Form feedback hooks must coordinate with upcoming forms audits.
- Guidance-adjacent selectors must coordinate with the upcoming guidance audit.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Feedback CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Live-region/toast runtime guidance: later approved accessibility/docs-runtime item.
- Generated docs metadata refresh: later approved docs-index item.
- Selector classification changes: later approved selector inventory item.
- Animation/reduced-motion cleanup: later approved motion/accessibility item.
- Theme/contrast checks: later approved visual/contrast QA items.
- Dist refresh: later approved release/build-output item.

## Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-feedback-system-audit.md` becomes the decision source for later feedback CSS fixes, docs rewrite, accessibility/live-region guidance, selector classification, animation/motion cleanup, theme/contrast checks, migration notes, and release verification.
