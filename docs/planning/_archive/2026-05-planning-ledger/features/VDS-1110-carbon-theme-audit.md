# VDS-1110 Carbon Theme Audit

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-1110`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1110-carbon-theme-audit.md`

## 1. Goal

Create the Carbon-specific theme audit before moving to Navy. This item records the current `carbon-light` and `carbon-dark` token surface, neutral/teal brand identity, sampled contrast evidence, dark-surface handling, semantic-state risks, overlays, code/data surfaces, and the rules later Carbon fixes must follow.

## 2. Scope

### In scope

- Record Carbon root, declaration, token, and literal counts.
- Record Carbon token groups, including semantic, state-soft, table, button, hero, section, code, overlay, focus, link, border, surface, shadow, and radius-related groups.
- Record Carbon brand, focus, shadow, overlay, placeholder, selection, semantic, table, code, and data-surface token evidence.
- Record sampled contrast pass, review, manual alpha/composite, and release-risk candidate findings.
- Add a Carbon audit artifact for later Carbon contrast fixes, semantic token cleanup, component audits, docs rewrite, migration notes, and release verification.
- Update the master feature map so the token/theme track continues to `VDS-1120`.

### Out of scope

- Changing CSS, token names, token values, theme roots, docs demos, generated `dist`, package metadata, scripts, workflows, selector inventory, consumer reports, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing Carbon contrast, semantic states, token naming, component-scoped theme values, hard-coded colors, docs examples, or generated docs metadata.
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
  - `@24vlh/vds/docs/planning/tokens/vds-graphite-theme-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
  - `@24vlh/vds/docs/planning/tokens/vds-focus-ring-interaction-state-audit.md`
  - `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
- Repo files:
  - `@24vlh/vds/src/themes/carbon.css`
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
  - `@24vlh/vds/src/themes/carbon.css` has `663` lines.
  - `416` custom property declarations total.
  - `208` declarations in `carbon-light`.
  - `208` declarations in `carbon-dark`.
  - `208` unique token names.
  - Literal surface: `333` hex colors, `48` rgb/rgba values, `4` gradients, and `39` `var(...)` aliases.
- Token group evidence:
  - `70` `color-*` tokens.
  - `30` `semantic-*` tokens.
  - `21` state-soft aliases.
  - Table `21`, button `13`, hero `11`, section `7`, code `13`, overlay `4`, focus `1`, link `3`.
  - Border-related `34`, surface-related `15`, shadow-related `4`, radius-related `0`.
- Brand and focus evidence:
  - Light brand: ink `#0E1113`, accent `#2BA6A6`.
  - Dark brand: ink `#F5F7F7`, accent `#2BA6A6`.
  - Focus ring resolves to `#2BA6A6` in both light and dark.
  - Light shadows use dark neutral alpha values; dark shadows use stronger black alpha values.
  - Overlay backdrop tokens are identical between light and dark.
- Sampled contrast evidence:
  - Strong passes include primary text, muted text, footer text, on-accent text, dark link/focus/accent, and dark code comments.
  - Review candidates include light `color-text-soft`, light border tokens, light focus/accent samples, light warning semantic pairs, light code comments, dark subtle/strong borders, dark semantic info, dark semantic success, and dark semantic strong success/error samples.
  - Release-risk candidates include light `link-text` on `color-bg` at about `2.75:1` for normal text and dark semantic danger/error text on danger/error backgrounds at about `2.11:1`.
  - Manual alpha/composite checks are needed for placeholders, selection colors, translucent surfaces, overlays, gradients, and table/data row surfaces.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token name, token value, selector, theme root, selector inventory, consumer report, or generated output changes.
