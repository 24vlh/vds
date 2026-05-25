# VDS Accessibility Baseline

Last updated: `2026-05-23`

Source item: `VDS-0060`

This file is the accessibility baseline for the VDS `1.0.0` release line. It is a planning artifact only: no runtime CSS, package metadata, workflow, generated `dist`, or version field changes happen here.

## Required Standard

- Required target: WCAG 2.2 AA.
- Widget behavior reference: WAI-ARIA APG.
- VDS is CSS-first. This baseline separates VDS CSS/docs responsibilities from consumer application JavaScript responsibilities.

## VDS CSS and Documentation Responsibilities

- Provide visible focus states for interactive classes and documented examples.
- Preserve state styling for disabled, readonly, invalid, selected, expanded, pressed, current, active, loading, and busy states.
- Support reduced-motion expectations for transitions and animations.
- Support forced-colors and high-contrast expectations where component semantics require it.
- Provide accessible documentation examples with native controls first and ARIA only where required.
- Document required semantic markup, ARIA attributes, and state relationships for interactive examples.
- Keep `sr-only`/visually-hidden utilities available for accessible names and helper text patterns.

## Consumer Application Responsibilities

- Manage JavaScript-driven focus movement and restoration.
- Implement modal focus trapping and inert/background interaction rules.
- Keep ARIA states synchronized with application state.
- Announce live updates, route changes, async work, and data mutation results where needed.
- Provide keyboard behavior for widgets whose behavior cannot be implemented by CSS alone.
- Validate accessible names, labels, descriptions, and error messaging in real product context.

## Component Family Audit Expectations

| Family | Components | Required Accessibility Focus |
| --- | --- | --- |
| Interactive widgets | Accordion, command, overlays, tabs, tooltips/popovers, navigation, action bar, inbox | Keyboard behavior, focus order, focus visibility, ARIA state sync, APG alignment. |
| Forms and validation | Forms, forms-advanced, choices, upload, invalid/help states | Labels, descriptions, errors, disabled/readonly states, native control semantics. |
| Feedback and status | Feedback, toasts, progress, state, skeleton | Live-region expectations, busy/loading semantics, reduced motion, non-color-only status. |
| Data and content | Tables, charts, description lists, content blocks, guidance | Table semantics, chart alternatives, headings, landmarks, readable hierarchy. |
| Foundation | Base focus rules, utilities, typography, icons, themes | Focus tokens, `sr-only`, icon names, contrast, forced-colors, text sizing. |

## Current Evidence Snapshot

- CSS scan: `:focus-visible` `94` matches in `16` files; focus selectors `10` in `7`; `focus-within` `12` in `5`; outline declarations `188` in `22`; disabled selectors `123` in `14`; ARIA selectors `90` in `8`; reduced-motion `12` in `9`; forced-colors `2` in `2`; motion declarations `132` in `28`; `sr-only`/visually-hidden utility `4` in `2`.
- Raw docs scan: role attributes `270` in `16` files; ARIA attributes `748` in `26`; `tabindex` `34` in `3`; buttons `745` in `29`; inputs `170` in `10`; dialogs `53` in `4`; tabs `104` in `3`; menu/popup attributes `11` in `1`; tooltip references `15` in `2`.
- Interpretation: VDS already has a broad focus/state/motion/accessibility markup surface, but forced-colors and full APG behavior coverage need later component audits.

## Audit Rules for Later Work

- Every component audit must state CSS responsibility, semantic markup responsibility, ARIA responsibility, and consumer JavaScript responsibility.
- Prefer native HTML semantics before ARIA roles.
- Do not use ARIA to compensate for inaccessible markup when native controls are available.
- Any focus, keyboard, label, state, live-region, or contrast issue that affects public examples must be fixed, deferred with reason, or tracked as release-blocking before `1.0.0`.
- Theme and token audits must evaluate contrast and focus visibility against WCAG 2.2 AA.
- Responsive audits must verify focus visibility, hit targets, and interaction states at narrow widths.

## Reference Sources

- W3C WCAG 2 Overview: `https://www.w3.org/WAI/standards-guidelines/wcag/`
- W3C WCAG 2.2 Quick Reference: `https://www.w3.org/WAI/WCAG22/quickref/`
- WAI-ARIA APG: `https://www.w3.org/WAI/ARIA/apg/`
- WAI-ARIA APG Dialog Modal Pattern: `https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`
