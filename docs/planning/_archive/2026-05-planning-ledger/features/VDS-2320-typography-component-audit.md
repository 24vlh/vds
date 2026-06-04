# VDS-2320 Typography Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-25`
- Master item: `VDS-2320`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2320-typography-component-audit.md`

## 1. Goal

Create the typography component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only typography contract: prose wrappers, heading hierarchy, body rhythm, inline semantics, code/pre styling, lists, blockquotes, pullquotes, figures/captions, prose tables, badge/footnote helpers, docs/index metadata, package-facing dist presence, and accessibility/theming risks before any typography CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/typography.css` selector, local variable, prose, heading, body rhythm, inline, code, list, quote, figure, prose table, badge, footnote, theme, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the typography class surface.
- Record raw docs and generated docs-index metadata for `vds-typography`.
- Record package-facing `dist/components/typography.css` and `.min.css` presence.
- Add a typography component audit artifact for later typography CSS fixes, docs rewrite, selector classification, prose/accessibility guidance, responsive/readability policy, theme/contrast checks, forced-colors cleanup, migration notes, and release verification.
- Update the master feature map so `VDS-2320` is done and the next recommended item is `VDS-3010 Documentation information architecture`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding semantic heading policy, link routing, figure/media meaning, code generation, footnote target generation, truncation/clamp behavior, responsive prose rules, accessibility smoke tests, visual checks, selector reclassification, docs rewrites, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-typography.json`
- Repo files:
  - `@24vlh/vds/src/components/typography.css`
  - `@24vlh/vds/doc-raw/vds-typography.doc.html`
  - `@24vlh/vds/dist/components/typography.css`
  - `@24vlh/vds/dist/components/typography.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/typography.css` has `236` lines.
- Selector blocks: `34`.
- Expanded selectors: `50`.
- Declarations: `99`.
- Local custom property declaration lines: `4`.
- Unique local custom property names: `4`.
- `var(...)` references: `72`.
- `!important` declarations: `7`.
- Hard-coded hex/rgb color references: `0`.
- `color-mix(...)` uses: `0`.

Typography and style evidence:

- Font-size declarations: `18`.
- Font-weight declarations: `3`.
- Line-height declarations: `4`.
- Font-family declarations: `3`.
- Text-align declarations: `3`.
- Overflow declarations: `1`.
- Display declarations: `1`.
- Max-width declarations: `1`.
- Media blocks: `0`.
- Container queries: `0`.

State and motion evidence:

- `:hover` selector matches: `0`.
- `:focus-visible` selector matches: `0`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled selector matches: `0`.
- Transition declarations: `0`.
- Transform declarations: `0`.
- Animation declarations: `0`.
- `@keyframes`: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Package-facing output evidence:

- `@24vlh/vds/dist/components/typography.css` exists.
- `@24vlh/vds/dist/components/typography.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/typography.css`.
- `@24vlh/vds/src/core.css` does not import typography.

## 5. Component Contract

Current typography source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root scope | `[data-vds-typography]`, `.vds-typography` | local typography variable scope |
| Prose wrapper | `.typography` | base color, text size, and line-height for prose content |
| Headings | `.typography h1` through `.typography h6` | heading stack, size scale, rhythm, and first-child reset |
| Body rhythm | `.typography p`, `.typography strong`, `.typography em` | paragraph spacing and inline emphasis styling |
| Inline code | `.typography code` | inline code surface, border, padding, radius, and mono font |
| Table code override | `.table code` | removes inline code chrome inside component tables |
| Code blocks | `.typography pre`, `.typography pre code` | code block shell, overflow, border, padding, and reset for nested code |
| Lists | `.typography ul`, `.typography ol`, `.typography li`, nested list selectors | list indentation and vertical rhythm |
| Quotes | `.typography blockquote`, `.typography .pullquote` | prose quote and pullquote presentation |
| Figures | `.typography figure`, `.typography figcaption`, `.typography img` | media max-width, caption, radius, and center alignment |
| Prose tables | `.typography table:not(.table)` and descendants | prose-only table layout, caption, cell, and header styling |
| Inline badge | `.typography .badge-inline` | inline badge helper within prose |
| Footnotes | `.typography .footnotes`, `.typography .fn-ref`, `.typography .fn-backref` | footnote section, reference, and back-reference styling |

Source interpretation:

- `@24vlh/vds/src/components/typography.css` is the source truth for current typography CSS behavior.
- Typography CSS owns prose presentation and helper hooks for rich text content.
- CSS does not own semantic heading selection, link routing, figure/media meaning, code generation, footnote targets/backrefs, truncation behavior, or responsive prose policy.
- Existing typography selectors, local variables, prose rules, code/table overrides, badge/footnote helpers, docs examples, and package-facing outputs are compatibility-sensitive.

Source/docs boundary:

- Source comments mention predictable behavior across reduced-motion, but the file has no motion behavior and no file-local reduced-motion block.
- Current source has no focus, keyboard, responsive/mobile, truncation/clamp, or forced-colors selectors.
- Raw docs include accessibility and semantic usage rules, but runtime/content semantics remain consumer/docs-owned.

## 6. Token and Local Variable Surface

Local custom properties:

- `--blockquote-border-width`
- `--pullquote-border-width`
- `--prose-table-cell-padding`
- `--typography-code-block-border`

Audit conclusions:

- Typography local variables are narrow and cover quote rail widths, prose table cell padding, and code block border color.
- The rest of typography styling relies on shared text, spacing, radius, color, code, footnote, and table/theme tokens.
- `.table code` and `.typography pre code` use `!important` to preserve current code reset behavior and must be classified before cleanup.
- No local variable, token reference, prose table hook, code override, quote hook, badge helper, or footnote helper is approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

Selector inventory totals:

- Typography-source classes: `8`.
- Public classes: `7`.
- Candidate-public classes: `1`.

Public source classes:

- `.badge-inline`
- `.fn-backref`
- `.fn-ref`
- `.footnotes`
- `.pullquote`
- `.table`
- `.typography`

Candidate-public class:

- `.vds-typography`

Audit conclusions:

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- `.vds-typography` is source-defined and remains compatibility-sensitive even though it is not documented in raw docs.
- `.badge-inline` is source-defined in typography and public through selector inventory evidence, but it is not prominent in the generated `vds-typography` class-token surface.
- Future selector pruning, helper relocation, or reclassification requires migration approval.

## 8. Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-typography.doc.html` has `913` lines.
- Docs cover layer stack, type scale/tokens, heading hierarchy, body text/rhythm, inline semantics, lists/nested structure, blockquotes/pullquotes, figures/captions, prose tables versus component tables, code blocks, footnotes/references, full specimen, and accessibility/usage rules.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-typography.json`
- Blocks: `13`.
- Code examples: `15`.
- Generated class tokens: `24`.
- Generated `source_css`: `base.css`, `primitives.css`, and `typography.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `typography` | `65` |
| `heading` | `20` |
| `title` | `21` |
| `body` | `30` |
| `prose` | `15` |
| `caption` | `17` |
| `label` | `11` |
| `link` | `10` |
| `inline code` | `6` |
| `code` | `237` |
| `blockquote` | `9` |
| `quote` | `18` |
| `list` | `20` |
| `balanced` | `1` |
| `wrap` | `5` |
| `contrast` | `3` |
| `aria` | `6` |
| `responsive` | `0` |
| `mobile` | `0` |
| `focus` | `0` |
| `keyboard` | `0` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |
| `truncate` | `0` |
| `clamp` | `0` |

