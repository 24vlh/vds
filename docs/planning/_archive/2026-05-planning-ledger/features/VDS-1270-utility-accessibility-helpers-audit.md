# VDS-1270 Utility Accessibility Helpers Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-1270`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1270-utility-accessibility-helpers-audit.md`

## 1. Goal

Create the utility accessibility helper audit for the `VDS-0400 Base, Layout, Utilities, and Global CSS` track. This item records the current accessibility-sensitive utility surfaces in `src/components/utilities.css`: visually-hidden helpers, `.hidden`, `.safe-area`, overflow/scroll helpers, cursor and pointer-events helpers, truncation helpers, docs guidance, selector classifications, and future cleanup rules.

## 2. Scope

### In scope

- Record utility accessibility helper line numbers, selector classifications, and documentation status.
- Record screen-reader/visibility, safe-area, overflow/scroll, interaction-affordance, and truncation/readability helper groups.
- Record focus, reduced-motion, forced-colors, overflow, pointer-events, cursor, clip, and safe-area declaration evidence.
- Record raw-doc accessibility guidance and generated docs metadata gaps.
- Record alignment with the `VDS-0060` WCAG 2.2 AA accessibility baseline.
- Add an accessibility helper audit artifact for later helper cleanup, docs rewrite, overflow/scroll QA, reduced-motion follow-up, selector classification, migration notes, and release verification.
- Update the master feature map so `VDS-1270` is done and the next recommended item is `VDS-1280`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing utility helper behavior, helper names, reduced-motion behavior, forced-colors behavior, generated docs metadata, utility docs, selector inventory, package/import guidance, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/foundation/vds-utilities-taxonomy-and-pruning-plan.md`
  - `@24vlh/vds/docs/planning/foundation/vds-utility-responsive-variants-audit.md`
  - `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-utilities.json`
- Repo files:
  - `@24vlh/vds/src/components/utilities.css`
  - `@24vlh/vds/doc-raw/vds-utilities.doc.html`
  - `@24vlh/vds/src/core.css`
  - `@24vlh/vds/src/index.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

- `src/components/utilities.css` evidence:
  - `3312` lines.
  - `413` `!important` declarations.
  - `11` overflow declarations.
  - `2` `-webkit-overflow-scrolling` declarations.
  - `1` `scroll-behavior` declaration.
  - `2` `pointer-events` declarations.
  - `5` cursor declarations.
  - `4` safe-area `env(...)` references.
  - `1` legacy `clip: rect(...)` declaration.
  - `0` `clip-path` declarations.
  - `0` file-local `:focus-visible`, `prefers-reduced-motion`, `forced-colors`, or ARIA selector blocks.
- Focus/active selector evidence:
  - Utilities has `2` focus/active selectors through `.sr-only-focusable:active` and `.sr-only-focusable:focus`.
- Screen-reader/visibility/mobile-adjacent helpers:
  - `.hidden`: public, documented.
  - `.sr-only`: public, documented.
  - `.sr-only-focusable`: candidate-public, not documented as a source class in the current selector inventory.
  - `.safe-area`: candidate-public, not documented as a source class in the current selector inventory.
- Overflow/scroll helpers:
  - `.overflow-hidden`: public, documented.
  - `.overflow-auto`: candidate-public, not documented as a source class in the current selector inventory.
  - `.overflow-x-auto`: public, documented.
  - `.overflow-y-auto`: public, documented.
  - `.scroll-x`: public, documented.
  - `.scroll-y`: public, documented.
  - `.scroll-smooth`: candidate-public, not documented as a source class in the current selector inventory.
- Interaction affordance helpers:
  - `.cursor-not-allowed`: public, documented.
  - `.cursor-default`, `.cursor-pointer`, `.cursor-wait`, `.cursor-text`, `.pointer-events-none`, and `.pointer-events-auto`: candidate-public, not documented as source classes in the current selector inventory.
- Truncation/readability helpers:
  - `.truncate`: public, documented.
  - `.truncate-2`: public, documented.
  - `.truncate-3` and `.truncate-4`: candidate-public, not documented as source classes in the current selector inventory.
- Docs evidence:
  - `doc-raw/vds-utilities.doc.html` has `1182` lines.
  - Raw docs mention hidden `13`, `sr-only` `4`, screen-reader `1`, visually-hidden `1`, focus `3`, skip `0`, overflow `23`, scroll `17`, safe-area `0`, pointer-events `5`, cursor `14`, reduced-motion `1`, keyboard `2`, ARIA `4`, and `tabindex` `0`.
  - Raw docs warn not to rely on `.hidden` or `hide-*` classes for accessibility-critical content.
  - Raw docs warn not to use truncation helpers where full text is needed for comprehension.
  - Raw docs warn that overflow/scroll utilities must remain keyboard-accessible.
  - Generated `@24vlh/agents/docs_vds/components/vds-utilities.json` currently has empty `source_css`.

## 5. Proposed Architecture or Change

### Accessibility helper contract

