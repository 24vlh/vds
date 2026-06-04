# VDS-2270 State Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2270`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2270-state-component-audit.md`

## 1. Goal

Create the state component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only state surface, which source truth currently defines as empty/zero-state presentation: icon/media/title/text/action/meta slots, inline/split/compact/plain/soft/center variants, responsive inline/split collapse, docs/index metadata, package-facing dist presence, and accessibility/theming risks before any state CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/state.css` selector, local variable, empty-state slot, layout variant, responsive, theme, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the state class surface.
- Record raw docs and generated docs-index metadata for `vds-state`.
- Record the backlog/source mismatch: the master-map focus mentions loading, error, success, blocked, permission, and recovery states, but current `state.css` and raw docs primarily cover empty/zero states.
- Record package-facing `dist/components/state.css` and `.min.css` presence.
- Add a state component audit artifact for later state CSS fixes, docs rewrite, selector classification, empty/error/loading-state taxonomy, accessibility guidance, theme/contrast checks, forced-colors cleanup, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2270` is done, and the next recommended item is `VDS-2280 Tables component audit`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding loading, error, success, blocked, permission, or recovery state CSS; runtime state selection; announcements; routing; action behavior; accessibility smoke tests; visual checks; selector reclassification; docs rewrites; or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-state.json`
- Repo files:
  - `@24vlh/vds/src/components/state.css`
  - `@24vlh/vds/doc-raw/vds-state.doc.html`
  - `@24vlh/vds/dist/components/state.css`
  - `@24vlh/vds/dist/components/state.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/state.css` has `169` lines.
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

Package-facing output evidence:

- `@24vlh/vds/dist/components/state.css` exists.
- `@24vlh/vds/dist/components/state.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/state.css`.
- `@24vlh/vds/src/core.css` does not import state.

## 5. Component Contract

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

- `@24vlh/vds/src/components/state.css` is the source truth for current state CSS behavior.
- State CSS owns empty-state visual/layout hooks: icon/media/title/text/action/meta slots and layout/surface/density variants.
- CSS does not own loading, error, success, blocked, permission, or recovery semantics; runtime state selection; announcements; routing; or action behavior.
- Existing state selectors, local variables, empty-state slots, layout variants, responsive behavior, docs examples, and package-facing outputs are compatibility-sensitive.

Backlog/source mismatch:

- The master-map focus for `VDS-2270` lists empty, loading, error, success, blocked, permission, and recovery states.
- Current `state.css` has no source selectors for loading, error, success, blocked, permission, or recovery states.
- Current raw docs primarily describe empty and zero-result states.
- This item records the mismatch only; it does not add or rename state taxonomy.

## 6. Token and Local Variable Surface

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

## 7. Selector/API Evidence

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

## 8. Docs and Generated Index Evidence

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

## 9. Accessibility, Runtime, and Behavior Boundaries

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

## 10. Responsive, Motion, and Forced-Colors Evidence

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

## 11. Risks and Future Routing

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

## 12. Public Interfaces

- No runtime CSS APIs change.
- No CSS, raw docs, generated docs index, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-state-component-audit.md` becomes the decision source for later state CSS fixes, docs rewrite, selector classification, empty/error/loading-state taxonomy, accessibility guidance, theme/contrast checks, forced-colors cleanup, migration notes, and release verification.

## 13. Validation Plan

Approved validation commands:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
- Read-only state audit scan.
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
- Read-only state audit scan confirmed CSS counts, local variables, selector inventory totals, docs/index evidence, import/package evidence, empty-state slot/variant/responsive evidence, missing loading/error/success/blocked/permission/recovery source hooks, accessibility docs gaps, generated metadata gap, and dist presence.
- Markdown sanity checks passed for master-map status, `VDS-0500` in-progress status, artifact path, no runtime/source/generated/inventory/consumer-report changes, and next recommended item.
- `git diff --check` for changed planning files passed.
