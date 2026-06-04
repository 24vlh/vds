# VDS-1040 Spacing and Layout Rhythm Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-1040`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1040-spacing-and-layout-rhythm-audit.md`

## 1. Goal

Create the spacing and layout rhythm audit for VDS before motion, focus, z-index, and component token work continues. This item records how primitive spacing tokens, layout sizing tokens, `layout.css`, `sections.css`, utilities, and raw docs currently define page rhythm, containers, grids, section spacing, component gaps, and utility spacing.

## 2. Scope

### In scope

- Record spacing/layout source roles across primitives, layout, sections, utilities, and raw docs.
- Record primitive spacing and layout token lists, usage counts, and unreferenced-token evidence.
- Record `layout.css`, `sections.css`, and `utilities.css` selector, token, declaration, and media-query evidence.
- Record source-wide spacing/layout declaration counts and hard-coded-value evidence.
- Record broad spacing/layout selector inventory classifications.
- Record raw-doc metadata gaps and source/docs ownership notes.
- Add a spacing/layout audit artifact for later spacing token cleanup, layout utility review, section rhythm cleanup, responsive/readability checks, component audits, migration notes, and release verification.
- Update the master feature map so the token/theme track continues to `VDS-1050`.

### Out of scope

- Changing CSS, token names, token values, docs demos, generated `dist`, package metadata, scripts, workflows, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing spacing CSS, layout CSS, section variants, utility classes, raw docs, or generated docs metadata.
- Running visual, browser, screenshot, or responsive checks.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/tokens/vds-primitives-token-taxonomy-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-typography-scale-and-rhythm-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-layout.json`
  - `@24vlh/agents/docs_vds/components/vds-sections.json`
  - `@24vlh/agents/docs_vds/components/vds-utilities.json`
- Repo files:
  - `@24vlh/vds/src/primitives.css`
  - `@24vlh/vds/src/layout.css`
  - `@24vlh/vds/src/components/sections.css`
  - `@24vlh/vds/src/components/utilities.css`
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/doc-raw/vds-layout.doc.html`
  - `@24vlh/vds/doc-raw/vds-sections.doc.html`
  - `@24vlh/vds/doc-raw/vds-utilities.doc.html`
- Current audit results:
  - `pnpm run audit:tokens` passes.
  - `pnpm run audit` passes.
  - `pnpm run audit:consumers` passes.
  - `pnpm run audit:dist` passes.
- Legacy or consumer context reviewed:
  - No consumer-facing CSS, package output, or spacing/layout compatibility behavior changes happen in this planning item.

## 4. Current Behavior Snapshot

- Source roles:
  - `@24vlh/vds/src/primitives.css` owns spacing/rhythm tokens and layout sizing tokens.
  - `@24vlh/vds/src/layout.css` owns page frame, content regions, containers, section spacing helpers, structural grids, sidebar layouts, and split layouts.
  - `@24vlh/vds/src/components/sections.css` owns section bands, inner rhythm, density variants, section grids/stacks/splits, surfaces, and legacy A/B/C spacing.
  - `@24vlh/vds/src/components/utilities.css` owns public spacing, sizing, grid, flex, stack, cluster, overflow, width, and positioning utilities.
- Primitive token evidence:
  - Spacing/rhythm primitives: `42`.
  - Layout sizing primitives: `8`.
  - Unreferenced spacing primitives: `space-0`, `space-28`, `space-36`, `space-44`, `gap-xs`, `gap-sm`, and `gap-xl`.
  - Unreferenced layout sizing primitives: `0`.
- File evidence:
  - `@24vlh/vds/src/layout.css`: `255` lines, `0` custom property definitions, `31` `var(...)` references, `44` selector blocks, and `5` media queries.
  - `@24vlh/vds/src/components/sections.css`: `575` lines, `63` custom property definitions, `6` unique local token names, `117` `var(...)` references, `100` selector blocks, and `3` media queries.
  - `@24vlh/vds/src/components/utilities.css`: `3312` lines, `0` custom property definitions, `490` `var(...)` references, `776` selector blocks, and `12` media queries.
- Source-wide spacing/layout declaration evidence:
  - `gap`: `539` declarations.
  - `padding`: `334` declarations.
  - `margin`: `73` declarations.
  - `max-width`: `61` declarations.
  - `min-width`: `59` declarations.
  - `width`: `294` declarations.
- Selector inventory:
  - Broad spacing/layout selector inventory contains `520` matching selectors.
  - `170` are `public`.
  - `350` are `candidate-public`.
  - Top source files are `utilities.css` with `384`, `sections.css` with `75`, `flows.css` with `39`, and `layout.css` with `23`.
- Docs evidence:
  - `@24vlh/vds/doc-raw/vds-layout.doc.html`: `797` lines.
  - `@24vlh/vds/doc-raw/vds-sections.doc.html`: `1395` lines.
  - `@24vlh/vds/doc-raw/vds-utilities.doc.html`: `1182` lines.
  - Generated docs metadata for `vds-layout`, `vds-sections`, and `vds-utilities` currently has empty `source_css`.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token name, token value, selector, theme, or generated output changes.
