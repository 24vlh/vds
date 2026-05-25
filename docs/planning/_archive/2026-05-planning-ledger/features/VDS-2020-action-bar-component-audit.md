# VDS-2020 Action Bar Component Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2020`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2020-action-bar-component-audit.md`

## 1. Goal

Create the action bar component audit for the `VDS-0500 Component Modernization Wave`. This item records the current action bar CSS contract, public selector surface, local token surface, bulk-action semantics, sticky/floating/stacked/compact behavior, responsive behavior, docs/index metadata, APG toolbar alignment, and risks before any action bar fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/action-bar.css` selector, token, layout, responsive, sticky, and variant evidence.
- Record public selector inventory evidence for the action bar class surface.
- Record raw docs and generated docs-index metadata for `vds-action-bar`.
- Record APG toolbar alignment separately from the current CSS-only action bar implementation.
- Record package-facing `dist/components/action-bar.css` and `.min.css` presence.
- Add an action bar component audit artifact for later CSS fixes, docs rewrite, accessibility review, responsive QA, theme/contrast checks, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2020` is done, and the next recommended item is `VDS-2030`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding focus, disabled, loading, danger/destructive, overflow, forced-colors, reduced-motion, or JavaScript behavior.
- Adding APG toolbar roving-tabindex behavior or changing docs examples.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local standards docs:
  - `@24vlh/agents/docs_md/design/patterns/toolbar.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-action-bar.json`
- Repo files:
  - `@24vlh/vds/src/components/action-bar.css`
  - `@24vlh/vds/doc-raw/vds-action-bar.doc.html`
  - `@24vlh/vds/dist/components/action-bar.css`
  - `@24vlh/vds/dist/components/action-bar.min.css`
  - `@24vlh/vds/src/index.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/action-bar.css` has `157` lines.
- Selector blocks: `16`.
- Expanded selectors: `17`.
- Declarations: `80`.
- Custom property declarations: `26`.
- Unique `--action-bar-*` local token names: `18`.
- `var(...)` references: `49`.
- `!important` declarations: `0`.
- Hard-coded hex colors: `0`.
- `rgb(...)` / `rgba(...)` colors: `0`.
- Media blocks:
  - `(max-width: 768px)`

Layout, state, and interaction evidence:

- `[data-vds-action-bar]` appears as a root/local-token scope.
- `.vds-action-bar` appears as a root/local-token scope.
- `.action-bar` is a flex wrapper with wrapping enabled.
- `.action-bar--sticky` uses `position: sticky`, `bottom: var(--action-bar-sticky-offset)`, and `z-index: var(--z-sticky)`.
- `.action-bar--floating` removes visible border color and uses `--action-bar-floating-shadow`.
- `.action-bar--stacked` changes the bar to a vertical layout and stretches actions to full width.
- The `max-width: 768px` media block stacks all `.action-bar` instances, stretches alignment, and sets `.action-bar__actions` to full width.
- `:focus-visible` selectors: `0`.
- `:focus-within` selectors: `0`.
- `:hover` selectors: `0`.
- `:active` selectors: `0`.
- Disabled selector matches: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.
- Overflow declarations: `0`.

Package-facing output evidence:

- `@24vlh/vds/dist/components/action-bar.css` exists and has `158` lines.
- `@24vlh/vds/dist/components/action-bar.min.css` exists and is non-empty.
- `@24vlh/vds/src/index.css` imports `components/action-bar.css`.

## 5. Local Token Surface

Action bar local tokens currently defined:

- `--action-bar-actions-gap`
- `--action-bar-bg`
- `--action-bar-border`
- `--action-bar-count-bg`
- `--action-bar-count-font-size`
- `--action-bar-count-font-weight`
- `--action-bar-count-height`
- `--action-bar-count-pad-x`
- `--action-bar-count-text`
- `--action-bar-floating-shadow`
- `--action-bar-gap`
- `--action-bar-meta-color`
- `--action-bar-meta-gap`
- `--action-bar-pad-x`
- `--action-bar-pad-y`
- `--action-bar-radius`
- `--action-bar-shadow`
- `--action-bar-sticky-offset`

