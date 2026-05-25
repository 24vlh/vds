# VDS-1260 Utility Responsive Variants Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-1260`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1260-utility-responsive-variants-audit.md`

## 1. Goal

Create the responsive utility audit for the `VDS-0400 Base, Layout, Utilities, and Global CSS` track. This item records the current responsive behavior in `src/components/utilities.css`: show/hide breakpoint helpers, responsive grid/flex prefixed classes, layout-grid collapse behavior, selector inventory gaps, docs/source mismatches, and compatibility rules before any responsive utility cleanup begins.

## 2. Scope

### In scope

- Record `src/components/utilities.css` media query line numbers and query conditions.
- Record show/hide helper behavior for mobile, tablet, and desktop ranges.
- Record `.layout-grid-inner-2` and `.layout-grid-inner-3` collapse behavior.
- Record escaped responsive grid and flex selector totals by prefix and family.
- Record selector inventory representation gaps for colon-prefixed responsive utilities.
- Record raw-doc responsive guidance, raw-doc responsive class-usage gaps, and generated docs metadata gaps.
- Record adjacent `.safe-area` source/docs evidence as mobile documentation context.
- Add a responsive utility artifact for later responsive utility cleanup, selector inventory follow-up, docs rewrite, responsive QA, migration notes, and release verification.
- Update the master feature map so `VDS-1260` is done and the next recommended item is `VDS-1270`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing responsive CSS behavior, breakpoint naming, mobile-first/max-width mismatch, selector inventory escaping, generated docs metadata, utility docs, package/import guidance, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/foundation/vds-utilities-taxonomy-and-pruning-plan.md`
  - `@24vlh/vds/docs/planning/foundation/vds-layout-system-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-section-system-audit.md`
  - `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`
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

- `src/components/utilities.css` responsive evidence:
  - `12` media blocks total.
  - Media blocks appear at source lines `85`, `95`, `105`, `2707`, `2784`, `2814`, `2844`, `2874`, `2966`, `3053`, `3140`, and `3227`.
- Visibility helper behavior:
  - `.hide-mobile` and `.show-mobile` apply at `max-width: 640px`.
  - `.hide-tablet` and `.show-tablet` apply at `min-width: calc(640px + 1px)` and `max-width: 768px`.
  - `.hide-desktop` and `.show-desktop` apply at `min-width: 1024px`.
- Layout-grid collapse behavior:
  - `.layout-grid-inner-2` and `.layout-grid-inner-3` collapse to one column at `max-width: 768px`.
- Responsive prefixed selector evidence:
  - Source contains `112` escaped responsive utility selectors.
  - Prefix totals are balanced: `28` `sm`, `28` `md`, `28` `lg`, and `28` `xl`.
  - Family totals are `28` grid column selectors and `84` flex selectors.
  - Responsive prefixed selector range is lines `2785` through `3309`.
  - Responsive grid/flex variants use `max-width: 640px`, `768px`, `1024px`, and `1280px`.
  - Responsive base utilities include `grid-cols-1`, `grid-cols-2`, `grid-cols-3`, `grid-cols-4`, `grid-cols-5`, `grid-cols-6`, `grid-cols-12`, `flex`, `inline-flex`, flex direction, flex wrap, justify, items, `flex-1`, and `flex-none`.
- Selector inventory evidence:
  - Selector inventory represents `648` utility-defined classes.
  - Current selector inventory represents `0` colon-prefixed responsive utility classes.
  - Source-defined escaped responsive selectors remain compatibility-sensitive despite the inventory representation gap.
- Docs evidence:
  - `doc-raw/vds-utilities.doc.html` has `1182` lines.
  - Raw docs mention responsive behavior, breakpoints, and the `sm:`, `md:`, `lg:`, and `xl:` prefixes.
  - Raw docs do not use responsive-prefixed classes in `class` attributes in the read-only scan.
  - Raw docs state responsive prefixes follow mobile-first behavior, while source grid/flex prefix blocks are `max-width` based.
  - Generated `@24vlh/agents/docs_vds/components/vds-utilities.json` currently has empty `source_css`.
- Adjacent mobile evidence:
  - Source defines `.safe-area` using `env(safe-area-inset-*)`.
  - Raw utility docs mention safe-area `0` times.

## 5. Proposed Architecture or Change

### Responsive utility contract

- No source CSS, selector, token, raw-doc, package, selector-inventory, consumer-report, or generated-output changes.
- Treat current source behavior as compatibility-sensitive source truth.
- Treat responsive grid/flex prefixed classes as source-defined runtime selectors even though the current selector inventory does not expose them as colon-prefixed class names.
- Treat raw-doc “mobile-first” wording as a documentation mismatch, not a source policy change.
- Treat visibility helpers, layout-grid collapse helpers, and responsive grid/flex classes as separate responsive surfaces that must be classified independently before cleanup.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/foundation/vds-utility-responsive-variants-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1260` and set next recommended item to `VDS-1270`.
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
  - None for package consumers in this item. Later responsive utility behavior, breakpoint naming, selector inventory, docs guidance, or migration cleanup may need migration notes.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future responsive changes must preserve keyboard access and focus visibility for overflow/layout changes.
