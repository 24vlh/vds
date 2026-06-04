# VDS-2120 Documentation Block Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2120`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2120-documentation-block-audit.md`

## 1. Goal

Create the documentation block component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only documentation engine contract: doc shells, headers/bodies, previews, code frames, toolbars/actions, copy/collapsed/expanded hooks, numbered code, syntax token hooks, diff/change-log blocks, semantic presets, responsive behavior, docs/index metadata, package-facing dist presence, and docs-only/accessibility/theming risks before any doc-block CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/doc-block.css` selector, token, shell, header/body, preview, split, code, toolbar/action, copy, collapsed/expanded, numbered code, syntax token, diff, helper, semantic preset, responsive, reduced-motion, theme, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the doc-block class surface.
- Record raw docs and generated docs-index metadata for `vds-doc-block`.
- Record package-facing `dist/components/doc-block.css` and `.min.css` presence.
- Add a documentation block audit artifact for later CSS fixes, docs rewrite, docs-runtime guidance, selector classification, metadata refresh, accessibility review, theme/contrast checks, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2120` is done, and the next recommended item is `VDS-2130`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding JavaScript copy, expand/collapse, syntax highlighting, docs routing, code generation, or docs-runtime behavior.
- Adding forced-colors handling, focus-visible styling, responsive screenshots, visual checks, selector reclassification, docs rewrites, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-doc-block.json`
- Repo files:
  - `@24vlh/vds/src/components/doc-block.css`
  - `@24vlh/vds/doc-raw/vds-doc-block.doc.html`
  - `@24vlh/vds/dist/components/doc-block.css`
  - `@24vlh/vds/dist/components/doc-block.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/doc-block.css` has `733` lines.
- Selector blocks: `98`.
- Expanded selectors: `105`.
- Declarations: `307`.
- Custom property declaration lines: `3`.
- Unique local token names: `3`.
- `var(...)` references: `199`.
- `!important` declarations: `1`.
- `rgba(...)` references: `2`, in the collapsed code gradient.
- `color-mix(...)` uses: `0`.

Media, interaction, and state evidence:

- Media blocks: `7`, covering `max-width: 1024px`, `max-width: 768px`, and `prefers-reduced-motion: reduce`.
- `@keyframes`: `0`.
- `:hover` selector matches: `1`.
- `:focus-visible` selector matches: `0`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled selector matches: `0`.
- Selected selector matches: `0`.
- Collapsed/expanded matches: `4`.
- Copy/copied matches: `3`.
- Loading/busy selector matches: `0`.
- Transition declarations: `3`.
- Transform declarations: `0`.
- Animation declarations: `0`.
- Reduced-motion blocks: `1`.
- Forced-colors blocks: `0`.

Layout and style evidence:

- Grid display declarations: `8`.
- Flex display declarations: `14`.
- Inline-flex declarations: `1`.
- Gap declarations: `28`.
- Padding-related declarations: `31`.
- Position declarations: `11`.
- Overflow declarations: `3`.
- Max-height declarations: `2`.
- Pointer-events declarations: `4`.
- Border declarations: `10`.
- Border-radius declarations: `13`.
- Background/background-color declarations: `22`.
- Color declarations: `29`.
- Box-shadow declarations: `1`.
- Outline declarations: `1`.

Package-facing output evidence:

- `@24vlh/vds/dist/components/doc-block.css` exists.
- `@24vlh/vds/dist/components/doc-block.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/doc-block.css`.
- `@24vlh/vds/src/core.css` does not import doc block.

## 5. Component Contract

Current doc-block source surfaces:

- Root/local variables:
  - `[data-vds-dock-block]`
  - `.vds-dock-block`
- Base shell:
  - `.doc-block`
  - `.doc-block--surface`
  - `.doc-block--elevated`
  - `.doc-block--contrast`
  - `.doc-block--compact`
- Header/body/description:
  - `.doc-block__header`
  - `.doc-block__title`
  - `.doc-block__subtitle`
  - `.doc-block__summary`
  - `.doc-block__section`
  - `.doc-block__subsection`
  - `.doc-block__description`
  - `.doc-block__body`
- Preview and split layouts:
  - `.doc-block__preview`
  - `.doc-block__preview--transparent`
  - `.doc-block__preview--inline`
  - `.doc-block--split`
  - `.doc-block--split-left`
  - `.doc-block--split-right`
- Code surfaces and toolbar:
  - `.doc-block__code`
  - `.doc-block__toolbar`
  - `.doc-block__lang`
  - `.doc-block__actions`
  - `.doc-block__action`
  - `.doc-block__action--active`
  - `.doc-block__code-toggle`
- Code states and variants:
  - `.doc-block--collapsed`
  - `.doc-block--expanded`
  - `.doc-block__code.is-copied`
  - `.doc-block__code--numbered`
  - `.doc-block__code--numbered-soft`
  - `.doc-block--diff`
  - `.doc-block--diff-added`
  - `.doc-block--diff-removed`
  - `.doc-block--diff-line-add`
  - `.doc-block--diff-line-remove`
- Syntax token hooks:
  - `.token.keyword`
  - `.token.string`
  - `.token.number`
  - `.token.operator`
  - `.token.comment`
  - `.token.constant`
  - `.token.func`
  - `.token.var`
- Helper and preset surfaces:
  - `.doc-block__eyebrow`
  - `.doc-block__pills`
  - `.doc-block__pill`
  - `.doc-block__stack-*`
  - `.doc-block__columns-*`
  - `.doc-block__steps`
  - `.doc-block__highlight`
  - `.doc-block__do-dont`
  - `.doc-block__do`
  - `.doc-block__dont`
  - `.doc-block--concept`
  - `.doc-block--pattern`
  - `.doc-block--api`
  - `.doc-block--example`

Source interpretation:

- Doc blocks are visual documentation surfaces, not a JavaScript docs runtime.
- CSS owns documentation shells, preview and code frames, toolbar/action styling, visual copy/collapsed/expanded hooks, syntax highlighting hooks, diff surfaces, helper layouts, responsive collapse, and reduced-motion styling.
- Consumer/docs tooling owns copy behavior, expand/collapse state, semantic toolbar buttons, keyboard behavior, generated code content, syntax token generation, and preview component behavior.
- Doc-block selectors, syntax hooks, state hooks, helper variants, responsive behavior, and docs examples are compatibility-sensitive.

## 6. Local Token Surface

Current local variables:

| Variable | Role |
| --- | --- |
| `--doc-block-border` | code/documentation surface border alias |
| `--doc-block-highlight-border-width` | highlight helper rail width |
| `--doc-block-highlight-pad` | highlight helper padding |

Audit conclusions:

- Local doc-block variables are component-owned aliases.
- Most styling relies directly on primitive, theme, code, syntax, border, radius, shadow, motion, and surface tokens.
- No local variable or token reference is approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

Selector inventory totals:

- Doc-block-source classes: `71`.
- Public classes: `43`.
- Candidate-public classes: `28`.

Class family counts:

| Group | Total |
| --- | ---: |
| root | `2` |
| modifiers | `18` |
| elements | `40` |
| code/toolbar/diff-related | `14` |

Notable candidate-public classes:

- `.vds-dock-block`
- `.doc-block--expanded`
- `.doc-block--split-left`
- `.doc-block--diff-added`
- `.doc-block--diff-removed`
- `.doc-block__action--active`
- `.doc-block__code-toggle`
- `.doc-block__columns-3`
- `.doc-block__do-dont`
- `.doc-block__steps`
- `.is-copied`
- `.keyword`
- `.string`
- `.number`
- `.operator`
- `.comment`
- `.func`
- `.var`

Audit conclusions:

- Candidate-public status reflects current docs coverage, not permission to remove or rename source-defined selectors.
- `[data-vds-dock-block]` / `.vds-dock-block` are recorded as source-root spelling evidence, not an approved fix.
- Syntax token classes are compatibility-sensitive because external highlighters or docs tooling may emit them.
- Future selector pruning or reclassification requires migration approval.

## 8. Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-doc-block.doc.html` has `734` lines.
- Docs cover installation/dependencies, core concept, anatomy, surfaces/density, preview patterns, code blocks, toolbar, numbered lines, collapsed blocks, progressive disclosure, diff/change-log blocks, semantic presets, highlights, accessibility rules, usage rules, and do/don't guidance.
- Docs explicitly say toolbar actions such as copy and expand need real JS behavior and semantic buttons.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-doc-block.json`
- Blocks: `18`.
- Code examples: `13`.
- Generated class tokens: `36`.
- Generated `source_css`: `base.css`, `doc-block.css`, `layout.css`, `primitives.css`, and `typography.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `doc-block` | `261` |
| `documentation` | `10` |
| `preview` | `45` |
| `code` | `204` |
| `copy` | `9` |
| `toolbar` | `15` |
| `action` | `19` |
| `numbered` | `15` |
| `diff` | `12` |
| `collapsed` | `11` |
| `expanded` | `0` |
| `api` | `5` |
| `concept` | `6` |
| `pattern` | `8` |
| `surface` | `30` |
| `compact` | `10` |
| `contrast` | `7` |
| `aria` | `0` |
| `keyboard` | `2` |
| `focus` | `3` |
| `responsive` | `0` |
| `mobile` | `0` |
| `overflow` | `1` |
| `forced-colors` | `0` |
| `reduced-motion` | `1` |
| `theme` | `10` |

