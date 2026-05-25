# VDS-0230 Package Metadata and Exports Review

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0230`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0230-package-metadata-and-exports-review.md`

## 1. Goal

Create the VDS package metadata and public package-surface review before build tooling work continues. This item records the current `package.json`, packed file set, package-facing import paths, README/package mismatches, and compatibility rules for any later `exports` or package metadata changes.

## 2. Scope

### In scope

- Record the current package identity, metadata fields, published file policy, and package-facing CSS import paths.
- Record current dry-run package contents without creating or publishing a tarball.
- Record current consumer evidence for package and vendored CSS consumption.
- Record compatibility rules for any later `exports` or package metadata change.
- Record README/package mismatches as follow-up evidence for documentation and release work.
- Add a package-surface artifact for later package metadata, package smoke, build tooling, documentation, migration, and release/version items.
- Update the master feature map so the library structure track continues to `VDS-0240`.

### Out of scope

- Changing `package.json`, package scripts, package version, `pnpm-lock.yaml`, source CSS, generated `dist`, README, build scripts, workflows, docs demos, selectors, or tokens.
- Adding an `exports` map, `publishConfig`, `sideEffects`, `engines`, `type`, or package-manager metadata.
- Running `pnpm run build` or `pnpm run build:prod`.
- Creating package smoke automation; this remains deferred to `VDS-4080`.
- Refreshing generated dist or final release output; this remains deferred to `VDS-5030`.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/pnpm-node/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/architecture/vds-source-module-architecture-audit.md`
  - `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
  - `@24vlh/vds/docs/planning/api/vds-consumer-compatibility.md`
  - `@24vlh/agents/docs_md/pnpm-node/pnpm/package_json.md`
  - `@24vlh/agents/docs_md/pnpm-node/nodejs/packages-api.md`
- Repo files:
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/README.md`
  - `@24vlh/vds/LICENSE`
  - `@24vlh/vds/dist`
  - `@24vlh/vds/.npmrc`
- Current audit results:
  - Existing aggregate audits remain the mechanical baseline.
  - `VDS-0220` records that `src/` is canonical authoring truth and `dist/` is checked-in generated package output.
- Legacy or consumer context reviewed:
  - `@24vlh/keep-exec` package and Angular style configuration.
  - `@24vlh/vlah.io` vendored CSS usage.

## 4. Current Behavior Snapshot

- Package metadata:
  - Package name is `@24vlh/vds`.
  - Current package version is `0.3.8`.
  - `main` and `style` point to `dist/vds.css`.
  - `files` includes only `dist`.
  - Repository points to `https://github.com/24vlh/vds.git`.
  - `.npmrc` uses `registry=https://registry.npmjs.org/`.
- Missing package metadata:
  - No `exports` field.
  - No `publishConfig` field.
  - No `sideEffects` field.
  - No `homepage`, `bugs`, `engines`, `type`, or `packageManager` field.
  - No `types` or `typings` field, which is expected for a CSS-only package unless later tooling adds type surfaces.
- Current package-facing output:
  - `80` checked-in dist CSS files.
  - `33` standard component CSS files and `33` minified component CSS files.
  - `4` standard theme CSS files and `4` minified theme CSS files.
  - Top-level CSS outputs are `dist/vds.css`, `dist/vds.min.css`, `dist/core.css`, `dist/core.min.css`, `dist/identity.css`, and `dist/identity.min.css`.
  - Current checked-in dist has `0` source map files.
- Dry-run pack evidence:
  - `pnpm pack --dry-run` reports `83` packed files.
  - Packed surface includes `80` CSS files plus `LICENSE`, `package.json`, and `README.md`.
  - Source files, planning docs, scripts, raw docs, and lockfile are not packed under the current `files` policy.
  - The dry run invokes `prepare`/`husky`; this is noted but not changed here.
- Consumer evidence:
  - `@24vlh/keep-exec` depends on `@24vlh/vds@^0.3.8`.
  - `@24vlh/keep-exec` loads `@24vlh/vds/dist/vds.css` and `@24vlh/vds/dist/themes/graphite.css`.
  - `@24vlh/vlah.io` uses vendored VDS CSS assets instead of package imports.
- Known README/package mismatches:
  - README install command uses `vds` instead of `@24vlh/vds`.
  - README import examples use `vds/dist/...` instead of `@24vlh/vds/dist/...`.
  - README says the full framework load includes themes, while `dist/vds.css` does not include themes.
  - README component examples mention `button.css` and `card.css`, which are not current dist filenames.
  - README says all outputs include source maps, while current checked-in dist has no maps.
  - README describes direct source consumption, but current package `files` excludes `src`.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token, theme, selector, or generated dist changes.
