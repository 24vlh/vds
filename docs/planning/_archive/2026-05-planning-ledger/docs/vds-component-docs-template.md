# VDS Component Docs Template

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-25`

Source item: `VDS-3030`

Next recommended item: `VDS-3040 Raw docs HTML ownership plan`

This file defines the required structure for future VDS component documentation rewrites. It is a planning/template artifact only: no raw docs, README, docs shell, loader scripts, generated docs metadata, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, version fields, or runtime CSS APIs change here.

## Policy Summary

- `@24vlh/vds/src/**/*.css` remains source truth for selectors and CSS behavior.
- `@24vlh/vds/doc-raw/*.doc.html` remains the current canonical runnable docs source until `VDS-3040` changes raw-doc ownership.
- `@24vlh/agents/docs_vds/components/*.json` remains generated evidence and must not be edited by hand.
- Completed component audit artifacts under `@24vlh/vds/docs/planning/components` are decision sources for current CSS-only contracts, selector evidence, metadata gaps, accessibility risks, and later rewrite routing.
- Component docs must describe CSS surfaces honestly. They must not promise JavaScript behavior, ARIA synchronization, focus management, routing, validation, async loading, or live announcements unless that behavior is owned by the consuming app or a documented runtime layer.

## Current Evidence Snapshot

Raw docs under `@24vlh/vds/doc-raw`:

- Files: `37`.
- Total `h1`: `53`.
- Total `h2`: `455`.
- Total `h3`: `495`.
- Total `pre`: `487`.
- Total `code`: `2544`.
- Total `role`: `350`.
- Total `aria-*` matches: `864`.

Generated component JSON under `@24vlh/agents/docs_vds/components`:

- Files: `37`.
- Blocks: `438`.
- Code examples: `465`.
- Class-token entries: `2400`.
- Files with empty `source_css`: `15`.

Common current generated block titles include:

- `Accessibility & usage rules`.
- `Installation & dependencies`.

Current docs are useful implementation evidence, but the rewritten template is required because heading order, source references, runtime boundaries, example depth, accessibility coverage, responsive notes, and generated metadata coverage are inconsistent.

## Required Section Order

Every rewritten component doc must use this section order:

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

## 1. Title and Summary

Required content:

- Component name and stable slug.
- One-paragraph purpose.
- CSS-only contract summary.
- Whether the component is a component surface, foundation-adjacent surface, docs-only surface, or package standalone surface.
- Current status and any known planning/audit caveat.

Rules:

- Use the canonical component name from the source CSS and audit artifact.
- Avoid marketing language.
- Do not imply runtime behavior that source CSS cannot provide.
- Link or refer to the matching component audit artifact.

## 2. When to Use

Required content:

- Use cases the component is intended to solve.
- When to choose a related component instead.
- Common misuse or boundary examples.

Rules:

- Route overlap explicitly. For example, feedback, toasts, progress, skeleton, and state docs must clarify their different jobs.
- If a component is CSS-only, say what the consumer must provide for behavior.
- For semantic HTML surfaces, mention when native elements such as `table`, `dl`, `button`, or headings are required.

## 3. Source Truth and Package/Import Dependencies

Required content:

- Source CSS path.
- Raw doc path.
- Generated docs metadata path.
- Component audit artifact path.
- Package-facing `dist` path when present.
- Import dependencies or required adjacent CSS layers from source/docs evidence.

Required reference format:

```md
Source CSS: `@24vlh/vds/src/components/{slug}.css`
Raw docs: `@24vlh/vds/doc-raw/vds-{slug}.doc.html`
Generated metadata: `@24vlh/agents/docs_vds/components/vds-{slug}.json`
Audit artifact: `@24vlh/vds/docs/planning/components/vds-{slug}-component-audit.md`
Package-facing CSS: `@24vlh/vds/dist/components/{slug}.css`
Package-facing minified CSS: `@24vlh/vds/dist/components/{slug}.min.css`
```

Rules:

- Source CSS wins when source, raw docs, and generated metadata disagree about selector behavior.
- Generated metadata is evidence only.
- Raw docs remain runnable docs source until `VDS-3040`.
- Dist is package-facing output, not authoring source.
- Do not add or promise package `exports` behavior unless a later package item approves it.

## 4. Anatomy and Markup Contract

Required content:

- Root selector and optional data attribute.
- Required child slots.
- Optional child slots.
- Required native semantics, if any.
- Composition boundaries with related components.

Rules:

- Keep the anatomy tied to selectors that exist in source CSS.
- For semantic surfaces, show correct native HTML where it matters.
- For purely presentational slots, explain that text, icons, media, and labels still need accessible meaning from the consumer.
- Do not invent wrapper or slot classes for cleaner examples unless they are documented as docs/runtime helpers.

## 5. Public Selectors and Compatibility Notes

Required content:

- Public root selectors.
- Public element selectors.
- Public modifiers and state hooks.
- Candidate-public selectors that appear in source or inventory evidence.
- Known generated metadata gaps such as empty `source_css`, if present.
- Compatibility-sensitive aliases or legacy selectors.

Rules:

- Do not rename, remove, reclassify, or deprecate selectors inside a docs rewrite.
- If selector classification is uncertain, record the uncertainty and link back to the audit artifact.
- Do not use generated docs metadata as the only selector source when it conflicts with source CSS.

## 6. Variants, Sizes, Densities, and Layouts

Required content:

- Visual variants.
- Semantic variants.
- Size and density modifiers.
- Layout variants.
- Orientation and placement variants.
- Composition helpers.

Rules:

- Mention whether each variant is source-backed, docs-only, or runtime-owned.
- Record overlap with other components as compatibility evidence, not cleanup approval.
- Avoid promising design-token cleanup, selector pruning, or migration unless the relevant later item has approved it.

## 7. States and Runtime Behavior Boundaries

Required content:

- Source-defined CSS state hooks such as active, current, selected, disabled, loading, open, expanded, hidden, visible, error, success, complete, or indeterminate.
- State hooks absent from source but mentioned by docs or backlog, if relevant.
- Consumer-owned runtime behavior.

Rules:

- Explicitly state that CSS does not own runtime state changes.
- For interactive surfaces, list consumer responsibilities such as open/close state, active index, filtering, routing, validation, progress values, selection, expansion, queueing, focus movement, and announcements.
- Disabled anchor or custom control examples must include semantic guidance.
- Loading, error, empty, and success examples must not imply automatic data handling.

## 8. Accessibility and Keyboard/ARIA Responsibilities

Required content:

- Required native semantics.
- ARIA roles and attributes when the component pattern requires them.
- Keyboard expectations when interaction is present.
- Focus-visible requirements.
- Accessible-name requirements for icon-only controls.
- Live-region or announcement responsibilities where relevant.

Rules:

- Separate CSS-provided visual hooks from application-owned ARIA synchronization.
- Align guidance with WCAG 2.2 AA and relevant APG patterns, but avoid forcing APG semantics on purely presentational surfaces.
- If the component can be implemented with different semantic patterns, describe the consumer decision point.
- Semantic/status examples must not rely on color alone.

## 9. Responsive/Mobile Behavior

Required content:

- Source media queries or lack of media queries.
- Mobile collapse/reflow behavior.
- Overflow, scroll, wrapping, safe-area, and touch considerations where relevant.
- Any responsive behavior mentioned in raw docs but absent in source, or present in source but absent in docs.

Rules:

- State exact source-backed behavior where audit evidence provides it.
- Do not promise viewport behavior beyond source CSS.
- For components with no responsive rules, say that composition and container behavior are consumer-owned unless the component audit says otherwise.

## 10. Theming, Contrast, Forced-Colors, and Reduced-Motion Notes

Required content:

- Local custom properties.
- Theme token dependencies.
- Hard-coded color or `color-mix(...)` evidence when present.
- Contrast risks.
- File-local `prefers-reduced-motion` handling or absence.
- File-local `forced-colors` handling or absence.
- Animation/keyframe behavior when present.

Rules:

- Record absent forced-colors or reduced-motion handling as audit findings, not immediate fixes.
- Do not add new token promises without source or approved token work.
- Theme-sensitive examples must say which tokens or themes affect them.
- Motion examples must state whether reduced-motion is source-backed or consumer-owned.

## 11. Examples: Minimal, Realistic, and Edge-State

Each component doc must include at least:

- Minimal example: smallest source-backed anatomy that is useful.
- Realistic example: representative product usage with labels, content, and accessible semantics.
- Edge-state example: disabled, loading, empty, error, selected, expanded, collapsed, no-results, or other source-backed state relevant to the component.

Example rules:

- Examples must use selectors that exist in source CSS or are explicitly documented as docs/runtime helpers.
- Icon-only controls need visible text or accessible names.
- Interactive CSS-only surfaces must state consumer JavaScript responsibilities.
- Semantic/status examples cannot rely on color alone.
- Responsive examples must state what changes at the relevant breakpoint.
- Theme-sensitive examples must state what changes with theme tokens.
- Do not introduce fake production behavior such as automatic filtering, focus trapping, validation, route sync, or announcements.

## 12. Migration and Release Notes

Required content:

- Current compatibility statement.
- Known selector, metadata, docs, or behavior risks from the component audit.
- Deferred migration work, if any.
- Linkage to release/migration work items when relevant.

Rules:

- Do not announce selector removals, deprecations, or breaking changes unless a later approved migration/release item has authorized them.
- If docs and source conflict, record source truth and defer docs correction to the rewrite item.
- If generated metadata is sparse or stale, record that it must be regenerated through approved tooling later, not edited manually.

## 13. Validation Checklist

Each rewritten component doc must confirm:

- Source CSS path is named.
- Raw doc path is named.
- Generated metadata path is named.
- Component audit artifact path is named.
- Package-facing dist path is named when present.
- Examples use source-backed selectors or explicitly documented helpers.
- Interactive behavior boundaries are stated.
- Accessibility, keyboard, and ARIA responsibilities are stated when relevant.
- Responsive/mobile behavior is stated or explicitly absent.
- Theme/contrast, forced-colors, and reduced-motion notes are stated.
- Migration/release notes avoid unapproved deprecations or removals.
- No raw generated metadata was hand-edited.
- No package metadata, generated output, selector inventory, consumer report, workflow, npm tag, or version field changed.

## Required Source Reference Matrix

| Reference | Required? | Purpose |
| --- | --- | --- |
| Source CSS path | Yes | Selector and CSS behavior truth. |
| Raw doc path | Yes | Current runnable docs source until `VDS-3040`. |
| Generated metadata path | Yes | Generated evidence for blocks, examples, class tokens, and `source_css`. |
| Component audit artifact path | Yes | Planning decision source for current contract and risks. |
| Package-facing `dist` path | When present | Consumer-facing output evidence under current package metadata. |
| Minified `dist` path | When present | Package-facing minified output evidence. |
| Related component docs | When relevant | Boundary and composition guidance. |
| Shared accessibility/theme/reference docs | When relevant | Avoid repeating global policy in every component page. |

## Generated Metadata Policy

- Generated metadata may be quoted or summarized as evidence.
- Empty or incomplete `source_css` values must be recorded as metadata gaps.
- Generated metadata must not be manually edited in component docs rewrite work.
- Metadata refresh belongs to an explicitly approved docs-index/generation item.
- Raw docs and generated metadata can disagree; source CSS and component audit artifacts decide the current CSS contract.

## Non-Goals

This template does not:

- Decide raw-doc ownership.
- Rewrite raw docs.
- Rewrite generated component JSON.
- Change docs shell navigation, search, titles, or loader behavior.
- Add docs lint tooling.
- Change package exports or package files.
- Change runtime CSS, selectors, tokens, imports, dist files, selector inventory, consumer reports, workflows, npm tags, or version fields.

## Handoff

`VDS-3030` hands off to:

- `VDS-3040 Raw docs HTML ownership plan`: decide whether `doc-raw` remains handwritten HTML, becomes generated from templates, or splits into docs data plus rendering.
- `VDS-3050 Docs example quality pass`: apply example rules to runnable component examples.
- `VDS-3060 Accessibility documentation rewrite`: define shared accessibility and state/ARIA responsibility matrices.
- `VDS-3070 Theming documentation rewrite`: define shared theme, contrast, forced-colors, and custom-theme guidance.
- `VDS-3080 Utility documentation rewrite`: define utility/component responsibility boundaries.
- `VDS-3090` through `VDS-3130`: migration, changelog, docs navigation/search, consumer recipes, and docs lint rules.