- Treat `src/themes/carbon.css` as a pure token-layer file.
- Preserve `carbon-light` and `carbon-dark` roots.
- Treat Carbon token names and theme roots as compatibility-sensitive.
- Classify contrast findings as `pass`, `review`, `needs manual alpha/composite check`, or `release-risk candidate`; do not fix values in this item.
- Use `VDS-1090` boundaries: primitives stay primitive-owned, component-local aliases stay component-owned, and Carbon owns its theme values.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.
- If future Carbon work changes source CSS while generated output is out of scope, its implementation log must record `dist refresh pending`.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/tokens/vds-carbon-theme-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1110` and set next recommended item to `VDS-1120`.
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
  - None for package consumers in this item. Later Carbon root, Carbon token, semantic-state, focus, table, code, overlay, or component-scoped theme-token changes must be migration-planned if they affect public, candidate-public, legacy-compatible, or consumer-overridden surfaces.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future Carbon cleanup must preserve visible focus and coordinate with `VDS-1060`.
- Semantics or ARIA:
  - No runtime behavior changes.
- Reduced motion:
  - No runtime behavior changes.
- Forced colors or contrast:
  - No runtime behavior changes. Carbon fixes must review text, focus, borders, semantic states, overlays, disabled/read-only states, code, tables, selection, and placeholders against WCAG 2.2 AA expectations.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Future Carbon cleanup must preserve readable density and usable surfaces across the `VDS-0070` viewport matrix.
- Theme coverage:
  - Carbon token parity must remain aligned with the wider theme matrix unless a later approved item changes the architecture.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:dist`
  - `pnpm run audit:consumers`
- Carbon theme scan:
  - Record root, declaration, token, and literal counts.
  - Record token group counts.
  - Record brand, focus, shadow, overlay, placeholder, selection, semantic, table, code, and data-surface token evidence.
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
  - Confirm master map, feature plan, and Carbon artifact agree that no source CSS, token names, theme values, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1120`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting Carbon risks before Navy and later theme cleanup work.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later token, theme root, theme path, or component-scoped Carbon-token decisions may require migration notes.

## 10. Risks

- Teal accent works strongly in dark mode but is weak on light backgrounds for text and focus-adjacent samples.
- Dark danger/error semantic text is below the normal-text contrast target in sampled checks.
- Dark border tokens may be too subtle for meaningful UI separation.
- Alpha/composite surfaces cannot be fully judged from static hex contrast alone.
- No disabled or selected theme tokens exist by name; disabled/read-only visibility depends on component styling.
- Table, overlay, selection, and placeholder surfaces need composite/context checks rather than flat token-pair checks.

## 11. Open Questions

- Should Carbon's light link/accent color be treated as non-text-only, or adjusted for normal text? Deferred to later Carbon fix work.
- Should dark Carbon danger/error use brighter text colors to meet normal-text contrast? Deferred to later approved token changes.
- Should subtle borders stay intentionally low-contrast, or should meaningful UI separators move to stronger border tokens? Deferred to component and theme cleanup.
- Should placeholder, selection, overlay, and table row alpha colors get automated composite checks? Deferred to contrast automation and quality work.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added Carbon theme audit artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1110` and set next recommended item to `VDS-1120`.
- `2026-05-23`: Ran/read a read-only Carbon theme scan. Summary: `src/themes/carbon.css` has `663` lines; `416` custom property declarations total; `208` declarations in `carbon-light`; `208` in `carbon-dark`; `208` unique token names; literal surface has `333` hex colors, `48` rgb/rgba values, `4` gradients, and `39` `var(...)` aliases; token groups include `70` `color-*`, `30` `semantic-*`, `21` state-soft aliases, table `21`, button `13`, hero `11`, section `7`, code `13`, overlay `4`, focus `1`, link `3`, border-related `34`, surface-related `15`, shadow-related `4`, and radius-related `0`; focus ring resolves to `#2BA6A6` in both light and dark; sampled contrast passes include primary text, muted text, footer text, on-accent text, dark link/focus/accent, and dark code comments; review candidates include light `color-text-soft`, light border tokens, light focus/accent samples, light warning semantic pairs, light code comments, dark subtle/strong borders, dark semantic info, dark semantic success, and dark semantic strong success/error samples; release-risk candidates include light `link-text` on `color-bg` at about `2.75:1` and dark semantic danger/error text on danger/error backgrounds at about `2.11:1`; alpha/composite checks are needed for placeholders, selection colors, translucent surfaces, overlays, gradients, and table/data row surfaces.

## 14. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-1110` forbids write/regeneration commands.
  - Read-only Carbon theme scan completed.
  - VDS-1110 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1110-carbon-theme-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-carbon-theme-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; Navy theme audit continues in `VDS-1120`.
