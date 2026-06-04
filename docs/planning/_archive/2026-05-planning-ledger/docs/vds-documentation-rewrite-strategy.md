# VDS Documentation Rewrite Strategy

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-0090`

This file is the documentation rewrite strategy for the VDS `1.0.0` release line. It is a planning artifact only: no README, raw docs, docs shell, generated docs index, package metadata, workflow, generated `dist`, build output, or version field changes happen here.

## Documentation Standard

- Documentation must be task-first, source-aligned, and release-aware.
- Documentation must explain what is stable, what is compatibility-sensitive, what is deprecated, and what requires consumer JavaScript.
- Documentation must connect classes and examples to selector inventory, accessibility, responsive, theme, consumer compatibility, migration, and release gates.
- Examples must be realistic enough to show product use, but small enough to copy and adapt.

## Source-of-Truth Split

| Surface | Role | Ownership Rule |
| --- | --- | --- |
| `@24vlh/vds/doc-raw/*.doc.html` | Current canonical runnable docs/demo fragments | Remains canonical until a later approved docs ownership item changes it. |
| `@24vlh/agents/docs_vds` | Generated navigation/extraction metadata | Do not edit by hand; refresh only through the approved docs index pipeline. |
| `@24vlh/vds/index.html` | Current docs shell and navigation | Runtime shell; no rewrite in `VDS-0090`. |
| `@24vlh/vds/js/doc-loader.js` | Fragment loading and deep-link behavior | Runtime loader; no rewrite in `VDS-0090`. |
| `@24vlh/vds/static/js/server.js` | Local docs server | Runtime server; no rewrite in `VDS-0090`. |
| `@24vlh/vds/README.md` | Package landing page | Rewritten later by `VDS-3020`. |
| `@24vlh/vds/docs/planning` | Planning ledger and history | Internal planning source, not public docs. |

## Current Evidence Snapshot

- Raw docs: `37` files and `42,792` scanned lines.
- Largest raw docs: `vds-content-blocks`, `vds-inbox`, `vds-command`, `vds-overlays`, `vds-tables`, `vds-icons`, `vds-base`, `vds-flows`, `vds-skeleton`, and `vds-navigation`.
- Raw docs scan: `29` files with `h1`; `53` `h1` elements; `1,046` heading elements; `487` `pre` blocks; `2,544` `code` elements; `796` ARIA attributes; `350` role attributes.
- Generated docs index: `37` docs, `438` blocks, `465` code examples, `2,400` class-token entries, and `32` referenced source CSS files.
- Runtime docs shell: `index.html` navigation links load raw docs through `js/doc-loader.js`; `static/js/server.js` serves the docs shell locally.

## Target Information Architecture

| Area | Purpose |
| --- | --- |
| Start | Overview, install, loading model, package surfaces, browser support, release status. |
| Foundations | Primitives, base, layout, typography, utilities, identity, themes, icons. |
| Components | Actions/navigation, forms, feedback/status, data/content, overlays, app/work surfaces. |
| Patterns and recipes | App shells, dashboards, forms, dense admin tools, prose/docs pages, Angular/plain HTML usage. |
| Reference | Selector inventory, dependencies, tokens, states, accessibility, responsive, theme notes. |
| Release | Migration guide, changelog, release notes, known limitations. |

## Component Documentation Template

Every component rewrite must cover:

- Purpose and when to use.
- Import/dependency requirements.
- Anatomy and public selectors.
- Variants, modifiers, states, and composition rules.
- Accessibility, keyboard, ARIA, and consumer JavaScript responsibilities.
- Responsive behavior and viewport-sensitive notes.
- Theme and contrast behavior.
- Minimal, realistic, and edge-state examples.
- Migration notes and validation checklist.

## Example and Snippet Contract

- Examples must be valid against selector inventory and docs dependency audits.
- Examples must use public, candidate-public, legacy-compatible, or explicitly documented selectors.
- Icon-only controls must include accessible names.
- Form examples must include labels, help/error relationships, and invalid/disabled/read-only examples where relevant.
- Overlay, command, tabs, tooltip/popover, and navigation examples must document consumer JavaScript responsibility when CSS alone cannot implement behavior.
- Semantic examples must not rely on color alone to convey meaning.
- Responsive or theme-sensitive examples must state what changes across viewports or themes.
- Examples requiring scripts must name that dependency.
- Snippets must avoid marketing filler and demonstrate real product use.

## Documentation Work Handoff

`VDS-0090` is the strategy source for the existing documentation backlog:

- `VDS-3010`: documentation information architecture.
- `VDS-3020`: README rewrite from scratch.
- `VDS-3030`: component docs template rewrite.
- `VDS-3040`: raw docs HTML ownership plan.
- `VDS-3050`: docs example quality pass.
- `VDS-3060`: accessibility documentation rewrite.
- `VDS-3070`: theming documentation rewrite.
- `VDS-3080`: utility documentation rewrite.
- `VDS-3090`: migration guide for version bounce.
- `VDS-3100`: changelog and release notes workflow.
- `VDS-3110`: docs search and navigation review.
- `VDS-3120`: consumer recipe docs.
- `VDS-3130`: documentation lint rules.

## Audit Rules for Later Work

- Do not rewrite raw docs without preserving or intentionally replacing runnable examples.
- Do not edit generated docs index files by hand.
- Do not publish documentation for selector removals, renamed classes, or token semantic changes without a matching migration/deprecation plan.
- Every component docs rewrite must cite accessibility, responsive, and theme responsibilities when relevant.
- Every docs rewrite item must state whether it affects raw docs, README, docs shell, generated index, migration guide, or release notes.
- Generated docs index refreshes must be explicit in the approved item scope.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Release policy: `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
- Accessibility baseline: `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
- Responsive baseline: `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`
- Theme baseline: `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
- VDS generated docs index: `@24vlh/agents/docs_vds/README.md`
- HTML docs router: `@24vlh/agents/docs_md/html/AGENTS.md`
