# VDS Guidance Blocks Audit

Last updated: `2026-05-24`

Source item: `VDS-2170`

This file records the guidance blocks component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/guidance.css` is the source truth for current guidance CSS behavior.
- `@24vlh/vds/doc-raw/vds-guidance.doc.html` and `@24vlh/agents/docs_vds/components/vds-guidance.json` are docs/index evidence.
- Guidance CSS provides static instructional and content surfaces for panels, form guidance, decision briefs, comparison blocks, strips, education cards, steps, scopes, rows, stats, checklists, semantic variants, and density behavior.
- Consumer/docs code owns semantic headings, labels, icon meaning, links/buttons inside guidance surfaces, validation or decision logic, disclosure, live updates, and runtime announcements.
- Existing guidance selectors, local variables, semantic variants, tint/rail modifiers, density behavior, checklist states, and docs examples are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, selector inventory update, or generated output refresh happens in `VDS-2170`.

## Source CSS Evidence

`@24vlh/vds/src/components/guidance.css` currently has:

- Lines: `942`.
- Selector blocks: `115`.
- Expanded selectors: `190`.
- Declarations: `465`.
- Custom property declaration lines: `52`.
- Unique local custom property names: `16`.
- `var(...)` references: `332`.
- `!important` declarations: `1`.
- Hard-coded color references: `0`.
- `color-mix(...)` uses: `0`.

State, motion, and semantic evidence:

- `:hover` selector matches: `0`.
- `:focus` selector matches: `0`.
- `:focus-visible` selector matches: `0`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled/`aria-disabled` selector matches: `0`.
- Selected/`aria-selected` selector matches: `0`.
- `.is-done` checklist matches: `1`.
- `data-variant` selector groups: `6`.
- Semantic-name matches: `57`.
- Transition declarations: `0`.
- Transform declarations: `0`.
- Animation declarations: `0`.
- `@keyframes`: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Layout and visual evidence:

- Media blocks: `1`, at `max-width: 720px`.
- Grid display declarations: `20`.
- Flex display declarations: `12`.
- Inline-flex declarations: `7`.
- Gap declarations: `37`.
- Padding-related declarations: `31`.
- Position declarations: `20`.
- Z-index declarations: `0`.
- Overflow declarations: `3`.
- Width declarations: `11`.
- Height declarations: `8`.
- Grid-template-columns declarations: `7`.
- Box-shadow declarations: `7`.
- Outline declarations: `0`.
- Border-related declarations: `46`.
- Border-radius declarations: `22`.
- Background/background-color declarations: `37`.
- Color declarations: `33`.
- Opacity declarations: `0`.
- Cursor declarations: `0`.
- Pointer-events declarations: `0`.
- Letter-spacing declarations: `10`.

Package-facing output:

- `@24vlh/vds/dist/components/guidance.css` exists.
- `@24vlh/vds/dist/components/guidance.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/guidance.css`.
- `@24vlh/vds/src/core.css` does not import guidance.

## Component Contract

Current guidance source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root | `[data-vds-guidance]`, `.vds-guidance` | guidance-local variables |
| Shared variant layer | `:where(...)` guidance surfaces with `data-variant` values | semantic rail, tint, icon, and surface aliases |
| Guidance panel | `.guidance`, `.guidance--*`, `.guidance__*` | core do/don't/how/why/expect/recommend panel |
| Form guidance | `.guidance-field`, `.guidance-field--plain`, `.guidance-field__*` | form-adjacent instructional hints and frames |
| Decision brief | `.guidance-brief`, `.guidance-brief--*`, `.guidance-brief__*` | structured decision and evidence brief |
| Stats | `.guidance-stats`, `.guidance-stat`, `.guidance-stat--tint`, `.guidance-stat__*` | compact supporting metric/stat surfaces |
| Comparison | `.guidance-compare`, `.guidance-compare__*` | definition/evidence/anti-pattern comparison surface |
| Strip | `.guidance-strip`, `.guidance-strip--tint`, `.guidance-strip__*` | inline guidance callout and action row |
| Cards/grid | `.guidance-grid`, `.guidance-card`, `.guidance-card--*`, `.guidance-card__*` | education card layout |
| Rows | `.guidance-row`, `.guidance-row--tint`, `.guidance-row__*` | guidance row/details/action surface |
| Steps | `.guidance-steps`, `.guidance-step`, `.guidance-step--*`, `.guidance-step__*` | progressive instruction steps |
| Scope | `.guidance-scope`, `.guidance-scope__item`, `.guidance-scope__item--*`, `.guidance-scope__*` | scope checklist/definition surface |
| Checklist | `.guidance-checklist`, `.is-done` | checklist visuals and done marker |
| Density | `[data-density="compact"]` guidance selectors | compact guidance density |

Source interpretation:

- Guidance CSS provides static instructional and content surfaces, not runtime behavior.
- CSS owns guidance layout, semantic variant aliases, rail/tint styling, density behavior, list/checklist visuals, and responsive strip stacking.
- Consumer/docs code owns semantic headings, labels, icon meaning, links/buttons inside guidance surfaces, validation or decision logic, and any runtime announcements.

## Local Token Surface

Current local variables:

| Variable | Role |
| --- | --- |
| `--guidance-padding-sm` | compact guidance padding |
| `--guidance-padding-md` | default guidance padding |
| `--guidance-padding-lg` | large guidance padding |
| `--guidance-gap` | default guidance gap |
| `--guidance-radius` | guidance radius alias |
| `--guidance-border-width` | rail border width |
| `--guidance-shadow` | guidance elevation alias |
| `--guidance-bg` | guidance background alias |
| `--guidance-outline` | guidance border/outline alias |
| `--guidance-rail` | rail/accent alias |
| `--guidance-tint` | tinted background alias |
| `--guidance-text` | guidance body text alias |
| `--guidance-title` | guidance title text alias |
| `--guidance-muted` | guidance muted text alias |
| `--guidance-icon` | guidance icon color alias |
| `--guidance-on` | on-accent alias |

Audit conclusions:

- Local guidance variables are component-owned aliases for spacing, rail, tint, typography color, and surface styling.
- They rely on primitive spacing, radius, border, shadow, typography, and theme semantic color tokens.
- Shared `:where(...)` variant rules reassign the semantic guidance aliases across multiple guidance surfaces.
- No local variable or token reference is approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- Guidance-source classes: `89`.
- Public classes: `80`.
- Candidate-public classes: `9`.

Class family counts:

| Group | Total |
| --- | ---: |
| root | `1` |
| panel | `17` |
| field | `10` |
| brief | `12` |
| compare | `5` |
| strip | `5` |
| card/grid | `8` |
| steps | `7` |
| scope | `6` |
| row | `11` |
| stats | `5` |
| checklist | `1` |

Candidate-public classes:

- `.vds-guidance`
- `.guidance-brief--tint`
- `.guidance-card--tint`
- `.guidance-field__meta`
- `.guidance-row--tint`
- `.guidance-scope__item--tint`
- `.guidance-stat--tint`
- `.guidance-step--tint`
- `.guidance-strip--tint`

Audit conclusions:

- Candidate-public status reflects current docs coverage and selector classification, not permission to remove or rename source-defined selectors.
- The shared `:where(...)` variant layer is broad and compatibility-sensitive.
- Future selector pruning or reclassification requires migration approval.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-guidance.doc.html` has `832` lines.
- Docs cover overview/dependencies, guidance panels, form guidance blocks, decision briefs, definition/evidence/anti-pattern comparison blocks, guidance strips, education cards, scope checklists, guidance rows, progression steps, and usage/accessibility rules.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-guidance.json`
- Blocks: `11`.
- Code examples: `11`.
- Generated class tokens: `97`.
- Generated `source_css`: `base.css`, `guidance.css`, `icons.css`, `layout.css`, `primitives.css`, `themes/graphite.css`, and `typography.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `guidance` | `281` |
| `do` | `183` |
| `do not` | `9` |
| `how` | `6` |
| `why` | `7` |
| `expect` | `9` |
| `recommend` | `7` |
| `decision` | `16` |
| `brief` | `29` |
| `compare` | `17` |
| `strip` | `8` |
| `card` | `24` |
| `scope` | `19` |
| `checklist` | `4` |
| `step` | `28` |
| `row` | `40` |
| `field` | `45` |
| `form` | `29` |
| `stat` | `17` |
| `rail` | `13` |
| `variant` | `34` |
| `aria` | `34` |
| `role` | `0` |
| `label` | `41` |
| `icon` | `42` |
| `keyboard` | `0` |
| `focus` | `2` |
| `focus-visible` | `0` |
| `responsive` | `0` |
| `mobile` | `0` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |
| `contrast` | `1` |

