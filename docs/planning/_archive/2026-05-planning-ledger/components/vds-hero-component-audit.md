# VDS Hero Component Audit

Last updated: `2026-05-24`

Source item: `VDS-2190`

This file records the hero component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/hero.css` is the source truth for current hero CSS behavior.
- `@24vlh/vds/doc-raw/vds-hero.doc.html` and `@24vlh/agents/docs_vds/components/vds-hero.json` are docs/index evidence.
- Hero CSS provides visual intro, density, layout, media, full/inset, CTA group, metric, point, loading skeleton, error, and responsive surfaces.
- Consumer/application code owns meaningful headings, CTA semantics, image/video selection, `alt` text or decorative media handling, loading state changes, error remediation behavior, metric data accuracy, live announcements, routing, and analytics.
- Existing hero selectors, local variables, fallback aliases, density variants, layout variants, media behavior, full/inset surfaces, loading skeleton behavior, error state visuals, metric/trend hooks, responsive behavior, and docs examples are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, selector inventory update, or generated output refresh happens in `VDS-2190`.

## Source CSS Evidence

`@24vlh/vds/src/components/hero.css` currently has:

- Lines: `601`.
- Selector blocks: `78`.
- Expanded selectors: `122`.
- Declarations: `238`.
- Custom property declaration lines: `28`.
- Unique declared local custom property names: `27`.
- `var(...)` references: `178`.
- `!important` declarations: `0`.
- Hard-coded color references: `3`, all rgba references in the full-hero overlay/text-shadow area.
- `color-mix(...)` uses: `0`.

State and motion evidence:

- `:hover` selector matches: `0`.
- `:focus` selector matches: `0`.
- `:focus-visible` selector matches: `0`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled/`aria-disabled` selector matches: `0`.
- Selected/`aria-selected` selector matches: `0`.
- Loading/`aria-busy` matches: `4`.
- Transition declarations: `0`.
- Transform declarations: `0`.
- Animation declarations: `2`.
- `@keyframes`: `1`, named `hero-skeleton-shimmer`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Layout and visual evidence:

- Media blocks: `3`, at `max-width: 1024px`, `max-width: 768px`, and `max-width: 640px`.
- Container queries: `0`.
- Grid display declarations: `3`.
- Flex display declarations: `11`.
- Inline-flex declarations: `2`.
- Gap declarations: `15`.
- Padding-related declarations: `15`.
- Position declarations: `3`.
- Z-index declarations: `2`.
- Overflow declarations: `1`.
- Width declarations: `9`.
- Height declarations: `5`.
- Min-height declarations: `0`.
- Max-width declarations: `8`.
- Grid-template-columns declarations: `5`.
- Box-shadow declarations: `1`.
- Outline declarations: `0`.
- Border-related declarations: `17`.
- Border-radius declarations: `11`.
- Background/background-color declarations: `16`.
- Color declarations: `15`.
- Opacity declarations: `1`.
- Object-fit declarations: `1`.
- Aspect-ratio declarations: `1`.

Package-facing output:

- `@24vlh/vds/dist/components/hero.css` exists.
- `@24vlh/vds/dist/components/hero.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/hero.css`.
- `@24vlh/vds/src/core.css` does not import hero.

## Component Contract

Current hero source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root | `[data-vds-hero]`, `.vds-hero` | hero-local variables |
| Base structure | `.hero`, `.hero__inner`, `.hero__eyebrow`, `.hero__title`, `.hero__body`, `.hero__desc`, `.hero__subtitle` | page-intro structure and text hierarchy |
| Actions and metadata | `.hero__actions`, `.hero__actions--stack`, `.hero__actions--center`, `.hero__text-pill`, `.hero__badge`, `.hero__meta` | CTA grouping and supporting meta |
| Density | `.hero--a`, `.hero--b`, `.hero--c`, `.hero--compact`, `.hero--minimal` | scale, padding, and text-size variants |
| Layout | `.hero--split`, `.hero--split-reverse`, `.hero--with-media`, `.hero--media-left`, `.hero--center` | split/media/centered composition |
| Surfaces | `.hero--soft`, `.hero--bordered`, `.hero--full`, `.hero--inset` | background, border, overlay, and inset treatments |
| Media | `.hero__media`, `.hero__media-inner`, `.hero__media img`, `.hero__media picture`, `.hero__media--bleed` | image/media wrappers and bleed behavior |
| Metrics | `.hero__metrics`, `.hero__metrics--compact`, `.hero__metric`, `.hero__metric--*`, `.hero__metric-value`, `.hero__metric-label`, `.hero__metric-trend*` | KPI grid, trend, and status visuals |
| Points | `.hero__points`, `.hero__point`, `.hero__point-icon`, `.hero__row` | supporting bullet/point visuals |
| Accent/loading/error | `.hero__accent-line`, `.hero--loading`, `.hero__skeleton`, `.hero__skeleton-line`, `.hero--error`, `.hero__error`, `.hero__error-title`, `.hero__error-actions` | accent, skeleton, and error-state hooks |

Source interpretation:

- Hero CSS owns intro layout, density scale, surface variants, media wrappers, CTA grouping, metric and point visuals, loading skeleton visuals, error banner visuals, and responsive collapse.
- CSS does not own async loading, image/video choice, CTA behavior, routing, analytics, live updates, metric data accuracy, accessible naming, or semantic heading/landmark decisions.
- Hero selectors, local variables, fallback aliases, density variants, layout variants, media hooks, skeleton/error hooks, metric/trend hooks, docs examples, and package-facing outputs are compatibility-sensitive.

## Local Token Surface

Declared local variables:

| Variable | Role |
| --- | --- |
| `--hero-skeleton-speed` | skeleton shimmer timing |
| `--hero-eyebrow-letter-spacing` | eyebrow letter spacing |
| `--hero-eyebrow-color` | eyebrow color alias |
| `--hero-text-max-default` | default text measure |
| `--hero-text-max-a` | A-density text measure |
| `--hero-text-max-c` | C-density text measure |
| `--hero-text-max-compact` | compact text measure |
| `--hero-media-aspect-ratio` | media aspect ratio |
| `--hero-media-max-width` | media column max width |
| `--hero-media-radius` | media radius |
| `--hero-metric-min-width` | metric grid minimum width |
| `--hero-metric-bg` | metric background alias |
| `--hero-metric-border` | metric border alias |
| `--hero-accent-line-thickness` | accent line width |
| `--hero-body-gap` | body stack gap |
| `--hero-padding-inline` | hero horizontal padding |
| `--hero-actions-gap` | action group gap |
| `--hero-actions-margin-top` | action group top margin |
| `--hero-meta-gap` | meta row gap |
| `--hero-meta-color` | meta text alias |
| `--hero-badge-bg` | badge background alias |
| `--hero-badge-border` | badge border alias |
| `--hero-badge-text` | badge text alias |
| `--hero-point-icon` | point icon color alias |
| `--hero-border-color` | bordered hero border alias |
| `--hero-soft-bg` | soft surface alias |
| `--hero-full-overlay` | full-hero overlay alias |

Additional source-referenced fallback aliases:

- `--hero-accent-line`
- `--hero-trend-up`
- `--hero-trend-down`
- `--hero-trend-neutral`
- `--hero-error-bg`
- `--hero-error-border`
- `--hero-error-banner-bg`
- `--hero-error-banner-border`
- `--hero-error-title`

Audit conclusions:

- Local variables are component-owned aliases for density, measure, media, metrics, badges, points, overlays, and skeleton timing.
- Fallback aliases allow targeted metric, accent, and error-state overrides without file-local declarations.
- No local variable, fallback alias, or token reference is approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- Hero-source classes: `55`.
- Public classes: `53`.
- Candidate-public classes: `2`.

Candidate-public classes:

- `.vds-hero`
- `.hero--split-reverse`

Class family counts:

| Group | Total |
| --- | ---: |
| root | `1` |
| hero-prefixed | `54` |
| media-related | `5` |
| action-related | `4` |
| layout-related | `8` |

Audit conclusions:

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- `.hero--split-reverse` uses CSS `order`, so future changes must preserve source/docs semantic-order guidance.
- Future selector pruning or reclassification requires migration approval.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-hero.doc.html` has `1050` lines.
- Docs cover installation/dependencies, badges/meta/stacked actions, centered and bordered heroes, base structure, scale variants, split heroes, media heroes, media alignment and bleed, full/inset surfaces, metric heroes, loading/error states, accent line, responsive behavior, and accessibility/usage rules.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-hero.json`
- Blocks: `14`.
- Code examples: `14`.
- Generated class tokens: `74`.
- Generated `source_css`: `base.css`, `hero.css`, `layout.css`, `primitives.css`, and `typography.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `hero` | `451` |
| `media` | `44` |
| `image` | `6` |
| `video` | `0` |
| `background` | `3` |
| `cta` | `5` |
| `button` | `118` |
| `eyebrow` | `24` |
| `title` | `71` |
| `subtitle` | `23` |
| `actions` | `34` |
| `compact` | `11` |
| `split` | `14` |
| `center` | `8` |
| `product` | `10` |
| `height` | `0` |
| `min-height` | `0` |
| `responsive` | `1` |
| `mobile` | `1` |
| `contrast` | `7` |
| `aria` | `9` |
| `label` | `15` |
| `alt` | `8` |
| `focus` | `0` |
| `keyboard` | `1` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |
| `motion` | `0` |
| `animation` | `1` |
| `decorative` | `4` |
| `gradient` | `0` |
| `overlay` | `5` |
| `brand` | `1` |

