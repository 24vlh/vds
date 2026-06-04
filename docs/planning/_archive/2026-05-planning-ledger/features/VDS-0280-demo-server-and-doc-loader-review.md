# VDS-0280 Demo Server and Doc Loader Review

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0280`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0280-demo-server-and-doc-loader-review.md`

## 1. Goal

Create the VDS local docs shell review before dependency and Node baseline work continues. This item records how `pnpm run doc:serve`, `static/js/server.js`, `index.html`, and `js/doc-loader.js` currently serve and load runnable raw docs.

## 2. Scope

### In scope

- Record current local docs server behavior.
- Record current docs shell asset and navigation behavior.
- Record current raw-doc fragment loader behavior.
- Record docs-runtime risks and future-work routing.
- Add a docs-runtime artifact for later docs shell, doc loader, local server, navigation, docs rewrite, and docs QA work.
- Update the master feature map so the library structure track continues to `VDS-0290`.

### Out of scope

- Changing server code, browser JavaScript, docs shell HTML, raw docs, generated docs index files, package metadata, source CSS, generated reports, generated `dist`, workflows, lockfiles, selectors, tokens, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running `pnpm run docs:vds:index`.
- Running write/regeneration commands such as `pnpm run inventory:selectors` or `pnpm run consumer:scan`.
- Starting or changing the local docs server as part of this item.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/pnpm-node/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/docs/vds-documentation-rewrite-strategy.md`
  - `@24vlh/vds/docs/planning/architecture/vds-docs-indexing-pipeline-review.md`
- Repo files:
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/index.html`
  - `@24vlh/vds/static/js/server.js`
  - `@24vlh/vds/js/doc-loader.js`
  - `@24vlh/vds/js/doc-block.js`
  - `@24vlh/vds/js/overlays-demo.js`
  - `@24vlh/vds/js/vds-command.js`
  - `@24vlh/vds/js/theme-switcher.js`
  - `@24vlh/vds/js/title-handler.js`
- Current audit results:
  - `pnpm run audit` passes.
  - `pnpm run audit:consumers` passes.
  - `node --check static/js/server.js` passes.
  - `node --check` passes for all `js/*.js`.
- Legacy or consumer context reviewed:
  - No package consumers are affected by this planning item.

## 4. Current Behavior Snapshot

- Package script:
  - `doc:serve` runs `node static/js/server.js`.
- Local server:
  - Uses Express from dev dependencies.
  - Serves the VDS project root.
  - Uses fixed port `8000`.
  - Binds host `0.0.0.0`.
  - Static serving uses `extensions: ["html"]`.
  - Unmatched routes fall back to `index.html`.
  - No port environment override, startup error handling, explicit cache policy, or security headers are currently configured.
- Docs shell:
  - `index.html` loads `43` CSS links, all present.
  - `41` CSS links point at `src/`.
  - `4` CSS links point at `src/themes/`.
  - `33` CSS links point at `src/components/`.
  - `index.html` loads `6` browser scripts, all present.
  - Browser scripts are `theme-switcher.js`, `title-handler.js`, `doc-block.js`, `overlays-demo.js`, `vds-command.js`, and `doc-loader.js`.
- Docs navigation:
  - `index.html` has `39` `data-doc` links.
  - Those links resolve to `37` unique raw docs.
  - Duplicate docs links are `vds-index.doc.html` and `vds-state.doc.html`.
  - Duplicate `data-path` values are `home` and `state`.
  - No linked raw docs are missing.
- Loader:
  - `js/doc-loader.js` fetches `data-doc` raw HTML fragments into `#doc-content`.
  - Fetch uses `cache: "no-cache"`.
  - Route changes use `history.pushState`.
  - Initial load resolves the last URL segment, defaulting to `home`.
  - Fragment title comes from the first loaded `h1`.
  - After injection, the loader reinitializes `docBlock`, `VDSOverlay`, and `VDSCommand`.
  - There is no fetch error handling, `response.ok` handling, loading state, empty state, error UI, or `popstate` handling.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token, theme, selector, or generated report changes.
