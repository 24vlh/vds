# VDS Demo Server and Doc Loader Review

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-0280`

This file records the VDS local docs runtime review for the library structure track. It is a planning artifact only: no server code, browser JavaScript, docs shell HTML, raw docs, generated docs index, package metadata, source CSS, generated `dist`, workflows, lockfiles, selectors, tokens, or version fields change here.

## Policy Summary

- The local docs site is an authoring and review surface, not package `dist` proof.
- The docs shell currently loads source CSS and raw HTML fragments directly.
- Runtime changes to the server, loader, navigation, or demo scripts require later approved implementation items.
- Generated docs index alignment remains governed by `VDS-0270` and later docs navigation work.
- The next tooling decision is dependency and Node baseline review in `VDS-0290`.

## Current Server Surface

- Package script: `pnpm run doc:serve`.
- Script target: `node static/js/server.js`.
- Server dependency: Express from dev dependencies.
- Served root: `@24vlh/vds`.
- Port: `8000`.
- Host binding: `0.0.0.0`.
- Static serving: `express.static(ROOT, { extensions: ["html"] })`.
- Fallback: unmatched routes return `index.html`.
- Current gaps:
  - no port environment override;
  - no startup error handling;
  - no explicit cache policy;
  - no security headers;
  - no localhost-only default.

## Current Docs Shell Surface

- Shell file: `@24vlh/vds/index.html`.
- CSS links: `43`, all present.
- Source CSS links: `41`.
- Theme CSS links: `4`.
- Component CSS links: `33`.
- Browser scripts: `6`, all present:
  - `js/theme-switcher.js`
  - `js/title-handler.js`
  - `js/doc-block.js`
  - `js/overlays-demo.js`
  - `js/vds-command.js`
  - `js/doc-loader.js`
- Navigation links:
  - `39` `data-doc` links;
  - `37` unique raw docs;
  - no linked raw docs missing;
  - duplicate docs links: `vds-index.doc.html`, `vds-state.doc.html`;
  - duplicate `data-path` values: `home`, `state`.

## Current Loader Surface

- Loader file: `@24vlh/vds/js/doc-loader.js`.
- Target container: `#doc-content`.
- Link contract: anchors with `data-doc` and optional `data-path`.
- Fragment source: raw docs under `@24vlh/vds/doc-raw`.
- Fetch mode: `fetch(url, { cache: "no-cache" })`.
- Route behavior:
  - click navigation calls `history.pushState`;
  - initial load uses the last URL segment;
  - empty path defaults to `home`;
  - fallback matching checks link text, then `data-path` substring matching.
- Fragment behavior:
  - loaded HTML replaces `#doc-content`;
  - document title is set from the first `h1`;
  - page scrolls to top with smooth behavior;
  - `docBlock()` is called after injection;
  - `window.VDSOverlay.init({ force: true })` and `window.VDSOverlay.reset()` run when available;
  - `window.VDSCommand.init()` runs when available.
- Current gaps:
  - no `response.ok` handling;
  - no fetch `catch` handling;
  - no loading, empty, or error UI;
  - no `popstate` handling for browser back/forward;
  - title selection depends on inconsistent raw-doc `h1` structure.

## Supporting Demo Scripts

- `js/doc-block.js` handles code selection/copy and expandable code blocks.
- `js/overlays-demo.js` provides delegated overlay demo behavior and exposes `window.VDSOverlay`.
- `js/vds-command.js` provides delegated command demo behavior and exposes `window.VDSCommand`.
- `js/theme-switcher.js` stores `data-theme` in `localStorage`.
- `js/title-handler.js` is present but only acts when `#doc-title` exists.

## Future Work Contract

- `VDS-0290` must review dependency and Node baselines with Express, dev tooling, and local docs runtime in mind.
- Later docs-runtime work should decide whether to add configurable host/port, localhost-only binding, explicit cache behavior, and server error handling.
- Later loader work should decide whether to add fetch error UI, `response.ok` checks, `popstate`, generated navigation, and title fallback behavior.
- Docs navigation generation remains tied to `VDS-0270`, `VDS-3110`, and docs rewrite work.
- Quality automation may later add local docs HTTP or browser smoke tests.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Documentation rewrite strategy: `@24vlh/vds/docs/planning/docs/vds-documentation-rewrite-strategy.md`
- Docs indexing pipeline review: `@24vlh/vds/docs/planning/architecture/vds-docs-indexing-pipeline-review.md`
- Package metadata: `@24vlh/vds/package.json`
- Docs shell: `@24vlh/vds/index.html`
- Local docs server: `@24vlh/vds/static/js/server.js`
- Fragment loader: `@24vlh/vds/js/doc-loader.js`
- Supporting browser scripts: `@24vlh/vds/js`
