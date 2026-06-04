# VDS Tabs Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-2290`

Next recommended item: `VDS-2300 Toasts component audit`

This file records the tabs component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/tabs.css` is the source truth for current tabs CSS behavior.
- `@24vlh/vds/doc-raw/vds-tabs.doc.html` and `@24vlh/agents/docs_vds/components/vds-tabs.json` are docs/index evidence.
- Current tabs CSS provides visual/layout hooks for tab lists, tabs, panels, active/hidden/disabled states, underline/pill/segmented variants, density and alignment modes, vertical orientation, icon-only tabs, icon/badge slots, scrollable tab lists, and responsive vertical collapse.
- Consumer/application code owns tab activation, `aria-selected`, `aria-controls`, `aria-labelledby`, `aria-disabled`, roving focus, keyboard behavior, panel visibility, focus movement, routing, loading state changes, and announcements.
- Existing tabs selectors, local variables, active/hidden/disabled hooks, density/alignment variants, pill/segmented styling, vertical orientation, scroll behavior, icon/badge slots, docs examples, and package-facing outputs are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, selector inventory update, or generated output refresh happens in `VDS-2290`.

## Source CSS Evidence

`@24vlh/vds/src/components/tabs.css` currently has:

- Lines: `398`.
- Selector blocks: `55`.
- Expanded selectors: `59`.
- Declarations: `162`.
- Local custom property declaration lines: `15`.
- Unique local custom property names: `15`.
- `var(...)` references: `110`.
- `!important` declarations: `0`.
- Hard-coded hex/rgb color references: `0`.
- `color-mix(...)` uses: `0`.

State and motion evidence:

- `:hover` selector matches: `6`.
- `:focus-visible` selector matches: `5`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled selector matches: `5`.
- CSS `selected` / `aria-selected` selector matches: `0`.
- Active-class matches: `23`.
- Loading selector matches: `0`.
- Transition declarations: `1`.
- Transform declarations: `0`.
- Animation declarations: `0`.
- `@keyframes`: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Responsive and layout evidence:

- Media blocks: `1`, at `max-width: 768px`.
- Flex display declarations: `1`.
- Inline-flex display declarations: `3`.
- Grid display declarations: `0`.
- Gap declarations: `6`.
- Overflow declarations: `2`.
- Position declarations: `2`.
- Z-index declarations: `0`.
- Width declarations: `12`.
- Height declarations: `3`.
- White-space declarations: `1`.
- Text-align declarations: `2`.
- Border declarations: `4`.
- Border-bottom declarations: `3`.

Package-facing output:

- `@24vlh/vds/dist/components/tabs.css` exists.
- `@24vlh/vds/dist/components/tabs.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/tabs.css`.
- `@24vlh/vds/src/core.css` does not import tabs.

## Component Contract

Current tabs source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root scope | `[data-vds-tabs]`, `.vds-tabs` | local tabs variable scope |
| Container | `.tabs`, `.tabs--inline`, `.tabs--center`, `.tabs--right`, `.tabs--stretch` | tab component shell and alignment/stretch behavior |
| Tab list | `.tab-list`, `.tab-list--scroll` | horizontal tab row and opt-in scrolling |
| Tab item | `.tab`, `.tab--active`, `.tab--disabled`, `.tab--icon-only` | interactive visual state, active underline, disabled visual state, and icon-only sizing |
| Tab parts | `.tab__icon`, `.tab__badge` | optional icon and badge/counter slots |
| Variants | `.tabs--pills`, `.tabs--segmented`, `.tabs--on-muted` | pill, segmented, and muted-surface adaptations |
| Density | `.tabs--a`, `.tabs--c` | relaxed and compact tab density |
| Orientation | `.tabs--vertical` | vertical list layout with side indicator and responsive collapse |
| Panels | `.tab-panel`, `.tab-panel--padded`, `.tab-panels`, `.is-hidden`, `[hidden]` | panel spacing and visibility hooks |

Source interpretation:

- Tabs CSS owns visual/layout hooks for tab lists, tabs, panels, active/hidden/disabled states, variants, orientation, scroll, and responsive collapse.
- CSS does not own tab activation logic, roving focus, keyboard handling, panel lifecycle, routing, async loading, or ARIA synchronization.
- Runtime and composition hooks such as `.tab--active`, `.tab--disabled`, `.tab-panel`, `.tab-panels`, `.is-hidden`, `[hidden]`, `.tabs--vertical`, `.tab-list--scroll`, `.tabs--pills`, and `.tabs--segmented` must remain compatibility-sensitive until later approved migration work.

Source/docs boundary:

- Source uses `.tab--active` and `[hidden]` / `.is-hidden` hooks for visual state.
- Raw docs heavily document `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-labelledby`, keyboard guidance, and vertical `aria-orientation`.
- Runtime code must synchronize source visual hooks with ARIA state; this item records the boundary only and does not add runtime behavior.

## Token and Local Variable Surface

Local custom properties:

- `--tabs-component-disabled-opacity`
- `--tabs-pill-radius`
- `--tabs-pill-bg`
- `--tabs-pill-border`
- `--tabs-pill-text`
- `--tabs-pill-hover-bg`
- `--tabs-pill-active-bg`
- `--tabs-pill-active-border`
- `--tabs-pill-active-text`
- `--tabs-segmented-bg`
- `--tabs-segmented-border`
- `--tabs-segmented-text`
- `--tabs-segmented-active-bg`
- `--tabs-segmented-active-text`
- `--tabs-segmented-shadow`

Audit conclusions:

- Tabs rely on local variables for disabled opacity plus pill and segmented variant surfaces.
- Base underline tabs rely on global VDS spacing, color, focus-ring, transition, border, text, and radius tokens.
- No local variable, token reference, active hook, hidden hook, disabled hook, orientation rule, or variant class is approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- Tabs-source classes: `24`.
- Public classes: `16`.
- Candidate-public classes: `8`.

Candidate-public classes:

- `.is-hidden`
- `.tab--disabled`
- `.tab-panel--padded`
- `.tab-panels`
- `.tabs--center`
- `.tabs--on-muted`
- `.tabs--right`
- `.vds-tabs`

Audit conclusions:

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- Candidate-public tabs selectors are source-defined and remain compatibility-sensitive.
- Source does not define selectors for `aria-selected`, `aria-controls`, or `aria-disabled`; those remain runtime/docs semantics.
- Future selector pruning, ARIA-hook additions, or reclassification requires migration approval.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-tabs.doc.html` has `1167` lines.
- Docs cover concept/anatomy, horizontal tabs, density/stretch, pill and segmented tabs, scrollable tab lists, vertical settings tabs, tabs with icons and badges, icon-only tabs, card-contained tabs, class reference, ARIA roles, keyboard behavior, and usage rules.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-tabs.json`
- Blocks: `11`.
- Code examples: `9`.
- Generated class tokens: `43`.
- Generated `source_css`: `base.css`, `icons.css`, `primitives.css`, `tabs.css`, `typography.css`, and `utilities.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `tab` | `518` |
| `tabs` | `138` |
| `tablist` | `24` |
| `tabpanel` | `24` |
| `panel` | `64` |
| `selected` | `58` |
| `active` | `40` |
| `disabled` | `3` |
| `aria` | `96` |
| `aria-selected` | `55` |
| `aria-controls` | `0` |
| `aria-labelledby` | `7` |
| `aria-disabled` | `0` |
| `role` | `124` |
| `keyboard` | `2` |
| `focus` | `7` |
| `focus-visible` | `1` |
| `hover` | `0` |
| `scroll` | `9` |
| `responsive` | `0` |
| `mobile` | `0` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |
| `contrast` | `0` |
| `vertical` | `18` |
| `underline` | `11` |
| `pill` | `8` |
| `segmented` | `9` |
| `icon` | `65` |
| `badge` | `14` |
| `loading` | `0` |

