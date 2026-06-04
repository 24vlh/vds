# VDS-2170 Guidance Blocks Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2170`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2170-guidance-blocks-audit.md`

## 1. Goal

Create the guidance blocks component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only guidance contract: panels, form guidance, decision briefs, comparison blocks, strips, education cards, steps, scopes, rows, stats, checklists, semantic variants, density behavior, docs/index metadata, package-facing dist presence, and accessibility/theming risks before any guidance CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/guidance.css` selector, token, panel, field, brief, compare, strip, card, step, scope, row, stat, checklist, semantic variant, density, responsive, theme, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the guidance class surface.
- Record raw docs and generated docs-index metadata for `vds-guidance`.
- Record package-facing `dist/components/guidance.css` and `.min.css` presence.
- Add a guidance blocks audit artifact for later CSS fixes, docs rewrite, selector classification, accessibility review, semantic guidance policy, forced-colors cleanup, theme/contrast checks, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2170` is done, and the next recommended item is `VDS-2180`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding JavaScript behavior, decision logic, validation behavior, disclosure, live updates, runtime interaction behavior, announcements, focus management, or keyboard behavior.
- Adding forced-colors handling, responsive screenshots, visual checks, selector reclassification, docs rewrites, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-guidance.json`
- Repo files:
  - `@24vlh/vds/src/components/guidance.css`
  - `@24vlh/vds/doc-raw/vds-guidance.doc.html`
  - `@24vlh/vds/dist/components/guidance.css`
  - `@24vlh/vds/dist/components/guidance.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/guidance.css` has `942` lines.
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

Layout and style evidence:

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

Package-facing output evidence:

- `@24vlh/vds/dist/components/guidance.css` exists.
- `@24vlh/vds/dist/components/guidance.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/guidance.css`.
- `@24vlh/vds/src/core.css` does not import guidance.

## 5. Component Contract

Current guidance source surfaces:

- Root/local variables:
  - `[data-vds-guidance]`
  - `.vds-guidance`
- Shared semantic variant layer:
  - `:where(.guidance, .guidance-card, .guidance-strip, .guidance-step, .guidance-field, .guidance-scope__item, .guidance-brief, .guidance-row, .guidance-compare__item, .guidance-stat)`
  - `[data-variant="info"]`
  - `[data-variant="success"]`
  - `[data-variant="warning"]`
  - `[data-variant="danger"]`
  - `[data-variant="accent"]`
  - `[data-variant="neutral"]`
- Guidance panel:
  - `.guidance`
  - `.guidance--compact`
  - `.guidance--tint`
  - `.guidance--do`
  - `.guidance--dont`
  - `.guidance--how`
  - `.guidance--why`
  - `.guidance--expect`
  - `.guidance--recommend`
  - `.guidance__header`
  - `.guidance__icon`
  - `.guidance__title`
  - `.guidance__meta`
  - `.guidance__tag`
  - `.guidance__body`
  - `.guidance__list`
  - `.guidance__footer`
- Guidance field:
  - `.guidance-field`
  - `.guidance-field--plain`
  - `.guidance-field__hint`
  - `.guidance-field__hint--plain`
  - `.guidance-field__frame`
  - `.guidance-field__kicker`
  - `.guidance-field__title`
  - `.guidance-field__text`
  - `.guidance-field__meta`
  - `.guidance-field__list`
- Decision brief and stats:
  - `.guidance-brief`
  - `.guidance-brief--tint`
  - `.guidance-brief--rail`
  - `.guidance-brief__header`
  - `.guidance-brief__kicker`
  - `.guidance-brief__title`
  - `.guidance-brief__meta`
  - `.guidance-brief__grid`
  - `.guidance-brief__block`
  - `.guidance-brief__label`
  - `.guidance-brief__text`
  - `.guidance-brief__list`
  - `.guidance-stats`
  - `.guidance-stat`
  - `.guidance-stat--tint`
  - `.guidance-stat__value`
  - `.guidance-stat__label`
- Comparison, strip, cards, and rows:
  - `.guidance-compare`
  - `.guidance-compare__item`
  - `.guidance-compare__label`
  - `.guidance-compare__title`
  - `.guidance-compare__list`
  - `.guidance-strip`
  - `.guidance-strip--tint`
  - `.guidance-strip__label`
  - `.guidance-strip__body`
  - `.guidance-strip__actions`
  - `.guidance-grid`
  - `.guidance-card`
  - `.guidance-card--tint`
  - `.guidance-card--rail`
  - `.guidance-card__eyebrow`
  - `.guidance-card__title`
  - `.guidance-card__body`
  - `.guidance-card__footer`
  - `.guidance-row`
  - `.guidance-row--tint`
  - `.guidance-row__header`
  - `.guidance-row__title`
  - `.guidance-row__meta`
  - `.guidance-row__labels`
  - `.guidance-row__label`
  - `.guidance-row__glance`
  - `.guidance-row__details`
  - `.guidance-row__detail`
  - `.guidance-row__actions`
- Steps, scope, checklist, and density:
  - `.guidance-steps`
  - `.guidance-step`
  - `.guidance-step--tint`
  - `.guidance-step--rail`
  - `.guidance-step__index`
  - `.guidance-step__title`
  - `.guidance-step__body`
  - `.guidance-scope`
  - `.guidance-scope__item`
  - `.guidance-scope__item--tint`
  - `.guidance-scope__item--rail`
  - `.guidance-scope__label`
  - `.guidance-scope__list`
  - `.guidance-checklist`
  - `.is-done`
  - `[data-density="compact"]`

Source interpretation:

- Guidance CSS provides static instructional and content surfaces, not runtime behavior.
- CSS owns guidance layout, semantic variant aliases, rail/tint styling, density behavior, list/checklist visuals, and responsive strip stacking.
- Consumer/docs code owns semantic headings, labels, icon meaning, links/buttons inside guidance surfaces, validation or decision logic, and any runtime announcements.
- Guidance selectors, local variables, semantic variants, tint/rail modifiers, density hooks, checklist states, docs examples, and package-facing outputs are compatibility-sensitive.

## 6. Local Token Surface

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

## 7. Selector/API Evidence

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

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- The shared `:where(...)` variant layer is broad and compatibility-sensitive.
- Future selector pruning or reclassification requires migration approval.

## 8. Docs and Generated Index Evidence

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

## 9. Accessibility and Behavior Boundaries

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

## 10. Risks and Future Routing

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

## 11. Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-guidance-blocks-audit.md` becomes the decision source for later guidance CSS fixes, docs rewrite, selector classification, accessibility review, semantic guidance policy, forced-colors cleanup, theme/contrast checks, migration notes, and release verification.

## 12. Validation Plan

Approved validation commands:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
- Read-only guidance audit scan.
- Markdown sanity checks for master-map status, artifact path, no runtime/source/generated changes, and next recommended item.
- `git diff --check` for changed planning files.

Forbidden commands for this item:

- `pnpm run build`
- `pnpm run build:prod`
- `pnpm run docs:vds:index`
- `pnpm run inventory:selectors`
- `pnpm run consumer:scan`

## 13. Post-Implementation Validation Log

- `pnpm run audit:tokens` passed: token usage audit passed for `43` files.
- `pnpm run audit` passed: CSS parse, class, token, doc dependency, and selector inventory freshness checks passed.
- `pnpm run audit:dist` was attempted with a `120s` timeout. It started `node static/js/check-generated-artifacts.js --check` but did not complete before timing out. No write/regeneration command was run.
- `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `.md` are stale; per plan, `pnpm run consumer:scan` was not run.
- Read-only guidance audit scan confirmed CSS counts, local variables, selector inventory totals, docs/index evidence, import/package evidence, semantic variants, density hooks, responsive behavior, motion/focus gap, and forced-colors gap.
- Markdown sanity checks passed after this validation log update.
- `git diff --check` for changed planning files passed.
