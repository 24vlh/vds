# VDS-0210 Source Module Architecture Audit

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0210`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0210-source-module-architecture-audit.md`

## 1. Goal

Create the first source architecture audit for VDS library structure. This item records the current CSS entrypoints, import order, module boundaries, dist-facing build assumptions, and architecture risks before any source restructuring or packaging work begins.

## 2. Scope

### In scope

- Record the current CSS source file inventory and entrypoint roles.
- Record `src/index.css`, `src/core.css`, `src/identity.css`, theme, component, and dist-facing build assumptions.
- Record import-order evidence and module-boundary risks for later structure, dist, package, build, and component audit work.
- Add a source architecture audit artifact for later source structure, dist policy, package exports, build tooling, and component boundary decisions.
- Update the master feature map so the library structure track starts with `VDS-0210` and continues to `VDS-0220`.

### Out of scope

- Source CSS changes, selector changes, token changes, package metadata changes, build script changes, generated `dist`, README, docs demo, workflow, or version changes.
- Changing entrypoints, imports, component boundaries, theme loading, docs loading, or package exports.
- Running `pnpm run build` or `pnpm run build:prod`.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/pnpm-node/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
  - `@24vlh/vds/docs/planning/docs/vds-documentation-rewrite-strategy.md`
- Repo files:
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
  - `@24vlh/vds/src/identity.css`
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/static/js/build.js`
  - `@24vlh/vds/static/js/combine-vds-css.js`
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/README.md`
  - `@24vlh/vds/dist`
- Current audit results:
  - Existing aggregate audits remain the mechanical baseline.
  - `VDS-0020` selector inventory defines selector compatibility constraints.
  - `VDS-0030` consumer compatibility defines external usage risk.
  - `VDS-0040` release policy defines package/version gates.
- Legacy or consumer context reviewed:
  - README loading model and current dist file shape.

## 4. Current Behavior Snapshot

- Source files:
  - `43` source CSS files total.
  - `6` top-level CSS files: `base.css`, `core.css`, `identity.css`, `index.css`, `layout.css`, `primitives.css`.
  - `33` component CSS files.
  - `4` theme CSS files.
- Entry points:
  - `src/index.css` imports `36` files: primitives, base, layout, and all `33` component files.
  - `src/core.css` imports `3` files: primitives, base, and layout.
  - `src/identity.css` is standalone and built as its own top-level bundle.
  - Only `src/index.css` and `src/core.css` contain `@import`.
  - Themes are not imported by `index.css` or `core.css`; they are built as separate theme files.
- Dist shape:
  - Current dist contains top-level `vds.css`, `core.css`, and `identity.css` standard/minified outputs.
  - Current dist contains `66` component CSS outputs and `8` theme CSS outputs including minified files.
- Module-boundary observations:
  - `28` source files contain `data-vds-*` selectors.
  - Highest custom-property definition counts are in the four theme files, `android-shell.css`, `primitives.css`, `content-blocks.css`, `authoring.css`, `command.css`, and `buttons.css`.
  - Component hard-coded color literals appear in `8` component files.
- Known mismatches:
  - README language currently implies full framework load includes themes, while `src/index.css` and `dist/vds.css` do not include themes.
  - README source-consumption language names utilities in the foundation order, while `src/core.css` does not import utilities.
  - Component files are batch-built as standalone CSS, so dependency assumptions need a later source-of-truth policy.
  - `data-vds-*` root selector coverage is uneven across components and should be classified during component audits, not changed here.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS implementation changes.
- Record the current architecture contract:
  - `index.css` is the full component bundle entrypoint without themes or identity.
  - `core.css` is the foundation entrypoint for primitives, base, and layout only.
  - `identity.css` is a separate identity bundle.
  - `src/themes/*.css` remain separate theme surfaces.
  - `src/components/*.css` remain standalone component source files until a later approved policy changes dependency guarantees.
- Later restructuring must classify entrypoint, import-order, theme-loading, and standalone component changes as source/package API changes before release.

### Build, audit, or package surface

- Add `@24vlh/vds/docs/planning/architecture/vds-source-module-architecture-audit.md`.
- Do not change package scripts, package fields, build logic, dist files, or generated artifacts.
- Feed findings into `VDS-0220`, `VDS-0230`, `VDS-0240`, `VDS-0300`, and component audit wave items.

### Documentation or demo surface

- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to mark `VDS-0200` as `in-progress`, close `VDS-0210`, and set `VDS-0220` as next.
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
  - None in this item. Later migration notes must call out changes to entrypoints, dist files, theme loading, component standalone guarantees, or source import paths.

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
  - Theme files remain separate and are not loaded by `index.css` or `core.css`; later docs/package work must make that explicit.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit`
  - `pnpm run audit:consumers`
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Source architecture scan:
  - Read-only scan of source file counts, entrypoint imports, files with `@import`, dist shape, `data-vds-*` selector coverage, custom property concentration, and hard-coded component colors.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, and architecture artifact agree that no source CSS or package/build output changed.
  - Confirm the next recommended item is `VDS-0220`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by starting the library structure and packaging audit track.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - Future migration/release notes must document any approved entrypoint, dist, theme-loading, or component standalone-contract changes.

## 10. Risks

- Source architecture findings can become stale if later source files, dist files, or build scripts change without updating the architecture artifact.
- README/package docs can mislead consumers until later documentation/package items reconcile the loading model.
- Standalone component outputs may imply dependency guarantees that have not yet been formally documented.
- Import-order changes can have wide cascade effects and must not be made casually.

## 11. Open Questions

- Which dist files are canonical checked-in artifacts? Deferred to `VDS-0220`.
- Which package exports and files should be public for `1.0.0`? Deferred to `VDS-0230`.
- Which build script changes are needed to support a faster, safer release pipeline? Deferred to `VDS-0240`.
- Whether component files guarantee standalone usage is deferred to `VDS-0220`, `VDS-0230`, and component audit wave items.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added source module architecture audit artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to mark `VDS-0200` as `in-progress`, close `VDS-0210`, and set next recommended item to `VDS-0220`.
- `2026-05-23`: Ran/read the source architecture scan. Summary: `43` source CSS files; `6` top-level CSS files; `33` component CSS files; `4` theme CSS files; `src/index.css` imports `36` files; `src/core.css` imports `3` files; only `src/index.css` and `src/core.css` contain `@import`; `src/identity.css` is standalone; themes are not imported by `index.css` or `core.css`; current dist has `6` top-level CSS outputs, `66` component CSS outputs, and `8` theme CSS outputs; `28` source files contain `data-vds-*` selectors; component hard-coded color literals appear in `8` component files.
- `2026-05-23`: Ran validation: `pnpm run audit`, `pnpm run audit:consumers`, VDS-0210 markdown sanity checks, and `git diff --check` passed.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - VDS-0210 markdown sanity checks passed.
  - `git diff --check` passed.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0210-source-module-architecture-audit.md`
  - `@24vlh/vds/docs/planning/architecture/vds-source-module-architecture-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; dist and source-of-truth policy continues in `VDS-0220`.
