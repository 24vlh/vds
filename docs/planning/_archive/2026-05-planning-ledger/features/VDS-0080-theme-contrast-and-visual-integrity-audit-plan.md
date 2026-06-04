# VDS-0080 Theme Contrast and Visual Integrity Audit Plan

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0080`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0080-theme-contrast-and-visual-integrity-audit-plan.md`

## 1. Goal

Create the theme contrast and visual integrity baseline required by the VDS `1.0.0` release gates. This item defines the WCAG-backed contrast rules, theme validation matrix, visual integrity checks, and future audit expectations for graphite, carbon, navy, and slate across light and dark modes.

## 2. Scope

### In scope

- Record WCAG 2.2 AA contrast expectations for text, large text, non-text UI indicators, focus rings, state affordances, and meaningful chart/status marks.
- Record the theme validation matrix for all current VDS theme roots.
- Record current source evidence for theme token parity, color literal surface, hard-coded component colors, focus-visible coverage, disabled selectors, and forced-colors coverage.
- Add a release theme contrast and visual integrity baseline artifact for later component, token, documentation, migration, quality, and release work.
- Update the release policy gate and master feature map so future sessions use `VDS-0090` as the next recommended item.

### Out of scope

- Runtime CSS changes, token changes, selector changes, docs demo rewrites, package metadata changes, workflows, generated `dist`, build outputs, or version bumps.
- Automated contrast tooling, screenshot comparison, Playwright visual checks, or full per-component contrast measurement.
- Fixing theme/token issues found by the evidence scan.
- Running `pnpm run build` or `pnpm run build:prod`.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/features/VDS-0060-accessibility-baseline-audit-plan.md`
  - `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
  - `@24vlh/vds/docs/planning/release/vds-browser-css-support-matrix.md`
  - `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
  - `@24vlh/agents/docs_md/design/w3c/wcag-2-2-quick-reference.md`
  - `@24vlh/agents/docs_md/mobile-design/foundations/accessibility.md`
- Repo files:
  - `@24vlh/vds/src/themes/*.css`
  - `@24vlh/vds/src/primitives.css`
  - `@24vlh/vds/src/base.css`
  - `@24vlh/vds/src/components/*.css`
- Current audit results:
  - `VDS-0060` records WCAG 2.2 AA as the accessibility baseline.
  - `VDS-0070` records responsive readability and focus visibility expectations.
- Legacy or consumer context reviewed:
  - Consumer compatibility is recorded by `VDS-0030`; this item does not scan consumer theme overrides or product-level visual regressions.

## 4. Current Behavior Snapshot

- Source files:
  - Theme files: `4`.
  - Theme roots: `8` (`graphite-light`, `graphite-dark`, `carbon-light`, `carbon-dark`, `navy-light`, `navy-dark`, `slate-light`, `slate-dark`).
  - Each theme file has `416` custom property declarations and `208` unique token names.
  - Theme token parity is currently complete across graphite, carbon, navy, and slate.
- Theme color literals:
  - Graphite: `333` hex and `48` rgb/rgba.
  - Carbon: `333` hex and `48` rgb/rgba.
  - Navy: `340` hex and `48` rgb/rgba.
  - Slate: `337` hex and `48` rgb/rgba.
- Source color surface:
  - Hex colors `1344` matches in `5` files; rgb/rgba `219` in `12`; `color-mix()` `25` in `7`; `currentColor` `42` in `13`.
  - Component hard-coded hex/rgb values: `23` matches in `8` component files.
  - Focus-visible selectors: `94` matches in `16` files.
  - Disabled selectors: `144` matches in `9` files.
  - Forced-colors blocks: `2` matches in `2` files.
- Raw docs:
  - No raw docs rewrite in this item. Later documentation work must show theme-sensitive examples only after theme audit expectations are stable.
- Known mismatches:
  - No automated contrast report exists yet.
  - Forced-colors coverage is much smaller than the broader focus/state/color surface.
  - Component-local hard-coded colors need later review so theme behavior does not depend on untracked literals.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No CSS or token implementation changes.
- Later theme and component audits must classify contrast/visual findings as:
  - passes baseline;
  - needs measurement;
  - needs token cleanup;
  - progressive visual enhancement;
  - release-blocking contrast issue.
- Public, candidate-public, and legacy-compatible selectors remain protected; visual fixes must not rename or remove protected selectors without an approved migration/deprecation plan.

### Build, audit, or package surface

- Add `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`.
- Do not add package scripts, dependencies, screenshot automation, or build configuration changes in this item.
- Record automated contrast and visual regression tooling as later quality/tooling work.

### Documentation or demo surface

- Add this feature plan.
- Update `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md` so the theme gate points to the new baseline.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0080` and set `VDS-0090` as next.

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None in this item.
- Breaking changes:
  - None in this item.
- Migration notes:
  - None in this item. Later migration notes must call out theme-sensitive breaking changes when public selectors, state styling, semantic token meanings, or theme behavior change.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - Focus indicators must remain visible against adjacent surfaces in every theme.
- Semantics or ARIA:
  - Visual state colors must align with semantic state meaning and must not be the only way a meaningful state is conveyed.
- Reduced motion:
  - No change; motion handling remains governed by `VDS-0050` and `VDS-0060`.
- Forced colors or contrast:
  - Normal text and meaningful labels must target WCAG 2.2 AA `4.5:1`.
  - Large text and strong display text must target `3:1`.
  - Non-text UI indicators such as icons, borders, focus rings, selected states, invalid states, and meaningful chart/status marks must target `3:1`.
  - Disabled and read-only states must be visually distinct and must not rely on color alone, while not pretending disabled content is active content.
- Mobile/adaptive behavior:
  - Responsive readability remains governed by `VDS-0070`; theme audits must verify narrow layouts do not make contrast or state affordances visually collapse.
- Theme coverage:
  - All eight theme roots are in the validation matrix.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit`
  - `pnpm run audit:consumers`
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Theme/color source scan:
  - Read-only scan of theme roots, custom property parity, color literals, component hard-coded colors, focus-visible selectors, disabled selectors, and forced-colors blocks.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, release policy, and theme baseline agree on the eight-theme validation matrix.
  - Confirm the theme baseline states that no runtime CSS, token, build output, or version change happens in `VDS-0080`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by satisfying the theme contrast baseline gate from `VDS-0040`.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - Future migration/release notes must call out theme-sensitive breaking changes or changed token semantics.

## 10. Risks

- A planning baseline can be ignored unless later token, theme, component, and docs audits explicitly attach findings to tokens, classes, examples, and release gates.
- Static color scans do not prove real contrast because token combinations, overlays, opacity, shadows, images, and state stacking require rendered context.
- Fixing contrast may require token semantic changes later, which can affect visual compatibility even when class names remain stable.

## 11. Open Questions

- Which contrast checks should become automated? Deferred to quality/tooling work.
- Which theme/token families need immediate fixes? Deferred to token/theme audit plans.
- Which components require first visual snapshots? Deferred to quality and component audit wave plans.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added theme contrast and visual integrity baseline artifact.
- `2026-05-23`: Updated release policy to link the theme baseline gate.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0080` and set next recommended item to `VDS-0090`.
- `2026-05-23`: Ran/read the theme and color source scan. Summary: theme files `4`; theme roots `8`; each theme file has `416` custom property declarations and `208` unique token names; theme token parity is complete across graphite, carbon, navy, and slate; theme color literals are graphite `333` hex and `48` rgb/rgba, carbon `333` and `48`, navy `340` and `48`, slate `337` and `48`; source color surface is hex colors `1344` in `5` files, rgb/rgba `219` in `12`, `color-mix()` `25` in `7`, `currentColor` `42` in `13`; component hard-coded hex/rgb values `23` in `8` component files; focus-visible selectors `94` in `16`; disabled selectors `144` in `9`; forced-colors blocks `2` in `2`.
- `2026-05-23`: Ran validation: `pnpm run audit` passed; `pnpm run audit:consumers` initially reported stale consumer compatibility artifacts, so `pnpm run consumer:scan` refreshed the existing report and the follow-up `pnpm run audit:consumers` passed; VDS-0080 markdown sanity checks and `git diff --check` passed.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit` passed.
  - `pnpm run consumer:scan` refreshed stale consumer compatibility artifacts.
  - `pnpm run audit:consumers` passed.
  - VDS-0080 markdown sanity checks passed.
  - `git diff --check` passed.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0080-theme-contrast-and-visual-integrity-audit-plan.md`
  - `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; documentation rewrite strategy continues in `VDS-0090`.
