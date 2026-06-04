# VDS Typography Scale and Rhythm Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-1030`

This file records the VDS typography scale and rhythm audit for the tokens, themes, and foundation track. It is a planning artifact only: no CSS, token names, token values, raw docs, generated `dist`, package metadata, scripts, workflows, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/primitives.css` owns the typography scale, font family, line-height, weight, letter-spacing, and footnote-size primitives.
- `@24vlh/vds/src/base.css` owns global element defaults and text-adjacent reset behavior.
- `@24vlh/vds/src/components/typography.css` owns prose rendering for `.typography`.
- `@24vlh/vds/src/components/utilities.css` owns text utility classes.
- `@24vlh/vds/src/components/authoring.css` owns adjacent prose helper classes.
- Existing typography tokens, text utilities, prose helpers, and docs examples remain compatibility-sensitive until a later approved cleanup or migration item says otherwise.

## Typography Primitive Tokens

`@24vlh/vds/src/primitives.css` currently defines `28` typography primitive tokens:

- Font families:
  - `font-family-sans`
  - `font-family-mono`
- Text scale:
  - `text-xxxs`
  - `text-xxs`
  - `text-xs`
  - `text-sm`
  - `text-base`
  - `text-md`
  - `text-lg`
  - `text-xl`
  - `text-2xl`
  - `text-3xl`
  - `text-4xl`
  - `text-5xl`
- Line heights:
  - `line-height-xs-tight`
  - `line-height-tight`
  - `line-height-xl-tight`
  - `line-height-snug`
  - `line-height-normal`
  - `line-height-relaxed`
- Weights:
  - `font-weight-regular`
  - `font-weight-medium`
  - `font-weight-semibold`
  - `font-weight-bold`
- Letter spacing:
  - `letter-tight`
  - `letter-normal`
  - `letter-loose`
- Footnotes:
  - `footnote-font-size`

From `VDS-1010`, `line-height-xs-tight` and `font-weight-regular` are currently unreferenced in source. They are audit findings only and not approved removals.

## Source Roles and Evidence

| Source | Lines | Custom property definitions | `var(...)` references | Selector blocks | Role |
| --- | ---: | ---: | ---: | ---: | --- |
| `src/base.css` | `305` | `7` | `34` | `45` | Global defaults, reset, body text, links, lists, code/pre, table reset, focus, selection, and reduced-motion interaction with text. |
| `src/components/typography.css` | `236` | `4` | `72` | `34` | Prose rendering for `.typography`, headings, paragraphs, lists, inline code, pre/code blocks, blockquotes, pullquotes, figures, prose tables, badges, and footnotes. |
| `doc-raw/vds-typography.doc.html` | `913` | n/a | n/a | n/a | Runnable typography examples and guidance. |
| `doc-raw/vds-base.doc.html` | `1918` | n/a | n/a | n/a | Base layer examples and guidance that overlap global text defaults. |

`src/components/typography.css` defines these local prose tokens:

- `typography-code-block-border`
- `prose-table-cell-padding`
- `blockquote-border-width`
- `pullquote-border-width`

These are component-local aliases for now, not global primitives.

## Source-Wide Typography Declarations

| Declaration | Total | Uses `var(...)` | Hard-coded | Keyword/inherit |
| --- | ---: | ---: | ---: | ---: |
| `font-size` | `410` | `401` | `9` | `0` |
| `line-height` | `91` | `61` | `27` | `3` |
| `font-weight` | `141` | `75` | `66` | `0` |
| `letter-spacing` | `50` | `8` | `42` | `0` |
| `font-family` | `26` | `24` | `0` | `2` |

High-volume files for typography declarations include:

- `font-size`: `command.css`, `android-shell.css`, `guidance.css`, `utilities.css`, `flows.css`, `hero.css`, `doc-block.css`, and `navigation.css`.
- `line-height`: `android-shell.css`, `utilities.css`, `inbox.css`, `doc-block.css`, `accordion.css`, `authoring.css`, `guidance.css`, and `typography.css`.
- `font-weight`: `android-shell.css`, `command.css`, `tables.css`, `guidance.css`, `inbox.css`, `doc-block.css`, `navigation.css`, and `utilities.css`.
- `letter-spacing`: `guidance.css`, `identity.css`, `command.css`, `android-shell.css`, `content-blocks.css`, `utilities.css`, `doc-block.css`, and `flows.css`.

Hard-coded typography values are findings only. Later cleanup must classify whether each value is an intentional optical adjustment, a component-local alias need, a primitive gap, or a cleanup candidate.

## Public Selector Evidence

The selector inventory currently contains `54` typography/prose/text matching selectors:

- `36` are `public`.
- `18` are `candidate-public`.

Relevant surfaces include:

- Prose wrapper:
  - `.typography` is `public`.
  - `.vds-typography` is `candidate-public`.
- Prose helpers:
  - `.pullquote`, `.footnotes`, `.fn-ref`, `.fn-backref`, and related authoring helpers are public/candidate-public depending on docs usage.
- Text utilities:
  - `text-*` classes live primarily in `@24vlh/vds/src/components/utilities.css`.
  - Both public and candidate-public text utilities must be treated as compatibility-sensitive until later migration planning approves changes.

Do not rename, remove, merge, or deprecate these selectors in typography cleanup without selector inventory evidence, consumer risk review, and migration notes.

## Docs and Source Mismatches

- `@24vlh/vds/doc-raw/vds-typography.doc.html` mentions `--line-height-base`.
- `--line-height-base` is absent from current source definitions.
- Current source uses `--line-height-normal`.
- `.typography` is the documented prose wrapper.
- `[data-vds-typography]` and `.vds-typography` currently define only local prose variables in `typography.css`; they do not apply the full prose rule set directly.

These are docs/source findings only. Actual raw-doc cleanup or compatibility alias work remains deferred.

## Current Risks

- Typography docs contain stale token naming for line height.
- The prose wrapper story is split between `.typography`, `.vds-typography`, and `[data-vds-typography]`.
- Hard-coded `font-weight` and `letter-spacing` declarations are common across component files.
- `typography.css` includes local prose tokens plus hard-coded optical values such as border widths and `em` sizes.
- Text utility classes and prose helpers are package-facing selector surfaces through the current selector inventory.
- Typography rhythm overlaps with spacing rhythm, so `VDS-1040` must avoid duplicating decisions already recorded here.

## Audit Rules for Later Work

- Classify each typography change as primitive, theme role, component-local alias, text utility, prose helper, docs-only, legacy-compatible, or deprecated.
- Preserve text utility and prose helper selectors unless a later approved migration/deprecation plan allows changes.
- Treat docs examples as secondary to source truth when they conflict, but record mismatches before changing docs.
- Do not promote hard-coded typography values into primitives without checking whether they are component-specific optical adjustments.
- Keep typography scale decisions separate from spacing rhythm decisions, while documenting overlap in implementation logs.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1040` must use this audit when separating typography rhythm from spacing/layout rhythm.
- `VDS-1050` must account for text motion/readability only when motion touches text or prose flows.
- `VDS-1060` must preserve readable focus and interaction states for text links and text-adjacent controls.
- Theme audit work must preserve text contrast and code/prose legibility across graphite, carbon, navy, and slate.
- Component audit waves must classify text utility and prose helper usage before changing selectors or token dependencies.
- Documentation rewrite work must reconcile `--line-height-base` and prose wrapper guidance with source truth.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Primitive token taxonomy: `@24vlh/vds/docs/planning/tokens/vds-primitives-token-taxonomy-audit.md`
- Semantic token naming cleanup plan: `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
- Selector inventory: `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Primitive source: `@24vlh/vds/src/primitives.css`
- Base source: `@24vlh/vds/src/base.css`
- Typography source: `@24vlh/vds/src/components/typography.css`
- Utilities source: `@24vlh/vds/src/components/utilities.css`
- Authoring source: `@24vlh/vds/src/components/authoring.css`
- Typography raw docs: `@24vlh/vds/doc-raw/vds-typography.doc.html`
- Base raw docs: `@24vlh/vds/doc-raw/vds-base.doc.html`