- Record that the current docs shell is source-CSS based, not package `dist` based.
- Keep source/dist package policy separate from local docs runtime behavior.

### Build, audit, or package surface

- Add `@24vlh/vds/docs/planning/architecture/vds-demo-server-doc-loader-review.md`.
- Do not change VDS package scripts, server code, browser JavaScript, docs shell HTML, raw docs, generated docs index files, generated reports, or generated artifacts.
- Record future-work routing:
  - docs navigation generation and generated index alignment stay tied to `VDS-0270`, `VDS-3110`, and docs rewrite work;
  - runtime fixes to server or loader require later approved implementation items;
  - dependency and Node baseline review continues in `VDS-0290`.

### Documentation or demo surface

- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0280` and set `VDS-0290` as next.
- Do not change README, raw docs, docs shell, docs demos, generated docs indexes, or agents docs output in this item.

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None in this item.
- Breaking changes:
  - None in runtime CSS, package consumption, docs loader behavior, or generated docs metadata.
- Migration notes:
  - None for package consumers. Later docs-runtime work must preserve or intentionally replace current docs route and fragment-loading behavior.

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
  - No runtime behavior changes. Current shell still loads all four theme source files and the theme switcher.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit`
  - `pnpm run audit:consumers`
- Script syntax checks:
  - `node --check static/js/server.js`
  - `node --check` for every `js/*.js` file.
- Docs-runtime scan:
  - Verify CSS links in `index.html` resolve.
  - Verify script links in `index.html` resolve.
  - Verify `data-doc` links resolve to existing raw docs.
  - Record duplicate `data-doc` and `data-path` values.
  - Record server port, host, static root, extension, and fallback behavior.
  - Record loader navigation, fetch, title, and reinitialization behavior.
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, and docs-runtime artifact agree that no docs shell, server, browser JS, raw docs, generated index, package metadata, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-0290`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting local docs runtime behavior before dependency and docs rewrite work.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later docs-runtime changes may need maintainer-facing notes if local docs routes or source loading behavior changes.

## 10. Risks

- The docs shell uses source CSS directly, so it is useful for authoring but does not prove package `dist` behavior.
- Fixed server port `8000` can collide with other local services.
- Binding `0.0.0.0` exposes the docs server beyond localhost on reachable networks.
- The loader lacks fetch failure handling and back/forward `popstate` support.
- Fragment title selection depends on the first `h1`, while raw docs have inconsistent `h1` structure.
- Navigation is manually maintained in `index.html` and can drift from `@24vlh/agents/docs_vds`.

## 11. Open Questions

- Should the docs server support a configurable port and localhost-only default? Deferred to a later approved docs-runtime implementation item.
- Should docs navigation be generated from the docs index? Deferred to `VDS-3110` and docs rewrite work.
- Should loader error states and `popstate` handling be fixed before component docs rewrites? Deferred to later docs-runtime work.
- Should local docs smoke tests use Playwright or a lighter HTTP check? Deferred to quality automation work.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added docs-runtime review artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0280` and set next recommended item to `VDS-0290`.
- `2026-05-23`: Ran/read a read-only docs-runtime scan. Summary: `doc:serve` runs `node static/js/server.js`; server uses Express, fixed port `8000`, host `0.0.0.0`, static root project root, HTML extension serving, and SPA fallback; `index.html` has `43` CSS links and `6` scripts, all present; `39` `data-doc` links resolve to `37` unique raw docs; duplicate docs links are `vds-index.doc.html` and `vds-state.doc.html`; duplicate `data-path` values are `home` and `state`; loader uses `pushState`, `cache: "no-cache"`, first `h1` title extraction, and reinitializes `docBlock`, `VDSOverlay`, and `VDSCommand`; loader lacks fetch error handling and `popstate` handling.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - `node --check static/js/server.js` passed.
  - `node --check` passed for all `js/*.js` files.
  - Read-only docs-runtime scan completed.
  - VDS-0280 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0280-demo-server-and-doc-loader-review.md`
  - `@24vlh/vds/docs/planning/architecture/vds-demo-server-doc-loader-review.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; dependency and Node baseline review continues in `VDS-0290`.
