# VDS-3010 Documentation Information Architecture

- Status: `done`
- Last updated: `2026-05-25`
- Master item: `VDS-3010`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-3010-documentation-information-architecture.md`

## 1. Goal

Create the documentation information architecture plan for the `VDS-0600 Documentation Rewrite` epic. This item turns the `VDS-0090` documentation rewrite strategy into an actionable documentation map before README, raw docs, component templates, examples, accessibility docs, theming docs, utilities docs, migration docs, release notes, and docs navigation work begin.

## 2. Scope

### In scope

- Define the target top-level documentation IA for Start, Foundations, Components, Patterns and recipes, Reference, and Release.
- Define component grouping policy by reader task instead of source filename alone.
- Record current README, raw-doc, generated-index, and docs-shell navigation evidence.
- Record the handoff contract for `VDS-3020` through `VDS-3130`.
- Add a documentation IA artifact for later README rewrite, component docs template rewrite, raw-doc ownership decisions, docs example quality, accessibility docs, theming docs, utilities docs, migration docs, release notes, docs navigation/search, consumer recipes, and docs lint rules.
- Update the master feature map so `VDS-0600` is in progress, `VDS-3010` is done, and the next recommended item is `VDS-3020 README rewrite from scratch`.

### Out of scope

- Changing README content, raw docs, docs shell HTML, browser loader scripts, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Implementing docs navigation, search, doc-loader changes, generated navigation, raw-doc rewrites, component docs templates, examples, migration guides, changelog, release notes, docs lint rules, or generated index refreshes.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/docs/vds-documentation-rewrite-strategy.md`
  - `@24vlh/vds/docs/planning/architecture/vds-docs-indexing-pipeline-review.md`
  - `@24vlh/vds/docs/planning/architecture/vds-demo-server-doc-loader-review.md`
  - completed component audit artifacts under `@24vlh/vds/docs/planning/components`
- Repo files:
  - `@24vlh/vds/README.md`
  - `@24vlh/vds/index.html`
  - `@24vlh/vds/js/doc-loader.js`
  - `@24vlh/vds/doc-raw/*.doc.html`
  - `@24vlh/agents/docs_vds`

## 4. Current Behavior Snapshot

- Raw docs: `37` files under `@24vlh/vds/doc-raw`.
- Generated component metadata: `37` JSON files under `@24vlh/agents/docs_vds/components`.
- Docs shell navigation: `39` `data-doc` links and `37` unique linked raw docs.
- Duplicate docs shell links:
  - `doc-raw/vds-index.doc.html`
  - `doc-raw/vds-state.doc.html`
- Duplicate docs shell `data-path` values:
  - `home`
  - `state`
- README sections currently present:
  - Installation
  - Directory Structure
  - Loading Model
  - Production Builds
  - Source Consumption
  - Note
- Current docs shell title: `VLAH Identity System - Documentation`.
- Existing strategy references are present for documentation rewrite strategy, docs indexing pipeline review, and demo server/doc-loader review.

Known IA drift:

- The README is package-oriented and does not yet express the target Start/Foundation/Reference/Release IA.
- The current docs landing page introduces architecture and links raw docs, but does not yet define the rewritten IA.
- The docs shell footer is a manually ordered list of raw-doc links, not the target task-based IA.
- Generated docs metadata is useful evidence, but its `source_css` fields are not authoritative architecture data.
- Current docs shell duplicate `home` and `state` links are navigation evidence only; they are not fixed in `VDS-3010`.

## 5. Target Documentation Architecture

Top-level IA:

