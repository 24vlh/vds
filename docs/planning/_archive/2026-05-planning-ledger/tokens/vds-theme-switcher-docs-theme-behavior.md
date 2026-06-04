# VDS Theme Switcher and Docs Theme Behavior

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-1140`

This file records the theme switcher and docs theme behavior audit for the tokens, themes, and foundation track. It is a planning artifact only: no docs shell HTML, browser JS, CSS, raw docs, generated docs index, source themes, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- The docs theme switcher is documentation tooling, not a runtime VDS package API.
- The docs shell may load all four source theme files because roots are scoped by `data-theme`.
- Public package guidance remains "load one active theme" unless a later docs rewrite changes that guidance.
- The supported docs theme roots are:
  - `graphite-light`
  - `graphite-dark`
  - `carbon-light`
  - `carbon-dark`
  - `navy-light`
  - `navy-dark`
  - `slate-light`
  - `slate-dark`
- Runtime fixes to the theme switcher, docs shell, favicon behavior, docs navigation, raw docs, or generated docs index require later approved items.

## Docs Shell Theme Matrix Evidence

`@24vlh/vds/index.html` currently has:

- Default theme root: `data-theme="graphite-light"`.
- Stylesheet links: `43`.
- Source theme stylesheet links:
  - `src/themes/slate.css`
  - `src/themes/navy.css`
  - `src/themes/carbon.css`
  - `src/themes/graphite.css`
- Browser scripts: `6`.
- Script order starts with `./js/theme-switcher.js`.
- Favicon: `./svg/vlah-favicon-slate-light.svg`.

The theme switcher radio values total `8` and all match real roots in `src/themes/*.css`:

| Radio value | Source root exists |
| --- | --- |
| `graphite-light` | yes |
| `graphite-dark` | yes |
| `slate-light` | yes |
| `slate-dark` | yes |
| `navy-light` | yes |
| `navy-dark` | yes |
| `carbon-light` | yes |
| `carbon-dark` | yes |

No configured radio value is missing a source theme root, and no current source theme root is absent from the docs switcher radio matrix.

## Theme Switcher JavaScript Evidence

`@24vlh/vds/js/theme-switcher.js` currently has:

- Lines: `35`.
- Syntax status: passes `node --check`.
- localStorage key: `vg-theme`.
- Initial saved-theme behavior:
  - Reads the saved theme from localStorage.
  - Applies the saved theme after a `300ms` timeout.
  - Updates `document.documentElement.dataset.theme`.
  - Checks the matching radio input when found.
- User-change behavior:
  - Radio changes update `document.documentElement.dataset.theme`.
  - Radio changes write the selected value back to localStorage.
- Panel behavior:
  - Uses `themePanel`, `themeToggleBtn`, and `themeCloseBtn` DOM nodes.
  - Toggle button opens/closes the panel through a `collapsed` class.
  - Close button adds the `collapsed` class.

Current JS gaps:

- Saved theme values are not validated against known theme roots.
- localStorage access is not wrapped in `try/catch`.
- Required DOM nodes do not have null guards.
- Keyboard handling is not implemented.
- `Escape` close behavior is not implemented.
- `aria-expanded` is not synchronized.
- Focus return after closing is not implemented.
- System color-scheme preference is not used.

These are audit findings only, not approved JS changes.

## Theme Switcher CSS Evidence

`@24vlh/vds/css/theme-switcher.css` currently has:

- Lines: `88`.
- Selector groups: `9`.
- Positioning:
  - Fixed bottom-left shell placement.
  - Hard-coded z-index values.
- State styling:
  - Uses `:has(...)` for selected-state styling.
  - Uses transitions.
- Current CSS gaps:
  - No `:focus-visible` rule.
  - No `prefers-reduced-motion` rule.
  - No mobile viewport media rule.
  - No forced-colors-specific rule.

The `:has(...)` usage should be reviewed against the browser support matrix from `VDS-0050` before any essential state styling depends only on it.

## Raw Docs Theme Coverage Evidence

Raw docs currently have:

- Total docs: `37`.
- Docs mentioning at least one theme name: `27`.
- Docs mentioning all four theme names: `0`.
- Docs mentioning Graphite by name: `2`.
- Docs mentioning Slate, Navy, or Carbon but not Graphite in the current word-boundary scan: `25`.
- Docs mentioning `data-theme`: `1`, `vds-index.doc.html`.
- Docs mentioning the theme switcher: `1`, `vds-index.doc.html`.

The `25` docs that mention Slate, Navy, or Carbon but not Graphite in the current word-boundary scan are:

- `vds-accordion.doc.html`
- `vds-authoring.doc.html`
- `vds-base.doc.html`
- `vds-buttons.doc.html`
- `vds-charts.doc.html`
- `vds-command.doc.html`
- `vds-content-blocks.doc.html`
- `vds-doc-block.doc.html`
- `vds-feedback.doc.html`
- `vds-flows.doc.html`
- `vds-forms.doc.html`
- `vds-header-footer.doc.html`
- `vds-hero.doc.html`
- `vds-icons.doc.html`
- `vds-identity.doc.html`
- `vds-inbox.doc.html`
- `vds-index.doc.html`
- `vds-navigation.doc.html`
- `vds-overlays.doc.html`
- `vds-sections.doc.html`
- `vds-skeleton.doc.html`
- `vds-tables.doc.html`
- `vds-toasts.doc.html`
- `vds-tooltips-popovers.doc.html`
- `vds-typography.doc.html`

Top raw-doc theme path mention counts:

| Doc | Theme path mentions |
| --- | ---: |
| `vds-forms.doc.html` | `7` |
| `vds-header-footer.doc.html` | `7` |
| `vds-content-blocks.doc.html` | `6` |
| `vds-doc-block.doc.html` | `6` |
| `vds-buttons.doc.html` | `5` |
| `vds-hero.doc.html` | `5` |
| `vds-tables.doc.html` | `5` |
| `vds-tooltips-popovers.doc.html` | `5` |
| `vds-typography.doc.html` | `5` |
| `vds-skeleton.doc.html` | `4` |

The docs are not yet aligned with the current four-theme/eight-root matrix. This is a docs rewrite and docs shell follow-up, not a VDS-1140 edit.

## Current Risks

- Docs examples are not consistently aligned with Graphite, Carbon, Navy, Slate, and the eight-root matrix.
- Docs shell all-theme loading differs from package-consumer guidance.
- Theme switcher JS is not resilient to missing DOM nodes, blocked storage, or invalid saved values.
- Theme switcher JS does not expose complete keyboard, focus, or ARIA state behavior.
- Theme switcher CSS relies on fixed placement and hard-coded stack values.
- Theme switcher CSS uses `:has(...)` and transitions without a reduced-motion or fallback-specific review.
- The fixed Slate light favicon can visually conflict with non-Slate or dark theme roots.

## Audit Rules for Later Work

- Treat theme switcher UI/JS as docs tooling unless a later approved item deliberately exposes a package API.
- Preserve the eight-root theme matrix unless a later approved theme architecture item changes supported roots.
- Keep docs shell all-theme loading separate from package-consumer guidance.
- Do not change raw docs, docs shell, generated docs index, or browser JS without an approved docs/runtime item.
- Any theme-switcher accessibility work must coordinate with the WCAG 2.2 AA baseline from `VDS-0060`.
- Any `:has(...)`-dependent state styling must coordinate with the browser support matrix from `VDS-0050`.
- Any theme switcher placement or fixed/sticky behavior must coordinate with the responsive matrix from `VDS-0070`.

## Future Work Contract

- Docs shell fixes should address saved-theme validation, storage safety, null guards, `aria-expanded`, keyboard interaction, `Escape`, focus return, reduced motion, focus visibility, mobile placement, and optional system preference behavior.
- Documentation rewrite work should clarify:
  - the package consumer guidance to load one active theme;
  - the docs shell exception where all source themes are loaded for switching;
  - the full Graphite, Carbon, Navy, and Slate matrix;
  - the difference between theme roots and package paths.
- Identity and SVG work in `VDS-1150` should review whether the fixed favicon should remain Slate-light or become theme-aware.
- Visual QA should eventually exercise all eight roots in the docs shell.
- Generated docs index work should not treat current raw-doc theme mentions as complete theme guidance.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Browser/CSS support matrix: `@24vlh/vds/docs/planning/release/vds-browser-css-support-matrix.md`
- Accessibility baseline: `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
- Responsive baseline: `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`
- Theme contrast baseline: `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
- Theme architecture audit: `@24vlh/vds/docs/planning/tokens/vds-theme-architecture-audit.md`
- Graphite theme audit: `@24vlh/vds/docs/planning/tokens/vds-graphite-theme-audit.md`
- Carbon theme audit: `@24vlh/vds/docs/planning/tokens/vds-carbon-theme-audit.md`
- Navy theme audit: `@24vlh/vds/docs/planning/tokens/vds-navy-theme-audit.md`
- Slate theme audit: `@24vlh/vds/docs/planning/tokens/vds-slate-theme-audit.md`
- Docs shell: `@24vlh/vds/index.html`
- Theme switcher JS: `@24vlh/vds/js/theme-switcher.js`
- Theme switcher CSS: `@24vlh/vds/css/theme-switcher.css`
- Source themes: `@24vlh/vds/src/themes/*.css`
- Raw docs: `@24vlh/vds/doc-raw/*.doc.html`
