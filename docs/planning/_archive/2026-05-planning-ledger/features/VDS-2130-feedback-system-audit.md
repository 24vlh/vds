# VDS-2130 Feedback System Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2130`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2130-feedback-system-audit.md`

## 1. Goal

Create the feedback system component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only feedback contract: alerts, banners, toasts, inline form feedback hooks, status indicators, info/result blocks, progress bars, guidance-adjacent blocks, semantic `data-variant` mapping, dismissible controls, sticky/stacked positioning, animation behavior, docs/index metadata, package-facing dist presence, and accessibility/theming risks before any feedback CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/feedback.css` selector, token, semantic variant, alert, banner, toast, form/input feedback, status, progress, guidance, info-block, result, density, positioning, animation, responsive, z-index, theme, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the feedback class surface.
- Record raw docs and generated docs-index metadata for `vds-feedback`.
- Record package-facing `dist/components/feedback.css` and `.min.css` presence.
- Add a feedback system audit artifact for later CSS fixes, docs rewrite, accessibility/live-region guidance, selector classification, animation/motion cleanup, theme/contrast checks, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2130` is done, and the next recommended item is `VDS-2140`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding JavaScript live-region behavior, dismiss behavior, toast lifecycle, form validation state, notification queueing, timeout behavior, progress value synchronization, or keyboard behavior.
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
  - `@24vlh/agents/docs_vds/components/vds-feedback.json`
- Repo files:
  - `@24vlh/vds/src/components/feedback.css`
  - `@24vlh/vds/doc-raw/vds-feedback.doc.html`
  - `@24vlh/vds/dist/components/feedback.css`
  - `@24vlh/vds/dist/components/feedback.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/feedback.css` has `733` lines.
- Selector blocks: `89`.
- Expanded selectors: `104`.
- Declarations: `312`.
- Custom property declaration lines: `41`.
- Unique local token names: `11`.
- `var(...)` references: `227`.
- `!important` declarations: `32`.
- `rgba(...)` references: `3`, in the progress sheen.
- `color-mix(...)` uses: `0`.

Media, interaction, and state evidence:

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

Layout and style evidence:

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

Package-facing output evidence:

- `@24vlh/vds/dist/components/feedback.css` exists.
- `@24vlh/vds/dist/components/feedback.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/feedback.css`.
- `@24vlh/vds/src/core.css` does not import feedback.

## 5. Component Contract

Current feedback source surfaces:

- Root/local variables:
  - `[data-vds-feedback]`
  - `.vds-feedback`
- Semantic variant layer:
  - `.feedback[data-variant="info"]`
  - `.feedback[data-variant="success"]`
  - `.feedback[data-variant="warning"]`
  - `.feedback[data-variant="error"]`
  - broad `[data-variant="info"]`, `success`, `warning`, `danger`, `error`, `neutral`, and `accent`
- Alerts:
  - `.alert`
  - `.alert[data-variant]`
  - `.alert__icon`
  - `.alert__content`
  - `.alert__title`
  - `.alert__message`
  - `.alert__close`
  - `.alert--outline`
- Banners:
  - `.banner`
  - `.banner[data-variant]`
  - `.banner__inner`
  - `.banner__text`
  - `.banner__close`
  - `.banner--sticky`
- Toasts:
  - `.feedback-toast`
  - `.feedback-toast[data-variant]`
  - `.feedback-toast__icon`
  - `.feedback-toast__text`
  - `.feedback-toast__close`
  - `.feedback-toast-stack`
  - `.is-top-right`
  - `.is-top-left`
  - `.is-bottom-right`
  - `.is-bottom-left`
  - `.feedback-toast--static`
- Form/input feedback hooks:
  - `.form-feedback`
  - `.form-feedback--error`
  - `.form-feedback--warning`
  - `.form-feedback--success`
  - `.form-feedback--info`
  - `.input-feedback--error`
  - `.input-feedback--warning`
  - `.input-feedback--success`
  - `.input-feedback--info`
