# VDS-3040 Raw Docs HTML Ownership Plan

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-25`
- Master item: `VDS-3040`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-3040-raw-docs-html-ownership-plan.md`

## 1. Goal

Create the raw-doc ownership plan for the `VDS-0600 Documentation Rewrite` epic. This item decides the near-term ownership model for `@24vlh/vds/doc-raw/*.doc.html` before example-quality, accessibility, theming, utility, migration, docs-navigation, recipe, and lint work begins.

Decision: keep `doc-raw/*.doc.html` as the canonical handwritten runnable docs source for the current rewrite cycle. Do not introduce a template generator, data/render split, docs-shell rewrite, or generated metadata refresh in this item.

## 2. Scope

### In scope

- Add the raw-doc ownership artifact for VDS documentation rewrite work.
- Record that `doc-raw/*.doc.html` remains canonical handwritten runnable docs source.
- Record that `@24vlh/agents/docs_vds` remains generated evidence only.
- Record that `index.html`, `js/doc-loader.js`, and local docs scripts continue loading raw HTML fragments directly.
- Record when later work may edit raw docs.
- Record ownership options and the chosen near-term option.
- Update the master feature map so `VDS-0600` remains in progress, `VDS-3040` is done, and the next recommended item is `VDS-3050 Docs example quality pass`.

### Out of scope

