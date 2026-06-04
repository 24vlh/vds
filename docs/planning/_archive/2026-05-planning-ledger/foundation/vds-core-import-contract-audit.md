# VDS Core Import Contract Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-1220`

This file records the core/full-bundle import contract audit for the base, layout, utilities, and global CSS track. It is a planning artifact only: no CSS imports, raw docs, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/core.css` is the foundation bundle. It imports `primitives.css`, `base.css`, and `layout.css` only.
- `@24vlh/vds/src/index.css` is the full component bundle. It imports the same foundations plus all `33` component CSS files, including `utilities.css`.
- `@24vlh/vds/src/themes/*.css` remain separate theme surfaces and are not imported by `core.css` or `index.css`.
- `@24vlh/vds/src/identity.css` remains a separate identity surface and is not imported by `core.css` or `index.css`.
- Checked-in `dist` files are generated package-facing output. Direct `dist` paths remain compatibility-sensitive.
- Standalone component dist files remain package-facing, but their dependency assumptions are not changed by this item.
- Any future source CSS change that touches imports while generated output is out of scope must record `dist refresh pending`.

## Source Entrypoint Evidence

Current source CSS inventory:

- Total source CSS files: `43`.
- Top-level source CSS files: `6`.
- Component source CSS files: `33`.
- Theme source CSS files: `4`.
- Files containing `@import`: `2`.

Top-level source files:

- `@24vlh/vds/src/base.css`
- `@24vlh/vds/src/core.css`
- `@24vlh/vds/src/identity.css`
- `@24vlh/vds/src/index.css`
- `@24vlh/vds/src/layout.css`
- `@24vlh/vds/src/primitives.css`

`@24vlh/vds/src/core.css` imports:

- `primitives.css`
- `base.css`
- `layout.css`

`@24vlh/vds/src/index.css` imports:

- `primitives.css`
- `base.css`
- `layout.css`
- `components/accordion.css`
- `components/action-bar.css`
- `components/android-shell.css`
- `components/authoring.css`
- `components/avatar.css`
- `components/badge-tag.css`
- `components/buttons.css`
- `components/charts.css`
- `components/command.css`
- `components/content-blocks.css`
- `components/description-list.css`
- `components/doc-block.css`
- `components/feedback.css`
- `components/flows.css`
- `components/forms.css`
- `components/forms-advanced.css`
- `components/guidance.css`
- `components/header-footer.css`
- `components/hero.css`
- `components/icons.css`
- `components/inbox.css`
- `components/navigation.css`
- `components/overlays.css`
- `components/progress.css`
- `components/sections.css`
- `components/skeleton.css`
- `components/state.css`
- `components/tables.css`
- `components/tabs.css`
- `components/toasts.css`
- `components/tooltips-popovers.css`
- `components/typography.css`
- `components/utilities.css`

Import conclusions:

- `core.css` does not import utilities, themes, identity, or components.
- `index.css` imports utilities as a component file.
- `index.css` does not import themes or identity.
- `identity.css` is standalone source, not an imported member of the full component bundle.

## Dist and Package Evidence

`@24vlh/vds/static/js/build.js` currently maps top-level source entries as:

- `@24vlh/vds/src/index.css` to `@24vlh/vds/dist/vds.css`
- `@24vlh/vds/src/core.css` to `@24vlh/vds/dist/core.css`
- `@24vlh/vds/src/identity.css` to `@24vlh/vds/dist/identity.css`

Checked-in `dist` evidence:

- Total checked-in CSS files under `dist`: `80`.
- Top-level standard/minified pairs:
  - `dist/vds.css`
  - `dist/vds.min.css`
  - `dist/core.css`
  - `dist/core.min.css`
  - `dist/identity.css`
  - `dist/identity.min.css`
- Component standard/minified pairs are generated from `src/components/*.css`.
- Theme standard/minified pairs are generated from `src/themes/*.css`.
- No checked-in source maps are currently part of `dist`.

Package evidence:

- Package name: `@24vlh/vds`.
- Package version: `0.3.8`.
- `main`: `dist/vds.css`.
- `style`: `dist/vds.css`.
- `files`: `dist` only.

Package-facing path contract:

- `@24vlh/vds/dist/vds.css` and `@24vlh/vds/dist/vds.min.css`
- `@24vlh/vds/dist/core.css` and `@24vlh/vds/dist/core.min.css`
- `@24vlh/vds/dist/identity.css` and `@24vlh/vds/dist/identity.min.css`
- `@24vlh/vds/dist/components/*.css` and `@24vlh/vds/dist/components/*.min.css`
- `@24vlh/vds/dist/themes/*.css` and `@24vlh/vds/dist/themes/*.min.css`

These paths remain compatibility-sensitive until a later approved package/export/migration item changes the policy.

## Docs Shell Evidence

`@24vlh/vds/index.html` currently loads:

- `43` CSS stylesheets.
- All four source theme files:
  - `src/themes/slate.css`
  - `src/themes/navy.css`
  - `src/themes/carbon.css`
  - `src/themes/graphite.css`
- `src/base.css` after the theme files.
- `src/layout.css` after `src/base.css`.
- `src/identity.css` as a separate stylesheet.
- Component source files directly rather than the generated `dist/vds.css` bundle.

Docs-shell conclusions:

- The docs shell is a local runtime composition, not package import policy.
- The docs shell loads all themes because theme roots are scoped by `data-theme`.
- Docs-shell ordering differs from `src/core.css` and `src/index.css` bundle behavior.
- Any docs-shell order change requires a later approved docs runtime or docs rewrite item.

## README and Docs Mismatch Evidence

Current README/package/import mismatches:

- README says full framework load includes themes, while `src/index.css` and `dist/vds.css` do not include themes.
- README source-consumption wording says foundation order includes utilities, while `src/core.css` does not include utilities.
- README examples use `vds/dist/...` instead of current package identity `@24vlh/vds/dist/...`.
- README component examples mention stale paths such as `button.css` and `card.css`.
- README says all outputs include source maps, while current checked-in `dist` has no maps.

These are documentation findings, not approved runtime or package changes.

## Consumer Evidence

Earlier consumer compatibility reports record:

- `@24vlh/keep-exec` depends on `@24vlh/vds@^0.3.8` and loads `@24vlh/vds/dist/vds.css` plus `@24vlh/vds/dist/themes/graphite.css`.
- `@24vlh/vlah.io` uses vendored VDS CSS assets rather than package imports.

This supports the current package guidance that the full component bundle and active theme are separate load surfaces.

## Risks

- README currently implies themes are part of the full framework bundle, but they are separate CSS files.
- README currently implies utilities are foundation-level source consumption, but `core.css` excludes utilities.
- Docs shell all-theme loading differs from package-consumer guidance to load one active theme.
- Docs shell stylesheet order differs from bundle import order.
- Standalone component dist files are package-facing but do not yet have a formal dependency declaration policy.
- Any future import-order change can alter cascade behavior across base, layout, utilities, and components.

## Audit Rules for Later Import Work

- Do not change `core.css` or `index.css` imports without a later approved source/package/docs item.
- Do not add utilities to `core.css` without classifying the package, docs, migration, and consumer impact.
- Do not fold themes or identity into `vds.css` without package, docs, migration, and dist policy review.
- Treat standalone component CSS files as compatibility-sensitive package paths.
- Keep docs-shell runtime decisions separate from package import policy unless a later approved item intentionally aligns them.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1230` must use this import contract when auditing `layout.css`.
- `VDS-1250` through `VDS-1270` must account for utilities being included in the full component bundle but excluded from `core.css`.
- Component audit wave items must avoid assuming standalone component files include foundations, themes, or identity unless a later package policy defines that.
- Documentation rewrite work must correct the full-bundle/theme, foundation/utilities, package-name, stale component filename, and source-map guidance mismatches.
- Package/export work must preserve current direct `dist` paths or approve a migration plan.
- Release verification must confirm final package docs and generated `dist` agree with the chosen import contract.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Base layer audit: `@24vlh/vds/docs/planning/foundation/vds-base-layer-audit.md`
- Source module architecture audit: `@24vlh/vds/docs/planning/architecture/vds-source-module-architecture-audit.md`
- Source/dist policy: `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`
- Package metadata and exports review: `@24vlh/vds/docs/planning/architecture/vds-package-metadata-and-exports-review.md`
- Build script modernization plan: `@24vlh/vds/docs/planning/architecture/vds-build-script-modernization-plan.md`
- Consumer compatibility report: `@24vlh/vds/docs/planning/api/vds-consumer-compatibility.md`
- Core entrypoint: `@24vlh/vds/src/core.css`
- Full component bundle entrypoint: `@24vlh/vds/src/index.css`
- Identity source: `@24vlh/vds/src/identity.css`
- Build script: `@24vlh/vds/static/js/build.js`
- Package metadata: `@24vlh/vds/package.json`
- Docs shell: `@24vlh/vds/index.html`
