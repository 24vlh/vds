# VDS-0090 Documentation Rewrite Strategy

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0090`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0090-documentation-rewrite-strategy.md`

## 1. Goal

Create the VDS documentation rewrite strategy required before documentation work begins. This item decides the documentation information architecture, source-of-truth split, raw docs ownership, page template, example/snippet standards, and migration-guide expectations for the `1.0.0` modernization.

## 2. Scope

### In scope

- Record the current documentation surface and generated docs index evidence.
- Define the target documentation information architecture for `1.0.0`.
- Define which files remain source-of-truth and which files remain generated or runtime-only.
- Define the component documentation template and example/snippet quality contract.
- Add a documentation strategy artifact for later documentation, component, migration, release, and tooling work.
- Update the release policy gate and master feature map so future sessions use `VDS-0210` as the next recommended item.

### Out of scope

- README rewrite, raw docs rewrite, documentation UI changes, docs loader/server changes, generated docs index refreshes, package metadata changes, workflows, generated `dist`, build outputs, or version bumps.
- Automated docs linting, docs search/navigation implementation, generated template pipeline changes, or docs publishing changes.
- Editing `@24vlh/agents/docs_vds` generated files.
- Running `pnpm run build` or `pnpm run build:prod`.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/html/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
  - `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
  - `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`
  - `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
  - `@24vlh/agents/docs_vds/README.md`
  - `@24vlh/agents/docs_md/html/README.md`
- Repo files:
  - `@24vlh/vds/README.md`
  - `@24vlh/vds/index.html`
  - `@24vlh/vds/js/doc-loader.js`
  - `@24vlh/vds/static/js/server.js`
  - `@24vlh/vds/static/js/validate-doc-dependencies.js`
  - `@24vlh/vds/doc-raw/*.doc.html`
- Current audit results:
  - `pnpm run audit` already includes `audit:docs`, which validates a narrow docs dependency rule.
  - `VDS-0020` provides selector inventory.
  - `VDS-0030` provides consumer compatibility context.
  - `VDS-0060`, `VDS-0070`, and `VDS-0080` provide accessibility, responsive, and theme documentation baselines.
- Legacy or consumer context reviewed:
  - `@24vlh/agents/docs_vds` generated index metadata for all current raw docs.

## 4. Current Behavior Snapshot

- Source files:
  - Runtime CSS source remains separate from docs strategy; no CSS changes are made here.
- Raw docs:
  - Raw docs: `37` files and `42,792` scanned lines.
  - Largest docs: `vds-content-blocks`, `vds-inbox`, `vds-command`, `vds-overlays`, `vds-tables`, `vds-icons`, `vds-base`, `vds-flows`, `vds-skeleton`, and `vds-navigation`.
  - Raw docs scan: `29` files with `h1`; `53` `h1` elements; `1,046` heading elements; `487` `pre` blocks; `2,544` `code` elements; `796` ARIA attributes; `350` role attributes.
- Generated docs index:
  - `@24vlh/agents/docs_vds` indexes `37` docs, `438` blocks, `465` code examples, `2,400` class-token entries, and `32` referenced source CSS files.
  - Generated metadata is navigation/extraction support and must not be edited by hand.
- Docs runtime:
  - `@24vlh/vds/index.html` owns the current navigation shell and component links.
  - `@24vlh/vds/js/doc-loader.js` fetches raw HTML fragments into `#doc-content`.
  - `@24vlh/vds/static/js/server.js` serves the static docs shell with an SPA fallback.
- Known mismatches:
  - The README is short and not aligned with the new release baselines, selector inventory, consumer compatibility report, or package/release gate policy.
  - Raw docs are large, mixed-purpose runnable examples; the rewrite needs a strategy before individual docs are rewritten.
  - Existing docs validation is narrow and does not yet enforce missing sections, snippet quality, accessibility notes, source/dependency drift, or migration notes.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No CSS, token, or theme changes.
- Future documentation work must use the selector inventory, accessibility baseline, responsive baseline, and theme baseline when documenting classes, states, examples, and migration notes.