Audit conclusions:

- Action bar uses component-local aliases for surface, border, shadow, radius, gap, padding, count, and sticky offset values.
- Local aliases are currently compatibility-sensitive and must not be renamed or removed without later migration approval.
- Local token values are sourced from primitive spacing/radius/z-index tokens and theme surface, border, accent, text, and shadow tokens.

## 6. Selector/API Evidence

Selector inventory evidence:

- `9` action bar source classes are public, defined, and documented.
- No action bar source class is currently candidate-public or private in the selector inventory.

Public action bar source classes:

- `.action-bar`
- `.action-bar__actions`
- `.action-bar__count`
- `.action-bar__dismiss`
- `.action-bar__meta`
- `.action-bar--compact`
- `.action-bar--floating`
- `.action-bar--stacked`
- `.action-bar--sticky`

Audit conclusions:

- The action bar class surface is fully public in the current selector inventory.
- Variant classes are public compatibility surfaces and must not be renamed, removed, inverted, or reclassified casually.
- Focus, disabled, loading, danger/destructive, and icon-only states are delegated to child controls and consumer markup rather than action-bar-specific selectors.

## 7. Docs and Generated Index Evidence

Raw docs evidence:

- `@24vlh/vds/doc-raw/vds-action-bar.doc.html` has `276` lines.
- Raw docs cover bulk actions, selection counts, dismiss/clear controls, compact density, stacked layout, sticky/floating treatments, destructive-action confirmation guidance, and accessibility usage rules.
- Raw docs mention keyboard/focus/ARIA guidance, `aria-live="polite"`, optional `role="toolbar"` with roving tabindex, icon-only labels, and avoiding focus traps.

Term evidence:

| Term | Mentions |
| --- | ---: |
| `action` | `90` |
| `selection` | `10` |
| `selected` | `8` |
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
| `responsive` | `0` |
| `touch` | `0` |
| `disabled` | `0` |
| `loading` | `0` |

Generated index evidence:

- `@24vlh/agents/docs_vds/components/vds-action-bar.json`
- Blocks: `6`.
- Code examples: `4`.
- Generated `source_css`: `[]`.
- Generated class tokens include action bar classes plus docs presentation helpers such as button, doc-block, section, text, radius, border, and surface utility classes.

Docs/source interpretation:

- `action-bar.css` is the component source.
- Empty generated `source_css` metadata is a docs-index metadata gap, not an approved generated-index fix in this item.
- CSS remains source truth where docs and source behavior diverge.

## 8. APG and Accessibility Alignment

Current implementation stance:

- Action bar is a pure CSS grouping and layout surface.
- It has no JavaScript behavior, roving tabindex, ARIA state synchronization, selection model, live region, or destructive-action confirmation behavior.
- Actions should be real buttons or links supplied by consumer/application markup.

WAI-ARIA APG toolbar reference evidence:

- Toolbar semantics apply to a grouped set of controls when `role="toolbar"` is used.
- A toolbar needs an accessible label through `aria-label` or `aria-labelledby`.
- Roving focus, arrow-key movement, optional Home/End movement, and remembered focus are JavaScript/application responsibilities.
- APG recommends using toolbar semantics primarily when grouping three or more controls and reducing tab stops is beneficial.

Audit interpretation:

- Plain action bars with normal buttons may remain ordinary grouped controls.
- If consumers implement `role="toolbar"` or roving tabindex, they must also implement keyboard behavior and labeling consistent with APG toolbar guidance.
- CSS cannot implement APG toolbar keyboard behavior or synchronize selection/count announcements.

## 9. Current Risks

