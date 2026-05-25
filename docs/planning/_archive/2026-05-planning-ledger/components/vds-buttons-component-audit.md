# VDS Buttons Component Audit

Last updated: `2026-05-24`

Source item: `VDS-2070`

This file records the buttons component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/buttons.css` is the source truth for current button CSS behavior.
- `@24vlh/vds/doc-raw/vds-buttons.doc.html` and `@24vlh/agents/docs_vds/components/vds-buttons.json` are docs/index evidence.
- The current implementation is a CSS action-trigger styling surface for native buttons, anchors styled as buttons, and role-button patterns.
- Consumer/application code owns semantics, keyboard behavior, form behavior, `aria-pressed`, `aria-busy`, `aria-disabled`, loading state changes, icon-only labels, destructive-action confirmation, and focus movement.
- Existing button classes, size/layout/icon modifiers, semantic variants, outline/link variants, loading/selected/pressed states, disabled styles, focus styles, anchor resets, and the local `--button-text-color` alias are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, or generated output refresh happens in `VDS-2070`.

## Source CSS Evidence

`@24vlh/vds/src/components/buttons.css` currently has:

- Lines: `644`.
- Selector blocks: `101`.
- Expanded selectors: `141`.
- Declarations: `244`.
- Anchored custom property declaration lines: `24`.
- Unique locally declared custom property names: `1`, `--button-text-color`.
- `var(...)` references: `239`.
- `!important` declarations: `0`.
- Hard-coded hex colors: `0`.
- `rgb(...)` / `rgba(...)` colors: `1`, from `.button--contrast-hover`.

Media, feature, and interaction evidence:

- Media blocks: `1`, `(prefers-reduced-motion: reduce)`.
- Feature queries: `1`, `@supports not (gap: 1rem)`.
- `@keyframes`: `1`, `button-spinner`.
- `:hover` selector matches: `24`.
- `:focus-visible` selector matches: `20`.
- `:active` selector matches: `23`.
- Disabled or `aria-disabled` selector matches: `86`.
- Pressed selector matches: `2`.
- Selected selector matches: `2`.
- Loading selector matches: `7`.
- Transition declarations: `2`.
- Animation declarations: `2`.
- Transform declarations: `5`.
- Reduced-motion blocks: `1`.
- Forced-colors blocks: `0`.
- Pointer-events declarations: `3`.
- Cursor declarations: `3`.
- `box-shadow` declarations: `22`.

Package-facing output:

- `@24vlh/vds/dist/components/buttons.css` exists.
- `@24vlh/vds/dist/components/buttons.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/buttons.css`.
- `@24vlh/vds/src/core.css` does not import buttons.

## Component Contract

Current button source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Base | `.button` | button styling baseline |
| Size | `.button--xs`, `.button--sm`, `.button--md`, `.button--lg` | density and scale variants |
| Layout | `.button--nowrap`, `.button--block`, `.button--full-height` | width, wrapping, and height helpers |
| Icon | `.button--icon`, `.button--icon-only`, `.button__icon`, `.button__icon--left`, `.button__icon--right` | icon-only and icon slot layout |
| Core variants | `.button--primary`, `.button--secondary`, `.button--soft`, `.button--ghost`, `.button--subtle`, `.button--neutral` | primary, secondary, and neutral visual hierarchy |
| Status variants | `.button--success`, `.button--warning`, `.button--info`, `.button--danger` | semantic action/status variants |
| Outline variants | `.button--outline`, `.button--outline-accent`, `.button--outline-danger`, `.button--outline-success`, `.button--outline-warning`, `.button--outline-info` | outlined button modes |
| Link | `.button--link`, `a.button` | link-style button and anchor reset behavior |
| States/helpers | `.button--selected`, `.button--loading`, `.button--contrast-hover`, `.button--lift`, `[aria-pressed="true"]`, `[aria-disabled="true"]` | state visuals and helper effects |

Source interpretation:

- Buttons are CSS styling for action triggers, not a runtime state manager.
- Native `<button>` behavior, anchor navigation behavior, and role-button behavior must stay distinct in later docs.
- CSS supplies visual states, but consumer/application code owns the state and accessible behavior behind those visuals.

## Local Alias and Token Surface

Current local declaration:

- `--button-text-color`

Audit conclusions:

- `--button-text-color` is the only locally declared custom property name in `buttons.css`.
- It is assigned by the base and variants to feed final text color.
- Most button styling resolves through upstream primitive, theme, semantic, focus, motion, border, surface, text, and state-soft tokens.
- Referenced button-outline hover tokens such as `--button-outline-accent-hover-bg` are compatibility-sensitive token references, not locally declared aliases in this source file.
- No local alias or token reference is approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- Button source classes: `34`.
- Public classes: `30`.
- Candidate-public classes: `4`.

Class family counts:

| Group | Total |
| --- | ---: |
| base | `1` |
| size | `4` |
| layout | `3` |
| icon | `5` |
| core variant | `6` |
| status variant | `4` |
| outline variant | `6` |
| link | `1` |
| state | `2` |
| other helper | `2` |

Candidate-public classes:

- `.button--full-height`
- `.button--lift`
- `.button--nowrap`
- `.button--selected`

Audit conclusions:

- Candidate-public status reflects current docs coverage, not permission to remove or rename source-defined selectors.
- `.button--selected` overlaps with `[aria-pressed="true"]` visual treatment and requires classification before any later state naming cleanup.
- Button helper classes remain compatibility-sensitive until later approved selector inventory or migration work.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-buttons.doc.html` has `667` lines.
- Docs cover variants, anchors-as-buttons, icon buttons, loading, disabled/`aria-disabled`, `aria-pressed`, `aria-busy`, accessible names, toolbar context, and button usage rules.
- Docs examples include package/source-consumption path guidance and theme examples; these are docs/package guidance evidence, not source truth.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-buttons.json`
- Blocks: `9`.
- Code examples: `9`.
- Generated class tokens: `54`.
- Generated `source_css`: `base.css`, `buttons.css`, `icons.css`, `primitives.css`, and `typography.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `button` | `616` |
| `link` | `38` |
| `aria` | `56` |
| `aria-pressed` | `1` |
| `pressed` | `1` |
| `disabled` | `17` |
| `aria-disabled` | `3` |
| `loading` | `9` |
| `spinner` | `1` |
| `icon` | `136` |
| `icon-only` | `7` |
| `focus` | `5` |
| `hover` | `2` |
| `active` | `2` |
| `danger` | `22` |
| `toolbar` | `10` |
| `anchor` | `0` |
| `role` | `0` |
| `selected` | `0` |
| `keyboard` | `0` |
| `Space` | `0` |
| `Enter` | `0` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |
| `contrast` | `0` |
| `mobile` | `0` |
| `responsive` | `0` |

