# VDS File Naming and Component Alias Policy

Last updated: `2026-05-23`

Source item: `VDS-0300`

This file records the VDS file naming and component alias policy for the library structure track. It is a planning artifact only: no source CSS, docs demo, generated docs index, generated `dist`, package metadata, build script, workflow, selector, alias, symlink, npm tag, or version field changes happen here.

## Policy Summary

- The canonical component slug is the kebab-case filename stem under `@24vlh/vds/src/components/{slug}.css`.
- The current package-facing component paths are `@24vlh/vds/dist/components/{slug}.css` and `@24vlh/vds/dist/components/{slug}.min.css`.
- Raw docs component pages use `@24vlh/vds/doc-raw/vds-{slug}.doc.html`.
- Generated docs index IDs use `vds-{slug}`.
- Top-level/foundation docs are not component aliases.
- Theme slugs are separate from component slugs.
- `data-vds-*` attributes are selector/audit evidence, not canonical component IDs.
- No aliases, renamed files, symlinks, compatibility copies, generated outputs, or package `exports` are created in `VDS-0300`.

## Canonical Surfaces

| Surface | Current naming contract |
| --- | --- |
| Component source | `src/components/{slug}.css` |
| Component dist | `dist/components/{slug}.css` |
| Component minified dist | `dist/components/{slug}.min.css` |
| Raw component doc | `doc-raw/vds-{slug}.doc.html` |
| Generated docs ID | `vds-{slug}` |
| Package component path | `@24vlh/vds/dist/components/{slug}.css` |
| Package minified component path | `@24vlh/vds/dist/components/{slug}.min.css` |

The slug is the source component filename stem. Later work may rename or alias a slug only through an approved migration/deprecation plan.

## Component Slug Inventory

Current canonical component slugs:

- `accordion`
- `action-bar`
- `android-shell`
- `authoring`
- `avatar`
- `badge-tag`
- `buttons`
- `charts`
- `command`
- `content-blocks`
- `description-list`
- `doc-block`
- `feedback`
- `flows`
- `forms`
- `forms-advanced`
- `guidance`
- `header-footer`
- `hero`
- `icons`
- `inbox`
- `navigation`
- `overlays`
- `progress`
- `sections`
- `skeleton`
- `state`
- `tables`
- `tabs`
- `toasts`
- `tooltips-popovers`
- `typography`
- `utilities`

Current counts:

- Component source files: `33`.
- Standard component dist files: `33`.
- Minified component dist files: `33`.
- Component source slugs without raw docs: `0`.
- Component source slugs without standard dist files: `0`.
- Standard dist component slugs without source files: `0`.

## Non-Component Top-Level Docs

These raw docs are top-level/foundation docs, not component aliases:

- `vds-base`
- `vds-identity`
- `vds-index`
- `vds-layout`

Related source surfaces:

- `src/base.css`
- `src/layout.css`
- `src/index.css`
- `src/core.css`
- `src/identity.css`

These files are foundation or entrypoint surfaces. They must not be treated as component files during component audit wave planning.

## Theme Naming Boundary

Theme source and dist files use theme slugs, not component slugs:

- `graphite`
- `carbon`
- `navy`
- `slate`

Theme paths are governed by the source/dist and package-surface policies, not by component naming.

## Generated Docs Index Evidence

- Generated docs index entries: `37`.
- Generated component JSON files: `37`.
- Raw docs count: `37`.
- Raw docs, generated component JSON files, and index entries currently match by docs ID.
- `15` generated docs lack `source_css` metadata:
  - `vds-action-bar`
  - `vds-android-shell`
  - `vds-base`
  - `vds-description-list`
  - `vds-flows`
  - `vds-icons`
  - `vds-identity`
  - `vds-inbox`
  - `vds-index`
  - `vds-layout`
  - `vds-overlays`
  - `vds-progress`
  - `vds-sections`
  - `vds-state`
  - `vds-utilities`

Because `source_css` is prose-derived and incomplete, do not use it as authoritative naming truth.

## Docs Shell Navigation Evidence

- `index.html` docs navigation links: `39`.
- Unique linked raw docs: `37`.
- Missing linked raw docs: `0`.
- Duplicate docs links:
  - `vds-index.doc.html`
  - `vds-state.doc.html`
- Duplicate `data-path` values:
  - `home`
  - `state`

Docs navigation cleanup remains later docs/runtime work. It does not create component aliases.

## README Naming Mismatches

Current README examples include naming that does not match the package identity or current component files:

- `vds/dist/...` instead of `@24vlh/vds/dist/...`.
- `vds/dist/components/button.css`, but the current component file is `buttons.css`.
- `vds/dist/components/card.css`, but no current `card.css` component exists.
- README source-map claims conflict with current checked-in dist evidence from prior package/build reviews.

These are documentation mismatches. They do not define aliases and should be corrected in later documentation/release work.

## `data-vds-*` Attribute Evidence

Raw docs currently use `28` unique `data-vds-*` attributes. Attributes that do not exactly match a component slug include:

- `data-vds-chart`
- `data-vds-commands`
- `data-vds-content-block`
- `data-vds-dock-block`
- `data-vds-flow`
- `data-vds-form`
- `data-vds-form-advanced`
- `data-vds-identity`
- `data-vds-overlay`
- `data-vds-table`
- `data-vds-toast`

Component slugs without an exact matching `data-vds-*` attribute include:

- `buttons`
- `charts`
- `command`
- `content-blocks`
- `doc-block`
- `flows`
- `forms`
- `forms-advanced`
- `icons`
- `navigation`
- `overlays`
- `sections`
- `tables`
- `toasts`
- `tooltips-popovers`
- `utilities`

This evidence is intentionally not normalized in `VDS-0300`. Component audits must classify whether each `data-vds-*` selector is public, internal, docs-only, legacy-compatible, or eligible for migration.

## Alias Rule

- Do not add singular/plural compatibility files casually.
- Do not add symlinks or duplicate dist files without an approved migration plan.
- Do not add package `exports` aliases without preserving existing package-facing paths or approving migration.
- Do not rename source, raw docs, generated docs IDs, or dist paths without source/dist, package-surface, consumer, and docs-index impact review.
- Do not treat README examples or incomplete generated metadata as aliases.

## Future Work Contract

- `VDS-0310` must use this policy when checking generated artifact freshness.
- Component audit wave items must use canonical component slugs when naming component families and package-facing paths.
- Docs rewrite work must use canonical slugs for source references and correct README/package examples.
- Package/export work must preserve current direct dist component paths unless a migration plan approves otherwise.
- Migration/release work must call out any approved rename, alias, or removed path explicitly.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Source module architecture audit: `@24vlh/vds/docs/planning/architecture/vds-source-module-architecture-audit.md`
- Source/dist policy: `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`
- Package surface review: `@24vlh/vds/docs/planning/architecture/vds-package-metadata-and-exports-review.md`
- Docs indexing pipeline review: `@24vlh/vds/docs/planning/architecture/vds-docs-indexing-pipeline-review.md`
- Demo server and doc loader review: `@24vlh/vds/docs/planning/architecture/vds-demo-server-doc-loader-review.md`
- Component source: `@24vlh/vds/src/components`
- Component dist: `@24vlh/vds/dist/components`
- Raw docs: `@24vlh/vds/doc-raw`
- Generated docs index: `@24vlh/agents/docs_vds`
- README: `@24vlh/vds/README.md`
