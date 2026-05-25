# VDS Raw Docs HTML Ownership Plan

Last updated: `2026-05-25`

Source item: `VDS-3040`

Next recommended item: `VDS-3050 Docs example quality pass`

This file records the raw-doc ownership decision for the VDS documentation rewrite epic. It is a planning artifact only: no README, raw docs, docs shell, loader scripts, generated docs metadata, generated output, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, version fields, or runtime CSS APIs change here.

## Decision

`@24vlh/vds/doc-raw/*.doc.html` remains the canonical handwritten runnable docs source for the current VDS-0600 rewrite cycle.

This decision preserves the current docs runtime while later documentation rewrite work improves content quality. The docs shell, doc loader, local server, and generated metadata pipeline already depend on raw HTML fragments, so the current cycle should not introduce a generator, data schema, renderer, or docs-shell rewrite before example quality and docs-runtime requirements are known.

## Ownership Contract

- Raw docs under `@24vlh/vds/doc-raw` are canonical runnable docs source.
- Later docs rewrite items may edit raw docs only when the approved item explicitly includes raw-doc changes.
- Generated docs metadata under `@24vlh/agents/docs_vds` is generated evidence only and must not be edited by hand.
- `@24vlh/vds/index.html`, `@24vlh/vds/js/doc-loader.js`, and local docs scripts continue to load raw HTML fragments directly.
- Generated docs metadata refreshes require explicit approval and must record the command, affected outputs, and freshness evidence.
- Source CSS remains the selector and CSS behavior truth for component docs.
- Component audit artifacts remain planning decision sources for selector contracts, risks, and rewrite routing.

## Ownership Options

| Option | Decision | Reason |
| --- | --- | --- |
| Handwritten raw HTML | Chosen for current rewrite cycle | Matches the current docs shell, doc loader, local server, and generated metadata source root. |
| Generated from templates | Deferred | No approved template generator exists, and introducing one would be architecture work rather than ownership planning. |
| Split docs data plus renderer | Deferred | Could be useful later, but should follow docs shell/navigation review and docs lint requirements. |

## Current Raw Docs Evidence

Raw-doc scan:

- Files: `37`.
- Lines: `42,792`.
- Total `h1`: `53`.
- Total `h2`: `455`.
- Total `h3`: `495`.
- Total `pre`: `487`.
- Total `code`: `2544`.
- Total `role`: `350`.
- Total `aria-*` matches: `864`.

Heading consistency evidence:

- `14` raw docs have an `h1` count other than one.
- Examples with `0` `h1`:
  - `vds-action-bar`
  - `vds-avatar`
  - `vds-description-list`
  - `vds-overlays`
  - `vds-progress`
  - `vds-state`
- Example with many `h1`:
  - `vds-hero` has `18`.

This evidence makes heading normalization a future raw-doc rewrite/lint concern, not an ownership blocker.

## Docs Shell and Runtime Evidence

Docs shell evidence:

- `39` `data-doc` links.
- `37` unique linked raw docs.
- `0` raw docs missing from docs shell links.
- `0` docs shell links missing raw docs.
- Duplicate linked docs:
  - `doc-raw/vds-index.doc.html`
  - `doc-raw/vds-state.doc.html`
- Duplicate `data-path` values:
  - `home`
  - `state`

Runtime evidence:

- `@24vlh/vds/js/doc-loader.js` fetches raw HTML fragments with `fetch(url, { cache: "no-cache" })`.
- Loaded HTML replaces `#doc-content`.
- Document title is derived from the first `h1`.
- Click navigation uses `data-path` and `history.pushState`.
- Initial load resolves the final URL segment against docs-shell links.
- `docBlock()`, `window.VDSOverlay`, and `window.VDSCommand` are initialized after injection when available.

Docs shell duplicates, title fallback behavior, loading UI, error UI, and back/forward behavior remain `VDS-3110` concerns.

## Generated Metadata Evidence

- `@24vlh/agents/docs_vds/.build-meta.json` uses `@24vlh/vds/doc-raw` as `source_root`.
- Generated component JSON remains aligned to `37` raw docs.
- `@24vlh/agents/docs_vds/index.json` records `37` component entries.
- Generated metadata exists for navigation and extraction; it is not source truth for raw-doc ownership.
- Generated `source_css` fields can be incomplete and must be treated as evidence only.

## Rewrite Rules

Later raw-doc rewrite work must:

- State explicitly when raw-doc edits are in scope.
- Preserve runnable examples unless the approved item intentionally replaces them.
- Follow the `VDS-3030` component docs template for component pages.
- Keep generated metadata read-only until an approved docs-index refresh item runs.
- Keep docs shell/runtime changes out of raw-doc content rewrite items unless explicitly approved.
- Preserve source-backed selectors and note consumer-owned behavior for CSS-only interactive surfaces.

## Deferred Future Architecture

Generated templates or a docs data+renderer model can be reconsidered after:

- `VDS-3050` defines and applies example quality rules.
- `VDS-3110` reviews docs shell/search/navigation/runtime behavior.
- `VDS-3130` defines docs lint rules for headings, snippets, dependencies, class existence, and accessibility sections.

If a future architecture replaces handwritten raw docs, it must include migration rules for:

- raw-doc fragment URLs;
- docs-shell routing;
- generated docs metadata source root and refresh flow;
- runnable examples and demo script initialization;
- heading/title behavior;
- docs lint and validation commands.

## Non-Goals

This plan does not:

- Rewrite raw docs.
- Rewrite README.
- Change docs shell navigation or loader behavior.
- Refresh generated docs metadata.
- Add a docs generator, schema, renderer, or lint rule.
- Change source CSS, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields.

## Handoff

`VDS-3040` hands off to:

- `VDS-3050 Docs example quality pass`: improve runnable raw-doc examples under the handwritten raw HTML ownership model.
- `VDS-3060 Accessibility documentation rewrite`: define shared accessibility and state/ARIA documentation.
- `VDS-3070 Theming documentation rewrite`: define shared theming, contrast, forced-colors, and custom-theme documentation.
- `VDS-3110 Docs search and navigation review`: decide docs shell navigation, duplicate links/paths, loading/error UI, title handling, and loader behavior.
- `VDS-3130 Documentation lint rules`: enforce heading, snippet, dependency, selector, and accessibility documentation rules.
