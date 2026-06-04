# VDS-1090 Theme Architecture Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-1090`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1090-theme-architecture-audit.md`

## 1. Goal

Create the VDS theme architecture audit before individual theme audits begin. This item records the current theme-file contract, theme root matrix, token parity, token-layer boundaries, theme-scoped component-token surface, unreferenced theme-token evidence, and the rules later graphite, carbon, navy, and slate audits must follow.

## 2. Scope

### In scope

- Record theme file and theme root evidence.
- Record token-name parity across graphite, carbon, navy, and slate.
- Record theme token groups and component-prefixed theme-token counts.
- Record referenced versus unreferenced theme token evidence.
- Record theme import/build-surface evidence.
- Record theme architecture risks and future-work routing.
- Add a theme architecture audit artifact for individual theme audits, semantic-token cleanup, component-local alias review, docs rewrite, migration notes, and release verification.
- Update the master feature map so the token/theme track continues to `VDS-1100`.

### Out of scope

- Changing CSS, token names, token values, theme roots, docs demos, generated `dist`, package metadata, scripts, workflows, selector inventory, consumer reports, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing contrast, token naming, component-scoped theme values, semantic-state overlaps, hard-coded colors, docs examples, or generated docs metadata.
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
  - `@24vlh/vds/docs/planning/tokens/vds-radius-border-shadow-token-audit.md`
  - `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Repo files:
  - `@24vlh/vds/src/themes/graphite.css`
  - `@24vlh/vds/src/themes/carbon.css`
  - `@24vlh/vds/src/themes/navy.css`
  - `@24vlh/vds/src/themes/slate.css`
  - `@24vlh/vds/src/primitives.css`
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/doc-raw/*.doc.html`
- Current audit results:
  - `pnpm run audit:tokens` passes.
  - `pnpm run audit` passes.
  - `pnpm run audit:dist` passes.
  - `pnpm run audit:consumers` was run and failed because the committed consumer compatibility reports are stale; no `pnpm run consumer:scan` refresh was run because write/regeneration commands are out of scope for `VDS-1090`.
- Standards baseline:
  - WCAG 2.2 AA from `VDS-0060`.
  - Modern evergreen browser support from `VDS-0050`.
  - Theme contrast and visual integrity baseline from `VDS-0080`.

## 4. Current Behavior Snapshot

- Theme file and root evidence:
  - Theme files: `4`.
  - Theme roots: `8`.
  - Theme roots are `graphite-light`, `graphite-dark`, `carbon-light`, `carbon-dark`, `navy-light`, `navy-dark`, `slate-light`, and `slate-dark`.
  - Each theme file has `416` custom property declarations.
  - Each light root has `208` declarations.
  - Each dark root has `208` declarations.
  - Each theme file has `208` unique token names.
  - Token-name parity is currently complete across graphite, carbon, navy, and slate.
  - No source CSS file imports themes; theme files remain separately loaded and built surfaces.
- Theme token groups:
  - `70` `color-*` tokens.
  - `30` `semantic-*` tokens.
  - `21` state-soft aliases.
  - `34` border-related tokens.
  - `15` surface-related tokens.
  - `4` shadow-related tokens.
  - `0` radius-related tokens.
  - Selected component-prefixed theme groups include table `21`, button `13`, hero `11`, section `7`, doc `3`, flow `2`, slider `2`, blockquote `2`, figure `1`, and footnote `1`.
- Reference evidence:
  - `180` of `208` theme token names are referenced outside `src/themes`.
  - `28` theme token names are currently unreferenced outside theme files.
  - Unreferenced examples include error-state aliases, table row variants, figure/slider tokens, and brand/section tokens.
  - Top referenced theme tokens include `color-border-subtle`, `color-text`, `color-text-muted`, `color-surface-subtle`, `color-surface`, `color-accent`, `focus-ring-color`, and state color tokens.
- Source architecture evidence:
  - `src/themes/*.css` describe themselves as pure token layers.
  - Themes are not imported by `src/index.css` or `src/core.css`.
  - Current package/build policy treats themes as separate package-facing CSS files.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token name, token value, selector, theme root, selector inventory, consumer report, or generated output changes.
