# VDS-2240 Overlays Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2240`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2240-overlays-component-audit.md`

## 1. Goal

Create the overlays component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only overlay contract: backdrops, centered modals, mobile fullscreen/sheet variants, drawers, inline overlays, loading overlays, semantic modal states, body scroll-lock hooks, stacking levels, docs/index metadata, package-facing dist presence, and accessibility/theming/motion risks before any overlay CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/overlays.css` selector, local variable, backdrop, modal, drawer, inline overlay, loading, stacking, responsive, scroll-lock, motion, theme, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the overlays class surface.
- Record raw docs and generated docs-index metadata for `vds-overlays`.
- Record package-facing `dist/components/overlays.css` and `.min.css` presence.
- Add an overlays component audit artifact for later overlay CSS fixes, docs rewrite, selector classification, APG dialog guidance, focus/inert/scroll-lock policy, z-index review, responsive QA, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2240` is done, and the next recommended item is `VDS-2250 Progress component audit`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding modal lifecycle code, focus traps, inert background behavior, Escape/outside-click dismissal, body scroll-lock implementation, portal management, routing, dialog semantics, accessibility smoke tests, responsive screenshots, visual checks, selector reclassification, docs rewrites, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-overlays.json`
- Repo files:
  - `@24vlh/vds/src/components/overlays.css`
  - `@24vlh/vds/doc-raw/vds-overlays.doc.html`
  - `@24vlh/vds/dist/components/overlays.css`
  - `@24vlh/vds/dist/components/overlays.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/overlays.css` has `570` lines.
- Selector blocks: `79`.
- Expanded selectors: `86`.
- Declarations: `230`.
- Local custom property declaration lines: `10`.
- Unique local custom property names: `10`.
- `var(...)` references: `116`.
- `!important` declarations: `0`.
- Hard-coded hex/rgb color references: `0`.
- `color-mix(...)` uses: `0`.

State and motion evidence:

- `:hover` selector matches: `0`.
- `:focus-visible` selector matches: `0`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled selector matches: `0`.
- Active class matches: `3`.
- Hidden class matches: `4`.
- Loading class matches: `4`.
- Blocking class matches: `2`.
- Level helper matches: `4`.
- Transition declarations: `3`, all set to `none`.
- Transform declarations: `1`, set to `none`.
- Animation declarations: `0`.
- `@keyframes`: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Responsive and layout evidence:

- Media blocks: `2`, both at `max-width: 768px`.
- Flex display declarations: `8`.
- Inline-flex display declarations: `2`.
- Grid display declarations: `3`.
- Gap declarations: `3`.
- Overflow declarations: `5`.
- Position declarations: `7`.
- Z-index declarations: `9`.
- Pointer-events declarations: `5`.
- Backdrop-filter declarations: `2`, both `none`.
- Container queries: `0`.

Package-facing output evidence:

- `@24vlh/vds/dist/components/overlays.css` exists.
- `@24vlh/vds/dist/components/overlays.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/overlays.css`.
- `@24vlh/vds/src/core.css` does not import overlays.

## 5. Component Contract

Current overlay source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root scope | `[data-vds-overlay]`, `.vds-overlay` | local modal/drawer variable scope |
| Backdrop | `.backdrop`, backdrop density, blocking, active, and level modifiers | fixed scrim layer and pointer-event gate |
| Base modal | `.modal`, `.modal--active`, `.modal__inner`, `.modal__header`, `.modal__body`, `.modal__footer`, `.modal__close` | centered dialog shell and content layout |
| Modal density and sizes | `.modal--a`, `.modal--b`, `.modal--c`, `.modal--xs` through `.modal--full` | spacing and size variants |
| Use-case variants | `.modal--workspace`, `.modal--confirm`, `.modal--blocking`, `.modal__body--form`, `.modal__section`, `.modal__divider`, footer split/stack, icon variants | workflow, confirmation, form, and semantic chrome hooks |
| Mobile variants | `.modal--fullscreen-mobile`, `.modal--sheet`, `body.modal-open` | mobile fullscreen, bottom sheet, and scroll-lock hooks |
| Semantic states | `.modal--success`, `.modal--danger`, `.modal--info`, `.modal--warning` | semantic header color variants |
| Loading | `.modal--loading`, `.modal__loader`, `.modal__loader-icon` | blocking inline loading overlay |
| Drawers | `.drawer`, `.drawer--left`, `.drawer--right`, `.drawer--hidden`, `.drawer__header`, `.drawer__body`, `.drawer__footer` | side panel shell and visibility hooks |
| Inline overlays | `.overlay-inline-container`, `.overlay-inline`, `.overlay-inline--active`, semantic inline variants | in-flow overlay panel surface |
| Split/chrome | `.modal--split`, `.modal__side`, `.modal--no-header`, `.modal--no-footer` | split layout and optional chrome removal |
| Stacking | `.modal--level-2`, `.modal--level-3`, `.backdrop--level-2`, `.backdrop--level-3` | nested overlay z-index levels |

Source interpretation:

- `@24vlh/vds/src/components/overlays.css` is the source truth for current overlays CSS behavior.
- Overlays CSS owns visual/layout/state hooks for backdrop, modal, drawer, inline overlay, loading, mobile sheet/fullscreen, body scroll-lock, and stacking behavior.
- CSS does not own modal lifecycle, focus trap, focus return, inert background behavior, Escape/outside-click dismissal, body scroll-lock logic, portal/mount order, route behavior, dialog semantics, or announcements.
- Existing overlay selectors, local variables, modal/drawer/backdrop/inline hooks, scroll-lock hook, stacking levels, responsive sheet/fullscreen behavior, docs examples, and package-facing outputs are compatibility-sensitive.

## 6. Token and Local Variable Surface

Local custom properties:

- `--modal-width-xs`
- `--modal-width-sm`
- `--modal-width-md`
- `--modal-width-lg`
- `--modal-width-xl`
- `--modal-loader-size-lg`
- `--drawer-width`
- `--modal-width-workspace`
- `--modal-workspace-min-height`
- `--modal-workspace-max-height`

Audit conclusions:

- Overlays rely on broader VDS spacing, radius, border, surface, semantic, shadow, overlay backdrop, and z-index tokens.
- Local variables mainly define modal/drawer sizing and workspace bounds.
- Stacking uses token fallback z-index values and calculated level offsets.
- No local variable, token reference, state hook, stacking level, scroll-lock hook, or responsive rule is approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

Selector inventory totals:

- Overlay-source classes: `70`.
- Public classes: `62`.
- Candidate-public classes: `8`.

Candidate-public classes:

- `.backdrop--level-3`
- `.modal--level-3`
- `.modal__footer--stack`
- `.modal__icon--danger`
- `.modal__icon--success`
- `.modal__icon--warning`
- `.overlay-inline--active`
- `.vds-overlay`

Audit conclusions:

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- `.modal--level-3` and `.backdrop--level-3` are compatibility-sensitive because they encode nested overlay stacking.
- `.overlay-inline--active`, `.modal--active`, `.drawer--hidden`, and `body.modal-open` are runtime state hooks even though this item does not add behavior.
- Future selector pruning or reclassification requires migration approval.

## 8. Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-overlays.doc.html` has `2459` lines.
- Docs cover overlay overview, load order/dependencies, JavaScript contract, accessibility, interactive demos, backdrops, modal anatomy, density, sizes, mobile fullscreen/sheets, semantic states, loading overlays, nested confirmations, blocking confirms, split modals, drawers, inline overlays, stacking, reduced-motion guidance, full class index, and usage rules.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-overlays.json`
- Blocks: `1`.
- Code examples: `1`.
- Generated class tokens: `5`.
- Generated `source_css`: `[]`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `overlay` | `159` |
| `modal` | `618` |
| `backdrop` | `124` |
| `drawer` | `112` |
| `sheet` | `27` |
| `dialog` | `21` |
| `focus` | `9` |
| `keyboard` | `3` |
| `Escape` | `2` |
| `aria` | `43` |
| `aria-modal` | `12` |
| `aria-labelledby` | `11` |
| `z-index` | `13` |
| `responsive` | `3` |
| `mobile` | `24` |
| `reduced-motion` | `3` |
| `forced-colors` | `0` |

Docs coverage and gaps:

- Raw docs cover modal/backdrop/drawer/inline overlay classes, `role="dialog"`, `aria-modal`, `aria-labelledby`, close buttons, focus management, Escape guidance, scroll lock expectations, mobile sheets, nested confirmations, blocking confirms, stacking, and reduced-motion guidance.
- Generated metadata is sparse: only `1` block, `1` code example, `5` class tokens, and `source_css: []`.
- Source has no active motion despite docs discussing drawer transitions and reduced-motion.
- Source and docs do not cover forced-colors.

## 9. Accessibility, Runtime, and Behavior Boundaries

Consumer/application code owns:

- Open/close lifecycle and state synchronization.
- Focus trap, focus return, and initial focus placement.
- Inert background behavior and background scroll blocking.
- Escape and outside-click dismissal.
- Body scroll-lock behavior for `body.modal-open`.
- Portal/mount order and nested overlay policy.
- Dialog roles, `aria-modal`, `aria-labelledby`, `aria-describedby`, close labels, loading announcements, and destructive confirmation semantics.

APG/WCAG interpretation:

- APG modal dialog guidance applies when consumers use modal dialog semantics.
- CSS state classes are visual hooks only; they do not satisfy dialog keyboard behavior or screen reader behavior.
- Blocking confirms and loading overlays require runtime behavior and announcement policy outside CSS.

Audit conclusions:

- Overlay CSS is compatibility-sensitive because it exposes runtime state hooks used by JavaScript and docs examples.
- Source CSS wins where docs describe transitions or reduced-motion behavior that is not present in CSS.
- Actual accessibility behavior remains a later implementation/docs task.

## 10. Responsive, Motion, and Forced-Colors Evidence

Responsive source behavior:

- Mobile fullscreen and sheet variants activate at `max-width: 768px`.
- `body.modal-open` is only defined inside the mobile media block and sets `overflow: hidden`.
- Split modals collapse from grid to column at `max-width: 768px`.

Motion source behavior:

- Source comments state no animations by default.
- Modal and drawer transition declarations are `none`.
- Modal transform is `none`.
- No animations or keyframes.
- No reduced-motion media block.

Forced-colors evidence:

- Source has `0` forced-colors blocks.
- Raw docs mention forced-colors `0` times.

Audit conclusions:

- Responsive sheet/fullscreen and split behavior is source truth and should not be inverted or renamed without migration approval.
- Docs/source motion mismatch is an audit finding only.
- Forced-colors review remains future work.

## 11. Risks and Future Routing

- Overlays are a high-risk runtime boundary: CSS exposes modal, drawer, backdrop, scroll-lock, and stacking hooks but does not implement behavior.
- Generated docs metadata currently omits `overlays.css` and most class tokens; this is a docs-index metadata gap, not a manual generated-index fix.
- `body.modal-open` is a global hook and should be reviewed before any scroll-lock cleanup.
- Nested stacking levels and z-index fallback values require overlay-stack review before cleanup.
- Raw docs discuss reduced-motion while source has no active motion; later docs/CSS work must reconcile wording with source truth.
- Forced-colors handling is absent and should be routed to a later visual/accessibility item.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Overlay CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Selector classification: later approved selector inventory/docs item.
- Focus/inert/scroll-lock behavior policy: later approved accessibility/docs/runtime guidance item.
- Z-index and nested overlay policy: later approved overlay/cascade item.
- Theme/contrast, reduced-motion, and forced-colors checks: later approved visual integrity item.

## 12. Public Interfaces

- No runtime CSS APIs change.
- No CSS, raw docs, generated docs index, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-overlays-component-audit.md` becomes the decision source for later overlay CSS fixes, docs rewrite, selector classification, APG dialog guidance, focus/inert/scroll-lock policy, z-index review, responsive QA, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.

## 13. Validation Plan

Approved validation commands:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
- Read-only overlays audit scan.
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
- Read-only overlays audit scan confirmed CSS counts, local variables, selector inventory totals, docs/index evidence, import/package evidence, backdrop/modal/drawer/inline/loading/stacking/mobile evidence, scroll-lock hooks, z-index, motion/reduced-motion/forced-colors gaps, generated metadata gap, and dist presence.
- Markdown sanity checks passed for master-map status, `VDS-0500` in-progress status, artifact path, no runtime/source/generated/inventory/consumer-report changes, and next recommended item.
- `git diff --check` for changed planning files passed.
