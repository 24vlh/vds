# VDS Global Overrides and Docs-Only CSS Audit

Last updated: `2026-05-24`

Source item: `VDS-1280`

This file records the global overrides and docs-only CSS audit for the base, layout, utilities, and global CSS track. It is a planning artifact only: no CSS, `index.html`, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- Top-level `@24vlh/vds/css/*.css` files are docs-shell assets under the current package policy.
- `@24vlh/vds/css/overrides.css` is a docs-shell override file, not a source-of-truth replacement for library CSS or theme tokens.
- `@24vlh/vds/css/theme-switcher.css` is docs theme-switcher tooling and remains governed by `VDS-1140`.
- Runtime library footer styling remains owned by `@24vlh/vds/src/components/header-footer.css`.
- Theme footer color values remain owned by `@24vlh/vds/src/themes/*.css`.
- Top-level docs CSS must not be used as a hidden fix for package-facing CSS without a later approved implementation item.

## Docs-Only CSS Inventory

Current top-level docs-only CSS files:

| File | Lines | Selector blocks | Declarations | Custom property defs | `var(...)` refs | Hex refs | Media blocks | Notes |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| `@24vlh/vds/css/overrides.css` | `39` | `8` | `10` | `0` | `0` | `10` | `0` | Graphite footer link overrides. |
| `@24vlh/vds/css/theme-switcher.css` | `87` | `9` | `55` | `0` | `28` | `1` | `0` | Docs theme-switcher styling; full behavior recorded in `VDS-1140`. |

Both files are loaded by the docs shell but are not package-published surfaces under the current `package.json` `files` policy.

## Overrides CSS Evidence

`@24vlh/vds/css/overrides.css` currently has:

- Lines: `39`.
- Selector blocks: `8`.
- Declarations: `10`.
- Custom property definitions: `0`.
- `var(...)` references: `0`.
- Hard-coded hex references: `10`.
- Unique hard-coded hex values: `#F7F9FC`, `#FFFFFF`, `#D9E7EF`, `#F5F7FA`, and `#C7D0DA`.
- `rgb(...)` / `rgba(...)` references: `0`.
- `!important` declarations: `0`.
- Media queries: `0`.
- `:focus-visible` selectors: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.
- Referenced theme roots: `graphite-light` and `graphite-dark`.
- Pseudo-state coverage: `:hover`, `:active`, and `:visited`.

Current selectors:

| Selector | State | Theme root |
| --- | --- | --- |
| `[data-theme="graphite-light"] footer a` | default | `graphite-light` |
| `[data-theme="graphite-light"] footer a:hover` | hover | `graphite-light` |
| `[data-theme="graphite-light"] footer a:active` | active | `graphite-light` |
| `[data-theme="graphite-light"] footer a:visited` | visited | `graphite-light` |
| `[data-theme="graphite-dark"] footer a` | default | `graphite-dark` |
| `[data-theme="graphite-dark"] footer a:hover` | hover | `graphite-dark` |
| `[data-theme="graphite-dark"] footer a:active` | active | `graphite-dark` |
| `[data-theme="graphite-dark"] footer a:visited` | visited | `graphite-dark` |

Audit conclusions:

- The override file is narrow by theme but broad by selector because it targets generic `footer a`.
- It repeats or overrides footer colors through hard-coded hex values rather than theme tokens.
- It adds hover, active, and visited color behavior but no focus-visible behavior.
- It has no responsive, reduced-motion, forced-colors, or safe-area behavior.

## Docs Shell Load Order

`@24vlh/vds/index.html` currently loads `43` stylesheet links.

Docs-only stylesheet links:

| Order | Line | Stylesheet |
| ---: | ---: | --- |
| `41` | `59` | `css/theme-switcher.css` |
| `43` | `65` | `css/overrides.css` |

The last five stylesheet links are currently:

| Order | Stylesheet |
| ---: | --- |
| `39` | `src/components/utilities.css` |
| `40` | `src/identity.css` |
| `41` | `css/theme-switcher.css` |
| `42` | `src/components/doc-block.css` |
| `43` | `css/overrides.css` |

Audit conclusions:

- `css/overrides.css` is the final stylesheet in the docs shell.
- Because it loads last, it can mask source component or theme behavior during docs review.
- The docs shell load order differs from source bundle behavior and package consumption, as already recorded in import and docs-runtime audits.

## Theme Matrix Context

`@24vlh/vds/index.html` currently:

- Defaults to `data-theme="graphite-light"`.
- Exposes radio values for all eight theme roots:
  - `graphite-light`
  - `graphite-dark`
  - `slate-light`
  - `slate-dark`
  - `navy-light`
  - `navy-dark`
  - `carbon-light`
  - `carbon-dark`

Audit conclusions:

- `css/overrides.css` affects only Graphite roots.
- Slate, Navy, and Carbon docs shell footer links rely on source CSS and theme tokens.
- Graphite docs behavior may therefore differ from both other docs themes and package-consumer behavior.

## Source Footer Ownership

`@24vlh/vds/src/components/header-footer.css` currently owns footer component styling:

- `.footer__link` uses `color: var(--color-footer-text)`.
- `.footer__link:hover` changes opacity only.
- `.footer__link:focus-visible` defines visible focus using `--focus-ring-color`, `--border-width`, `--space-1`, and `--radius-sm`.
- `.footer__meta`, `.footer__meta p`, `.footer__meta a`, `.footer__meta span`, and `.footer__meta small` use `color: var(--color-footer-text)`.
- `.footer__meta a:focus-visible` defines a source focus-visible outline.

