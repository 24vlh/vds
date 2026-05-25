# VDS-2310 Tooltips and Popovers Component Audit

- Status: `done`
- Last updated: `2026-05-25`
- Master item: `VDS-2310`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2310-tooltips-popovers-component-audit.md`

## 1. Goal

Create the tooltips/popovers component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only contract: tooltip triggers, non-interactive tooltip surfaces, popover anchors, interactive popover shells, placement modifiers, arrow controls, density variants, semantic variants, open/visible state hooks, docs/index metadata, package-facing dist presence, and accessibility/theming/motion/responsive risks before any tooltip/popover CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/tooltips-popovers.css` selector, local variable, trigger, tooltip, popover, placement, arrow, density, semantic, open-state, motion, theme, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the tooltip/popover class surface.
- Record raw docs and generated docs-index metadata for `vds-tooltips-popovers`.
- Record package-facing `dist/components/tooltips-popovers.css` and `.min.css` presence.
- Add a tooltip/popover component audit artifact for later tooltip/popover CSS fixes, docs rewrite, selector classification, APG/ARIA guidance, trigger/dismiss/touch policy, positioning/portal guidance, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2310` is done, and the next recommended item is `VDS-2320 Typography component audit`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding trigger behavior, collision-aware positioning, portal mounting, focus management, Escape/outside-click dismissal, touch fallback, ARIA synchronization, accessibility smoke tests, visual checks, selector reclassification, docs rewrites, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-tooltips-popovers.json`
- Repo files:
  - `@24vlh/vds/src/components/tooltips-popovers.css`
  - `@24vlh/vds/doc-raw/vds-tooltips-popovers.doc.html`
  - `@24vlh/vds/dist/components/tooltips-popovers.css`
  - `@24vlh/vds/dist/components/tooltips-popovers.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/tooltips-popovers.css` has `473` lines.
- Selector blocks: `59`.
- Expanded selectors: `67`.
- Declarations: `213`.
- Local custom property declaration lines: `19`.
- Unique local custom property names: `17`.
- `var(...)` references: `126`.
- `!important` declarations: `0`.
- Hard-coded hex/rgb color references: `0`.
- `color-mix(...)` uses: `0`.

State and motion evidence:

- `:hover` selector matches: `0`.
- `:focus-visible` selector matches: `0`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled selector matches: `0`.
- Open/visible state matches: `13`.
- Hidden selector matches: `0`.
- Dismiss/close selector matches: `0`.
- Transition declarations: `2`.
- Transform declarations: `34`.
- Animation declarations: `0`.
- `@keyframes`: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Responsive and layout evidence:

- Media blocks: `0`.
- Container queries: `0`.
- Flex display declarations: `2`.
- Inline-flex display declarations: `1`.
- Grid display declarations: `0`.
- Gap declarations: `1`.
- Overflow declarations: `0`.
- Position declarations: `6`.
- Z-index declarations: `2`.
- Width declarations: `2`.
- Max-width declarations: `2`.
- Height declarations: `2`.
- Pointer-events declarations: `4`.

Package-facing output evidence:

- `@24vlh/vds/dist/components/tooltips-popovers.css` exists.
- `@24vlh/vds/dist/components/tooltips-popovers.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/tooltips-popovers.css`.
- `@24vlh/vds/src/core.css` does not import tooltips/popovers.

## 5. Component Contract

Current tooltip/popover source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Tooltip trigger | `.tooltip-trigger` | inline-flex positioning context for tooltip anchors |
| Tooltip base | `.tooltip` | absolute-positioned non-interactive micro-surface |
| Tooltip placement | `.tooltip--top`, `.tooltip--bottom`, `.tooltip--left`, `.tooltip--right`, corner variants | physical placement and transform offsets |
| Tooltip arrow | `.tooltip__arrow`, `.tooltip--no-arrow` | inherited arrow box and arrow removal |
| Tooltip density | `.tooltip--a`, `.tooltip--c` | relaxed and compact tooltip sizing |
| Tooltip semantic variants | `.tooltip--info`, `.tooltip--success`, `.tooltip--warning`, `.tooltip--danger` | semantic surface/text/border mapping |
| Tooltip state | `.tooltip--visible`, `.tooltip[data-state="open"]`, `.tooltip--interactive` | visible/open and pointer-interactive hooks |
| Popover anchor | `.popover-anchor` | positioning context for popover surfaces |
| Popover base | `.popover` | absolute-positioned interactive surface shell |
| Popover placement | `.popover--top`, `.popover--bottom`, `.popover--left`, `.popover--right`, corner variants | physical placement and transform offsets |
| Popover arrow | `.popover__arrow`, `.popover--no-arrow` | inherited arrow box and arrow removal |
| Popover layout | `.popover__header`, `.popover__body`, `.popover__footer`, `.popover__title` | internal popover content structure |
| Popover density | `.popover--a`, `.popover--c` | relaxed and compact popover spacing |
| Popover semantic variants | `.popover--info`, `.popover--success`, `.popover--warning`, `.popover--danger` | semantic surface/text/border mapping |
| Popover state | `.popover--open`, `.popover[data-state="open"]` | open and pointer-interactive hooks |

