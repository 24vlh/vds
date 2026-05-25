# VDS-2100 Content Blocks Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2100`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2100-content-blocks-audit.md`

## 1. Goal

Create the content blocks component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only content-block contract: cards, media blocks, list groups, callouts, empty states, stats, tags/chips/badges, avatars, feature/process/highlight/fact blocks, content-block primitives, interactive variants, responsive behavior, docs/index metadata, package-facing dist presence, and accessibility/theming risks before any content-block CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/content-blocks.css` selector, token, card, media, list, callout, empty, stats, tag/chip/badge, avatar, feature, process, highlight, fact, content-block, interactive, selected, disabled, responsive, theme, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the content-block class surface.
- Record raw docs and generated docs-index metadata for `vds-content-blocks`.
- Record package-facing `dist/components/content-blocks.css` and `.min.css` presence.
- Add a content blocks audit artifact for later CSS fixes, docs rewrite, accessibility review, theme/contrast checks, spacing/layout classification, selector classification, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2100` is done, and the next recommended item is `VDS-2110`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding JavaScript card, media, CTA, selected-state, disabled-state, image-loading, live-update, or keyboard behavior.
- Adding reduced-motion handling, forced-colors handling, responsive screenshots, visual checks, selector reclassification, docs rewrites, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-content-blocks.json`
- Repo files:
  - `@24vlh/vds/src/components/content-blocks.css`
  - `@24vlh/vds/doc-raw/vds-content-blocks.doc.html`
  - `@24vlh/vds/dist/components/content-blocks.css`
  - `@24vlh/vds/dist/components/content-blocks.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/content-blocks.css` has `1382` lines.
- Selector blocks: `199`.
- Expanded selectors: `242`.
- Declarations: `607`.
- Custom property declaration lines: `85`.
- Unique local `--content-block-*` token names: `48`.
- `var(...)` references: `449`.
- `!important` declarations: `0`.
- Hard-coded hex/rgb color references: `0`.
- `color-mix(...)` uses: `1`.

Media, interaction, and state evidence:

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

Layout and style evidence:

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

Package-facing output evidence:

- `@24vlh/vds/dist/components/content-blocks.css` exists.
- `@24vlh/vds/dist/components/content-blocks.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/content-blocks.css`.
- `@24vlh/vds/src/core.css` does not import content blocks.

## 5. Component Contract

Current content-block source surfaces:

- Root/local variables:
  - `[data-vds-content-block]`
  - `.vds-content-block`
- Generic interaction:
  - `.interactive`
  - `.is-disabled`
- Cards and card grids:
  - `.card`
  - `.card--soft`
  - `.card--muted`
  - `.card--tone-accent`
  - `.card--flat`
  - `.card--raised`
  - `.card--interactive`
  - `.card--selected`
  - `.card--disabled`
  - `.card__header`
  - `.card__body`
  - `.card__footer`
  - stack and inline card helper classes
  - `.card-grid` density variants
- Media and list groups:
  - `.media` and media direction/interactive parts
  - `.list-group` and list item state classes
- Communication and status surfaces:
  - `.callout`
  - `.empty`
  - `.highlight`
  - `.semantic-info`
  - `.semantic-success`
  - `.semantic-warning`
  - `.semantic-danger`
- Compact identity/status surfaces:
  - `.stats`
  - `.metric-title`
  - `.tag`
  - `.chip`
  - `.badge`
  - `.chip-group`
  - `.avatar`
- Feature, process, and fact surfaces:
  - `.feature`
  - `.process`
  - `.process__step`
  - `.fact`
- Content-block primitives:
  - `.content-block`
  - `.content-block--surface`
  - `.content-block--inset`
  - `.content-block--compact`
  - `.content-block--bordered`
  - `.content-block--tint`
  - `.content-block--outline`
  - `.content-block--rail`
  - `.content-block--hero`
  - `.content-block--center`
  - `.content-block--elevated`
  - `.content-block--flat`
  - `.content-block--split`
  - `.content-block--split-reverse`
  - `.content-block--interactive`
  - `.content-block--disabled`
  - content-block element classes for headers, body, media, footer, lists, rows, key/value pairs, KPIs, grids, main, and aside
- Variant hooks:
  - `.content-block[data-variant="info"]`
  - `.content-block[data-variant="success"]`
  - `.content-block[data-variant="warning"]`
  - `.content-block[data-variant="danger"]`
  - `.content-block[data-variant="accent"]`
  - `.content-block[data-variant="neutral"]`

Source interpretation:

- Content blocks are visual composition primitives, not behavior components.
- CSS owns layout-neutral content surfaces, spacing, token aliases, hover/focus visuals, selected visuals, disabled visuals, semantic rails, media sizing, and responsive stacking.
- Consumer/application code owns link/button semantics, `alt` text, selected-state truth, disabled-state behavior, keyboard behavior, CTA execution, image loading/fallbacks, and dynamic content updates.
- Content-block selectors, local variables, composition patterns, semantic variants, responsive behavior, and docs examples are compatibility-sensitive.

## 6. Local Token Surface

Current local variable groups:

| Family | Variables | Role |
| --- | --- | --- |
| Tag/chip/badge sizing | `--content-block-tag-size-sm`, `--content-block-tag-size-md`, `--content-block-tag-size-lg` | compact label size aliases |
| Component padding/border/disabled | `--content-block-component-disabled--opacity`, `--content-block-component-pad-sm`, `--content-block-component-pad-md`, `--content-block-component-pad-lg`, `--content-block-component-border-sm` | shared content-block density and disabled styling |
| Cards | `--content-block-card-min-width`, `--content-block-card-gap`, `--content-block-card-pad`, `--content-block-card-pad-mobile` | card/grid sizing and spacing |
| Fact/process/media/empty/highlight | `--content-block-fact-pad`, `--content-block-process-gap`, `--content-block-process-step-min-width`, `--content-block-media-gap`, `--content-block-empty-pad-vertical`, `--content-block-empty-pad-horizontal`, `--content-block-empty-gap`, `--content-block-highlight-border-width`, `--content-block-highlight-pad` | component-family spacing aliases |
| Content-block layout | `--content-block-rail-width`, `--content-block-hero-pad`, `--content-block-hero-title-size`, `--content-block-hero-subtitle-size`, `--content-block-split-gap`, `--content-block-split-main`, `--content-block-split-aside`, `--content-block-grid-min`, `--content-block-grid-gap`, `--content-block-list-gap`, `--content-block-row-gap`, `--content-block-row-pad` | rail, hero, split, grid, list, and row behavior |
| Typography/KPI | `--content-block-title-size-base`, `--content-block-subtitle-size-base`, `--content-block-meta-size`, `--content-block-eyebrow-size`, `--content-block-kpi-gap`, `--content-block-kpi-value-size`, `--content-block-kpi-label-size` | local type and KPI aliases |
| Variants | `--content-block-variant-rail`, `--content-block-variant-tint`, `--content-block-variant-text`, `--content-block-variant-muted`, `--content-block-variant-border` | semantic/accent/neutral visual aliases |

Audit conclusions:

- Local content-block variables are component-owned aliases.
- They rely on primitive spacing, typography, radius, border, shadow, motion, theme surface/text/border, semantic state, accent, and focus tokens.
- Generic variant hooks inherit prior theme contrast risks.
- No local variable or token reference is approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

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

## 8. Docs and Generated Index Evidence

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

## 9. Accessibility and Behavior Boundaries

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

## 10. Risks and Future Routing

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

## 11. Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-content-blocks-audit.md` becomes the decision source for later content-block CSS fixes, docs rewrite, accessibility review, theme/contrast checks, spacing/layout classification, selector classification, migration notes, and release verification.

