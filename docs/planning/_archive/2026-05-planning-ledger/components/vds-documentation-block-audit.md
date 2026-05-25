# VDS Documentation Block Audit

Last updated: `2026-05-24`

Source item: `VDS-2120`

This file records the documentation block component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/doc-block.css` is the source truth for current doc-block CSS behavior.
- `@24vlh/vds/doc-raw/vds-doc-block.doc.html` and `@24vlh/agents/docs_vds/components/vds-doc-block.json` are docs/index evidence.
- Doc blocks are CSS documentation surfaces for shells, previews, code frames, toolbars, syntax hooks, diff blocks, and docs helper layouts.
- Consumer/docs tooling owns copy behavior, expand/collapse state, semantic toolbar buttons, keyboard behavior, generated code content, syntax token generation, and preview component behavior.
- Existing doc-block selectors, syntax hooks, copy/collapsed/expanded state hooks, split/diff/helper variants, responsive behavior, and local variables are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, or generated output refresh happens in `VDS-2120`.

## Source CSS Evidence

`@24vlh/vds/src/components/doc-block.css` currently has:

- Lines: `733`.
- Selector blocks: `98`.
- Expanded selectors: `105`.
- Declarations: `307`.
- Custom property declaration lines: `3`.
- Unique local token names: `3`.
- `var(...)` references: `199`.
- `!important` declarations: `1`.
- `rgba(...)` references: `2`, in the collapsed code gradient.
- `color-mix(...)` uses: `0`.

Media and interaction evidence:

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

Layout and visual evidence:

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

Package-facing output:

- `@24vlh/vds/dist/components/doc-block.css` exists.
- `@24vlh/vds/dist/components/doc-block.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/doc-block.css`.
- `@24vlh/vds/src/core.css` does not import doc block.

## Component Contract

Current doc-block source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root | `[data-vds-dock-block]`, `.vds-dock-block` | doc-block-local variables, with source-root spelling evidence |
| Base shell | `.doc-block`, root modifiers | documentation section shell and surface/density variants |
| Header/body | `.doc-block__header`, `.doc-block__title`, `.doc-block__subtitle`, `.doc-block__summary`, `.doc-block__section`, `.doc-block__subsection`, `.doc-block__description`, `.doc-block__body` | documentation text structure |
| Preview/split | `.doc-block__preview`, preview modifiers, split modifiers | visual examples and split documentation layouts |
| Code/toolbar | `.doc-block__code`, `.doc-block__toolbar`, `.doc-block__lang`, `.doc-block__actions`, `.doc-block__action`, `.doc-block__code-toggle` | code frame and toolbar/action styling |
| Code states | `.doc-block--collapsed`, `.doc-block--expanded`, `.doc-block__code.is-copied`, numbered-code variants | visual state hooks for docs runtime |
| Diff/syntax | diff classes and syntax token selectors | change-log, syntax highlighting, and code token styling |
| Helpers/presets | pills, stacks, columns, steps, highlights, do/don't, concept, pattern, API, example | docs authoring helper layouts and presets |

Source interpretation:

- Doc blocks are visual documentation surfaces, not a JavaScript docs runtime.
- CSS provides documentation shells, preview and code frames, toolbar/action styling, visual copy/collapsed/expanded hooks, syntax highlighting hooks, diff surfaces, helper layouts, responsive collapse, and reduced-motion styling.
- Consumer/docs tooling owns interactive behavior and generated content.

## Local Token Surface

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

## Selector Inventory Evidence

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

## Docs and Generated Index Evidence

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

## Accessibility and Behavior Boundaries

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

## Risks and Future Routing

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

## Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-documentation-block-audit.md` becomes the decision source for later doc-block CSS fixes, docs rewrite, docs-runtime guidance, selector classification, metadata refresh, accessibility review, theme/contrast checks, migration notes, and release verification.