Audit conclusions:

- Generated `source_css` metadata is present.
- Generated `source_css` does not list a theme file even though code, syntax, and surface tokens require an active theme.
- Raw docs cover copy/expand toolbar behavior as docs-runtime work, not CSS behavior.
- Raw docs do not mention responsive/mobile or forced-colors coverage directly.

## 9. Accessibility and Behavior Boundaries

Consumer/docs tooling remains responsible for:

- Rendering semantic documentation markup.
- Using real buttons for copy, expand, and other toolbar actions.
- Providing accessible names for toolbar controls.
- Implementing copy behavior and copied state updates.
- Implementing expand/collapse state and any `aria-expanded` synchronization.
- Preserving keyboard access to code toolbars and previews.
- Generating syntax token markup if syntax highlighting is used.
- Managing preview component semantics, focus behavior, and interaction states.

CSS source currently provides:

- Documentation shells and surface variants.
- Preview and split layout styles.
- Code frame, toolbar, action, numbered-code, copied-state, collapsed/expanded, and diff visuals.
- Syntax token styling hooks.
- Helper layouts for pills, stacks, columns, steps, highlights, and do/don't blocks.
- Responsive collapse for split/diff/helper layouts.
- Reduced-motion handling for doc-block action and copied-state transitions.
- No file-local forced-colors block.
- No file-local `:focus-visible` selector.