- Treat primitive spacing and layout sizing tokens as the current canonical low-level scales for future spacing/layout cleanup.
- Treat `layout.css` as the high-level structural layout layer.
- Treat `sections.css` as the section component/rhythm layer.
- Treat `utilities.css` spacing, layout, and sizing selectors as compatibility-sensitive public or candidate-public utility surfaces.
- Treat local section tokens such as `--section-pad-top`, `--section-pad-bottom`, `--section-inner-pad`, and `--section-inner-gap` as component-local aliases until later cleanup decides otherwise.
- Treat hard-coded spacing/layout values as audit findings only. Later cleanup must classify whether each value is an intentional layout constraint, a component-local alias need, a primitive gap, or a cleanup candidate.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.
- If future spacing/layout work changes source CSS while generated output is out of scope, its implementation log must record `dist refresh pending`.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/tokens/vds-spacing-layout-rhythm-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1040` and set next recommended item to `VDS-1050`.
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
  - None for package consumers in this item. Later spacing tokens, section variants, layout selectors, or utility class changes must be migration-planned if they affect public, candidate-public, legacy-compatible, or consumer-overridden surfaces.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future spacing/layout cleanup must preserve reachable focus targets and usable overflow containers.
- Semantics or ARIA:
  - No runtime behavior changes.
- Reduced motion:
  - No runtime behavior changes.
- Forced colors or contrast:
  - No runtime behavior changes. Surface and separator spacing remains governed by theme contrast and later visual integrity work.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Responsive layout checks remain later quality/component work.
- Theme coverage:
  - No theme changes. Spacing/layout audit findings must preserve token naming boundaries from `VDS-1020` and typography rhythm boundaries from `VDS-1030`.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:consumers`
  - `pnpm run audit:dist`
- Spacing/layout audit scan:
  - Record primitive spacing and layout token lists, counts, and unreferenced tokens.
  - Record `layout.css`, `sections.css`, and `utilities.css` selector/token/declaration counts.
  - Record source-wide spacing/layout declaration counts and hard-coded-value evidence.
  - Record spacing/layout selector inventory classification.
  - Record raw-doc metadata gaps and source/docs ownership notes.
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
  - Confirm master map, feature plan, and spacing/layout audit artifact agree that no source CSS, token names, docs, generated output, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1050`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting spacing and layout rhythm before motion, focus, z-index, and component cleanup.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later spacing token, layout selector, section variant, or utility class changes may require migration notes.

## 10. Risks

- `layout.css` and `sections.css` both expose section spacing concepts, creating overlap between `.section-*` helpers and `.section--*` component variants.
- `sections.css` uses local rhythm aliases that need classification before cleanup.
- Legacy section density classes `section--a`, `section--b`, and `section--c` coexist with `section--xs` through `section--xl`.
- Utility spacing selectors are a large compatibility surface and must not be renamed or removed casually.
- Generated docs metadata for `vds-layout`, `vds-sections`, and `vds-utilities` has empty `source_css`.
- Spacing rhythm, typography rhythm, and responsive behavior overlap, so cleanup must coordinate with `VDS-1030` and responsive baselines.

## 11. Open Questions

- Should section rhythm converge on `.section--xs` through `.section--xl`, or should legacy A/B/C remain first-class? Deferred to section cleanup and migration planning.
- Should `layout.css` section helpers remain separate from `sections.css` variants? Deferred to foundation/component architecture work.
- Should unreferenced gap tokens remain public scale reserves or become deprecation candidates? Deferred to token cleanup/migration work.
- Should utilities stay broad or shrink after component audits? Deferred to utility modernization and migration planning.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added spacing and layout rhythm audit artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1040` and set next recommended item to `VDS-1050`.
- `2026-05-23`: Ran/read a read-only spacing/layout audit scan. Summary: spacing/rhythm primitives count `42`, layout sizing primitives count `8`, unreferenced spacing primitives are `space-0`, `space-28`, `space-36`, `space-44`, `gap-xs`, `gap-sm`, and `gap-xl`; `layout.css` has `255` lines, `31` `var(...)` references, `44` selector blocks, and `5` media queries; `sections.css` has `575` lines, `63` custom property definitions, `6` unique local token names, `117` `var(...)` references, `100` selector blocks, and `3` media queries; `utilities.css` has `3312` lines, `490` `var(...)` references, `776` selector blocks, and `12` media queries; broad spacing/layout selector inventory contains `520` matching selectors with `170` public and `350` candidate-public; raw docs metadata for `vds-layout`, `vds-sections`, and `vds-utilities` has empty `source_css`.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - `pnpm run audit:dist` passed.
  - Read-only spacing/layout audit scan completed.
  - VDS-1040 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1040-spacing-and-layout-rhythm-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-spacing-layout-rhythm-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; motion token and reduced-motion audit continues in `VDS-1050`.