Docs coverage and gaps:

- Raw docs cover `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-labelledby`, vertical `aria-orientation`, keyboard guidance, focus-visible guidance, icons, badges, icon-only labels, scrollable tab lists, and active/panel state management.
- Raw docs do not mention `aria-controls`, `aria-disabled`, responsive/mobile wording, reduced-motion, forced-colors, contrast, hover, or loading.
- Generated metadata includes `tabs.css`; no manual generated-index edit is approved in this item.

## Accessibility, Runtime, and Behavior Boundaries

Consumer/application code owns:

- Tab activation and panel visibility.
- `aria-selected`, `aria-controls`, `aria-labelledby`, `aria-disabled`, and `aria-orientation` synchronization.
- Roving focus, ArrowLeft/ArrowRight, ArrowUp/ArrowDown, Home/End, Enter, and Space keyboard behavior.
- Focus movement, focus restoration where tabs are routed, and panel lifecycle.
- Routing, loading state changes, async content, and announcements.
- Icon-only accessible names and badge count meaning.

Accessibility interpretation:

- Tabs CSS can preserve visual focus and state hooks, but cannot implement APG tabs behavior.
- `.tab--active` is a visual hook and must be synchronized with `aria-selected`.
- `[hidden]` and `.is-hidden` hide panels visually; runtime code must keep panel visibility and accessible state aligned.
- Disabled tabs use `[disabled]` and `.tab--disabled` visual hooks; disabled behavior differs by element type and remains consumer-owned.