- Status and progress:
  - `.status`
  - `.status[data-variant]`
  - `.status--outline`
  - `.status--dot`
  - `.progress`
  - `.progress__bar`
  - `.progress--striped`
  - `.progress--striped__relaxed`
  - `.progress--animated`
- Guidance, info, result:
  - `.guidance`
  - `.guidance--compact`
  - `.guidance__header`
  - `.guidance__icon`
  - `.guidance__title`
  - `.guidance__body`
  - `.guidance__list`
  - `.guidance[data-variant]`
  - `.guidance--do`
  - `.guidance--dont`
  - `.guidance--how`
  - `.info-block`
  - `.info-block[data-variant]`
  - `.result`
  - `.result__icon`
  - `.result__title`
  - `.result__subtitle`
  - `.result__actions`
  - `.result[data-variant]`
- Density hooks:
  - `[data-density="compact"]` applied to alerts, toasts, banners, results, guidance, info blocks, status, progress, and form feedback.

Source interpretation:

- Feedback CSS provides visual and state surfaces, not runtime behavior.
- CSS owns semantic variant color aliases, alert/banner/toast/status/progress/result/info/guidance surfaces, close-control focus styles, sticky/toast stack positioning, animation styling, density adjustments, and responsive tightening.
- Consumer/application code owns alert/status semantics, `aria-live`, dismiss actions, toast lifecycle, progress values, form validation state, notification timing, and keyboard behavior.
- Feedback selectors, local variables, broad `data-variant` hooks, animation hooks, density hooks, z-index usage, and docs examples are compatibility-sensitive.

## 6. Local Token Surface

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

## 7. Selector/API Evidence

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

## 8. Docs and Generated Index Evidence

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

## 9. Accessibility and Behavior Boundaries

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

## 10. Risks and Future Routing

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

## 11. Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-feedback-system-audit.md` becomes the decision source for later feedback CSS fixes, docs rewrite, accessibility/live-region guidance, selector classification, animation/motion cleanup, theme/contrast checks, migration notes, and release verification.

## 12. Validation Plan

Run after documentation updates:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
  - If this fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Read-only feedback audit scan.
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

- Added `@24vlh/vds/docs/planning/features/VDS-2130-feedback-system-audit.md`.
- Added `@24vlh/vds/docs/planning/components/vds-feedback-system-audit.md`.
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
  - Per `VDS-2130` scope, `pnpm run consumer:scan` was not run.
- Read-only feedback audit scan:
  - Recorded `733` source CSS lines, `89` selector blocks, `104` selectors, `312` declarations, `41` custom property declaration lines, `11` unique local token names, `227` `var(...)` references, `3` hover matches, `3` `:focus-visible` matches, `0` active matches, `10` close-related matches, `3` sticky-related matches, `0` loading matches, `1` transition, `2` transforms, `5` animations, `4` keyframes, `0` reduced-motion blocks, `0` forced-colors blocks, `1` media block, `12` flex display declarations, `1` grid display declaration, `1` inline-flex declaration, `12` gap declarations, `14` padding-related declarations, `9` position declarations, `2` z-index declarations, `2` overflow declarations, `1` box-shadow declaration, `3` outline declarations, `32` `!important` declarations, `3` `rgba(...)` references, `57` feedback-source classes, `43` public classes, `14` candidate-public classes, `887` raw-doc lines, `14` generated docs blocks, `12` code examples, `70` generated class tokens, generated `source_css` coverage, index import presence, core import absence, and package-facing dist file presence.
- Markdown sanity checks:
  - Passed: `VDS-2130` appears as `done`, `VDS-0500` remains `in-progress`, the feedback artifact path resolves, plan/artifact scope agrees that no runtime/generated files changed, and the next recommended item is `VDS-2140 Flows component audit`.
- `git diff --check`
  - Passed for changed planning files.

Notes:

- The WSL wrapper command is not available in this shell, so validation commands were run directly from `@24vlh/vds`.
