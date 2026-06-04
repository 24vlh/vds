# VDS Z-index and Overlay Stack Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-1070`

This file records the VDS z-index and overlay stack audit for the tokens, themes, and foundation track. It is a planning artifact only: no CSS, token names, token values, raw docs, generated `dist`, package metadata, scripts, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/primitives.css` owns the z-index ladder.
- Component CSS owns stack behavior for headers, sticky regions, tables, overlays, drawers, command surfaces, toasts, tooltips, popovers, navigation, and positioned internals.
- Utilities expose numeric and semantic z-index helpers, but they must not casually override modal/backdrop/overlay stack semantics.
- Consumer/application code remains responsible for modal focus trapping, inert/background behavior, escape handling, portal/mount order, and ARIA state synchronization.
- Existing z-index tokens, z-index utilities, overlay classes, positioned component surfaces, and docs examples remain compatibility-sensitive until a later approved cleanup or migration item says otherwise.

## Primitive Z-index Tokens

`@24vlh/vds/src/primitives.css` currently defines `10` z-index primitives:

| Token | Value | References | Files |
| --- | ---: | ---: | ---: |
| `z-negative` | `-1` | `1` | `1` |
| `z-base` | `0` | `2` | `2` |
| `z-header` | `10` | `5` | `3` |
| `z-backdrop` | `80` | `4` | `2` |
| `z-modal` | `90` | `5` | `3` |
| `z-drawer` | `95` | `2` | `2` |
| `z-toast` | `100` | `3` | `3` |
| `z-tooltip` | `110` | `3` | `2` |
| `z-sticky` | `40` | `7` | `4` |
| `z-sticky-col` | `39` | `2` | `1` |

No z-index primitive is currently unreferenced.

Current ladder order:

1. `z-negative`
2. `z-base`
3. `z-header`
4. `z-sticky-col`
5. `z-sticky`
6. `z-backdrop`
7. `z-modal`
8. `z-drawer`
9. `z-toast`
10. `z-tooltip`

Tooltips currently sit above toasts in the primitive ladder. That ordering is source truth for now and must not be changed without component, docs, and migration review.

## Z-index Declaration Evidence

`z-index` declarations: `53` across `17` files.

| Kind | Count |
| --- | ---: |
| Tokenized | `34` |
| Hard-coded | `19` |
| `auto` | `0` |

Top files:

| File | Count |
| --- | ---: |
| `src/components/utilities.css` | `13` |
| `src/components/overlays.css` | `9` |
| `src/components/tables.css` | `5` |
| `src/components/header-footer.css` | `3` |
| `src/components/progress.css` | `3` |

Hard-coded values include:

- `0`
- `1`
- `2`
- `10`
- `20`
- `30`
- `40`
- `50`

`overlays.css` currently uses token fallbacks and `calc(...)` offsets above backdrop/modal layers. This is source evidence only, not an approved rewrite.

## Positioning and Stack Contributors

Position declarations:

| Declaration | Count | Files |
| --- | ---: | ---: |
| `position: absolute` | `69` | `23` |
| `position: fixed` | `11` | `7` |
| `position: sticky` | `10` | `6` |
| `position: relative` | `83` | `27` |

Stacking-context contributors:

| Declaration | Count | Files |
| --- | ---: | ---: |
| `transform` | `119` | `18` |
| `opacity` | `135` | `23` |
| `backdrop-filter` | `4` | `2` |
| `filter` | `1` | `1` |
| `isolation` | `1` | `1` |
| `will-change` | `2` | `1` |

These properties can affect stacking order even when z-index values do not change. They are audit evidence for later component and visual QA work.

## Utility Z-index Surface

Numeric z-index utilities:

- `.z-10`
- `.z-20`
- `.z-30`
- `.z-40`
- `.z-50`

Semantic z-index utilities:

- `.z-negative`
- `.z-base`
- `.z-header`
- `.z-backdrop`
- `.z-modal`
- `.z-drawer`
- `.z-toast`
- `.z-tooltip`

Raw utilities docs explicitly warn that z-index utilities must not override overlay/modal stack. Utility classes are public or candidate-public compatibility surfaces and must not be renamed, removed, merged, or deprecated without selector inventory evidence, consumer risk review, and migration notes.

## Overlay and Stack Selector Evidence

Broad stack/overlay selector scan: `1058` matching selectors in `24` CSS files.

Top source files:

- `android-shell.css`
- `command.css`
- `inbox.css`
- `navigation.css`
- `overlays.css`
- `toasts.css`
- `tooltips-popovers.css`
- `header-footer.css`
- `feedback.css`
- `tables.css`

Selector inventory currently has `326` stack-like classes:

- `269` are `public`.
- `57` are `candidate-public`.

Notable groups:

| Group | Classes |
| --- | ---: |
| command | `116` |
| modal | `47` |
| header | `42` |
| toast | `37` |
| popover | `24` |
| tooltip | `21` |
| backdrop | `10` |
| overlay | `10` |
| drawer | `8` |
| sticky | `8` |

These classes are compatibility-sensitive. Future cleanup must distinguish stack behavior, semantic state, component naming, and docs-only examples before changing anything.

## Raw Docs Stack Coverage

| Topic | Mentions | Docs |
| --- | ---: | ---: |
| z-index tokens/classes | `44` | `6` |
| fixed/sticky/positioning | `118` | `19` |
| broad overlay/layer terms | `2849` | `37` |

Strongest docs coverage:

- `doc-raw/vds-overlays.doc.html`
- `doc-raw/vds-toasts.doc.html`
- `doc-raw/vds-tooltips-popovers.doc.html`
- `doc-raw/vds-command.doc.html`
- `doc-raw/vds-utilities.doc.html`
- `doc-raw/vds-header-footer.doc.html`

Docs are secondary to source truth for behavior, but docs rewrite work must preserve the warning that utility z-index classes are not a modal/overlay stack escape hatch.

## Current Risks

- Hard-coded z-index values coexist with tokenized stack layers and must be classified before cleanup.
- `overlays.css` uses token fallbacks and `calc(...)` offsets above backdrop/modal layers.
- `.z-*` utility classes are public/candidate-public compatibility surfaces.
- Stack order overlaps with focus, motion, responsive, and accessibility concerns from `VDS-1050`, `VDS-1060`, and responsive baselines.
- Transform, opacity, backdrop-filter, isolation, and will-change can create stacking contexts even without explicit z-index changes.
- Tooltips currently sit above toasts in the primitive ladder.
- Modal/drawer/backdrop/command behavior cannot be fully solved by CSS; consumer JavaScript remains responsible for focus trap, inert background, escape handling, and mount order.

## Audit Rules for Later Work

- Classify each stack change as primitive token, component-local z-index, utility class, positioned surface, stacking-context side effect, docs-only cleanup, legacy-compatible behavior, or deprecated behavior.
- Preserve public and candidate-public z-index utilities and overlay classes unless a later approved migration/deprecation plan allows changes.
- Do not alter the tooltip/toast/modal/drawer/backdrop order without component, docs, consumer, and migration review.
- Treat hard-coded z-index values as findings until component context proves they should be tokenized, kept local, or deprecated.
- Keep CSS stack styling separate from consumer responsibilities for portal placement, mount order, focus trapping, inert background, escape handling, and ARIA state synchronization.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1080` must use this audit when shadow, border, and radius choices affect layered surfaces.
- Theme architecture and theme-specific audits must review overlay/backdrop readability and focus visibility against WCAG 2.2 AA.
- Overlay, command, navigation, header/footer, toasts, tooltips/popovers, tables, Android shell, and inbox audits must record whether stacking behavior is tokenized, hard-coded, local, or consumer-owned.
- Documentation rewrite work must explain the primitive stack ladder and utility limitations without promising behavior CSS cannot provide.
- Quality automation may later add screenshot or interaction checks for modal, drawer, toast, tooltip, sticky, and command stacking.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Primitive token taxonomy: `@24vlh/vds/docs/planning/tokens/vds-primitives-token-taxonomy-audit.md`
- Focus ring and interaction-state audit: `@24vlh/vds/docs/planning/tokens/vds-focus-ring-interaction-state-audit.md`
- Motion token and reduced-motion audit: `@24vlh/vds/docs/planning/tokens/vds-motion-token-reduced-motion-audit.md`
- Accessibility baseline: `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
- Responsive/container baseline: `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`
- Selector inventory: `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Primitive source: `@24vlh/vds/src/primitives.css`
- Layout source: `@24vlh/vds/src/layout.css`
- Component sources: `@24vlh/vds/src/components/*.css`
- Raw docs: `@24vlh/vds/doc-raw/*.doc.html`
