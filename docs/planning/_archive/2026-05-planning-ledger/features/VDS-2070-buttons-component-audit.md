# VDS-2070 Buttons Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2070`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2070-buttons-component-audit.md`

## 1. Goal

Create the buttons component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only button contract: native buttons, anchors-as-buttons, role-button guidance, variants, sizes, icon-only buttons, loading spinner, pressed/selected/disabled states, focus/reduced-motion behavior, docs/index metadata, package-facing dist presence, and accessibility/theming risks before any button CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/buttons.css` selector, local alias, variant, size, icon, loading, pressed, selected, disabled, focus, reduced-motion, and anchor-reset evidence.
- Record public and candidate-public selector inventory evidence for the button class surface.
- Record raw docs and generated docs-index metadata for `vds-buttons`.
- Record package-facing `dist/components/buttons.css` and `.min.css` presence.
- Add a buttons component audit artifact for later CSS fixes, docs rewrite, accessibility review, APG/button-pattern guidance, theme/contrast checks, selector classification, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2070` is done, and the next recommended item is `VDS-2080`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding JavaScript behavior for anchors-as-buttons, role-button activation, loading state, toggles, form submission, destructive-action confirmation, or focus movement.
- Adding forced-colors handling, responsive screenshots, visual checks, selector reclassification, docs rewrites, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local standards docs:
  - `@24vlh/agents/docs_md/design/patterns/button.md`
  - `@24vlh/agents/docs_md/design/w3c/wcag-2-2-quick-reference.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-buttons.json`
- Repo files:
  - `@24vlh/vds/src/components/buttons.css`
  - `@24vlh/vds/doc-raw/vds-buttons.doc.html`
  - `@24vlh/vds/dist/components/buttons.css`
  - `@24vlh/vds/dist/components/buttons.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/buttons.css` has `644` lines.
- Selector blocks: `101`.
- Expanded selectors: `141`.
- Declarations: `244`.
- Anchored custom property declaration lines: `24`.
- Unique locally declared custom property names: `1`, `--button-text-color`.
- `var(...)` references: `239`.
- `!important` declarations: `0`.
- Hard-coded hex colors: `0`.
- `rgb(...)` / `rgba(...)` colors: `1`, from `.button--contrast-hover`.

Media, feature, interaction, and state evidence:

- Media blocks: `1`, `(prefers-reduced-motion: reduce)`.
- Feature queries: `1`, `@supports not (gap: 1rem)`.
- `@keyframes`: `1`, `button-spinner`.
- `:hover` selector matches: `24`.
- `:focus-visible` selector matches: `20`.
- `:active` selector matches: `23`.
- Disabled or `aria-disabled` selector matches: `86`.
- Pressed selector matches: `2`.
- Selected selector matches: `2`.
- Loading selector matches: `7`.
- Transition declarations: `2`.
- Animation declarations: `2`.
- Transform declarations: `5`.
- Reduced-motion blocks: `1`.
- Forced-colors blocks: `0`.

Package-facing output evidence:

- `@24vlh/vds/dist/components/buttons.css` exists.
- `@24vlh/vds/dist/components/buttons.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/buttons.css`.
- `@24vlh/vds/src/core.css` does not import buttons.

## 5. Component Contract

Current button source surfaces:

- Base:
  - `.button`
- Size modifiers:
  - `.button--xs`
  - `.button--sm`
  - `.button--md`
  - `.button--lg`
- Layout modifiers:
  - `.button--nowrap`
  - `.button--block`
  - `.button--full-height`
- Icon helpers:
  - `.button--icon`
  - `.button--icon-only`
  - `.button__icon`
  - `.button__icon--left`
  - `.button__icon--right`
- Neutral and core variants:
  - `.button--primary`
  - `.button--secondary`
  - `.button--soft`
  - `.button--ghost`
  - `.button--subtle`
  - `.button--neutral`
- Status variants:
  - `.button--success`
  - `.button--warning`
  - `.button--info`
  - `.button--danger`
- Outline variants:
  - `.button--outline`
  - `.button--outline-accent`
  - `.button--outline-danger`
  - `.button--outline-success`
  - `.button--outline-warning`
  - `.button--outline-info`
- Link and state/helper surfaces:
  - `.button--link`
  - `.button--selected`
  - `.button--loading`
  - `.button--contrast-hover`
  - `.button--lift`
  - `a.button`

Source interpretation:

