# VDS-1070 Z-index and Overlay Stack Audit

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-1070`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1070-z-index-and-overlay-stack-audit.md`

## 1. Goal

Create the z-index and overlay stack audit for VDS before radius/border/shadow and theme architecture work continues. This item records the primitive z-index ladder, positioned surfaces, overlay-related component selectors, utility z-index classes, stacking-context risks, raw docs guidance, and compatibility rules for future overlay, modal, drawer, toast, tooltip, sticky, and header work.

## 2. Scope

### In scope

- Record primitive z-index tokens, reference counts, and unreferenced-token evidence.
- Record z-index declarations, tokenized versus hard-coded values, and high-volume source files.
- Record position declarations and stacking-context contributors.
- Record utility z-index class evidence and overlay/modal stack guidance from raw docs.
- Record overlay/stack selector inventory evidence.
- Record raw-doc z-index, overlay, fixed, and sticky coverage.
- Add a z-index and overlay stack audit artifact for later token cleanup, overlay stack policy, utility z-index review, component audits, accessibility checks, migration notes, and release verification.
- Update the master feature map so the token/theme track continues to `VDS-1080`.

### Out of scope

- Changing CSS, token names, token values, docs demos, generated `dist`, package metadata, scripts, workflows, selector inventory, consumer reports, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing z-index values, overlay behavior, portal/mount ordering, focus trapping, utility classes, docs examples, or generated docs metadata.
- Running visual, browser, screenshot, or accessibility smoke checks.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/tokens/vds-primitives-token-taxonomy-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-focus-ring-interaction-state-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-motion-token-reduced-motion-audit.md`
  - `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
  - `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Repo files:
  - `@24vlh/vds/src/primitives.css`
  - `@24vlh/vds/src/layout.css`
  - `@24vlh/vds/src/components/*.css`
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/doc-raw/*.doc.html`
- Current audit results:
  - `pnpm run audit:tokens` passes.
  - `pnpm run audit` passes.
  - `pnpm run audit:consumers` passes.
  - `pnpm run audit:dist` passes.
- Standards baseline:
  - WCAG 2.2 AA from `VDS-0060`.
  - WAI-ARIA APG as the widget behavior reference.

## 4. Current Behavior Snapshot

- Source roles:
  - `@24vlh/vds/src/primitives.css` owns the z-index ladder.
  - Component CSS owns stack behavior for headers, sticky regions, tables, overlays, drawers, command surfaces, toasts, tooltips, popovers, navigation, and positioned internals.
  - Utilities expose numeric and semantic z-index helpers but must not casually override modal/backdrop/overlay stack semantics.
  - Consumer/application code remains responsible for modal focus trapping, inert/background behavior, escape handling, portal/mount order, and ARIA state synchronization.
- Primitive token evidence:
  - Z-index primitives: `10`.
  - Tokens: `z-negative`, `z-base`, `z-header`, `z-backdrop`, `z-modal`, `z-drawer`, `z-toast`, `z-tooltip`, `z-sticky`, and `z-sticky-col`.
  - No unreferenced z-index primitives.
  - Reference counts: `z-negative` `1`, `z-base` `2`, `z-header` `5`, `z-backdrop` `4`, `z-modal` `5`, `z-drawer` `2`, `z-toast` `3`, `z-tooltip` `3`, `z-sticky` `7`, and `z-sticky-col` `2`.
- Z-index declaration evidence:
  - `53` declarations across `17` files.
  - `34` tokenized.
  - `19` hard-coded.
  - `0` `auto`.
  - Top files: `utilities.css` `13`, `overlays.css` `9`, `tables.css` `5`, `header-footer.css` `3`, and `progress.css` `3`.
  - Hard-coded values include `0`, `1`, `2`, `10`, `20`, `30`, `40`, and `50`.
- Positioning and stack contributor evidence:
  - `position: absolute`: `69` declarations in `23` files.
  - `position: fixed`: `11` in `7`.
  - `position: sticky`: `10` in `6`.
  - `position: relative`: `83` in `27`.
  - Stack-context contributors: `transform` `119` in `18`, `opacity` `135` in `23`, `backdrop-filter` `4` in `2`, `filter` `1`, `isolation` `1`, and `will-change` `2`.
- Utility surface:
  - Numeric utilities: `.z-10`, `.z-20`, `.z-30`, `.z-40`, `.z-50`.
  - Semantic utilities: `.z-negative`, `.z-base`, `.z-header`, `.z-backdrop`, `.z-modal`, `.z-drawer`, `.z-toast`, `.z-tooltip`.
  - Raw docs explicitly warn that z-index utilities must not override overlay/modal stack.
- Selector and docs evidence:
  - Broad stack/overlay selector scan: `1058` matching selectors in `24` CSS files.
  - Selector inventory has `326` stack-like classes.
  - `269` are `public`.
  - `57` are `candidate-public`.
  - Notable selector groups include command `116`, modal `47`, header `42`, toast `37`, popover `24`, tooltip `21`, backdrop `10`, overlay `10`, drawer `8`, and sticky `8`.
  - Raw docs: z-index mentions `44` across `6` docs; fixed/sticky/positioning mentions `118` across `19`; broad overlay/layer mentions `2849` across `37`, strongest in `vds-overlays`, `vds-toasts`, `vds-tooltips-popovers`, and `vds-command`.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token name, token value, selector, theme, selector inventory, consumer report, or generated output changes.
- Treat z-index primitives as the current canonical stack ladder.
- Treat utility z-index classes as compatibility-sensitive public or candidate-public surfaces.
- Treat hard-coded z-index values as audit findings only. Later cleanup must classify whether each value is a local stacking need, utility scale value, tokenization candidate, or migration-sensitive behavior.
- Treat stacking-context contributors such as transform, opacity, backdrop-filter, isolation, and will-change as stack-risk evidence, not approved fixes.
- Treat overlay, drawer, modal, command, toast, tooltip, popover, sticky, and header stack behavior as component-owned until later component audits decide otherwise.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.
- If future z-index or overlay work changes source CSS while generated output is out of scope, its implementation log must record `dist refresh pending`.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/tokens/vds-z-index-overlay-stack-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1070` and set next recommended item to `VDS-1080`.
- Do not change README, raw docs, docs shell, docs demos, generated docs indexes, or agents docs output in this item.

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None in this item.
- Breaking changes:
  - None in CSS, tokens, custom property names, package import paths, generated `dist`, workflows, docs routes, selector inventory, consumer reports, or package version fields.
- Migration notes:
  - None for package consumers in this item. Later z-index token, utility class, overlay stack, positioned surface, or modal/drawer/tooltip/toast behavior changes must be migration-planned if they affect public, candidate-public, legacy-compatible, or consumer-overridden surfaces.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future overlay stack cleanup must preserve visible focus, focus restoration expectations, and APG-aligned modal behavior.
- Semantics or ARIA:
  - No runtime behavior changes. CSS stack order must remain separate from consumer responsibility for ARIA state synchronization.
- Reduced motion:
  - No runtime behavior changes. Overlay and toast stack changes must coordinate with `VDS-1050` before motion cleanup.
- Forced colors or contrast:
  - No runtime behavior changes. Overlay/backdrop readability and focus visibility remain later theme/accessibility work.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Fixed/sticky and drawer/modal stack findings must coordinate with `VDS-0070`.
- Theme coverage:
  - No theme changes. Overlay stack audit findings must preserve token naming boundaries from `VDS-1020` and focus/state expectations from `VDS-1060`.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:consumers`
  - `pnpm run audit:dist`
- Z-index/overlay stack audit scan:
  - Record primitive z-index tokens and reference counts.
  - Record z-index declaration counts, tokenized versus hard-coded.
  - Record position and stack-context contributor counts.
  - Record utility z-index class evidence.
  - Record overlay/stack selector inventory evidence.
  - Record raw-doc z-index, overlay, fixed, and sticky coverage.
  - Record future-work routing.
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, and z-index/overlay audit artifact agree that no source CSS, token names, docs, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1080`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting z-index and overlay stack behavior before radius/border/shadow and theme architecture work.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later z-index token, utility class, overlay stack, or portal/mount-order decisions may require migration notes.

## 10. Risks

- Hard-coded z-index values coexist with tokenized stack layers and must be classified before cleanup.
- `overlays.css` uses token fallbacks and `calc(...)` offsets above backdrop/modal layers.
- `.z-*` utility classes are public/candidate-public compatibility surfaces and must not be renamed or removed casually.
- Stack order overlaps with focus, motion, responsive, and accessibility concerns from `VDS-1050` and `VDS-1060`.
- Transform, opacity, backdrop-filter, isolation, and will-change can create stacking contexts even without explicit z-index changes.
- Tooltips currently sit above toasts in the primitive ladder; any change to that ordering requires component, docs, and migration review.
- Modal/drawer/backdrop/command behavior cannot be fully solved by CSS; consumer JavaScript remains responsible for focus trap, inert background, escape handling, and mount order.

## 11. Open Questions

- Should the primitive ladder keep tooltip above toast, or should release work define a different transient-surface order? Deferred to overlay/component cleanup and migration planning.
- Should numeric `.z-10` through `.z-50` utilities remain broad public helpers or be narrowed in docs? Deferred to utilities cleanup and docs rewrite.
- Should hard-coded z-index values inside components be tokenized or kept local? Deferred to component audits.
- Should command surfaces share modal stack semantics or get a dedicated stack token? Deferred to command and overlay architecture work.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added z-index and overlay stack audit artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1070` and set next recommended item to `VDS-1080`.
- `2026-05-23`: Ran/read a read-only z-index/overlay stack audit scan. Summary: z-index primitives count `10`; no z-index primitives are unreferenced; token references are `z-negative` `1`, `z-base` `2`, `z-header` `5`, `z-backdrop` `4`, `z-modal` `5`, `z-drawer` `2`, `z-toast` `3`, `z-tooltip` `3`, `z-sticky` `7`, and `z-sticky-col` `2`; z-index declarations count `53` across `17` files with `34` tokenized and `19` hard-coded; position declarations include `69` absolute, `11` fixed, `10` sticky, and `83` relative; stack-context contributors include `transform` `119`, `opacity` `135`, `backdrop-filter` `4`, `filter` `1`, `isolation` `1`, and `will-change` `2`; selector inventory has `326` stack-like classes with `269` public and `57` candidate-public; raw docs include `44` z-index mentions across `6` docs, `118` fixed/sticky/positioning mentions across `19`, and `2849` broad overlay/layer mentions across `37`.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - `pnpm run audit:dist` passed.
  - Read-only z-index/overlay stack audit scan completed.
  - VDS-1070 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1070-z-index-and-overlay-stack-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-z-index-overlay-stack-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; radius, border, and shadow token audit continues in `VDS-1080`.