- Action bar focus, disabled, loading, danger/destructive, and icon-only states are delegated to buttons and consumer markup; future docs must keep that boundary clear.
- Sticky action bars can overlap nearby content depending on scroll container and placement.
- Source has no overflow handling beyond flex wrapping and responsive stacking.
- Source has no file-local forced-colors handling, focus styling, or reduced-motion handling.
- Lack of file-local forced-colors or focus styling is an audit finding only because child controls and global/button CSS may provide those states.
- Docs warn against more than `4-5` actions, hover-only menus, hidden dismiss controls, and destructive actions without confirmation; these are documentation/consumer behavior rules, not CSS-enforced behavior.
- Empty generated `source_css` metadata can weaken later docs ownership checks and should be routed to docs-index/docs rewrite work.
- Docs source metadata and examples mix runtime action bar classes with docs presentation/button utility dependencies.

## 10. Audit Rules for Later Action Bar Work

- Do not rename, remove, or reclassify action bar source classes without later approved migration work.
- Do not rename, remove, or deprecate `--action-bar-*` local variables without token and migration review.
- Do not add toolbar semantics without documenting the required consumer/application keyboard behavior.
- Do not change sticky behavior without responsive, overlay/z-index, and scroll-container review.
- Do not change destructive-action guidance without coordinating button semantics, confirmation patterns, and docs rewrite work.
- Do not change responsive stacking behavior without responsive screenshots and migration notes.
- If action bar source CSS changes while generated output is out of scope, record `dist refresh pending`.

## 11. Future Work Contract

- Component implementation work should evaluate whether action bar needs local focus, forced-colors, overflow, or responsive refinements.
- Docs rewrite work should separate runtime action bar guidance from docs presentation dependencies.
- Docs rewrite work should clarify when plain grouped buttons are enough versus when APG toolbar semantics are appropriate.
- Accessibility work should review visible focus, icon-only controls, keyboard behavior, selection announcements, and destructive-action flows.
- Responsive QA should review sticky/floating/stacked/compact action bars in narrow panels, mobile drawers, and scroll containers.
- Theme/contrast work should review count badge contrast, surface/shadow contrast, sticky overlap, and floating treatment across all themes.

## 12. Public Interfaces and Compatibility

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

## 13. Implementation Log

Files changed:

- Added `@24vlh/vds/docs/planning/features/VDS-2020-action-bar-component-audit.md`.
- Added `@24vlh/vds/docs/planning/components/vds-action-bar-component-audit.md`.
- Updated `@24vlh/vds/docs/planning/master-feature-map.md`.

Validation commands:

- `pnpm run audit:tokens`
  - Passed: token usage audit passed for `43` files.
- `pnpm run audit`
  - Passed: CSS parse, class usage, token usage, docs dependency, and selector inventory checks passed.
- `pnpm run audit:dist`
  - Passed: generated artifacts are fresh with `80` CSS files checked.
- `pnpm run audit:consumers`
  - Failed only because generated consumer compatibility reports are stale:
    - `docs/planning/api/vds-consumer-compatibility.json`
    - `docs/planning/api/vds-consumer-compatibility.md`
  - Per `VDS-2020` scope, `pnpm run consumer:scan` was not run.
- Read-only action bar audit scan:
  - Confirmed `157` source CSS lines, `16` selector blocks, `17` selectors, `80` declarations, `26` custom property declarations, `18` unique `--action-bar-*` tokens, `49` `var(...)` references, one `max-width: 768px` media block, `9` public action bar classes, `276` raw-doc lines, `6` generated docs blocks, `4` code examples, empty generated `source_css`, and package-facing dist file presence.
- Markdown sanity checks:
  - Passed: `VDS-2020` appears as `done`, `VDS-0500` remains `in-progress`, the action bar artifact path resolves, plan/artifact scope agrees that no runtime/generated files changed, and the next recommended item is `VDS-2030 Android shell component audit`.
- `git diff --check`
  - Passed for changed planning files.

Notes:

- No source CSS, raw docs, generated docs index, generated `dist`, package metadata, selector inventory, consumer report, workflow, npm tag, or version field was changed.
