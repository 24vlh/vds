# VDS Action Bar Component Audit

Last updated: `2026-05-24`

Source item: `VDS-2020`

This file records the action bar component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/action-bar.css` is the source truth for current action bar CSS behavior.
- `@24vlh/vds/doc-raw/vds-action-bar.doc.html` and `@24vlh/agents/docs_vds/components/vds-action-bar.json` are docs/index evidence.
- The current implementation is a pure CSS grouping and layout surface for bulk actions.
- Consumer/application code owns selection state, selection-count updates, `aria-live` announcements, destructive-action confirmation, button semantics, icon-only accessible names, roving tabindex if used, and focus management.
- Existing action bar classes, variants, sticky/floating/stacked behavior, responsive collapse behavior, and `--action-bar-*` variables are compatibility-sensitive.
- No selector rewrite, docs rewrite, APG toolbar JavaScript behavior, or generated output refresh happens in `VDS-2020`.

## Source CSS Evidence

`@24vlh/vds/src/components/action-bar.css` currently has:

- Lines: `157`.
- Selector blocks: `16`.
- Expanded selectors: `17`.
- Declarations: `80`.
- Custom property declarations: `26`.
- Unique `--action-bar-*` local token names: `18`.
- `var(...)` references: `49`.
- `!important` declarations: `0`.
- Hard-coded hex colors: `0`.
- `rgb(...)` / `rgba(...)` colors: `0`.

Media blocks:

- `(max-width: 768px)`

Layout, state, and interaction evidence:

- `position: sticky` declarations: `1`.
- `z-index` declarations: `1`.
- `flex-wrap` declarations: `3`.
- `width: 100%` declarations: `2`.
- `overflow` declarations: `0`.
- `:focus-visible` selectors: `0`.
- `:focus-within` selectors: `0`.
- `:hover` selectors: `0`.
- `:active` selectors: `0`.
- Disabled selector matches: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

## Component Contract

Current action bar source surfaces:

- Root/local-token scopes:
  - `[data-vds-action-bar]`
  - `.vds-action-bar`
- Main structure:
  - `.action-bar`
  - `.action-bar__meta`
  - `.action-bar__count`
  - `.action-bar__actions`
  - `.action-bar__dismiss`
- Variants:
  - `.action-bar--compact`
  - `.action-bar--sticky`
  - `.action-bar--floating`
  - `.action-bar--stacked`

Source interpretation:

- `.action-bar` is a flexible row wrapper that wraps by default.
- `.action-bar__meta` owns the count/context slot.
- `.action-bar__actions` owns the action cluster and aligns to the end through `margin-left: auto`.
- `.action-bar__dismiss` is an optional dismiss/clear affordance that also uses `margin-left: auto`.
- `.action-bar--compact` tightens padding, gaps, and count sizing through local variable overrides.
- `.action-bar--sticky` keeps the bar visible at the bottom of a scroll container using the sticky z-index token.
- `.action-bar--floating` changes depth treatment by using a stronger shadow and transparent border.
- `.action-bar--stacked` and the `max-width: 768px` media block switch the bar to a vertical/full-width action layout.

## Local Token Surface

Current `--action-bar-*` local token names:

| Token | Role |
| --- | --- |
| `--action-bar-actions-gap` | action cluster gap |
| `--action-bar-bg` | bar surface |
| `--action-bar-border` | bar border color |
| `--action-bar-count-bg` | count badge surface |
| `--action-bar-count-font-size` | count badge text size |
| `--action-bar-count-font-weight` | count badge text weight |
| `--action-bar-count-height` | count badge minimum size |
| `--action-bar-count-pad-x` | count badge inline padding |
| `--action-bar-count-text` | count badge text color |
| `--action-bar-floating-shadow` | floating variant shadow |
| `--action-bar-gap` | root gap |
| `--action-bar-meta-color` | meta text color |
| `--action-bar-meta-gap` | meta slot gap |
| `--action-bar-pad-x` | root inline padding |
| `--action-bar-pad-y` | root block padding |
| `--action-bar-radius` | root radius |
| `--action-bar-shadow` | default shadow |
| `--action-bar-sticky-offset` | sticky bottom offset |

Audit conclusions:

- Local tokens are component-owned aliases.
- They pull from primitive spacing, radius, typography, z-index, and theme surface/border/accent/text/shadow tokens.
- They are not approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Public and documented action bar source classes:

| Class | Classification | Source | Docs |
| --- | --- | --- | --- |
| `.action-bar` | `public` | `action-bar.css` | `vds-action-bar.doc.html` |
| `.action-bar__actions` | `public` | `action-bar.css` | `vds-action-bar.doc.html` |
| `.action-bar__count` | `public` | `action-bar.css` | `vds-action-bar.doc.html` |
| `.action-bar__dismiss` | `public` | `action-bar.css` | `vds-action-bar.doc.html` |
| `.action-bar__meta` | `public` | `action-bar.css` | `vds-action-bar.doc.html` |
| `.action-bar--compact` | `public` | `action-bar.css` | `vds-action-bar.doc.html` |
| `.action-bar--floating` | `public` | `action-bar.css` | `vds-action-bar.doc.html` |
| `.action-bar--stacked` | `public` | `action-bar.css` | `vds-action-bar.doc.html` |
| `.action-bar--sticky` | `public` | `action-bar.css` | `vds-action-bar.doc.html` |

Audit conclusions:

- The action bar source class surface is fully public in the current selector inventory.
- No action bar source class is currently candidate-public or private.
- Variant and element classes are package-facing compatibility surfaces through `vds.css` and standalone component dist output.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-action-bar.doc.html` has `276` lines.
- Docs cover action bars, compact density, stacked layout, sticky/floating bars, usage patterns, best practices, and accessibility rules.
- Docs use examples with `.action-bar`, `.action-bar__meta`, `.action-bar__count`, `.action-bar__actions`, `.action-bar__dismiss`, and the compact/stacked/sticky/floating modifiers.

