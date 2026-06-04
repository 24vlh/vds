# VDS-1050 Motion Token and Reduced-Motion Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-1050`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1050-motion-token-and-reduced-motion-audit.md`

## 1. Goal

Create the motion token and reduced-motion audit for VDS before focus, z-index, radius/border/shadow, and theme architecture work continues. This item records how primitive motion tokens, `base.css`, component transitions, component animations, keyframes, raw docs, and reduced-motion coverage currently work.

## 2. Scope

### In scope

- Record motion source roles across primitives, base, component CSS, and raw docs.
- Record primitive motion token list, reference counts, and unreferenced-token evidence.
- Record source-wide transition, animation, keyframe, and reduced-motion evidence.
- Record tokenized versus hard-coded motion declaration counts.
- Record files with animation/keyframes but no file-local reduced-motion block.
- Record raw-doc motion coverage.
- Add a motion token and reduced-motion audit artifact for later motion token cleanup, animation review, reduced-motion fixes, component audits, accessibility checks, migration notes, and release verification.
- Update the master feature map so the token/theme track continues to `VDS-1060`.

### Out of scope

- Changing CSS, token names, token values, docs demos, generated `dist`, package metadata, scripts, workflows, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing transitions, animations, keyframes, loading states, reduced-motion behavior, raw docs, or generated docs metadata.
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
  - `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
  - `@24vlh/vds/docs/planning/tokens/vds-spacing-layout-rhythm-audit.md`
  - `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Repo files:
  - `@24vlh/vds/src/primitives.css`
  - `@24vlh/vds/src/base.css`
  - `@24vlh/vds/src/components/*.css`
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/doc-raw/*.doc.html`
- Current audit results:
  - `pnpm run audit:tokens` passes.
  - `pnpm run audit` passes.
  - `pnpm run audit:consumers` passes.
  - `pnpm run audit:dist` passes.
- Legacy or consumer context reviewed:
  - No consumer-facing CSS, package output, or motion compatibility behavior changes happen in this planning item.

## 4. Current Behavior Snapshot

- Source roles:
  - `@24vlh/vds/src/primitives.css` owns motion primitives: `--transition-fast`, `--transition-normal`, `--transition-slow`, `--ease-out`, `--ease-in`, `--ease-in-out`, and `--motion-none`.
  - `@24vlh/vds/src/base.css` owns the global reduced-motion safety net by overriding transition/easing tokens and suppressing animation/transition duration under `prefers-reduced-motion: reduce`.
  - Component CSS owns local transition, animation, keyframe, loading, shimmer, toast, progress, icon, skeleton, and overlay behavior.
  - Raw docs explain motion expectations, but source CSS remains the behavior source of truth.
- Primitive token evidence:
  - Motion/easing primitives: `7`.
  - Unreferenced motion primitives: `transition-slow` and `ease-in-out`.
  - Token references:
    - `transition-fast`: `66`.
    - `transition-normal`: `44`.
    - `ease-out`: `5`.
    - `ease-in`: `2`.
    - `motion-none`: `4`.
- Source-wide motion evidence:
  - `27` CSS files include transition, animation, keyframe, or reduced-motion behavior.
  - `transition` declarations: `83`; `43` tokenized, `31` hard-coded, and `9` explicit `none`.
  - `animation` declarations: `36`; `12` tokenized, `15` hard-coded, and `9` explicit `none`.
  - `@keyframes`: `19` across `11` files.
  - Reduced-motion blocks: `10` blocks across `9` files.
  - Files with animation/keyframes but no file-local reduced-motion block: `charts.css`, `feedback.css`, `forms-advanced.css`, `forms.css`, `hero.css`, `progress.css`, and `tables.css`.
- Docs evidence:
  - `18` raw docs mention motion-related terms.
  - Strongest raw-doc coverage appears in `vds-base`, `vds-toasts`, `vds-overlays`, `vds-icons`, `vds-command`, `vds-flows`, and `vds-skeleton`.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token name, token value, selector, theme, or generated output changes.
- Treat primitive motion tokens as the current canonical low-level transition/easing scale for future motion cleanup.
- Treat `base.css` reduced-motion handling as the current global safety net.
- Treat component-local animation, keyframe, loading, shimmer, progress, toast, skeleton, icon, and overlay behavior as component-owned until later component audits decide whether local reduced-motion handling is required.
- Treat hard-coded transition and animation values as audit findings only. Later cleanup must classify whether each value is an intentional component behavior, a tokenization candidate, a local alias need, or a migration-sensitive public behavior.
- Treat unreferenced motion primitives as possible public scale reserves or cleanup candidates, not approved removals.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.
- If future motion work changes source CSS while generated output is out of scope, its implementation log must record `dist refresh pending`.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/tokens/vds-motion-token-reduced-motion-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1050` and set next recommended item to `VDS-1060`.
- Do not change README, raw docs, docs shell, docs demos, generated docs indexes, or agents docs output in this item.

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None in this item.
- Breaking changes:
  - None in CSS, tokens, custom property names, package import paths, generated `dist`, workflows, docs routes, or package version fields.
- Migration notes:
  - None for package consumers in this item. Later transition, animation, keyframe, reduced-motion, loading, skeleton, progress, toast, icon, or overlay behavior changes must be migration-planned if they affect public, candidate-public, legacy-compatible, or consumer-overridden surfaces.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future motion cleanup must preserve visible focus and avoid motion that masks interaction state.
- Semantics or ARIA:
  - No runtime behavior changes.
- Reduced motion:
  - No runtime behavior changes. Current global and file-local reduced-motion handling is recorded for later accessibility and component audits.
- Forced colors or contrast:
  - No runtime behavior changes.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Future motion cleanup must account for viewport-height panels, overlays, and responsive layout behavior.
- Theme coverage:
  - No theme changes. Motion audit findings must preserve token naming boundaries from `VDS-1020` and spacing/layout rhythm boundaries from `VDS-1040`.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:consumers`
  - `pnpm run audit:dist`
- Motion audit scan:
  - Record primitive motion token list, reference counts, and unreferenced tokens.
  - Record transition, animation, keyframe, and reduced-motion counts.
  - Record tokenized versus hard-coded motion declarations.
  - Record files with animation/keyframes but no file-local reduced-motion block.
  - Record raw-doc motion coverage.
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
  - Confirm master map, feature plan, and motion audit artifact agree that no source CSS, token names, docs, generated output, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1060`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting motion tokens and reduced-motion behavior before focus, z-index, radius/border/shadow, and theme architecture work.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later motion token, transition, animation, keyframe, or reduced-motion behavior changes may require migration notes.

## 10. Risks

- Many transitions use hard-coded `0.15s` or `0.2s` values instead of primitives.
- Animation duration is split between tokens, hard-coded values, component variables, and explicit `none`.
- Some animated components rely on the base reduced-motion safety net rather than file-local reduced-motion handling.
- `transition-slow` and `ease-in-out` may be public scale reserves or cleanup candidates, not approved removals.
- Motion cleanup overlaps with focus, loading states, progress indicators, skeletons, overlays, toasts, icons, and responsive layout behavior.

## 11. Open Questions

- Should `transition-slow` and `ease-in-out` remain public scale reserves, or should they become deprecation candidates? Deferred to later token cleanup and migration planning.
- Which animated components need file-local reduced-motion handling beyond the global `base.css` safety net? Deferred to component audits and accessibility smoke work.
- Should hard-coded `0.15s` and `0.2s` transition values be normalized to primitives? Deferred to motion cleanup and visual QA.
- Should animation durations use global motion tokens, component-local variables, or both? Deferred to token architecture and component audit work.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added motion token and reduced-motion audit artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1050` and set next recommended item to `VDS-1060`.
- `2026-05-23`: Ran/read a read-only motion audit scan. Summary: motion/easing primitives count `7`; unreferenced motion primitives are `transition-slow` and `ease-in-out`; token references are `transition-fast` `66`, `transition-normal` `44`, `ease-out` `5`, `ease-in` `2`, and `motion-none` `4`; `27` CSS files include transition, animation, keyframe, or reduced-motion behavior; `transition` declarations count `83` with `43` tokenized, `31` hard-coded, and `9` explicit `none`; `animation` declarations count `36` with `12` tokenized, `15` hard-coded, and `9` explicit `none`; `@keyframes` count `19` across `11` files; reduced-motion blocks count `10` across `9` files; files with animation/keyframes but no file-local reduced-motion block are `charts.css`, `feedback.css`, `forms-advanced.css`, `forms.css`, `hero.css`, `progress.css`, and `tables.css`; raw docs with motion mentions count `18`.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - `pnpm run audit:dist` passed.
  - Read-only motion audit scan completed.
  - VDS-1050 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1050-motion-token-and-reduced-motion-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-motion-token-reduced-motion-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; focus ring and interaction state audit continues in `VDS-1060`.
