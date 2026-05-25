# VDS-0300 File Naming and Component Alias Policy

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0300`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0300-file-naming-and-component-alias-policy.md`

## 1. Goal

Create the VDS file naming and component alias policy before generated-artifact freshness and later component audit work. This item records the canonical naming contract across `src/components`, `dist/components`, raw docs, generated docs index IDs, package-facing paths, and `data-vds-*` attributes.

## 2. Scope

### In scope

- Record the canonical component slug rule.
- Record current source, dist, raw-doc, and generated-index naming evidence.
- Record top-level/foundation docs that are not component aliases.
- Record current README naming mismatches and `data-vds-*` slug drift as follow-up evidence.
- Add a naming policy artifact for later component audits, docs rewrite work, package exports, migration notes, generated artifact checks, and release verification.
- Update the master feature map so the library structure track continues to `VDS-0310`.

### Out of scope

- Changing source CSS, docs demos, generated docs index files, generated `dist`, package metadata, build scripts, workflows, selectors, aliases, symlinks, compatibility copies, npm tags, or version fields.
- Renaming component files, raw docs, dist files, package paths, docs index IDs, or `data-vds-*` attributes.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running `pnpm run docs:vds:index`.
- Running write/regeneration commands such as `pnpm run inventory:selectors` or `pnpm run consumer:scan`.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/architecture/vds-source-module-architecture-audit.md`
  - `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`
  - `@24vlh/vds/docs/planning/architecture/vds-package-metadata-and-exports-review.md`
  - `@24vlh/vds/docs/planning/architecture/vds-docs-indexing-pipeline-review.md`
  - `@24vlh/vds/docs/planning/architecture/vds-demo-server-doc-loader-review.md`
- Repo files:
  - `@24vlh/vds/src/components`
  - `@24vlh/vds/dist/components`
  - `@24vlh/vds/doc-raw`
  - `@24vlh/vds/index.html`
  - `@24vlh/vds/README.md`
  - `@24vlh/agents/docs_vds/index.json`
  - `@24vlh/agents/docs_vds/components`
- Current audit results:
  - `pnpm run audit` passes.
  - `pnpm run audit:consumers` passes.
- Legacy or consumer context reviewed:
  - Package-facing direct `dist` paths remain compatibility-sensitive under `VDS-0230`.

## 4. Current Behavior Snapshot

- Component source:
  - `33` component source files exist under `@24vlh/vds/src/components`.
  - The current component source slugs are the kebab-case filename stems.
  - Every component source slug has a matching raw doc slug.
- Component dist:
  - `33` standard component files exist under `@24vlh/vds/dist/components`.
  - `33` minified component files exist under `@24vlh/vds/dist/components`.
  - Every component source slug has a matching standard dist component file.
- Raw docs:
  - `37` raw docs exist under `@24vlh/vds/doc-raw`.
  - The four raw docs without component source files are `vds-base`, `vds-identity`, `vds-index`, and `vds-layout`.
  - These four are top-level/foundation docs, not component aliases.
- Generated docs index:
  - Generated docs index contains `37` entries.
  - Generated component JSON count is `37`.
  - `15` generated docs currently lack `source_css` metadata, so `source_css` is not authoritative naming truth.
- Docs shell navigation:
  - `index.html` has `39` docs navigation links for `37` unique raw docs.
  - Duplicate docs are `vds-index.doc.html` and `vds-state.doc.html`.
  - Duplicate `data-path` values are `home` and `state`.
- README evidence:
  - README examples currently mention `vds/dist/...` instead of `@24vlh/vds/dist/...`.
  - README examples mention `button.css` and `card.css`, which are not current dist component filenames.
  - These are documentation mismatches, not aliases.
- `data-vds-*` evidence:
  - Raw docs use `28` unique `data-vds-*` attributes.
  - Some attributes are singular/plural variants of component slugs.
  - Some component slugs have no matching root `data-vds-*` attribute.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- Define the canonical component slug as the kebab-case filename stem under `@24vlh/vds/src/components/{slug}.css`.
- Treat `src/base.css`, `src/layout.css`, `src/index.css`, `src/core.css`, and `src/identity.css` as foundation/entrypoint surfaces, not component files.
- Treat theme filenames under `src/themes` and `dist/themes` as theme slugs, separate from component slugs.
- Treat `data-vds-*` attributes as selector/audit evidence, not canonical file path or component ID truth.
- Defer `data-vds-*` normalization to component audits and migration planning.

### Build, audit, or package surface

- Add `@24vlh/vds/docs/planning/architecture/vds-file-naming-component-alias-policy.md`.
- Define current package-facing component paths as:
  - `@24vlh/vds/dist/components/{slug}.css`
  - `@24vlh/vds/dist/components/{slug}.min.css`
- Do not create singular/plural aliases, compatibility copies, symlinks, package `exports`, renamed dist files, or generated artifact changes in `VDS-0300`.
- Keep generated artifact freshness checking deferred to `VDS-0310`.

### Documentation or demo surface

- Define raw docs component pages as `@24vlh/vds/doc-raw/vds-{slug}.doc.html`.
- Define generated docs index IDs as `vds-{slug}`.
- Treat `vds-base`, `vds-layout`, `vds-identity`, and `vds-index` as top-level/foundation docs, not component aliases.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0300` and set `VDS-0310` as next.
- Do not change README, raw docs, docs shell, docs demos, generated docs indexes, or agents docs output in this item.

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None in this item.
- Breaking changes:
  - None in runtime CSS, package metadata, package import paths, docs routes, generated docs metadata, generated output, or `data-vds-*` attributes.
