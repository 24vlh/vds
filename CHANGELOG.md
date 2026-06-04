# Changelog

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

All notable VDS package changes are summarized here for release review.

## 1.0.0 - 2026-05-26

VDS 1.0.0 is the first stable major release line for `@24vlh/vds`. It promotes the current CSS-first system into a checked, documented, package-facing design system with explicit release gates.

### Added

- Component modernization across all `33` `src/components/*.css` files plus standalone `src/identity.css`.
- Compatibility aliases for common ARIA and `data-*` state hooks where source CSS already had class-only equivalents.
- Shared accessibility, theming, utilities, migration, and recipes docs in the raw docs shell.
- Lightweight docs shell routing, search, loading, error, title, and active-route behavior.
- Enforced docs quality linting through `pnpm run audit:docs`.
- Active selector and token inventories under `docs/planning/api/`.
- Reproducible generated docs metadata for all `42` raw docs.
- Read-only dist freshness checks plus explicit `dist:refresh`.
- Package import smoke tests for full, core, component, theme, and standalone identity CSS imports.
- Browser smoke checks for representative docs routes, responsive overflow, theme values, reduced motion, forced colors, and serious or critical axe findings.
- CI and npm trusted-publishing gates for checked-in `dist`, provenance, and prepared-package validation.

### Changed

- Package version is promoted from `0.3.8` to `1.0.0`.
- Raw docs are now treated as user-facing usage contracts for the `1.0.0` release cycle.
- The active planning model is session-based rather than one Markdown plan per micro-task.
- `audit:*` commands are treated as read-only checks. Explicit write commands are used for inventories, generated docs metadata, and dist refreshes.
- Release publishing now verifies the checked-in package surface instead of rebuilding `dist` inside the publish workflow.

### Compatibility

- Package-facing CSS imports remain under `dist/`.
- `dist/vds.css`, `dist/core.css`, direct `dist/components/*.css`, direct `dist/themes/*.css`, and `dist/identity.css` remain the documented import surfaces.
- No intentional selector, token, or package-path removals are part of the 1.0.0 release checklist.
- Consumer application code remains responsible for JavaScript behavior, routing, validation, focus management, ARIA synchronization, live announcements, data lifecycle, and component-specific runtime state.

### Validation

- `pnpm run inventory`
- `pnpm run docs:vds:index`
- `pnpm run dist:refresh`
- `pnpm run audit`
- `pnpm run release:context -- --tag v1.0.0`
- `pnpm run release:verify`

### Release Notes

See `RELEASE_NOTES.md`, `MIGRATION.md`, and `KNOWN_LIMITATIONS.md` for publish-facing review notes.
