# VDS Skeleton Component Audit

Last updated: `2026-05-24`

Source item: `VDS-2260`

Next recommended item: `VDS-2270 State component audit`

This file records the skeleton component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/skeleton.css` is the source truth for current skeleton CSS behavior.
- `@24vlh/vds/doc-raw/vds-skeleton.doc.html` and `@24vlh/agents/docs_vds/components/vds-skeleton.json` are docs/index evidence.
- Skeleton CSS provides visual loading placeholders and shimmer/static hooks for lines, avatars, blocks, cards, table rows, list items, and composition helpers.
- Consumer/application code owns loading state management, data fetching, visibility toggling, ARIA/live-region behavior, focusability suppression, and layout replacement logic.
- Existing skeleton selectors, local variables, shimmer animation, static/reduced-motion behavior, composition helpers, density/aspect-ratio variants, docs examples, and package-facing outputs are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, selector inventory update, or generated output refresh happens in `VDS-2260`.

## Source CSS Evidence

`@24vlh/vds/src/components/skeleton.css` currently has:

- Lines: `376`.
- Selector blocks: `56`.
- Expanded selectors: `60`.
- Declarations: `121`.
- Local custom property declaration lines: `5`.
- Unique local custom property names: `3`.
- `var(...)` references: `67`.
- `!important` declarations: `3`, used to disable shimmer.
- Hard-coded hex/rgb color references: `0`.
- `color-mix(...)` uses: `0`.

State and motion evidence:

- `:hover` selector matches: `0`.
- `:focus-visible` selector matches: `0`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled selector matches: `0`.
- Static selector matches: `1`.
- Loading term matches: `2`.
- Animation declarations: `6`.
- Transform declarations: `6`.
- Transition declarations: `0`.
- `@keyframes`: `1`, named `vds-skeleton-shimmer`.
- Reduced-motion matches: `2`.
- Forced-colors blocks: `0`.

Layout and style evidence:

- Viewport media blocks: `0`.
- Reduced-motion media blocks: `1`, at `prefers-reduced-motion: reduce`.
- Flex display declarations: `4`.
- Inline-flex display declarations: `0`.
- Grid display declarations: `0`.
- Gap declarations: `9`.
- Position declarations: `8`.
- Z-index declarations: `0`.
- Overflow declarations: `4`.
- Width declarations: `11`.
- Height declarations: `16`.
- Aspect-ratio declarations: `4`.
- Container queries: `0`.

Package-facing output:

- `@24vlh/vds/dist/components/skeleton.css` exists.
- `@24vlh/vds/dist/components/skeleton.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/skeleton.css`.
- `@24vlh/vds/src/core.css` does not import skeleton.

## Component Contract

Current skeleton source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root scope | `[data-vds-skeleton]`, `.vds-skeleton` | local skeleton variable scope |
| Base skeleton | `.skeleton`, `.skeleton::after`, size, intensity, shape, and static modifiers | generic shimmer surface |
| Lines | `.skeleton-line`, line width and size modifiers | text and heading placeholders |
| Avatars | `.skeleton-avatar`, size and square modifiers | circular or square identity/media placeholders |
| Blocks | `.skeleton-block`, aspect-ratio and size modifiers | media, image, chart, and rectangular placeholders |
| Cards | `.skeleton-card`, density, list, media, and stat modifiers | composite card placeholder layouts |
| Rows | `.skeleton-row`, row density modifiers | table-row loading placeholders |
| Items | `.skeleton-item`, compact and spacious variants | list-item loading placeholders |
| Composition | `.skeleton-stack`, `.skeleton-inline`, `.skeleton-gap-sm`, `.skeleton-gap-lg` | layout helpers for skeleton groups |
| Motion control | `.skeleton--static`, `@media (prefers-reduced-motion: reduce)` | explicit and user-preference shimmer suppression |

Source interpretation:

- Skeleton CSS owns visual placeholder primitives, shimmer animation, static/reduced-motion hooks, composition helpers, sizing, and layout-mirroring surfaces.
- CSS does not own loading state, swapping skeletons for loaded content, ARIA/live-region behavior, focus suppression, or data-fetching behavior.
- Runtime and composition hooks such as `.skeleton--static`, `.skeleton-card`, `.skeleton-row`, `.skeleton-stack`, and `.skeleton-inline` must remain compatibility-sensitive until later approved migration work.

## Token and Local Variable Surface

Local custom properties:

- `--skeleton-line-height`
- `--skeleton-radius`
- `--skeleton-shimmer-duration`

Audit conclusions:

- Skeleton uses local variables for line height, radius, and shimmer duration.
- Most color, spacing, radius, avatar-size, surface, and border behavior comes from broader VDS tokens.
- `.skeleton--pill` and `.skeleton--square` override `--skeleton-radius`.
- No local variable, token reference, keyframe, static hook, reduced-motion rule, or composition helper is approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- Skeleton-source classes: `48`.
- Public classes: `18`.
- Candidate-public classes: `30`.

Candidate-public classes:

- `.skeleton--lg`
- `.skeleton--md`
- `.skeleton--sm`
- `.skeleton--square`
- `.skeleton--xl`
- `.skeleton-avatar--square`
- `.skeleton-block--16-9`
- `.skeleton-block--21-9`
- `.skeleton-block--4-3`
- `.skeleton-block--lg`
- `.skeleton-block--md`
- `.skeleton-block--sm`
- `.skeleton-card--dense`
- `.skeleton-card--list`
- `.skeleton-card--media`
- `.skeleton-card--relaxed`
- `.skeleton-card--stat`
- `.skeleton-gap-lg`
- `.skeleton-gap-sm`
- `.skeleton-item`
- `.skeleton-item--compact`
- `.skeleton-item--spacious`
- `.skeleton-line--full`
- `.skeleton-line--lg`
- `.skeleton-line--sm`
- `.skeleton-line--xs`
- `.skeleton-row--a`
- `.skeleton-row--c`
- `.skeleton-stack`
- `.vds-skeleton`

Audit conclusions:

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- The large candidate-public surface includes source-defined size, density, aspect-ratio, row, item, and composition helpers; all remain compatibility-sensitive.
- `.skeleton--static` and the reduced-motion rule are compatibility-sensitive because they control shimmer behavior.
- Future selector pruning or reclassification requires migration approval.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-skeleton.doc.html` has `1594` lines.
- Docs cover installation/dependencies, skeleton goals, anatomy/API overview, base skeleton surfaces, lines, avatars, media blocks, cards, lists, form loading states, table/list loading states, dashboards, density, static skeletons, reduced-motion, layout-stability guidance, and accessibility usage rules.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-skeleton.json`
- Blocks: `16`.
- Code examples: `13`.
- Generated class tokens: `47`.
- Generated `source_css`: `base.css`, `content-blocks.css`, `forms.css`, `layout.css`, `primitives.css`, `skeleton.css`, `tables.css`, `typography.css`, and `utilities.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `skeleton` | `909` |
| `shimmer` | `2` |
| `loading` | `19` |
| `placeholder` | `2` |
| `avatar` | `71` |
| `block` | `248` |
| `card` | `147` |
| `row` | `6` |
| `item` | `19` |
| `form` | `33` |
| `table` | `31` |
| `aria` | `10` |
| `aria-busy` | `3` |
| `status` | `3` |
| `live` | `1` |
| `reduced-motion` | `6` |
| `prefers-reduced-motion` | `1` |
| `forced-colors` | `0` |
| `contrast` | `2` |
| `animation` | `3` |
| `static` | `9` |
| `responsive` | `0` |
| `mobile` | `0` |
| `layout shift` | `1` |

