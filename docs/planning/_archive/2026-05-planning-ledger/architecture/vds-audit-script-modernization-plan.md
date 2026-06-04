# VDS Audit Script Modernization Plan

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-0250`

This file records the VDS audit-tooling modernization review for the library structure track. It is a planning artifact only: no audit script, package script, package metadata, source CSS, generated report, generated `dist`, README, workflow, lockfile, docs demo, selector, token, or version field changes happen here.

## Policy Summary

- Aggregate `pnpm run audit` should remain repo-local, deterministic, and safe for normal validation.
- External consumer checks remain outside aggregate audit unless explicitly approved later.
- Check commands must stay separate from write/regeneration commands.
- Existing mechanical audits are baseline evidence, not release readiness.
- Audit implementation changes require later approved tooling or quality items.

## Current Package Scripts

- `audit`: `pnpm run audit:css && pnpm run audit:classes && pnpm run audit:tokens && pnpm run audit:docs && pnpm run audit:selectors`.
- `audit:css`: `node static/js/validate-css.js`.
- `audit:classes`: `node static/js/find-bogus-classes.js`.
- `audit:tokens`: `node static/js/validate-used-tokens.js`.
- `audit:docs`: `node static/js/validate-doc-dependencies.js`.
- `audit:selectors`: `node static/js/generate-selector-inventory.js --check`.
- `audit:consumers`: `node static/js/scan-consumer-compatibility.js --check`.
- `inventory:selectors`: `node static/js/generate-selector-inventory.js --write`.
- `consumer:scan`: `node static/js/scan-consumer-compatibility.js --write`.

## Current Script Roles

| Script | Current Role | Mode |
| --- | --- | --- |
| `static/js/validate-css.js` | PostCSS parse check for `src/**/*.css`. | Check-only |
| `static/js/find-bogus-classes.js` | Raw-doc class usage must exist in source CSS. | Check-only |
| `static/js/validate-used-tokens.js` | `var(--...)` references must be defined somewhere in `src`. | Check-only |
| `static/js/validate-doc-dependencies.js` | Raw docs using icon classes must declare `icons.css` and avoid legacy `icon.css`. | Check-only |
| `static/js/generate-selector-inventory.js` | Generate/check selector inventory artifacts. | `--write` and `--check` |
| `static/js/scan-consumer-compatibility.js` | Generate/check external consumer compatibility artifacts. | `--write` and `--check` |

## Current Audit Evidence

- All `static/js/*.js` files pass `node --check`.
- `pnpm run audit` passes.
- `pnpm run audit:consumers` passes.
- CSS parse check passes for `43` CSS files.
- Docs class existence check passes for `37` raw docs files.
- Token usage audit passes for `43` CSS files.
- Doc dependency audit passes for `37` raw docs files.
- Selector inventory is fresh:
  - total classes: `2775`;
  - public: `1905`;
  - candidate-public: `870`;
  - docs-only: `0`.
- Consumer compatibility report is fresh:
  - targets: `2`;
  - scanned files: `319`;
  - matched VDS classes: `363`;
  - candidate-public usages: `24`;
  - deprecated usages: `0`;
  - legacy-compatible usages: `0`;
  - unknown VDS-like usages: `7`.

## Coverage Gaps

- Existing audits do not prove visual correctness.
- Existing audits do not prove WCAG behavior, keyboard behavior, focus flow, or APG widget behavior.
- Existing audits do not prove responsive behavior across viewport matrix.
- Existing audits do not prove theme contrast or visual integrity.
- Existing audits do not prove browser compatibility beyond CSS parse success.
- Existing audits do not prove generated `dist` freshness.
- Existing audits do not prove package smoke behavior.
- Regex-based class/token checks can miss dynamic or complex cases.

## Modernization Direction

- Standardize audit scripts around explicit check modes, predictable exit codes, structured summaries, and stable failure output.
- Keep write/regeneration commands separate from normal validation commands.
- Keep aggregate audit free of sibling-repository dependencies.
- Prefer shared path/glob conventions and reusable helpers when implementation work begins.
- Preserve selector inventory and consumer compatibility reports as planning/release evidence.
- Do not add full build commands to audit or lint-staged in this item.
- Do not add visual, accessibility, responsive, browser, contrast, or package smoke automation in this item.

## Future Work Contract

- `VDS-0260` must decide lint-staged and Husky policy using safe targeted checks instead of guarded full builds.
- `VDS-0310` must add generated artifact freshness checking without requiring blind full builds.
- `VDS-4010` must define broader audit coverage expansion.
- `VDS-4040` must handle theme contrast automation.
- `VDS-4050` must handle visual regression smoke planning.
- `VDS-4060` must handle accessibility smoke planning.
- `VDS-4070` must handle responsive screenshot matrix automation.
- `VDS-4080` must handle package smoke tests.
- `VDS-5060` must use final audit evidence for the release candidate checklist.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Release policy: `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
- Build-script modernization plan: `@24vlh/vds/docs/planning/architecture/vds-build-script-modernization-plan.md`
- Selector inventory: `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Consumer compatibility report: `@24vlh/vds/docs/planning/api/vds-consumer-compatibility.json`
- Package metadata: `@24vlh/vds/package.json`
- Audit scripts: `@24vlh/vds/static/js`
