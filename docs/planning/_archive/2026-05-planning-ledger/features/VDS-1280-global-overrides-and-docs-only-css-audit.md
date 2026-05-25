# VDS-1280 Global Overrides and Docs-Only CSS Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-1280`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1280-global-overrides-and-docs-only-css-audit.md`

## 1. Goal

Create the global overrides and docs-only CSS audit for the `VDS-0400 Base, Layout, Utilities, and Global CSS` track. This item records the current top-level docs CSS boundary, especially `css/overrides.css`, before cascade and specificity work continues.

## 2. Scope

### In scope

- Record top-level docs-only CSS files and their current role in the docs shell.
- Record `css/overrides.css` selector, declaration, color, media, focus, reduced-motion, and forced-colors evidence.
- Record docs shell stylesheet order and theme-switcher matrix context.
- Record package publication boundary for top-level `css/` files.
- Compare docs overrides with footer source CSS and Graphite theme footer tokens.
- Record adjacent `css/theme-switcher.css` evidence and route detailed theme-switcher behavior back to `VDS-1140`.
- Add a global overrides and docs-only CSS artifact for later cascade strategy, docs-shell cleanup, footer/theme fixes, docs rewrite, package guidance, migration notes, and release verification.
- Update the master feature map so `VDS-1280` is done and the next recommended item is `VDS-1290`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, `index.html`, raw docs, README, docs shell behavior, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Removing, narrowing, tokenizing, migrating, or retaining `css/overrides.css` as an implementation decision.
- Fixing footer source CSS, Graphite theme values, docs shell load order, theme switcher behavior, package guidance, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/architecture/vds-demo-server-doc-loader-review.md`
  - `@24vlh/vds/docs/planning/tokens/vds-theme-switcher-docs-theme-behavior.md`
  - `@24vlh/vds/docs/planning/foundation/vds-base-layer-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-core-import-contract-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-layout-system-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-section-system-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-utilities-taxonomy-and-pruning-plan.md`
  - `@24vlh/vds/docs/planning/foundation/vds-utility-responsive-variants-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-utility-accessibility-helpers-audit.md`
- Repo files:
  - `@24vlh/vds/css/overrides.css`
  - `@24vlh/vds/css/theme-switcher.css`
  - `@24vlh/vds/index.html`
  - `@24vlh/vds/src/components/header-footer.css`
  - `@24vlh/vds/src/themes/graphite.css`
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/doc-raw/vds-header-footer.doc.html`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Top-level docs-only CSS files:

- `@24vlh/vds/css/overrides.css`
- `@24vlh/vds/css/theme-switcher.css`

`css/overrides.css` evidence:

- Lines: `39`.
- Selector blocks: `8`.
- Declarations: `10`.
- Custom property definitions: `0`.
- `var(...)` references: `0`.
- Hard-coded hex references: `10`.
- Unique hard-coded hex values: `#F7F9FC`, `#FFFFFF`, `#D9E7EF`, `#F5F7FA`, and `#C7D0DA`.
- `rgb(...)` / `rgba(...)` references: `0`.
- `!important` declarations: `0`.
- Media queries: `0`.
- `:focus-visible` selectors: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.
- Referenced theme roots: `graphite-light` and `graphite-dark`.
- Pseudo-state coverage: `:hover`, `:active`, and `:visited`.

`css/overrides.css` selectors:

- `[data-theme="graphite-light"] footer a`
- `[data-theme="graphite-light"] footer a:hover`
- `[data-theme="graphite-light"] footer a:active`
- `[data-theme="graphite-light"] footer a:visited`
- `[data-theme="graphite-dark"] footer a`
- `[data-theme="graphite-dark"] footer a:hover`
- `[data-theme="graphite-dark"] footer a:active`
- `[data-theme="graphite-dark"] footer a:visited`

Docs shell evidence:

- `@24vlh/vds/index.html` loads `43` stylesheet links.
- Docs-only stylesheet links are:
  - order `41`, line `59`: `css/theme-switcher.css`;
  - order `43`, line `65`: `css/overrides.css`.