Source interpretation:

- `@24vlh/vds/src/components/tooltips-popovers.css` is the source truth for current tooltip/popover CSS behavior.
- Tooltip/popover CSS owns visual/placement/state hooks for anchored micro-surfaces, arrows, density, semantic variants, and open/visible state.
- CSS does not own trigger behavior, positioning collision logic, portal mounting, focus management, Escape/outside-click dismissal, touch fallback, or ARIA synchronization.
- Existing tooltip/popover selectors, local variables, placement hooks, arrow behavior, semantic variants, density variants, open/visible hooks, docs examples, and package-facing outputs are compatibility-sensitive.

Source/docs mismatch:

- Source comments mention reduced-motion and focus-visible behavior.
- Current source has no file-local reduced-motion block and no `:focus-visible` selectors.
- Raw docs mention focus-visible guidance for triggers, but trigger focus styling is owned by trigger elements/components, not this CSS file.
- This item records the mismatch only; it does not add CSS or docs behavior.

## 6. Token and Local Variable Surface

Tooltip local custom properties:

- `--tooltip-offset`
- `--tooltip-motion`
- `--tooltip-max-width`
- `--tooltip-arrow-size`
- `--tooltip-arrow-inset`
- `--tooltip-bg`
- `--tooltip-border`
- `--tooltip-text`

Popover local custom properties:

- `--popover-offset`
- `--popover-motion`
- `--popover-min-width`
- `--popover-max-width`
- `--popover-arrow-size`
- `--popover-arrow-inset`
- `--popover-bg`
- `--popover-border`
- `--popover-text`

Audit conclusions:

- Tooltip and popover local variables cover offsets, motion displacement, sizing, arrow sizing/inset, and surface/text/border values.
- Semantic variants rely on semantic theme tokens and may inherit contrast risks from prior audits.
- No local variable, token reference, placement hook, arrow hook, density variant, semantic variant, or open-state hook is approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

Selector inventory totals:

- Tooltip/popover-source classes: `43`.
- Public classes: `34`.
- Candidate-public classes: `9`.

Candidate-public classes:

- `.popover--danger`
- `.popover--left`
- `.popover--right`
- `.popover--success`
- `.popover--top`
- `.popover--top-left`
- `.popover--top-right`
- `.popover--warning`
- `.tooltip--interactive`

Audit conclusions:

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- Candidate-public tooltip/popover selectors are source-defined and remain compatibility-sensitive.
- Popover semantic and placement candidates should not be pruned without migration approval, even when docs emphasize other placements.
- Future selector pruning, placement API changes, or reclassification requires migration approval.

## 8. Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-tooltips-popovers.doc.html` has `833` lines.
- Docs cover installation/dependencies, tooltip/popover anatomy, tooltip positions and semantic variants, corner placements, arrow control, popover menus and filter panels, accessibility rules, ARIA roles, trigger-to-surface connections, and open-state guidance.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-tooltips-popovers.json`
- Blocks: `6`.
- Code examples: `6`.
- Generated class tokens: `61`.
- Generated `source_css`: `base.css`, `layout.css`, `tooltips-popovers.css`, and `typography.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `tooltip` | `160` |
| `popover` | `124` |
| `popovers` | `16` |
| `trigger` | `22` |
| `arrow` | `43` |
| `placement` | `3` |
| `position` | `6` |
| `open` | `25` |
| `active` | `11` |
| `visible` | `20` |
| `hover` | `2` |
| `focus` | `5` |
| `focus-visible` | `2` |
| `keyboard` | `3` |
| `escape` | `0` |
| `dismiss` | `0` |
| `click` | `0` |
| `touch` | `0` |
| `mobile` | `0` |
| `responsive` | `0` |
| `aria` | `43` |
| `aria-describedby` | `4` |
| `aria-expanded` | `8` |
| `aria-controls` | `8` |
| `role` | `31` |
| `dialog` | `15` |
| `label` | `26` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |
| `contrast` | `0` |
| `z-index` | `0` |
| `portal` | `0` |
| `anchor` | `12` |
| `floating` | `0` |

Docs coverage and gaps:

- Raw docs cover `role="tooltip"`, `aria-describedby`, `role="dialog"` / `role="menu"`, `aria-haspopup`, `aria-expanded`, `aria-controls`, `aria-modal="false"`, open state via `data-state="open"` / `.tooltip--visible` / `.popover--open`, focusable triggers, keyboard reachability, non-interactive tooltip guidance, and popover menu/filter examples.
- Raw docs do not mention Escape, dismiss, click, touch, mobile/responsive behavior, reduced-motion, forced-colors, contrast, portal mounting, or z-index directly.
- Generated metadata includes `tooltips-popovers.css`; no manual generated-index edit is approved in this item.

## 9. Accessibility, Runtime, and Behavior Boundaries

Consumer/application code owns:

