# VDS-0310 Generated Artifact Freshness Checker

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0310`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0310-generated-artifact-freshness-checker.md`

## 1. Goal

Add a targeted, check-only generated artifact freshness checker for VDS `dist/` output. The checker verifies that checked-in package-facing CSS artifacts match the current `src/` build contract without deleting, rewriting, or refreshing `dist/`.

## 2. Scope

### In scope

- Add a check-only generated artifact freshness script.
- Add an explicit `audit:dist` package script.
- Compare expected generated CSS against checked-in `dist` using a temp render.
- Record the source/dist freshness checker contract for later release, package smoke, and publish verification work.
- Update the master feature map to close the library structure and packaging track.

### Out of scope

- Changing source CSS, generated `dist`, docs, package metadata other than the new script entry, workflows, package version, selector inventory, or consumer reports.
- Adding `audit:dist` to aggregate `pnpm run audit`.
- Adding `audit:dist` to lint-staged, Husky, CI, or publish workflows.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/pnpm-node/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`
  - `@24vlh/vds/docs/planning/architecture/vds-build-script-modernization-plan.md`
  - `@24vlh/vds/docs/planning/architecture/vds-audit-script-modernization-plan.md`
  - `@24vlh/vds/docs/planning/architecture/vds-lint-staged-husky-policy-review.md`
  - `@24vlh/vds/docs/planning/architecture/vds-file-naming-component-alias-policy.md`
- Repo files:
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/static/js/build.js`
  - `@24vlh/vds/src`
  - `@24vlh/vds/dist`
- Current audit results:
  - `node --check static/js/check-generated-artifacts.js` passes.
  - `pnpm run audit:dist` passes.
  - `pnpm run audit` passes.
  - `pnpm run audit:consumers` passes.
- Legacy or consumer context reviewed:
  - Current direct `dist` paths remain package-facing and compatibility-sensitive.

## 4. Current Behavior Snapshot

- Source/dist policy:
  - `src/` is canonical authoring truth.
  - `dist/` is checked-in generated package output.
  - `dist/` must not be edited by hand.
- Build script behavior:
  - `static/js/build.js` removes and recreates `dist` during a full build.
  - Full build commands remain guarded in this environment.
  - Source maps are opt-in through `VDS_BUILD_MAPS=1` and absent from current checked-in `dist`.
- Current inventory:
  - Source CSS files: `43`.
  - Checked-in dist CSS files: `80`.
  - Checked-in dist source maps: `0`.
  - Top-level expected CSS files: `6`.
  - Component source files: `33`.
  - Theme source files: `4`.
  - Expected dist CSS files: `80`.
  - Missing expected dist CSS files: `0`.
  - Extra dist CSS files: `0`.
- Freshness result:
  - The new checker reports `Generated artifacts are fresh (80 CSS files checked).`

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token, theme, selector, or generated report changes.
- Use current source entrypoints, component files, and theme files only as inputs for temp expected-output rendering.

### Build, audit, or package surface

- Add `@24vlh/vds/static/js/check-generated-artifacts.js`.
- Add `audit:dist`: `node static/js/check-generated-artifacts.js --check`.
- Keep `audit:dist` out of aggregate `pnpm run audit` because it runs a temp PostCSS render and is slower than the normal repo-local audits.
- Keep lint-staged unchanged.
- Keep CI and publish workflows unchanged.
- Checker behavior:
  - accepts only `--check`;
  - computes expected dist paths from `src/index.css`, `src/core.css`, `src/identity.css`, `src/components/*.css`, and `src/themes/*.css`;
  - verifies exactly the expected `80` CSS files;
  - verifies no checked-in `.map` files under `dist`;
  - renders expected CSS into a temp directory;
  - uses the same PostCSS CLI plugin contract as `static/js/build.js`;
  - compares rendered expected CSS byte-for-byte against checked-in `dist`;
  - prints grouped failures for missing, extra, unexpected map, and stale files;
  - cleans the temp directory in success and failure paths.
