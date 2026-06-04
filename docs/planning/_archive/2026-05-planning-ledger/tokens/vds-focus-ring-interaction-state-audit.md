# VDS Focus Ring and Interaction State Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-1060`

This file records the VDS focus ring and interaction-state audit for the tokens, themes, and foundation track. It is a planning artifact only: no CSS, token names, token values, raw docs, generated `dist`, package metadata, scripts, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/primitives.css` owns the low-level focus width and offset primitives.
- Theme files own `--focus-ring-color` plus hover/active role tokens.
- `@24vlh/vds/src/base.css` owns global focus mechanics, pointer-focus suppression, link hover/active color, selection, and current forced-colors baseline.
- Component CSS owns local focus rendering and state styling.
- Consumer/application code owns keyboard behavior, focus movement/restoration, ARIA state synchronization, modal trapping, and live updates.
- Existing focus tokens, focus styles, interaction selectors, state classes, and docs examples remain compatibility-sensitive until a later approved cleanup or migration item says otherwise.

## Focus Tokens and Theme State Evidence

`@24vlh/vds/src/primitives.css` currently defines `2` focus primitives:

- `focus-ring-width`
- `focus-ring-offset`

Theme focus evidence:

| Theme | `--focus-ring-color` definitions | Hover token definitions | Active token definitions | Loading token definitions | Disabled/selected token definitions by name |
| --- | ---: | ---: | ---: | ---: | ---: |
| `graphite.css` | `2` | `44` | `2` | `2` | `0` |
| `carbon.css` | `2` | `44` | `2` | `2` | `0` |
| `navy.css` | `2` | `44` | `2` | `2` | `0` |
| `slate.css` | `2` | `44` | `2` | `2` | `0` |

Focus token references in source:

| Token | References | Files |
| --- | ---: | ---: |
| `focus-ring-color` | `94` | `15` |
| `focus-ring-width` | `27` | `8` |
| `focus-ring-offset` | `24` | `6` |

## Source Roles and Evidence

| Source area | Role |
| --- | --- |
| `src/primitives.css` | Focus width and offset primitives. |
| `src/themes/*.css` | Theme-specific focus color and hover/active role tokens. |
| `src/base.css` | Global `:focus`, `:focus-visible`, pointer-focus suppression, link hover/active color, selection, and forced-colors baseline. |
| `src/components/*.css` | Local focus rendering and state styling for hover, active, selected/current, disabled, readonly, invalid/error, loading/busy, pressed, expanded, and ARIA/native states. |
| `doc-raw/*.doc.html` | Runnable examples and guidance. Source CSS remains authoritative when docs and source differ. |

`43` CSS files exist. `26` files currently include focus or interaction-state selectors.

## Selector Evidence

| Selector group | Count | Files |
| --- | ---: | ---: |
| `:focus-visible` | `94` | `16` |
| `:focus-within` | `12` | `5` |
| broad focus selectors | `115` | `18` |
| `:hover` | `132` | `20` |
| `:active` | `38` | `8` |
| disabled selectors | `129` | `14` |
| readonly selectors | `2` | `1` |
| invalid/error selectors | `37` | `7` |
| selected selectors | `18` | `7` |
| active/current class or ARIA selectors | `58` | `11` |
| loading/busy selectors | `18` | `7` |
| pressed selectors | `3` | `3` |
| expanded selectors | `2` | `1` |

High-volume focus and state files include:

- `buttons.css`
- `content-blocks.css`
- `navigation.css`
- `forms-advanced.css`
- `android-shell.css`
- `forms.css`
- `inbox.css`
- `flows.css`
- `tabs.css`

## Declaration Evidence

| Declaration | Count | Files |
| --- | ---: | ---: |
| `outline` | `56` | `17` |
| `outline-offset` | `33` | `10` |
| `box-shadow` | `164` | `26` |
| `opacity` | `135` | `23` |
| `cursor` | `107` | `20` |
| `pointer-events` | `74` | `18` |

Focus rendering is currently split between global outlines and component-local `box-shadow` or inset treatments. Several component rules set `outline: none` and replace it with shadows. These are audit findings only; do not change them without later accessibility, forced-colors, contrast, and component review.

## Forced-Colors Coverage

Forced-colors blocks: `2` across `2` files.

| File | Role |
| --- | --- |
| `src/base.css` | Global forced-colors baseline. |
| `src/components/accordion.css` | Component-local forced-colors focus/state handling. |

Forced-colors coverage is thin relative to the focus and state surface. This is an audit finding only, not an approved fix in `VDS-1060`.

## Public State Class Evidence

The selector inventory currently has `108` state-like classes:

- `73` are `public`.
- `35` are `candidate-public`.

Notable groups:

| Group | Classes | Notes |
| --- | ---: | --- |
| active/current | `23` | Includes `--active`, `is-active`, `aria-current`-adjacent, and current row/nav patterns. |
| disabled | `32` | Includes disabled component variants and candidate-public state helpers. |
| error/invalid-adjacent | `30` | Includes error state classes used across forms, charts, flows, and feedback. |
| selected | `7` | Includes selected buttons, cards, table rows, choice chips, and list items. |
| loading | `7` | Includes buttons, charts, forms, hero, modal, multi-select, and tables. |
| expanded | `4` | Includes doc blocks, inbox rows, sidebar sections, and table rows. |
| readonly | `1` | `form-control--readonly`. |
| focus | `1` | `inbox-row__focus-visible`. |
| hover | `3` | Includes hover helper or hover-enabled classes. |

These classes are public or candidate-public compatibility surfaces. Do not rename, remove, merge, or deprecate them without selector inventory evidence, consumer risk review, and migration notes.

## Raw Docs Interaction Coverage

| Topic | Mentions | Docs |
| --- | ---: | ---: |
| Focus | `162` | `25` |
| Hover | `41` | `13` |
| Active | `421` | `32` |
| Selected | `164` | `12` |
| Disabled | `138` | `15` |
| Loading | `111` | `13` |
| Readonly | `15` | `2` |
| Invalid | `19` | `5` |
| Pressed | `11` | `3` |
| Expanded | `25` | `4` |
| Current | `20` | `6` |
| `tabindex` | `35` | `4` |

The active count is broad because raw docs also discuss active themes. Docs are secondary to source truth for behavior, but docs rewrite work must preserve accessibility expectations around focus visibility and state semantics.

## Current Risks

- Focus rendering is split between global outlines and component-local `box-shadow` or inset treatments.
- Several component focus rules set `outline: none` and replace it with shadows.
- Forced-colors coverage is thin compared with the focus and state surface.
- Disabled, `aria-disabled`, readonly, invalid/error, selected, active, current, loading, busy, pressed, and expanded states are compatibility-sensitive when exposed through public or candidate-public classes.
- Active/current/selected terminology overlaps across navigation, tabs, command, flows, Android shell, and content blocks.
- Loading/busy state cleanup overlaps with `VDS-1050` motion findings.
- Theme files define hover and active tokens but no disabled/selected tokens by name, so future token architecture must decide whether that is intentional.

## Audit Rules for Later Work

- Classify each focus or state change as primitive token, theme role token, base behavior, component-local behavior, ARIA/native state styling, public class, candidate-public class, docs-only cleanup, legacy-compatible behavior, or deprecated behavior.
- Preserve public and candidate-public state classes unless a later approved migration/deprecation plan allows changes.
- Do not remove `outline: none` replacements or normalize focus shadows without forced-colors and contrast review.
- Keep CSS state styling separate from consumer responsibilities for keyboard behavior and ARIA state synchronization.
- Treat forced-colors gaps as release-relevant findings, but fix them only through later approved accessibility/theme/component items.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1070` must use this audit when overlay stack changes affect focused, active, current, or selected surfaces.
- `VDS-1080` must use this audit when border, shadow, radius, or inset focus treatments are reviewed.
- Theme architecture and theme-specific audits must review focus-ring contrast and state visibility against WCAG 2.2 AA.
- Component audits must state which focus and state selectors are CSS-owned and which behaviors remain consumer JavaScript responsibilities.
- Documentation rewrite work must reconcile active/current/selected language and explain focus/state behavior without promising behavior CSS cannot provide.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Primitive token taxonomy: `@24vlh/vds/docs/planning/tokens/vds-primitives-token-taxonomy-audit.md`
- Semantic token naming cleanup plan: `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
- Motion token and reduced-motion audit: `@24vlh/vds/docs/planning/tokens/vds-motion-token-reduced-motion-audit.md`
- Accessibility baseline: `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
- Theme contrast and visual baseline: `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
- Selector inventory: `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Primitive source: `@24vlh/vds/src/primitives.css`
- Base source: `@24vlh/vds/src/base.css`
- Theme sources: `@24vlh/vds/src/themes/*.css`
- Component sources: `@24vlh/vds/src/components/*.css`
- Raw docs: `@24vlh/vds/doc-raw/*.doc.html`
