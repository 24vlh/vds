# VDS-1030 Typography Scale and Rhythm Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-1030`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1030-typography-scale-and-rhythm-audit.md`

## 1. Goal

Create the typography scale and rhythm audit for VDS before spacing, motion, focus, and component token work continues. This item records how primitive typography tokens, `base.css`, `typography.css`, text utilities, prose helpers, and raw docs currently define typography behavior.

## 2. Scope

### In scope

- Record typography source roles across primitives, base, typography component CSS, utilities, prose helpers, and raw docs.
- Record typography primitive token evidence.
- Record `base.css` and `typography.css` selector, token, and declaration evidence.
- Record source-wide typography declaration counts and hard-coded-value evidence.
- Record typography/prose/text selector inventory classifications.
- Record docs mismatch evidence, especially `--line-height-base` versus `--line-height-normal`.
- Add a typography audit artifact for later typography token cleanup, text utility review, prose docs rewrite, accessibility/readability checks, component audits, migration notes, and release verification.
- Update the master feature map so the token/theme track continues to `VDS-1040`.

### Out of scope

- Changing CSS, token names, token values, docs demos, generated `dist`, package metadata, scripts, workflows, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing typography CSS, raw docs, utility classes, or hard-coded typography values.
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
  - `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-typography.json`
- Repo files:
  - `@24vlh/vds/src/primitives.css`
  - `@24vlh/vds/src/base.css`
  - `@24vlh/vds/src/components/typography.css`
  - `@24vlh/vds/src/components/utilities.css`
  - `@24vlh/vds/src/components/authoring.css`
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/doc-raw/vds-typography.doc.html`
  - `@24vlh/vds/doc-raw/vds-base.doc.html`
- Current audit results:
  - `pnpm run audit:tokens` passes.
  - `pnpm run audit` passes.
  - `pnpm run audit:consumers` passes.
  - `pnpm run audit:dist` passes.
- Legacy or consumer context reviewed:
  - No consumer-facing CSS, package output, or typography compatibility behavior changes happen in this planning item.

## 4. Current Behavior Snapshot

- Source roles:
  - `@24vlh/vds/src/primitives.css` owns typography primitives: font families, text scale, line heights, weights, letter spacing, and footnote size.
  - `@24vlh/vds/src/base.css` owns global defaults for `html`, `body`, headings reset, lists, links, code, pre, table reset, smoothing, and focus/selection interaction with text.
  - `@24vlh/vds/src/components/typography.css` owns prose rules for `.typography`, headings, paragraphs, lists, inline code, pre/code blocks, blockquotes, pullquotes, figures, prose tables, badges, and footnotes.
  - `@24vlh/vds/src/components/utilities.css` owns public text utility classes and must remain compatibility-sensitive.
  - `@24vlh/vds/src/components/authoring.css` owns adjacent prose helper classes such as `prose-*`, `footnotes`, and `fn-*`.
- File evidence:
  - `@24vlh/vds/src/base.css`: `305` lines, `7` custom property definitions, `34` `var(...)` references, and `45` selector blocks.
  - `@24vlh/vds/src/components/typography.css`: `236` lines, `4` custom property definitions, `72` `var(...)` references, and `34` selector blocks.
  - `@24vlh/vds/doc-raw/vds-typography.doc.html`: `913` lines.
  - `@24vlh/vds/doc-raw/vds-base.doc.html`: `1918` lines.
- Typography primitives:
  - `28` primitive tokens cover font families, text scale, line heights, weights, letter spacing, and footnote size.
- Source-wide typography declaration evidence:
  - `font-size`: `410` declarations; `401` use `var(...)`, `9` are hard-coded.
  - `line-height`: `91` declarations; `61` use `var(...)`, `27` are hard-coded, `3` are keywords/inheritance.
  - `font-weight`: `141` declarations; `75` use `var(...)`, `66` are hard-coded.
  - `letter-spacing`: `50` declarations; `8` use `var(...)`, `42` are hard-coded.
  - `font-family`: `26` declarations; `24` use `var(...)`, `2` are keywords/inheritance.
- Selector inventory:
  - Typography/prose/text selector inventory includes `54` matching selectors.
  - `36` are `public`.
  - `18` are `candidate-public`.
- Docs evidence:
  - The generated VDS docs index for `vds-typography` points to `base.css`, `primitives.css`, and `typography.css`.
  - Raw typography docs mention `--line-height-base`, which is absent from source; source uses `--line-height-normal`.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token name, token value, selector, theme, or generated output changes.
- Treat primitive typography tokens as the current canonical scale for future typography cleanup.
- Treat `base.css` as the global element/default layer and `typography.css` as the prose content layer.
- Treat text utilities and prose helpers as compatibility-sensitive public or candidate-public selectors.
- Treat hard-coded typography values as audit findings only. Later cleanup must classify whether each value is a deliberate optical adjustment, a component-local alias need, a primitive gap, or a cleanup candidate.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.
- If future typography work changes source CSS while generated output is out of scope, its implementation log must record `dist refresh pending`.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/tokens/vds-typography-scale-and-rhythm-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1030` and set next recommended item to `VDS-1040`.
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
  - None for package consumers in this item. Later text utility, prose helper, or typography token changes must be migration-planned if they affect public, candidate-public, legacy-compatible, or consumer-overridden surfaces.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Focus styling remains governed by base and later focus/interaction work.