- Migration notes:
  - None for package consumers. Later renames, aliases, compatibility copies, `exports` maps, README fixes, raw-doc rewrites, and `data-vds-*` normalization must be approved separately and migration-planned when package-facing or selector-facing surfaces are affected.

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
  - No runtime behavior changes.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit`
  - `pnpm run audit:consumers`
- Naming inventory scan:
  - Record component source slugs.
  - Record dist component slugs.
  - Record raw doc slugs.
  - Record generated docs index IDs.
  - Record source/doc/dist mismatches.
  - Record top-level docs that are not components.
  - Record `source_css` metadata gaps.
  - Record docs navigation duplicates.
  - Record README naming mismatches.
  - Record `data-vds-*` slug drift.
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, and naming policy artifact agree that no source CSS, docs demo, package metadata, alias file, generated index, generated output, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-0310`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting naming policy before generated artifact freshness and component audit work.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later naming changes may require migration notes if they affect package paths, docs routes, selectors, or generated metadata.

## 10. Risks

- README examples currently name stale package paths and nonexistent component dist files, which can confuse consumers until docs rewrite work fixes them.
- `source_css` metadata in the generated docs index is incomplete and should not drive naming decisions.
- `data-vds-*` attributes are uneven and can look like component IDs even when they are singular/plural variants or local audit markers.
- Creating aliases casually would expand the public package surface and make later cleanup harder.
- Renaming files without migration planning would affect source imports, package-facing dist paths, docs pages, generated docs metadata, and release notes.

## 11. Open Questions

- Should VDS eventually normalize singular/plural component names such as `charts` versus `chart` and `forms-advanced` versus `form-advanced`? Deferred to component audit and migration planning.
- Should README examples be updated to canonical package paths before or during the docs rewrite? Deferred to documentation work.
- Should generated docs metadata get explicit source path fields instead of prose-derived `source_css`? Deferred to docs indexing/tooling work.
- Should package `exports` ever provide named component aliases? Deferred to package/release work.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added naming policy artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0300` and set next recommended item to `VDS-0310`.
- `2026-05-23`: Ran/read a read-only naming inventory scan. Summary: `33` component source files; `33` standard and `33` minified component dist files; `37` raw docs; every component source slug has a matching raw doc and standard dist file; non-component raw docs are `base`, `identity`, `index`, and `layout`; generated docs index has `37` entries and `37` component JSON files; `15` generated docs lack `source_css`; docs navigation has `39` links for `37` unique raw docs with duplicate `vds-index.doc.html` and `vds-state.doc.html`; README examples include stale `vds/dist/...`, `button.css`, and `card.css`; raw docs use `28` unique `data-vds-*` attributes with singular/plural drift.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - Read-only naming inventory scan completed.
  - VDS-0300 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0300-file-naming-and-component-alias-policy.md`
  - `@24vlh/vds/docs/planning/architecture/vds-file-naming-component-alias-policy.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; generated artifact freshness checking continues in `VDS-0310`.
