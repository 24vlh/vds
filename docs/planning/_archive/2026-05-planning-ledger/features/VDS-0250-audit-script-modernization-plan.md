# VDS-0250 Audit Script Modernization Plan

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0250`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0250-audit-script-modernization-plan.md`

## 1. Goal

Create the VDS audit-tooling modernization plan before lint-staged/Husky policy work continues. This item records current audit scripts, aggregate audit behavior, generated report checks, coverage gaps, and the modernization direction for later approved audit/tooling items.

## 2. Scope

### In scope

- Record current package audit scripts and aggregate audit composition.
- Record current read-only audit evidence and freshness checks.
- Record the role and scope of each existing audit-related script.
- Record which scripts are read/check-only versus write/regeneration commands.
- Define the audit modernization direction for later approved tooling and quality items.
- Add an audit-tooling artifact for later audit script edits, lint-staged policy, generated artifact freshness, quality automation, package smoke, and release gates.
- Update the master feature map so the library structure track continues to `VDS-0260`.

### Out of scope

- Changing audit scripts, package scripts, `package.json`, `pnpm-lock.yaml`, source CSS, generated reports, generated `dist`, README, workflows, docs demos, selectors, tokens, or version fields.
- Running write/regeneration commands such as `pnpm run inventory:selectors` or `pnpm run consumer:scan`.
- Adding build, visual, browser, accessibility, responsive, contrast, package smoke, or external consumer automation to aggregate audit.
- Running `pnpm run build` or `pnpm run build:prod`.
- Changing lint-staged/Husky behavior; this remains deferred to `VDS-0260`.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/pnpm-node/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
  - `@24vlh/vds/docs/planning/architecture/vds-build-script-modernization-plan.md`
  - `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/vds/docs/planning/api/vds-consumer-compatibility.json`
- Repo files:
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/static/js/validate-css.js`
  - `@24vlh/vds/static/js/find-bogus-classes.js`
  - `@24vlh/vds/static/js/validate-used-tokens.js`
  - `@24vlh/vds/static/js/validate-doc-dependencies.js`
  - `@24vlh/vds/static/js/generate-selector-inventory.js`
  - `@24vlh/vds/static/js/scan-consumer-compatibility.js`
- Current audit results:
  - `pnpm run audit` passes.
  - `pnpm run audit:consumers` passes.
  - All `static/js/*.js` files pass `node --check`.
- Legacy or consumer context reviewed:
  - Consumer scanning depends on sibling repositories and remains outside aggregate audit.

## 4. Current Behavior Snapshot

- Package scripts:
  - `pnpm run audit` runs `audit:css`, `audit:classes`, `audit:tokens`, `audit:docs`, and `audit:selectors`.
  - `audit:css` runs `node static/js/validate-css.js`.
  - `audit:classes` runs `node static/js/find-bogus-classes.js`.
  - `audit:tokens` runs `node static/js/validate-used-tokens.js`.
  - `audit:docs` runs `node static/js/validate-doc-dependencies.js`.
  - `audit:selectors` runs `node static/js/generate-selector-inventory.js --check`.
  - `audit:consumers` runs `node static/js/scan-consumer-compatibility.js --check` and is not part of aggregate audit.
  - `inventory:selectors` and `consumer:scan` are write/regeneration commands.
- Script inventory:
  - `static/js/validate-css.js`: `45` lines, uses PostCSS parse checks over `src/**/*.css`.
  - `static/js/find-bogus-classes.js`: `122` lines, checks classes used in raw docs exist in source CSS.
  - `static/js/validate-used-tokens.js`: `80` lines, checks `var(--...)` references are defined somewhere in `src`.
  - `static/js/validate-doc-dependencies.js`: `44` lines, checks raw docs icon CSS dependency rules.
  - `static/js/generate-selector-inventory.js`: `427` lines, supports `--write|--check`, writes/checks selector inventory artifacts.
  - `static/js/scan-consumer-compatibility.js`: `588` lines, supports `--write|--check`, writes/checks consumer compatibility artifacts.
- Current coverage:
  - CSS parse check passes for `43` CSS files.
  - Docs class existence check passes for `37` raw docs files.
  - Token usage audit passes for `43` CSS files.
  - Doc dependency audit passes for `37` raw docs files.
  - Selector inventory is fresh with `2775` classes: `1905` public and `870` candidate-public.
  - Consumer compatibility report is fresh for `2` targets, `319` scanned files, `363` matched VDS classes, `24` candidate-public usages, and `7` unknown VDS-like usages.
- Known boundaries:
  - Existing audits are mechanical baseline checks, not release readiness.
  - Aggregate audit is repo-local and does not require sibling consumer repositories.
  - Consumer report freshness is important release evidence but remains external to aggregate audit.
  - Write/regeneration commands must not be run casually during validation.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token, theme, selector, or generated report changes.
- Preserve selector inventory compatibility rules from `VDS-0020`.
- Preserve consumer compatibility separation from `VDS-0030`.
- Keep future component audits responsible for interpreting selector, token, accessibility, responsive, and theme findings.

### Build, audit, or package surface

- Add `@24vlh/vds/docs/planning/architecture/vds-audit-script-modernization-plan.md`.
- Do not change package scripts, audit scripts, package metadata, generated reports, or generated artifacts.
- Record modernization direction for later work:
  - keep aggregate audit repo-local, deterministic, and safe for normal validation;
  - keep external consumer checks outside aggregate audit unless explicitly approved later;
  - standardize `--check` behavior, structured summaries, stable failure output, and shared path/glob conventions;
  - separate check commands from write/regeneration commands;
  - avoid adding build, visual, browser, or external-consumer work into this item;
  - route generated artifact freshness to `VDS-0310`;
  - route lint-staged policy to `VDS-0260`;
  - route contrast, visual, accessibility, responsive, and package smoke automation to `VDS-4040` through `VDS-4080`.

### Documentation or demo surface

- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0250` and set `VDS-0260` as next.
- Do not change README, raw docs, docs shell, docs demos, or generated docs indexes in this item.

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
  - None in this item. Later migration/release work must use audit evidence for selector, token, package, dist, and docs changes.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Accessibility smoke automation is deferred to `VDS-4060`.
