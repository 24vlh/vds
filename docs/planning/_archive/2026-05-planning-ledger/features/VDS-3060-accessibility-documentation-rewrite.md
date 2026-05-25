# VDS-3060 Accessibility Documentation Rewrite

- Status: `done`
- Last updated: `2026-05-25`
- Master item: `VDS-3060`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-3060-accessibility-documentation-rewrite.md`

## 1. Goal

Create the shared accessibility documentation plan and responsibility matrix for the `VDS-0600 Documentation Rewrite` epic. Based on the selected scope, this item adds planning/reference guidance only: no raw docs, generated metadata, docs shell, runtime CSS, package metadata, or examples are changed.

The new artifact defines how later VDS docs must describe native semantics, ARIA, keyboard behavior, focus management, live regions, disabled/loading/error states, icon/media alternatives, and consumer-owned JavaScript responsibilities.

## 2. Scope

### In scope

- Add a shared accessibility documentation artifact for later raw-doc and component rewrite work.
- Define the accessibility documentation contract for VDS docs.
- Record WCAG 2.2 AA and APG reference posture.
- Define VDS CSS/docs responsibilities versus consumer application responsibilities.
- Add responsibility matrices for interactive widgets, forms and validation, feedback/status/loading, data/content, overlays/dialog-like surfaces, navigation/routing, and foundation utilities.
- Record current raw-doc, generated-example, and CSS accessibility evidence.
- Record that later component/raw-doc rewrites apply this guidance when raw-doc changes are explicitly approved.
- Update the master feature map so `VDS-0600` remains in progress, `VDS-3060` is done, and the next recommended item is `VDS-3070 Theming documentation rewrite`.

### Out of scope

- Editing raw docs under `@24vlh/vds/doc-raw`.
- Rewriting accessibility sections in runnable examples.
- Refreshing generated docs metadata under `@24vlh/agents/docs_vds`.
- Changing README content.
- Changing `@24vlh/vds/index.html`, docs shell navigation, browser loader scripts, local docs server scripts, or docs runtime behavior.
- Changing source CSS, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields.
- Adding enforceable docs lint rules. That remains `VDS-3130`.
- Running browser, assistive technology, keyboard, or visual accessibility validation. Those remain later quality/release work.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Planning sources:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
  - `@24vlh/vds/docs/planning/docs/vds-documentation-rewrite-strategy.md`
  - `@24vlh/vds/docs/planning/docs/vds-component-docs-template.md`
  - `@24vlh/vds/docs/planning/docs/vds-docs-example-quality-pass.md`
- Current docs and CSS evidence:
  - `@24vlh/vds/doc-raw/*.doc.html`
  - `@24vlh/agents/docs_vds/components/*.json`
  - `@24vlh/vds/src/**/*.css`

## 4. Current Accessibility Evidence

Raw-doc accessibility scan:

- Files: `37`.
- `role` matches: `350`.
- `aria-*` matches: `864`.
- `tabindex`: `34`.
- Buttons: `745`.
- Inputs: `152`.
- Selects: `6`.
- Textareas: `12`.
- Dialog-related matches: `65`.
- Tab-pattern matches: `215`.
- Live-region/status/alert matches: `58`.

Top raw-doc ARIA/role hotspots:

- `vds-inbox`.
- `vds-command`.
- `vds-tabs`.
- `vds-android-shell`.
- `vds-navigation`.
- `vds-toasts`.
- `vds-buttons`.
- `vds-tooltips-popovers`.
- `vds-overlays`.

Generated example scan:

- Component JSON files: `37`.
- HTML examples: `465`.
- `role` usages: `122`.
- `aria-*` usages: `201`.
- `tabindex`: `3`.
- Buttons: `256`.
- Inputs: `51`.
- Dialog-related matches: `18`.
- Tab-pattern matches: `105`.
- Live-region/status/alert matches: `15`.

CSS accessibility surface scan:

- CSS files: `43`.
- `:focus-visible`: `94`.
- `:focus`: `10`.
- `:focus-within`: `12`.
- Outline declarations: `108`.
- Disabled/`aria-disabled` matches: `216`.
- ARIA selector matches: `96`.
- Reduced-motion matches: `12`.
- Forced-colors matches: `2`.
- `sr-only`/visually-hidden matches: `4`.
- Transition/animation declarations: `119`.

These counts are documentation evidence only. They are not proof of accessibility conformance; behavioral validation remains later quality/release work.

## 5. Accessibility Documentation Contract

Future VDS docs must:

- Use WCAG 2.2 AA as the accessibility baseline.
- Use WAI-ARIA APG as the widget-pattern reference where relevant.
- Prefer native HTML semantics before ARIA.
- Separate VDS CSS/docs responsibilities from consumer application responsibilities.
- State when CSS-only surfaces require consumer-owned JavaScript.
- Name keyboard, focus, state synchronization, live-region, routing, validation, and lifecycle responsibilities for interactive examples.
- Include accessibility notes for names/labels, descriptions, focus visibility, disabled/readonly/invalid/selected/expanded/current/busy states, reduced motion, forced colors, and non-color-only status meaning.
- Avoid promising behavior CSS cannot provide.

## 6. Responsibility Matrices

### Interactive widgets

Examples: accordion, command, tabs, tooltips/popovers, action bar, inbox controls, advanced control surfaces.

VDS docs must describe:

- Required native elements or ARIA roles.
- Required names, labels, relationships, and state attributes.
- Focus-visible expectations.
- Consumer-owned keyboard behavior, active index, open/close state, selection state, and announcements.

Consumer applications own:

- Roving focus, Arrow/Home/End/Enter/Space/Escape behavior where applicable.
- State synchronization for `aria-expanded`, `aria-selected`, `aria-controls`, `aria-current`, and similar attributes.
- Focus movement and restoration.
- Runtime filtering, routing, selection, and action execution.

### Forms and validation

Examples: forms, advanced forms, file inputs, choice controls, validation messages.

VDS docs must describe:

- Native labels first.
- Help/error relationship guidance.
- Disabled, readonly, invalid, loading, and required state documentation.
- Accessible file/choice/date/stepper guidance at the docs level.

Consumer applications own:

- Form validation logic.
- `aria-describedby`, `aria-invalid`, and error announcement synchronization.
- Submission, loading, disabled, readonly, and file behavior.
- Keyboard behavior for custom controls.

### Feedback, status, and loading

Examples: feedback, toasts, progress, skeleton, state, guidance.

VDS docs must describe:

- Status versus alert versus presentational guidance.
- Live-region options and limitations.
- Loading/busy state wording.
- Progressbar labels and values.
- Non-color-only semantic meaning.
- Reduced-motion expectations where animations exist.

Consumer applications own:

- `role="status"`, `role="alert"`, `aria-live`, `aria-busy`, and progress value synchronization.
- Queueing, timers, dismiss behavior, async lifecycle, and announcements.
- Choosing whether updates should interrupt users.

### Data and content

Examples: tables, charts, description lists, typography, content blocks.

VDS docs must describe:

- Native table, list, heading, figure, image, and description-list semantics.
- Chart alternative text or data-table expectations.
- Caption, heading, and landmark guidance.
- When an interactive control inside content needs its own accessibility contract.

Consumer applications own:

- Data accuracy.
- Sorting, selection, expansion, pagination, and virtualization semantics.
- Chart descriptions and fallback data access.
- Heading order and page-level landmarks.

### Overlays and dialog-like surfaces

Examples: overlays, command modal surfaces, drawers, popovers when dialog-like.

VDS docs must describe:

- Dialog/modal roles and labeling requirements.
- Close button naming.
- Backdrop, inert-background, scroll-lock, and nested-surface caveats.
- CSS-only boundaries.

Consumer applications own:

- Open/close lifecycle.
- Focus trap, initial focus, focus return, Escape/outside-click behavior.
- `aria-modal`, `aria-labelledby`, `aria-describedby`, portal order, scroll lock, and announcements.

### Navigation and routing

Examples: navigation, header/footer, breadcrumbs, pagination, tabs when used for routing, inbox tabs/filters.

VDS docs must describe:

- Navigation landmarks and link/button distinctions.
- `aria-current`, disabled state, active route, and selected state guidance.
- Mobile nav toggle expectations.

Consumer applications own:

- Route state.
- `aria-current`, `aria-expanded`, `aria-controls`, and `aria-selected` synchronization.
- Focus management after route changes.
- Keyboard behavior for composite navigation patterns.

### Foundation utilities

Examples: focus styles, visually-hidden utilities, icons, themes, typography.

VDS docs must describe:

- Focus-visible availability.
- Visually-hidden helper usage.
- Icon-only and decorative icon naming rules.
- Text alternatives for identity/media.
- Reduced-motion and forced-colors caveats.

Consumer applications own:

- Meaningful accessible names.
- Decorative versus informative icon/media decisions.
- Page context, heading structure, and contrast validation in product context.

## 7. Shared-Guidance Decision

VDS-3060 records accessibility guidance only:

- No raw-doc edits happen in this item.
- No generated docs metadata refresh happens in this item.
- No docs shell, loader, or local docs runtime behavior changes happen in this item.
- No runtime CSS changes happen in this item.
- Later approved raw-doc/component rewrite items apply these rules when raw-doc changes are explicitly in scope.
- `VDS-3130` may later convert stable parts of this guidance into enforceable docs lint checks.

## 8. Public Interfaces and Compatibility Impact

- Planning interface added: `@24vlh/vds/docs/planning/docs/vds-accessibility-documentation-rewrite.md`.
- Runtime CSS APIs: unchanged.
- Runtime behavior: unchanged.
- README: unchanged.
- Raw docs: unchanged.
- Docs shell and loader scripts: unchanged.
- Generated docs metadata: unchanged.
- Generated `dist`: unchanged.
- Package metadata, workflows, npm tags, and version fields: unchanged.
- Selector inventory and consumer reports: unchanged.

## 9. Validation Plan

Approved validation for this shared-guidance item:

- Run `pnpm run audit:tokens`.
- Run `pnpm run audit`.
- Run `pnpm run audit:dist`; if the generated-artifact checker hangs again, stop it after a reasonable wait and record that limitation without regeneration.
- Run `pnpm run audit:consumers`; if it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Run/read a read-only accessibility docs scan recording raw-doc role/ARIA/control counts, generated-example role/ARIA counts, CSS focus/state/motion/forced-colors counts, and hotspot files.
- Run markdown sanity checks:
  - `VDS-3060` appears as `done`.
  - `VDS-0600` remains `in-progress`.
  - Accessibility artifact path resolves.
  - Plan and artifact agree that no raw docs, generated docs metadata, docs shell, README, generated output, package metadata, selector inventory, consumer report, runtime CSS, or runtime behavior changed.
  - Next item is `VDS-3070 Theming documentation rewrite`.
- Run `git diff --check` for changed planning files.

Forbidden validation:

- Do not run `pnpm run build`.
- Do not run `pnpm run build:prod`.
- Do not run `pnpm run docs:vds:index`.
- Do not run `pnpm run inventory:selectors`.
- Do not run `pnpm run consumer:scan`.
- Do not run any write/regeneration command.

## 10. Risks

- Shared guidance can be skipped by later component rewrites unless referenced from their plans and validation checklists.
- Current evidence includes many ARIA patterns, but this item does not validate behavior in a browser or assistive technology.
- Accessibility and theming overlap; `VDS-3070` must carry contrast, forced-colors, and custom-theme details forward.
- Future linting must allow intentional docs/demo exceptions while catching true accessibility omissions.

## 11. Assumptions

- Approval of `VDS-3060` approves shared planning/reference documentation only.
- `doc-raw/*.doc.html` remains canonical handwritten runnable docs source per `VDS-3040`.
- Generated docs metadata remains evidence only and is not refreshed in this item.
- Actual raw-doc accessibility rewrites happen later through component rewrite work or explicitly approved raw-doc items.
- `VDS-3070` owns theming, contrast, forced-colors, and custom-theme documentation beyond shared accessibility references.
- `VDS-3110` owns docs shell/navigation behavior, title handling, and loader UX.
- `VDS-3130` owns future enforceable docs lint rules for accessibility sections, snippets, dependencies, and heading structure.

## 12. Implementation Log

- `2026-05-25`: Added this VDS-3060 feature plan and the shared accessibility documentation artifact. Updated the master feature map to mark `VDS-3060` done, keep `VDS-0600` in progress, and point the next recommended item at `VDS-3070 Theming documentation rewrite`.
- `2026-05-25`: Read-only accessibility docs scan confirmed raw docs at `37` files, `350` `role` matches, `864` `aria-*` matches, `34` `tabindex`, `745` buttons, `152` inputs, `6` selects, `12` textareas, `65` dialog-related matches, `215` tab-pattern matches, and `58` live-region/status/alert matches; generated examples at `37` component JSON files, `465` examples, `122` `role` usages, `201` `aria-*` usages, `3` `tabindex`, `256` buttons, `51` inputs, `18` dialog-related matches, `105` tab-pattern matches, and `15` live-region/status/alert matches; CSS surface at `43` files, `94` `:focus-visible`, `10` `:focus`, `12` `:focus-within`, `108` outline declarations, `216` disabled/`aria-disabled` matches, `96` ARIA selector matches, `12` reduced-motion matches, `2` forced-colors matches, `4` `sr-only`/visually-hidden matches, and `119` transition/animation declarations.
- `2026-05-25`: `pnpm run audit:tokens` passed.
- `2026-05-25`: `pnpm run audit` passed, including CSS parse, class, token, docs dependency, and selector inventory freshness checks.
- `2026-05-25`: `timeout 120s pnpm run audit:dist` exited with code `124` while running `node static/js/check-generated-artifacts.js --check`; no generated artifact refresh was run.
- `2026-05-25`: `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale; `pnpm run consumer:scan` was not run because it is a write/regeneration command.
- `2026-05-25`: Markdown sanity checks passed for `VDS-3060` done status, `VDS-0600` in-progress status, accessibility artifact path, next recommended item, and no raw-doc/generated-docs-metadata/docs-shell/README/generated-output/package-metadata/selector-inventory/consumer-report/runtime-CSS/runtime-behavior agreement.
- `2026-05-25`: `git diff --check` reported no whitespace errors for changed planning files; `git diff --no-index --check` reported no whitespace errors for the VDS-3060 planning files in the untracked planning tree.
