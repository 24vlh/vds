# VDS-2060 Badge and Tag Component Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2060`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2060-badge-tag-component-audit.md`

## 1. Goal

Create the badge/tag component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only badge/tag contract: compact status labels, semantic variants, soft/solid/outline modes, icon/dot affordances, removable tag controls, interactive tag states, density/shape modifiers, count badges, wrapping guidance, selector classifications, docs/index metadata, package-facing dist presence, and accessibility/theming risks before any badge/tag CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/badge-tag.css` selector, token, semantic variant, style mode, size, shape, count, icon, dot, remove-control, disabled, focus, and wrapping evidence.
- Record public and candidate-public selector inventory evidence for the badge/tag class surface.
- Record raw docs and generated docs-index metadata for `vds-badge-tag`.
- Record package-facing `dist/components/badge-tag.css` and `.min.css` presence.
- Add a badge/tag component audit artifact for later CSS fixes, docs rewrite, accessibility review, theme/contrast checks, selector classification, pressed/disabled guidance, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2060` is done, and the next recommended item is `VDS-2070`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding JavaScript filtering, selection, removable-chip, count-update, state-management, or keyboard behavior.
- Adding pressed selectors, forced-colors handling, reduced-motion handling, responsive screenshots, visual checks, selector reclassification, docs rewrites, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local standards docs:
  - `@24vlh/agents/docs_md/design/patterns/button.md`
  - `@24vlh/agents/docs_md/design/w3c/wcag-2-2-quick-reference.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-badge-tag.json`
- Repo files:
  - `@24vlh/vds/src/components/badge-tag.css`
  - `@24vlh/vds/doc-raw/vds-badge-tag.doc.html`
  - `@24vlh/vds/dist/components/badge-tag.css`
  - `@24vlh/vds/dist/components/badge-tag.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/badge-tag.css` has `262` lines.
- Selector blocks: `27`.
- Expanded selectors: `45`.
- Declarations: `136`.
- Custom property declarations: `75`.
- Unique `--badge-tag-*` local token names: `17`.
- `var(...)` references: `115`.
- `!important` declarations: `0`.
- Hard-coded hex colors: `0`.
- `rgb(...)` / `rgba(...)` colors: `0`.

Media, interaction, and state evidence:

- Media blocks: `0`.
- `:hover` selectors: `3`.
- `:focus-visible` selectors: `3`.
- `:active` selectors: `0`.
- Disabled selector matches: `2`.
- Pressed selector matches: `0`.
- Transition declarations: `2`.
- Transform declarations: `0`.
- Animation declarations: `0`.
- `@keyframes`: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Layout and style evidence:

- `white-space: nowrap` declarations: `1`.
- `pointer-events` declarations: `1`.
- Cursor declarations: `3`.
- `box-shadow` declarations: `2`.
- `color-mix(...)` uses: `1`.
- Wrapping is handled by surrounding layout utilities and docs examples, not by component media queries.

Package-facing output evidence:

- `@24vlh/vds/dist/components/badge-tag.css` exists.
- `@24vlh/vds/dist/components/badge-tag.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/badge-tag.css`.
- `@24vlh/vds/src/core.css` does not import badge/tag.

## 5. Component Contract

Current badge/tag source surfaces:

- Root/local-token scopes:
  - `[data-vds-badge-tag]`
  - `.vds-badge-tag`
- Base:
  - `.badge-tag`
- Parts and aliases:
  - `.badge-tag__dot`
  - `.badge-tag__icon`
  - `.badge-tag__remove`
  - `.badge__dot`
  - `.badge__icon`
  - `.badge__remove`
- Size modifiers:
  - `.badge-tag--xs`
  - `.badge-tag--sm`
  - `.badge-tag--lg`
- Shape/count modifiers:
  - `.badge-tag--square`
  - `.badge-tag--sharp`
  - `.badge-tag--circle`
  - `.badge-tag--count`
- Interactive tag modifier:
  - `.badge-tag--tag`
- Style modes:
  - `.badge-tag--outline`
  - `.badge-tag--solid`
