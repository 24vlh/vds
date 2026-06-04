# VDS Identity Token and SVG Palette Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-1150`

This file records the identity token and SVG palette audit for the tokens, themes, and foundation track. It is a planning artifact only: no CSS, SVG files, palette text files, raw docs, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/identity.css` is the inline SVG logo CSS contract.
- Theme files own `--color-logo-*` values.
- Static SVG files under `@24vlh/vds/svg` are hard-coded assets and do not inherit theme tokens.
- Palette text files under `@24vlh/vds/static` are audit/reference evidence, not runtime source of truth.
- SVG/package/docs changes require later approved work.
- Any future identity CSS change that touches source CSS while generated output is out of scope must record `dist refresh pending`.

## Identity CSS Evidence

`@24vlh/vds/src/identity.css` currently has:

- Lines by `wc -l`: `354`.
- Unique custom property definitions: `19`.
- Duplicate custom property definitions: `0`.
- `var(...)` references: `60`.
- Missing referenced token definitions in source: `0`.
- Selector blocks: `59`.
- Data root evidence:
  - `[data-vds-identity]`
  - `.vds-identity`
- Identity color token references:
  - `--color-logo-ink`
  - `--color-logo-accent`
  - `--color-logo-mono`
  - `--color-logo-footer-ink`
  - `--color-logo-footer-accent`
  - `--color-logo-ink-inverse`
  - `--color-logo-accent-inverse`

Identity-owned `--logo-*` definitions:

- `--logo-stroke-primary`
- `--logo-clearspace`
- `--logo-min-horizontal`
- `--logo-min-mark`
- `--logo-primary-letter-spacing`
- `--logo-secondary-letter-spacing`
- `--logo-size-xs`
- `--logo-size-sm`
- `--logo-size-md`
- `--logo-size-lg`
- `--logo-size-xl`
- `--logo-size-xxl`
- `--logo-doc-height`
- `--logo-ke-frame-stroke`
- `--logo-ke-mark-stroke`
- `--logo-ke-text-primary-size`
- `--logo-ke-text-secondary-size`
- `--logo-ke-primary-letter-spacing`
- `--logo-ke-secondary-letter-spacing`

These tokens are not referenced outside `src/identity.css` today. That is audit evidence only, not approval to rename or remove them.

## Selector Inventory Evidence

The selector inventory currently contains `37` identity classes:

- Public: `31`.
- Candidate-public: `6`.

Candidate-public classes:

- `logo--block`
- `logo--ink`
- `logo--left`
- `logo--right`
- `logo--xxl`
- `vds-identity`

Public and candidate-public identity classes are compatibility-sensitive. They must not be renamed, removed, or reclassified without later approved migration/deprecation work.

## Theme Logo Token Evidence

All `8` theme roots define the full `--color-logo-*` token set:

- `graphite-light`
- `graphite-dark`
- `carbon-light`
- `carbon-dark`
- `navy-light`
- `navy-dark`
- `slate-light`
- `slate-dark`

Current review findings:

- Graphite light:
  - `--color-brand-accent`: `#1371A3`.
  - Palette Graphite accent: `#1371A3`.
  - `--color-logo-accent`: `#e31824`.
  - This is a review finding because logo accent is intentionally or accidentally red while the brand/palette accent is blue steel.
- Slate light:
  - Current theme brand/logo ink/accent: `#2A2F33` and `#997939`.
  - Static Slate SVG and palette evidence: `#1C2A38` and `#C6A667`.
  - This is a review finding because static SVG/palette evidence differs from current theme tokens.

These findings are not approved token changes in this item.

## Static SVG Asset Matrix

`@24vlh/vds/svg` currently contains `49` SVG files:

| Group | Count |
| --- | ---: |
| KeepExec logo | `1` |
| VLAH favicons | `8` |
| VLAH horizontal logo variants | `16` |
| VLAH mark variants | `16` |
| VLAH mask variants | `8` |

The expected VLAH matrix is complete:

- Four themes: Graphite, Carbon, Navy, Slate.
- Two roots per theme: light and dark.
- Two logo shapes: horizontal and mark.
- Two display modes for horizontal/mark: color and mono.
- One mask per theme root.
- One favicon per theme root.

SVG color evidence:

- All `49` SVG files use hard-coded hex values.
- Files using `currentColor`: `0`.
- Files using CSS variables: `0`.

SVG accessibility evidence:

- VLAH SVGs with `aria-hidden="true"` and `role="img"`: `48`.
- KeepExec SVG with `role="img"` and `aria-label`: `1`.
- SVGs with `<title>`: `0`.