Audit conclusions:

- Generated `source_css` metadata is present and includes `hero.css`.
- Raw docs cover hero structure, dependencies, layout variants, media, metrics, loading/error states, responsive collapse, alt text, labels, and contrast guidance.
- Raw docs do not mention reduced-motion, forced-colors, focus, or direct height/min-height behavior.
- Docs examples include adjacent dependencies such as buttons, icons, sections, doc-block previews, and utilities; later docs rewrite should separate runtime requirements from demo scaffolding.

## Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Meaningful heading hierarchy and landmark placement around hero sections.
- CTA semantics, routing, analytics, and accessible link/button labels.
- Image/video selection, loading strategy, and `alt` text or decorative media handling.
- Loading state changes, busy/live announcements, and skeleton accessibility policy.
- Error remediation behavior, retry actions, incident links, and live announcements.
- Metric data accuracy, trend wording, and avoiding color-only meaning.
- Keeping full-hero overlays and background media readable across themes.

CSS source currently provides:

- Static hero layout, density variants, surface variants, media wrappers, and responsive collapse.
- Action grouping and alignment hooks.
- Metrics, trend, point, badge, meta, and accent-line visuals.
- Loading skeleton visuals and `hero-skeleton-shimmer` animation.
- Error banner visuals and remediation action layout.
- No file-local focus, reduced-motion, or forced-colors handling.

