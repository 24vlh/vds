# VDS State Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-2270`

Next recommended item: `VDS-2280 Tables component audit`

This file records the state component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/state.css` is the source truth for current state CSS behavior.
- `@24vlh/vds/doc-raw/vds-state.doc.html` and `@24vlh/agents/docs_vds/components/vds-state.json` are docs/index evidence.
- Current state CSS provides empty-state visual/layout hooks: icon/media/title/text/action/meta slots, inline/split/compact/plain/soft/center variants, and responsive inline/split collapse.
- Consumer/application code owns deciding when to show empty states, action behavior, navigation, recovery behavior, semantic headings, action labels, icon alternatives, live announcements, loading/error/success/blocked/permission states, and status/alert semantics.
- Existing state selectors, local variables, empty-state slots, layout variants, responsive behavior, docs examples, and package-facing outputs are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, selector inventory update, or generated output refresh happens in `VDS-2270`.

## Source CSS Evidence

`@24vlh/vds/src/components/state.css` currently has:

- Lines: `169`.
- Selector blocks: `20`.
- Expanded selectors: `23`.
- Declarations: `83`.
- Local custom property declaration lines: `18`.
- Unique local custom property names: `14`.
- `var(...)` references: `42`.
- `!important` declarations: `0`.
- Hard-coded hex/rgb color references: `0`.
- `color-mix(...)` uses: `0`.

State and motion evidence:

- `:hover` selector matches: `0`.
- `:focus-visible` selector matches: `0`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled selector matches: `0`.
- Loading selector matches: `0`.
- Error selector matches: `0`.
- Success selector matches: `0`.
- Blocked selector matches: `0`.
- Permission selector matches: `0`.
- Recovery selector matches: `0`.
- Transition declarations: `0`.
- Transform declarations: `0`.
- Animation declarations: `0`.
- `@keyframes`: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Responsive and layout evidence:

- Media blocks: `1`, at `max-width: 768px`.
- Flex display declarations: `3`.
- Inline-flex display declarations: `2`.
- Grid display declarations: `0`.
- Gap declarations: `3`.
- Overflow declarations: `0`.
- Position declarations: `0`.
- Z-index declarations: `0`.
- Width declarations: `2`.
- Height declarations: `2`.
- Padding declarations: `2`.
- Border declarations: `2`.
- Border-radius declarations: `3`.
- Background declarations: `4`.
- Text-align declarations: `7`.
- Container queries: `0`.

Package-facing output:

- `@24vlh/vds/dist/components/state.css` exists.
- `@24vlh/vds/dist/components/state.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/state.css`.
- `@24vlh/vds/src/core.css` does not import state.

## Component Contract

Current state source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root scope | `[data-vds-state]`, `.vds-state` | local state variable scope |
| Base state | `.state` | empty-state shell with centered column layout |
| Text slots | `.state__eyebrow`, `.state__title`, `.state__text`, `.state__meta` | supporting label, title, body, and metadata text |
| Visual slots | `.state__icon`, `.state__media` | icon/media placeholder surfaces |
| Content/actions | `.state__content`, `.state__actions` | copy grouping and action row layout |
| Layout variants | `.state--left`, `.state--inline`, `.state--split`, `.state--center` | alignment and row/column presentation variants |
| Surface variants | `.state--soft`, `.state--plain` | soft surface and unframed presentation |
| Density variant | `.state--compact` | reduced padding and gap |

Source interpretation:

- State CSS owns empty-state visual/layout hooks: icon/media/title/text/action/meta slots and layout/surface/density variants.
- CSS does not own loading, error, success, blocked, permission, or recovery semantics; runtime state selection; announcements; routing; or action behavior.
- Runtime and composition hooks such as `.state__actions`, `.state--inline`, `.state--split`, `.state--plain`, and `.state--center` must remain compatibility-sensitive until later approved migration work.

Backlog/source mismatch:

- The master-map focus for `VDS-2270` lists empty, loading, error, success, blocked, permission, and recovery states.
- Current `state.css` has no source selectors for loading, error, success, blocked, permission, or recovery states.
- Current raw docs primarily describe empty and zero-result states.
- This item records the mismatch only; it does not add or rename state taxonomy.

## Token and Local Variable Surface

Local custom properties:

- `--state-gap`
- `--state-padding`
- `--state-radius`
- `--state-surface`
- `--state-border`
- `--state-icon-size`
- `--state-icon-bg`
- `--state-icon-color`
- `--state-title-size`
- `--state-eyebrow-color`
- `--state-media-size`
- `--state-media-bg`
- `--state-media-color`
- `--state-border-style`

Audit conclusions:

- State uses local variables for spacing, surface, border, icon/media sizing, and text color.
- `.state--soft`, `.state--compact`, `.state--plain`, and alignment variants modify those surfaces without introducing semantic state taxonomy.
- No local variable, token reference, slot class, layout variant, or responsive rule is approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- State-source classes: `17`.
- Public classes: `15`.
- Candidate-public classes: `2`.

Candidate-public classes:

- `.state--center`
- `.vds-state`

Audit conclusions:

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- `.state--center` and `.vds-state` are source-defined and remain compatibility-sensitive.
- There are no source-defined loading, error, success, blocked, permission, or recovery selectors in `state.css`.
- Future selector pruning, taxonomy expansion, or reclassification requires migration approval.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-state.doc.html` has `198` lines.
- Docs cover empty states, inline and split layouts, compact and plain variants, usage patterns, best practices, focusable actions, keyboard-accessible actions, icon alternatives, and accessibility usage rules.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-state.json`
- Blocks: `5`.
- Code examples: `3`.
- Generated class tokens: `26`.
- Generated `source_css`: `[]`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `state` | `68` |
| `empty` | `11` |
| `zero` | `1` |
| `loading` | `0` |
| `error` | `1` |
| `success` | `0` |
| `blocked` | `0` |
| `permission` | `0` |
| `recovery` | `0` |
| `actions` | `7` |
| `button` | `33` |
| `icon` | `5` |
| `media` | `3` |
| `aria` | `1` |
| `aria-live` | `0` |
| `aria-busy` | `0` |
| `role` | `0` |
| `status` | `0` |
| `alert` | `0` |
| `focus` | `1` |
| `keyboard` | `1` |
| `responsive` | `0` |
| `mobile` | `0` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |
| `contrast` | `0` |

Docs coverage and gaps:

- Raw docs cover empty states, inline/split layouts, compact/plain variants, usage rules, focusable actions, keyboard-accessible actions, and icon text alternatives.
- Raw docs do not cover loading, success, blocked, permission, recovery, `aria-live`, `aria-busy`, roles, status/alert semantics, responsive/mobile wording, reduced-motion, forced-colors, or contrast.
- Generated metadata currently has `source_css: []`; this is a docs-index metadata gap, not a manual generated-index fix.

## Accessibility, Runtime, and Behavior Boundaries

Consumer/application code owns:

- Deciding when to show empty states or other runtime states.
- Action behavior, navigation, and recovery behavior.
- Semantic headings, action labels, and icon alternatives.
- Live announcements, `aria-live`, `aria-busy`, status/alert semantics, and loading/error/success/blocked/permission state semantics.
- Preventing empty-state actions from becoming the only path to critical recovery unless appropriate fallback exists.

Accessibility interpretation:

- State CSS can provide visible empty-state layout, but cannot supply runtime state semantics.
- Buttons and links inside `.state__actions` retain their semantics from their own elements/components.
- Icon/media slots need text context or accessible alternatives outside CSS.

Audit conclusions:

- State CSS is compatibility-sensitive because it exposes empty-state layout and action slots used by docs examples and consumers.
- Source CSS wins over backlog wording where broader state taxonomy is not currently implemented.
- Actual loading/error/success/blocked/permission/recovery semantics remain a later implementation/docs task.

## Responsive, Motion, and Forced-Colors Evidence

Responsive source behavior:

- One `max-width: 768px` media block changes `.state--inline` and `.state--split` to column layout.
- The same block centers alignment and text for those variants.
- Source has no container queries.

Motion source behavior:

- Source has no transitions, transforms, animations, keyframes, or reduced-motion blocks.
- Motion is not part of the current state CSS surface.

Forced-colors evidence:

- Source has `0` forced-colors blocks.
- Raw docs mention forced-colors `0` times.

Audit conclusions:

- Responsive inline/split collapse is source truth and should not be inverted or renamed without migration approval.
- Lack of forced-colors and contrast documentation is an audit finding only.
- No motion cleanup is approved in this item because source has no motion behavior.

## Risks and Future Routing

- Backlog scope is broader than source truth: state taxonomy expansion requires later approved CSS/docs work.
- Generated docs metadata currently omits `state.css`; this is a docs-index metadata gap, not a manual generated-index fix.
- Empty states can be misused as error, blocked, or destructive confirmation messaging; docs already warn against some of this, but taxonomy remains future work.
- State actions rely on button/link semantics from consumer markup and other components.
- Forced-colors and contrast coverage are absent and should be routed to later visual/accessibility work.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- State CSS fixes or taxonomy expansion: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Selector classification: later approved selector inventory/docs item.
- Empty/error/loading-state semantics: later approved accessibility/docs item.
- Theme/contrast and forced-colors checks: later approved visual integrity item.

## Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-state-component-audit.md` becomes the decision source for later state CSS fixes, docs rewrite, selector classification, empty/error/loading-state taxonomy, accessibility guidance, theme/contrast checks, forced-colors cleanup, migration notes, and release verification.
