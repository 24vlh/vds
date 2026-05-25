# VDS Operational Memory

## Repo Identity

- Package: `@24vlh/vds`
- Current version: `0.3.8`
- Target release version: `1.0.0`
- Package surface: checked-in `dist/`
- Published files policy: package metadata currently publishes `dist`
- Runtime stance: CSS-first; JavaScript behavior belongs to consumers or docs demos unless explicitly implemented in docs scripts.

## Public Interface Categories

For `1.0.0`, treat these as public or compatibility-sensitive until a session explicitly changes them:

- package paths under `dist/`;
- component CSS selectors and aliases;
- token and theme custom properties;
- raw docs examples that users can copy;
- docs shell behavior only as documentation infrastructure, not library runtime.

## Source Truth

- CSS authoring source: `src/`
- Component CSS source: `src/components/*.css`
- Standalone identity CSS: `src/identity.css`
- Theme CSS: `src/themes/*.css`
- Raw runnable docs: `doc-raw/*.doc.html`
- Generated docs evidence: `@24vlh/agents/docs_vds`
- Archived selector/consumer evidence: `docs/planning/_archive/2026-05-planning-ledger/api/`

If CSS and docs conflict, source CSS wins for current behavior and the mismatch becomes backlog work.

## Current Counts

- Source CSS files: `43`
- Component CSS files under `src/components`: `33`
- Theme files: `4`
- Raw docs: `42`
- Generated docs component JSON files: `42`
- Archived planning Markdown: `166` files before compression, about `41k` lines.

## Package and Docs Model

- `dist/vds.css` is the package-facing full bundle.
- Themes are separate files under `dist/themes/`.
- Component-level package imports use direct `dist/components/*.css` paths.
- `src/` is canonical authoring source in the repo, not the current package-facing published surface.
- Raw docs are currently loaded as HTML fragments by the docs shell.
- Generated metadata is evidence and index data, not the hand-edited docs source.
- Selector/token inventories and generated docs metadata have explicit write commands plus read-only drift checks.

## Documentation Program Memory

- `DOCS-S01` created the executable raw-doc rewrite queue for the original `37` raw docs: `DOCS-S03` Start/Foundation (`10` docs), `DOCS-S04` priority behavior components (`17` docs), and `DOCS-S05` remaining components/patterns (`10` docs).
- `DOCS-S02` locked the `1.0.0` authoring model as raw-first hybrid: raw docs stay handwritten and canonical, while strict template rules guide rewrites.
- `index.html` and `js/doc-loader.js` continue loading raw HTML fragments directly during this cycle.
- Generated component JSON stays evidence/index output only, not hand-edited source.
- Current generated docs evidence has `42` component JSON files and is freshness-checked by `INFRA-S03`.
- Current docs shell evidence has `42` canonical `data-doc` links, `42` unique linked raw docs, no missing linked raw docs, and no duplicate docs routes after `DOCS-S08`.
- Raw-doc heading, required-section, copy-safety, image-alt, hash-link, and button-name checks are enforced by `DOCS-S09` through `pnpm run audit:docs`.
- Every raw-doc rewrite must use source-backed selectors, copy-safe examples, accessible labels/names, explicit consumer-owned runtime/ARIA notes, and responsive/theme notes where relevant.
- Template/data renderer work remains deferred to a later approved docs tooling session; `INFRA-S03` covers metadata generation and freshness only.
- `DOCS-S03` rewrote the Start/Foundation raw docs: `vds-index`, `vds-base`, `vds-layout`, `vds-sections`, `vds-typography`, `vds-utilities`, `vds-icons`, `vds-identity`, `vds-authoring`, and `vds-doc-block`. They now use one live `h1`, current source/package paths, copy-safe examples, and runtime ownership notes.
- `DOCS-S04` rewrote the priority behavior raw docs: `vds-buttons`, `vds-action-bar`, `vds-navigation`, `vds-header-footer`, `vds-tabs`, `vds-forms`, `vds-forms-advanced`, `vds-description-list`, `vds-overlays`, `vds-tooltips-popovers`, `vds-command`, `vds-tables`, `vds-toasts`, `vds-feedback`, `vds-progress`, `vds-skeleton`, and `vds-state`. They now use one live `h1`, current source/package paths, copy-safe examples, and explicit consumer-owned JavaScript/ARIA/runtime ownership notes.
- `DOCS-S05` rewrote the remaining component/pattern raw docs: `vds-accordion`, `vds-android-shell`, `vds-avatar`, `vds-badge-tag`, `vds-charts`, `vds-content-blocks`, `vds-flows`, `vds-guidance`, `vds-hero`, and `vds-inbox`. They now use one live `h1`, current source/package paths, copy-safe examples, and explicit consumer-owned JavaScript/ARIA/runtime ownership notes.
- `DOCS-S06` consolidated example quality across all `37` original raw docs by adding shared validation, responsive/theme/motion, migration/release, source-truth, package-surface, and runtime-ownership notes.
- `DOCS-S07` fixed docs shell routes/search/navigation: `index.html` now exposes one canonical route per raw doc, and `js/doc-loader.js` owns exact route loading, lightweight link search, loading/error states, active navigation, title updates, and browser back/forward handling.
- `DOCS-S08` added five shared handwritten raw docs and routes: `vds-accessibility`, `vds-theming`, `vds-utilities-guide`, `vds-migration`, and `vds-recipes`. The shell now indexes `42` canonical raw docs.
- `DOCS-S09` added `static/js/validate-doc-quality.js` and chained it into `audit:docs`, making the raw-first docs contract enforceable without editing generated metadata.
- `INFRA-S03` refreshed `@24vlh/agents/docs_vds` from all `42` raw docs, improved `source_css` extraction from Source truth/import examples, and wired generated metadata freshness into `audit:docs`.

