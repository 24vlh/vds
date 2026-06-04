# VDS Authoring Layer Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-2040`

This file records the authoring layer component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/authoring.css` is the source truth for current authoring-layer CSS behavior.
- `@24vlh/vds/doc-raw/vds-authoring.doc.html` and `@24vlh/agents/docs_vds/components/vds-authoring.json` are docs/index evidence.
- The current implementation is a pure CSS documentation/prose composition layer.
- Consumer/docs tooling owns generated heading IDs, anchor href targets, semantic footnote markup, icon accessible names, Markdown/MDX transforms, focus movement, and live/runtime docs behavior.
- Existing authoring classes, local variables, semantic variants, `data-variant` patterns, Markdown/MDX aliases, prose helpers, and doc-block integration selectors are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, or generated output refresh happens in `VDS-2040`.

## Source CSS Evidence

`@24vlh/vds/src/components/authoring.css` currently has:

- Lines: `544`.
- Selector blocks: `70`.
- Expanded selectors: `143`.
- Declarations: `243`.
- Custom property declarations: `96`.
- Unique local custom property names: `20`.
- `var(...)` references: `189`.
- `!important` declarations: `0`.
- Hard-coded hex colors: `0`.
- `rgb(...)` / `rgba(...)` colors: `0`.

Media blocks:

- `(hover: none)`
- `(max-width: 1024px)`

State, interaction, and motion evidence:

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
- `:where(...)` uses: `14`.
- Semantic info/success/warning/danger token references are used for authoring variants.
- Accent variants use `accent-soft-*` fallbacks.

Package-facing output:

- `@24vlh/vds/dist/components/authoring.css` exists.
- `@24vlh/vds/dist/components/authoring.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/authoring.css`.
- `@24vlh/vds/src/core.css` does not import authoring.

## Component Contract

Current authoring source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Scope roots | `[data-vds-authoring]`, `.vds-authoring`, `.authoring`, `.doc-authoring` | activate authoring-local variables |
| Admonitions | `.admonition`, `.admonition__*`, `.admonition--*` | rich documentation callout blocks |
| Markdown/MDX callouts | `.md-callout`, `.md-note`, `.md-info`, `.md-tip`, `.md-success`, `.md-warning`, `.md-danger`, `.md-important` | generated Markdown callout styling |
| Heading anchors | `.heading-anchor`, `.heading-anchor--always` | visible/deep-link anchors for headings |
| Footnotes | `.fn-ref`, `.fn-back`, `.footnotes` | superscript references and footnote lists |
| Inline markers | `.inline-marker`, `.inline-marker--*` | short semantic inline labels |
| Prose helpers | `.prose-lead`, `.prose-muted`, `.prose-tight`, `.prose-relaxed`, `.prose-grid-*` | long-form copy rhythm and simple prose grids |
| Doc-block integration | `.doc-block__body .admonition`, `.doc-block__body .md-*` | margin normalization inside docs blocks |

Source interpretation:

- Authoring is a documentation/prose styling layer, not a parser or runtime behavior system.
- Heading anchors depend on document IDs and href targets supplied by docs tooling or authors.
- Footnote links depend on semantic markup supplied by authors or docs tooling.
- Icons inside authoring examples depend on icon components and accessible labels supplied by markup.

## Local Token Surface

Current local variable groups:

| Family | Variables | Role |
| --- | --- | --- |
| Shared highlight | `--highlight-border-width` | common rail/border width |
| Admonition | `--admonition-bg`, `--admonition-border`, `--admonition-border-color`, `--admonition-gap`, `--admonition-icon-color`, `--admonition-pad-x`, `--admonition-pad-y`, `--admonition-radius`, `--admonition-shadow`, `--admonition-text`, `--admonition-title-color` | rich callout structure and variants |
| Markdown callout | `--callout-bg`, `--callout-border-color`, `--callout-text` | generated Markdown/MDX callout variants |
| Footnote | `--footnote-size` | footnote text scale |
| Inline marker | `--marker-bg`, `--marker-border`, `--marker-radius`, `--marker-text` | inline label treatment |

Top referenced upstream token groups:

- Text and typography: `--color-text`, `--color-text-muted`, `--text-xs`, `--text-sm`, `--line-height-relaxed`.
- Spacing and radius: `--space-*`, `--radius-md`, `--radius-sm`, `--radius-pill`.
- Semantic states: `--semantic-info-*`, `--semantic-success-*`, `--semantic-warning-*`, `--semantic-danger-*`.
- Accent and link roles: `--accent-soft-*`, `--color-accent`, `--color-on-accent`, `--link-text-hover`.
- Borders and surfaces: `--border-width-strong`, `--color-border-subtle`, `--color-border-strong`, `--color-surface-subtle`.

Audit conclusions:

- Local variables are component-owned aliases.
- They are not approved for rename, removal, promotion, or deprecation in this item.
- Future semantic cleanup must coordinate with theme contrast work and docs rewrite work.

## Selector Inventory Evidence

Selector inventory totals:

- Authoring source classes: `56`.
- Public classes: `48`.
- Candidate-public classes: `8`.

Class family counts:

| Group | Total |
| --- | ---: |
| root scopes | `3` |
| admonition | `22` |
| Markdown/MDX callout | `8` |
| heading anchor | `2` |
| footnote | `3` |
| inline marker | `9` |
| prose helper | `8` |
| doc-block integration | `1` |

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
- `.doc-block__body` integration crosses component boundaries and should be classified before cleanup.
- Markdown/MDX aliases are compatibility-sensitive because generated content pipelines may emit them directly.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-authoring.doc.html` has `837` lines.
- Docs cover installation/dependencies, authoring scope, admonitions, Markdown/MDX callouts, heading anchors, footnotes, inline markers, prose helpers, doc-block integration, and accessibility/usage rules.
- Docs examples use `./css/...` paths and `themes/slate.css`; these are docs/package guidance evidence, not source truth.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-authoring.json`
- Blocks: `10`.
- Code examples: `10`.
- Generated class tokens: `64`.
- Generated `source_css`: `authoring.css`, `base.css`, `icons.css`, `layout.css`, `primitives.css`, `themes/slate.css`, and `typography.css`.

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

- Generated authoring `source_css` metadata is present and should be preserved as pipeline evidence.
- Docs cover semantic usage strongly but do not describe reduced-motion, forced-colors, mobile/responsive mechanics, or keyboard behavior directly.

## Accessibility and Behavior Boundaries

Consumer/docs tooling remains responsible for:

- Generated heading IDs and anchor targets.
- `aria-label` or visible text for heading anchors when the visible glyph is only `#`.
- Semantic footnote reference/back-link structure.
- Decorative icon hiding and meaningful icon-only names.
- Markdown/MDX transform output.
- Focus movement, scroll restoration, routing, and live announcements.

CSS source currently provides:

- Hover and focus-within reveal behavior for heading anchors.
- Touch/non-hover visibility fallback for heading anchors.
- Semantic color mappings for callouts and inline markers.
- Prose rhythm and grid collapse behavior.

Audit findings:

- No file-local `:focus-visible` selectors.
- No reduced-motion block despite one transition.
- No forced-colors block despite semantic color-heavy surfaces.
- No keyboard docs mentions.

## Risks and Future Routing

- The source comment mentions `Titanium`, but the current approved theme matrix is Graphite, Carbon, Navy, and Slate.
- Heading anchors need later review for visible keyboard focus and target usability.
- Semantic authoring variants inherit theme contrast issues from prior theme audits.
- Prose grid helpers overlap conceptually with layout and utility surfaces.
- Docs package guidance may need later alignment because examples use `./css/...` paths and a single Slate theme example.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Authoring CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Generated docs metadata refresh: later approved docs-index item.
- Selector classification changes: later approved selector inventory item.
- Theme/contrast checks: later approved visual/contrast QA items.
- Dist refresh: later approved release/build-output item.

