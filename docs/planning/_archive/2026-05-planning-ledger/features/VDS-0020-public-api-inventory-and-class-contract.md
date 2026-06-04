# VDS-0020 Public API Inventory and Class Contract

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0020`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0020-public-api-inventory-and-class-contract.md`

## 1. Goal

Create the first repeatable public API inventory for VDS CSS classes/selectors so future component audits can make compatibility decisions from a generated contract instead of guesswork.

## 2. Scope

### In scope

- Inventory class selectors defined in `@24vlh/vds/src/**/*.css`.
- Inventory class usage documented in `@24vlh/vds/doc-raw/*.doc.html`.
- Generate a machine-readable selector inventory and a human-readable summary.
- Add a manual classification override file for future component audits.
- Add package scripts to regenerate and check selector inventory freshness.
- Include selector inventory freshness in the aggregate VDS audit.
- Update planning state so `VDS-0010` closes and the next item becomes `VDS-0030`.

### Out of scope

- Runtime CSS changes, docs demo changes, package version changes, `dist/` changes, or theme/token behavior changes.
- Token inventory or semantic-token classification; that remains in token work.
- Package exports, import path policy, or publish metadata review; that remains in packaging work.
- Real consumer scanning outside `@24vlh/vds`; that remains in `VDS-0030`.
- Final deprecation/removal decisions; component audits and migration planning must approve those later.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/pnpm-node/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/feature-plan-template.md`
  - `@24vlh/vds/docs/planning/features/VDS-0010-audit-baseline-and-release-scope.md`
- Repo files:
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/static/js/find-bogus-classes.js`
  - `@24vlh/vds/static/js/validate-used-tokens.js`
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/doc-raw/*.doc.html`
- Current audit results:
  - Existing aggregate audit passed before this item.
  - Existing class audit only verifies documented classes exist in CSS; it does not classify selector API status.
- Legacy or consumer context reviewed:
  - None. Consumer scanning remains deferred to `VDS-0030`.

## 4. Current Behavior Snapshot

- Source files:
  - `43` CSS files are present under `@24vlh/vds/src`.
  - `33` component CSS files are present under `@24vlh/vds/src/components`.
- Raw docs:
  - `37` raw documentation HTML files are present under `@24vlh/vds/doc-raw`.
- Public classes/selectors:
  - A pre-plan scan found about `2743` CSS-defined classes, `1905` documented classes, and `838` CSS-only classes.
  - No committed selector contract exists before this item.
- Token usage:
  - Out of scope for this item.
- Known mismatches:
  - Existing docs class audit reports no missing classes.
  - Any generated `docs-only` entries after this item must be treated as actionable audit findings.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- Do not change CSS modules, selectors, tokens, or themes.
- Read CSS and docs only to generate inventory artifacts.

### Build, audit, or package surface

- Add `@24vlh/vds/static/js/generate-selector-inventory.js`.
- Script behavior:
  - `--write` regenerates inventory artifacts.
  - `--check` fails when committed inventory artifacts are missing or stale.
  - Reads class selectors from `src/**/*.css`.
  - Reads documented classes from `doc-raw/*.html`.
  - Reads manual overrides from `docs/planning/api/vds-selector-classification-overrides.json`.
  - Fails if an override references an unknown class, has an invalid classification, or omits a reason.
- Add package scripts:
  - `inventory:selectors`
  - `audit:selectors`
- Add `audit:selectors` to the aggregate `pnpm run audit`.

### Documentation or demo surface

- Add generated planning artifacts under `@24vlh/vds/docs/planning/api/`:
  - `vds-selector-inventory.json`
  - `vds-selector-inventory.md`
  - `vds-selector-classification-overrides.json`
- The Markdown artifact defines the human contract. The JSON artifact is the machine-readable source for future checks.

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
  - `public`, `candidate-public`, and `legacy-compatible` selectors must not be removed or renamed without a later approved migration/deprecation plan.
  - `candidate-public` is the conservative default for CSS-defined selectors that are not currently documented.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No behavior changes.
- Semantics or ARIA:
  - No behavior changes.
- Reduced motion:
  - No behavior changes.
- Forced colors or contrast:
  - No behavior changes.
- Mobile/adaptive behavior:
  - No behavior changes.
- Theme coverage:
  - No behavior changes.

## 8. Validation Plan

- Static audit:
  - `pnpm run inventory:selectors`
  - `pnpm run audit:selectors`
  - `pnpm run audit`
- Class/token/doc audit:
  - Aggregate audit must still pass CSS parse, docs classes, token usage, docs dependencies, and selector freshness.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Not required; deferred to `VDS-0030`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the major-ready modernization stance from `VDS-0010`.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - `package.json` scripts change only.
  - No `dist/` changes.
- Migration guide impact:
  - Future migration/deprecation work must cite this inventory or its later refreshed version.

## 10. Risks

- Regex-based selector extraction may not cover exotic escaped CSS identifiers. Current VDS selector naming is plain enough for the initial inventory.
- `candidate-public` is intentionally conservative and will over-preserve some undocumented selectors until component audits reclassify them.
- Adding selector freshness to `pnpm run audit` means any selector change must refresh the generated inventory.

## 11. Open Questions

- Which `candidate-public` selectors should become `internal`, `legacy-compatible`, or `deprecated`? Deferred to component audits.
- Should tokens get a matching inventory artifact? Deferred to token work.
- Which real products rely on undocumented selectors? Deferred to `VDS-0030`.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added selector inventory generator/checker script and package scripts.
- `2026-05-23`: Added manual selector classification override file.
- `2026-05-23`: Generated selector inventory artifacts: `2775` total classes, `1905` public classes, `870` candidate-public classes, and `0` docs-only classes.
- `2026-05-23`: Ran validation: `pnpm run inventory:selectors`, `pnpm run audit:selectors`, and full `pnpm run audit` passed.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0010`, close `VDS-0020`, and set next recommended item to `VDS-0030`.

## 14. Post-Implementation Update

- Final status: `done`
- Validation run: `pnpm run inventory:selectors`; `pnpm run audit:selectors`; `pnpm run audit`
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0020-public-api-inventory-and-class-contract.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-classification-overrides.json`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.md`
  - `@24vlh/vds/static/js/generate-selector-inventory.js`
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; follow-up consumer review already exists as `VDS-0030`.
