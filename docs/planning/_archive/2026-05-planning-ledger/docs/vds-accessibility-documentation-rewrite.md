# VDS Accessibility Documentation Rewrite

Last updated: `2026-05-25`

Source item: `VDS-3060`

Next recommended item: `VDS-3070 Theming documentation rewrite`

This file records the shared accessibility documentation guidance and responsibility matrix for the VDS documentation rewrite epic. It is a planning/reference artifact only: no README, raw docs, docs shell, loader scripts, generated docs metadata, generated output, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, version fields, runtime CSS, or runtime behavior changes here.

## Decision

VDS-3060 is shared accessibility guidance only.

No runnable raw-doc examples or component docs are rewritten in this item. Later component/raw-doc rewrite work must apply this guidance when raw-doc changes are explicitly approved.

## Accessibility Baseline

- Required standard: WCAG 2.2 AA.
- Widget-pattern reference: WAI-ARIA APG where a component is implemented as an APG-style widget.
- Preferred implementation order: native HTML semantics first, ARIA only where required.
- Documentation posture: separate CSS-provided visuals from application-owned behavior.
- Release posture: evidence in docs and CSS is not proof of conformance; behavioral validation remains later quality/release work.

## Documentation Contract

Future VDS docs must:

- State required native semantics before ARIA roles.
- State accessible name and description requirements.
- State focus-visible expectations.
- State disabled, readonly, invalid, selected, expanded, current, pressed, busy, and loading responsibilities where relevant.
- State live-region, alert/status, and announcement expectations where relevant.
- State keyboard expectations for interactive patterns.
- State consumer-owned JavaScript responsibilities for CSS-only surfaces.
- State non-color-only requirements for semantic/status meaning.
- State reduced-motion and forced-colors caveats, with detailed theme/contrast policy deferred to `VDS-3070`.
- Avoid promising behavior CSS cannot provide.

## Responsibility Matrix

| Family | VDS docs must explain | Consumer/application owns |
| --- | --- | --- |
| Interactive widgets | roles, names, relationships, state attributes, focus-visible expectations, APG references | keyboard behavior, active index, state sync, focus movement, selection, routing, announcements |
| Forms and validation | native labels, help/error relationships, disabled/readonly/invalid/loading/required guidance | validation logic, `aria-describedby`, `aria-invalid`, error announcements, submission, file handling |
| Feedback/status/loading | status/alert/live-region options, busy/loading wording, progress labels/values, non-color-only meaning | live-region placement, `aria-live`, `aria-busy`, progress values, async lifecycle, queueing, timers, dismiss behavior |
| Data and content | native table/list/heading/figure/description-list semantics, chart alternatives, captions | data accuracy, sorting/selection/expansion semantics, pagination, virtualization, chart descriptions |
| Overlays/dialog-like surfaces | dialog roles, labels, close names, inert/backdrop/scroll-lock caveats | open/close lifecycle, focus trap, initial focus, focus return, Escape/outside-click, portals, announcements |
| Navigation and routing | landmarks, link/button distinction, active/current/disabled/selected guidance | route state, `aria-current`, `aria-expanded`, `aria-controls`, `aria-selected`, focus after navigation |
| Foundation utilities | focus-visible, visually-hidden helpers, icon naming, decorative media, reduced-motion and forced-colors caveats | accessible names, decorative/informative decisions, page structure, contrast in context |

## Component Documentation Rules

For each component rewrite:

- Identify whether the component is presentational, semantic, interactive, or mixed.
- Prefer native elements when they satisfy the pattern.
- List required ARIA only when native semantics are insufficient.
- Identify CSS state hooks separately from runtime state ownership.
- List keyboard behavior only as consumer-owned unless a documented runtime layer provides it.
- Include labels, descriptions, and state synchronization guidance for examples.
- Explain icon-only controls, media alternatives, and decorative treatment.
- Explain live-region and announcement expectations for async/status examples.
- Include reduced-motion and forced-colors notes when the source/audit evidence raises those risks.

## Current Evidence

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

This evidence shows broad accessibility-related markup and CSS coverage, but it does not validate keyboard behavior, focus management, screen reader announcements, or real product context.

## Non-Goals

This plan does not:

- Rewrite raw docs.
- Refresh generated docs metadata.
- Change docs shell navigation or loader behavior.
- Change README.
- Change source CSS, generated output, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields.
- Add docs lint rules.
- Run browser, keyboard, screen reader, contrast, or forced-colors validation.

## Handoff

`VDS-3060` hands off to:

- `VDS-3070 Theming documentation rewrite`: expand contrast, forced-colors, semantic token, custom-theme, and theme-specific accessibility notes.
- Component/raw-doc rewrite work: apply this accessibility guidance when raw-doc edits are explicitly approved.
- `VDS-3110 Docs search and navigation review`: handle docs-shell title, loader, navigation, and runtime UX accessibility.
- `VDS-3130 Documentation lint rules`: convert stable accessibility requirements into enforceable docs checks.
