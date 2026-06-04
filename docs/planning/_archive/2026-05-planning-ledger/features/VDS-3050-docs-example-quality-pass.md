# VDS-3050 Docs Example Quality Pass

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-25`
- Master item: `VDS-3050`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-3050-docs-example-quality-pass.md`

## 1. Goal

Create the docs example quality standard and triage artifact for the `VDS-0600 Documentation Rewrite` epic. Based on the selected scope, this item is planning/triage only: it does not edit `doc-raw`, refresh generated metadata, change docs shell behavior, or rewrite examples.

This item defines what good examples must satisfy before later raw-doc/component rewrites begin: realistic product use, source-backed selectors, accessible controls, explicit runtime boundaries, responsive/theme notes, and clear edge-state coverage.

## 2. Scope

### In scope

- Add a docs example quality artifact for later raw-doc and component rewrite work.
- Define example quality rules for selectors, realism, accessibility, runtime behavior, responsive notes, theme notes, and edge states.
- Record current raw-doc and generated-example evidence.
- Record heuristic example-risk counts as triage evidence, not automatic defects.
- Record that later raw-doc/component rewrites apply these rules when their approved scope allows raw-doc changes.
- Update the master feature map so `VDS-0600` remains in progress, `VDS-3050` is done, and the next recommended item is `VDS-3060 Accessibility documentation rewrite`.

### Out of scope

