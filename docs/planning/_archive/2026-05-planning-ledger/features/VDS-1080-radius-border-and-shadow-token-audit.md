# VDS-1080 Radius, Border, and Shadow Token Audit

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-1080`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1080-radius-border-and-shadow-token-audit.md`

## 1. Goal

Create the radius, border, and shadow audit for VDS before theme architecture work continues. This item records the primitive surface-shape and depth tokens, theme border/shadow roles, utility classes, component-local aliases, raw-doc evidence, and compatibility rules for future surface cleanup.

## 2. Scope

### In scope

- Record radius, border, tab-indicator, and shadow primitive token evidence.
- Record border-radius, box-shadow, border, outline, and outline-offset declaration evidence.
- Record component-local radius, border, and shadow custom property evidence.
- Record theme border, shadow, and surface custom property evidence.
- Record radius, border, shadow, surface, card, panel, divider, separator, outline, and elevation selector inventory evidence.
- Record raw-doc radius, border, shadow, and surface coverage.
- Add a radius, border, and shadow token audit artifact for later token cleanup, theme architecture, utility review, component audits, visual checks, migration notes, and release verification.
- Update the master feature map so the token/theme track continues to `VDS-1090`.

### Out of scope

- Changing CSS, token names, token values, docs demos, generated `dist`, package metadata, scripts, workflows, selector inventory, consumer reports, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing hard-coded radii, border values, shadows, focus shadows, utilities, theme tokens, docs examples, or generated docs metadata.
- Running contrast tooling, visual, browser, screenshot, or accessibility smoke checks.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/tokens/vds-primitives-token-taxonomy-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
  - `@24vlh/vds/docs/planning/tokens/vds-focus-ring-interaction-state-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-z-index-overlay-stack-audit.md`
  - `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Repo files:
  - `@24vlh/vds/src/primitives.css`
  - `@24vlh/vds/src/themes/*.css`
  - `@24vlh/vds/src/components/*.css`
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/doc-raw/*.doc.html`
- Current audit results:
  - `pnpm run audit:tokens` passes.
  - `pnpm run audit` passes.
  - `pnpm run audit:dist` passes.
  - `pnpm run audit:consumers` was run and failed because the committed consumer compatibility reports are stale; no `pnpm run consumer:scan` refresh was run because write/regeneration commands are out of scope for `VDS-1080`.
- Standards baseline:
  - WCAG 2.2 AA from `VDS-0060`.
  - Modern evergreen browser support from `VDS-0050`.

## 4. Current Behavior Snapshot

- Source roles:
  - `@24vlh/vds/src/primitives.css` owns radius, border-width, tab-indicator, and shadow primitives.
  - Theme files own border, shadow, and surface role values, not radius primitives.
  - Component CSS owns local surface, border, radius, and depth aliases.
  - Utilities expose radius, border, and shadow helpers as public or candidate-public compatibility surfaces.
  - Focus-ring and overlay-depth decisions must coordinate with `VDS-1060` and `VDS-1070`.
- Primitive token surface:
  - `16` tokens total.
  - Radius tokens: `8`.
  - Border and indicator tokens: `3`.
  - Shadow tokens: `5`.
  - Unreferenced primitive token: `shadow-lg`.
  - Highest primitive reference counts include `border-width` `112`, `radius-md` `77`, `border-width-strong` `51`, `radius-sm` `49`, `radius-full` `35`, and `radius-lg` `32`.
- Declaration evidence:
  - `border-radius`: `268` declarations in `33` files; `227` tokenized, `27` hard-coded, `14` none/zero.
  - `box-shadow`: `164` declarations in `26` files; `148` tokenized, `1` hard-coded, `15` none/zero.
  - Aggregate border/outline surface: `931` declarations in `34` files; `767` tokenized, `37` hard-coded, `127` none/zero.
  - Notable hard-coded samples include pill/circle radii, forced-colors border values, and one inset highlight shadow.
- Token layering evidence:
  - Component CSS defines `25` radius-related, `151` border-related, and `14` shadow-related custom properties across `25` component files.
  - Each theme file currently has `0` radius, `68` border, `8` shadow, and `30` surface custom-property definitions.
  - Utilities and docs use `.shadow-1`, `.shadow-2`, `.shadow-3`, and `.shadow-none`, while primitive shadows use `shadow-xs/sm/md/lg/xl`. This is a naming-layer mismatch, not an approved cleanup.
- Selector and docs evidence:
  - Surface/depth selector inventory contains `178` matching classes.
  - `139` are `public`.
  - `39` are `candidate-public`.
  - Notable selector groups include outline, card, surface, panel, radius, border, bordered, borderless, shadow, elevated, separator, and divider.
  - Raw docs mention radius `177` times, border `428` times, shadow `68` times, and surface `2992` times.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token name, token value, selector, theme, selector inventory, consumer report, or generated output changes.
- Treat radius, border-width, tab-indicator, and shadow primitives as the current canonical low-level shape/depth scale.
- Treat theme border, shadow, and surface tokens as theme-owned roles until theme architecture work decides otherwise.
- Treat component-local radius, border, shadow, and surface aliases as component-owned until later component audits decide whether normalization is required.
- Treat utility radius, border, and shadow classes as public or candidate-public compatibility surfaces.
- Treat `.shadow-1` through `.shadow-3` versus primitive `shadow-xs/sm/md/lg/xl` as token-layer evidence for later utility and theme architecture work.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.
- If future radius, border, or shadow work changes source CSS while generated output is out of scope, its implementation log must record `dist refresh pending`.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/tokens/vds-radius-border-shadow-token-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1080` and set next recommended item to `VDS-1090`.
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
  - None for package consumers in this item. Later radius, border, shadow, surface, card, panel, outline, divider, separator, elevation, focus-ring, or utility changes must be migration-planned if they affect public, candidate-public, legacy-compatible, or consumer-overridden surfaces.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future shadow and border cleanup must preserve visible keyboard focus and coordinate with `VDS-1060`.
- Semantics or ARIA:
  - No runtime behavior changes.
- Reduced motion:
  - No runtime behavior changes.
- Forced colors or contrast:
  - No runtime behavior changes. Forced-colors border values, focus shadows, and readable surface contrast remain later accessibility/theme work.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Future radius, border, and shadow cleanup must preserve readable density and usable touch surfaces across the `VDS-0070` viewport matrix.
- Theme coverage:
  - No theme changes. Theme border, shadow, and surface role findings must preserve token naming boundaries from `VDS-1020` and contrast expectations from `VDS-0080`.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:consumers`
  - `pnpm run audit:dist`
- Radius/border/shadow audit scan:
  - Record primitive token list, reference counts, and unreferenced tokens.
  - Record border-radius, box-shadow, border, outline, and outline-offset declaration counts.
  - Record tokenized versus hard-coded declaration counts.
  - Record component-local and theme-owned radius, border, shadow, and surface custom property evidence.
  - Record surface/depth selector inventory evidence.
  - Record raw-doc radius, border, shadow, and surface coverage.
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
  - Confirm master map, feature plan, and radius/border/shadow audit artifact agree that no source CSS, token names, docs, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1090`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting radius, border, shadow, surface, and depth behavior before theme architecture work.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later token, utility, component surface, or docs decisions may require migration notes.

## 10. Risks

- `shadow-lg` is unreferenced, but that is an audit finding only and not an approved removal.
- Shadow naming layers differ between utility/docs examples and primitive tokens.
- Hard-coded pill/circle radii may be intentional shape semantics and must be classified before token replacement.
- Focus rendering uses both outline and box-shadow treatments, so surface cleanup can affect keyboard visibility and forced-colors behavior.
- Overlay, card, panel, popover, tooltip, modal, command, toast, and sticky surfaces rely on borders and shadows that interact with z-index and stacking findings.
- Theme files own many border, shadow, and surface roles, but no radius roles; theme architecture must decide whether that boundary remains correct.
- Public and candidate-public surface classes are a compatibility surface and must not be renamed or removed casually.

## 11. Open Questions

- Should `.shadow-1` through `.shadow-3` remain the public utility naming, or should later docs map them to the primitive `shadow-xs/sm/md/lg/xl` scale? Deferred to utility cleanup and theme architecture work.
- Should pill and circle radii use primitives everywhere, or remain explicit shape semantics in component CSS? Deferred to component audits.
- Should theme files define any radius roles, or should radii remain primitive-only? Deferred to `VDS-1090`.
- Which component-local surface aliases should become semantic/theme roles? Deferred to theme architecture and component audits.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added radius, border, and shadow token audit artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1080` and set next recommended item to `VDS-1090`.
- `2026-05-23`: Ran/read a read-only radius/border/shadow audit scan. Summary: primitive radius/border/shadow token count `16`; radius tokens `8`; border/indicator tokens `3`; shadow tokens `5`; unreferenced primitive token `shadow-lg`; highest references include `border-width` `112`, `radius-md` `77`, `border-width-strong` `51`, `radius-sm` `49`, `radius-full` `35`, and `radius-lg` `32`; `border-radius` declarations count `268` across `33` files with `227` tokenized, `27` hard-coded, and `14` none/zero; `box-shadow` declarations count `164` across `26` files with `148` tokenized, `1` hard-coded, and `15` none/zero; aggregate border/outline surface count `931` declarations across `34` files with `767` tokenized, `37` hard-coded, and `127` none/zero; component CSS defines `25` radius-related, `151` border-related, and `14` shadow-related custom properties across `25` files; each theme file has `0` radius, `68` border, `8` shadow, and `30` surface custom-property definitions; selector inventory has `178` surface/depth classes with `139` public and `39` candidate-public; raw docs mention radius `177` times, border `428` times, shadow `68` times, and surface `2992` times.

## 14. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-1080` forbids write/regeneration commands.
  - Read-only radius/border/shadow audit scan completed.
  - VDS-1080 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1080-radius-border-and-shadow-token-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-radius-border-shadow-token-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; theme architecture audit continues in `VDS-1090`.
