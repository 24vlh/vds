# VDS Source Module Architecture Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-0210`

This file is the source module architecture audit for the VDS library structure track. It is a planning artifact only: no source CSS, selector, token, package metadata, build script, generated `dist`, README, docs demo, workflow, or version field changes happen here.

## Current Source Inventory

- Source CSS files: `43`.
- Top-level CSS files: `6`:
  - `src/base.css`
  - `src/core.css`
  - `src/identity.css`
  - `src/index.css`
  - `src/layout.css`
  - `src/primitives.css`
- Component CSS files: `33`.
- Theme CSS files: `4`.

## Entrypoint Contract Snapshot

| Entrypoint | Current Role | Import Behavior |
| --- | --- | --- |
| `src/index.css` | Full component bundle entrypoint | Imports primitives, base, layout, and all `33` components. Does not import themes or identity. |
| `src/core.css` | Foundation entrypoint | Imports primitives, base, and layout only. Does not import utilities, themes, identity, or components. |
| `src/identity.css` | Standalone identity bundle | Contains identity/logo rules directly and is built as its own top-level bundle. |
| `src/themes/*.css` | Theme surfaces | Built separately as theme outputs and not imported by `index.css` or `core.css`. |
| `src/components/*.css` | Component source surfaces | Batch-built into standalone component outputs; dependency guarantees are not yet formally documented. |

## Current Import Evidence

- Only `src/index.css` and `src/core.css` contain `@import`.
- `src/index.css` imports `36` files:
  - `primitives.css`
  - `base.css`
  - `layout.css`
  - all `33` component CSS files.
- `src/core.css` imports `3` files:
  - `primitives.css`
  - `base.css`
  - `layout.css`.

## Current Dist Shape

- Top-level dist CSS outputs: `6`, including standard and minified variants of `vds.css`, `core.css`, and `identity.css`.
- Component dist CSS outputs: `66`, including standard and minified variants.
- Theme dist CSS outputs: `8`, including standard and minified variants.
- Dist freshness, canonical artifact policy, and generated-output verification are deferred to `VDS-0220` and `VDS-0310`.

## Module Boundary Evidence

- `28` source files contain `data-vds-*` selectors.
- Custom property definitions are concentrated in theme files, `android-shell.css`, `primitives.css`, `content-blocks.css`, `authoring.css`, `command.css`, and `buttons.css`.
- Component hard-coded color literals appear in `8` component files:
  - `progress.css`
  - `android-shell.css`
  - `feedback.css`
  - `flows.css`
  - `hero.css`
  - `doc-block.css`
  - `buttons.css`
  - `command.css`
- Large/high-coupling source files that need special audit attention include `utilities.css`, `android-shell.css`, `content-blocks.css`, `icons.css`, `inbox.css`, and `command.css`.

## Architecture Risks

- README language currently implies full framework load includes themes, while `src/index.css` and `dist/vds.css` do not include themes.
- README source-consumption language names utilities in the foundation order, while `src/core.css` does not import utilities.
- Component files are batch-built as standalone CSS, so component dependency assumptions need a later source-of-truth policy.
- `data-vds-*` root selector coverage is uneven across components and should be classified during component audits.
- Import-order changes can alter cascade behavior across the entire library.
- Module boundary changes may become package/source API changes and must be classified before release.

## Future Work Contract

- `VDS-0220` must decide dist/source-of-truth policy and whether generated outputs are canonical checked-in artifacts.
- `VDS-0230` must decide package metadata, package `files`, and public package surfaces.
- `VDS-0240` must review build script behavior, performance, source map policy, and batch output assumptions.
- `VDS-0300` must reconcile file naming and component alias policy.
- Component audit wave items must classify public selectors, dependency assumptions, `data-vds-*` roots, theme behavior, and standalone usage guarantees.

## Audit Rules for Later Work

- Do not change entrypoint imports without an approved source/package compatibility plan.
- Do not rename or remove public, candidate-public, or legacy-compatible selectors to fix architecture boundaries without a migration/deprecation plan.
- Do not treat standalone component dist files as independently safe until dependency assumptions are documented.
- Do not change theme loading behavior without updating documentation, package policy, consumer compatibility notes, and release notes.
- Every source architecture change must state whether it affects `src`, `dist`, package metadata, docs examples, consumer imports, or migration notes.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Release policy: `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
- Documentation rewrite strategy: `@24vlh/vds/docs/planning/docs/vds-documentation-rewrite-strategy.md`
- Selector inventory: `@24vlh/vds/docs/planning/api/vds-selector-inventory.md`
- Consumer compatibility report: `@24vlh/vds/docs/planning/api/vds-consumer-compatibility.md`
- Source entrypoints: `@24vlh/vds/src/index.css`, `@24vlh/vds/src/core.css`, `@24vlh/vds/src/identity.css`
- Build script: `@24vlh/vds/static/js/build.js`