- Semantics or ARIA:
  - No runtime behavior changes. Responsive utilities remain visual helpers; semantic meaning remains in consumer markup.
- Reduced motion:
  - No runtime behavior changes.
- Forced colors or contrast:
  - No runtime behavior changes.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Current responsive behavior must be evaluated against the `VDS-0070` viewport matrix before any future cleanup.
  - Current source behavior wins over raw-doc wording where docs and CSS disagree.
- Theme coverage:
  - No theme values change.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:dist`
  - `pnpm run audit:consumers`
- Responsive utility scan:
  - Record media query line numbers and query conditions.
  - Record show/hide helper ranges.
  - Record `.layout-grid-inner-*` collapse behavior.
  - Record responsive prefixed selector totals by prefix and family.
  - Record selector inventory representation gaps.
  - Record raw-doc responsive guidance and generated metadata gaps.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only. If it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Planning sanity checks:
  - Confirm master map, feature plan, and responsive utility artifact agree that no CSS, docs, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1270`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting responsive utility behavior before cleanup.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later responsive behavior changes or deprecations may require migration notes.

## 10. Risks

- Raw docs say responsive prefixes are mobile-first, while source grid/flex prefixed classes are `max-width` based.
- Visibility helpers use mixed breakpoint logic: mobile max-width, tablet bounded range, and desktop min-width.
- There is an apparent gap between `768px` and `1024px` where no show/hide helper applies.
- Current selector inventory does not expose escaped responsive source selectors as colon-prefixed class names.
- Raw docs mention responsive prefixes but do not use responsive-prefixed classes in class attributes in the read-only scan.
- `.layout-grid-inner-*` responsive collapse overlaps conceptually with layout system behavior and atomic grid utilities.
- `.safe-area` exists in source but is not documented in the utility raw docs.
- Changing max-width responsive behavior to mobile-first semantics would be breaking without migration planning.

## 11. Open Questions

- Should responsive utility prefixes be documented as max-width legacy-compatible helpers, converted to mobile-first helpers, or replaced by a new naming scheme? Deferred to later approved cleanup/migration work.
- Should selector inventory represent escaped responsive selectors as public/candidate-public colon-prefixed class names? Deferred to selector inventory follow-up.
- Should show/hide helpers keep their current ranges or be redesigned around the `VDS-0070` viewport matrix? Deferred to later responsive cleanup.
- Should `.safe-area` be part of responsive utility docs or accessibility helper docs? Deferred to `VDS-1270` and docs rewrite work.

## 12. Approval

- Requested on: `2026-05-24`
- Approved by: user
- Approved on: `2026-05-24`

## 13. Implementation Log

- `2026-05-24`: Created this plan file.
- `2026-05-24`: Added responsive utility audit artifact.
- `2026-05-24`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1260` and set next recommended item to `VDS-1270`.
- `2026-05-24`: Ran/read a read-only responsive utility scan. Summary: `src/components/utilities.css` has `12` media blocks; visibility helpers cover mobile, tablet, and desktop ranges; `.layout-grid-inner-2` and `.layout-grid-inner-3` collapse at `max-width: 768px`; source contains `112` escaped responsive selectors with `28` each for `sm`, `md`, `lg`, and `xl`; responsive selectors split into `28` grid and `84` flex selectors; selector inventory exposes `0` colon-prefixed responsive classes; raw docs mention responsive prefixes but do not use prefixed classes in class attributes; generated docs metadata has empty `source_css`.

## 14. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed: generated artifacts are fresh with `80` CSS files checked.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-1260` forbids write/regeneration commands.
  - Read-only responsive utility scan completed.
  - VDS-1260 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1260-utility-responsive-variants-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-utility-responsive-variants-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None planned; utility accessibility helper review continues in `VDS-1270`.
