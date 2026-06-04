# VDS-0240 Build Script Modernization Plan

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0240`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0240-build-script-modernization-plan.md`

## 1. Goal

Create the VDS build-script modernization audit before audit-tooling work continues. This item records current `static/js/build.js` behavior, output assumptions, plugin pipeline, source-map policy, mounted-filesystem risks, stale build-adjacent helpers, and the modernization direction for later approved build/tooling items.

## 2. Scope

### In scope

- Record current `static/js/build.js` behavior and syntax-check status.
- Record package script entrypoints for local and production builds.
- Record current expected build output shape and relationship to checked-in `dist`.
- Record PostCSS plugin usage, source-map behavior, temp-directory behavior, and error-reporting risks.
- Record stale build-adjacent helper scripts that should not be treated as current build sources of truth.
- Add a build-script modernization artifact for later build-script edits, lint-staged policy, generated artifact freshness, package smoke, publish workflow, and release verification.
- Update the master feature map so the library structure track continues to `VDS-0250`.

### Out of scope

- Changing `static/js/build.js`, package scripts, `package.json`, `pnpm-lock.yaml`, source CSS, generated `dist`, README, workflows, docs demos, selectors, tokens, or version fields.
- Adding build flags, targeted build modes, package smoke commands, or freshness checkers.
- Running `pnpm run build` or `pnpm run build:prod`.
- Changing lint-staged/Husky behavior; this remains deferred to `VDS-0260`.
- Changing publish workflow behavior; this remains deferred to `VDS-4100`.
- Refreshing final generated dist output; this remains deferred to `VDS-5030`.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/pnpm-node/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/architecture/vds-source-module-architecture-audit.md`
  - `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`
  - `@24vlh/vds/docs/planning/architecture/vds-package-metadata-and-exports-review.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
- Repo files:
  - `@24vlh/vds/static/js/build.js`
  - `@24vlh/vds/static/js/combine-vds-css.js`
  - `@24vlh/vds/static/js/combine-vds-doc.js`
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/pnpm-lock.yaml`
  - `@24vlh/vds/.github/workflows/npm-publish.yml`
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/dist`
- Current audit results:
  - Existing aggregate audits remain the mechanical baseline.
  - `VDS-0220` records that `src/` is canonical authoring truth and `dist/` is checked-in generated package output.
  - `VDS-0230` records that current direct `dist` package paths are compatibility-sensitive.
- Legacy or consumer context reviewed:
  - Current publish workflow runs `pnpm run build:prod` in CI before constructing a sanitized publish directory.

## 4. Current Behavior Snapshot

- Build script:
  - `static/js/build.js` is `229` lines.
  - `node --check static/js/build.js` passes.
  - The script uses `execSync` to invoke the local PostCSS CLI binary from `node_modules/.bin/postcss`.
  - The script removes and recreates `dist` unconditionally.
  - The script records file size and timing metrics after output files are written.
- Package scripts:
  - `pnpm run build` runs `NODE_ENV=development node static/js/build.js`.
  - `pnpm run build:prod` runs `NODE_ENV=production node static/js/build.js`.
  - `lint-staged` currently runs `pnpm run build` for `src/**/*.css`, which conflicts with the router guardrail and remains deferred to `VDS-0260`.
- Output shape:
  - Top-level bundles are `vds`, `core`, and `identity`, each standard and minified.
  - Component batches build `33` component source files into standard and minified output.
  - Theme batches build `4` theme source files into standard and minified output.
  - Current expected CSS output count is `80`, matching checked-in `dist`.
- Plugin behavior:
  - Inline CLI plugins are `postcss-import`, `postcss-preset-env`, `autoprefixer`, and `cssnano` for minified output.
  - No `postcss.config.*` file exists.
  - No `.browserslistrc` or Browserslist config file exists.
  - Only `src/index.css` and `src/core.css` currently contain `@import`.
  - Top-level builds always include `postcss-import`.
  - Batch builds include `postcss-import` only when the matched files contain `@import`.
- Source-map behavior:
  - Source maps are opt-in through `VDS_BUILD_MAPS=1`.
  - Source maps are disabled for minified output.
  - Source maps are disabled for production builds.
  - Current checked-in `dist` has `0` source map files.