## Current Validation Commands

Useful checks in the cleaned package metadata:

```sh
pnpm run audit:css
pnpm run audit:classes
pnpm run audit:tokens
pnpm run audit:docs
pnpm run audit:docs:metadata
pnpm run audit:selectors
pnpm run audit:dist
pnpm run dist:check
pnpm run audit:package
pnpm run package:smoke
pnpm run audit:browser
pnpm run browser:smoke
pnpm run audit:consumers
pnpm run release:context -- --tag v0.3.8
pnpm run release:prepare
pnpm run release:package
pnpm run release:verify
pnpm run audit
git diff --check
```

Current generated-evidence commands:

```sh
pnpm run inventory:selectors
pnpm run inventory:tokens
pnpm run inventory
pnpm run docs:vds:index
pnpm run dist:refresh
```

Current guarded/write-like commands:

```sh
pnpm run build
pnpm run build:prod
```

Current `1.0.0` infrastructure has deliberate selector, docs metadata, dist freshness, package smoke, browser smoke, consumer compatibility checks, CI, and npm trusted-publish gates. Remaining infrastructure work is final release checklist, version bump, release notes, and release-candidate verification.

`INFRA-S01` restored read-only selector, dist-presence, and consumer compatibility audit commands and changed `lint-staged` to run CSS/token validation instead of the build. Generated selector inventories, generated consumer reports, docs metadata regeneration, and dist freshness comparison remain deferred to later `INFRA-*` sessions.

`INFRA-S02` restored active selector and token inventories under `docs/planning/api/`. `audit:selectors` and `audit:tokens` are read-only drift checks; `inventory:selectors`, `inventory:tokens`, and `inventory` are the explicit write commands. Consumer compatibility now reads current selector evidence when present, while generated consumer reports remain deferred.

`INFRA-S03` restored generated docs metadata freshness: `docs:vds:index` is the explicit write command for `@24vlh/agents/docs_vds`, and `audit:docs:metadata` is the read-only drift check included in `audit:docs`. The generated index now covers all `42` raw docs.

`INFRA-S04` made checked-in `dist` reproducible: `dist:refresh` is the explicit write command, `dist:check` is the read-only temporary-build comparison, and `audit:dist` now checks both package-file presence and source-vs-dist freshness.

`INFRA-S05` added package smoke checks: `package:smoke` builds an ignored temporary package fixture from `pnpm pack --dry-run --json` output and verifies package-root, full bundle, core-plus-components, theme, and standalone identity CSS imports through `postcss-import`. `audit:package` is included in the full `audit` flow.

`INFRA-S06` added browser smoke checks: `browser:smoke` launches system Chromium (`chromium-browser` by default, or `VDS_CHROMIUM=/path/to/chrome`) against an internal ephemeral static server and verifies representative docs routes, desktop/mobile overflow, theme values, reduced-motion rendering, forced-colors rendering, and serious/critical axe findings. `audit:browser` is included in the full `audit` flow.

`INFRA-S07` hardened CI and publishing: pull requests and `main` pushes run `pnpm run audit` with sibling `@24vlh/agents` metadata tooling checked out beside VDS, while tag publishes verify release context, run the full audit, prepare a sanitized package from checked-in `dist`, validate `npm pack --dry-run`, and publish with npm trusted publishing/OIDC plus `--provenance`. npm auth tokens are intentionally rejected.

## Known System Gaps

- Component contracts are large and uneven; several files combine component, utility, docs-demo, and app-pattern responsibilities.
- Docs are manually authored raw HTML, inconsistent in structure, and sometimes stale against CSS.
- Generated docs metadata is active generated evidence, but richer full-text/search extraction remains a future docs tooling concern.
- Browser smoke now covers first-gate docs rendering, responsive overflow, theme values, reduced-motion, forced-colors, and serious/critical axe checks; deeper screenshot baselines and scripted interaction tests remain future release work.
- Consumer/runtime responsibilities are often implied rather than documented.
- `dist` is checked in and freshness-checked; build performance remains slow on this filesystem and can be optimized later if it becomes a blocker.
- Release workflow now has CI and trusted-publish gates; final `1.0.0` still needs release notes, version bump, changelog/migration review, and a release-candidate publish dry run.

## 1.0.0 Working Rule

Use `vds-next-major-backlog.md` sessions. Do not revive the old pattern of creating a new long planning file for every small task.

Each implementation session must either:

- change real source/docs/tooling and validate it; or
- explicitly mark the work deferred with the reason and release impact.
