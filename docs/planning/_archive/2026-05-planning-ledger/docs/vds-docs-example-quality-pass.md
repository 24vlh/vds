# VDS Docs Example Quality Pass

Last updated: `2026-05-25`

Source item: `VDS-3050`

Next recommended item: `VDS-3060 Accessibility documentation rewrite`

This file records the example quality standard and triage evidence for the VDS documentation rewrite epic. It is a planning/triage artifact only: no README, raw docs, docs shell, loader scripts, generated docs metadata, generated output, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, version fields, or runtime CSS APIs change here.

## Decision

VDS-3050 is a standard-and-triage pass only.

No runnable raw-doc examples are rewritten in this item. The quality rules below become the decision source for later raw-doc/component rewrite work, where raw-doc changes must be explicitly approved.

## Example Quality Standard

Future rewritten examples must:

- Use selectors that exist in source CSS or are explicitly documented helper/runtime hooks.
- Be realistic enough to adapt into product UI.
- Avoid decorative filler that hides the component contract.
- Keep icon-only controls accessible with visible text, `aria-label`, or `aria-labelledby`.
- Use explicit `type` on buttons where appropriate.
- Give images meaningful `alt` text or explicit decorative treatment.
- Avoid relying on color alone for semantic/status meaning.
- State consumer JavaScript and ARIA responsibilities for interactive CSS-only surfaces.
- State what changes for responsive or theme-sensitive examples.
- Include edge states relevant to the component, such as disabled, loading, empty, error, selected, expanded, compact, dense, overflow, and no-results.
- Avoid promising behavior CSS cannot provide, such as routing, validation, filtering, focus trapping, queueing, live announcements, async loading, or collision-aware positioning.

## Example Review Checklist

Later raw-doc/component rewrites must check:

- Selector source: every class is source-backed or explicitly documented as a helper/runtime hook.
- Markup anatomy: root, slot, and modifier usage matches the component audit and template.
- Realism: sample content resembles real product use and is not placeholder-only.
- Controls: buttons, links, form controls, and icon-only controls have correct semantics and names.
- Media: images and decorative media are labeled or hidden appropriately.
- Status meaning: semantic examples pair color with text, icon, structure, or accessible labels.
- Runtime boundaries: JavaScript-owned behavior is named without implying CSS implements it.
- Responsive/theme notes: examples explain viewport, density, token, or theme-sensitive changes when relevant.
- Edge states: examples include meaningful state coverage for the component.
- Copyability: snippets remain small enough to adapt without losing required semantics.

## Current Evidence

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

| Component metadata | Examples |
| --- | ---: |
| `vds-base` | `39` |
| `vds-content-blocks` | `26` |
| `vds-navigation` | `24` |
| `vds-flows` | `22` |
| `vds-inbox` | `20` |
| `vds-layout` | `20` |
| `vds-sections` | `19` |
| `vds-forms` | `17` |
| `vds-utilities` | `17` |
| `vds-command` | `16` |

Heuristic risk counts from generated examples:

| Signal | Count |
| --- | ---: |
| `href="#"` matches | `53` |
| Buttons | `249` |
| Buttons without explicit `type` | `143` |
| Images | `22` |
| Images missing `alt` | `1` |
| Icon-only button candidates | `17` |
| Icon-only button candidates missing accessible name | `1` |
| `role` usages | `122` |
| `aria-*` usages | `201` |

These counts are triage signals, not automatic defects. Later rewrites must inspect examples in context before changing markup.

## Triage Rules

- High-example-count docs should be reviewed early because they have the largest copy/paste surface.
- Missing button `type`, missing image `alt`, and icon-only controls without names are high-value review signals.
- `href="#"` may be acceptable in constrained demos, but later rewrites should prefer realistic URLs, buttons, or explicit placeholder guidance.
- Role and ARIA usage should be checked for synchronization with consumer-owned runtime behavior.
- Interactive CSS-only examples must name JavaScript responsibilities instead of implying built-in behavior.
- Generated metadata gaps or stale examples must be fixed through approved raw-doc edits and generated metadata refreshes only when those are explicitly in scope.

## Non-Goals

This plan does not:

- Rewrite raw docs.
- Refresh generated docs metadata.
- Change docs shell navigation or loader behavior.
- Add docs lint rules.
- Change README, generated output, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields.

## Handoff

`VDS-3050` hands off to:

- `VDS-3060 Accessibility documentation rewrite`: define shared accessibility and state/ARIA responsibility guidance.
- `VDS-3070 Theming documentation rewrite`: define shared theme, contrast, forced-colors, and motion example guidance.
- Component/raw-doc rewrite work: apply this standard when raw-doc edits are explicitly approved.
- `VDS-3130 Documentation lint rules`: convert stable parts of this standard into enforceable docs checks.
