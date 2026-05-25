# VDS-1120 Navy Theme Audit

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-1120`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1120-navy-theme-audit.md`

## 1. Goal

Create the Navy-specific theme audit before moving to Slate. This item records the current `navy-light` and `navy-dark` token surface, navy/blue-gray identity, sampled contrast evidence, accent hierarchy, semantic-state risks, focus color, chart/data-surface considerations, and the rules later Navy fixes must follow.

## 2. Scope

### In scope

- Record Navy root, declaration, token, and literal counts.
- Record Navy token groups, including semantic, state-soft, table, button, hero, section, code, overlay, focus, link, border, surface, shadow, radius-related, and chart-prefixed groups.
- Record Navy brand, focus, shadow, overlay, placeholder, selection, semantic, table, code, and chart/data-surface token evidence.
- Record sampled contrast pass, review, manual alpha/composite, and release-risk candidate findings.
- Add a Navy audit artifact for later Navy contrast fixes, semantic token cleanup, chart/data visual review, component audits, docs rewrite, migration notes, and release verification.
- Update the master feature map so the token/theme track continues to `VDS-1130`.

### Out of scope

- Changing CSS, token names, token values, theme roots, docs demos, generated `dist`, package metadata, scripts, workflows, selector inventory, consumer reports, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing Navy contrast, semantic states, accent hierarchy, token naming, component-scoped theme values, chart/data surface behavior, hard-coded colors, docs examples, or generated docs metadata.
- Running visual, browser, screenshot, or accessibility smoke checks.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/tokens/vds-theme-architecture-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-carbon-theme-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-graphite-theme-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
  - `@24vlh/vds/docs/planning/tokens/vds-focus-ring-interaction-state-audit.md`
  - `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
- Repo files:
  - `@24vlh/vds/src/themes/navy.css`
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/doc-raw/*.doc.html`
- Current audit results:
  - Validation recorded in the post-implementation update.
- Standards baseline:
  - WCAG 2.2 AA from `VDS-0060`.
  - Theme contrast and visual integrity baseline from `VDS-0080`.
  - Theme architecture contract from `VDS-1090`.

## 4. Current Behavior Snapshot

- Source evidence:
  - `@24vlh/vds/src/themes/navy.css` has `662` lines.
  - `416` custom property declarations total.
  - `208` declarations in `navy-light`.
  - `208` declarations in `navy-dark`.
  - `208` unique token names.
  - Literal surface: `340` hex colors, `48` rgb/rgba values, `4` gradients, and `32` `var(...)` aliases.
- Token group evidence:
  - `70` `color-*` tokens.
  - `30` `semantic-*` tokens.
  - `21` state-soft aliases.
  - Table `21`, button `13`, hero `11`, section `7`, code `13`, overlay `4`, focus `1`, link `3`.
  - Border-related `34`, surface-related `15`, shadow-related `4`, radius-related `0`, chart-prefixed theme tokens `0`.
- Brand and focus evidence:
  - Light brand: ink `#0C1A33`, accent `#A9B4C4`.
  - Dark brand: ink `#F7F9FB`, accent `#A9B4C4`.
  - Focus ring resolves to `#8692A2` in light and `#C0CAD8` in dark.
  - Dark `color-accent` resolves to `#1371a3`, separate from the brand accent token.
  - Overlay backdrop tokens are mostly identical between light and dark, including loading at `rgba(0, 0, 0, 0.25)`.
- Sampled contrast evidence:
  - Strong passes include primary text, muted text, footer text, on-accent text in light, light semantic info/success/danger/error, dark link/focus, and dark code comments.
  - Review candidates include light `color-text-soft`, light border tokens, light focus on background at about `2.99:1`, light accent/link hierarchy, light strong warning, light code comments, dark borders, dark on-accent, dark semantic warning/success/info, and dark strong success.
  - Release-risk candidates include light `link-text` on `color-bg` at about `1.99:1`, dark semantic info at about `2.88:1`, dark semantic danger/error at about `1.69:1`, and dark strong error at about `1.86:1`.
  - Manual alpha/composite checks are needed for placeholders, selection colors, translucent surfaces, overlays, gradients, table/data row surfaces, and chart usage that consumes generic state/accent tokens.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token name, token value, selector, theme root, selector inventory, consumer report, or generated output changes.
