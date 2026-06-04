# VDS Content Blocks Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-2100`

This file records the content blocks component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/content-blocks.css` is the source truth for current content-block CSS behavior.
- `@24vlh/vds/doc-raw/vds-content-blocks.doc.html` and `@24vlh/agents/docs_vds/components/vds-content-blocks.json` are docs/index evidence.
- Content blocks are CSS composition primitives for cards, media blocks, list groups, callouts, empty states, stats, tags/chips/badges, avatars, feature/process/highlight/fact blocks, and richer content-block shells.
- Consumer/application code owns link/button semantics, media `alt`, selected state, disabled behavior, keyboard behavior, CTA behavior, image loading/fallbacks, dynamic updates, and live announcements.
- Existing content-block selectors, state classes, semantic variant hooks, local variables, responsive behavior, and docs examples are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, or generated output refresh happens in `VDS-2100`.

## Source CSS Evidence

`@24vlh/vds/src/components/content-blocks.css` currently has:

- Lines: `1382`.
- Selector blocks: `199`.
- Expanded selectors: `242`.
- Declarations: `607`.
- Custom property declaration lines: `85`.
- Unique local `--content-block-*` token names: `48`.
- `var(...)` references: `449`.
- `!important` declarations: `0`.
- Hard-coded hex/rgb color references: `0`.
- `color-mix(...)` uses: `1`.

Media and interaction evidence:

- Media blocks: `7`, covering `max-width: 640px`, `max-width: 768px`, `max-width: 900px`, and `max-width: 720px`.
- `@keyframes`: `0`.
- `:hover` selector matches: `13`.
- `:focus-visible` selector matches: `14`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `2`.
- Disabled-related matches: `19`.
- Selected-related matches: `3`.
- Current-related matches: `1`.
- Loading/busy selector matches: `0`.
- Transition declarations: `10`.
- Transform declarations: `0`.
- Animation declarations: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Layout and visual evidence:

- Flex display declarations: `31`.
- Grid display declarations: `6`.
- Grid-template declarations: `8`.
- Gap declarations: `46`.
- Padding declarations: `21`.
- Position declarations: `2`.
- Z-index declarations: `0`.
- Overflow declarations: `2`.
- Object-fit declarations: `1`.
- Aspect-ratio declarations: `0`.
- Box-shadow declarations: `10`.
- Outline declarations: `11`.
- Outline-offset declarations: `11`.

Package-facing output:

- `@24vlh/vds/dist/components/content-blocks.css` exists.
- `@24vlh/vds/dist/components/content-blocks.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/content-blocks.css`.
- `@24vlh/vds/src/core.css` does not import content blocks.

## Component Contract

Current content-block source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root | `[data-vds-content-block]`, `.vds-content-block` | content-block-local variables |
| Generic state | `.interactive`, `.is-disabled` | shared interactive and disabled helper visuals |
| Cards | `.card`, `.card--soft`, `.card--muted`, `.card--tone-accent`, `.card--flat`, `.card--raised`, `.card--interactive`, `.card--selected`, `.card--disabled`, `.card__*` | neutral content card shell, states, and internal layout helpers |
| Card grids | `.card-grid`, `.card-grid--compact`, `.card-grid--tight`, `.card-grid--wide` | responsive card collection layout |
| Media | `.media`, `.media--stack`, `.media--horizontal`, `.media--interactive`, `.media__*` | icon/image plus copy layout |
| Lists | `.list-group`, `.list-group__item`, `.list-group__item--interactive`, `.list-group__item--selected`, `.list-group__item--disabled` | structured list rows and row states |
| Callouts/empty/highlights | `.callout`, `.empty`, `.highlight` and descendants | communication, empty-state, and highlighted content blocks |
| Stats/facts/features/process | `.stats`, `.metric-title`, `.fact`, `.feature`, `.process` and descendants | compact metrics, feature rows, process steps, and facts |
| Tags/chips/badges/avatars | `.tag`, `.chip`, `.badge`, `.chip-group`, `.avatar` and variants | compact label, status, and identity surfaces |
| Content-block shell | `.content-block`, `.content-block--*`, `.content-block__*` | richer section-local content shell, variants, split layouts, data rows, media, footer, and KPI regions |
| Variants | `.content-block[data-variant="info"]`, `success`, `warning`, `danger`, `accent`, `neutral` | semantic/accent/neutral local token aliases |

Source interpretation:

- Content blocks are visual composition primitives, not JavaScript behavior components.
- CSS provides layout-neutral content surfaces, local token aliases, hover/focus visuals, selected visuals, disabled visuals, semantic rails, media sizing, and responsive stacking.
- Consumer/application code owns semantics, behavior, state truth, and dynamic updates.

## Local Token Surface

Current local variable groups:

| Family | Role |
| --- | --- |
| Tag/chip/badge sizing | compact label size aliases |
| Component padding/border/disabled | shared density, border width, and disabled opacity |
| Cards | card minimum width, gap, padding, and mobile padding |
| Fact/process/media/empty/highlight | family-specific spacing aliases |
| Content-block layout | rail width, hero spacing/type, split tracks, grid/list/row spacing |
| Typography/KPI | local title, subtitle, meta, eyebrow, KPI value, and KPI label sizing |
| Variants | semantic/accent/neutral rail, tint, text, muted text, and border aliases |

Audit conclusions:

- Local content-block variables are component-owned aliases.
- They rely on primitive spacing, typography, radius, border, shadow, motion, theme surface/text/border, semantic state, accent, and focus tokens.
- Generic variant hooks inherit prior theme contrast risks.
- No local variable or token reference is approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- Content-block-source classes: `161`.
- Public classes: `124`.
- Candidate-public classes: `37`.

Class family counts:

| Group | Total |
| --- | ---: |
| root | `1` |
| generic interaction/disabled | `2` |
| card/card-grid | `22` |
| content-block | `43` |
| media | `8` |
| list group | `7` |
| callout/empty/highlight | `19` |
| stats/fact/feature/process/metric | `20` |
| chip/tag/badge/avatar | `34` |

Notable candidate-public classes:

- `.vds-content-block`
- `.interactive`
- `.is-disabled`
- `.card--muted`
- `.card--selected`
- `.card--tone-accent`
- `.content-block--elevated`
- `.content-block--flat`
- `.content-block--split-reverse`
- `.content-block__grid--loose`
- `.content-block__header--inline`
- `.avatar--status`
- `.badge--disabled`
- `.chip--disabled`
- legacy size/outline chip/tag/badge variants

Audit conclusions:

- Candidate-public status reflects current docs coverage, not permission to remove or rename source-defined selectors.
- Content blocks overlap with dedicated avatar and badge/tag component surfaces.
- Future component splitting, pruning, or selector reclassification requires migration approval.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-content-blocks.doc.html` has `3008` lines.
- Docs cover installation/dependencies, structural model, cards/card grids, media blocks, list groups, callouts, empty states, stats, tags/chips/badges, chip groups, avatars, feature blocks, process blocks, highlight blocks, fact blocks, content-block primitives, content-block anatomy, semantic rails, split layouts, media bleed, data rows, CTA surfaces, card/content-block/callout comparisons, marketing recipes, landing page recipes, accessibility rules, and do/don't guidance.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-content-blocks.json`
- Blocks: `30`.
- Code examples: `26`.
- Generated class tokens: `179`.
- Generated `source_css`: `base.css`, `content-blocks.css`, `primitives.css`, and `typography.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `content` | `552` |
| `block` | `994` |
| `card` | `104` |
| `media` | `120` |
| `image` | `16` |
| `feature` | `36` |
| `chip` | `38` |
| `tag` | `38` |
| `badge` | `14` |
| `avatar` | `14` |
| `fact` | `20` |
| `stat` | `55` |
| `process` | `19` |
| `highlight` | `36` |
| `callout` | `49` |
| `interactive` | `48` |
| `focus` | `5` |
| `keyboard` | `2` |
| `responsive` | `4` |
| `mobile` | `1` |
| `disabled` | `19` |
| `selected` | `4` |
| `contrast` | `11` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |

Audit conclusions:

- Generated `source_css` metadata is present but does not list theme files even though semantic variants rely on active theme tokens.
- Raw docs heavily cover broad composition and marketing/content recipes.
- Raw docs do not directly mention reduced-motion or forced-colors, while source also lacks file-local handling for both.

## Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Choosing semantic elements for cards, lists, media rows, callouts, facts, stats, and CTAs.
- Providing meaningful media `alt` text or decorative `alt=""` where appropriate.
- Providing readable text alternatives for icon, chip, badge, avatar, stat, and semantic status surfaces.
- Syncing selected/current state and any corresponding ARIA state.
- Enforcing disabled behavior for links, buttons, or custom interactive wrappers.
- Handling keyboard activation for non-native interactive containers.
- Ensuring CTA buttons/links have accessible names and correct navigation/action semantics.
- Managing dynamic content updates, loading states, and live announcements where needed.

CSS source currently provides:

- Token-driven content surfaces.
- Hover, active, focus-visible, disabled, and selected visuals for selected classes.
- Semantic and accent visual variants.
- Responsive stacking for cards, media, stats, feature, process, split content-blocks, and content-block KPI groups.
- Visual media object-fit handling.
- No file-local reduced-motion or forced-colors safety net.

Audit findings:

- Color-only semantic rails and badges need paired text semantics in docs/consumer usage.
- Visual selected/current states do not synchronize ARIA or application state.
- Disabled visuals do not enforce disabled behavior for non-form elements.
- Media/image semantics and loading behavior cannot be solved by CSS.
- Interactive card/content/fact/media classes require native links/buttons or consumer keyboard behavior.
- Theme contrast risks from prior theme audits apply to semantic rails, accent content blocks, tags/chips/badges, and muted text.

## Risks and Future Routing

- Content blocks are a broad composition kit; selector pruning, splitting, or reclassification requires migration approval.
- Source overlaps with dedicated avatar and badge/tag component surfaces; overlap is compatibility evidence, not cleanup approval.
- Spacing/layout behavior overlaps with layout, sections, utilities, and marketing recipes; classification must precede cleanup.
- `.content-block--split-reverse` uses source-order-sensitive layout behavior and needs semantic DOM review before changes.
- Interactive variants are CSS-only and must not imply button/link behavior by themselves.
- Semantic rails, compact labels, badges, and status-like visuals inherit theme contrast risks.
- Source has transitions without file-local reduced-motion handling.
- Source has no forced-colors block.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Content-block CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Generated docs metadata refresh: later approved docs-index item.
- Selector classification changes: later approved selector inventory item.
- Avatar and badge/tag overlap: later approved component-surface review.
- Layout/section/utility spacing classification: later approved layout/utilities cleanup item.
- Theme/contrast checks: later approved visual/contrast QA items.
- Dist refresh: later approved release/build-output item.

## Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-content-blocks-audit.md` becomes the decision source for later content-block CSS fixes, docs rewrite, accessibility review, theme/contrast checks, spacing/layout classification, selector classification, migration notes, and release verification.
