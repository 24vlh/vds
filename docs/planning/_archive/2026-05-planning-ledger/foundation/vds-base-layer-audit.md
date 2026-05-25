# VDS Base Layer Audit

Last updated: `2026-05-24`

Source item: `VDS-1210`

This file records the base layer audit for the base, layout, utilities, and global CSS track. It is a planning artifact only: no CSS, raw docs, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/base.css` owns the global reset/normalize behavior, document defaults, global focus outline, selection colors, reduced-motion safety net, forced-colors baseline, table reset, media defaults, form inheritance, code/pre defaults, body/main/footer flex structure, and SPA root container defaults.
- `@24vlh/vds/src/primitives.css` owns primitive token definitions.
- Component CSS owns component-specific resets, variants, and interaction states.
- Layout and utility cleanup remains deferred to `VDS-1230` through `VDS-1270`.
- Any future base CSS change that touches source CSS while generated output is out of scope must record `dist refresh pending`.

## Source Evidence

`@24vlh/vds/src/base.css` currently has:

- Lines: `305`.
- Custom property definitions: `7`.
- `var(...)` references: `34`.
- Unique referenced tokens: `24`.
- Non-at-rule selector blocks in the read-only scan: `44`.
- Hard-coded hex/rgb color literals: `0`.
- `!important` declarations: `4`, all inside the global reduced-motion safety net.

Source-defined custom properties:

- `--link-underline-thickness`
- `--transition-fast`
- `--transition-normal`
- `--transition-slow`
- `--ease-out`
- `--ease-in`
- `--ease-in-out`

The transition/easing definitions occur inside `@media (prefers-reduced-motion: reduce)` and function as reduced-motion overrides, not primitive token ownership.

## Global Reset and Default Surfaces

Base currently sets or normalizes:

- `html` box model, line height, font smoothing, text-size adjustment, and font feature settings.
- Universal `box-sizing`, `min-inline-size`, scrollbar styling, and `box-decoration-break`.
- `body` margin, min-height, background, text color, font family, font size, text rendering, and flex column structure.
- Media elements: `img`, `picture`, `video`, `canvas`, and `svg`.
- Form elements: `button`, `input`, `textarea`, `select`, `fieldset`, `legend`, search inputs, number spin buttons, and textarea resize.
- Headings, paragraphs, lists, figures, blockquotes, definition lists, and nested lists.
- Inline emphasis through `b` and `strong`.
- `hr`.
- Link base, hover, and active states.
- `table` collapse and full-width defaults.
- `main` and `footer` flex behavior.
- Code and preformatted text defaults.
- SPA/root containers.

These defaults are compatibility-sensitive because they affect consumers even when no component class is present.

## Focus, Selection, Motion, and Forced-Colors Evidence

Focus:

- `:focus` sets tokenized outline and outline offset.
- `:focus:not(:focus-visible)` suppresses pointer focus outlines.
- `:focus-visible` restores tokenized keyboard focus outline and offset.

Selection:

- `::selection` uses `--color-selection-bg` and `--color-selection-text`.

Reduced motion:

- `@media (prefers-reduced-motion: reduce)` overrides transition/easing tokens and suppresses animation/transition durations.
- The block uses `!important` for animation and transition duration safety.
- This global block is the current reduced-motion safety net recorded in `VDS-1050`.

Forced colors:

- `@media (forced-colors: active)` sets `forced-color-adjust: none` on `*`.
- This is broad and must be reviewed before any accessibility or forced-colors cleanup.
- Raw base docs currently mention `forced-colors` `0` times, so this is a docs coverage gap.

## Selector Inventory Evidence

Selector inventory currently finds `1` base-defined class-like selector:

| Selector | Classification | Notes |
| --- | --- | --- |
| `.app-root` | `candidate-public` | Part of the SPA/root container selector list. |

SPA/root defaults also target:

- `#root`
- `#app`
- `#__next`
- `#__nuxt`
- `app-root`
- `svelte-root`
- `astro-root`
- `[qwik-root]`
- `[data-app-root]`
- `[data-spa-root]`

These root defaults are not class-heavy, but they are still compatibility-sensitive because they target common framework mount nodes and custom app-root attributes.

## Docs Evidence

`@24vlh/vds/doc-raw/vds-base.doc.html` currently has:

- Lines: `1918`.
- Reset mentions: `18`.
- Normalize mentions: `15`.
- Focus mentions: `35`.
- Reduced-motion phrase mentions: `2`.
- Forced-colors mentions: `0`.
- Selection mentions: `11`.
- Link mentions: `18`.
- Table mentions: `43`.
- Code mentions: `272`.
- Form mentions: `14`.
- Button mentions: `260`.
- HTML mentions: `60`.
- Body mentions: `47`.
- Typography mentions: `30`.

The raw docs cover hybrid reset, browser reset/normalization, HTML/body defaults, lists, media, forms, SPA roots, buttons, focus-visible, selection, rem philosophy, typography baseline, box model, and token examples.

Docs/source gaps:

- Source has forced-colors behavior, but raw docs do not mention `forced-colors`.
- Raw docs include many token examples outside the base source contract. This is docs breadth, not proof that base owns those tokens.
- Source references `--color-bg`, `--color-border-subtle`, and `--font-weight-bold`; these source references are not explicitly mentioned in the raw base doc token scan.

## Current Risks

- `base.css` comments say base must load before themes, while current source/docs shell behavior loads primitives first and keeps themes separate. This needs wording/source-of-truth review in `VDS-1220` or docs rewrite work.
- Broad forced-colors behavior can affect all descendants and should be reviewed with the accessibility baseline before changes.
- Global button reset can remove native affordances if component or consumer styles do not replace them.
- Pointer cursor defaults for `[role="button"]` and button-like inputs are broad behavioral defaults.
- SPA root defaults may affect consumers using those IDs/elements.
- Base code/pre defaults overlap with typography and docs code-block styling.
- Raw docs token examples may blur ownership between primitives, base, typography, and utilities.

## Audit Rules for Later Base Work

- Preserve base defaults unless a later approved item classifies the behavior, compatibility impact, docs impact, and migration requirements.
- Do not alter SPA root defaults casually; treat them as global compatibility surfaces.
- Do not change focus, reduced-motion, or forced-colors behavior without accessibility review.
- Do not move code/pre, table, form, or button defaults without documenting the new owner.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1220` must use this audit when defining the `core.css` and `index.css` import contracts.
- `VDS-1230` and layout work must account for body/main/footer and SPA root defaults.
- `VDS-1250` through `VDS-1270` must keep utility reset/helper ownership separate from base defaults.
- Documentation rewrite work must clarify what base owns versus what primitives, typography, layout, sections, and utilities own.
- Accessibility/quality work must revisit the broad forced-colors baseline and global focus mechanics.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Accessibility baseline: `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
- Browser/CSS support matrix: `@24vlh/vds/docs/planning/release/vds-browser-css-support-matrix.md`
- Responsive baseline: `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`
- Focus ring and interaction-state audit: `@24vlh/vds/docs/planning/tokens/vds-focus-ring-interaction-state-audit.md`
- Motion token and reduced-motion audit: `@24vlh/vds/docs/planning/tokens/vds-motion-token-reduced-motion-audit.md`
- Typography audit: `@24vlh/vds/docs/planning/tokens/vds-typography-scale-and-rhythm-audit.md`
- Selector inventory: `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Base source: `@24vlh/vds/src/base.css`
- Base raw docs: `@24vlh/vds/doc-raw/vds-base.doc.html`
- Entrypoints: `@24vlh/vds/src/index.css`, `@24vlh/vds/src/core.css`
