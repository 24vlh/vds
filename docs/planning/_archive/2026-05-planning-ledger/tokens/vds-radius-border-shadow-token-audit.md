# VDS Radius, Border, and Shadow Token Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-1080`

This file records the VDS radius, border, and shadow token audit for the tokens, themes, and foundation track. It is a planning artifact only: no CSS, token names, token values, raw docs, generated `dist`, package metadata, scripts, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/primitives.css` owns radius, border-width, tab-indicator, and shadow primitives.
- Theme files own border, shadow, and surface role values, not radius primitives.
- Component CSS owns local surface, border, radius, and depth aliases.
- Utilities expose radius, border, and shadow helpers as public or candidate-public compatibility surfaces.
- Focus-ring, forced-colors, and overlay-depth decisions must coordinate with `VDS-1060` and `VDS-1070`.
- Existing radius, border, shadow, surface, card, panel, outline, divider, separator, and elevation classes remain compatibility-sensitive until a later approved cleanup or migration item says otherwise.

## Primitive Radius, Border, and Shadow Tokens

`@24vlh/vds/src/primitives.css` currently defines `16` radius, border, indicator, and shadow primitives.

### Radius Tokens

| Token | Value | References | Files |
| --- | --- | ---: | ---: |
| `radius-none` | `0` | `4` | `4` |
| `radius-xs` | `2px` | `2` | `2` |
| `radius-sm` | `4px` | `49` | `18` |
| `radius-md` | `8px` | `77` | `28` |
| `radius-lg` | `12px` | `32` | `10` |
| `radius-xl` | `18px` | `11` | `4` |
| `radius-full` | `999px` | `35` | `15` |
| `radius-pill` | `9999px` | `21` | `11` |

### Border and Indicator Tokens

| Token | Value | References | Files |
| --- | --- | ---: | ---: |
| `border-width` | `1px` | `112` | `20` |
| `border-width-strong` | `3px` | `51` | `14` |
| `tab-indicator-height` | `2px` | `9` | `2` |

### Shadow Tokens

| Token | Value | References | Files |
| --- | --- | ---: | ---: |
| `shadow-xs` | `0 1px 2px rgba(0, 0, 0, 0.05)` | `6` | `5` |
| `shadow-sm` | `0 1px 3px rgba(0, 0, 0, 0.1)` | `1` | `1` |
| `shadow-md` | `0 4px 6px rgba(0, 0, 0, 0.1)` | `4` | `3` |
| `shadow-lg` | `0 10px 15px rgba(0, 0, 0, 0.15)` | `0` | `0` |
| `shadow-xl` | `0 20px 25px rgba(0, 0, 0, 0.2)` | `1` | `1` |

`shadow-lg` is currently unreferenced. This is an audit finding only, not an approved removal.

## Declaration Evidence

| Declaration group | Total | Tokenized | Hard-coded | None/zero | Files |
| --- | ---: | ---: | ---: | ---: | ---: |
| `border` | `198` | `154` | `2` | `42` | `34` |
| `border-top` | `27` | `21` | `0` | `6` | `14` |
| `border-right` | `8` | `6` | `0` | `2` | `7` |
| `border-bottom` | `46` | `33` | `0` | `13` | `17` |
| `border-left` | `43` | `39` | `0` | `4` | `19` |
| `border-color` | `234` | `212` | `2` | `20` | `19` |
| `border-radius` | `268` | `227` | `27` | `14` | `33` |
| `box-shadow` | `164` | `148` | `1` | `15` | `26` |
| `outline` | `56` | `32` | `0` | `24` | `17` |
| `outline-offset` | `33` | `30` | `3` | `0` | `10` |

Aggregate border/outline surface evidence:

- Total declarations: `931`.
- Tokenized declarations: `767`.
- Hard-coded declarations: `37`.
- None/zero declarations: `127`.
- Files: `34`.

Notable hard-coded samples:

- `border-radius: 999px` appears `22` times.
- `border-radius: 50%` appears `3` times.
- `border-radius: 9999px` appears `2` times.
- `outline-offset: 2px` appears `2` times.
- `outline-offset: -2px` appears `1` time.
- Forced-colors values such as `ButtonText` and `Highlight` appear in border-color rules.
- One hard-coded inset highlight shadow appears as `inset 0 1px 0 rgba(255, 255, 255, 0.3)`.

Hard-coded pill and circle radii may be intentional shape semantics. Do not replace them mechanically without component review.

## Token Layering Evidence

Component CSS currently defines radius, border, and shadow custom properties across `25` component files:

| Group | Component custom properties |
| --- | ---: |
| Radius-related | `25` |
| Border-related | `151` |
| Shadow-related | `14` |

Each theme file currently has the same radius, border, shadow, and surface custom property shape:

| Theme file | Radius | Border | Shadow | Surface |
| --- | ---: | ---: | ---: | ---: |
| `src/themes/carbon.css` | `0` | `68` | `8` | `30` |
| `src/themes/graphite.css` | `0` | `68` | `8` | `30` |
| `src/themes/navy.css` | `0` | `68` | `8` | `30` |
| `src/themes/slate.css` | `0` | `68` | `8` | `30` |

Theme files own border, shadow, and surface roles today. They do not define radius roles by name. `VDS-1090` must decide whether this boundary remains correct.

## Utility and Docs Shadow Naming

The source and raw docs expose shadow utilities such as:

- `.shadow-1`
- `.shadow-2`
- `.shadow-3`
- `.shadow-none`

Primitive shadow tokens use a different scale:

- `shadow-xs`
- `shadow-sm`
- `shadow-md`
- `shadow-lg`
- `shadow-xl`

This is a naming-layer mismatch and release-relevant documentation finding. It does not approve renaming utilities, renaming primitives, adding aliases, removing tokens, or changing docs in this item.

## Surface and Depth Selector Evidence

The selector inventory currently has `178` surface/depth classes:

- `139` are `public`.
- `39` are `candidate-public`.

Notable groups:

| Group | Classes |
| --- | ---: |
| outline | `62` |
| card | `50` |
| surface | `17` |
| panel | `16` |
| radius | `7` |
| border | `7` |
| bordered | `6` |
| borderless | `4` |
| shadow | `4` |
| elevated | `3` |
| separator | `1` |
| divider | `1` |

These classes are compatibility-sensitive. Future cleanup must distinguish primitive tokens, semantic theme roles, component-local aliases, utility classes, docs-only examples, legacy-compatible behavior, and deprecated behavior before changing anything.

## Raw Docs Coverage

| Topic | Mentions | Docs |
| --- | ---: | ---: |
| radius | `177` | `20` |
| border | `428` | `34` |
| shadow | `68` | `16` |
| surface | `2992` | `36` |

Docs are secondary to source truth for behavior, but docs rewrite work must reconcile public utility naming, primitive token naming, and theme role naming.

## Current Risks

- `shadow-lg` is unreferenced and may be a scale reserve, documentation gap, stale value, or cleanup candidate.
- Shadow naming differs between utility/docs classes and primitive tokens.
- Hard-coded pill/circle radii may be deliberate shape semantics rather than token drift.
- Focus rendering uses both outline and box-shadow treatments, so surface cleanup can affect keyboard visibility and forced-colors behavior.
- Overlay, card, panel, popover, tooltip, modal, command, toast, and sticky surfaces rely on borders and shadows that interact with z-index and stacking findings.
- Theme files own many border, shadow, and surface roles, but no radius roles.
- Public and candidate-public surface classes are a compatibility surface and must not be renamed or removed casually.

## Audit Rules for Later Work

- Classify each radius, border, and shadow change as primitive token, theme role token, component-local alias, utility class, docs-only cleanup, legacy-compatible behavior, or deprecated behavior.
- Preserve public and candidate-public surface/depth classes unless a later approved migration/deprecation plan allows changes.
- Do not remove `shadow-lg` only because this audit identifies it as unreferenced.
- Do not normalize `.shadow-1` through `.shadow-3` without selector inventory evidence, docs impact review, consumer risk review, and migration notes.
- Do not replace hard-coded pill/circle radii without component context.
- Coordinate border and shadow cleanup with focus visibility, forced-colors behavior, surface contrast, and overlay stack order.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1090` must use this audit when deciding what belongs in theme files versus primitives and component-local aliases.
- Graphite, carbon, navy, and slate theme audits must review border, shadow, and surface roles against WCAG 2.2 AA contrast and visual integrity expectations.
- Base, layout, utilities, sections, cards, overlays, command, toasts, tooltips/popovers, tables, forms, navigation, feedback, Android shell, and content block audits must classify surface/depth selectors before cleanup.
- Documentation rewrite work must reconcile primitive token naming, public utility naming, and theme role naming without promising aliases that do not exist.
- Quality automation may later add contrast and visual checks for borders, focus rings, shadows, elevated surfaces, cards, panels, overlays, and disabled/read-only surfaces.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Primitive token taxonomy: `@24vlh/vds/docs/planning/tokens/vds-primitives-token-taxonomy-audit.md`
- Semantic token naming cleanup plan: `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
- Focus ring and interaction-state audit: `@24vlh/vds/docs/planning/tokens/vds-focus-ring-interaction-state-audit.md`
- Z-index and overlay stack audit: `@24vlh/vds/docs/planning/tokens/vds-z-index-overlay-stack-audit.md`
- Theme contrast and visual baseline: `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
- Selector inventory: `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Primitive source: `@24vlh/vds/src/primitives.css`
- Theme sources: `@24vlh/vds/src/themes/*.css`
- Component sources: `@24vlh/vds/src/components/*.css`
- Raw docs: `@24vlh/vds/doc-raw/*.doc.html`