| Area | Reader goal | Later owning items |
| --- | --- | --- |
| Start | Understand what VDS is, install it, choose a loading model, and know the release status. | `VDS-3020`, `VDS-3090`, `VDS-3100` |
| Foundations | Learn the stable substrate: primitives, base, layout, sections, typography, utilities, identity, themes, and icons. | `VDS-3030`, `VDS-3070`, `VDS-3080` |
| Components | Find UI surfaces by task and understand anatomy, selectors, states, accessibility, responsive behavior, theming, and examples. | `VDS-3030`, `VDS-3050`, `VDS-3060` |
| Patterns and recipes | Compose VDS into app shells, dashboards, forms, dense admin tools, prose/docs pages, Angular apps, and plain HTML. | `VDS-3120` |
| Reference | Look up selector inventory, dependencies, tokens, state responsibility, accessibility, responsive, and theme notes. | `VDS-3060`, `VDS-3070`, `VDS-3080`, `VDS-3130` |
| Release | Understand migration, changelog, release notes, known limitations, compatibility, and version-bounce policy. | `VDS-3090`, `VDS-3100` |

Start IA:

- Overview and value proposition.
- Installation and package surfaces.
- Full bundle versus component-level loading.
- Source versus dist consumption.
- Theme loading model.
- Browser/CSS support baseline.
- Current release status and known limitations.

Foundations IA:

- Primitives and token taxonomy.
- Semantic colors, themes, density, motion, focus, z-index, radius/border/shadow.
- Base, layout, sections, typography, utilities, identity, and icons.
- Foundation pages must separate source truth, runtime behavior, docs-only examples, and migration-sensitive APIs.

Components IA:

- Group components by user task, while preserving filename/source references inside each page.
- Every component page must point back to the relevant audit artifact and identify consumer-owned JavaScript/accessibility behavior.
- Component groups:
  - Actions and navigation: buttons, action bar, navigation, header/footer, tabs, command, tooltips/popovers.
  - Forms and input: forms, advanced forms, description list where used for key/value input-adjacent review.
  - Feedback and state: feedback, toasts, progress, skeleton, state, guidance.
  - Data and content: tables, charts, content blocks, authoring, typography, doc block.
  - Overlays and flows: overlays, accordion, flows, command modal surfaces.
  - App and work surfaces: android shell, inbox, sections, hero, header/footer, navigation.
  - Media, identity, and compact primitives: avatar, badge/tag, icons, identity.

Patterns and recipes IA:

- Plain HTML setup.
- Angular app shell setup.
- Product dashboard recipe.
- Dense admin/data recipe.
- Form workflow recipe.
- Docs/prose page recipe.
- Notification and feedback recipe.
- Modal/overlay workflow recipe.

Reference IA:

- Selector inventory and classification contract.
- CSS import/dependency model.
- Component state responsibility matrix.
- Accessibility responsibility matrix.
- Responsive behavior matrix.
- Theme and contrast matrix.
- Generated docs metadata policy.
- Validation commands and docs-quality checks.

Release IA:

- Migration guide.
- Changelog and release notes.
- Deprecated/renamed selector index.
- Compatibility shims.
- Known limitations and deferred work.
- Version-bounce and package publication notes.

## 6. Documentation Work Handoff

`VDS-3010` routes the remaining documentation rewrite items as follows:

- `VDS-3020`: rewrite README around the Start IA.
- `VDS-3030`: define the component page template for Components, Reference links, accessibility, responsive, theme, and migration sections.
- `VDS-3040`: decide raw docs ownership and whether handwritten HTML remains canonical.
- `VDS-3050`: apply example quality rules to runnable raw-doc examples.
- `VDS-3060`: write shared accessibility documentation and state/ARIA responsibility matrices.
- `VDS-3070`: write theming documentation and theme/contrast matrix.
- `VDS-3080`: write utility documentation and utility/component responsibility boundaries.
- `VDS-3090`: write migration guide for version bounce.
- `VDS-3100`: define changelog and release notes workflow.
- `VDS-3110`: review docs search, navigation, title handling, doc loader, generated navigation, and deep-link behavior.
- `VDS-3120`: write consumer recipes for common VDS adoption contexts.
- `VDS-3130`: define documentation lint rules for snippets, dependencies, class existence, headings, and accessibility sections.

