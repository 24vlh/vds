# VDS Slate Theme Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-1130`

This file records the Slate-specific theme audit for the tokens, themes, and foundation track. It is a planning artifact only: no CSS, token names, token values, theme roots, raw docs, generated `dist`, package metadata, scripts, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/themes/slate.css` remains a pure token-layer file.
- Preserve `slate-light` and `slate-dark` roots.
- Slate token names and theme roots are compatibility-sensitive.
- Contrast findings are classified as `pass`, `review`, `needs manual alpha/composite check`, or `release-risk candidate`.
- Sampled contrast findings are planning evidence, not approved token changes.
- Any future Slate token change that touches source CSS while generated output is out of scope must record `dist refresh pending`.

## Source and Root Evidence

`@24vlh/vds/src/themes/slate.css` currently has:

- Lines: `664`.
- Custom property declarations: `416`.
- `slate-light` declarations: `208`.
- `slate-dark` declarations: `208`.
- Unique token names: `208`.
- Hex colors: `337`.
- `rgb()`/`rgba()` values: `48`.
- Gradients: `4`.
- `var(...)` aliases: `35`.

The Slate roots match the theme architecture contract from `VDS-1090`.

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

Component-prefixed Slate tokens are theme-scoped values today, not automatically global semantic tokens. Chart and data visualization surfaces currently need component-context review because no chart-prefixed theme-token group exists.

## Brand, Focus, Shadow, and Overlay Evidence

| Area | Light | Dark |
| --- | --- | --- |
| Brand ink | `#2A2F33` | `#F6F5F1` |
| Brand accent | `#997939` | `#C6A667` |
| Focus ring | `#997939` | `#D7C297` |

Dark `color-accent` resolves to `#1371a3`, separate from the dark Slate brand accent token. Later cleanup must decide whether this split is intentional hierarchy or a naming/role mismatch.

Slate shadows:

- Light `--shadow-1`: `0 8px 20px rgba(0, 0, 0, 0.05)`
- Light `--shadow-2`: `0 10px 30px rgba(0, 0, 0, 0.08)`
- Light `--shadow-3`: `0 16px 40px rgba(0, 0, 0, 0.11)`
- Dark `--shadow-1`: `0 8px 20px rgba(0, 0, 0, 0.45)`
- Dark `--shadow-2`: `0 10px 30px rgba(0, 0, 0, 0.55)`
- Dark `--shadow-3`: `0 16px 40px rgba(0, 0, 0, 0.65)`

Slate overlay tokens are identical in light and dark:

- `--overlay-backdrop-default`: `rgba(0, 0, 0, 0.45)`
- `--overlay-backdrop-light`: `rgba(0, 0, 0, 0.25)`
- `--overlay-backdrop-heavy`: `rgba(0, 0, 0, 0.60)`
- `--overlay-backdrop-loading`: `rgba(0, 0, 0, 0.25)`

Later visual review must decide whether identical overlay alpha values preserve hierarchy on both light and dark Slate surfaces.

## Placeholder and Selection Evidence

- Light `color-placeholder`: `rgba(0, 0, 0, 0.30)`.
- Dark `color-placeholder`: `rgba(246, 245, 241, 0.30)`.
- Light selection:
  - `color-selection-bg`: `rgba(153, 121, 57, 0.35)`.
  - `color-selection-text`: `#2A2F33`.
- Dark selection:
  - `color-selection-bg`: `rgba(198, 166, 103, 0.30)`.
  - `color-selection-text`: `#F6F5F1`.

These alpha surfaces require composite checks against real adjacent surfaces before release.

## Sampled Contrast Passes

These sampled pairs pass the relevant WCAG-backed threshold for their recorded role:

| Root | Pair | Ratio |
| --- | --- | ---: |
| Light | `color-text` on `color-bg` | `12.40` |
| Light | `color-text-muted` on `color-bg` | `7.60` |
| Light | `focus-ring-color` on `color-bg` as non-text | `3.74` |
| Light | `focus-ring-color` on `color-surface` as non-text | `4.08` |
| Light | `color-on-accent` on `color-accent` | `6.84` |
| Light | `color-footer-text` on `color-footer-bg` | `14.61` |
| Light | `semantic-info-text` on `semantic-info-bg` | `6.40` |
| Light | `semantic-success-text` on `semantic-success-bg` | `5.28` |
| Light | `semantic-danger-text` on `semantic-danger-bg` | `8.71` |
| Light | `semantic-error-text` on `semantic-error-bg` | `8.71` |
| Light | `semantic-info-text-strong` on `semantic-info-bg-strong` | `6.06` |
| Light | `semantic-success-text-strong` on `semantic-success-bg-strong` | `4.98` |
| Light | `semantic-error-text-strong` on `semantic-error-bg-strong` | `8.14` |
| Dark | `color-text` on `color-bg` | `13.39` |
| Dark | `color-text-muted` on `color-bg` | `9.06` |
| Dark | `color-text-soft` on `color-bg` | `5.80` |
| Dark | `color-border-subtle` on `color-bg` as non-text | `3.42` |
| Dark | `link-text` on `color-bg` | `8.38` |
| Dark | `focus-ring-color` on `color-bg` | `8.38` |
| Dark | `focus-ring-color` on `color-surface` | `6.82` |
| Dark | `color-footer-text` on `color-footer-bg` | `15.56` |
| Dark | `semantic-info-text` on `semantic-info-bg` | `6.27` |
| Dark | `semantic-warning-text` on `semantic-warning-bg` | `5.23` |
| Dark | `semantic-success-text` on `semantic-success-bg` | `5.79` |
| Dark | `semantic-danger-text` on `semantic-danger-bg` | `7.44` |
| Dark | `semantic-error-text` on `semantic-error-bg` | `7.44` |
| Dark | `semantic-info-text-strong` on `semantic-info-bg-strong` | `7.96` |
| Dark | `semantic-warning-text-strong` on `semantic-warning-bg-strong` | `7.15` |
| Dark | `semantic-success-text-strong` on `semantic-success-bg-strong` | `7.24` |
| Dark | `semantic-error-text-strong` on `semantic-error-bg-strong` | `9.33` |
| Dark | `code-syntax-comment` on `code-block-bg` | `5.43` |

These passes are sampled evidence only. Component-level usage can still alter perception through size, weight, opacity, surrounding surfaces, or alpha overlays.

## Sampled Review Findings

These sampled pairs need later review because they miss the normal-text `4.5:1` target, the non-text `3:1` target, or sit close enough to the threshold that component context matters.

| Root | Pair | Ratio | Classification |
| --- | --- | ---: | --- |
| Light | `color-text-soft` on `color-bg` | `1.96` | `release-risk candidate` |
| Light | `color-border-subtle` on `color-bg` | `1.38` | `review` |
| Light | `color-border-subtle` on `color-surface` | `1.51` | `review` |
| Light | `color-border-strong` on `color-bg` | `2.20` | `review` |
| Light | `link-text` on `color-bg` | `3.74` | `review` |
| Light | `color-accent` on `color-bg` | `2.13` | `review` |
| Light | `semantic-warning-text` on `semantic-warning-bg` | `3.74` | `review` |
| Light | `semantic-warning-text-strong` on `semantic-warning-bg-strong` | `2.90` | `release-risk candidate` |
| Light | `code-syntax-comment` on `code-block-bg` | `2.51` | `release-risk candidate` |
| Dark | `color-border-subtle` on `color-surface` | `2.78` | `review` |
| Dark | `color-border-strong` on `color-bg` | `2.05` | `review` |
| Dark | `color-accent` on `color-bg` | `2.73` | `review` |
| Dark | `color-on-accent` on `color-accent` | `3.95` | `review` |

The release-risk candidates are not approved fixes in this item. They should be prioritized during Slate token cleanup because they can affect meaningful text, helper copy, code comments, or semantic status.

## Manual Alpha and Composite Checks

Static hex contrast cannot fully evaluate these Slate surfaces:

- Placeholders:
  - Light `color-placeholder`: `rgba(0, 0, 0, 0.30)`.
  - Dark `color-placeholder`: `rgba(246, 245, 241, 0.30)`.