Audit conclusions:

- Tabs CSS is compatibility-sensitive because it exposes tablist, active, disabled, hidden, variant, scroll, and panel hooks used by docs examples and package consumers.
- Source CSS wins over docs where docs describe runtime behavior not implemented by CSS.
- Actual tabs keyboard, ARIA, activation, panel lifecycle, routing, and loading behavior remain later implementation/docs tasks.

## Responsive, Motion, and Forced-Colors Evidence

Responsive source behavior:

- One `max-width: 768px` media block makes `.tab-list` horizontally scrollable.
- The same block converts `.tabs--vertical` from row layout to column layout, turns the vertical tab list back into a row, and switches the active/focus indicator from side to bottom.
- Source has no container queries.

Motion source behavior:

- Source has one transition declaration on `.tab` for color, background-color, and box-shadow.
- Source has no transforms, animations, keyframes, or reduced-motion blocks.

Forced-colors evidence:

- Source has `0` forced-colors blocks.
- Raw docs mention forced-colors `0` times.

Audit conclusions:

- Responsive vertical collapse and tab-list scrolling are source truth and should not be inverted or renamed without migration approval.
- Lack of reduced-motion handling for the transition is low-risk but remains an audit finding only.
- Lack of forced-colors and contrast documentation is an audit finding only.

## Risks and Future Routing

- Tabs require APG-style runtime behavior; CSS cannot provide roving focus, keyboard activation, or ARIA synchronization.
- `.tab--active` and `aria-selected` can drift if consumer code does not update both.
- `[hidden]` / `.is-hidden` panel state can drift from the active tab if runtime code does not manage panel lifecycle.
- Raw docs do not mention `aria-controls` or `aria-disabled`, even though those may be needed by some tabs implementations.
- Vertical tabs collapse responsively; long labels and scroll behavior should be reviewed before mobile QA changes.
- Pill and segmented variants rely on theme tokens and may inherit contrast risks from prior theme audits.
- Forced-colors coverage is absent.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Tabs CSS fixes or selector cleanup: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Selector classification: later approved selector inventory/docs item.
- APG tabs, keyboard, focus, ARIA, and panel lifecycle guidance: later approved accessibility/docs item.
- Theme/contrast, forced-colors, and responsive screenshots: later approved visual integrity item.

## Public Interfaces

- No runtime CSS APIs change.
- No CSS, raw docs, generated docs index, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-tabs-component-audit.md` becomes the decision source for later tabs CSS fixes, docs rewrite, selector classification, APG tabs guidance, keyboard/focus policy, responsive QA, forced-colors cleanup, theme/contrast checks, migration notes, and release verification.

## Validation Plan

Approved validation commands:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
- Read-only tabs audit scan.
- Markdown sanity checks for master-map status, artifact path, no runtime/source/generated changes, and next recommended item.
- `git diff --check` for changed planning files.

Forbidden commands for this item:

- `pnpm run build`
- `pnpm run build:prod`
- `pnpm run docs:vds:index`
- `pnpm run inventory:selectors`
- `pnpm run consumer:scan`

## Post-Implementation Validation Log

- `pnpm run audit:tokens` passed: token usage audit passed for `43` files.
- `pnpm run audit` passed: CSS parse, class, token, doc dependency, and selector inventory freshness checks passed.
- `pnpm run audit:dist` was attempted with a `120s` timeout. It started `node static/js/check-generated-artifacts.js --check` but did not complete before timing out. No write/regeneration command was run.
- `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale; per plan, `pnpm run consumer:scan` was not run.
- Read-only tabs audit scan confirmed CSS counts, local variables, selector inventory totals, docs/index evidence, import/package evidence, tablist/tab/panel/active/disabled/hidden/orientation/variant/scroll/icon/badge evidence, keyboard/ARIA boundaries, responsive behavior, reduced-motion/forced-colors gaps, and dist presence.
- Markdown sanity checks passed for master-map status, `VDS-0500` in-progress status, artifact path, no runtime/source/generated/inventory/consumer-report changes, and next recommended item.
- `git diff --check` for changed planning files passed.
