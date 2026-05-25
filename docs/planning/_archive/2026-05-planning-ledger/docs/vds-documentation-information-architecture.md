# VDS Documentation Information Architecture

Last updated: `2026-05-25`

Source item: `VDS-3010`

Next recommended item: `VDS-3020 README rewrite from scratch`

This file records the documentation information architecture for the VDS documentation rewrite epic. It is a planning artifact only: no README, raw docs, docs shell, browser loader scripts, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/docs/planning/docs/vds-documentation-rewrite-strategy.md` remains the documentation rewrite strategy source.
- `@24vlh/vds/doc-raw/*.doc.html` remains the current canonical runnable docs source until `VDS-3040` changes ownership.
- `@24vlh/agents/docs_vds` remains generated navigation/extraction metadata and must not be edited by hand.
- `@24vlh/vds/index.html`, `@24vlh/vds/js/doc-loader.js`, and `@24vlh/vds/static/js/server.js` remain runtime docs-shell surfaces and are not changed by this item.
- `@24vlh/vds/README.md` is rewritten later by `VDS-3020`.
- This IA is the decision source for `VDS-3020` through `VDS-3130`.

## Current Documentation Evidence

Current source and metadata evidence:

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

Current strategy evidence:

- `VDS-0090` defines documentation as task-first, source-aligned, release-aware, selector-inventory-aware, accessibility-aware, responsive-aware, theme-aware, and migration-aware.
- `VDS-0270` confirms generated docs metadata is generated-only, currently aligned to `37` raw docs, and must not be hand-edited.
- `VDS-0280` confirms the docs shell currently loads raw docs through `data-doc` links and `js/doc-loader.js`; navigation/search/runtime fixes are later work.

Known IA drift:

- The README is package-oriented and does not yet express the target Start/Foundation/Reference/Release IA.
- The current docs landing page introduces architecture and raw-doc navigation, but does not yet define the rewritten IA.
- The docs shell footer is manually ordered by raw-doc links, not the target task-based IA.
- Generated `source_css` metadata is evidence, not authoritative IA or import policy.
- Duplicate `home` and `state` docs-shell links are recorded as navigation evidence only.

## Target Top-Level IA

| Area | Reader goal | Primary outputs |
| --- | --- | --- |
| Start | Understand VDS, install it, choose a loading model, and know current release status. | README, landing page, install/load docs |
| Foundations | Understand the stable substrate before using components. | primitives, tokens, base, layout, sections, typography, utilities, identity, themes, icons |
| Components | Find UI surfaces by task and implement them with correct selectors, states, accessibility, responsive behavior, and theme expectations. | rewritten component docs |
| Patterns and recipes | Compose VDS into common product contexts. | app shell, dashboard, form, dense admin, prose/docs, Angular, plain HTML recipes |
| Reference | Look up contracts and responsibility matrices. | selector inventory, dependencies, state ownership, accessibility, responsive, theme, validation references |
| Release | Understand migration and release consequences. | migration guide, changelog, release notes, known limitations |

## Start IA

Start answers: "What is VDS, how do I install it, and what is stable?"

Required topics:

- Product/system overview and scope.
- Installation.
- Full bundle loading.
- Component-level loading.
- Source versus dist consumption.
- Theme loading and default theme choice.
- Package surfaces and import order.
- Browser/CSS support baseline.
- Current release status, known limitations, and modernization caveats.

Later owner:

- `VDS-3020 README rewrite from scratch`.

## Foundations IA

Foundations answers: "What substrate do all components rely on?"

Required topics:

- Primitives and token taxonomy.
- Semantic tokens and theme architecture.
- Density, motion, focus, z-index, radius, border, and shadow policies.
- Base layer and core import contract.
- Layout and sections.
- Typography and prose behavior.
- Utilities taxonomy and utility/component responsibility boundaries.
- Identity and icons.

Foundation documentation rules:

- Separate source truth from docs examples.
- Identify compatibility-sensitive selectors and tokens.
- Link to relevant audit artifacts when a cleanup is deferred.
- State responsive, forced-colors, reduced-motion, and theme/contrast responsibilities when relevant.

Later owners:

- `VDS-3030 Component docs template rewrite`.
- `VDS-3070 Theming documentation rewrite`.
- `VDS-3080 Utility documentation rewrite`.

## Components IA

Components answers: "Which surface solves my UI problem?"

Grouping policy:

- Group by user task and implementation responsibility, not source filename alone.
- Preserve exact source CSS, raw-doc, generated metadata, and audit-artifact references inside each page.
- Include consumer-owned JavaScript/accessibility responsibilities for CSS-only surfaces.

Component groups:

| Group | Components |
| --- | --- |
| Actions and navigation | buttons, action bar, navigation, header/footer, tabs, command, tooltips/popovers |
| Forms and input | forms, advanced forms, description list |
| Feedback and state | feedback, toasts, progress, skeleton, state, guidance |
| Data and content | tables, charts, content blocks, authoring, typography, doc block |
| Overlays and flows | overlays, accordion, flows, command modal surfaces |
| App and work surfaces | android shell, inbox, sections, hero, header/footer, navigation |
| Media, identity, and compact primitives | avatar, badge/tag, icons, identity |

Component page requirements:

- Purpose and when to use.
- Import/dependency requirements.
- Anatomy and public/candidate-public selector notes.
- Variants, modifiers, states, and composition rules.
- Accessibility, keyboard, ARIA, and consumer JavaScript responsibilities.
- Responsive behavior and viewport-sensitive notes.
- Theme and contrast behavior.
- Realistic examples and edge states.
- Migration notes and validation checklist.

Later owners:

- `VDS-3030 Component docs template rewrite`.
- `VDS-3050 Docs example quality pass`.
- `VDS-3060 Accessibility documentation rewrite`.

## Patterns and Recipes IA

Patterns answers: "How do I compose VDS into real product screens?"

Required recipes:

- Plain HTML setup.
- Angular app shell setup.
- Product dashboard.
- Dense admin/data screen.
- Form workflow.
- Documentation/prose page.
- Notification and feedback workflow.
- Modal/overlay workflow.

Recipe rules:

- Recipes may combine multiple components, but must cite source component docs for selector/state details.
- Recipes must not introduce undocumented runtime behavior.
- Recipes must identify consumer-owned JavaScript and ARIA state where behavior is interactive.

Later owner:

- `VDS-3120 Consumer recipe docs`.

## Reference IA

Reference answers: "What is the contract?"

Required references:

- Selector inventory and classification contract.
- CSS import and dependency model.
- Component state responsibility matrix.
- Accessibility responsibility matrix.
- Responsive behavior matrix.
- Theme and contrast matrix.
- Generated docs metadata policy.
- Validation commands and docs-quality checks.

Reference rules:

- Selector inventory and generated docs metadata are evidence sources, not hand-edited docs.
- Reference pages must state whether data is source-authored, generated, or planning-only.
- Accessibility and behavior references must avoid promising behavior CSS cannot provide.

Later owners:

- `VDS-3060 Accessibility documentation rewrite`.
- `VDS-3070 Theming documentation rewrite`.
- `VDS-3080 Utility documentation rewrite`.
- `VDS-3130 Documentation lint rules`.

## Release IA

Release answers: "What changes, how do I migrate, and what is the release state?"

Required topics:

- Migration guide.
- Changelog.
- Release notes.
- Deprecated/renamed selector index.
- Compatibility shims.
- Known limitations and deferred work.
- Version-bounce and package publication notes.

Later owners:

- `VDS-3090 Migration guide for version bounce`.
- `VDS-3100 Changelog and release notes workflow`.

## Handoff Matrix

| Item | IA dependency | Expected output |
| --- | --- | --- |
| `VDS-3020` | Start IA | README rewritten around installation, loading, package surfaces, compatibility, validation, and contribution workflow |
| `VDS-3030` | Components and Reference IA | component docs template with required sections |
| `VDS-3040` | Source-of-truth split | raw docs ownership decision |
| `VDS-3050` | Components and Recipes IA | example quality standards and pass plan |
| `VDS-3060` | Reference IA | accessibility and state responsibility docs |
| `VDS-3070` | Foundations and Reference IA | theme and contrast docs |
| `VDS-3080` | Foundations and Reference IA | utility taxonomy docs |
| `VDS-3090` | Release IA | migration guide |
| `VDS-3100` | Release IA | changelog and release notes workflow |
| `VDS-3110` | Target IA and current shell evidence | docs search/navigation/title/deep-link review |
| `VDS-3120` | Patterns and recipes IA | consumer recipe docs |
| `VDS-3130` | Reference and component template requirements | docs lint rule plan |

## Non-Goals

- No README rewrite in this item.
- No raw-doc rewrite in this item.
- No docs shell or loader changes in this item.
- No generated docs index refresh in this item.
- No selector inventory or consumer report refresh in this item.
- No package metadata, workflow, generated `dist`, npm tag, or version change in this item.

## Follow-Up Routing

- Use this artifact as the first planning input for `VDS-3020` through `VDS-3130`.
- Keep `VDS-0090` as the higher-level documentation rewrite strategy.
- Keep `VDS-0270` as the generated docs index ownership reference.
- Keep `VDS-0280` as the current docs shell and loader behavior reference.