Docs coverage and gaps:

- Raw docs cover installation/dependencies, primitives, lines, avatars, blocks, cards, forms, tables, dashboards, density, static skeletons, reduced-motion, `aria-busy`, `aria-live`, contrast, and layout shift guidance.
- Raw docs do not mention forced-colors, responsive/mobile, `aria-hidden`, or screen reader wording directly.
- Generated docs metadata includes `skeleton.css` and several demo/runtime dependencies.
- Source has reduced-motion handling, but no forced-colors handling.

## Accessibility, Runtime, and Behavior Boundaries

Consumer/application code owns:

- Loading state and replacing skeletons with loaded content.
- `aria-busy`, `aria-live`, status text, hidden/decorative treatment, and announcement policy.
- Keeping focusable controls out of skeleton surfaces while loading.
- Layout stability, final-content size matching, and data-fetching behavior.
- Avoiding duplicate or stale skeleton content after loading completes.

Accessibility interpretation:

- Skeleton CSS can reduce motion but cannot communicate loading status by itself.
- Placeholder geometry must mirror final content to avoid layout jumps.
- Skeletons must remain visual placeholders, not semantic replacements for real content or controls.

Audit conclusions:

- Skeleton CSS is compatibility-sensitive because it exposes layout-mirroring and motion hooks used by docs examples and consumers.
- Source CSS wins where docs guidance is broader than actual CSS behavior.
- Actual loading semantics and announcements remain a later implementation/docs task.

## Responsive, Motion, and Forced-Colors Evidence

Responsive source behavior:

- Source has no viewport media blocks and no container queries.
- Responsiveness is composition-driven through parent layout, aspect-ratio block modifiers, width/height values, and external layout utilities.

Motion source behavior:

- `.skeleton`, `.skeleton-line`, `.skeleton-avatar`, and `.skeleton-block` use `vds-skeleton-shimmer`.
- `.skeleton--static::after` disables animation and display with `!important`.
- `@media (prefers-reduced-motion: reduce)` disables shimmer animation for base, line, avatar, and block surfaces.

Forced-colors evidence:

- Source has `0` forced-colors blocks.
- Raw docs mention forced-colors `0` times.

Audit conclusions:

- Shimmer behavior and reduced-motion handling are source truth and should not be renamed or removed without migration approval.
- The absence of forced-colors handling is an audit finding only.
- Responsive behavior is parent-layout dependent; no responsive source changes are approved in this item.

## Risks and Future Routing

- Skeleton loading state cannot be solved by CSS; runtime state, ARIA, focus suppression, and replacement timing remain consumer-owned.
- Source has many candidate-public helper selectors, so classification must happen before cleanup.
- Static/reduced-motion hooks must remain available until motion policy changes are approved.
- Forced-colors handling is absent and should be routed to a later visual/accessibility item.
- Docs examples depend on content-blocks, forms, tables, layout, typography, utilities, and doc-block presentation; later docs rewrite should separate runtime requirements from demo dependencies.
- Layout-stability risks remain when skeleton geometry does not match final content.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Skeleton CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Selector classification: later approved selector inventory/docs item.
- Loading/accessibility semantics: later approved accessibility/docs item.
- Theme/contrast, reduced-motion, and forced-colors checks: later approved visual integrity item.

## Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-skeleton-component-audit.md` becomes the decision source for later skeleton CSS fixes, docs rewrite, selector classification, loading/accessibility guidance, layout-stability guidance, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.