- Treat `src/themes/navy.css` as a pure token-layer file.
- Preserve `navy-light` and `navy-dark` roots.
- Treat Navy token names and theme roots as compatibility-sensitive.
- Classify contrast findings as `pass`, `review`, `needs manual alpha/composite check`, or `release-risk candidate`; do not fix values in this item.
- Use `VDS-1090` boundaries: primitives stay primitive-owned, component-local aliases stay component-owned, and Navy owns its theme values.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.
- If future Navy work changes source CSS while generated output is out of scope, its implementation log must record `dist refresh pending`.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/tokens/vds-navy-theme-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1120` and set next recommended item to `VDS-1130`.
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
  - None for package consumers in this item. Later Navy root, Navy token, semantic-state, focus, table, code, chart/data, or component-scoped theme-token changes must be migration-planned if they affect public, candidate-public, legacy-compatible, or consumer-overridden surfaces.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future Navy cleanup must preserve visible focus and coordinate with `VDS-1060`.
- Semantics or ARIA:
  - No runtime behavior changes.
- Reduced motion:
  - No runtime behavior changes.
- Forced colors or contrast:
  - No runtime behavior changes. Navy fixes must review text, focus, borders, semantic states, overlays, disabled/read-only states, code, tables, selection, placeholders, and chart/data marks against WCAG 2.2 AA expectations.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Future Navy cleanup must preserve readable density and usable surfaces across the `VDS-0070` viewport matrix.
- Theme coverage:
  - Navy token parity must remain aligned with the wider theme matrix unless a later approved item changes the architecture.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:dist`
  - `pnpm run audit:consumers`
- Navy theme scan:
  - Record root, declaration, token, and literal counts.
  - Record token group counts.
  - Record brand, focus, shadow, overlay, placeholder, selection, semantic, table, code, and chart/data-surface token evidence.
  - Record sampled contrast pass, review, manual-alpha, and release-risk findings.
  - Record future-work routing.
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only. If it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Planning sanity checks:
  - Confirm master map, feature plan, and Navy artifact agree that no source CSS, token names, theme values, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1130`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting Navy risks before Slate and later theme cleanup work.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later token, theme root, theme path, or component-scoped Navy-token decisions may require migration notes.

## 10. Risks

- The light accent is intentionally pale and may be too weak for text links or meaningful accent marks on light backgrounds.
- Dark semantic danger/error and info text are below the normal-text contrast target in sampled checks.
- Navy can become visually one-note if blue-gray surfaces, links, focus, charts, and state colors collapse into the same hierarchy.
- Alpha/composite surfaces cannot be fully judged from static hex contrast alone.
- No disabled or selected theme tokens exist by name; disabled/read-only visibility depends on component styling.
- Chart/data surfaces need component-context review because there are no chart-prefixed theme tokens.

## 11. Open Questions

- Should Navy's pale light accent be restricted to non-text decoration, or adjusted for normal text links? Deferred to later Navy fix work.
- Should dark Navy semantic danger/error and info use brighter text colors to meet normal-text contrast? Deferred to later approved token changes.
- Should chart/data components get dedicated theme tokens or continue using generic state/accent tokens? Deferred to chart/data component audits and theme architecture cleanup.
- Should placeholder, selection, overlay, and table row alpha colors get automated composite checks? Deferred to contrast automation and quality work.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added Navy theme audit artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1120` and set next recommended item to `VDS-1130`.
- `2026-05-23`: Ran/read a read-only Navy theme scan. Summary: `src/themes/navy.css` has `662` lines; `416` custom property declarations total; `208` declarations in `navy-light`; `208` in `navy-dark`; `208` unique token names; literal surface has `340` hex colors, `48` rgb/rgba values, `4` gradients, and `32` `var(...)` aliases; token groups include `70` `color-*`, `30` `semantic-*`, `21` state-soft aliases, table `21`, button `13`, hero `11`, section `7`, code `13`, overlay `4`, focus `1`, link `3`, border-related `34`, surface-related `15`, shadow-related `4`, radius-related `0`, and chart-prefixed theme tokens `0`; focus ring resolves to `#8692A2` in light and `#C0CAD8` in dark; sampled contrast passes include primary text, muted text, footer text, light on-accent text, light semantic info/success/danger/error, dark link/focus, and dark code comments; review candidates include light `color-text-soft`, light border tokens, light focus on background, light accent/link hierarchy, light strong warning, light code comments, dark borders, dark on-accent, dark semantic warning/success/info, and dark strong success; release-risk candidates include light `link-text` on `color-bg` at about `1.99:1`, dark semantic info at about `2.88:1`, dark semantic danger/error at about `1.69:1`, and dark strong error at about `1.86:1`; alpha/composite checks are needed for placeholders, selection colors, translucent surfaces, overlays, gradients, table/data row surfaces, and chart usage that consumes generic state/accent tokens.

## 14. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-1120` forbids write/regeneration commands.
  - Read-only Navy theme scan completed.
  - VDS-1120 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1120-navy-theme-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-navy-theme-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; Slate theme audit continues in `VDS-1130`.