### Build, audit, or package surface

- Add `@24vlh/vds/docs/planning/docs/vds-documentation-rewrite-strategy.md`.
- Do not add package scripts, docs generators, docs lint rules, or generated index refreshes in this item.
- Keep generated docs index and docs tooling changes deferred to `VDS-0270`, `VDS-3110`, `VDS-3130`, and `VDS-4090`.

### Documentation or demo surface

- Add this feature plan.
- Update `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md` so the documentation/migration gate points to the new strategy.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0090`, close the `VDS-0100` baseline/release strategy section, and set `VDS-0210` as next.
- Do not rewrite README, raw docs, `index.html`, `js/doc-loader.js`, or docs navigation in this item.

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None in this item.
- Breaking changes:
  - None in this item.
- Migration notes:
  - None in this item. The strategy defines that later docs and release items must document changed classes, deprecated selectors, compatibility shims, package surfaces, and consumer migration risks.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - Component docs must document keyboard/focus expectations where VDS examples imply interaction.
- Semantics or ARIA:
  - Component docs must prefer native semantics and document ARIA/state responsibilities only where needed.
- Reduced motion:
  - Examples that use motion must document reduced-motion expectations when relevant.
- Forced colors or contrast:
  - Docs must call out theme/contrast-sensitive states for components with semantic, focus, disabled, selected, invalid, or chart/status visuals.
- Mobile/adaptive behavior:
  - Docs must include responsive notes when a component materially changes between narrow and wide contexts.
- Theme coverage:
  - Docs must explain supported theme roots, semantic token behavior, and custom theme boundaries after theme audit work matures.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit`
  - `pnpm run audit:consumers`
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Documentation source scan:
  - Read-only scan of raw docs count, line totals, heading/code/example surface, ARIA/role surface, and generated docs index counts.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, release policy, and strategy artifact agree on the source-of-truth split.
  - Confirm the strategy states that no README, raw docs, docs shell, generated index, package, build output, or version change happens in `VDS-0090`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by satisfying the documentation rewrite strategy gate from `VDS-0040`.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - Defines the expectations later used by `VDS-3090`, `VDS-5050`, and release/version items.

## 10. Risks

- A strategy can be ignored unless later docs items explicitly use it as their source of truth.
- Raw docs are large and runnable; rewriting them without an ownership decision could break the local docs site or generated docs index.
- Documentation and component modernization are coupled: docs must not promise behavior before component audits classify and validate it.
- The generated docs index can drift if raw docs are rewritten without an approved refresh and validation plan.

## 11. Open Questions

- Whether raw docs should remain handwritten HTML or move to a data/template pipeline is deferred to `VDS-3040`.
- Which docs lint rules should become automated is deferred to `VDS-3130` and `VDS-4090`.
- Which docs navigation/search changes are needed is deferred to `VDS-3110`.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added documentation rewrite strategy artifact.
- `2026-05-23`: Updated release policy to link the documentation rewrite strategy gate.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0090`, close the baseline/release strategy epic, and set next recommended item to `VDS-0210`.
- `2026-05-23`: Ran/read the documentation source scan. Summary: raw docs `37`; total scanned lines `42,792`; docs with `h1` `29`; `h1` elements `53`; heading elements `1,046`; `pre` blocks `487`; `code` elements `2,544`; ARIA attributes `796`; role attributes `350`; generated docs index `37` docs, `438` blocks, `465` code examples, `2,400` class-token entries, and `32` referenced source CSS files.
- `2026-05-23`: Ran validation: `pnpm run audit`, `pnpm run audit:consumers`, VDS-0090 markdown sanity checks, and `git diff --check` passed.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - VDS-0090 markdown sanity checks passed.
  - `git diff --check` passed.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0090-documentation-rewrite-strategy.md`
  - `@24vlh/vds/docs/planning/docs/vds-documentation-rewrite-strategy.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; source module architecture audit continues in `VDS-0210`.