Audit conclusions:

- Generated buttons `source_css` metadata is present.
- Generated `source_css` does not list a theme file even though variants rely on theme color tokens.
- Raw docs cover many button usage and ARIA points, but omit direct keyboard, Space/Enter, reduced-motion, forced-colors, responsive/mobile, and contrast coverage.
- Source comments mention `role="button"` support, but raw docs do not mention `role`; this is a docs coverage gap for later review.

## Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Choosing semantic elements: native `<button>` for actions, anchors for navigation, role-button only when unavoidable.
- Adding `type="button"` where form submission should not occur.
- Adding Space and Enter keyboard activation for non-button role-button controls.
- Maintaining `aria-pressed` state for toggle buttons.
- Maintaining `aria-busy`, loading state changes, and any live status text for async buttons.
- Maintaining `aria-disabled` semantics on anchors or role-button controls.
- Supplying accessible names for icon-only buttons.
- Confirming destructive actions.
- Managing focus after button-triggered dialogs, navigation, or destructive workflows.

CSS source currently provides:

- Base inline-flex button layout.
- Size, layout, icon, icon-only, link, semantic, outline, neutral, contrast-hover, and lift styles.
- Hover, active, focus-visible, disabled, selected, pressed, and loading visuals.
- Loading spinner animation and reduced-motion fallback.
- Anchor reset rules for `a.button`.

APG alignment:

- Native `<button>` elements provide default Space and Enter activation.
- APG button guidance requires an accessible label.
- Toggle buttons use `aria-pressed` and should not change labels when the pressed state changes.
- `aria-disabled` can communicate unavailable action state, but consumer code must still ensure unavailable controls do not activate.
- Link and button roles should match behavior; visual button styling on anchors must still represent navigation.
- Toolbar keyboard guidance applies only when consumers intentionally implement a toolbar pattern.

## Risks and Future Routing

- CSS cannot supply keyboard activation semantics for non-button role-button elements.
- Loading state hides children and uses a spinner; accessible busy text/state remains consumer-owned.
- Icon-only buttons require accessible names; source cannot enforce labels.
- Pressed/selected styling exists, but toggle state and `aria-pressed` synchronization remain consumer-owned.
- Disabled styling supports native disabled and `aria-disabled`, but actual disabled behavior differs by element type.
- Semantic and outline variants inherit theme contrast risks from prior theme audits, especially warning/danger/status and on-color pairs.
- Source has reduced-motion handling but no forced-colors block; forced-colors coverage is an audit finding only.
- Source comments mention Titanium in the theme list even though the approved theme matrix is Graphite, Carbon, Navy, and Slate; this is stale source-comment evidence only.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Buttons CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Generated docs metadata refresh: later approved docs-index item.
- Selector classification changes: later approved selector inventory item.
- Theme/contrast checks: later approved visual/contrast QA items.
- APG/native/link/role-button guidance: later approved accessibility/docs item.
- Dist refresh: later approved release/build-output item.