- Treat `@24vlh/vds` as the canonical package identity.
- Treat `src/` as canonical authoring source, but not a published package surface under the current `files: ["dist"]` policy.
- Treat current direct `dist` paths as compatibility-sensitive package-facing surfaces:
  - `@24vlh/vds/dist/vds.css` and `@24vlh/vds/dist/vds.min.css`
  - `@24vlh/vds/dist/core.css` and `@24vlh/vds/dist/core.min.css`
  - `@24vlh/vds/dist/identity.css` and `@24vlh/vds/dist/identity.min.css`
  - `@24vlh/vds/dist/components/*.css` and `@24vlh/vds/dist/components/*.min.css`
  - `@24vlh/vds/dist/themes/*.css` and `@24vlh/vds/dist/themes/*.min.css`

### Build, audit, or package surface

- Add `@24vlh/vds/docs/planning/architecture/vds-package-metadata-and-exports-review.md`.
- Do not change package fields in this item.
- Record that adding `exports` is a package API change because Node package docs state unlisted subpaths become inaccessible.
- No restrictive `exports` map may be added without preserving current package-facing subpaths or approving a migration plan.
- Defer exact package metadata edits to later approved package/release work.
- Feed findings into `VDS-0240`, `VDS-0260`, `VDS-4080`, `VDS-4100`, `VDS-5020`, `VDS-5030`, and `VDS-5060`.

### Documentation or demo surface

- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0230` and set `VDS-0240` as next.
- Do not change README, raw docs, docs shell, docs demos, or generated docs indexes in this item.
- Record README/package mismatches for later documentation rewrite and release bundle work.

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
  - Future package migration notes must describe any package-facing dist path, package `files`, package identity, or export-map change.
  - Any future restrictive `exports` map must either preserve current direct dist subpaths or be approved as a breaking migration item.

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
  - Theme dist files remain compatibility-sensitive package-facing surfaces.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit`
  - `pnpm run audit:consumers`
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Package metadata scan:
  - Read-only scan of package identity, package fields, missing metadata fields, dist CSS counts, top-level dist files, component/theme dist files, and source map count.
- Pack dry run:
  - `pnpm pack --dry-run`
  - Confirm the reported packed files match this plan and the package-surface artifact.
  - Confirm no `.tgz` remains in the repo after the dry run.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, and package-surface artifact agree that no package metadata or runtime output changed.
  - Confirm the next recommended item is `VDS-0240`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by recording the current package surface before package metadata and release work.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None in this item.
  - Direct `dist` package paths remain compatibility-sensitive until a later approved migration/export plan says otherwise.
- Migration guide impact:
  - Later migration and release notes must document package path changes, `exports` changes, `files` changes, and README loading-model corrections.

## 10. Risks

- Adding `exports` later can unintentionally break current direct `dist` imports if existing subpaths are not preserved.
- README package examples are currently misleading and can continue confusing consumers until documentation rewrite/release bundle work fixes them.
- `pnpm pack --dry-run` invokes `prepare`/`husky`; package workflow behavior should be reviewed later rather than changed casually here.
- The package publishes only `dist`, so source-consumption claims need explicit package policy before release.

## 11. Open Questions

- Which exact `exports` map, if any, should ship for `1.0.0`? Deferred to later approved package/release work.
- Should package metadata add `sideEffects`, `engines`, `type`, `packageManager`, `homepage`, `bugs`, or `publishConfig`? Deferred to later approved package/release work.
- Should `src` ever be included in the published package? Deferred to later approved package/release work.
- Should `prepare`/`husky` run during package dry runs or release packaging? Deferred to `VDS-0260`, `VDS-4100`, and release items.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added package metadata and exports review artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0230` and set next recommended item to `VDS-0240`.
- `2026-05-23`: Ran/read a read-only package metadata scan. Summary: package name `@24vlh/vds`; version `0.3.8`; `main` and `style` point to `dist/vds.css`; `files` includes only `dist`; no `exports`, `publishConfig`, `sideEffects`, `homepage`, `bugs`, `engines`, `type`, or `packageManager`; `80` dist CSS files; `0` source maps; `33` standard component files; `33` minified component files; `4` standard theme files; `4` minified theme files.
- `2026-05-23`: Ran `pnpm pack --dry-run`. Summary: dry run reported `83` packed files: `80` CSS files, `LICENSE`, `package.json`, and `README.md`; no `.tgz` remained in the repo after the dry run; dry run invoked `prepare`/`husky`.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - Read-only package metadata scan completed.
  - `pnpm pack --dry-run` completed and left no `.tgz` in the repo root.
  - VDS-0230 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0230-package-metadata-and-exports-review.md`
  - `@24vlh/vds/docs/planning/architecture/vds-package-metadata-and-exports-review.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; build script modernization continues in `VDS-0240`.