- Semantic variants:
  - `.badge-tag--accent`
  - `.badge-tag--success`
  - `.badge-tag--info`
  - `.badge-tag--warning`
  - `.badge-tag--danger`
  - `.badge-tag--neutral`
  - `.badge-tag--mono`

Source interpretation:

- Badge/tag is a compact label, status, count, and tag primitive.
- CSS provides visual semantics, density, shape, focus treatment for remove/tag controls, and disabled styling for interactive tags.
- Consumer/application code owns filtering, selection, removal, count updates, pressed state, keyboard behavior, and live/state announcements.
- Badge/tag classes, legacy aliases, and local variables are compatibility-sensitive.

## 6. Local Token Surface

Current local token names:

- `--badge-tag-bg`
- `--badge-tag-border`
- `--badge-tag-border-width`
- `--badge-tag-circle-size`
- `--badge-tag-dot-size`
- `--badge-tag-font-size`
- `--badge-tag-font-weight`
- `--badge-tag-gap`
- `--badge-tag-icon-size`
- `--badge-tag-padding-x`
- `--badge-tag-padding-y`
- `--badge-tag-radius`
- `--badge-tag-remove-size`
- `--badge-tag-solid-bg`
- `--badge-tag-solid-border`
- `--badge-tag-solid-text`
- `--badge-tag-text`

Audit conclusions:

- Local variables are component-owned aliases.
- They pull from primitive spacing, radius, border, typography, motion, focus, surface, text, semantic color, and theme tokens.
- They are not approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

Selector inventory evidence:

- `25` badge/tag source classes are defined in selector inventory.
- Classification totals:
  - `21` public.
  - `4` candidate-public.
- Class family counts:
  - root: `1`.
  - base: `1`.
  - parts/aliases: `6`.
  - size: `3`.
  - shape/count: `4`.
  - interaction: `1`.
  - mode: `2`.
  - semantic color: `7`.

Candidate-public classes:

- `.badge__dot`
- `.badge__icon`
- `.badge__remove`
- `.vds-badge-tag`

Audit conclusions:

- Candidate-public status reflects current docs coverage, not permission to remove or rename source-defined selectors.
- `.badge__dot`, `.badge__icon`, and `.badge__remove` are legacy/short aliases and must remain compatibility-sensitive until later approved selector classification or migration work.

## 8. Docs and Generated Index Evidence

Raw docs evidence:

- `@24vlh/vds/doc-raw/vds-badge-tag.doc.html` has `311` lines.
- Raw docs cover semantic variants, soft/outline/solid treatments, count/icon badges, interactive tags, removable tags, status pills, density/shape variants, usage guidance, and accessibility rules.
- Raw docs examples include `button`-based tags, remove buttons, `aria-label`, decorative dots/icons with `aria-hidden`, and guidance to avoid color-only status.

Generated index evidence:

- `@24vlh/agents/docs_vds/components/vds-badge-tag.json`
- Blocks: `8`.
- Code examples: `6`.
- Generated class tokens: `29`.
- Generated `source_css`:
  - `badge-tag.css`
  - `base.css`
  - `primitives.css`
  - `typography.css`

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `badge` | `171` |
| `tag` | `171` |
| `status` | `7` |
| `solid` | `12` |
| `outline` | `10` |
| `remove` | `7` |
| `aria` | `12` |
| `label` | `9` |
| `icon` | `8` |
| `dot` | `9` |
| `count` | `6` |
| `wrap` | `9` |
| `focus` | `1` |
| `contrast` | `1` |
| `pressed` | `0` |
| `aria-pressed` | `0` |
| `aria-disabled` | `0` |
| `keyboard` | `0` |
| `disabled` | `0` |
| `responsive` | `0` |
| `mobile` | `0` |
| `forced-colors` | `0` |
| `reduced-motion` | `0` |

Audit conclusions:

- Generated badge/tag `source_css` metadata is present.
- Generated `source_css` does not list a theme file even though semantic variants rely on theme color tokens.
- Docs cover accessibility responsibilities for labels, dots/icons, and remove controls, but do not describe pressed, disabled, keyboard, forced-colors, responsive/mobile, or reduced-motion behavior directly.