Audit conclusions:

- Generated `source_css` metadata is present and includes `guidance.css`.
- Raw docs mention `aria`, labels, icons, variants, rails, decision briefs, fields, steps, rows, and stats.
- Raw docs do not mention role, keyboard, focus-visible, hover, responsive/mobile, reduced-motion, or forced-colors.
- Contrast is mentioned only once despite semantic rail/tint and theme-dependent guidance colors.
- Docs examples include adjacent component and docs presentation dependencies; later docs rewrite should separate runtime requirements from demo scaffolding.

## Accessibility and Behavior Boundaries

Consumer/docs code remains responsible for:

- Semantic headings and list structure inside guidance surfaces.
- Meaningful labels and text for icons, rails, and state markers.
- Link and button semantics for any interactive controls placed in guidance surfaces.
- Validation, decision logic, disclosure, live updates, and runtime announcements.
- Avoiding color-only communication for do/don't, warning, danger, success, and checklist states.
- Choosing appropriate landmarks, labels, or descriptions when guidance is critical to completing a task.

CSS source currently provides:

- Static guidance layouts and density behavior.
- Semantic variant rail/tint aliases.
- Decorative list bullets, rails, and checklist markers.
- Responsive strip stacking at `max-width: 720px`.
- No file-local focus, hover, active, disabled, selected, transition, animation, reduced-motion, or forced-colors behavior.

