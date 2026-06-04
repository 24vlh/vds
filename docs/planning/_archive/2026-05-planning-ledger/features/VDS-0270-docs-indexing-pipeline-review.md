# VDS-0270 Docs Indexing Pipeline Review

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0270`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0270-docs-indexing-pipeline-review.md`

## 1. Goal

Create the VDS docs indexing pipeline review before demo-server/doc-loader work continues. This item records how `@24vlh/vds/doc-raw` feeds the generated `@24vlh/agents/docs_vds` index, what freshness evidence exists today, where the current metadata is weak, and how future docs rewrite work must treat generated docs index files.

## 2. Scope

### In scope

- Record the current raw-doc to generated-index pipeline.
- Record current docs index freshness evidence.
- Record generated-file ownership rules for `@24vlh/agents/docs_vds`.
- Record current docs index metadata risks and follow-ups.
- Add a docs-index architecture artifact for later docs index refreshes, docs shell review, raw docs ownership, docs rewrite, and docs lint/freshness automation.
- Update the master feature map so the library structure track continues to `VDS-0280`.

### Out of scope

- Changing raw docs, generated docs index files, agents tooling, docs shell, package metadata, source CSS, generated reports, generated `dist`, workflows, lockfiles, selectors, tokens, or version fields.
- Running `pnpm run docs:vds:index`.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run inventory:selectors` or `pnpm run consumer:scan`.
- Fixing raw-doc `h1` structure, `source_css` metadata, docs shell links, or docs generator behavior.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/pnpm-node/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/docs/vds-documentation-rewrite-strategy.md`
  - `@24vlh/vds/docs/planning/architecture/vds-lint-staged-husky-policy-review.md`
- Repo files:
  - `@24vlh/vds/doc-raw/*.doc.html`
  - `@24vlh/vds/index.html`
  - `@24vlh/vds/js/doc-loader.js`
  - `@24vlh/vds/static/js/server.js`
  - `@24vlh/agents/tools/vds-index.mjs`
  - `@24vlh/agents/tools/check-docs-sync.mjs`
  - `@24vlh/agents/docs_vds/README.md`
  - `@24vlh/agents/docs_vds/index.json`
  - `@24vlh/agents/docs_vds/.build-meta.json`
  - `@24vlh/agents/docs_vds/components/*.json`
- Current audit results:
  - `pnpm run audit` passes.
  - `pnpm run audit:consumers` passes.
  - `node --check @24vlh/agents/tools/vds-index.mjs` passes.
- Legacy or consumer context reviewed:
  - No package consumers are affected by this planning item.

## 4. Current Behavior Snapshot

- Current pipeline:
  - Generator: `@24vlh/agents/tools/vds-index.mjs`.
  - Command: `pnpm run docs:vds:index` from `@24vlh/agents`.
  - Source root: `@24vlh/vds/doc-raw`.
  - Output root: `@24vlh/agents/docs_vds`.
  - Output files: `README.md`, `AGENTS.md`, `index.json`, `.build-meta.json`, and `37` component JSON files.
- Current freshness:
  - `@24vlh/agents/docs_vds/.build-meta.json` input hash matches the current generator and the `37` raw docs.
  - `@24vlh/agents/docs_vds/index.json` has `37` components.
  - Generated component JSON count is `37`.
  - Raw doc count is `37`.
  - Raw docs, generated component JSON, and `index.json` entries match by component id.
- Current generated index totals:
  - Docs: `37`.
  - Blocks: `438`.
  - Code examples: `465`.
  - Class-token entries: `2400`.
  - Total raw-doc `pre` blocks: `487`.
- Current docs shell link evidence:
  - `@24vlh/vds/index.html` has `39` `data-doc` links.
  - Those links resolve to `37` unique raw docs.
  - Duplicate docs shell links: `vds-index.doc.html` and `vds-state.doc.html`.
  - No raw docs are missing from docs shell `data-doc` links.
- Current metadata risks:
  - `source_css` metadata comes from prose `Source:` paragraphs, not from source architecture.
  - `15` generated docs have no `source_css`.
  - `vds-command` references `slate.css`, while the real theme path is under `themes/`.
  - Raw docs have inconsistent `h1` structure: `53` total `h1` elements across `37` files, and `14` files have a count other than one.
  - `@24vlh/agents` `check:docs` includes VDS freshness, but can fail for unrelated agents catalog drift.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token, theme, selector, or generated report changes.
