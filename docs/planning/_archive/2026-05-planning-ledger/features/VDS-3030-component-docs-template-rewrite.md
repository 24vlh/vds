# VDS-3030 Component Docs Template Rewrite

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-25`
- Master item: `VDS-3030`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-3030-component-docs-template-rewrite.md`

## 1. Goal

Create the reusable component documentation template for the `VDS-0600 Documentation Rewrite` epic. This item defines the required structure every future component doc rewrite must follow: overview, source/dependencies, anatomy, selectors, variants, states, accessibility, responsive behavior, theming, examples, migration notes, and validation.

This is a planning/template-only item. It does not rewrite README, raw docs, generated docs metadata, docs shell behavior, package metadata, generated output, selector inventory, consumer reports, workflows, npm tags, or version fields.

## 2. Scope

### In scope

- Add a component docs template artifact for later component documentation rewrites.
- Define required component-doc section order.
- Define required source references for each component page.
- Define example rules for selectors, accessibility, runtime-owned behavior, semantic/status communication, responsive behavior, and theme-sensitive examples.
- Record current raw-doc and generated metadata evidence.
- Record that current docs have common section names but inconsistent depth, ordering, metadata, examples, and accessibility coverage.
- Update the master feature map so `VDS-0600` remains in progress, `VDS-3030` is done, and the next recommended item is `VDS-3040 Raw docs HTML ownership plan`.

### Out of scope

