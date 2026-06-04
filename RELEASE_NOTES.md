# VDS 1.0.0 Release Notes

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

VDS 1.0.0 is the stable major release target for `@24vlh/vds`. It keeps VDS CSS-first, keeps package imports centered on checked-in `dist`, and turns the component, documentation, and infrastructure work into a verifiable release surface.

## What Changed

- All component families have been modernized through compatibility-first sessions.
- Raw docs have been rewritten into concise, copy-safe, source-backed usage docs.
- Shared guidance now covers accessibility, theming, utilities, migration, and recipes.
- The docs shell now has canonical routes, search, active navigation, loading state, fetch errors, and title handling.
- Selector/token inventories, generated docs metadata, dist freshness, package import smoke tests, browser smoke tests, CI, and publish gates are now deliberate infrastructure.
- The package version is now `1.0.0`.

## Package Surface

Install:

```sh
npm install @24vlh/vds
```

Package-facing CSS imports remain:

```css
@import "@24vlh/vds/dist/vds.css";
@import "@24vlh/vds/dist/core.css";
@import "@24vlh/vds/dist/components/buttons.css";
@import "@24vlh/vds/dist/themes/graphite.css";
@import "@24vlh/vds/dist/identity.css";
```

Themes remain separate from `dist/vds.css`. `src/` is the canonical authoring source in the repository, while package consumers should treat `dist/` as the package-facing surface.

## Component And Runtime Boundaries

VDS provides CSS selectors, variables, layout hooks, visual states, and docs examples. Consumer applications own behavior: state changes, routing, validation, focus management, keyboard handling, ARIA synchronization, live announcements, timers, data loading, sorting, filtering, expansion, and dismissal.

## Documentation

The `1.0.0` docs use handwritten raw HTML fragments under `doc-raw/` as the canonical docs source. Generated docs metadata under `@24vlh/agents/docs_vds` is generated evidence and should be refreshed only through `pnpm run docs:vds:index`.

## Release Validation

The release candidate should pass:

```sh
pnpm run inventory
pnpm run docs:vds:index
pnpm run dist:refresh
pnpm run audit
pnpm run release:context -- --tag v1.0.0
pnpm run release:verify
```

Before publishing, run a dry publish from the prepared package directory when local npm tooling allows it:

```sh
pnpm run release:prepare
pnpm run release:package
npm publish --dry-run --access public --provenance
```

## Publishing

The GitHub publish workflow is designed for semver tags shaped like `v*.*.*`. It verifies the repository with read-only audits, checks the prepared package, and publishes with npm trusted publishing and provenance. The workflow intentionally does not use `NPM_TOKEN` or regenerate `dist` during publish.