- Do not use `source_css` metadata as authoritative component dependency truth until a later metadata cleanup item fixes the current gaps.
- Component audits should continue to use source CSS, raw docs, selector inventory, and architecture artifacts as the decision sources.

### Build, audit, or package surface

- Add `@24vlh/vds/docs/planning/architecture/vds-docs-indexing-pipeline-review.md`.
- Do not change VDS package scripts, agents package scripts, generator code, generated docs index files, generated reports, or generated artifacts.
- Record generated-file policy:
  - `@24vlh/agents/docs_vds` is generated metadata and must not be edited by hand.
  - Refreshing it requires an explicitly approved item because it writes outside `@24vlh/vds`.
  - Raw docs remain the current runnable docs source until a later docs ownership item changes that.
- Record future validation direction:
  - VDS release gating needs targeted docs-index freshness validation rather than relying only on broad `@24vlh/agents` `check:docs`.
  - Generator changes, generated index refreshes, and docs shell behavior remain later approved work.

### Documentation or demo surface

- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0270` and set `VDS-0280` as next.
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
  - None for package consumers. Later docs and release items must preserve or intentionally replace generated docs index workflows.

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
  - No runtime behavior changes.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit`
  - `pnpm run audit:consumers`
- Script syntax checks:
  - `node --check @24vlh/agents/tools/vds-index.mjs`
- Docs-index pipeline scan:
  - Verify raw docs count matches generated component JSON count.
  - Verify `index.json` entries match component JSON files.
  - Verify `.build-meta.json` input hash matches current raw docs and generator.
  - Verify docs shell `data-doc` links resolve to existing raw docs.
  - Record source CSS metadata gaps and mismatches.
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, and docs-index artifact agree that no generated docs index, raw docs, docs shell, package metadata, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-0280`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting generated docs index ownership and freshness before docs shell and docs rewrite work.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later docs/release work must decide how generated docs index refreshes fit into migration, changelog, and release readiness.

## 10. Risks

- Generated docs index freshness does not prove documentation quality.
- `source_css` metadata is currently incomplete and should not be treated as authoritative dependency evidence.
- Raw docs `h1` structure can skew generated titles and summaries.
- Broad agents docs checks can fail for unrelated catalog drift, so VDS needs a targeted release gate later.
- Generated index files live outside `@24vlh/vds`, so refreshes must be approved and coordinated carefully.

## 11. Open Questions

- Should VDS get a local docs-index freshness checker inside `@24vlh/vds`? Deferred to documentation lint or quality automation work.
- Should `source_css` become structured front matter instead of prose parsing? Deferred to raw docs ownership and docs rewrite items.
- Should docs shell navigation be generated from the same index as `@24vlh/agents/docs_vds`? Deferred to `VDS-0280` and docs navigation work.
- Should generated docs index files move under VDS in the future? Deferred to docs ownership and agents routing work.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added docs-index pipeline artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0270` and set next recommended item to `VDS-0280`.
- `2026-05-23`: Ran/read a read-only docs-index pipeline scan. Summary: `37` raw docs, `37` generated component JSON files, and `37` `index.json` entries match; `.build-meta.json` input hash matches current raw docs and generator; generated totals are `438` blocks, `465` code examples, and `2400` class-token entries; docs shell has `39` `data-doc` links for `37` unique raw docs; `source_css` is missing in `15` docs; `vds-command` references `slate.css` instead of a `themes/` path; `14` raw docs have `h1` counts other than one.
- `2026-05-23`: Read `@24vlh/agents/tools/check-docs-sync.mjs`; it includes VDS freshness checks but also checks unrelated agents artifacts, so targeted VDS docs-index validation remains later work.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - `node --check @24vlh/agents/tools/vds-index.mjs` passed.
  - Read-only docs-index pipeline scan completed.
  - VDS-0270 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0270-docs-indexing-pipeline-review.md`
  - `@24vlh/vds/docs/planning/architecture/vds-docs-indexing-pipeline-review.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; demo server and doc loader review continues in `VDS-0280`.
