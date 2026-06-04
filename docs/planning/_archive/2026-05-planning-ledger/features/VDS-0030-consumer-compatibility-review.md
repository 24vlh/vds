# VDS-0030 Consumer Compatibility Review

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0030`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0030-consumer-compatibility-review.md`

## 1. Goal

Create the first repeatable consumer compatibility report for VDS so future selector cleanup, deprecation, and release-scope decisions can see which VDS classes are already used by real first-pass consumers.

## 2. Scope

### In scope

- Scan official first-pass consumers:
  - `@24vlh/keep-exec`
  - `@24vlh/vlah.io`
- Compare consumer source usage against `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`.
- Generate machine-readable and human-readable compatibility reports.
- Add a reusable scanner with write/check modes.
- Add package scripts for report generation and freshness checks.
- Update the master feature map so the next item becomes `VDS-0040`.

### Out of scope

- Runtime CSS changes, docs demo changes, package version changes, `dist/` changes, theme changes, or token behavior changes.
- Scanning docs/tooling-only VDS references in `@24vlh/agents`.
- Scanning generated consumer outputs such as `dist`, `build`, Angular caches, and Android asset bundles.
- Making deprecation/removal decisions. This item identifies compatibility-sensitive usage only.
- Adding consumer checks to aggregate `pnpm run audit`; consumer roots are sibling repositories and workspace-dependent.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/pnpm-node/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/features/VDS-0010-audit-baseline-and-release-scope.md`
  - `@24vlh/vds/docs/planning/features/VDS-0020-public-api-inventory-and-class-contract.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.md`
- Repo files:
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/static/js/generate-selector-inventory.js`
  - `@24vlh/keep-exec/package.json`
  - `@24vlh/keep-exec/angular.json`
  - `@24vlh/vlah.io/package.json`
  - `@24vlh/vlah.io/src`
- Current audit results:
  - `VDS-0020` selector inventory reports `2775` classes, `1905` public, `870` candidate-public, and `0` docs-only.
- Legacy or consumer context reviewed:
  - `@24vlh/keep-exec` has a direct package dependency on `@24vlh/vds`.
  - `@24vlh/vlah.io` carries VDS CSS assets and uses VDS class patterns in source templates.

## 4. Current Behavior Snapshot

- Source files:
  - VDS has a committed selector inventory and freshness audit from `VDS-0020`.
- Raw docs:
  - Raw docs remain VDS's own documentation source and are not consumer usage.
- Public classes/selectors:
  - Public and candidate-public classifications exist in the selector inventory.
- Token usage:
  - Out of scope.
- Known mismatches:
  - Pre-plan probing found candidate-public usage in both `keep-exec` and `vlah.io`, so consumer risk is real enough to track before cleanup.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No CSS, token, or theme changes.
- Consumer usage is read-only evidence for future component audits and migration planning.

### Build, audit, or package surface

- Add `@24vlh/vds/static/js/scan-consumer-compatibility.js`.
- Script behavior:
  - `--write` regenerates consumer compatibility reports.
  - `--check` fails when committed reports are missing or stale.
  - Fails clearly if a configured consumer root is missing.
  - Reads scan targets and ignore rules from `@24vlh/vds/docs/planning/api/vds-consumer-compatibility.config.json`.
  - Reads VDS selector classifications from `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`.
- Add package scripts:
  - `consumer:scan`
  - `audit:consumers`
- Do not add `audit:consumers` to aggregate `pnpm run audit`.

### Documentation or demo surface

- Add planning artifacts:
  - `@24vlh/vds/docs/planning/api/vds-consumer-compatibility.config.json`
  - `@24vlh/vds/docs/planning/api/vds-consumer-compatibility.json`
  - `@24vlh/vds/docs/planning/api/vds-consumer-compatibility.md`

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None.
- Breaking changes:
  - None.
- Migration notes:
  - Any consumer use of `candidate-public`, `legacy-compatible`, or `deprecated` selectors must be treated as release-risk evidence before removal, rename, or behavior change.

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
  - `pnpm run consumer:scan`
  - `pnpm run audit:consumers`
  - `pnpm run audit`
- Class/token/doc audit:
  - Aggregate VDS audit must continue passing.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Not required; this item is a static source compatibility report.

## 9. Rollout and Version Notes

- Release target:
  - Supports major-ready modernization by identifying real consumer selector risk before release policy is finalized.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - `package.json` scripts change only.
  - No `dist/` changes.
- Migration guide impact:
  - Future migration/deprecation work must consult this report or a refreshed successor.

## 10. Risks

- String/static scanning can miss dynamically composed class names.
- Source-only scanning intentionally ignores generated outputs, so it reports intended source usage rather than shipped bundle duplication.
- Consumer roots are sibling repositories; `audit:consumers` may fail in a partial checkout, so it is not part of aggregate `pnpm run audit`.

## 11. Open Questions

- Which candidate-public selectors should be promoted or reclassified because consumers already use them? Deferred to component audits.
- Should consumer compatibility become a CI/release gate? Deferred to `VDS-0040` and release workflow work.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added consumer compatibility scanner/checker script and package scripts.
- `2026-05-23`: Added consumer compatibility config for `@24vlh/keep-exec` and `@24vlh/vlah.io`.
- `2026-05-23`: Generated source-only consumer compatibility reports and excluded vendored/minified VDS CSS assets from scanned source.
- `2026-05-23`: Added a conservative unknown VDS-like usage bucket for inventory-missing classes that use a VDS prefix or known BEM block in consumers with VDS dependency evidence.
- `2026-05-23`: Report totals: `320` scanned source files, `363` matched VDS classes, `24` candidate-public usages, `0` legacy-compatible usages, `0` deprecated usages, and `7` unknown VDS-like usages.
- `2026-05-23`: `@24vlh/keep-exec` result: `238` scanned files, `282` matched VDS classes, `14` candidate-public usages, `2` unknown VDS-like usages, risk `compatibility-sensitive`.
- `2026-05-23`: `@24vlh/vlah.io` result: `82` scanned files, `81` matched VDS classes, `10` candidate-public usages, `5` unknown VDS-like usages, risk `compatibility-sensitive`.
- `2026-05-23`: Ran `pnpm run consumer:scan`, `pnpm run audit:consumers`, and `pnpm run audit`.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run consumer:scan` passed.
  - `pnpm run audit:consumers` passed.
  - `pnpm run audit` passed.
  - `git diff --check` passed.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0030-consumer-compatibility-review.md`
  - `@24vlh/vds/docs/planning/api/vds-consumer-compatibility.config.json`
  - `@24vlh/vds/docs/planning/api/vds-consumer-compatibility.json`
  - `@24vlh/vds/docs/planning/api/vds-consumer-compatibility.md`
  - `@24vlh/vds/static/js/scan-consumer-compatibility.js`
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; release gate decisions already continue in `VDS-0040`.