Term evidence:

| Term | Mentions |
| --- | ---: |
| `action` | `90` |
| `bulk` | `3` |
| `selected` | `8` |
| `selection` | `10` |
| `count` | `11` |
| `dismiss` | `11` |
| `clear` | `11` |
| `keyboard` | `1` |
| `focus` | `3` |
| `aria` | `5` |
| `aria-live` | `1` |
| `role` | `1` |
| `toolbar` | `1` |
| `roving` | `1` |
| `tabindex` | `1` |
| `destructive` | `1` |
| `confirmation` | `1` |
| `sticky` | `6` |
| `floating` | `5` |
| `stacked` | `6` |
| `compact` | `6` |
| `overflow` | `1` |
| `mobile` | `2` |
| `drawer` | `2` |
| `disabled` | `0` |
| `loading` | `0` |
| `responsive` | `0` |
| `touch` | `0` |

Generated index:

- `@24vlh/agents/docs_vds/components/vds-action-bar.json`
- Blocks: `6`.
- Code examples: `4`.
- Generated `source_css`: `[]`.
- Generated class tokens include action bar classes plus docs presentation helpers such as `button`, `button--primary`, `button--ghost`, `doc-block__preview`, `section__stack`, `text-muted`, `radius-lg`, `border`, and spacing utilities.

Audit conclusions:

- The generated index currently omits `action-bar.css` from `source_css`.
- Empty `source_css` is a docs-index metadata gap and must not be fixed by hand in this item.
- Later docs rewrite should separate runtime action bar dependencies from docs presentation dependencies.

## APG Toolbar Alignment

WAI-ARIA APG toolbar reference records:

- A toolbar groups controls such as buttons, menu buttons, or checkboxes.
- `role="toolbar"` can communicate the grouping and reduce tab stops when focus management is implemented.
- Toolbars need an accessible label through `aria-label` or `aria-labelledby`.
- Horizontal toolbars use Left/Right Arrow for movement when roving focus is implemented.
- Home and End movement are optional.
- APG recommends toolbar semantics primarily when a group contains three or more controls and reduced tab stops are beneficial.

Current VDS interpretation:

- VDS Action Bar currently provides CSS layout only.
- Plain grouped buttons do not require `role="toolbar"`.
- If consumers add `role="toolbar"` or roving tabindex, they must also implement the corresponding keyboard behavior and labeling.
- Selection count updates, live-region announcements, destructive confirmation, and focus movement are application responsibilities.

Audit conclusion:

- The current implementation should be documented as a CSS action grouping surface first, with APG toolbar guidance used only when consumers choose toolbar semantics.

## Dist and Package-Facing Evidence

Current checked-in dist files:

- `@24vlh/vds/dist/components/action-bar.css`
- `@24vlh/vds/dist/components/action-bar.min.css`

Evidence:

- `dist/components/action-bar.css` exists and currently has `158` lines.
- `dist/components/action-bar.min.css` exists and is non-empty.
- `src/index.css` imports `components/action-bar.css`.

Audit conclusions:

- Action bar has package-facing standalone component output.
- No generated `dist` file is changed in `VDS-2020`.
- If future action bar source CSS changes while generated output is out of scope, implementation logs must record `dist refresh pending`.

## Current Risks

- Focus, disabled, loading, danger/destructive, and icon-only states are delegated to child controls and consumer markup.
- Sticky action bars can overlap nearby content depending on scroll container, footer, and placement.
- Source has no overflow handling beyond flex wrapping and responsive stacking.
- Source has no file-local focus-visible, forced-colors, reduced-motion, disabled, loading, or destructive-state selectors.
- Docs include accessibility and destructive-action guidance that CSS does not enforce.
- Docs warn against hover-only menus, but source has no menu behavior; this remains consumer behavior guidance.
- Generated `source_css` metadata is empty, which can weaken later docs ownership checks.
- Docs examples mix runtime component classes with docs presentation, button, and utility dependencies.

## Audit Rules for Later Action Bar Work

- Do not rename, remove, or reclassify action bar selectors without later approved migration work.
- Do not rename, remove, or deprecate `--action-bar-*` local variables without token and migration review.
- Do not change sticky/floating/stacked/compact variant behavior without responsive and visual review.
- Do not add toolbar semantics without documenting and testing the required keyboard behavior.
- Do not change destructive-action guidance without coordinating confirmation patterns and docs rewrite work.
- Do not change responsive stacking behavior without responsive screenshots and migration notes.
- If action bar source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-2030` and later component audits should continue separating source CSS truth from docs/index evidence.
- Action bar implementation work should evaluate focus, forced-colors, overflow, sticky overlap, and responsive refinements.
- Docs rewrite work should clarify bulk-action selection state, `aria-live` guidance, destructive confirmation, toolbar semantics, and child button dependency boundaries.
- Accessibility work should review visible focus, icon-only names, live selection-count announcements, keyboard behavior, and destructive-action flows.
- Responsive QA should review compact, stacked, sticky, and floating bars in narrow panels, mobile drawers, and scroll containers.
- Theme/contrast work should review count badge contrast, action bar surface/border/shadow separation, and sticky/floating treatments across all themes.

## Public Interfaces and Compatibility

- Existing selectors preserved:
  - All action bar selectors remain unchanged.
- New selectors:
  - None.
- Deprecated selectors:
  - None in this item.
- Breaking changes:
  - None in CSS, selectors, tokens, custom property names, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, or package version fields.
- Migration notes:
  - No migration is required for `VDS-2020`.
