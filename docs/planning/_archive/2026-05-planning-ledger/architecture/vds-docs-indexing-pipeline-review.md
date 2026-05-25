# VDS Docs Indexing Pipeline Review

Last updated: `2026-05-23`

Source item: `VDS-0270`

This file records the VDS docs indexing pipeline review for the library structure track. It is a planning artifact only: no raw docs, generated docs index, agents tooling, docs shell, package metadata, source CSS, generated reports, generated `dist`, workflows, lockfiles, selectors, tokens, or version fields change here.

## Policy Summary

- `@24vlh/vds/doc-raw` is the current runnable docs source.
- `@24vlh/agents/docs_vds` is generated navigation and extraction metadata.
- Generated docs index files must not be edited by hand.
- Refreshing generated docs index files requires an explicitly approved item because it writes outside `@24vlh/vds`.
- Raw docs ownership, docs shell behavior, generator changes, and generated-index freshness automation remain later approved work.

## Current Pipeline

- Generator: `@24vlh/agents/tools/vds-index.mjs`.
- Command: `pnpm run docs:vds:index` from `@24vlh/agents`.
- Source root: `@24vlh/vds/doc-raw`.
- Output root: `@24vlh/agents/docs_vds`.
- Outputs:
  - `AGENTS.md`
  - `README.md`
  - `index.json`
  - `.build-meta.json`
  - `components/*.json`

## Current Freshness Evidence

- Raw docs: `37`.
- Generated component JSON files: `37`.
- `index.json` component entries: `37`.
- Raw docs, component JSON files, and `index.json` entries match by component id.
- `.build-meta.json` input hash matches the current generator and raw docs.
- Current `.build-meta.json` source root is `@24vlh/vds/doc-raw`.

## Current Generated Index Totals

- Docs: `37`.
- Blocks: `438`.
- Code examples: `465`.
- Class-token entries: `2400`.
- Raw-doc `pre` blocks: `487`.
- Component JSON files with zero blocks: `0`.
- Component JSON files with no examples: `0`.
- Component JSON files with empty summaries: `0`.

## Current Docs Shell Evidence

- `@24vlh/vds/index.html` uses `data-doc` links to load raw docs.
- `data-doc` link count: `39`.
- Unique linked raw docs: `37`.
- Raw docs missing from docs shell links: `0`.
- Docs shell links missing raw docs: `0`.
- Duplicate linked docs:
  - `vds-index.doc.html`
  - `vds-state.doc.html`
- Duplicate `data-path` values:
  - `home`
  - `state`

## Metadata Risks

- `source_css` is parsed from prose `Source:` paragraphs and is not authoritative architecture data.
- `15` generated docs have no `source_css` metadata.
- `vds-command` references `slate.css`, while current theme files live under `themes/`.
- Raw docs have inconsistent heading structure:
  - total `h1` elements: `53`;
  - files with `h1` count other than one: `14`.
- `@24vlh/agents/tools/check-docs-sync.mjs` includes VDS freshness checks, but broad `pnpm run check:docs` can fail for unrelated agents catalog drift.

## Future Work Contract

- `VDS-0280` must review docs shell loading behavior without changing generated index ownership.
- Raw-doc cleanup must not hand-edit generated `@24vlh/agents/docs_vds` files.
- Docs rewrite items must explicitly state whether they touch raw docs, generated index refreshes, docs shell navigation, or generated metadata.
- A later docs lint or quality item should add targeted VDS docs-index freshness validation.
- Any generated docs index refresh must record the command, affected outputs, and hash freshness result in the approved item implementation log.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Documentation rewrite strategy: `@24vlh/vds/docs/planning/docs/vds-documentation-rewrite-strategy.md`
- VDS docs router: `@24vlh/agents/docs_vds/AGENTS.md`
- Generated docs index: `@24vlh/agents/docs_vds/index.json`
- Generated docs metadata: `@24vlh/agents/docs_vds/.build-meta.json`
- VDS docs generator: `@24vlh/agents/tools/vds-index.mjs`
- Agents docs sync checker: `@24vlh/agents/tools/check-docs-sync.mjs`
- VDS docs shell: `@24vlh/vds/index.html`
- VDS doc loader: `@24vlh/vds/js/doc-loader.js`
