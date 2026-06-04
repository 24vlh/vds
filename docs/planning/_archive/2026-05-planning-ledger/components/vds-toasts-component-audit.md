# VDS Toasts Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-2300`

Next recommended item: `VDS-2310 Tooltips and popovers component audit`

This file records the toasts component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/toasts.css` is the source truth for current toast CSS behavior.
- `@24vlh/vds/doc-raw/vds-toasts.doc.html` and `@24vlh/agents/docs_vds/components/vds-toasts.json` are docs/index evidence.
- Current toasts CSS provides visual/layout/state/motion hooks for floating stacks, inline toasts, semantic variants, lifecycle classes, close/action slots, progress timers, compact/no-icon/no-close/no-progress layouts, mobile stack reflow, and reduced-motion behavior.
- Consumer/application code owns notification lifecycle, queueing, auto-dismiss timers, live-region announcements, focus management, Escape handling, pause-on-hover, action behavior, routing, and runtime announcements.
- Existing toast selectors, local variables, semantic variants, lifecycle classes, stack placement modifiers, optional slot modifiers, progress behavior, reduced-motion behavior, docs examples, and package-facing outputs are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, selector inventory update, or generated output refresh happens in `VDS-2300`.

## Source CSS Evidence

`@24vlh/vds/src/components/toasts.css` currently has:

- Lines: `473`.
- Selector blocks: `61`.
- Expanded selectors: `76`.
- Declarations: `200`.
- Local custom property declaration lines: `28`.
- Unique local custom property names: `12`.
- `var(...)` references: `92`.
- `!important` declarations: `0`.
- Hard-coded hex/rgb color references: `0`.
- `color-mix(...)` uses: `1`.

State and motion evidence:

- `:hover` selector matches: `1`.
- `:focus-visible` selector matches: `1`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled selector matches: `0`.
- Shown/open/active selector matches: `2`.
- Dismiss/close selector matches: `20`.
- Progress selector matches: `27`.
- Transition declarations: `1`.
- Transform declarations: `14`.
- Animation declarations: `7`.
- `@keyframes`: `3`, named `toast-slide-in`, `toast-slide-out`, and `toast-progress`.
- Reduced-motion matches: `2`.
- Forced-colors blocks: `0`.

Responsive and layout evidence:

- Media blocks: `2`, at `max-width: 640px` and `prefers-reduced-motion: reduce`.
- Flex display declarations: `4`.
- Inline-flex display declarations: `1`.
- Grid display declarations: `1`.
- Gap declarations: `3`.
- Overflow declarations: `1`.
- Position declarations: `5`.
- Z-index declarations: `1`.
- Width declarations: `4`.
- Max-width declarations: `2`.
- Height declarations: `2`.
- Pointer-events declarations: `2`.
- Safe-area inset references: `0`.

Package-facing output:

- `@24vlh/vds/dist/components/toasts.css` exists.
- `@24vlh/vds/dist/components/toasts.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/toasts.css`.
- `@24vlh/vds/src/core.css` does not import toasts.

## Component Contract

Current toast source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root scope | `[data-vds-toast]`, `.vds-toast` | local toast variable scope |
| Stack containers | `.toast-stack`, stack placement modifiers | fixed-position floating toast stacks and placement |
| Base toast | `.toast` | grid-based toast shell with icon/body/close/progress areas |
| Anatomy slots | `.toast__icon`, `.toast__body`, `.toast__title`, `.toast__message`, `.toast__close`, `.toast__progress`, `.toast__actions` | content, controls, progress, and action composition |
| Lifecycle classes | `.toast--in`, `.toast--out`, `.toast--exiting` | enter/exit animation hooks |
| Optional slots | `.toast--compact`, `.toast--no-icon`, `.toast--no-close`, `.toast--no-progress` | compact and slot-removal layout variants |
| Inline variant | `.toast--inline` | non-floating in-flow toast surface |
| Semantic variants | `.toast--neutral`, `.toast--info`, `.toast--success`, `.toast--warning`, `.toast--danger`, `.toast--error` | semantic surface, text, and accent mappings |
| Motion fallback | `@media (prefers-reduced-motion: reduce)` | animation removal and progress duration handling |

Source interpretation:

- Toast CSS owns visual/layout/state/motion hooks for stacks, anatomy, semantic variants, lifecycle classes, optional slot layouts, progress visuals, inline usage, mobile reflow, and reduced-motion fallback.
- CSS does not own notification lifecycle, queueing, auto-dismiss timers, live-region announcements, focus management, Escape handling, pause-on-hover, action behavior, or routing.
- Runtime and composition hooks such as `.toast--in`, `.toast--out`, `.toast--exiting`, `.toast--no-close`, `.toast--no-progress`, `.toast__actions`, `.toast__progress`, `.toast-stack--*`, and semantic variants must remain compatibility-sensitive until later approved migration work.

Source/docs boundary:

- Source exposes `--toast-duration` and animates `.toast__progress::before`; runtime code must decide whether and how to read that value for auto-dismiss timing.
- Source exposes `.toast--in`, `.toast--out`, and `.toast--exiting`; runtime code must own mount/unmount and queue lifecycle.
- Raw docs document `role`, `aria-live`, dismiss labels, and keyboard accessibility; CSS cannot provide those semantics.

## Token and Local Variable Surface

Local custom properties:

- `--toast-duration`
- `--toast-stack-width`
- `--toast-stack-gap`
- `--toast-feedback-padding-md`
- `--toast-padding`
- `--toast-padding-compact`
- `--toast-progress-track`
- `--toast-progress-fill`
- `--toast-bg`
- `--toast-border`
- `--toast-accent`
- `--toast-text`

Audit conclusions:

- Toasts rely on local variables for stack width/gap, padding, progress, duration, and semantic surface/text/accent values.
- Semantic variants rely on feedback/theme tokens and may inherit theme contrast risks from prior audits.
- No local variable, token reference, stack placement hook, lifecycle hook, semantic variant, optional slot modifier, or progress hook is approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- Toast-source classes: `30`.
- Public classes: `22`.
- Candidate-public classes: `8`.

Candidate-public classes:

- `.toast--exiting`
- `.toast--no-close`
- `.toast--out`
- `.toast-stack--bottom-center`
- `.toast-stack--bottom-left`
- `.toast-stack--top-center`
- `.toast-stack--top-left`
- `.vds-toast`

Audit conclusions:

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- Candidate-public toast selectors are source-defined and remain compatibility-sensitive.
- Stack placement classes beyond the documented default positions are source-defined and should not be pruned without migration approval.
- Future selector pruning, lifecycle API changes, or reclassification requires migration approval.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-toasts.doc.html` has `812` lines.
- Docs cover overview/dependencies, floating stacks, base toast anatomy, semantic variants, action toasts, inline versus floating toasts, auto-dismiss duration, motion/reduced-motion, accessibility rules, live regions, dismiss labels, keyboard-accessible dismissal, concise content, and batching guidance.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-toasts.json`
- Blocks: `9`.
- Code examples: `9`.
- Generated class tokens: `47`.
- Generated `source_css`: `base.css`, `doc-block.css`, `feedback.css`, `icons.css`, `layout.css`, `primitives.css`, `themes/slate.css`, `toasts.css`, and `utilities.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `toast` | `340` |
| `toasts` | `27` |
| `stack` | `30` |
| `placement` | `2` |
| `position` | `4` |
| `live` | `26` |
| `aria` | `61` |
| `aria-live` | `24` |
| `role` | `28` |
| `status` | `24` |
| `alert` | `8` |
| `severity` | `1` |
| `info` | `20` |
| `success` | `17` |
| `warning` | `13` |
| `danger` | `9` |
| `error` | `8` |
| `dismiss` | `40` |
| `close` | `28` |
| `timeout` | `0` |
| `duration` | `17` |
| `action` | `12` |
| `undo` | `0` |
| `progress` | `33` |
| `mobile` | `1` |
| `responsive` | `0` |
| `safe-area` | `0` |
| `focus` | `2` |
| `focus-visible` | `1` |
| `keyboard` | `4` |
| `escape` | `0` |
| `reduced-motion` | `4` |
| `forced-colors` | `0` |
| `contrast` | `0` |
| `animation` | `9` |
| `pause` | `0` |
| `hover` | `0` |

