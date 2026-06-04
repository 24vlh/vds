# VDS-2040 Authoring Layer Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2040`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2040-authoring-layer-audit.md`

## 1. Goal

Create the authoring layer component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only authoring contract: documentation prose scopes, admonitions, Markdown/MDX callouts, heading anchors, footnotes, inline markers, prose helpers, doc-block integration, responsive/touch behavior, docs/index metadata, selector classifications, and accessibility/theming risks before any authoring CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/authoring.css` selector, token, theme, interaction, media, and composition evidence.
- Record public and candidate-public selector inventory evidence for the authoring class surface.
- Record raw docs and generated docs-index metadata for `vds-authoring`.
- Record package-facing `dist/components/authoring.css` and `.min.css` presence.
- Add an authoring layer component audit artifact for later CSS fixes, docs rewrite, accessibility review, theme/contrast checks, docs-index cleanup, selector classification, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2040` is done, and the next recommended item is `VDS-2050`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding JavaScript anchor behavior, routing, Markdown parsing, footnote processing, focus movement, or docs runtime behavior.
- Adding reduced-motion, forced-colors, responsive screenshots, visual checks, selector reclassification, docs rewrites, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-authoring.json`
- Repo files:
  - `@24vlh/vds/src/components/authoring.css`
  - `@24vlh/vds/doc-raw/vds-authoring.doc.html`
  - `@24vlh/vds/dist/components/authoring.css`
  - `@24vlh/vds/dist/components/authoring.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/authoring.css` has `544` lines.
- Selector blocks: `70`.
- Expanded selectors: `143`.
- Declarations: `243`.
- Custom property declarations: `96`.
- Unique local custom property names: `20`.
- `var(...)` references: `189`.
- `!important` declarations: `0`.
- Hard-coded hex colors: `0`.
- `rgb(...)` / `rgba(...)` colors: `0`.

Media and responsive/touch evidence:

- Media blocks:
  - `(hover: none)`
  - `(max-width: 1024px)`
- The hover-none media block keeps heading anchors visible on touch/non-hover devices.
- The `max-width: 1024px` media block collapses prose grid helpers to one column.

Interaction evidence:

- `:hover` selectors: `8`.
- `:focus-within` selectors: `6`.
- `:focus-visible` selectors: `0`.
- `:active` selectors: `0`.
- Transition declarations: `1`.
- Transform declarations: `1`.
- Animation declarations: `0`.
- `@keyframes`: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Layout and theme evidence:

- `display: grid` declarations: `5`.
- `display: flex` declarations: `2`.
- Overflow declarations: `0`.
- Semantic token groups are used for info, success, warning, danger, accent, and neutral authoring variants.
- Accent variants use `accent-soft-*` fallbacks and inherit contrast risk from theme-token audits.

Package-facing output evidence:

- `@24vlh/vds/dist/components/authoring.css` exists.
- `@24vlh/vds/dist/components/authoring.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/authoring.css`.
- `@24vlh/vds/src/core.css` does not import authoring.

## 5. Component Contract

Current authoring source surfaces:

- Root/local-token scopes:
  - `[data-vds-authoring]`
  - `.vds-authoring`
  - `.authoring`
  - `.doc-authoring`
- Admonitions:
  - `.admonition`
  - `.admonition__icon`
  - `.admonition__content`
  - `.admonition__title`
  - `.admonition__body`
  - `.admonition__meta`
  - `.admonition__footer`
  - `.admonition__actions`
  - `.admonition__list`
  - semantic, accent, neutral, bordered, outline, plain, and compact modifiers
- Markdown/MDX callouts:
  - `.md-callout`
  - `.md-note`
  - `.md-info`
  - `.md-tip`
  - `.md-success`
  - `.md-warning`
  - `.md-danger`
  - `.md-important`
- Heading anchors:
  - `.heading-anchor`
  - `.heading-anchor--always`
- Footnotes:
  - `.fn-ref`
  - `.fn-back`
  - `.footnotes`
- Inline markers:
  - `.inline-marker`
  - semantic, accent, neutral, outline, and pill modifiers
- Prose helpers:
  - `.prose-lead`
  - `.prose-muted`
  - `.prose-tight`
  - `.prose-relaxed`
  - `.prose-grid-2`
  - `.prose-grid-3`
  - `.prose-grid-1-2`
  - `.prose-grid-2-1`
- Cross-component integration:
  - `.doc-block__body .admonition`
  - `.doc-block__body .md-*`
  - `.doc-block__body .md-callout`

Source interpretation:

- Authoring is a documentation/prose composition layer, not an app runtime or docs loader.
- Authoring supplies styling for semantic documentation markup and generated Markdown/MDX surfaces.
- Consumer/docs tooling owns heading IDs, anchor href targets, semantic footnote markup, Markdown/MDX transforms, icon accessible names, focus movement, and live/runtime docs behavior.
- Current selectors and `data-variant` patterns are compatibility-sensitive.

## 6. Local Token Surface

Current local custom property names:

- `--highlight-border-width`
- `--admonition-bg`
- `--admonition-border`
- `--admonition-border-color`
- `--admonition-gap`
- `--admonition-icon-color`
- `--admonition-pad-x`
- `--admonition-pad-y`
- `--admonition-radius`
- `--admonition-shadow`
- `--admonition-text`
- `--admonition-title-color`
- `--callout-bg`
- `--callout-border-color`
- `--callout-text`
- `--footnote-size`
- `--marker-bg`
- `--marker-border`
- `--marker-radius`
- `--marker-text`

Audit conclusions:

- Local variables are component-owned aliases.
- They pull from primitive spacing, radius, border, typography, motion, theme color, link, accent-soft, and semantic tokens.
- They are not approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

Selector inventory evidence:

- `56` authoring source classes are defined in selector inventory.
- Classification totals:
  - `48` public.
  - `8` candidate-public.
- Class family counts:
  - root scopes: `3`.
  - admonition: `22`.
  - Markdown/MDX callout: `8`.
  - heading anchor: `2`.
  - footnote: `3`.
  - inline marker: `9`.
  - prose helper: `8`.
  - doc-block integration: `1`.

Candidate-public classes:

- `.vds-authoring`
- `.doc-authoring`
- `.heading-anchor--always`
- `.admonition--important`
- `.admonition--success`
- `.md-info`
- `.md-success`
- `.md-important`

Audit conclusions:

- Candidate-public status reflects current docs coverage, not permission to remove or rename source-defined selectors.
- Authoring crosses documentation prose, Markdown output, inline labels, and doc-block spacing surfaces; later cleanup must preserve those compatibility boundaries.

## 8. Docs and Generated Index Evidence

Raw docs evidence:

- `@24vlh/vds/doc-raw/vds-authoring.doc.html` has `837` lines.
- Raw docs cover installation/dependencies, authoring scope, admonitions, Markdown/MDX callouts, heading anchors, footnotes, inline markers, prose helpers, doc-block integration, and accessibility/usage rules.
- Raw docs examples use `./css/...` paths and a Slate theme example; this is docs/package guidance evidence, not source truth.

Generated index evidence:

- `@24vlh/agents/docs_vds/components/vds-authoring.json`
- Blocks: `10`.
- Code examples: `10`.
- Generated class tokens: `64`.
- Generated `source_css`:
  - `authoring.css`
  - `base.css`
  - `icons.css`
  - `layout.css`
  - `primitives.css`
  - `themes/slate.css`
  - `typography.css`

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `aria` | `33` |
| `Markdown` | `9` |
| `MDX` | `5` |
| `admonition` | `101` |
| `callout` | `21` |
| `inline-marker` | `40` |
| `prose` | `30` |
| `footnote` | `13` |
| `focus` | `2` |
| `touch` | `1` |
| `contrast` | `3` |
| `keyboard` | `0` |
| `responsive` | `0` |
| `mobile` | `0` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |

Audit conclusions:

- Unlike some prior component docs, generated authoring metadata has non-empty `source_css`.
- Docs strongly cover semantic authoring use, but they do not directly cover reduced-motion, forced-colors, mobile/responsive mechanics, or keyboard behavior.

## 9. Risks and Audit Rules

- Source comments mention `Titanium`, but the current approved theme matrix is Graphite, Carbon, Navy, and Slate.
- Heading anchors rely on hover/focus-within visibility plus hover-none media behavior; file-local `:focus-visible` behavior is absent.
- A transition exists without file-local reduced-motion handling.
- Forced-colors handling is absent despite semantic color-heavy authoring surfaces.
- Prose grid helpers overlap conceptually with layout and utilities and must remain compatibility-sensitive.
- `.doc-block__body` integration crosses component boundaries and should be classified before cleanup.
- Semantic variants and accent-soft fallbacks inherit contrast risks from the theme audits.
- No authoring selector, local variable, docs example, generated index field, or package-facing output is changed in `VDS-2040`.

## 10. Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-authoring-layer-audit.md` becomes the decision source for later authoring CSS fixes, docs rewrite, accessibility review, theme/contrast checks, docs-index cleanup, selector classification, migration notes, and release verification.