- Semantics or ARIA:
  - No runtime behavior changes. Typography docs and examples still need later semantic/readability review.
- Reduced motion:
  - No runtime behavior changes.
- Forced colors or contrast:
  - No runtime behavior changes. Text color and link contrast remain governed by theme contrast and later visual integrity work.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Responsive readability checks remain later quality/component work.
- Theme coverage:
  - No theme changes. Typography audit findings must preserve theme parity and token naming boundaries from `VDS-1020`.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:consumers`
  - `pnpm run audit:dist`
- Typography audit scan:
  - Record primitive typography token list and counts.
  - Record `base.css` and `typography.css` selector/token/declaration counts.
  - Record source-wide typography declaration counts and hard-coded-value evidence.
  - Record text utility/prose selector inventory classification.
  - Record raw-doc mismatches such as `--line-height-base`.
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
  - Confirm master map, feature plan, and typography audit artifact agree that no source CSS, token names, docs, generated output, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1040`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting typography scale and rhythm before spacing, motion, focus, and component cleanup.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later typography token, text utility, or prose selector changes may require migration notes.

## 10. Risks

- Raw docs mention a line-height token absent from source.
- `.typography` is the documented prose class, while `[data-vds-typography]` and `.vds-typography` currently define only local prose variables.
- `font-weight` and `letter-spacing` still have many hard-coded declarations across source.
- `typography.css` uses local prose tokens and some hard-coded values such as border widths and `em`-based inline code sizes.
- Text utility classes and prose helpers are public or candidate-public and must not be renamed or removed casually.
- Typography scale, spacing rhythm, and content density overlap with `VDS-1040`, so cleanup must avoid duplicating spacing decisions.

## 11. Open Questions

- Should docs use `--line-height-normal` or should a compatibility alias for `--line-height-base` be introduced later? Deferred to docs/token cleanup work.
- Should `.vds-typography` become a functional prose wrapper or remain a local-token hook? Deferred to component audit and migration planning.
- Should hard-coded font weights and letter spacing become tokens? Deferred to typography cleanup and component audits.
- Should prose helpers in `authoring.css` be merged into typography or remain separate? Deferred to source architecture and component audit work.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added typography scale and rhythm audit artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1030` and set next recommended item to `VDS-1040`.
- `2026-05-23`: Ran/read a read-only typography audit scan. Summary: `src/base.css` has `305` lines, `7` custom property definitions, `34` `var(...)` references, and `45` selector blocks; `src/components/typography.css` has `236` lines, `4` custom property definitions, `72` `var(...)` references, and `34` selector blocks; `28` primitive typography tokens are present; source-wide typography declarations include `410` `font-size`, `91` `line-height`, `141` `font-weight`, `50` `letter-spacing`, and `26` `font-family` declarations; typography/prose/text selector inventory contains `54` matching selectors with `36` public and `18` candidate-public; raw docs mention absent `--line-height-base` while source uses `--line-height-normal`.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - `pnpm run audit:dist` passed.
  - Read-only typography audit scan completed.
  - VDS-1030 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1030-typography-scale-and-rhythm-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-typography-scale-and-rhythm-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; spacing and layout rhythm audit continues in `VDS-1040`.
