# VDS-1250 Utilities Taxonomy and Pruning Plan

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-1250`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1250-utilities-taxonomy-and-pruning-plan.md`

## 1. Goal

Create the utilities taxonomy and pruning plan for the `VDS-0400 Base, Layout, Utilities, and Global CSS` track. This item records the current `src/components/utilities.css` contract: utility families, selector/public-surface evidence, `!important` usage, responsive utility risks, overlap with layout/sections, docs coverage, and pruning rules before any utility cleanup begins.

## 2. Scope

### In scope

- Record `src/components/utilities.css` line, token, reference, selector, media-query, declaration, `!important`, responsive-selector, and class-inventory evidence.
- Record the utility taxonomy for display/visibility, flex/grid, spacing/gap, typography/text, sizing, surface/color/radius/shadow, overflow, position/z-index, stack/cluster composition, and state/interaction helpers.
- Record the current `!important` policy risk before any utility pruning or normalization work.
- Record responsive utility selector evidence and defer detailed breakpoint behavior to `VDS-1260`.
- Record overlap with `layout.css`, `sections.css`, z-index/overlay rules, and accessibility helpers.
- Record raw-doc coverage and generated docs metadata gaps.
- Add a utilities taxonomy artifact for later utility pruning, responsive utility review, accessibility helper review, docs rewrite, selector inventory follow-up, migration notes, and release verification.
- Update the master feature map so `VDS-1250` is done and the next recommended item is `VDS-1260`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Pruning, renaming, reclassifying, deprecating, or normalizing utility classes.
- Fixing responsive utilities, selector inventory escaping behavior, generated docs metadata, utility docs, package/import guidance, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/foundation/vds-layout-system-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-section-system-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-core-import-contract-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-spacing-layout-rhythm-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-z-index-overlay-stack-audit.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-utilities.json`
- Repo files:
  - `@24vlh/vds/src/components/utilities.css`
  - `@24vlh/vds/src/layout.css`
  - `@24vlh/vds/src/components/sections.css`
  - `@24vlh/vds/src/core.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/doc-raw/vds-utilities.doc.html`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

- `src/components/utilities.css` evidence:
  - `3312` lines.
  - `0` custom property definitions.
  - `490` `var(...)` references and `87` unique referenced token names.
  - `776` selector blocks in the read-only source scan.
  - `12` media queries.
  - `413` `!important` declarations.
  - `0` hard-coded hex/rgb color literals in the read-only scan.
- Declaration evidence:
  - `gap`: `83`.
  - `display`: `44`.
  - `grid-template-columns`: `43`.
  - `color`: `34`.
  - `width`: `32`.
  - `justify-content`: `32`.
  - `flex-direction`: `31`.
  - `align-items`: `30`.
  - `margin`: `28`.
  - `height`: `26`.
  - `padding`: `22`.
  - `max-width`: `22`.
  - `z-index`: `13`.
- Selector/API evidence:
  - Selector inventory finds `648` utility-defined classes.
  - `146` utility-defined classes are `public`.
  - `502` utility-defined classes are `candidate-public`.
  - Utility family counts include spacing/margin/padding `304`, text `60`, gap `57`, grid `41`, flex `39`, surface/color `37`, sizing `28`, stack/cluster/layout `23`, position/z-index `22`, state/interaction `12`, display `8`, overflow `7`, and `sr-only` `2`.
- Responsive selector evidence:
  - Source contains `112` escaped responsive utility selectors.
  - Responsive source selector prefixes are balanced: `28` `sm`, `28` `md`, `28` `lg`, and `28` `xl`.
  - Current selector inventory does not expose these escaped responsive class names as colon-prefixed class names; this is a metadata gap for `VDS-1260` and possible selector-inventory follow-up.
- Docs evidence:
  - `doc-raw/vds-utilities.doc.html` has `1182` lines.
  - Raw docs describe utilities as atomic helpers for layout, spacing, typography, visuals, and interaction, not replacements for components or layout primitives.
  - Raw docs mention `!important` `85` times, responsive behavior `27`, spacing `36`, gap `56`, flex `61`, grid `71`, overflow `23`, z-index `17`, and `sr-only` `5`.
  - Raw docs mention safe-area `0` times.
  - Generated `@24vlh/agents/docs_vds/components/vds-utilities.json` currently has empty `source_css`.

## 5. Proposed Architecture or Change

### Utilities contract

- No source CSS, selector, token, raw-doc, package, selector-inventory, consumer-report, or generated-output changes.
- Treat `src/components/utilities.css` as a component file in `index.css` and standalone component dist output, not as part of `core.css`.
- Treat `utilities.css` as owner of atomic helpers for display/visibility, flex/grid, spacing/gap, typography/text, sizing, surface/color/radius/shadow, overflow, position/z-index, stack/cluster composition, and state/interaction.
- Treat `utilities.css` as not owning foundation layout semantics, section component variants, component behavior, themes, identity, or docs-shell runtime behavior.
- Treat utility classes, responsive variants, `!important` behavior, z-index helpers, and accessibility helpers as compatibility-sensitive until a later approved cleanup or migration item says otherwise.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/foundation/vds-utilities-taxonomy-and-pruning-plan.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1250` and set next recommended item to `VDS-1260`.
- Do not change README, raw docs, docs shell, docs demos, generated docs indexes, or agents docs output in this item.