- Editing raw docs under `@24vlh/vds/doc-raw`.
- Rewriting examples.
- Refreshing generated docs metadata under `@24vlh/agents/docs_vds`.
- Changing README content.
- Changing `@24vlh/vds/index.html`, docs shell navigation, browser loader scripts, local docs server scripts, or docs runtime behavior.
- Changing generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields.
- Adding enforceable docs lint rules. That remains `VDS-3130`.
- Writing shared accessibility, theming, utility, migration, docs-shell, or recipe documentation. Those remain later VDS-0600 items.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Planning sources:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/docs/vds-documentation-rewrite-strategy.md`
  - `@24vlh/vds/docs/planning/docs/vds-component-docs-template.md`
  - `@24vlh/vds/docs/planning/docs/vds-raw-docs-html-ownership-plan.md`
- Current docs evidence:
  - `@24vlh/vds/doc-raw/*.doc.html`
  - `@24vlh/agents/docs_vds/components/*.json`

## 4. Current Example Evidence

Raw-doc evidence:

- Files: `37`.
- `pre` blocks: `487`.
- `code` elements: `2544`.
- `role` matches: `350`.
- `aria-*` matches: `864`.

Generated metadata evidence:

- Component JSON files: `37`.
- Blocks: `438`.
- HTML code examples: `465`.
- All-class-token entries: `2400`.

Largest generated example counts:

- `vds-base`: `39`.
- `vds-content-blocks`: `26`.
- `vds-navigation`: `24`.
- `vds-flows`: `22`.
- `vds-inbox`: `20`.
- `vds-layout`: `20`.
- `vds-sections`: `19`.
- `vds-forms`: `17`.
- `vds-utilities`: `17`.
- `vds-command`: `16`.

Heuristic risk counts from generated examples:

- `53` `href="#"` matches.
- `249` buttons.
- `143` buttons without explicit `type`.
- `22` images, with `1` missing `alt`.
- `17` icon-only button candidates, with `1` missing accessible name.
- `122` `role` usages.
- `201` `aria-*` usages.

These are triage signals only. Some patterns may be intentional demos and must be reviewed in context during later raw-doc rewrites.

## 5. Example Quality Contract

Future rewritten examples must:

- Use selectors that exist in source CSS or are explicitly documented helper/runtime hooks.
- Be realistic enough to adapt, not decorative filler.
- Keep icon-only controls accessible with visible text, `aria-label`, or `aria-labelledby`.
- Use explicit `type` on buttons where appropriate.
- Give images meaningful `alt` text or explicit decorative treatment.
- Avoid relying on color alone for semantic/status meaning.
- State consumer JavaScript and ARIA responsibilities for interactive CSS-only surfaces.
- State what changes for responsive or theme-sensitive examples.
- Include clear edge states such as disabled, loading, empty, error, selected, expanded, compact, dense, overflow, or no-results where relevant.
- Avoid promising behavior CSS cannot provide, such as routing, validation, filtering, focus trapping, queueing, live announcements, async loading, or collision-aware positioning.

## 6. Triage-Only Decision

VDS-3050 records quality rules and evidence only:

- No raw-doc edits happen in this item.
- No generated docs metadata refresh happens in this item.
- No docs shell, loader, or local docs runtime behavior changes happen in this item.
- Later approved raw-doc/component rewrite items apply these rules when raw-doc changes are explicitly in scope.
- `VDS-3130` may later convert these rules into enforceable docs lint checks.

## 7. Public Interfaces and Compatibility Impact

- Planning interface added: `@24vlh/vds/docs/planning/docs/vds-docs-example-quality-pass.md`.
- Runtime CSS APIs: unchanged.
- README: unchanged.
- Raw docs: unchanged.
- Docs shell and loader scripts: unchanged.
- Generated docs metadata: unchanged.
- Generated `dist`: unchanged.
- Package metadata, workflows, npm tags, and version fields: unchanged.
- Selector inventory and consumer reports: unchanged.

## 8. Validation Plan

Approved validation for this planning/triage-only item:

- Run `pnpm run audit:tokens`.
- Run `pnpm run audit`.
- Run `pnpm run audit:dist`; if the generated-artifact checker hangs again, stop it after a reasonable wait and record that limitation without regeneration.
- Run `pnpm run audit:consumers`; if it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Run/read a read-only example-quality scan recording raw-doc counts, generated example counts, top example-heavy docs, and heuristic accessibility/runtime risk counts.
- Run markdown sanity checks:
  - `VDS-3050` appears as `done`.
  - `VDS-0600` remains `in-progress`.
  - Quality artifact path resolves.
  - Plan and artifact agree that no raw docs, generated docs metadata, docs shell, README, generated output, package metadata, selector inventory, consumer report, or runtime behavior changed.
  - Next item is `VDS-3060 Accessibility documentation rewrite`.
- Run `git diff --check` for changed planning files.

Forbidden validation:

- Do not run `pnpm run build`.
- Do not run `pnpm run build:prod`.
- Do not run `pnpm run docs:vds:index`.
- Do not run `pnpm run inventory:selectors`.
- Do not run `pnpm run consumer:scan`.
- Do not run any write/regeneration command.

## 9. Risks

- Triage-only evidence can be mistaken for confirmed defects; later rewrites must inspect examples in context.
- Some examples intentionally use demo-only anchors or state hooks; later docs lint rules need exception handling.
- Leaving raw docs unchanged means quality issues remain visible until later approved rewrite work.
- Generated metadata remains evidence only until an approved docs-index refresh runs.

## 10. Assumptions

- Approval of `VDS-3050` approves planning/triage documentation only.
- `doc-raw/*.doc.html` remains canonical handwritten runnable docs source per `VDS-3040`.
- Generated docs metadata remains evidence only and is not refreshed in this item.
- Actual raw-doc example rewrites happen later through component rewrite work or explicitly approved raw-doc items.
- `VDS-3060` owns shared accessibility documentation.
- `VDS-3070` owns theming docs.
- `VDS-3110` owns docs shell/navigation behavior.
- `VDS-3130` owns future enforceable docs lint rules.

## 11. Implementation Log

- `2026-05-25`: Added this VDS-3050 feature plan and the docs example quality artifact. Updated the master feature map to mark `VDS-3050` done, keep `VDS-0600` in progress, and point the next recommended item at `VDS-3060 Accessibility documentation rewrite`.
- `2026-05-25`: Read-only example-quality scan confirmed raw docs at `37` files, `487` `pre` blocks, `2544` `code` elements, `350` `role` matches, and `864` `aria-*` matches; generated metadata at `37` component JSON files, `438` blocks, `465` HTML code examples, and `2400` all-class-token entries; largest example counts and heuristic risk counts matched the VDS-3050 evidence table.
- `2026-05-25`: `pnpm run audit:tokens` passed.
- `2026-05-25`: `pnpm run audit` passed, including CSS parse, class, token, docs dependency, and selector inventory freshness checks.
- `2026-05-25`: `timeout 120s pnpm run audit:dist` exited with code `124` while running `node static/js/check-generated-artifacts.js --check`; no generated artifact refresh was run.
- `2026-05-25`: `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale; `pnpm run consumer:scan` was not run because it is a write/regeneration command.
- `2026-05-25`: Markdown sanity checks passed for `VDS-3050` done status, `VDS-0600` in-progress status, quality artifact path, standard-and-triage decision, next recommended item, and no raw-doc/generated-docs-metadata/docs-shell/README/generated-output/package-metadata/selector-inventory/consumer-report/runtime-behavior agreement.
- `2026-05-25`: `git diff --check` reported no whitespace errors for changed planning files; `git diff --no-index --check` reported no whitespace errors for the VDS-3050 planning files in the untracked planning tree.