## 7. Public Interfaces and Compatibility Impact

- Existing CSS classes preserved: all.
- New runtime classes: none.
- Deprecated classes: none.
- Breaking changes: none.
- Docs runtime changes: none.
- README/raw-doc/generated-index changes: none.
- Migration impact: none in `VDS-3010`; this item creates the IA source for later migration documentation.

## 8. Validation Plan

Approved validation for this planning-only item:

- Run `pnpm run audit:tokens`.
- Run `pnpm run audit`.
- Run `pnpm run audit:dist`; if the generated-artifact checker hangs again, stop it after a reasonable wait and record that validation limitation without running regeneration.
- Run `pnpm run audit:consumers`; if it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Run/read a read-only docs IA scan recording raw-doc count, generated-index count, docs-shell `data-doc` link count, duplicate docs/path evidence, README section evidence, and current docs-strategy references.
- Run markdown sanity checks:
  - `VDS-0600` is `in-progress`.
  - `VDS-3010` appears as `done`.
  - The IA artifact path resolves.
  - The plan and artifact agree that no README, raw docs, docs shell, generated output, package metadata, selector inventory, consumer report, or runtime behavior changed.
  - Next item is `VDS-3020 README rewrite from scratch`.
- Run `git diff --check` for changed planning files.

Forbidden validation:

- Do not run `pnpm run build`.
- Do not run `pnpm run build:prod`.
- Do not run `pnpm run docs:vds:index`.
- Do not run `pnpm run inventory:selectors`.
- Do not run `pnpm run consumer:scan`.
- Do not run any write/regeneration command.

## 9. Risks

- The target IA can drift if later docs items rewrite README/raw docs without using this artifact as the source.
- Component grouping by task can conflict with filename-based generated metadata; later docs navigation work must preserve source references.
- Raw docs are runnable examples, so later IA implementation must not break demo behavior without a replacement plan.
- Generated docs metadata cannot be hand-edited, so IA changes that require generated navigation need explicit generator/refresh approval later.

## 10. Assumptions

- Approval of `VDS-3010` approves planning documentation only.
- `VDS-0090` remains the strategy source; this item turns that strategy into an actionable IA map.
- Current raw docs remain canonical runnable docs until `VDS-3040` decides ownership.
- Current generated docs metadata remains generated-only and must not be edited by hand.
- README rewrite belongs to `VDS-3020`; component template rewrite belongs to `VDS-3030`; docs shell/search/navigation implementation belongs to `VDS-3110`.

## 11. Implementation Log

- `2026-05-25`: Added the VDS-3010 documentation information architecture plan and artifact. Updated the master feature map to mark `VDS-0600` in progress, mark `VDS-3010` done, and point the next recommended item at `VDS-3020 README rewrite from scratch`.
- `2026-05-25`: `pnpm run audit:tokens` passed.
- `2026-05-25`: `pnpm run audit` passed, including CSS parse, class, token, docs dependency, and selector inventory freshness checks.
- `2026-05-25`: `timeout 120s pnpm run audit:dist` reached the timeout while running `node static/js/check-generated-artifacts.js --check`; no generated artifact refresh was run.
- `2026-05-25`: `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale; `pnpm run consumer:scan` was not run because it is a write/regeneration command.
- `2026-05-25`: Read-only docs IA scan confirmed raw docs `37`, generated component JSON files `37`, docs shell `data-doc` links `39`, unique linked raw docs `37`, duplicate docs `doc-raw/vds-index.doc.html` and `doc-raw/vds-state.doc.html`, duplicate paths `home` and `state`, README section evidence, and current strategy references.
- `2026-05-25`: Markdown sanity checks passed for `VDS-0600` in-progress status, `VDS-3010` done status, IA artifact path, no-runtime-change agreement, and next recommended item.
- `2026-05-25`: `git diff --no-index --check` reported no whitespace errors for the VDS-3010 planning files and master-map snapshot.