Docs coverage and gaps:

- Raw docs cover semantic HTML, strict heading hierarchy, prose table boundaries, captions, short inline-code guidance, blockquote semantics, footnote bidirectional navigation, and active theme contrast-token expectations.
- Raw docs do not directly cover responsive/mobile behavior, focus, keyboard, reduced-motion, forced-colors, truncation/clamp, `kbd`, `sr-only`, or screen-reader wording.
- Generated metadata includes `typography.css`; no manual generated-index edit is approved in this item.

## 9. Accessibility, Runtime, and Content Boundaries

Consumer/docs code owns:

- Semantic heading order and choosing meaningful heading text.
- Link destinations, link text, and routing behavior.
- Figure/media alternatives, decorative media handling, captions, and image/video meaning.
- Code content generation, language labels, copy behavior, and code-block semantics.
- Prose table appropriateness, captions, headers, and when to use the dedicated table component.
- Footnote ids, reference targets, back-reference targets, and navigation behavior.
- Responsive prose composition, truncation/clamp behavior, balanced wrapping choices, and readability constraints.
- Accessible context, live announcements for dynamic prose, and screen-reader wording where needed.

Accessibility interpretation:

- Typography CSS can style semantic elements but cannot make prose semantically correct.
- Prose tables are for simple authored content; dense or interactive data remains the table component's responsibility.
- Inline code, badge, footnote, pullquote, and figure styling must be paired with meaningful text alternatives and semantic markup.
- Lack of local focus, keyboard, responsive, motion, and forced-colors selectors is recorded as audit evidence only.