- Rewriting raw docs under `@24vlh/vds/doc-raw`.
- Changing README content.
- Changing `@24vlh/vds/index.html`, docs shell navigation, browser loader scripts, or docs runtime behavior.
- Editing generated docs metadata under `@24vlh/agents/docs_vds`.
- Changing package metadata, generated `dist`, selector inventory, consumer reports, workflows, npm tags, or version fields.
- Running `pnpm run build`, `pnpm run build:prod`, `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, `pnpm run consumer:scan`, or any write/regeneration command.
- Deciding raw-doc ownership. That remains `VDS-3040`.
- Applying the template to actual component docs. That remains later component-doc rewrite work, primarily `VDS-3050` and component-specific rewrite items.

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
  - completed component audit artifacts under `@24vlh/vds/docs/planning/components`
- Current docs evidence:
  - `@24vlh/vds/doc-raw/*.doc.html`
  - `@24vlh/agents/docs_vds/components/*.json`

## 4. Current Behavior Snapshot

Raw-doc evidence:

- Files: `37`.
- Total `h1`: `53`.
- Total `h2`: `455`.
- Total `h3`: `495`.
- Total `pre`: `487`.
- Total `code`: `2544`.
- Total `role`: `350`.
- Total `aria-*` matches: `864`.

Generated component metadata evidence:

- Files: `37`.
- Blocks: `438`.
- Code examples: `465`.
- Class-token entries: `2400`.
- Files with empty `source_css`: `15`.

Common current generated block titles:

- `Accessibility & usage rules`
- `Installation & dependencies`

Known current-doc drift:

- Section names, heading depth, and page order vary across raw docs.
- Several generated metadata files have empty `source_css` values, which is evidence only and must not be fixed by hand here.
- Existing examples are useful evidence, but later rewrites must check every selector against source CSS or explicitly documented docs/runtime helpers.
- Current docs often mention accessibility, roles, and ARIA, but depth and runtime-boundary clarity are inconsistent.
- Current docs are runnable raw HTML until `VDS-3040` decides ownership.

## 5. Template Contract

Every future component doc rewrite must use this section order:

1. Title and summary.
2. When to use.
3. Source truth and package/import dependencies.
4. Anatomy and markup contract.
5. Public selectors and compatibility notes.
6. Variants, sizes, densities, and layouts.
7. States and runtime behavior boundaries.
8. Accessibility and keyboard/ARIA responsibilities.
9. Responsive/mobile behavior.
10. Theming, contrast, forced-colors, and reduced-motion notes.
11. Examples: minimal, realistic, and edge-state.
12. Migration and release notes.
13. Validation checklist.

The canonical template is recorded in `@24vlh/vds/docs/planning/docs/vds-component-docs-template.md`.

## 6. Required Source References

Each component doc rewrite must reference these paths when they exist:

- Source CSS path, such as `@24vlh/vds/src/components/{slug}.css`.
- Raw doc path, such as `@24vlh/vds/doc-raw/vds-{slug}.doc.html`.
- Generated docs metadata path, such as `@24vlh/agents/docs_vds/components/vds-{slug}.json`.
- Component audit artifact path, such as `@24vlh/vds/docs/planning/components/vds-{slug}-component-audit.md`.
- Package-facing dist path when present, such as `@24vlh/vds/dist/components/{slug}.css` and `@24vlh/vds/dist/components/{slug}.min.css`.

Reference rules:

- Source CSS is source truth for selector and CSS behavior.
- Raw docs are current runnable docs source until `VDS-3040` changes ownership.
- Generated docs metadata is evidence only and must not be hand-edited.
- Component audit artifacts are planning decision sources for known contracts, gaps, risks, and later rewrite routing.
- Dist paths are package-facing evidence, not authoring truth.

## 7. Example Rules

Examples in rewritten component docs must:

- Use selectors that exist in source CSS or are explicitly documented as docs/runtime helpers.
- Keep icon-only controls accessible with visible text or an accessible name such as `aria-label`.
- State consumer JavaScript responsibilities for interactive CSS-only surfaces.
- Avoid relying on color alone for semantic/status examples.
- State what changes for responsive or theme-sensitive examples.
- Use realistic markup that demonstrates source-backed anatomy, states, and edge cases.
- Avoid promising behavior CSS cannot provide, such as focus trapping, filtering, routing, validation, live announcements, keyboard roving focus, data fetching, queueing, or collision-aware positioning.

## 8. Public Interfaces and Compatibility Impact

- Planning interface added: `@24vlh/vds/docs/planning/docs/vds-component-docs-template.md`.
- Runtime CSS APIs: unchanged.
- Raw docs: unchanged.
- README: unchanged.
- Docs shell and loader scripts: unchanged.
- Generated docs metadata: unchanged.
- Generated `dist`: unchanged.
- Package metadata, workflows, npm tags, and version fields: unchanged.
- Selector inventory and consumer reports: unchanged.

## 9. Validation Plan

Approved validation for this planning/template-only item:

- Run `pnpm run audit:tokens`.
- Run `pnpm run audit`.
- Run `pnpm run audit:dist`; if the generated-artifact checker hangs again, stop it after a reasonable wait and record that limitation without regeneration.
- Run `pnpm run audit:consumers`; if it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Run/read a read-only docs-template scan recording raw-doc heading/code/ARIA counts, generated docs block/example/class-token counts, common block titles, and representative docs metadata gaps.
- Run markdown sanity checks:
  - `VDS-3030` appears as `done`.
  - `VDS-0600` remains `in-progress`.
  - Template artifact path resolves.
  - Plan and artifact agree that no raw docs, generated output, docs shell, package metadata, selector inventory, consumer report, or runtime behavior changed.
  - Next item is `VDS-3040 Raw docs HTML ownership plan`.
- Run `git diff --check` for changed planning files.

Forbidden validation:

- Do not run `pnpm run build`.
- Do not run `pnpm run build:prod`.
- Do not run `pnpm run docs:vds:index`.
- Do not run `pnpm run inventory:selectors`.
- Do not run `pnpm run consumer:scan`.
- Do not run any write/regeneration command.

## 10. Risks

- A reusable template can drift if later component rewrites treat it as guidance instead of a contract.
- Examples can accidentally introduce non-source selectors unless later docs checks validate selectors against source CSS and documented helper policy.
- Generated metadata gaps can tempt manual edits; this plan keeps generated files read-only evidence.
- Raw-doc ownership is intentionally unresolved until `VDS-3040`, so this template must be portable to handwritten HTML, generated templates, or a split docs-data model.

## 11. Assumptions

- Approval of `VDS-3030` approves planning/template documentation only.
- `VDS-3010` remains the IA source.
- `VDS-3030` defines the reusable component-doc template.
- Current raw docs remain canonical runnable docs until `VDS-3040` decides ownership.
- Applying the template to actual component docs happens later, primarily through `VDS-3050` and component-specific rewrite work.
- Accessibility, theming, utility, migration, changelog, and docs-navigation details remain in their dedicated `VDS-3060` through `VDS-3130` items.

## 12. Implementation Log

- `2026-05-25`: Added this VDS-3030 feature plan and the component docs template artifact. Updated the master feature map to mark `VDS-3030` done, keep `VDS-0600` in progress, and point the next recommended item at `VDS-3040 Raw docs HTML ownership plan`.
- `2026-05-25`: Read-only docs-template scan confirmed raw docs at `37` files, `53` total `h1`, `455` `h2`, `495` `h3`, `487` `pre`, `2544` `code`, `350` `role`, and `864` `aria-*` matches; generated component JSON at `37` files, `438` blocks, `465` code examples, `2400` all-class-token entries, and `15` files with empty `source_css`; common generated block titles include `Accessibility & usage rules` and `Installation & dependencies`.
- `2026-05-25`: `pnpm run audit:tokens` passed.
- `2026-05-25`: `pnpm run audit` passed, including CSS parse, class, token, docs dependency, and selector inventory freshness checks.
- `2026-05-25`: `timeout 120s pnpm run audit:dist` exited with code `124` while running `node static/js/check-generated-artifacts.js --check`; no generated artifact refresh was run.
- `2026-05-25`: `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale; `pnpm run consumer:scan` was not run because it is a write/regeneration command.
- `2026-05-25`: Markdown sanity checks passed for `VDS-3030` done status, `VDS-0600` in-progress status, template artifact path, next recommended item, and no raw-doc/generated-output/docs-shell/package-metadata/selector-inventory/consumer-report/runtime-behavior agreement.
- `2026-05-25`: `git diff --check -- docs/planning/master-feature-map.md` passed; `git diff --no-index --check` reported no whitespace errors for the new VDS-3030 planning and template files.
