# VDS Badge and Tag Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-2060`

This file records the badge/tag component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/badge-tag.css` is the source truth for current badge/tag CSS behavior.
- `@24vlh/vds/doc-raw/vds-badge-tag.doc.html` and `@24vlh/agents/docs_vds/components/vds-badge-tag.json` are docs/index evidence.
- The current implementation is a pure CSS label, status, count, and tag primitive.
- Consumer/application code owns tag/filter state, `aria-pressed` when tags act as toggles, `aria-disabled` semantics, remove-button behavior, accessible labels for icon-only badges, status text, count updates, and keyboard/focus behavior.
- Existing badge/tag classes, semantic modifiers, mode modifiers, size/shape modifiers, remove/dot/icon aliases, disabled styles, focus styles, and local variables are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, or generated output refresh happens in `VDS-2060`.

## Source CSS Evidence

`@24vlh/vds/src/components/badge-tag.css` currently has:

- Lines: `262`.
- Selector blocks: `27`.
- Expanded selectors: `45`.
- Declarations: `136`.
- Custom property declarations: `75`.
- Unique `--badge-tag-*` local token names: `17`.
- `var(...)` references: `115`.
- `!important` declarations: `0`.
- Hard-coded hex colors: `0`.
- `rgb(...)` / `rgba(...)` colors: `0`.

Media and interaction evidence:

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
- Remove and tag focus styles use `box-shadow` with `--focus-ring-color`.
- Disabled tag styling uses opacity, `cursor: not-allowed`, and `pointer-events: none`.

Package-facing output:

- `@24vlh/vds/dist/components/badge-tag.css` exists.
- `@24vlh/vds/dist/components/badge-tag.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/badge-tag.css`.
- `@24vlh/vds/src/core.css` does not import badge/tag.

## Component Contract

Current badge/tag source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Scope root | `[data-vds-badge-tag]`, `.vds-badge-tag` | activate badge/tag-local variables |
| Base | `.badge-tag` | compact label/tag primitive |
| Parts | `.badge-tag__dot`, `.badge-tag__icon`, `.badge-tag__remove` | visual dot, icon slot, and remove control |
| Legacy aliases | `.badge__dot`, `.badge__icon`, `.badge__remove` | shorter aliases for badge parts |
| Size | `.badge-tag--xs`, `.badge-tag--sm`, `.badge-tag--lg` | density/size variants |
| Shape/count | `.badge-tag--square`, `.badge-tag--sharp`, `.badge-tag--circle`, `.badge-tag--count` | rectangular, sharp, circular, and count treatments |
| Interaction | `.badge-tag--tag` | interactive tag/filter visual behavior |
| Modes | `.badge-tag--outline`, `.badge-tag--solid` | outline and solid treatments |
| Semantic color | `.badge-tag--accent`, `.badge-tag--success`, `.badge-tag--info`, `.badge-tag--warning`, `.badge-tag--danger`, `.badge-tag--neutral`, `.badge-tag--mono` | semantic/team/status variants |

Source interpretation:

- Badge/tag is a visual primitive, not a state-management runtime.
- CSS provides compact no-wrap labels, modes, semantic colors, focus styles for tag/remove controls, and disabled visuals for interactive tags.
- Consumer/application code owns pressed state, filter state, removal behavior, keyboard behavior, and dynamic count/status updates.

## Local Token Surface

Current local variable groups:

| Family | Variables | Role |
| --- | --- | --- |
| Surface | `--badge-tag-bg`, `--badge-tag-border`, `--badge-tag-text` | soft/default variant colors |
| Solid mode | `--badge-tag-solid-bg`, `--badge-tag-solid-border`, `--badge-tag-solid-text` | solid variant colors |
| Shape/rhythm | `--badge-tag-radius`, `--badge-tag-border-width`, `--badge-tag-padding-y`, `--badge-tag-padding-x`, `--badge-tag-gap` | spacing, border, and shape |
| Typography | `--badge-tag-font-size`, `--badge-tag-font-weight` | label scale and emphasis |
| Affordances | `--badge-tag-dot-size`, `--badge-tag-icon-size`, `--badge-tag-remove-size`, `--badge-tag-circle-size` | dot/icon/remove/count dimensions |

Top referenced upstream token groups:

- Motion/focus: `--transition-fast`, `--focus-ring-color`.
- Spacing/radius/border: `--space-*`, `--radius-pill`, `--radius-sm`, `--radius-none`, `--border-width`.
- Typography: `--text-xxs`, `--text-xs`, `--text-sm`, `--font-weight-semibold`.
- Theme surfaces/text: `--color-surface`, `--color-surface-subtle`, `--color-surface-hover`, `--color-border-subtle`, `--color-text`.
- Theme semantic colors: `--color-success*`, `--color-info*`, `--color-warning*`, `--color-danger*`, `--color-mono*`, and state-soft aliases.

Audit conclusions:

- Local variables are component-owned aliases.
- They are not approved for rename, removal, promotion, or deprecation in this item.
- Future semantic cleanup must coordinate with theme contrast work and docs rewrite work.

## Selector Inventory Evidence

Selector inventory totals:

- Badge/tag source classes: `25`.
- Public classes: `21`.
- Candidate-public classes: `4`.

Class family counts:

| Group | Total |
| --- | ---: |
| root | `1` |
| base | `1` |
| parts/aliases | `6` |
| size | `3` |
| shape/count | `4` |
| interaction | `1` |
| mode | `2` |
| semantic color | `7` |

Candidate-public classes:

- `.badge__dot`
- `.badge__icon`
- `.badge__remove`
- `.vds-badge-tag`

Audit conclusions:

- Candidate-public status reflects current docs coverage, not permission to remove or rename source-defined selectors.
- `.badge__dot`, `.badge__icon`, and `.badge__remove` are legacy/short aliases and should be classified before later cleanup or migration decisions.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-badge-tag.doc.html` has `311` lines.
- Docs cover semantic variants, soft/outline/solid treatments, count/icon badges, interactive tags, removable tags, status pills, density/shape variants, usage guidance, and accessibility rules.
- Docs include guidance for `button`-based tags, separate remove buttons, `aria-label`, decorative dots/icons with `aria-hidden`, short labels, and avoiding color-only status.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-badge-tag.json`
- Blocks: `8`.
- Code examples: `6`.
- Generated class tokens: `29`.
- Generated `source_css`: `badge-tag.css`, `base.css`, `primitives.css`, and `typography.css`.

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
- Docs cover labels, dots/icons, remove controls, and color-only cautions, but do not describe pressed, disabled, keyboard, forced-colors, responsive/mobile, or reduced-motion behavior directly.

## Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Tag/filter selection state.
- `aria-pressed` when tags behave as toggles.
- `aria-disabled` semantics and state synchronization.
- Remove-button click behavior and focus placement after removal.
- Accessible names for icon-only badges and remove controls.
- Text labels or nearby explanatory text for critical status.
- Count updates and live announcements when counts change.
- Keyboard behavior for interactive tags, especially in filter groups or toolbars.

CSS source currently provides:

- Compact inline-flex label/tag layout.
- No-wrap label behavior.
- Dot, icon, and remove-control sizing.
- Remove-control hover and focus-visible styles.
- Tag hover and focus-visible styles.
- Disabled visual and pointer handling for `.badge-tag--tag`.
- Soft, solid, and outline modes.
- Semantic, mono, and neutral color variants.
- Count/circle shape behavior.

Audit findings:

- Pressed state is not represented in source selectors.
- Raw docs do not mention `aria-pressed`, `aria-disabled`, keyboard behavior, or disabled behavior.
- No forced-colors block.
- No reduced-motion block despite transitions.
- Long-label wrapping/overflow remains a docs/consumer concern because source uses `white-space: nowrap`.

## Risks and Future Routing

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