- Rewriting raw docs under `@24vlh/vds/doc-raw`.
- Changing README content.
- Changing `@24vlh/vds/index.html`, docs shell navigation, browser loader scripts, local docs server scripts, or docs runtime behavior.
- Editing generated docs metadata under `@24vlh/agents/docs_vds`.
- Running `pnpm run docs:vds:index` or otherwise refreshing generated docs metadata.
- Changing generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields.
- Introducing a docs template generator.
- Introducing a docs data schema, renderer, or raw-doc build pipeline.
- Fixing duplicate docs-shell links, duplicate `data-path` values, title behavior, loading states, or error UI. Those remain `VDS-3110`.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Planning sources:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/docs/vds-documentation-rewrite-strategy.md`
  - `@24vlh/vds/docs/planning/docs/vds-documentation-information-architecture.md`
  - `@24vlh/vds/docs/planning/docs/vds-component-docs-template.md`
  - `@24vlh/vds/docs/planning/architecture/vds-docs-indexing-pipeline-review.md`
  - `@24vlh/vds/docs/planning/architecture/vds-demo-server-doc-loader-review.md`
- Current docs evidence:
  - `@24vlh/vds/doc-raw/*.doc.html`
  - `@24vlh/vds/index.html`
  - `@24vlh/vds/js/doc-loader.js`
  - `@24vlh/agents/docs_vds/.build-meta.json`
  - `@24vlh/agents/docs_vds/index.json`
  - `@24vlh/agents/docs_vds/components/*.json`

## 4. Current Behavior Snapshot

Raw docs evidence:

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
- Examples with `0` `h1`: `vds-action-bar`, `vds-avatar`, `vds-description-list`, `vds-overlays`, `vds-progress`, and `vds-state`.
- Example with many `h1`: `vds-hero` has `18`.

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

- `@24vlh/vds/js/doc-loader.js` loads raw HTML fragments into `#doc-content`.
- The loader derives `document.title` from the first `h1` in the loaded fragment.
- The loader pushes routes from `data-path`.
- The loader initializes doc-block, overlay, and command demo behavior after fragment injection when those globals are available.

Generated metadata evidence:

- `@24vlh/agents/docs_vds/.build-meta.json` uses `@24vlh/vds/doc-raw` as `source_root`.
- Generated component JSON remains aligned to `37` raw docs.
- Generated metadata is navigation/extraction evidence only and must not be manually edited.

Current risks:

- Raw docs are runnable but inconsistent.
- Generated `source_css` fields can be incomplete.
- Title behavior depends on inconsistent `h1` structure.
- Navigation duplicates remain docs-shell evidence for `VDS-3110`, not fixes in this item.

## 5. Ownership Decision

Chosen near-term model: handwritten raw HTML.

Ownership contract:

- `@24vlh/vds/doc-raw/*.doc.html` remains the canonical runnable docs source for the current VDS-0600 rewrite cycle.
- Later docs rewrite items may edit raw docs only when their approved scope explicitly says raw-doc changes are allowed.
- Generated docs metadata under `@24vlh/agents/docs_vds` remains generated evidence and must not be edited by hand.
- `@24vlh/vds/index.html`, `@24vlh/vds/js/doc-loader.js`, and local docs scripts continue to load raw HTML fragments directly until a later approved docs-runtime item changes that behavior.
- Generated metadata refreshes remain explicit approved work and must record commands, affected outputs, and freshness evidence.

Deferred ownership options:

- Generated from templates: deferred because no approved generator/template pipeline exists and raw docs are already the docs-shell input.
- Split docs data plus renderer: deferred as possible future architecture after docs shell/navigation and docs lint work clarify requirements.

## 6. Public Interfaces and Compatibility Impact

- Planning interface added: `@24vlh/vds/docs/planning/docs/vds-raw-docs-html-ownership-plan.md`.
- Runtime CSS APIs: unchanged.
- README: unchanged.
- Raw docs: unchanged.
- Docs shell and loader scripts: unchanged.
- Generated docs metadata: unchanged.
- Generated `dist`: unchanged.
- Package metadata, workflows, npm tags, and version fields: unchanged.
- Selector inventory and consumer reports: unchanged.
- Generated docs index refresh: not run.

## 7. Validation Plan

Approved validation for this planning-only item:

- Run `pnpm run audit:tokens`.
- Run `pnpm run audit`.
- Run `pnpm run audit:dist`; if the generated-artifact checker hangs again, stop it after a reasonable wait and record that limitation without regeneration.
- Run `pnpm run audit:consumers`; if it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Run/read a read-only raw-doc ownership scan recording raw-doc counts, heading anomalies, docs-shell `data-doc` and duplicate path evidence, generated metadata source root, and doc-loader raw-fragment behavior.
- Run markdown sanity checks:
  - `VDS-3040` appears as `done`.
  - `VDS-0600` remains `in-progress`.
  - Ownership artifact path resolves.
  - Plan and artifact agree that raw docs remain handwritten canonical runnable source for now.
  - Plan and artifact agree that no README, raw docs, docs shell, generated output, package metadata, selector inventory, consumer report, or runtime behavior changed.
  - Next item is `VDS-3050 Docs example quality pass`.
- Run `git diff --check` for changed planning files.

Forbidden validation:

- Do not run `pnpm run build`.
- Do not run `pnpm run build:prod`.
- Do not run `pnpm run docs:vds:index`.
- Do not run `pnpm run inventory:selectors`.
- Do not run `pnpm run consumer:scan`.
- Do not run any write/regeneration command.

## 8. Risks

- Keeping handwritten raw HTML preserves the current docs runtime, but it also preserves inconsistent heading structure until later approved raw-doc rewrites.
- Generated docs metadata will continue to reflect current raw docs until an approved index refresh runs.
- A future generator or docs-data architecture will need migration planning because the current docs shell and metadata pipeline are raw-fragment based.
- Later component rewrites must be explicit when raw-doc edits are in scope.

## 9. Assumptions

- Approval of `VDS-3040` approves planning documentation only.
- Current raw docs stay canonical because the docs shell, doc loader, local server, and generated metadata pipeline already depend on raw HTML fragments.
- Later component rewrites will edit raw docs directly unless a future approved generator/data architecture replaces that ownership model.
- `VDS-3050` owns example quality rules for runnable raw-doc examples.
- `VDS-3110` owns docs shell/search/navigation fixes, including duplicate `home`/`state` paths and title/loading/error behavior.
- `VDS-3130` owns future docs lint rules that can enforce heading structure, snippet quality, dependency references, class existence, and accessibility sections.

## 10. Implementation Log

- `2026-05-25`: Added this VDS-3040 feature plan and the raw-doc ownership artifact. Updated the master feature map to mark `VDS-3040` done, keep `VDS-0600` in progress, and point the next recommended item at `VDS-3050 Docs example quality pass`.
- `2026-05-25`: Read-only raw-doc ownership scan confirmed raw docs at `37` files, `42,792` lines, `53` `h1`, `455` `h2`, `495` `h3`, `487` `pre`, `2544` `code`, `350` `role`, and `864` `aria-*` matches; `14` raw docs have `h1` count other than one; docs shell has `39` `data-doc` links, `37` unique raw docs, duplicate docs `doc-raw/vds-index.doc.html` and `doc-raw/vds-state.doc.html`, and duplicate `data-path` values `home` and `state`; generated metadata source root remains `@24vlh/vds/doc-raw`; doc-loader raw-fragment behavior was confirmed.
- `2026-05-25`: `pnpm run audit:tokens` passed.
- `2026-05-25`: `pnpm run audit` passed, including CSS parse, class, token, docs dependency, and selector inventory freshness checks.
- `2026-05-25`: `timeout 120s pnpm run audit:dist` exited with code `124` while running `node static/js/check-generated-artifacts.js --check`; no generated artifact refresh was run.
- `2026-05-25`: `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale; `pnpm run consumer:scan` was not run because it is a write/regeneration command.
- `2026-05-25`: Markdown sanity checks passed for `VDS-3040` done status, `VDS-0600` in-progress status, ownership artifact path, handwritten canonical raw-doc ownership agreement, next recommended item, and no README/raw-doc/docs-shell/generated-output/package-metadata/selector-inventory/consumer-report/runtime-behavior agreement.
- `2026-05-25`: `git diff --check` reported no whitespace errors for changed planning files; `git diff --no-index --check` reported no whitespace errors for the VDS-3040 planning files in the untracked planning tree.