## 9. Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Tag/filter state and selection state.
- `aria-pressed` when tags behave as toggles.
- `aria-disabled` semantics and any state sync beyond CSS disabled styling.
- Remove-button click behavior and focus management after removal.
- Accessible names for icon-only badges and remove controls.
- Text labels or nearby explanatory text for critical status.
- Count updates and live announcements when counts change.
- Keyboard behavior for interactive tags, especially when tags are part of filter groups or toolbars.

CSS source currently provides:

- Compact label/tag layout and no-wrap behavior.
- Dot, icon, and remove-control sizing.
- Remove-control hover and focus-visible styles.
- Tag hover and focus-visible styles.
- Disabled visual/pointer handling for `.badge-tag--tag`.
- Soft, solid, and outline visual modes.
- Semantic and mono/neutral color variants.
- Count/circle shape behavior.

Audit findings:

- Pressed state is not represented in source selectors.
- Raw docs do not mention `aria-pressed`, `aria-disabled`, keyboard behavior, or disabled behavior.
- No forced-colors block.
- No reduced-motion block despite transitions.
- Long-label wrapping/overflow remains a docs/consumer concern because source uses `white-space: nowrap`.

## 10. Risks and Future Routing

- Badge/tag state cannot be solved by CSS alone; filtering, selection, removal, count updates, and pressed state remain consumer/application responsibilities.
- Dot and icon affordances are visual; critical status must still be paired with readable text and not rely on color alone.
- Semantic and solid variants inherit contrast risks from prior theme audits, especially warning/danger and mono/on-color pairs.
- Legacy `.badge__*` aliases are candidate-public and require migration approval before cleanup.
- `white-space: nowrap` can cause long-label overflow; docs already warn against long labels, and source changes remain later work.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Badge/tag CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Generated docs metadata refresh: later approved docs-index item.
- Selector classification changes: later approved selector inventory item.
- Theme/contrast checks: later approved visual/contrast QA items.
- Pressed/disabled guidance: later approved accessibility/docs item.
- Dist refresh: later approved release/build-output item.

## 11. Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-badge-tag-component-audit.md` becomes the decision source for later badge/tag CSS fixes, docs rewrite, accessibility review, theme/contrast checks, selector classification, pressed/disabled guidance, migration notes, and release verification.

## 12. Validation Plan

Run after documentation updates:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
  - If this fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Read-only badge/tag audit scan.
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

- Added `@24vlh/vds/docs/planning/features/VDS-2060-badge-tag-component-audit.md`.
- Added `@24vlh/vds/docs/planning/components/vds-badge-tag-component-audit.md`.
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
  - Per `VDS-2060` scope, `pnpm run consumer:scan` was not run.
- Read-only badge/tag audit scan:
  - Confirmed `262` source CSS lines, `27` selector blocks, `45` selectors, `136` declarations, `75` custom property declarations, `17` unique `--badge-tag-*` tokens, `115` `var(...)` references, `0` media blocks, `3` `:hover` selectors, `3` `:focus-visible` selectors, `0` `:active` selectors, `2` disabled selector matches, `0` pressed selector matches, `2` transition declarations, `0` transforms, `0` animations/keyframes, `0` reduced-motion blocks, `0` forced-colors blocks, `1` `white-space: nowrap`, `1` `pointer-events`, `3` cursor declarations, `2` box-shadow declarations, `1` `color-mix(...)`, `0` hard-coded hex/rgb colors, `0` `!important`, `25` badge/tag classes, `21` public classes, `4` candidate-public classes, `311` raw-doc lines, `8` generated docs blocks, `6` code examples, `29` generated class tokens, non-empty generated `source_css`, index import presence, core import absence, and package-facing dist file presence.
- Markdown sanity checks:
  - Passed: `VDS-2060` appears as `done`, `VDS-0500` remains `in-progress`, the badge/tag artifact path resolves, plan/artifact scope agrees that no runtime/generated files changed, and the next recommended item is `VDS-2070 Buttons component audit`.
- `git diff --check`
  - Passed for changed planning files.

Notes:

- The WSL wrapper command is not available in this shell, so validation commands were run directly from `@24vlh/vds`.