- Temp directory policy:
  - prefer `VDS_DIST_CHECK_TMPDIR` when set;
  - prefer `/tmp` on Linux/WSL to avoid slow mounted Windows temp paths;
  - fall back to `os.tmpdir()`.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/architecture/vds-generated-artifact-freshness-checker.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0310`, mark `VDS-0200` done, and set `VDS-1010` as next.
- Do not change README, raw docs, docs shell, generated docs indexes, or agents docs output in this item.

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None in this item.
- Breaking changes:
  - None in runtime CSS, package import paths, generated `dist`, workflows, docs routes, or package version fields.
- Migration notes:
  - None for package consumers. Later dist refresh items must review source and dist changes together.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes.
- Semantics or ARIA:
  - No runtime behavior changes.
- Reduced motion:
  - No runtime behavior changes.
- Forced colors or contrast:
  - No runtime behavior changes.
- Mobile/adaptive behavior:
  - No runtime behavior changes.
- Theme coverage:
  - The checker includes all four current theme CSS files as generated artifact surfaces, but does not change theme behavior.

## 8. Validation Plan

- Static audit:
  - `node --check static/js/check-generated-artifacts.js`
  - `pnpm run audit:dist`
  - `pnpm run audit`
  - `pnpm run audit:consumers`
- Dist inventory scan:
  - Record source CSS count.
  - Record expected and actual dist CSS counts.
  - Record missing, extra, stale, and unexpected map findings.
  - Record temp-render freshness result.
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, and freshness checker artifact agree that no generated `dist` files changed.
  - Confirm `VDS-0200` is `done`.
  - Confirm the next recommended item is `VDS-1010`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by adding explicit generated artifact freshness evidence.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - Adds only the `audit:dist` script entry. Does not change package version, package fields, or generated `dist`.
- Migration guide impact:
  - None in this item.

## 10. Risks

- `audit:dist` is slower than normal audits because it renders expected CSS with PostCSS and `cssnano`.
- If hidden inside aggregate audit, lint-staged, or pre-commit, it could make ordinary development validation too slow.
- Byte-for-byte comparison can fail after dependency changes, build-plugin changes, or source changes that intentionally require a dist refresh.
- A failing checker means `dist refresh pending`; it does not authorize hand-edited `dist` fixes.
- The checker duplicates parts of `static/js/build.js` behavior until later build-tooling modernization creates shared helpers.

## 11. Open Questions

- Should `audit:dist` join aggregate `pnpm run audit` after build tooling is faster or shared? Deferred to quality/workflow work.
- Should CI run `audit:dist` before publish? Deferred to `VDS-4100` and release verification items.
- Should build and checker logic share a helper module? Deferred to later build-script modernization work.
- Should a future checker support targeted component-only comparisons? Deferred to future tooling work if runtime cost becomes painful.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added generated artifact freshness checker artifact.
- `2026-05-23`: Added `@24vlh/vds/static/js/check-generated-artifacts.js`.
- `2026-05-23`: Added `audit:dist` package script.
- `2026-05-23`: Left aggregate `pnpm run audit`, lint-staged, Husky, CI, publish workflow, and generated `dist` unchanged.
- `2026-05-23`: Initial checker dry run exposed slow temp rendering when Node resolved the temp directory to a mounted Windows temp path; updated the checker to prefer `/tmp` on Linux/WSL and allow `VDS_DIST_CHECK_TMPDIR`.
- `2026-05-23`: Ran/read a read-only dist inventory scan. Summary: `43` source CSS files; `80` checked-in dist CSS files; `0` dist source maps; expected dist CSS count `80`; missing expected files `0`; extra dist CSS files `0`; `audit:dist` reports generated artifacts are fresh.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `node --check static/js/check-generated-artifacts.js` passed.
  - `pnpm run audit:dist` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - Read-only dist inventory scan completed.
  - VDS-0310 markdown sanity checks passed.
  - `git diff --check` passed for changed planning, script, and package files.
- Files changed:
  - `@24vlh/vds/static/js/check-generated-artifacts.js`
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/docs/planning/features/VDS-0310-generated-artifact-freshness-checker.md`
  - `@24vlh/vds/docs/planning/architecture/vds-generated-artifact-freshness-checker.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; primitives token taxonomy audit continues in `VDS-1010`.