Audit findings:

- Guidance is static CSS, but icons/rails/semantic variants can become color-only communication if text is weak.
- Forced-colors handling is absent.
- Raw docs do not mention several accessibility and responsive coverage areas.
- Semantic and tint colors inherit contrast risks from prior theme audits.
- The shared `:where(...)` variant layer must be treated as cascade-sensitive.

## Responsive and Motion Evidence

Responsive source behavior:

- One `max-width: 720px` block.
- `.guidance-strip` becomes a single-column grid at that breakpoint.
- Other guidance surfaces rely on intrinsic layout and surrounding containers.

Motion source behavior:

- Source has `0` transition declarations.
- Source has `0` transform declarations.
- Source has `0` animation declarations.
- Source has `0` `@keyframes`.
- No file-local `prefers-reduced-motion` block is present.
- No file-local `forced-colors` block is present.

Audit conclusions:

- Guidance source behavior is mostly static, but responsive behavior still needs visual QA.
- Reduced-motion absence is expected for current source because no local motion is present.
- Forced-colors review remains future work.

## Risks and Future Routing

- Guidance is a broad content component surface; selector pruning or component splitting requires migration approval.
- Shared `:where(...)` semantic rules affect many guidance sub-surfaces and need careful cascade review before cleanup.
- Guidance overlaps conceptually with feedback, forms, content blocks, and docs-only authoring surfaces, but remains a separate package-facing component file.
- Color rails, icons, checklist markers, and tint surfaces need theme/contrast review.
- No local forced-colors handling exists.
- Generated docs metadata is present, but docs examples still include demo dependencies and incomplete accessibility/responsive coverage.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Guidance CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Semantic guidance and accessibility wording: later approved accessibility/docs item.
- Responsive screenshots and visual QA: later approved responsive/visual verification item.
- Theme/contrast checks: later approved visual integrity item.