- Treat `src/themes/*.css` as pure token-layer files, not layout or component-rule files.
- Treat theme files as owners of color, surface, border, shadow, focus, link, overlay, state, code, table, and selected component-scoped theme values.
- Treat `src/primitives.css` as owner of theme-independent primitive scales such as spacing, typography, radius, motion, z-index, focus dimensions, and base shape/depth primitives.
- Treat component-local aliases as component-owned unless a later approved architecture item promotes them into theme or semantic tokens.
- Keep themes as separate package-facing CSS files. Do not import themes into `src/index.css` or `src/core.css` in this item.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.
- If future theme architecture work changes source CSS while generated output is out of scope, its implementation log must record `dist refresh pending`.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/tokens/vds-theme-architecture-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1090` and set next recommended item to `VDS-1100`.
- Do not change README, raw docs, docs shell, docs demos, generated docs indexes, or agents docs output in this item.

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None in this item.
- Breaking changes:
  - None in CSS, tokens, custom property names, theme roots, package import paths, generated `dist`, workflows, docs routes, selector inventory, consumer reports, or package version fields.
- Migration notes:
  - None for package consumers in this item. Later theme root, theme token, semantic-state, component-scoped theme token, or package-facing theme path changes must be migration-planned if they affect public, candidate-public, legacy-compatible, or consumer-overridden surfaces.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future theme cleanup must preserve visible focus and coordinate with `VDS-1060`.
- Semantics or ARIA:
  - No runtime behavior changes.
- Reduced motion:
  - No runtime behavior changes.
- Forced colors or contrast:
  - No runtime behavior changes. Individual theme audits must review text, focus, borders, semantic states, overlays, disabled/read-only states, code, tables, and selection against WCAG 2.2 AA expectations.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Future theme cleanup must preserve readable density and usable surfaces across the `VDS-0070` viewport matrix.
- Theme coverage:
  - Theme parity across graphite, carbon, navy, and slate remains required unless a later approved item changes the theme matrix.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:dist`
  - `pnpm run audit:consumers`
- Theme architecture scan:
  - Record theme roots and declaration counts.
  - Record token-name parity.
  - Record token groups and component-prefixed theme-token counts.
  - Record referenced versus unreferenced theme tokens.
  - Record import/build-surface evidence.
  - Record architecture risks and follow-up routing.
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only. If it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Planning sanity checks:
  - Confirm master map, feature plan, and theme architecture artifact agree that no source CSS, token names, theme values, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1100`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting theme architecture before individual theme audits.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later token, theme root, theme path, or component-scoped theme-token decisions may require migration notes.

## 10. Risks

- `--color-*` is a role/palette hybrid and must be classified before cleanup.
- `--semantic-*`, `--color-*` state tokens, and state-soft aliases overlap.
- Theme files contain component-scoped values, so theme role tokens and component-local aliases are not cleanly separated yet.
- Theme shadow tokens use `shadow-1`, `shadow-2`, and `shadow-3`, while primitives use `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`, and `shadow-xl`.
- Theme files define no radius roles; `VDS-1080` recorded radii as primitive/component-owned for now.
- Theme comments say components should avoid hard-coded hex values, but current source evidence still includes component hard-coded color matches from earlier audits.
- Unreferenced theme tokens may be intentional reserves, docs gaps, future component support, or cleanup candidates.

## 11. Open Questions

- Should `--color-*` remain a role/palette hybrid, or should later cleanup split palette names from role names? Deferred to semantic token cleanup and theme audits.
- Should component-prefixed theme tokens remain in theme files, or move toward component-local defaults with theme overrides only where needed? Deferred to component audits and later token architecture work.
- Should unreferenced theme tokens be documented reserves, deprecated, or removed? Deferred to individual theme audits and migration planning.
- Should `shadow-1/2/3` become the public theme shadow naming, or should it be reconciled with primitive `shadow-xs/sm/md/lg/xl`? Deferred to utility/theme cleanup.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added theme architecture audit artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1090` and set next recommended item to `VDS-1100`.
- `2026-05-23`: Ran/read a read-only theme architecture scan. Summary: theme files count `4`; theme roots count `8`; roots are `graphite-light`, `graphite-dark`, `carbon-light`, `carbon-dark`, `navy-light`, `navy-dark`, `slate-light`, and `slate-dark`; each theme file has `416` declarations and `208` unique token names; each light and dark root has `208` declarations; token-name parity is complete across all themes; token groups include `70` `color-*`, `30` `semantic-*`, `21` state-soft aliases, `34` border-related, `15` surface-related, `4` shadow-related, and `0` radius-related tokens; selected component-prefixed groups include table `21`, button `13`, hero `11`, section `7`, doc `3`, flow `2`, slider `2`, blockquote `2`, figure `1`, and footnote `1`; `180` of `208` theme token names are referenced outside `src/themes`; `28` are currently unreferenced outside theme files; no source CSS file imports themes.

## 14. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-1090` forbids write/regeneration commands.
  - Read-only theme architecture scan completed.
  - VDS-1090 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1090-theme-architecture-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-theme-architecture-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; Graphite theme audit continues in `VDS-1100`.
