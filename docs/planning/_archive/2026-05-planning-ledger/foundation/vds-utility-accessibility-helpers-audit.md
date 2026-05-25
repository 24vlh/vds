# VDS Utility Accessibility Helpers Audit

Last updated: `2026-05-24`

Source item: `VDS-1270`

This file records the utility accessibility helpers audit for the base, layout, utilities, and global CSS track. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/utilities.css` is the source truth for current utility accessibility helper behavior.
- Current helper selectors are compatibility-sensitive, including public and candidate-public utility classes.
- Utility helpers must not be renamed, removed, behavior-changed, reclassified, or deprecated without a later approved cleanup and migration item.
- CSS utilities do not replace semantic markup, ARIA, focus management, labels, descriptions, live regions, or keyboard behavior in consumer code.
- Missing file-local `:focus-visible`, reduced-motion, forced-colors, safe-area docs, skip helper, and generated `source_css` metadata are audit findings only in this item.
- Any future source CSS change that touches utility accessibility helpers while generated output is out of scope must record `dist refresh pending`.

## Source Declaration Evidence

`@24vlh/vds/src/components/utilities.css` currently has:

- Lines: `3312`.
- `!important` declarations: `413`.
- Overflow declarations: `11`.
- `-webkit-overflow-scrolling` declarations: `2`.
- `scroll-behavior` declarations: `1`.
- `pointer-events` declarations: `2`.
- Cursor declarations: `5`.
- Safe-area `env(...)` references: `4`.
- Legacy `clip: rect(...)` declarations: `1`.
- `clip-path` declarations: `0`.
- ARIA selectors: `0`.
- `:focus-visible` selectors: `0`.
- `prefers-reduced-motion` blocks: `0`.
- `forced-colors` blocks: `0`.

Focus and active evidence:

- `.sr-only-focusable:active`
- `.sr-only-focusable:focus`

These are the only focus/active selectors in `utilities.css`.

## Screen-Reader, Visibility, and Safe-Area Helpers

Current helpers:

| Class | Line | Classification | Documented | Notes |
| --- | ---: | --- | --- | --- |
| `.hidden` | `53` | `public` | yes | Fully hides content with `display: none !important`. |
| `.sr-only` | `57` | `public` | yes | Visually hides content while keeping it available to assistive technology. |
| `.sr-only-focusable` | `69` | `candidate-public` | no | Restores layout visibility on `:active` and `:focus`. |
| `.safe-area` | `80` | `candidate-public` | no | Applies safe-area inset padding with `env(...)` and `!important`. |

Audit conclusions:

- `.hidden` is not an accessibility substitute for visually hidden text.
- `.sr-only` is a required accessibility utility under the `VDS-0060` baseline.
- `.sr-only-focusable` is important for focusable hidden content patterns but is currently candidate-public.
- `.safe-area` is mobile/accessibility-adjacent and undocumented in raw utility docs.
- No skip-link helper class is currently present in `utilities.css`.

## Overflow and Scroll Helpers

Current helpers:

| Class | Line | Classification | Documented | Notes |
| --- | ---: | --- | --- | --- |
| `.overflow-hidden` | `2327` | `public` | yes | Hides overflow with `!important`. |
| `.overflow-auto` | `2331` | `candidate-public` | no | Enables automatic overflow with `!important`. |
| `.overflow-x-auto` | `2335` | `public` | yes | Enables horizontal overflow with `!important`. |
| `.overflow-y-auto` | `2339` | `public` | yes | Enables vertical overflow with `!important`. |
| `.scroll-x` | `2343` | `public` | yes | Enables horizontal scrolling and touch momentum scrolling. |
| `.scroll-y` | `2348` | `public` | yes | Enables vertical scrolling and touch momentum scrolling. |
| `.scroll-smooth` | `2353` | `candidate-public` | no | Enables smooth scrolling without file-local reduced-motion handling. |

Audit conclusions:

- Overflow/scroll helpers are accessibility-sensitive because they can affect keyboard reachability and focus visibility.
- `.scroll-smooth` needs later reduced-motion review.
- Raw docs already warn that overflow/scroll utilities must remain keyboard-accessible.

## Interaction Affordance Helpers

Current helpers:

| Class | Line | Classification | Documented | Notes |
| --- | ---: | --- | --- | --- |
| `.cursor-default` | `2296` | `candidate-public` | no | Cursor affordance only. |
| `.cursor-pointer` | `2300` | `candidate-public` | no | Cursor affordance only. |
| `.cursor-not-allowed` | `2304` | `public` | yes | Visual disabled/wait affordance only. |
| `.cursor-wait` | `2308` | `candidate-public` | no | Cursor affordance only. |
| `.cursor-text` | `2312` | `candidate-public` | no | Cursor affordance only. |
| `.pointer-events-none` | `2316` | `candidate-public` | no | Removes pointer hit testing only. |
| `.pointer-events-auto` | `2320` | `candidate-public` | no | Restores pointer hit testing only. |

Audit conclusions:

- Cursor utilities do not create semantic state.
- Pointer-events utilities do not create disabled, inert, or keyboard behavior.
- Consumers remain responsible for `disabled`, `aria-disabled`, focus order, inert/background behavior, and application state.

## Truncation and Readability Helpers

Current helpers:

| Class | Line | Classification | Documented | Notes |
| --- | ---: | --- | --- | --- |
| `.truncate` | `2538` | `public` | yes | Single-line truncation. |
| `.truncate-2` | `2544` | `public` | yes | Two-line clamp. |
| `.truncate-3` | `2545` | `candidate-public` | no | Three-line clamp. |
| `.truncate-4` | `2546` | `candidate-public` | no | Four-line clamp. |

Audit conclusions:

- Truncation helpers can hide meaningful text and must not be used where full text is needed for comprehension.
- Raw docs already warn against using truncation helpers on interactive controls where full text is needed.
- Any future truncation helper cleanup must coordinate docs, accessibility, and responsive readability review.

## Docs Evidence

`@24vlh/vds/doc-raw/vds-utilities.doc.html` currently has:

- Lines: `1182`.
- Hidden mentions: `13`.
- `sr-only` mentions: `4`.
- Screen-reader mentions: `1`.
- Visually-hidden mentions: `1`.
- Focus mentions: `3`.
- Skip mentions: `0`.
- Overflow mentions: `23`.
- Scroll mentions: `17`.
- Safe-area mentions: `0`.
- Pointer-events mentions: `5`.
- Cursor mentions: `14`.
- Reduced-motion mentions: `1`.
- Keyboard mentions: `2`.
- ARIA mentions: `4`.
- `tabindex` mentions: `0`.

Raw docs currently warn:

- Do not rely on `.hidden` or `hide-*` classes for accessibility-critical content.
- Do not use `.truncate-2`, `.truncate-3`, or `.truncate-4` on interactive controls where full text is needed for comprehension.
- Do not combine `.scroll-smooth` with reduced-motion system preferences.
- Overflow/scroll utilities must remain keyboard-accessible.
- Do not use utilities to simulate semantic meaning such as `aria-live`, `role`, or structural markup.

Docs/source metadata gap:

- `@24vlh/agents/docs_vds/components/vds-utilities.json` currently has empty `source_css`.
- Repo truth for this audit is that `vds-utilities` maps to `@24vlh/vds/src/components/utilities.css`.

## Accessibility Baseline Alignment

`VDS-0060` establishes:

- Required target: WCAG 2.2 AA.
- VDS CSS responsibilities include visible focus, state styling, reduced-motion support, forced-colors compatibility, contrast-sensitive surfaces, and accessible docs examples.
- Consumer/application responsibilities include JavaScript-driven focus management, state transitions, modal trapping, live updates, route changes, and data mutation announcements.
- `sr-only`/visually-hidden utilities must remain available for accessible names and helper text patterns.

VDS-1270 interpretation:

- Utility helpers can support accessible patterns, but cannot implement full accessibility semantics alone.
- Later helper cleanup must preserve accessible naming, focus recovery, keyboard-reachable overflow, reduced-motion respect, and readable text.

## Current Risks

- `.hidden` can remove accessibility-critical content if misused.
- `.sr-only-focusable` is not documented as a source class but is important for focusable hidden content.
- No skip helper class is currently present.
- `.safe-area` is source-defined but undocumented in raw utilities docs.
- `.scroll-smooth` lacks file-local reduced-motion handling.
- Overflow/scroll helpers can trap or obscure keyboard focus in nested scroll containers.
- Pointer-events utilities can block pointer interaction without changing keyboard interaction or semantic disabled state.
- Cursor utilities can imply disabled or interactive states without semantic backing.
- Truncation helpers can hide meaningful content.
- Utilities lack file-local forced-colors handling.
- Generated docs metadata omits `source_css`, so docs tooling currently under-reports the utilities source relationship.

## Audit Rules for Later Utility Accessibility Work

- Do not rename, remove, or reclassify utility accessibility helpers without later approved migration work.
- Do not treat `.hidden` as equivalent to `.sr-only`.
- Do not use cursor or pointer-events utilities as substitutes for semantic disabled/inert/application state.
- Do not change overflow/scroll helpers without keyboard and focus review.
- Do not change `.scroll-smooth` without reduced-motion review.
- Do not change `.safe-area` without responsive/mobile and docs review.
- Do not change truncation helpers without readability and accessible-name review.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1280` must use this audit when separating library CSS from documentation-only overrides.
- Docs rewrite work must clarify when to use `.hidden`, `.sr-only`, `.sr-only-focusable`, overflow helpers, pointer-events helpers, cursor helpers, safe-area, and truncation helpers.
- Selector classification work must decide whether `.sr-only-focusable`, `.safe-area`, `.scroll-smooth`, interaction helpers, and truncation variants should remain candidate-public or become documented public API.
- Quality automation should later validate reduced-motion behavior for `.scroll-smooth`, keyboard reachability for overflow helpers, and visible focus around focusable hidden content.

## Reference Sources

- `@24vlh/vds/src/components/utilities.css`
- `@24vlh/vds/doc-raw/vds-utilities.doc.html`
- `@24vlh/vds/docs/planning/foundation/vds-utilities-taxonomy-and-pruning-plan.md`
- `@24vlh/vds/docs/planning/foundation/vds-utility-responsive-variants-audit.md`
- `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
- `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- `@24vlh/agents/docs_vds/components/vds-utilities.json`