## 12. Validation Plan

Run after documentation updates:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
  - If this fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Read-only content-block audit scan.
- Markdown sanity checks.
- `git diff --check`

Forbidden commands:

- `pnpm run build`
- `pnpm run build:prod`
- `pnpm run docs:vds:index`
- `pnpm run inventory:selectors`
- `pnpm run consumer:scan`
- any write/regeneration command.

## 13. Implementation Log

- Added `@24vlh/vds/docs/planning/features/VDS-2100-content-blocks-audit.md`.
- Added `@24vlh/vds/docs/planning/components/vds-content-blocks-audit.md`.
- Updated `@24vlh/vds/docs/planning/master-feature-map.md`.

Validation commands:

- `pnpm run audit:tokens`
  - Passed: token usage audit passed for `43` files.
- `pnpm run audit`
  - Passed: CSS parse, class usage, token usage, docs dependency, and selector inventory checks passed.
- `pnpm run audit:dist`
  - Passed: generated artifacts are fresh with `80` CSS files checked.
- `pnpm run audit:consumers`
  - Failed only because generated consumer compatibility reports are stale:
    - `docs/planning/api/vds-consumer-compatibility.json`
    - `docs/planning/api/vds-consumer-compatibility.md`
  - Per `VDS-2100` scope, `pnpm run consumer:scan` was not run.
- Read-only content-block audit scan:
  - Recorded `1382` source CSS lines, `199` selector blocks, `242` selectors, `607` declarations, `85` custom property declaration lines, `48` unique local token names, `449` `var(...)` references, `13` hover matches, `14` `:focus-visible` matches, `2` active matches, `19` disabled-related matches, `3` selected-related matches, `1` current-related match, `0` loading matches, `10` transitions, `0` transforms, `0` animations, `0` reduced-motion blocks, `0` forced-colors blocks, `0` hard color references, `0` `!important`, `1` `color-mix(...)` use, `10` box-shadow declarations, `11` outline declarations, `7` media blocks, `31` flex display declarations, `6` grid display declarations, `46` gap declarations, `2` overflow declarations, `161` content-block-source classes, `124` public classes, `37` candidate-public classes, `3008` raw-doc lines, `30` generated docs blocks, `26` code examples, `179` generated class tokens, generated `source_css` coverage, index import presence, core import absence, and package-facing dist file presence.
- Markdown sanity checks:
  - Passed: `VDS-2100` appears as `done`, `VDS-0500` remains `in-progress`, the content-block artifact path resolves, plan/artifact scope agrees that no runtime/generated files changed, and the next recommended item is `VDS-2110 Description list audit`.
- `git diff --check`
  - Passed for changed planning files.

Notes:

- The WSL wrapper command is not available in this shell, so validation commands were run directly from `@24vlh/vds`.