## 6. Component API and Compatibility Impact

- Existing selectors preserved:
  - All runtime selectors remain unchanged.
- New selectors:
  - None.
- Deprecated selectors:
  - None in this item.
- Breaking changes:
  - None in CSS, selectors, tokens, custom property names, raw docs, generated `dist`, package fields, workflows, selector inventory, consumer reports, or package version fields.
- Migration notes:
  - None for package consumers in this item. Later utility pruning, responsive behavior, selector inventory, z-index, accessibility helper, or docs guidance changes may need migration notes.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future accessibility-helper and overflow utility changes must preserve keyboard usability and visible focus.
- Semantics or ARIA:
  - No runtime behavior changes. Utility classes remain visual helpers; consumer markup owns semantics and ARIA.
- Reduced motion:
  - No runtime behavior changes.
- Forced colors or contrast:
  - No runtime behavior changes. Future surface, text, border, shadow, opacity, and state utility changes must coordinate with theme contrast and forced-colors work.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Detailed responsive prefix behavior moves to `VDS-1260`.
  - Current responsive utility source selectors use `sm`, `md`, `lg`, and `xl` escaped prefixes.
- Theme coverage:
  - No theme values change. Utilities consume active theme tokens for text, borders, backgrounds, surfaces, shadows, focus-adjacent styling, and semantic colors.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:dist`
  - `pnpm run audit:consumers`
- Utilities taxonomy scan:
  - Record line, token, reference, selector, media-query, declaration, `!important`, responsive-selector, and class-inventory counts.
  - Record utility family totals, z-index, overflow, accessibility-helper, responsive-prefix, and generated metadata evidence.
  - Record raw-doc coverage and generated docs metadata gaps.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only. If it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Planning sanity checks:
  - Confirm master map, feature plan, and utilities artifact agree that no CSS, docs, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1260`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting the utility taxonomy and pruning contract.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later utility pruning, deprecation, responsive behavior, or selector inventory changes may require migration notes.

## 10. Risks

- `utilities.css` is the largest source CSS file and a broad compatibility surface.
- `!important` is widespread and appears intentional for atomic utility behavior, but needs a documented policy before cleanup.
- Docs say responsive prefixes follow mobile-first behavior, while source responsive utilities are primarily `max-width` based; this needs detailed classification in `VDS-1260`.
- Source contains escaped responsive utility selectors that are not currently exposed as colon-prefixed classes in the selector inventory.
- Utility layout helpers overlap conceptually with `layout.css` and `sections.css`, but those surfaces must remain distinct until later classification.
- Z-index utilities include numeric and semantic helpers and must continue respecting overlay/modal stack guidance from `VDS-1070`.
- Accessibility helpers such as `sr-only` need dedicated review in `VDS-1270`.
- Generated docs metadata for `vds-utilities` currently has empty `source_css`, so docs index metadata is not authoritative for utility ownership.
- Raw docs do not mention safe-area behavior.

## 11. Open Questions

- Should responsive utility prefixes be documented as max-width, mobile-first, or a mixed legacy surface? Deferred to `VDS-1260`.
- Should escaped responsive utility classes be represented differently in selector inventory? Deferred to `VDS-1260` or a later selector-inventory follow-up.
- Should `!important` remain the default utility policy or become more selective? Deferred to later utility cleanup.
- Which candidate-public utility classes are true public API, cleanup candidates, or legacy-compatible helpers? Deferred to later selector reclassification and pruning work.
- Should generated docs metadata include `src/components/utilities.css` for `vds-utilities`? Deferred to docs index/docs rewrite work.

## 12. Approval

- Requested on: `2026-05-24`
- Approved by: user
- Approved on: `2026-05-24`

## 13. Implementation Log

- `2026-05-24`: Created this plan file.
- `2026-05-24`: Added utilities taxonomy and pruning artifact.
- `2026-05-24`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1250` and set next recommended item to `VDS-1260`.
- `2026-05-24`: Ran/read a read-only utilities taxonomy scan. Summary: `src/components/utilities.css` has `3312` lines; `0` custom property definitions; `490` `var(...)` references; `87` unique referenced token names; `776` selector blocks; `12` media queries; `413` `!important` declarations; selector inventory finds `648` utility-defined classes with `146` public and `502` candidate-public; source contains `112` escaped responsive utility selectors; docs have `1182` lines; generated docs metadata has empty `source_css`.

## 14. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed: generated artifacts are fresh with `80` CSS files checked.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-1250` forbids write/regeneration commands.
  - Read-only utilities taxonomy scan completed.
  - VDS-1250 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1250-utilities-taxonomy-and-pruning-plan.md`
  - `@24vlh/vds/docs/planning/foundation/vds-utilities-taxonomy-and-pruning-plan.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None planned; utility responsive variant review continues in `VDS-1260`.
