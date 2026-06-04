# VDS Navy Theme Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-1120`

This file records the Navy-specific theme audit for the tokens, themes, and foundation track. It is a planning artifact only: no CSS, token names, token values, theme roots, raw docs, generated `dist`, package metadata, scripts, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/themes/navy.css` remains a pure token-layer file.
- Preserve `navy-light` and `navy-dark` roots.
- Navy token names and theme roots are compatibility-sensitive.
- Contrast findings are classified as `pass`, `review`, `needs manual alpha/composite check`, or `release-risk candidate`.
- Sampled contrast findings are planning evidence, not approved token changes.
- Any future Navy token change that touches source CSS while generated output is out of scope must record `dist refresh pending`.

## Source and Root Evidence

`@24vlh/vds/src/themes/navy.css` currently has:

- Lines: `662`.
- Custom property declarations: `416`.
- `navy-light` declarations: `208`.
- `navy-dark` declarations: `208`.
- Unique token names: `208`.
- Hex colors: `340`.
- `rgb()`/`rgba()` values: `48`.
- Gradients: `4`.
- `var(...)` aliases: `32`.

The Navy roots match the theme architecture contract from `VDS-1090`.

## Token Groups

| Group | Count |
| --- | ---: |
| `color-*` | `70` |
| `semantic-*` | `30` |
| State-soft aliases | `21` |
| Table tokens | `21` |
| Button tokens | `13` |
| Hero tokens | `11` |
| Section tokens | `7` |
| Code tokens | `13` |
| Overlay tokens | `4` |
| Focus tokens | `1` |
| Link tokens | `3` |
| Border-related tokens | `34` |
| Surface-related tokens | `15` |
| Shadow-related tokens | `4` |
| Radius-related tokens | `0` |
| Chart-prefixed theme tokens | `0` |

Component-prefixed Navy tokens are theme-scoped values today, not automatically global semantic tokens. Chart and data visualization surfaces currently need component-context review because no chart-prefixed theme-token group exists.

## Brand, Focus, Shadow, and Overlay Evidence

| Area | Light | Dark |
| --- | --- | --- |
| Brand ink | `#0C1A33` | `#F7F9FB` |
| Brand accent | `#A9B4C4` | `#A9B4C4` |
| Focus ring | `#8692A2` | `#C0CAD8` |

Dark `color-accent` resolves to `#1371a3`, separate from the dark brand accent token. Later cleanup must decide whether this split is intentional hierarchy or a naming/role mismatch.

Navy shadows:

- Light `--shadow-1`: `0 8px 20px rgba(12, 26, 51, 0.07)`
- Light `--shadow-2`: `0 10px 30px rgba(12, 26, 51, 0.12)`
- Light `--shadow-3`: `0 16px 40px rgba(12, 26, 51, 0.18)`
- Dark `--shadow-1`: `0 8px 20px rgba(0, 0, 0, 0.45)`
- Dark `--shadow-2`: `0 10px 30px rgba(0, 0, 0, 0.55)`
- Dark `--shadow-3`: `0 16px 40px rgba(0, 0, 0, 0.65)`

Navy overlay tokens are mostly identical in light and dark:

- `--overlay-backdrop-default`: `rgba(0, 0, 0, 0.45)`
- `--overlay-backdrop-light`: `rgba(0, 0, 0, 0.25)`
- `--overlay-backdrop-heavy`: `rgba(0, 0, 0, 0.60)`
- `--overlay-backdrop-loading`: `rgba(0, 0, 0, 0.25)`

Later visual review must decide whether identical overlay alpha values preserve hierarchy on both light and dark Navy surfaces.

## Placeholder and Selection Evidence

- Light `color-placeholder`: `rgba(0, 0, 0, 0.40)`.
- Dark `color-placeholder`: `rgba(255, 255, 255, 0.30)`.
- Light selection:
  - `color-selection-bg`: `rgba(169, 180, 196, 0.35)`.
  - `color-selection-text`: `#0C1A33`.
- Dark selection:
  - `color-selection-bg`: `rgba(169, 180, 196, 0.30)`.
  - `color-selection-text`: `#F7F9FB`.

These alpha surfaces require composite checks against real adjacent surfaces before release.

## Sampled Contrast Passes

These sampled pairs pass the relevant WCAG-backed threshold for their recorded role:

| Root | Pair | Ratio |
| --- | --- | ---: |
| Light | `color-text` on `color-bg` | `16.43` |
| Light | `color-text-muted` on `color-bg` | `6.97` |
| Light | `focus-ring-color` on `color-surface` as non-text | `3.16` |
| Light | `color-on-accent` on `color-accent` | `8.27` |
| Light | `color-footer-text` on `color-footer-bg` | `16.43` |
| Light | `semantic-info-text` on `semantic-info-bg` | `6.75` |
| Light | `semantic-warning-text` on `semantic-warning-bg` | `4.54` |
| Light | `semantic-success-text` on `semantic-success-bg` | `5.31` |
| Light | `semantic-danger-text` on `semantic-danger-bg` | `9.75` |
| Light | `semantic-error-text` on `semantic-error-bg` | `9.75` |
| Light | `semantic-info-text-strong` on `semantic-info-bg-strong` | `6.14` |
| Light | `semantic-success-text-strong` on `semantic-success-bg-strong` | `4.95` |
| Light | `semantic-error-text-strong` on `semantic-error-bg-strong` | `8.77` |
| Dark | `color-text` on `color-bg` | `16.43` |
| Dark | `color-text-muted` on `color-bg` | `11.15` |
| Dark | `color-text-soft` on `color-bg` | `6.28` |
| Dark | `link-text` on `color-bg` | `10.47` |
| Dark | `focus-ring-color` on `color-bg` | `10.47` |
| Dark | `focus-ring-color` on `color-surface` | `8.75` |
| Dark | `color-accent` on `color-bg` as non-text | `3.24` |
| Dark | `color-footer-text` on `color-footer-bg` | `18.40` |
| Dark | `semantic-warning-text-strong` on `semantic-warning-bg-strong` | `4.58` |
| Dark | `code-syntax-comment` on `code-block-bg` | `5.47` |

These passes are sampled evidence only. Component-level usage can still alter perception through size, weight, opacity, surrounding surfaces, or alpha overlays.

## Sampled Review Findings

These sampled pairs need later review because they miss the normal-text `4.5:1` target, the non-text `3:1` target, or sit close enough to the threshold that component context matters.

| Root | Pair | Ratio | Classification |
| --- | --- | ---: | --- |
| Light | `color-text-soft` on `color-bg` | `3.58` | `review` |
| Light | `color-border-subtle` on `color-bg` | `1.34` | `review` |
| Light | `color-border-subtle` on `color-surface` | `1.42` | `review` |
| Light | `color-border-strong` on `color-bg` | `2.17` | `review` |
| Light | `link-text` on `color-bg` | `1.99` | `release-risk candidate` |
| Light | `focus-ring-color` on `color-bg` | `2.99` | `review` |
| Light | `color-accent` on `color-bg` | `1.99` | `review` |
| Light | `semantic-warning-text-strong` on `semantic-warning-bg-strong` | `4.02` | `review` |
| Light | `code-syntax-comment` on `code-block-bg` | `3.46` | `review` |
| Dark | `color-border-subtle` on `color-bg` | `1.57` | `review` |
| Dark | `color-border-subtle` on `color-surface` | `1.31` | `review` |
| Dark | `color-border-strong` on `color-bg` | `2.73` | `review` |
| Dark | `color-on-accent` on `color-accent` | `3.95` | `review` |
| Dark | `semantic-info-text` on `semantic-info-bg` | `2.88` | `release-risk candidate` |
| Dark | `semantic-warning-text` on `semantic-warning-bg` | `3.95` | `review` |
| Dark | `semantic-success-text` on `semantic-success-bg` | `3.34` | `review` |
| Dark | `semantic-danger-text` on `semantic-danger-bg` | `1.69` | `release-risk candidate` |
| Dark | `semantic-error-text` on `semantic-error-bg` | `1.69` | `release-risk candidate` |
| Dark | `semantic-info-text-strong` on `semantic-info-bg-strong` | `3.13` | `review` |
| Dark | `semantic-success-text-strong` on `semantic-success-bg-strong` | `3.66` | `review` |
| Dark | `semantic-error-text-strong` on `semantic-error-bg-strong` | `1.86` | `release-risk candidate` |

The release-risk candidates are not approved fixes in this item. They should be prioritized during Navy token cleanup because they can affect meaningful text, links, or critical semantic status.

## Manual Alpha and Composite Checks

Static hex contrast cannot fully evaluate these Navy surfaces:

- Placeholders:
  - Light `color-placeholder`: `rgba(0, 0, 0, 0.40)`.
  - Dark `color-placeholder`: `rgba(255, 255, 255, 0.30)`.
- Selection:
  - Light `color-selection-bg`: `rgba(169, 180, 196, 0.35)`.
  - Dark `color-selection-bg`: `rgba(169, 180, 196, 0.30)`.
- Translucent surfaces:
  - Any rgba surface, loading, or overlay value that composites with page content.
- Overlay backdrops:
  - default, light, heavy, and loading overlays use alpha black values that are mostly shared across both roots.
- Table and data surfaces:
  - Table row backgrounds, borders, trend colors, and text variants require context checks because several sampled table pairs resolve through aliases or alpha-adjacent surfaces.
- Chart surfaces:
  - No chart-prefixed theme-token group exists, so charts likely consume generic state, accent, table, or component-local values that need context review.
- Brand sections:
  - `section-brand-accent-bg` uses layered radial gradients.

Later contrast automation or manual visual review must composite these against the expected surfaces before release.

## Component-Family Risk Notes

- Accent hierarchy:
  - Light `link-text` and `color-accent` are pale and weak on light backgrounds, making link and accent usage a release-risk candidate when used as normal text.
  - Dark `color-accent` differs from `color-brand-accent`; that split should be classified before cleanup.
- Semantic states:
  - Light semantic pairs are mostly strong, with strong warning requiring review.
  - Dark info, danger, error, and strong error are release-risk candidates.
  - Dark success and warning need later review.
- Forms and placeholders:
  - Placeholder tokens require alpha compositing.
  - No disabled or selected theme tokens exist by name, so disabled/read-only visibility depends on component styling.
- Focus:
  - Light focus passes on white surface but is just under the non-text `3:1` target on `color-bg`.
  - Dark focus is strong in sampled checks.
- Tables, charts, and data:
  - Data and table trend colors need context checks on real table and chart surfaces.
  - The absence of chart-prefixed theme tokens means chart audits must inspect actual component-local token use.
- Code and documentation surfaces:
  - Light code comments are a review finding in sampled contrast.
  - Dark code comments pass in sampled contrast.
- Visual integrity:
  - Navy can become one-note if blue-gray surfaces, borders, links, focus, charts, and state colors collapse into the same hierarchy.

## Audit Rules for Later Navy Work

- Preserve `navy-light` and `navy-dark` unless a later approved migration/deprecation plan changes them.
- Do not rename, remove, or alias Navy tokens without source evidence, docs impact review, consumer override risk review, and migration notes.
- Do not change Navy values solely from sampled ratios without checking component context for text size, weight, opacity, alpha, and adjacent surfaces.
- Treat release-risk candidates as priority findings for later Navy cleanup, not approved edits here.
- Preserve token-name parity with other themes unless a later theme architecture item changes the matrix.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1130` Slate theme audit should follow this same per-theme audit shape for Slate-specific contrast, neutral balance, muted text, charts, controls, and data-density risks.
- Navy cleanup work must prioritize light link/accent hierarchy, dark semantic info/danger/error text, chart/data visual review, alpha/composite surfaces, and disabled/read-only visibility.
- Component audits for feedback, toasts, tooltips/popovers, tables, forms, buttons, overlays, command, doc blocks, hero, charts, and content blocks must review Navy token use in context.
- Documentation rewrite work must show Navy examples only after theme-sensitive contrast and visual hierarchy expectations are stable.
- Contrast automation should eventually composite alpha tokens and flag sampled release-risk pairs.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Theme architecture audit: `@24vlh/vds/docs/planning/tokens/vds-theme-architecture-audit.md`
- Theme contrast and visual baseline: `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
- Semantic token naming cleanup plan: `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
- Focus ring and interaction-state audit: `@24vlh/vds/docs/planning/tokens/vds-focus-ring-interaction-state-audit.md`
- Carbon theme audit precedent: `@24vlh/vds/docs/planning/tokens/vds-carbon-theme-audit.md`
- Graphite theme audit precedent: `@24vlh/vds/docs/planning/tokens/vds-graphite-theme-audit.md`
- Navy source: `@24vlh/vds/src/themes/navy.css`
- Component sources: `@24vlh/vds/src/components/*.css`
- Raw docs: `@24vlh/vds/doc-raw/*.doc.html`