Audit findings:

- Loading skeleton animation exists without file-local reduced-motion handling.
- Forced-colors handling is absent.
- Full hero uses rgba overlay/text-shadow values and needs later contrast/theme review.
- Metrics and trend variants can become color-only communication unless paired with text.
- Media examples require clear alt/decorative guidance because CSS cannot solve media meaning.

## Responsive and Motion Evidence

Responsive source behavior:

- `max-width: 1024px`: split and with-media heroes collapse to one column.
- `max-width: 768px`: base hero padding tightens and title becomes `--text-3xl`.
- `max-width: 640px`: title becomes `--text-2xl` and metrics use a smaller minmax basis.

Motion source behavior:

- Source has `0` transition declarations.
- Source has `0` transform declarations.
- Source has `2` animation declarations.
- Source has `1` `@keyframes`, `hero-skeleton-shimmer`.
- No file-local `prefers-reduced-motion` block is present.
- No file-local `forced-colors` block is present.

Audit conclusions:

- Responsive behavior is source truth and should not be inverted or replaced without later responsive QA.
- Reduced-motion absence is an audit finding because skeleton animation exists.
- Forced-colors review remains future work.

## Risks and Future Routing

- Hero is a high-visibility composition surface; selector pruning or variant removal requires migration approval.
- Density variants A/B/C coexist with compact/minimal and remain compatibility-sensitive.
- Layout variants are documented as mutually exclusive, but CSS does not enforce invalid combinations.
- `.hero--split-reverse` and `.hero--media-left` rely on CSS ordering; future changes must preserve semantic DOM guidance.
- Loading state hides `.hero__body` visually while skeletons render; assistive technology behavior must be clarified in later docs/accessibility work.
- Full-hero overlay and rgba text-shadow need theme/contrast review.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Hero CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Loading skeleton motion policy: later approved motion/accessibility item.
- Responsive screenshots and visual QA: later approved responsive/visual verification item.
- Theme/contrast and full-hero overlay review: later approved visual integrity item.

## Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-hero-component-audit.md` becomes the decision source for later hero CSS fixes, docs rewrite, selector classification, accessibility review, media/CTA guidance, skeleton motion cleanup, responsive QA, theme/contrast checks, migration notes, and release verification.