Audit conclusions:

- Typography CSS is compatibility-sensitive because it reaches native prose elements and has cross-component hooks such as `.table code`.
- Source CSS wins over docs where docs imply guidance not represented as CSS behavior.
- Actual responsive/readability policy, semantic prose authoring, and accessibility guidance remain later implementation/docs work.

## 10. Risks and Follow-Up Routing

Audit findings only:

- `.table code` creates cross-component table/typography coupling that must be reviewed before code styling cleanup.
- `!important` code resets may be intentional compatibility behavior and must be classified before removal.
- `.badge-inline` and footnote helpers overlap prose/documentation concerns and need later selector classification.
- Raw docs mention balanced wrapping lightly, but source has no truncation, clamp, balance, hyphenation, or responsive prose helpers.
- Source has no forced-colors handling; contrast depends on active theme tokens and prior theme audits.
- Source has no local focus or keyboard styles; interactive descendants remain component/consumer-owned.
- Generated docs metadata is present, but later docs rewrite should reconcile class-token coverage with source-defined helpers.

Deferred work:

- Typography CSS fixes, raw docs rewrites, generated docs refreshes, selector inventory changes, accessibility smoke tests, responsive screenshots, visual/contrast checks, package/import changes, runtime prose behavior, and dist refreshes.

## 11. Validation Plan

Approved validation for this planning-only item:

- Run `pnpm run audit:tokens`.
- Run `pnpm run audit`.
- Run `pnpm run audit:dist`; if the generated-artifact checker hangs again, stop it after a reasonable wait and record that validation limitation without running regeneration.
- Run `pnpm run audit:consumers`; if it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Run/read a read-only typography audit scan recording CSS counts, local variables, selector inventory evidence, docs/index evidence, prose/heading/body/inline/list/blockquote/figure/table/code/footnote evidence, accessibility and responsive gaps, and dist presence.
- Run markdown sanity checks:
  - `VDS-2320` appears as `done`.
  - The typography audit artifact path resolves.
  - The plan and artifact agree that no CSS, docs, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Next item is `VDS-3010 Documentation information architecture`.
- Run `git diff --check` for changed planning files.

Forbidden validation:

- Do not run `pnpm run build`.
- Do not run `pnpm run build:prod`.
- Do not run `pnpm run docs:vds:index`.
- Do not run `pnpm run inventory:selectors`.
- Do not run `pnpm run consumer:scan`.
- Do not run any write/regeneration command.

## 12. Implementation Log

- `2026-05-25`: Added the VDS-2320 typography component audit plan and artifact. Updated the master feature map to mark `VDS-2320` done and point the next recommended item at `VDS-3010 Documentation information architecture`.
- `2026-05-25`: `pnpm run audit:tokens` passed.
- `2026-05-25`: `pnpm run audit` passed, including CSS parse, class, token, docs dependency, and selector inventory freshness checks.
- `2026-05-25`: `timeout 120s pnpm run audit:dist` reached the timeout while running `node static/js/check-generated-artifacts.js --check`; no generated artifact refresh was run.
- `2026-05-25`: `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale; `pnpm run consumer:scan` was not run because it is a write/regeneration command.
- `2026-05-25`: Read-only typography audit scan confirmed source, docs/index, selector inventory, package import, and dist-presence evidence recorded in this plan and the audit artifact.
- `2026-05-25`: Markdown sanity checks passed for `VDS-2320` done status, audit artifact path, no-runtime-change agreement, and next recommended item.
- `2026-05-25`: `git diff --check -- docs/planning/master-feature-map.md` passed; `git diff --no-index --check` reported no whitespace errors for the VDS-2320 planning files and master-map snapshot.