Future SVG work must classify decorative versus informative use before changing accessibility attributes.

## Palette File Evidence

Palette files:

- `static/SVG Palette - Carbon.txt`
- `static/SVG Palette - Graphite.txt`
- `static/SVG Palette - Navy.txt`
- `static/SVG Palette - Slate.txt`

Each palette file currently contains `56` hex values.

Palette files are reference artifacts today. They are not build inputs, runtime package assets, or theme source-of-truth files.

## Docs and Package Evidence

`@24vlh/vds/doc-raw/vds-identity.doc.html` currently has:

- Lines: `1112`.
- Logo mentions: `395`.
- SVG mentions: `134`.
- Mono mentions: `41`.
- Inverse mentions: `41`.
- Clearspace mentions: `9`.
- Favicon mentions: `5`.
- Palette mentions: `1`.

The identity doc covers:

- Inline SVG logo tokens and geometry.
- KeepExec identity classes.
- Theme bindings for `--color-logo-*`.
- VLAH mark/wordmark anatomy.
- Mono, footer, and inverse variants.
- Size utilities and clearspace utilities.
- Mark-only/favicons.
- Packaged logo assets.
- Usage rules, accessibility guidance, and anti-patterns.

Package evidence:

- Current package version remains `0.3.8`.
- `package.json` `files` includes only `dist`.
- `svg/` is not a published package surface under the current package policy.
- `static/` is not a published package surface under the current package policy.
- `dist/identity.css` and `dist/identity.min.css` exist as generated top-level package-facing CSS outputs.
- `src/index.css` and `src/core.css` do not import `src/identity.css`; identity remains a standalone top-level bundle.

Docs/package mismatch:

- Raw identity docs describe packaged logo assets and reference `/svg/...` examples.
- Current package metadata publishes only `dist`, so the static SVG and palette reference files are not package-published assets.
- This is a package/docs policy finding, not an approved package metadata or docs edit.

## Current Risks

- Static SVG palette values can drift from theme tokens because SVGs are hard-coded.
- Graphite light logo accent differs from Graphite brand/palette accent.
- Slate theme tokens differ from static Slate SVG and palette evidence.
- Raw docs describe packaged logo assets, but `svg/` and `static/` are not included in package `files`.
- VLAH static SVGs mix `aria-hidden="true"` with `role="img"`; intent should be classified before accessibility edits.
- The KeepExec logo is a single hard-coded SVG outside the VLAH matrix and should be kept distinct from VLAH asset rules.
- Identity selector classes are public/candidate-public compatibility surfaces.

## Audit Rules for Later Identity Work

- Preserve existing identity classes, `--logo-*` tokens, `--color-logo-*` tokens, SVG filenames, and docs examples unless a later approved migration/deprecation plan changes them.
- Do not recolor static SVG assets without deciding whether theme tokens, palette files, SVG files, or docs are the intended source of truth.
- Do not publish `svg/` or `static/` assets without later package-surface approval.
- Do not remove hard-coded SVG variants until docs, package, favicon, and migration impacts are reviewed.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1210` starts the base/layout/utilities track after this token/theme track closes.
- Identity cleanup work should decide whether static SVGs remain hand-authored assets or become generated from theme tokens.
- Package work should decide whether SVG assets are package surfaces or docs-only examples.
- Docs rewrite work should reconcile inline token-driven logos with hard-coded static SVG usage.
- Theme cleanup work should route Graphite and Slate palette mismatches to the appropriate theme/SVG/palette owner.
- Favicon behavior from `VDS-1140` should coordinate with the identity asset matrix if theme-aware favicons are later approved.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Theme architecture audit: `@24vlh/vds/docs/planning/tokens/vds-theme-architecture-audit.md`
- Theme switcher/docs behavior audit: `@24vlh/vds/docs/planning/tokens/vds-theme-switcher-docs-theme-behavior.md`
- Package metadata and exports review: `@24vlh/vds/docs/planning/architecture/vds-package-metadata-and-exports-review.md`
- Source module architecture audit: `@24vlh/vds/docs/planning/architecture/vds-source-module-architecture-audit.md`
- Selector inventory: `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Identity CSS: `@24vlh/vds/src/identity.css`
- Source themes: `@24vlh/vds/src/themes/*.css`
- SVG assets: `@24vlh/vds/svg/*.svg`
- Palette files: `@24vlh/vds/static/SVG Palette - *.txt`
- Raw identity docs: `@24vlh/vds/doc-raw/vds-identity.doc.html`
- Package metadata: `@24vlh/vds/package.json`