- Buttons are CSS action-trigger styling, not a JavaScript behavior component.
- Native `<button>` elements are the preferred semantic control for actions.
- Anchors can be styled as buttons when navigation is intended.
- Role-button patterns require consumer-owned keyboard activation and ARIA behavior.
- Button classes, variants, icon helpers, state selectors, anchor resets, and the local alias are compatibility-sensitive.

## 6. Local Alias and Token Surface

Current local declaration:

- `--button-text-color`

Audit conclusions:

- `--button-text-color` is a component-local alias used by the base and variants to feed final text color.
- Most button styling resolves through primitive, theme, semantic, focus, motion, border, and state-soft tokens rather than a broad `--button-*` local variable surface.
- Button outline hover tokens such as `--button-outline-accent-hover-bg` are referenced as theme/component-facing values but are not locally declared in `buttons.css`.
- The local alias and token references are not approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

Selector inventory evidence:

- `34` button source classes are defined in selector inventory.
- Classification totals:
  - `30` public.
  - `4` candidate-public.

Class family counts:

| Group | Total |
| --- | ---: |
| base | `1` |
| size | `4` |
| layout | `3` |
| icon | `5` |
| core variant | `6` |
| status variant | `4` |
| outline variant | `6` |
| link | `1` |
| state | `2` |
| other helper | `2` |

Candidate-public classes:

- `.button--full-height`
- `.button--lift`
- `.button--nowrap`
- `.button--selected`

Audit conclusions:

- Candidate-public status reflects current docs coverage, not permission to remove or rename source-defined selectors.
- `.button--selected` overlaps with `[aria-pressed="true"]` visual treatment and must be classified before any later state naming cleanup.
- `.button--lift`, `.button--contrast-hover`, and layout helpers are compatibility-sensitive helper surfaces.

## 8. Docs and Generated Index Evidence

Raw docs evidence:

- `@24vlh/vds/doc-raw/vds-buttons.doc.html` has `667` lines.
- Raw docs cover variants, anchors-as-buttons, icon buttons, loading, disabled/`aria-disabled`, `aria-pressed`, `aria-busy`, accessible names, toolbar context, and button usage rules.
- Raw docs examples include source-consumption paths and theme examples that remain docs/package guidance evidence, not source truth.

Generated index evidence:

- `@24vlh/agents/docs_vds/components/vds-buttons.json`
- Blocks: `9`.
- Code examples: `9`.
- Generated class tokens: `54`.
- Generated `source_css`:
  - `base.css`
  - `buttons.css`
  - `icons.css`
  - `primitives.css`
  - `typography.css`

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `button` | `616` |
| `link` | `38` |
| `aria` | `56` |
| `aria-pressed` | `1` |
| `pressed` | `1` |
| `disabled` | `17` |
| `aria-disabled` | `3` |
| `loading` | `9` |
| `spinner` | `1` |
| `icon` | `136` |
| `icon-only` | `7` |
| `focus` | `5` |
| `hover` | `2` |
| `active` | `2` |
| `danger` | `22` |
| `toolbar` | `10` |
| `anchor` | `0` |
| `role` | `0` |
| `selected` | `0` |
| `keyboard` | `0` |
| `Space` | `0` |
| `Enter` | `0` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |
| `contrast` | `0` |
| `mobile` | `0` |
| `responsive` | `0` |

Audit conclusions:

- Generated buttons `source_css` metadata is present.
- Generated `source_css` does not list a theme file even though variants rely on theme color tokens.
- Docs cover many ARIA and usage responsibilities, but they do not directly mention keyboard activation, Space/Enter, reduced-motion, forced-colors, responsive/mobile, or contrast.
- Source comments mention `role="button"` support, but raw docs do not mention `role`; role-button guidance needs later docs review.

## 9. Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Choosing native `<button>` for actions and anchors for navigation.
- Supplying `type="button"` where form submission should be avoided.
- Adding keyboard behavior for non-button role-button controls, including Space and Enter activation.
- Maintaining `aria-pressed` for toggle buttons.
- Maintaining `aria-busy`, loading state changes, and any live status text during async actions.
- Managing `aria-disabled` semantics on anchors or role-button patterns.
- Providing accessible names for icon-only buttons.
- Confirming destructive actions and managing resulting focus movement.
- Providing toolbar roving focus only if a toolbar pattern is intentionally implemented.

CSS source currently provides:

- Base button layout, typography, spacing, border, radius, and focus ring.
- Hover, active, disabled, selected, pressed, and loading visuals.
- Size, layout, icon-only, link, semantic, outline, neutral, contrast-hover, and lift helpers.
- Anchor reset rules for `a.button`.
- Reduced-motion handling for transitions and loading spinner animation.

APG alignment notes:

- Native `<button>` elements provide default Space and Enter activation.
- APG button guidance requires accessible labels and `aria-pressed` for toggle buttons.
- APG notes that link and button roles should match behavior; role-button patterns are possible but require consumer-owned keyboard behavior.
- Toolbar guidance applies only when consumers wrap buttons in an actual toolbar pattern.

Audit findings:

- Source has reduced-motion handling, but raw docs do not mention reduced motion.
- Source has no forced-colors block.
- Source has pressed/selected visual handling, but docs only lightly mention `aria-pressed` and do not mention selected.
- Icon-only accessible naming is docs/consumer-owned and cannot be enforced by CSS.
- Loading visuals hide children and show a spinner; accessible busy text/state remains consumer-owned.

## 10. Risks and Future Routing

- Native `<button>` behavior and anchor/role-button behavior must be separated clearly; CSS cannot supply keyboard activation semantics for non-button elements.
- Loading state hides children and uses a spinner; accessible busy text/state remains consumer-owned.
- Icon-only buttons require accessible names; source cannot enforce labels.
- Pressed/selected styling exists, but toggle state and `aria-pressed` synchronization remain consumer-owned.
- Disabled styling supports native disabled and `aria-disabled`, but actual disabled behavior differs by element type.
- Semantic and outline variants inherit theme contrast risks from prior theme audits, especially warning/danger/status and on-color pairs.
- Source has reduced-motion handling but no forced-colors block; forced-colors coverage is an audit finding only.
- Source comments mention Titanium in the theme list even though the approved theme matrix is Graphite, Carbon, Navy, and Slate; this is stale source-comment evidence only.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Buttons CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Generated docs metadata refresh: later approved docs-index item.
- Selector classification changes: later approved selector inventory item.
- Theme/contrast checks: later approved visual/contrast QA items.
- APG/native/link/role-button guidance: later approved accessibility/docs item.
- Dist refresh: later approved release/build-output item.

## 11. Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-buttons-component-audit.md` becomes the decision source for later button CSS fixes, docs rewrite, accessibility review, APG/button-pattern guidance, theme/contrast checks, selector classification, migration notes, and release verification.

## 12. Validation Plan

Run after documentation updates:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
  - If this fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Read-only buttons audit scan.
- Markdown sanity checks.
- `git diff --check`

Forbidden commands:

- `pnpm run build`
- `pnpm run build:prod`
- `pnpm run docs:vds:index`
- `pnpm run inventory:selectors`
- `pnpm run consumer:scan`
- any write/regeneration command.

## 13. Implementation Log

- Added `@24vlh/vds/docs/planning/features/VDS-2070-buttons-component-audit.md`.
- Added `@24vlh/vds/docs/planning/components/vds-buttons-component-audit.md`.
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
  - Per `VDS-2070` scope, `pnpm run consumer:scan` was not run.
- Read-only buttons audit scan:
  - Recorded `644` source CSS lines, `101` selector blocks, `141` selectors, `244` declarations, `24` anchored custom property declaration lines, `1` locally declared custom property name (`--button-text-color`), `239` `var(...)` references, `1` reduced-motion block, `1` `@supports not (gap: 1rem)` fallback, `1` `@keyframes button-spinner`, `24` hover matches, `20` `:focus-visible` matches, `23` active matches, `86` disabled/`aria-disabled` matches, `2` pressed matches, `2` selected matches, `7` loading matches, `0` forced-colors blocks, `0` hard-coded hex colors, `1` rgba helper, `0` `!important`, `34` button classes, `30` public classes, `4` candidate-public classes, `667` raw-doc lines, `9` generated docs blocks, `9` code examples, `54` generated class tokens, non-empty generated `source_css`, index import presence, core import absence, and package-facing dist file presence.
- Markdown sanity checks:
  - Passed: `VDS-2070` appears as `done`, `VDS-0500` remains `in-progress`, the buttons artifact path resolves, plan/artifact scope agrees that no runtime/generated files changed, and the next recommended item is `VDS-2080 Charts component audit`.
- `git diff --check`
  - Passed for changed planning files.

Notes:

- The WSL wrapper command is not available in this shell, so validation commands were run directly from `@24vlh/vds`.