Docs coverage and gaps:

- Raw docs strongly cover live-region roles, semantic variants, dismiss labels, keyboard-accessible dismissal, duration, action toast policy, and reduced-motion behavior.
- Raw docs do not mention timeout by that exact term, Escape, pause-on-hover, safe-area, forced-colors, or contrast.
- Generated metadata includes `toasts.css`; no manual generated-index edit is approved in this item.

## Accessibility, Runtime, and Behavior Boundaries

Consumer/application code owns:

- Toast queueing, stacking order, mount/unmount lifecycle, and deduplication.
- Auto-dismiss timers, reading `--toast-duration` when needed, and duration policy.
- Pause-on-hover policy, if used.
- Dismiss action behavior, Escape behavior, action execution, routing, and focus management.
- Live-region placement, `role="status"` versus `role="alert"`, `aria-live` selection, and announcements.
- Preventing rapid toast floods and aggregating repeated events.
- Accessible names for dismiss/action buttons and meaningful icon treatment.

Accessibility interpretation:

- Toast CSS can provide visible states, focus-visible styling for the close button, and reduced-motion fallback, but cannot announce notifications.
- Critical error toasts require runtime selection of assertive live regions and appropriate persistence/dismiss policy.
- Action toasts should not auto-dismiss without a clear replacement policy; source only provides `.toast--no-progress` visuals.
- `.toast--no-close` is a visual/layout hook and does not remove the need for an accessible dismissal or resolution path.