- Build-adjacent helpers:
  - `static/js/combine-vds-css.js` references an outdated `../../css` root and writes `static/js/vds.css` if run.
  - `static/js/combine-vds-doc.js` references `static/js/doc-raw`, while current raw docs live at `@24vlh/vds/doc-raw`, and writes `static/js/vds-doc.html` if run.
  - These helpers are stale build-adjacent tools and are not current package build sources of truth.
- CI/publish:
  - `.github/workflows/npm-publish.yml` runs `pnpm run build:prod` on Node 20 with pnpm 9.
  - The publish job later publishes a sanitized `publish` directory with scripts and dev dependencies removed.
  - Workflow changes remain deferred to `VDS-4100`.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token, theme, selector, or generated dist changes.
- Preserve the `src` canonical and `dist` generated-output contract from `VDS-0220`.
- Preserve the current package-facing direct `dist` paths from `VDS-0230`.
- Do not change entrypoint imports, component batch membership, theme output membership, or package-facing file names in this item.

### Build, audit, or package surface

- Add `@24vlh/vds/docs/planning/architecture/vds-build-script-modernization-plan.md`.
- Do not change build scripts, package scripts, package metadata, dependencies, lockfile, workflows, or generated artifacts.
- Record modernization direction for later work:
  - prefer targeted build/check modes before any full clean build is wired into local hooks;
  - make source-map policy explicit and align it with README/release docs before release;
  - improve structured error reporting before relying on build output in release gates;
  - classify stale combine helpers before keeping, deleting, or replacing them;
  - keep generated artifact freshness in `VDS-0310`;
  - keep package smoke in `VDS-4080`;
  - keep workflow review in `VDS-4100`;
  - keep final dist refresh in `VDS-5030`.

### Documentation or demo surface

- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0240` and set `VDS-0250` as next.
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
  - Future migration and release notes must document any approved package-facing build output, source-map, dist path, entrypoint, or generated artifact policy changes.

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
  - Theme build outputs remain compatibility-sensitive package-facing surfaces.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit`
  - `pnpm run audit:consumers`
- Build-script syntax check:
  - `node --check static/js/build.js`
- Build-script inventory scan:
  - Read-only scan of build script line count, package scripts, plugin flags, source-map policy, source counts, expected output count, checked-in dist count, import-containing source files, and stale combine helper behavior.
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, and build-script artifact agree that no build script, package metadata, generated output, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-0250`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting build behavior before audit-tooling, freshness, package smoke, workflow, and final dist refresh work.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None in this item.
  - Direct `dist` package paths remain compatibility-sensitive until a later approved migration/export plan says otherwise.
- Migration guide impact:
  - Later migration and release notes must document any build-output or package-facing artifact changes.

## 10. Risks

- Unconditional clean builds are risky for local hooks and expensive on mounted filesystems.
- Build failure output is inherited from child processes and lacks structured reporting.
- Source-map behavior currently differs from README claims and must be resolved before release.
- Stale combine helpers can confuse future maintainers or generate obsolete files if run.
- Build modernization can unintentionally reshape package-facing dist paths if it is not tied back to `VDS-0220` and `VDS-0230`.

## 11. Open Questions

- Which targeted build or check modes should replace local full clean builds? Deferred to later approved tooling work and `VDS-0310`.
- Should source maps ship for any release artifact? Deferred to later approved build/release work.
- Should stale combine helpers be deleted, archived, or replaced? Deferred to later approved tooling work.
- Should publish workflow continue using `pnpm run build:prod` directly? Deferred to `VDS-4100`.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added build-script modernization artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0240` and set next recommended item to `VDS-0250`.
- `2026-05-23`: Ran/read a read-only build-script inventory scan. Summary: `static/js/build.js` is `229` lines and passes syntax check; it uses `execSync`; it removes and recreates `dist`; it uses local PostCSS CLI with `postcss-import`, `postcss-preset-env`, `autoprefixer`, and `cssnano`; source maps are gated by `VDS_BUILD_MAPS=1` and disabled for minified/production output; `43` source CSS files produce `80` expected CSS outputs; only `src/core.css` and `src/index.css` contain `@import`; no PostCSS or Browserslist config file exists; stale combine helpers exist and write generated files if run.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - `node --check static/js/build.js` passed.
  - Read-only build-script inventory scan completed.
  - VDS-0240 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0240-build-script-modernization-plan.md`
  - `@24vlh/vds/docs/planning/architecture/vds-build-script-modernization-plan.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; audit script modernization continues in `VDS-0250`.