- Selection:
  - Light `color-selection-bg`: `rgba(153, 121, 57, 0.35)`.
  - Dark `color-selection-bg`: `rgba(198, 166, 103, 0.30)`.
- Translucent surfaces:
  - Any rgba surface, loading, or overlay value that composites with page content.
- Overlay backdrops:
  - default, light, heavy, and loading overlays use alpha black values that are shared across both roots.
- Table and data surfaces:
  - Table row backgrounds, borders, trend colors, and text variants require context checks because several sampled table pairs resolve through aliases or alpha-adjacent surfaces.
- Chart surfaces:
  - No chart-prefixed theme-token group exists, so charts likely consume generic state, accent, table, or component-local values that need context review.
- Brand sections:
  - `section-brand-accent-bg` uses layered radial gradients.

Later contrast automation or manual visual review must composite these against the expected surfaces before release.

## Component-Family Risk Notes

- Muted text:
  - Light `color-text-soft` is a release-risk candidate and should not be treated as safe for meaningful normal-size labels without later review.
- Controls and disabled states:
  - Warm neutral borders, muted text, shadows, and disabled/read-only treatments can collapse together in light mode.
  - No disabled or selected theme tokens exist by name, so disabled/read-only visibility depends on component styling.
- Accent hierarchy:
  - Light link text needs review as normal text.
  - Light `color-accent` is weak as a standalone non-text mark on light backgrounds.
  - Dark `color-accent` differs from `color-brand-accent`; that split should be classified before cleanup.
- Semantic states:
  - Dark semantic pairs sample strongly.
  - Light strong warning is a release-risk candidate.
- Tables, charts, and data:
  - Data and table trend colors need context checks on real table and chart surfaces.
  - The absence of chart-prefixed theme tokens means chart audits must inspect actual component-local token use.
- Code and documentation surfaces:
  - Light code comments are a release-risk candidate in sampled contrast.
  - Dark code comments pass in sampled contrast.
- Visual integrity:
  - Slate can become muddy if warm neutral surfaces, borders, muted text, controls, and shadows are not checked together in component context.

## Audit Rules for Later Slate Work

- Preserve `slate-light` and `slate-dark` unless a later approved migration/deprecation plan changes them.
- Do not rename, remove, or alias Slate tokens without source evidence, docs impact review, consumer override risk review, and migration notes.
- Do not change Slate values solely from sampled ratios without checking component context for text size, weight, opacity, alpha, and adjacent surfaces.
- Treat release-risk candidates as priority findings for later Slate cleanup, not approved edits here.
- Preserve token-name parity with other themes unless a later theme architecture item changes the matrix.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1140` theme switcher and docs theme behavior should use the eight-theme matrix and the per-theme audit evidence from Graphite, Carbon, Navy, and Slate.
- Slate cleanup work must prioritize light `color-text-soft`, light code comments, light strong warning, warm neutral control clarity, chart/data visual review, alpha/composite surfaces, and disabled/read-only visibility.
- Component audits for feedback, toasts, tooltips/popovers, tables, forms, buttons, overlays, command, doc blocks, hero, charts, and content blocks must review Slate token use in context.
- Documentation rewrite work must show Slate examples only after theme-sensitive contrast and visual hierarchy expectations are stable.
- Contrast automation should eventually composite alpha tokens and flag sampled release-risk pairs.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Theme architecture audit: `@24vlh/vds/docs/planning/tokens/vds-theme-architecture-audit.md`
- Theme contrast and visual baseline: `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
- Semantic token naming cleanup plan: `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
- Focus ring and interaction-state audit: `@24vlh/vds/docs/planning/tokens/vds-focus-ring-interaction-state-audit.md`
- Navy theme audit precedent: `@24vlh/vds/docs/planning/tokens/vds-navy-theme-audit.md`
- Carbon theme audit precedent: `@24vlh/vds/docs/planning/tokens/vds-carbon-theme-audit.md`
- Graphite theme audit precedent: `@24vlh/vds/docs/planning/tokens/vds-graphite-theme-audit.md`
- Slate source: `@24vlh/vds/src/themes/slate.css`
- Component sources: `@24vlh/vds/src/components/*.css`
- Raw docs: `@24vlh/vds/doc-raw/*.doc.html`