- `css/overrides.css` is the final stylesheet in the docs shell.
- `index.html` defaults to `data-theme="graphite-light"`.
- Theme switcher radio values cover all eight theme roots: `graphite-light`, `graphite-dark`, `slate-light`, `slate-dark`, `navy-light`, `navy-dark`, `carbon-light`, and `carbon-dark`.

Adjacent docs-only CSS evidence:

- `css/theme-switcher.css` has `87` lines.
- It has `9` selector blocks, `55` declarations, `0` custom property definitions, `28` `var(...)` references, and `1` hard-coded hex value.
- It has `0` media queries, `0` `:focus-visible` selectors, `0` reduced-motion blocks, and `0` forced-colors blocks.
- Detailed theme-switcher behavior is already recorded in `VDS-1140`.

## 5. Source and Package Boundary Evidence

Package evidence:

- `@24vlh/vds/package.json` has `main` and `style` set to `dist/vds.css`.
- `package.json` `files` includes only `dist`.
- Top-level `css/` files are not current package-published surfaces.

Footer source ownership:

- `@24vlh/vds/src/components/header-footer.css` owns source footer link and footer meta styling.
- `.footer__link` uses `color: var(--color-footer-text)`.
- `.footer__link:hover` changes opacity only.
- `.footer__link:focus-visible` defines an outline using `--focus-ring-color`, `--border-width`, `--space-1`, and `--radius-sm`.
- `.footer__meta a` uses source footer text color and has a source `:focus-visible` rule.

Graphite theme footer token evidence:

- In `graphite-light`, `--color-footer-bg` is `#0E3D69` and `--color-footer-text` is `#F7F9FC`.
- In `graphite-dark`, `--color-footer-bg` is `#0A2D50` and `--color-footer-text` is `#F5F7FA`.
- `css/overrides.css` repeats Graphite footer text colors and adds hard-coded active and visited footer link colors.

Raw docs evidence:

- `@24vlh/vds/doc-raw/vds-header-footer.doc.html` documents `.footer__link`, `.footer__meta`, footer tokens, footer examples, and focus-visible footer link snippets.
- The raw header/footer docs do not reference `css/overrides.css` as source ownership.
- Repo-wide search shows `css/overrides.css` is linked from `index.html` and not used as package source.

## 6. Proposed Architecture or Change

### Docs-only CSS contract

- No runtime CSS, selector, token, raw-doc, package, selector-inventory, consumer-report, or generated-output changes.
- Treat top-level `css/` files as docs-shell assets unless a later approved package/docs item changes their status.
- Treat `css/overrides.css` as docs-shell override evidence, not a source-of-truth replacement for `src/components/header-footer.css` or `src/themes/*.css`.
- Treat `css/theme-switcher.css` as docs theme-switcher tooling governed by `VDS-1140`.
- Do not use docs-only CSS as a hidden fix for library CSS, theme tokens, or package output without a later approved implementation item.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/foundation/vds-global-overrides-docs-only-css-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1280` and set next recommended item to `VDS-1290`.
- Do not change README, raw docs, docs shell, docs demos, generated docs indexes, or agents docs output in this item.

## 7. Component API and Compatibility Impact

- Existing selectors preserved:
  - All runtime and docs-shell selectors remain unchanged.
- New selectors:
  - None.
- Deprecated selectors:
  - None in this item.
- Breaking changes:
  - None in CSS, selectors, tokens, custom property names, raw docs, `index.html`, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, or package version fields.
- Migration notes:
  - None for package consumers in this item. Later docs-only CSS cleanup, footer source fixes, theme token changes, or package guidance changes may need migration notes.

## 8. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. `css/overrides.css` does not define `:focus-visible`; source footer focus styles remain the current focus evidence.
- Semantics or ARIA:
  - No runtime behavior changes.
- Reduced motion:
  - No runtime behavior changes.
- Forced colors or contrast:
  - No runtime behavior changes. Hard-coded footer override colors are audit evidence for later contrast and cascade review.
- Mobile/adaptive behavior:
  - No runtime behavior changes. `css/overrides.css` has no media queries or safe-area behavior.
- Theme coverage:
  - No theme values change. Current overrides affect only Graphite roots, while other themes rely on source theme tokens and component CSS.

## 9. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:dist`
  - `pnpm run audit:consumers`