Audit findings:

- Source comments say "Pure CSS - no JS required for structure, interaction, or state styling," while raw docs correctly require JS for copy/expand behavior; record this as wording/contract evidence, not a source change.
- Toolbar actions have hover styling but no file-local focus-visible styling.
- The reduced-motion block uses `!important` intentionally for transition suppression.
- Forced-colors handling is absent.
- Syntax token hooks and code color tokens inherit theme/code contrast risks.

## 10. Risks and Future Routing

- Doc-block is a docs-facing component but still ships as a package-facing component CSS file; selector changes need migration review.
- Copy, expand/collapse, code-toggle, and syntax-highlighting behavior cannot be solved by CSS alone.
- `[data-vds-dock-block]` / `.vds-dock-block` may be a typo, but no root selector is fixed in this item.
- Syntax token classes may collide with external highlighter conventions and must be classified before cleanup.
- Preview surfaces can contain interactive components; doc-block CSS must not suppress component focus or accessibility states.
- Code frames use horizontal scrolling and collapsed gradients; readability and keyboard access need later review.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Doc-block CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Docs-runtime copy/expand guidance: later approved docs/runtime item.
- Generated docs metadata refresh: later approved docs-index item.
- Selector classification changes: later approved selector inventory item.
- Theme/contrast checks: later approved visual/contrast QA items.
- Dist refresh: later approved release/build-output item.

## 11. Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-documentation-block-audit.md` becomes the decision source for later doc-block CSS fixes, docs rewrite, docs-runtime guidance, selector classification, metadata refresh, accessibility review, theme/contrast checks, migration notes, and release verification.

## 12. Validation Plan

Run after documentation updates:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
  - If this fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Read-only doc-block audit scan.
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

- Added `@24vlh/vds/docs/planning/features/VDS-2120-documentation-block-audit.md`.
- Added `@24vlh/vds/docs/planning/components/vds-documentation-block-audit.md`.
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
  - Per `VDS-2120` scope, `pnpm run consumer:scan` was not run.
- Read-only doc-block audit scan:
  - Recorded `733` source CSS lines, `98` selector blocks, `105` selectors, `307` declarations, `3` custom property declaration lines, `3` unique local token names, `199` `var(...)` references, `1` hover match, `0` `:focus-visible` matches, `0` active matches, `4` collapsed/expanded matches, `3` copy/copied matches, `0` loading matches, `3` transitions, `0` animations/keyframes, `1` reduced-motion block, `0` forced-colors blocks, `7` media blocks, `8` grid display declarations, `14` flex display declarations, `1` inline-flex declaration, `28` gap declarations, `31` padding-related declarations, `11` position declarations, `3` overflow declarations, `2` max-height declarations, `4` pointer-events declarations, `10` border declarations, `13` border-radius declarations, `22` background declarations, `29` color declarations, `1` box-shadow declaration, `1` outline declaration, `2` `rgba(...)` references, `1` `!important`, `71` doc-block-source classes, `43` public classes, `28` candidate-public classes, `734` raw-doc lines, `18` generated docs blocks, `13` code examples, `36` generated class tokens, generated `source_css` coverage, index import presence, core import absence, and package-facing dist file presence.
- Markdown sanity checks:
  - Passed: `VDS-2120` appears as `done`, `VDS-0500` remains `in-progress`, the documentation-block artifact path resolves, plan/artifact scope agrees that no runtime/generated files changed, and the next recommended item is `VDS-2130 Feedback system audit`.
- `git diff --check`
  - Passed for changed planning files.

Notes:

- The WSL wrapper command is not available in this shell, so validation commands were run directly from `@24vlh/vds`.