Audit conclusions:

- Source footer ownership is class-based and token-based.
- Docs-only overrides are generic-element based and hard-coded.
- Future cleanup must decide whether Graphite footer link state behavior belongs in source footer CSS, theme tokens, docs-only CSS, or should be removed.

## Graphite Theme Token Evidence

`@24vlh/vds/src/themes/graphite.css` currently defines:

| Root | Footer background | Footer text |
| --- | --- | --- |
| `graphite-light` | `#0E3D69` | `#F7F9FC` |
| `graphite-dark` | `#0A2D50` | `#F5F7FA` |

`css/overrides.css` currently uses:

| Root | Default/hover | Active | Visited |
| --- | --- | --- | --- |
| `graphite-light` | `#F7F9FC` | `#FFFFFF` | `#D9E7EF` |
| `graphite-dark` | `#F5F7FA` | `#FFFFFF` | `#C7D0DA` |

Audit conclusions:

- Default and hover override colors match Graphite footer text token values.
- Active and visited colors are docs-only hard-coded values.
- No equivalent footer link state tokens are currently recorded in the source theme contract.

## Package Boundary Evidence

`@24vlh/vds/package.json` currently has:

- `main`: `dist/vds.css`
- `style`: `dist/vds.css`
- `files`: `dist`

Audit conclusions:

- Top-level docs CSS is not part of the current published package surface.
- Package consumers loading `@24vlh/vds/dist/vds.css` and a theme file do not receive `css/overrides.css`.
- Any future decision to publish docs CSS or move override behavior into source CSS requires later approved package/docs/source work.

## Raw Docs Evidence

`@24vlh/vds/doc-raw/vds-header-footer.doc.html` currently:

- Documents `.footer__link` and `.footer__meta`.
- Includes footer examples using `.footer__link`.
- Mentions `--color-footer-text`.
- Includes focus-visible snippets for footer meta links.
- Does not establish `css/overrides.css` as source ownership.

Audit conclusions:

- Raw header/footer docs align with class-based source footer ownership more than with generic docs-only override selectors.
- Any future docs rewrite should explain package-facing footer behavior without relying on docs-only overrides as hidden behavior.

## Adjacent Theme Switcher CSS Evidence

`@24vlh/vds/css/theme-switcher.css` currently has:

- Lines: `87`.
- Selector blocks: `9`.
- Declarations: `55`.
- Custom property definitions: `0`.
- `var(...)` references: `28`.
- Hard-coded hex references: `1`.
- Media queries: `0`.
- `:focus-visible` selectors: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Audit conclusions:

- Theme switcher CSS is docs-only CSS.
- Its accessibility, resilience, and responsive behavior were already recorded in `VDS-1140`.
- `VDS-1280` records it only to define the docs-only CSS boundary.

## Current Risks

- `css/overrides.css` can mask source component or theme defects because it is loaded last.
- Generic `footer a` selectors are broader than `.footer__link` and `.footer__meta a`.
- Graphite-only overrides make Graphite docs shell behavior differ from Slate, Navy, and Carbon.
- Hard-coded docs override colors bypass token parity and contrast audit flow.
- `:hover`, `:active`, and `:visited` are handled in docs-only CSS while `:focus-visible` remains source-owned.
- Local docs shell behavior can differ from package-consumer behavior because top-level docs CSS is not published.
- `css/theme-switcher.css` ownership can blur with global overrides unless later work keeps docs tooling and library CSS separated.

## Audit Rules for Later Global Override Work

- Do not remove, narrow, tokenize, or migrate `css/overrides.css` without later approved implementation work.
- Do not use docs-only CSS as a replacement for package-facing source CSS.
- Do not move override behavior into source CSS without package, docs, contrast, and dist-refresh review.
- Do not add more docs-only overrides without recording whether they are temporary docs workarounds or intentional docs-shell behavior.
- If a future source CSS change is made while generated output is out of scope, record `dist refresh pending`.
- If a future docs-only CSS change is made without source changes, record that package `dist` output is unaffected.

## Future Work Contract

- `VDS-1290` must use this audit when deciding the specificity and cascade-layer strategy.
- Header/footer component audit work must use this audit when classifying footer link state behavior.
- Theme cleanup work must use this audit when deciding whether footer active/visited colors need theme tokens.
- Docs rewrite work must clarify docs-shell-only behavior versus package-facing VDS CSS behavior.
- Package guidance work must avoid implying that top-level docs CSS is shipped to package consumers under the current package policy.

## Reference Sources

- `@24vlh/vds/css/overrides.css`
- `@24vlh/vds/css/theme-switcher.css`
- `@24vlh/vds/index.html`
- `@24vlh/vds/src/components/header-footer.css`
- `@24vlh/vds/src/themes/graphite.css`
- `@24vlh/vds/package.json`
- `@24vlh/vds/doc-raw/vds-header-footer.doc.html`
- `@24vlh/vds/docs/planning/architecture/vds-demo-server-doc-loader-review.md`
- `@24vlh/vds/docs/planning/tokens/vds-theme-switcher-docs-theme-behavior.md`
- `@24vlh/vds/docs/planning/foundation/vds-core-import-contract-audit.md`
