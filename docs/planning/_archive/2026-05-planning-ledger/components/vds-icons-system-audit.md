# VDS Icons System Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-2200`

This file records the icons system audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/icons.css` is the source truth for current icons CSS behavior.
- `@24vlh/vds/doc-raw/vds-icons.doc.html` and `@24vlh/agents/docs_vds/components/vds-icons.json` are docs/index evidence.
- Icons CSS provides visual glyph, sizing, loader motion, reduced-motion, container, color, badge, density, cross-component integration, transform, stroke, and opacity hooks.
- Consumer/application code owns icon choice, visible text pairing, decorative `aria-hidden`, icon-only accessible names, SVG/title strategy, button/control semantics, loading state announcements, and status text.
- Existing icon selectors, mask glyph data URIs, size scale, semantic/status glyphs, loader animations, reduced-motion behavior, containers, color utilities, badges, density layers, cross-component hooks, transforms, stroke/opacity helpers, and docs examples are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, selector inventory update, glyph pruning, or generated output refresh happens in `VDS-2200`.

## Source CSS Evidence

`@24vlh/vds/src/components/icons.css` currently has:

- Lines: `1320`.
- Selector blocks: `237`.
- Expanded selectors: `262`.
- Declarations: `472`.
- Local custom property declaration lines: `0`.
- Unique local custom property names: `0`.
- `var(...)` references: `117`.
- `!important` declarations: `3`.
- Hard-coded hex/rgb color references: `0`.
- `color-mix(...)` uses: `0`.

Mask and glyph evidence:

- `data:image/svg+xml` references: `300`.
- `mask-image` declarations: `300`.
- `-webkit-mask-image` declarations: `150`.
- `currentColor` references: `7`.
- Base inline SVG selectors include `.icon`, `.icon--mask`, `.icon-glyph`, and `.icon--filled`.
- Size classes run from `.icon--xxs` through `.icon--xl`.
- Named glyph classes cover status, navigation, actions, data/media, messaging, panels, files, and utility intents.

State and motion evidence:

- `:hover` selector matches: `0`.
- `:focus` selector matches: `0`.
- `:focus-visible` selector matches: `0`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled/`aria-disabled` selector matches: `3`.
- Animation declarations: `7`.
- `@keyframes`: `2`, named `icon-spin` and `icon-pulse`.
- Reduced-motion blocks: `1`, at `prefers-reduced-motion: reduce`.
- Forced-colors blocks: `0`.
- `!important` usage is limited to loader animation-duration modifiers and reduced-motion animation removal.

Style and layout evidence:

- Fill declarations: `5`.
- Stroke declarations: `5`.
- Width declarations: `26`.
- Height declarations: `26`.
- Display declarations: `5`.
- Inline-flex declarations: `3`.
- Position declarations: `6`.
- Z-index declarations: `0`.
- Overflow declarations: `0`.

Package-facing output:

- `@24vlh/vds/dist/components/icons.css` exists.
- `@24vlh/vds/dist/components/icons.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/icons.css`.
- `@24vlh/vds/src/core.css` does not import icons.

## Component Contract

Current icons source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Base | `.icon`, `.icon--mask`, `.icon-glyph`, `.icon--filled` | inline SVG and mask glyph foundation |
| Size scale | `.icon--xxs`, `.icon--xs`, `.icon--sm`, `.icon--md`, `.icon--lg`, `.icon--xl` | tokenized icon sizing |
| State/status glyphs | `.icon--info`, `.icon--success`, `.icon--warning`, `.icon--danger`, `.icon--help`, `.icon--neutral`, `.icon--pending`, `.icon--online`, `.icon--offline`, `.icon--blocked` | status and feedback glyphs |
| Named glyphs | navigation, action, file, media, messaging, panel, data, and utility `.icon--*` classes | mask data URI icon catalog |
| Loaders | `.icon--spinning`, `.icon--pulsing`, `.icon--loader`, `.icon--spinner`, `.icon--spinner-dots`, `.icon--pulse`, `.icon--loader-fast`, `.icon--loader-slow` | loader glyph and animation hooks |
| Containers | `.icon-container`, `.icon-container--*` | icon surface and size containers |
| Color utilities | `.icon-color--*` | current-color helper classes |
| Badges | `.icon-badge`, `.icon-badge__dot`, `.icon-badge__dot--*` | notification/status dot overlays |
| Density | `.icon--a/b/c/d`, `.icon-container--a/b/c` | density layer sizing/padding hooks |
| Surface helpers | `.surface-on-dark`, `.bg-dark`, `.surface-on-light`, `.bg-light` | auto-contrast helpers for icons and icon containers |
| Cross-component hooks | list group, media, steps, timeline, nav, alert, chip, tab, breadcrumb, accordion, tree, and table icon selectors | shared icon sizing inside other components |
| Utilities | rotate, flip, stroke, weight, outline, opacity, and disabled classes | icon transformation and visual helper API |

Source interpretation:

- Icons CSS owns visual glyph rendering, mask data URIs, SVG current-color defaults, size utilities, loader animations, reduced-motion behavior, containers, color helpers, badge overlays, density layers, transforms, stroke/opacity helpers, and cross-component sizing hooks.
- CSS does not own icon choice, accessible names, `aria-hidden`, icon-only button naming, SVG `<title>` strategy, loading announcements, status text, button/control semantics, or runtime state management.
- Icon selectors, mask glyph data URIs, size scale, semantic/status glyphs, loader animations, reduced-motion behavior, containers, color utilities, badges, density layers, cross-component hooks, transforms, stroke/opacity helpers, docs examples, and package-facing outputs are compatibility-sensitive.

## Token and Color Surface

Local token declarations:

- `src/components/icons.css` declares `0` file-local custom properties.
- It references `117` `var(...)` tokens from the broader VDS token system.

Primary referenced token groups:

- Icon sizing tokens such as `--icon-xxs`, `--icon-xs`, `--icon-sm`, `--icon-md`, `--icon-lg`, `--icon-xl`, and icon-container sizes.
- Stroke-weight tokens such as `--icon-stroke-thin`, `--icon-stroke-regular`, and `--icon-stroke-bold`.
- Surface, border, text, semantic, and on-color tokens for containers, color utilities, badges, and auto-contrast helpers.
- Spacing and radius tokens for containers and density layers.

Audit conclusions:

- Icons inherit color through `currentColor` and tokenized parent surfaces.
- Mask glyphs use inline data URI SVG masks but no hard-coded runtime hex/rgb CSS colors.
- No local variable or token reference is approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- Icon-source classes: `242`.
- Public classes: `227`.
- Candidate-public classes: `15`.

Class family counts:

| Group | Total |
| --- | ---: |
| base | `4` |
| size | `6` |
| state glyph | `10` |
| loader | `8` |
| container | `17` |
| color utility | `10` |
| badge | `8` |
| density | `4` |
| transform | `5` |
| stroke/weight/opacity/disabled | `11` |
| cross-component hooks | `5` |
| surface helpers | `4` |
| named glyph | `138` |

Candidate-public classes:

- `.accordion__icon`
- `.breadcrumb__icon`
- `.list-group__icon`
- `.table__icon`
- `.tree__icon`
- `.button--xl`
- `.icon--flip-v`
- `.icon--no-stroke`
- `.icon-container--circle-sm`
- `.icon-container--circle-lg`
- `.icon-container--muted`
- `.bg-dark`
- `.bg-light`
- `.surface-on-dark`
- `.surface-on-light`

Audit conclusions:

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- Cross-component icon hooks are compatibility-sensitive because other components and docs examples may depend on them.
- Surface helpers and button sizing hooks cross ownership boundaries and need classification before cleanup.
- Future selector pruning, glyph removal, or reclassification requires migration approval.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-icons.doc.html` has `1997` lines.
- Docs cover installation/model, base icon and size scale, state icons, UI icons, data/media icons, loader icons, icon containers, buttons/navigation integration, transforms, weights, opacity, decorative icons, icon-only labels, and usage rules.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-icons.json`
- Blocks: `11`.
- Code examples: `12`.
- Generated class tokens: `149`.
- Generated `source_css`: `[]` (`source_css: []`).

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `icon` | `1609` |
| `svg` | `2` |
| `aria` | `24` |
| `aria-hidden` | `17` |
| `aria-label` | `7` |
| `label` | `13` |
| `title` | `15` |
| `decorative` | `5` |
| `status` | `5` |
| `success` | `25` |
| `warning` | `22` |
| `danger` | `22` |
| `info` | `67` |
| `size` | `11` |
| `spinner` | `21` |
| `spin` | `31` |
| `animation` | `4` |
| `reduced-motion` | `5` |
| `forced-colors` | `0` |
| `focus` | `0` |
| `keyboard` | `0` |
| `button` | `56` |
| `icon-only` | `9` |
| `stroke` | `30` |
| `fill` | `52` |
| `currentColor` | `11` |
| `contrast` | `0` |
| `motion` | `11` |
| `badge` | `71` |

Audit conclusions:

- Generated `source_css: []` is a docs-index metadata gap and is not manually fixed here.
- Raw docs strongly cover icon usage, decorative hiding, icon-only labels, `aria-hidden`, `aria-label`, `currentColor`, loaders, and reduced-motion behavior.
- Raw docs do not mention forced-colors, focus, keyboard, or contrast directly.
- Docs examples include adjacent button, navigation, section, doc-block, spacing, and typography dependencies; later docs rewrite should separate runtime requirements from demo scaffolding.

## Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Choosing meaningful icons and pairing meaning-critical icons with visible text.
- Applying `aria-hidden="true"` to decorative icons.
- Providing accessible names for icon-only controls through `aria-label` or equivalent visible/sr-only text.
- SVG `<title>` strategy where inline SVGs carry meaning.
- Button, link, toggle, navigation, and loading semantics.
- Loading state announcements and status text.
- Avoiding color-only status communication.

CSS source currently provides:

- `currentColor`-driven visual glyphs.
- Mask data URI glyph classes.
- Size, container, color, density, transform, stroke, opacity, and badge helpers.
- Loader animations and file-local reduced-motion disable behavior.
- Cross-component icon sizing hooks.
- No file-local focus-visible or forced-colors handling.

Audit findings:

- Icon-only accessibility cannot be solved by CSS; docs and consumers must preserve naming rules.
- Loader animations have reduced-motion handling, but loading announcements remain consumer-owned.
- Forced-colors handling is absent.
- Semantic color utilities, badge dots, and status glyphs can become color-only communication without adjacent text.
- Generated docs metadata does not list `icons.css`, weakening automated docs ownership checks until a later docs-index refresh/fix.

## Motion and Forced-Colors Evidence

Motion source behavior:

- `icon-spin` rotates from `0deg` to `360deg`.
- `icon-pulse` scales and changes opacity across `0%`, `50%`, and `100%`.
- `.icon--spinning`, `.icon--pulsing`, `.icon--loader.icon--spinner`, `.icon--loader.icon--spinner-dots`, and `.icon--loader.icon--pulse` apply animations.
- `.icon--loader-fast` and `.icon--loader-slow` alter animation duration with `!important`.
- `@media (prefers-reduced-motion: reduce)` removes animations for loader/spinner/pulse classes with `!important`.

Forced-colors evidence:

- Source has `0` forced-colors blocks.
- Raw docs mention forced-colors `0` times.

Audit conclusions:

- Reduced-motion coverage exists and should remain compatibility-sensitive.
- Forced-colors review remains future work.
- The `!important` declarations appear intentional for loader motion overrides and should not be removed without later approved cleanup.

## Risks and Future Routing

- Icons is a broad public surface with many named glyph classes; glyph pruning requires migration approval.
- Mask data URI glyphs are source truth and package-facing API evidence.
- Cross-component hooks create ownership overlap with accordion, breadcrumb, list group, tables, tree, navigation, alerts, chips, tabs, media, and steps.
- Candidate-public helpers such as `.button--xl`, `.bg-dark`, and `.surface-on-*` need classification before cleanup.
- `source_css: []` is a generated docs metadata gap.
- Semantic icon colors and badge dots need theme/contrast and color-only review.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Icon CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Glyph pruning and alias policy: later approved API/migration item.
- Forced-colors and icon-only accessibility wording: later approved accessibility/docs item.
- Theme/contrast checks: later approved visual integrity item.

## Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-icons-system-audit.md` becomes the decision source for later icon CSS fixes, docs rewrite, selector classification, glyph pruning policy, accessibility review, icon-only control guidance, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.