- Semantics or ARIA:
  - No runtime behavior changes.
- Reduced motion:
  - No runtime behavior changes.
- Forced colors or contrast:
  - No runtime behavior changes. Contrast automation is deferred to `VDS-4040`.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Responsive screenshot automation is deferred to `VDS-4070`.
- Theme coverage:
  - No runtime behavior changes. Theme contrast and visual integrity automation remains later quality work.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit`
  - `pnpm run audit:consumers`
- Script syntax checks:
  - `node --check` for every `static/js/*.js` file.
- Audit-script inventory scan:
  - Read-only scan of package audit scripts, aggregate audit composition, script line counts, `--write|--check` support, write behavior, source/doc/report counts, selector inventory totals, and consumer report totals.
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, and audit-tooling artifact agree that no audit script, package script, generated report, generated output, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-0260`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting audit-tooling coverage before quality automation and final release gates.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later migration and release notes must cite audit evidence where selector, token, package, dist, or docs changes affect consumers.

## 10. Risks

- Existing audits can pass while visual, accessibility, responsive, browser, contrast, and package-smoke issues remain.
- Regex-based class and token checks can miss dynamic or complex cases and should not be treated as complete semantic validation.
- Generated report freshness checks are useful but do not prove generated `dist` freshness.
- Adding too much to aggregate audit could make local validation slow, flaky, or dependent on sibling repositories.
- Write/regeneration commands can modify planning artifacts and must stay separate from normal check commands.

## 11. Open Questions

- Which audit scripts should be refactored first for shared helpers and structured output? Deferred to later approved tooling work.
- Which quality checks should join aggregate audit and which should remain optional/release-only? Deferred to quality automation items.
- Which generated artifacts should get a dedicated freshness checker? Deferred to `VDS-0310`.
- Which lint-staged checks should replace the current guarded full build? Deferred to `VDS-0260`.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added audit script modernization artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0250` and set next recommended item to `VDS-0260`.
- `2026-05-23`: Ran/read a read-only audit-script inventory scan. Summary: aggregate `pnpm run audit` includes `audit:css`, `audit:classes`, `audit:tokens`, `audit:docs`, and `audit:selectors`; `audit:consumers` remains separate; `inventory:selectors` and `consumer:scan` are write/regeneration commands; six audit-related scripts are present; all `static/js/*.js` files pass syntax checks; selector inventory has `2775` classes with `1905` public and `870` candidate-public; consumer compatibility has `2` targets, `363` matched VDS classes, `24` candidate-public usages, and `7` unknown VDS-like usages.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - `node --check` passed for all `static/js/*.js` files.
  - Read-only audit-script inventory scan completed.
  - VDS-0250 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0250-audit-script-modernization-plan.md`
  - `@24vlh/vds/docs/planning/architecture/vds-audit-script-modernization-plan.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; lint-staged and Husky policy review continues in `VDS-0260`.