- Trigger semantics, focusability, accessible names, and visible trigger focus.
- `aria-describedby`, `aria-expanded`, `aria-controls`, `aria-haspopup`, and any dialog/menu role synchronization.
- Open/close state, delayed show/hide, hover/focus/click/touch policy, and state toggling.
- Focus management inside interactive popovers.
- Escape and outside-click dismissal.
- Collision-aware positioning, viewport fitting, portal/mount strategy, and stacking context.
- Touch fallback and mobile behavior.
- Interactive popover keyboard behavior and menu/dialog semantics.

Accessibility interpretation:

- Tooltips must remain non-interactive; interactive content belongs in popovers.
- `.tooltip--interactive` is a compatibility-sensitive source hook, but it carries risk and should be reviewed before future guidance changes.
- Tooltip/popover CSS can expose visible/open states, but cannot make content discoverable to keyboard or assistive-technology users by itself.
- Popovers using `role="menu"` or `role="dialog"` require consumer-owned keyboard and focus behavior.

Audit conclusions:

- Tooltip/popover CSS is compatibility-sensitive because it exposes placement, arrow, state, and semantic hooks used by docs examples and consumers.
- Source CSS wins over docs where docs describe runtime behavior not implemented by CSS.
- Actual trigger, focus, dismissal, positioning, portal, touch, and ARIA behavior remains later implementation/docs work.

## 10. Responsive, Motion, and Forced-Colors Evidence

Responsive source behavior:

- Source has no media blocks.
- Source has no container queries.
- Source has no touch or mobile-specific fallback rules.

Motion source behavior:

- Tooltip and popover base styles transition opacity and transform.
- Open state sets `--tooltip-motion` / `--popover-motion` to `0rem`.
- Source has no file-local reduced-motion block.
- Source has no animations or keyframes.

Forced-colors evidence:

- Source has `0` forced-colors blocks.
- Raw docs mention forced-colors `0` times.

Audit conclusions:

- Placement, transform, and arrow behavior are source truth and should not be renamed or inverted without migration approval.
- Lack of reduced-motion handling conflicts with the source header comment and is an audit finding only.
- Lack of mobile/touch, forced-colors, contrast, and collision handling is an audit finding only.

## 11. Risks and Future Routing

- Tooltip/popover behavior is runtime-heavy; CSS cannot provide collision-aware positioning, portal mounting, focus management, dismissal, touch fallback, or ARIA synchronization.
- `.tooltip--interactive` may blur the tooltip/popover boundary and should be reviewed before future docs or selector cleanup.
- Physical placement classes can overflow viewport without runtime collision handling.
- Popover z-index uses `--z-tooltip`, so layering with overlays, command, header, and toast surfaces should be reviewed before cleanup.
- Source comments mention reduced-motion/focus-visible behavior not implemented in this file.
- Semantic variants inherit theme contrast risks from prior audits.
- Forced-colors and mobile/touch coverage are absent.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Tooltip/popover CSS fixes or selector cleanup: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Selector classification: later approved selector inventory/docs item.
- ARIA, trigger, dismissal, focus, touch, and portal guidance: later approved accessibility/docs item.
- Theme/contrast, reduced-motion, forced-colors, positioning collision, and responsive screenshots: later approved visual integrity item.

## 12. Public Interfaces

- No runtime CSS APIs change.
- No CSS, raw docs, generated docs index, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-tooltips-popovers-component-audit.md` becomes the decision source for later tooltip/popover CSS fixes, docs rewrite, selector classification, APG/ARIA guidance, trigger/dismiss/touch policy, positioning/portal guidance, motion/forced-colors cleanup, theme/contrast checks, migration notes, and release verification.

## 13. Validation Plan

Approved validation commands:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
- Read-only tooltip/popover audit scan.
- Markdown sanity checks for master-map status, artifact path, no runtime/source/generated changes, and next recommended item.
- `git diff --check` for changed planning files.

Forbidden commands for this item:

- `pnpm run build`
- `pnpm run build:prod`
- `pnpm run docs:vds:index`
- `pnpm run inventory:selectors`
- `pnpm run consumer:scan`

## 14. Post-Implementation Validation Log

- `pnpm run audit:tokens` passed: token usage audit passed for `43` files.
- `pnpm run audit` passed: CSS parse, class, token, doc dependency, and selector inventory freshness checks passed.
- `pnpm run audit:dist` was attempted with a `120s` timeout. It started `node static/js/check-generated-artifacts.js --check` but did not complete before timing out. No write/regeneration command was run.
- `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale; per plan, `pnpm run consumer:scan` was not run.
- Read-only tooltip/popover audit scan confirmed CSS counts, local variables, selector inventory totals, docs/index evidence, import/package evidence, trigger/tooltip/popover/placement/arrow/density/semantic/open-state evidence, ARIA/runtime boundaries, responsive/touch/reduced-motion/forced-colors gaps, and dist presence.
- Markdown sanity checks passed for master-map status, `VDS-0500` in-progress status, artifact path, no runtime/source/generated/inventory/consumer-report changes, and next recommended item.
- `git diff --check` for changed planning files passed.