- Docs-only CSS scan:
  - Record top-level docs CSS files and counts.
  - Record `css/overrides.css` selector, declaration, color, media, focus, reduced-motion, and forced-colors evidence.
  - Record docs shell stylesheet order.
  - Record package publication boundary for top-level `css/`.
  - Compare docs overrides with footer source CSS and Graphite theme footer tokens.
  - Record adjacent `css/theme-switcher.css` evidence and `VDS-1140` routing.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only. If it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Planning sanity checks:
  - Confirm master map, feature plan, and global overrides artifact agree that no CSS, docs shell, raw docs, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1290`.

## 10. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting docs-only CSS and override boundaries before cascade strategy and cleanup work.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later docs-only CSS cleanup, footer source changes, theme token changes, or docs/package guidance changes may require migration notes.

## 11. Risks

- `css/overrides.css` loads after all source and docs-shell styles, so it can mask library or theme issues in the local docs shell.
- Generic `footer a` selectors are broader than source footer selectors such as `.footer__link` and `.footer__meta a`.
- Graphite-only overrides create theme-specific docs shell behavior while Slate, Navy, and Carbon rely on source CSS and theme tokens.
- Hard-coded docs override colors bypass theme tokens, theme parity, and normal theme contrast audit flow.
- `:hover`, `:active`, and `:visited` states are hard-coded, while `:focus-visible` is left to source footer styles.
- Top-level docs CSS is not package-published, so local docs shell behavior can differ from package-consumer behavior.
- Detailed theme-switcher CSS behavior must remain routed to `VDS-1140` to avoid duplicating or splitting ownership.

## 12. Open Questions

- Should `css/overrides.css` be removed after source footer/theme behavior is corrected? Deferred to later docs-shell or footer/theme implementation work.
- Should the Graphite footer visited/active colors become theme tokens, component styles, or remain docs-only? Deferred to theme/footer cleanup work.
- Should docs-only CSS be linted separately from source CSS? Deferred to later quality and cascade strategy work.
- Should `css/theme-switcher.css` become part of a formal docs tooling surface? Deferred to theme-switcher/docs runtime work.
- Should docs shell CSS load order be aligned with source bundle order? Deferred to docs shell and import contract follow-up work.

## 13. Approval

- Requested on: `2026-05-24`
- Approved by: user
- Approved on: `2026-05-24`

## 14. Implementation Log

- `2026-05-24`: Created this plan file.
- `2026-05-24`: Added global overrides and docs-only CSS audit artifact.
- `2026-05-24`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1280` and set next recommended item to `VDS-1290`.
- `2026-05-24`: Ran/read a read-only docs-only CSS scan. Summary: top-level docs CSS files are `css/overrides.css` and `css/theme-switcher.css`; `css/overrides.css` has `39` lines, `8` selector blocks, `10` declarations, `0` custom property definitions, `0` `var(...)` references, `10` hard-coded hex references, `5` unique hex colors, `0` media queries, `0` `!important`, `0` `:focus-visible`, `0` reduced-motion blocks, and `0` forced-colors blocks; `index.html` loads `43` stylesheets with `css/overrides.css` last; package `files` includes only `dist`; source footer ownership and Graphite footer token ownership are recorded.

## 15. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed: generated artifacts are fresh with `80` CSS files checked.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-1280` forbids write/regeneration commands.
  - Read-only docs-only CSS scan completed.
  - VDS-1280 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1280-global-overrides-and-docs-only-css-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-global-overrides-docs-only-css-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None planned; cascade and specificity strategy continues in `VDS-1290`.