## 11. Validation Plan

Run after documentation updates:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
  - If this fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Read-only authoring audit scan.
- Markdown sanity checks.
- `git diff --check`

Forbidden commands:

- `pnpm run build`
- `pnpm run build:prod`
- `pnpm run docs:vds:index`
- `pnpm run inventory:selectors`
- `pnpm run consumer:scan`
- any write/regeneration command.

## 12. Implementation Log

- Added `@24vlh/vds/docs/planning/features/VDS-2040-authoring-layer-audit.md`.
- Added `@24vlh/vds/docs/planning/components/vds-authoring-layer-audit.md`.
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
  - Per `VDS-2040` scope, `pnpm run consumer:scan` was not run.
- Read-only authoring audit scan:
  - Confirmed `544` source CSS lines, `70` selector blocks, `143` selectors, `243` declarations, `96` custom property declarations, `20` unique local custom property names, `189` `var(...)` references, `2` media blocks, `8` `:hover` selectors, `6` `:focus-within` selectors, `0` `:focus-visible` selectors, `0` `:active` selectors, `1` transition declaration, `1` transform declaration, `0` animations/keyframes, `0` reduced-motion blocks, `0` forced-colors blocks, `5` grid declarations, `2` flex declarations, `0` overflow declarations, `0` hard-coded hex/rgb colors, `0` `!important`, `56` authoring classes, `48` public classes, `8` candidate-public classes, `837` raw-doc lines, `10` generated docs blocks, `10` code examples, `64` generated class tokens, non-empty generated `source_css`, index import presence, core import absence, and package-facing dist file presence.
- Markdown sanity checks:
  - Passed: `VDS-2040` appears as `done`, `VDS-0500` remains `in-progress`, the authoring artifact path resolves, plan/artifact scope agrees that no runtime/generated files changed, and the next recommended item is `VDS-2050 Avatar component audit`.
- `git diff --check`
  - Passed for changed planning files.

Notes:

- The WSL wrapper command is not available in this shell, so validation commands were run directly from `@24vlh/vds`.
