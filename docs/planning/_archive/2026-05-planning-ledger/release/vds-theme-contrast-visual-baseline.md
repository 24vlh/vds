# VDS Theme Contrast and Visual Integrity Baseline

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-0080`

This file is the theme contrast and visual integrity baseline for the VDS `1.0.0` release line. It is a planning artifact only: no runtime CSS, token, package metadata, workflow, generated `dist`, build output, or version field changes happen here.

## Theme Standard

- Accessibility target: WCAG 2.2 AA from `VDS-0060`.
- Browser target: modern evergreen browsers from `VDS-0050`.
- Responsive readability target: the responsive/container baseline from `VDS-0070`.
- Theme posture: every supported VDS theme root must preserve readable text, visible states, recognizable semantic color, visible focus, and usable component surfaces.

## Theme Validation Matrix

| Theme Family | Light Root | Dark Root |
| --- | --- | --- |
| Graphite | `graphite-light` | `graphite-dark` |
| Carbon | `carbon-light` | `carbon-dark` |
| Navy | `navy-light` | `navy-dark` |
| Slate | `slate-light` | `slate-dark` |

## Contrast Expectations

- Normal text and meaningful labels: WCAG 2.2 AA `4.5:1`.
- Large text and strong display text: `3:1`.
- Non-text UI indicators: `3:1` for icons, borders, focus rings, selected states, invalid states, and meaningful chart/status marks.
- Focus indicators must remain visible against adjacent surfaces in every theme.
- Disabled and read-only states must be visually distinct and must not rely on color alone, while not pretending disabled content is active content.
- State colors must use more than color alone when a semantic state is critical to understanding or action.

## Visual Integrity Checks

- Avoid one-note palettes where a theme collapses into a single hue without enough hierarchy.
- Avoid over-tinted themes where accents, surfaces, borders, and text compete instead of creating clear layers.
- Verify borders, dividers, shadows, overlays, and translucent surfaces remain useful in both light and dark modes.
- Verify semantic state colors do not collapse into backgrounds, muted surfaces, or disabled states.
- Verify code, table, chart, doc block, selection, and overlay tokens remain legible in all themes.
- Verify component-local hard-coded colors are either decorative, token-compatible, or tracked for cleanup.

## Current Evidence Snapshot

- Theme files: `4`.
- Theme roots: `8`.
- Theme root matrix: `graphite-light`, `graphite-dark`, `carbon-light`, `carbon-dark`, `navy-light`, `navy-dark`, `slate-light`, `slate-dark`.
- Each theme file has `416` custom property declarations and `208` unique token names.
- Theme token parity is currently complete across graphite, carbon, navy, and slate.
- Theme color literals:
  - Graphite: `333` hex and `48` rgb/rgba.
  - Carbon: `333` hex and `48` rgb/rgba.
  - Navy: `340` hex and `48` rgb/rgba.
  - Slate: `337` hex and `48` rgb/rgba.
- Source color surface: hex colors `1344` matches in `5` files; rgb/rgba `219` in `12`; `color-mix()` `25` in `7`; `currentColor` `42` in `13`.
- Component hard-coded hex/rgb values: `23` matches in `8` component files.
- Focus-visible selectors: `94` matches in `16` files.
- Disabled selectors: `144` matches in `9` files.
- Forced-colors blocks: `2` matches in `2` files.

## Component Family Audit Expectations

| Family | Components | Required Theme Focus |
| --- | --- | --- |
| Foundation and theme tokens | Primitives, base, themes, utilities | Text/surface/border/link/focus/selection/overlay/code token contrast and parity. |
| Semantic states | Success, info, warning, danger, error, invalid/help states | Soft/strong state contrast, non-color-only meaning, border/icon/text alignment. |
| Interactive components | Buttons, forms, choices, tabs, navigation, action bar, overlays, tooltips/popovers | Focus visibility, hover/active/selected/disabled/read-only distinction, icon and border contrast. |
| Feedback and status | Toasts, progress, state, skeleton, feedback | Loading and status legibility, semantic contrast, reduced-motion compatibility. |
| Data and content | Tables, charts, cards, content blocks, doc blocks, hero | Row states, chart/status marks, code blocks, media overlays, card hierarchy, content density. |

## Audit Rules for Later Work

- Every theme or component audit must classify theme findings as passes baseline, needs measurement, needs token cleanup, progressive visual enhancement, or release-blocking contrast issue.
- Public, candidate-public, and legacy-compatible selectors must not be renamed or removed to solve visual issues without an approved migration/deprecation plan.
- Any contrast issue that makes text, focus, semantic state, form state, primary action, or critical status unreadable must be fixed, deferred with reason, or tracked as release-blocking before `1.0.0`.
- Hard-coded component colors must be reviewed before theme fixes are considered complete.
- Forced-colors behavior must be reviewed where state, focus, borders, and icons carry meaning.
- Documentation rewrite work must show theme-sensitive examples only after theme audit expectations are stable.

## Reference Sources

- VDS accessibility baseline: `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
- VDS browser support matrix: `@24vlh/vds/docs/planning/release/vds-browser-css-support-matrix.md`
- VDS responsive baseline: `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`
- W3C WCAG 2.2 Quick Reference: `@24vlh/agents/docs_md/design/w3c/wcag-2-2-quick-reference.md`
- Mobile accessibility contrast guidance: `@24vlh/agents/docs_md/mobile-design/foundations/accessibility.md`
