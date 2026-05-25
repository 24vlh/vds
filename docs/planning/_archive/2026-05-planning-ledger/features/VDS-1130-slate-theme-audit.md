# VDS-1130 Slate Theme Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-1130`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1130-slate-theme-audit.md`

## 1. Goal

Create the Slate-specific theme audit before theme-switcher/docs theme behavior work. This item records the current `slate-light` and `slate-dark` token surface, warm neutral identity, sampled contrast evidence, muted text risks, controls/data-density considerations, chart/data-surface considerations, and the rules later Slate fixes must follow.

## 2. Scope

### In scope

- Record Slate root, declaration, token, and literal counts.
- Record Slate token groups, including semantic, state-soft, table, button, hero, section, code, overlay, focus, link, border, surface, shadow, radius-related, and chart-prefixed groups.
- Record Slate brand, focus, shadow, overlay, placeholder, selection, semantic, table, code, controls, and chart/data-surface token evidence.
- Record sampled contrast pass, review, manual alpha/composite, and release-risk candidate findings.
- Add a Slate audit artifact for later Slate contrast fixes, muted text/control cleanup, semantic token cleanup, chart/data visual review, component audits, docs rewrite, migration notes, and release verification.
- Update the master feature map so the token/theme track continues to `VDS-1140`.

### Out of scope

- Changing CSS, token names, token values, theme roots, docs demos, generated `dist`, package metadata, scripts, workflows, selector inventory, consumer reports, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing Slate contrast, muted text, semantic states, control states, token naming, component-scoped theme values, chart/data surface behavior, hard-coded colors, docs examples, or generated docs metadata.
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
  - `@24vlh/vds/docs/planning/tokens/vds-navy-theme-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-carbon-theme-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-graphite-theme-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
  - `@24vlh/vds/docs/planning/tokens/vds-focus-ring-interaction-state-audit.md`
  - `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
- Repo files:
  - `@24vlh/vds/src/themes/slate.css`
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
  - `@24vlh/vds/src/themes/slate.css` has `664` lines.
  - `416` custom property declarations total.
  - `208` declarations in `slate-light`.
  - `208` declarations in `slate-dark`.
  - `208` unique token names.
  - Literal surface: `337` hex colors, `48` rgb/rgba values, `4` gradients, and `35` `var(...)` aliases.
- Token group evidence:
  - `70` `color-*` tokens.
  - `30` `semantic-*` tokens.
  - `21` state-soft aliases.
  - Table `21`, button `13`, hero `11`, section `7`, code `13`, overlay `4`, focus `1`, link `3`.
  - Border-related `34`, surface-related `15`, shadow-related `4`, radius-related `0`, chart-prefixed theme tokens `0`.
- Brand and focus evidence:
  - Light brand: ink `#2A2F33`, accent `#997939`.
  - Dark brand: ink `#F6F5F1`, accent `#C6A667`.
  - Focus ring resolves to `#997939` in light and `#D7C297` in dark.
  - Dark `color-accent` resolves to `#1371a3`, separate from the Slate brand accent token.
  - Overlay backdrop tokens are identical between light and dark, including loading at `rgba(0, 0, 0, 0.25)`.
- Sampled contrast evidence:
  - Strong passes include primary text, muted text, focus, footer text, on-accent text in light, most light semantic pairs, dark text/muted/soft text, dark focus/link, all sampled dark semantic pairs, and dark code comments.
  - Review candidates include light borders, light link text at about `3.74:1`, light accent at about `2.13:1`, dark border-on-surface, dark strong border, dark accent, and dark on-accent.
  - Release-risk candidates include light `color-text-soft` on `color-bg` at about `1.96:1`, light strong warning at about `2.90:1`, and light code comments at about `2.51:1`.
  - Manual alpha/composite checks are needed for placeholders, selection colors, translucent surfaces, overlays, gradients, table/data row surfaces, and chart usage that consumes generic state/accent tokens.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token name, token value, selector, theme root, selector inventory, consumer report, or generated output changes.