- No source CSS, selector, token, raw-doc, package, selector-inventory, consumer-report, or generated-output changes.
- Treat current utility accessibility helper behavior as compatibility-sensitive source truth.
- Treat `.sr-only`, `.sr-only-focusable`, `.hidden`, `.safe-area`, overflow/scroll, cursor, pointer-events, and truncation helpers as protected public or candidate-public surfaces.
- Treat CSS utilities as visual/behavioral helpers only; they do not replace semantic markup, ARIA, focus management, labels, descriptions, live regions, or keyboard behavior in consumer code.
- Treat missing file-local `:focus-visible`, reduced-motion, forced-colors, safe-area docs, skip helper, and generated `source_css` metadata as audit findings, not approved fixes.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/foundation/vds-utility-accessibility-helpers-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1270` and set next recommended item to `VDS-1280`.
- Do not change README, raw docs, docs shell, docs demos, generated docs indexes, or agents docs output in this item.

## 6. Component API and Compatibility Impact

- Existing selectors preserved:
  - All runtime selectors remain unchanged.
- New selectors:
  - None.
- Deprecated selectors:
  - None in this item.
- Breaking changes:
  - None in CSS, selectors, tokens, custom property names, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, or package version fields.
- Migration notes:
  - None for package consumers in this item. Later accessibility helper behavior, reduced-motion handling, docs guidance, selector classification, or migration cleanup may need migration notes.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future overflow/scroll, focusable hidden, and truncation changes must preserve keyboard access and focus visibility.
- Semantics or ARIA:
  - No runtime behavior changes. Consumers remain responsible for semantic markup, ARIA state sync, live regions, labels, descriptions, and widget behavior.
- Reduced motion:
  - No runtime behavior changes. `.scroll-smooth` lacks file-local reduced-motion handling and must be reviewed later.
- Forced colors or contrast:
  - No runtime behavior changes. Utility helpers lack file-local forced-colors handling and must be reviewed later if helper behavior changes.
- Mobile/adaptive behavior:
  - No runtime behavior changes. `.safe-area` remains adjacent to responsive/mobile behavior recorded in `VDS-1260`.
- Theme coverage:
  - No theme values change.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:dist`
  - `pnpm run audit:consumers`
- Utility accessibility scan:
  - Record helper class line numbers and selector classifications.
  - Record screen-reader/visibility, safe-area, overflow/scroll, interaction, and truncation helper groups.
  - Record focus, reduced-motion, forced-colors, overflow, pointer-events, cursor, clip, and safe-area declaration evidence.
  - Record raw-doc guidance and generated docs metadata gaps.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only. If it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Planning sanity checks:
  - Confirm master map, feature plan, and accessibility helper artifact agree that no CSS, docs, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1280`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting utility accessibility helper behavior before cleanup.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later accessibility helper behavior changes or deprecations may require migration notes.

## 10. Risks

- `.hidden` fully removes content visually and from assistive technology flow; docs correctly warn not to use it for accessibility-critical content.
- `.sr-only-focusable` is candidate-public and not currently documented as a source class, despite being important for focusable hidden content patterns.
- No skip helper class is present in `utilities.css`, and raw docs mention skip `0` times.
- `.safe-area` exists in source and uses safe-area `env(...)`, but raw utility docs mention safe-area `0` times.
- `.scroll-smooth` has no file-local reduced-motion handling, so future cleanup must coordinate with motion and accessibility baselines.
- Overflow/scroll helpers can create keyboard and focus-management risks in narrow or nested scroll containers.
- Cursor and pointer-events utilities can visually imply disabled or noninteractive states without semantic `disabled`, `aria-disabled`, or app-level behavior.
- Truncation helpers can hide meaningful text and must not be used where full text is needed for comprehension.
- Utilities lack file-local forced-colors handling; helper changes must not weaken high-contrast behavior.
- Generated docs metadata omits `source_css`, so docs tooling currently under-reports the utilities source relationship.

## 11. Open Questions

- Should `.sr-only-focusable` become documented public API or remain candidate-public? Deferred to docs rewrite and selector classification work.
- Should VDS add or document a skip-link helper class? Deferred to later approved accessibility/helper work.
- Should `.safe-area` live in responsive utility docs, accessibility helper docs, or both? Deferred to docs rewrite work.
- Should `.scroll-smooth` receive explicit reduced-motion handling? Deferred to later motion/accessibility implementation work.
- Should pointer/cursor utilities be documented with semantic-state warnings? Deferred to docs rewrite work.

## 12. Approval

- Requested on: `2026-05-24`
- Approved by: user
- Approved on: `2026-05-24`

## 13. Implementation Log

- `2026-05-24`: Created this plan file.
- `2026-05-24`: Added utility accessibility helper audit artifact.
- `2026-05-24`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1270` and set next recommended item to `VDS-1280`.
- `2026-05-24`: Ran/read a read-only utility accessibility scan. Summary: `src/components/utilities.css` has `413` `!important` declarations; `11` overflow declarations; `2` `-webkit-overflow-scrolling` declarations; `1` `scroll-behavior`; `2` `pointer-events`; `5` cursor declarations; `4` safe-area `env(...)` references; `1` legacy `clip: rect(...)`; `2` focus/active selectors through `.sr-only-focusable`; no file-local `:focus-visible`, reduced-motion, forced-colors, `clip-path`, or ARIA selector blocks; helper groups and selector classifications are recorded; docs have `1182` lines; generated docs metadata has empty `source_css`.

## 14. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed: generated artifacts are fresh with `80` CSS files checked.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-1270` forbids write/regeneration commands.
  - Read-only utility accessibility scan completed.
  - VDS-1270 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1270-utility-accessibility-helpers-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-utility-accessibility-helpers-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None planned; global overrides and docs-only CSS review continues in `VDS-1280`.