Audit conclusions:

- Toast CSS is compatibility-sensitive because it exposes lifecycle, placement, semantic, progress, and slot hooks used by docs examples and consumers.
- Source CSS wins over docs where docs describe runtime behavior not implemented by CSS.
- Actual queueing, timers, live regions, focus, Escape, pause-on-hover, and action behavior remain later implementation/docs tasks.

## Responsive, Motion, and Forced-Colors Evidence

Responsive source behavior:

- One `max-width: 640px` media block sets stack inline insets and collapses top, bottom, and center placements into bottom full-width mobile placement.
- Source has no safe-area inset handling.
- Source has no container queries.

Motion source behavior:

- Source has enter, exit, and progress keyframes.
- `.toast--in`, `.toast--out`, and `.toast--exiting` apply lifecycle animations.
- `.toast__progress::before` animates from full width to empty over `--toast-duration`.
- One `prefers-reduced-motion: reduce` block removes toast animation, normalizes opacity/transform/transition, and changes progress animation duration to `var(--motion-none)`.

Forced-colors evidence:

- Source has `0` forced-colors blocks.
- Raw docs mention forced-colors `0` times.

Audit conclusions:

- Mobile stack reflow, lifecycle animation, progress timing, and reduced-motion fallback are source truth and should not be renamed or inverted without migration approval.
- Safe-area handling is absent and should be evaluated before mobile placement changes.
- Lack of forced-colors and contrast documentation is an audit finding only.

## Risks and Future Routing

- Toast behavior is runtime-heavy; CSS cannot provide queueing, live-region semantics, timers, pause policy, focus, Escape, or action execution.
- `--toast-duration` controls progress animation only unless runtime code explicitly reads and syncs it.
- `.toast--no-close` can create an accessibility/recovery risk if consumer code does not provide another dismiss or resolution path.
- Action toasts require persistence and explicit dismissal policy; CSS only provides `.toast__actions` and `.toast--no-progress`.
- Mobile stack placement lacks safe-area inset handling.
- Semantic variants inherit feedback/theme contrast risks from prior audits.
- Forced-colors coverage is absent.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Toast CSS fixes or selector cleanup: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Selector classification: later approved selector inventory/docs item.
- ARIA/live-region, queueing, lifecycle, timer, focus, Escape, and action behavior guidance: later approved accessibility/docs item.
- Theme/contrast, forced-colors, safe-area, and responsive screenshots: later approved visual integrity item.

## Public Interfaces

- No runtime CSS APIs change.
- No CSS, raw docs, generated docs index, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-toasts-component-audit.md` becomes the decision source for later toast CSS fixes, docs rewrite, selector classification, ARIA/live-region guidance, queue/lifecycle guidance, mobile safe-area review, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.

## Validation Plan

Approved validation commands:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
- Read-only toasts audit scan.
- Markdown sanity checks for master-map status, artifact path, no runtime/source/generated changes, and next recommended item.
- `git diff --check` for changed planning files.

Forbidden commands for this item:

- `pnpm run build`
- `pnpm run build:prod`
- `pnpm run docs:vds:index`
- `pnpm run inventory:selectors`
- `pnpm run consumer:scan`

## Post-Implementation Validation Log

- `pnpm run audit:tokens` passed: token usage audit passed for `43` files.
- `pnpm run audit` passed: CSS parse, class, token, doc dependency, and selector inventory freshness checks passed.
- `pnpm run audit:dist` was attempted with a `120s` timeout. It started `node static/js/check-generated-artifacts.js --check` but did not complete before timing out. No write/regeneration command was run.
- `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale; per plan, `pnpm run consumer:scan` was not run.
- Read-only toasts audit scan confirmed CSS counts, local variables, selector inventory totals, docs/index evidence, import/package evidence, stack/anatomy/semantic/lifecycle/action/progress/inline/mobile/reduced-motion evidence, ARIA/live-region/runtime boundaries, forced-colors/safe-area gaps, and dist presence.
- Markdown sanity checks passed for master-map status, `VDS-0500` in-progress status, artifact path, no runtime/source/generated/inventory/consumer-report changes, and next recommended item.
- `git diff --check` for changed planning files passed.