- Treat `src/themes/slate.css` as a pure token-layer file.
- Preserve `slate-light` and `slate-dark` roots.
- Treat Slate token names and theme roots as compatibility-sensitive.
- Classify contrast findings as `pass`, `review`, `needs manual alpha/composite check`, or `release-risk candidate`; do not fix values in this item.
- Use `VDS-1090` boundaries: primitives stay primitive-owned, component-local aliases stay component-owned, and Slate owns its theme values.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.
- If future Slate work changes source CSS while generated output is out of scope, its implementation log must record `dist refresh pending`.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/tokens/vds-slate-theme-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1130` and set next recommended item to `VDS-1140`.
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
  - None for package consumers in this item. Later Slate root, Slate token, semantic-state, muted text, focus, controls, table, code, chart/data, or component-scoped theme-token changes must be migration-planned if they affect public, candidate-public, legacy-compatible, or consumer-overridden surfaces.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future Slate cleanup must preserve visible focus and coordinate with `VDS-1060`.
- Semantics or ARIA:
  - No runtime behavior changes.
- Reduced motion:
  - No runtime behavior changes.
- Forced colors or contrast:
  - No runtime behavior changes. Slate fixes must review text, muted text, focus, borders, semantic states, overlays, disabled/read-only states, controls, code, tables, selection, placeholders, and chart/data marks against WCAG 2.2 AA expectations.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Future Slate cleanup must preserve readable density and usable surfaces across the `VDS-0070` viewport matrix.
- Theme coverage:
  - Slate token parity must remain aligned with the wider theme matrix unless a later approved item changes the architecture.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:dist`
  - `pnpm run audit:consumers`
- Slate theme scan:
  - Record root, declaration, token, and literal counts.
  - Record token group counts.
  - Record brand, focus, shadow, overlay, placeholder, selection, semantic, table, code, controls, and chart/data-surface token evidence.
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
  - Confirm master map, feature plan, and Slate artifact agree that no source CSS, token names, theme values, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1140`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting Slate risks before theme-switcher/docs theme behavior and later theme cleanup work.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later token, theme root, theme path, or component-scoped Slate-token decisions may require migration notes.

## 10. Risks

- Light `color-text-soft` is very weak and may be unsafe for meaningful labels or helper text.
- Light code comments and strong warning text are below normal-text contrast expectations.
- Warm neutral surfaces can become muddy if borders, muted text, shadows, and disabled/control states collapse together.
- Dark Slate semantic pairs sample strongly, but dark accent/on-accent hierarchy still needs context review.
- Alpha/composite surfaces cannot be fully judged from static hex contrast alone.
- No disabled or selected theme tokens exist by name; disabled/read-only visibility depends on component styling.
- Chart/data surfaces need component-context review because there are no chart-prefixed theme tokens.

## 11. Open Questions

- Should Slate `color-text-soft` be reserved for decorative or large text only, or adjusted for normal helper text and labels? Deferred to later Slate fix work.
- Should light code comments and strong warning text move to stronger text values? Deferred to later approved token changes.
- Should dark Slate `color-accent` remain blue while the brand accent is warm gold? Deferred to theme architecture and component context review.
- Should chart/data components get dedicated theme tokens or continue using generic state/accent tokens? Deferred to chart/data component audits and theme architecture cleanup.
- Should placeholder, selection, overlay, and table row alpha colors get automated composite checks? Deferred to contrast automation and quality work.

## 12. Approval

- Requested on: `2026-05-24`
- Approved by: user
- Approved on: `2026-05-24`

## 13. Implementation Log

- `2026-05-24`: Created this plan file.
- `2026-05-24`: Added Slate theme audit artifact.
- `2026-05-24`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1130` and set next recommended item to `VDS-1140`.
- `2026-05-24`: Ran/read a read-only Slate theme scan. Summary: `src/themes/slate.css` has `664` lines; `416` custom property declarations total; `208` declarations in `slate-light`; `208` in `slate-dark`; `208` unique token names; literal surface has `337` hex colors, `48` rgb/rgba values, `4` gradients, and `35` `var(...)` aliases; token groups include `70` `color-*`, `30` `semantic-*`, `21` state-soft aliases, table `21`, button `13`, hero `11`, section `7`, code `13`, overlay `4`, focus `1`, link `3`, border-related `34`, surface-related `15`, shadow-related `4`, radius-related `0`, and chart-prefixed theme tokens `0`; focus ring resolves to `#997939` in light and `#D7C297` in dark; sampled contrast passes include primary text, muted text, focus, footer text, light on-accent text, most light semantic pairs, dark text/muted/soft text, dark focus/link, all sampled dark semantic pairs, and dark code comments; review candidates include light borders, light link text, light accent, dark border-on-surface, dark strong border, dark accent, and dark on-accent; release-risk candidates include light `color-text-soft` on `color-bg` at about `1.96:1`, light strong warning at about `2.90:1`, and light code comments at about `2.51:1`; alpha/composite checks are needed for placeholders, selection colors, translucent surfaces, overlays, gradients, table/data row surfaces, and chart usage that consumes generic state/accent tokens.

## 14. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-1130` forbids write/regeneration commands.
  - Read-only Slate theme scan completed.
  - VDS-1130 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1130-slate-theme-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-slate-theme-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; theme switcher and docs theme behavior continues in `VDS-1140`.
