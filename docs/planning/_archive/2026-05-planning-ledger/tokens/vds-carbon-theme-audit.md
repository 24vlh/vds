# VDS Carbon Theme Audit

Last updated: `2026-05-23`

Source item: `VDS-1110`

This file records the Carbon-specific theme audit for the tokens, themes, and foundation track. It is a planning artifact only: no CSS, token names, token values, theme roots, raw docs, generated `dist`, package metadata, scripts, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/themes/carbon.css` remains a pure token-layer file.
- Preserve `carbon-light` and `carbon-dark` roots.
- Carbon token names and theme roots are compatibility-sensitive.
- Contrast findings are classified as `pass`, `review`, `needs manual alpha/composite check`, or `release-risk candidate`.
- Sampled contrast findings are planning evidence, not approved token changes.
- Any future Carbon token change that touches source CSS while generated output is out of scope must record `dist refresh pending`.

## Source and Root Evidence

`@24vlh/vds/src/themes/carbon.css` currently has:

- Lines: `663`.
- Custom property declarations: `416`.
- `carbon-light` declarations: `208`.
- `carbon-dark` declarations: `208`.
- Unique token names: `208`.
- Hex colors: `333`.
- `rgb()`/`rgba()` values: `48`.
- Gradients: `4`.
- `var(...)` aliases: `39`.

The Carbon roots match the theme architecture contract from `VDS-1090`.

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

Component-prefixed Carbon tokens are theme-scoped values today, not automatically global semantic tokens.

## Brand, Focus, Shadow, and Overlay Evidence

| Area | Light | Dark |
| --- | --- | --- |
| Brand ink | `#0E1113` | `#F5F7F7` |
| Brand accent | `#2BA6A6` | `#2BA6A6` |
| Focus ring | `#2BA6A6` | `#2BA6A6` |

Carbon shadows:

- Light `--shadow-1`: `0 8px 20px rgba(14, 17, 19, 0.07)`
- Light `--shadow-2`: `0 10px 30px rgba(14, 17, 19, 0.12)`
- Light `--shadow-3`: `0 16px 40px rgba(14, 17, 19, 0.18)`
- Dark `--shadow-1`: `0 8px 20px rgba(0, 0, 0, 0.45)`
- Dark `--shadow-2`: `0 10px 30px rgba(0, 0, 0, 0.55)`
- Dark `--shadow-3`: `0 16px 40px rgba(0, 0, 0, 0.65)`

Carbon overlay tokens are identical in light and dark:

- `--overlay-backdrop-default`: `rgba(0, 0, 0, 0.45)`
- `--overlay-backdrop-light`: `rgba(0, 0, 0, 0.25)`
- `--overlay-backdrop-heavy`: `rgba(0, 0, 0, 0.60)`
- `--overlay-backdrop-loading`: `rgba(0, 0, 0, 0.60)`

Later visual review must decide whether identical overlay alpha values preserve hierarchy on both light and dark Carbon surfaces.

## Placeholder and Selection Evidence

- Light `color-placeholder`: `rgba(0, 0, 0, 0.30)`.
- Dark `color-placeholder`: `rgba(245, 247, 247, 0.30)`.
- Light selection:
  - `color-selection-bg`: `rgba(43, 166, 166, 0.35)`.
  - `color-selection-text`: `#0E1113`.
- Dark selection:
  - `color-selection-bg`: `rgba(43, 166, 166, 0.35)`.
  - `color-selection-text`: `#F5F7F7`.

These alpha surfaces require composite checks against real adjacent surfaces before release.

## Sampled Contrast Passes

These sampled pairs pass the relevant WCAG-backed threshold for their recorded role:

| Root | Pair | Ratio |
| --- | --- | ---: |
| Light | `color-text` on `color-bg` | `17.62` |
| Light | `color-text-muted` on `color-bg` | `7.11` |
| Light | `color-on-accent` on `color-accent` | `6.41` |
| Light | `color-footer-text` on `color-footer-bg` | `17.62` |
| Light | `semantic-info-text` on `semantic-info-bg` | `6.16` |
| Light | `semantic-success-text` on `semantic-success-bg` | `5.09` |
| Light | `semantic-danger-text` on `semantic-danger-bg` | `9.22` |
| Light | `semantic-error-text` on `semantic-error-bg` | `9.22` |
| Light | `semantic-info-text-strong` on `semantic-info-bg-strong` | `5.56` |
| Light | `semantic-success-text-strong` on `semantic-success-bg-strong` | `4.74` |
| Light | `semantic-error-text-strong` on `semantic-error-bg-strong` | `8.12` |
| Dark | `color-text` on `color-bg` | `17.62` |
| Dark | `color-text-muted` on `color-bg` | `11.73` |
| Dark | `color-text-soft` on `color-bg` | `6.36` |
| Dark | `link-text` on `color-bg` | `8.55` |
| Dark | `focus-ring-color` on `color-bg` | `6.41` |
| Dark | `focus-ring-color` on `color-surface` | `5.81` |
| Dark | `color-accent` on `color-bg` as non-text | `6.41` |
| Dark | `color-on-accent` on `color-accent` | `6.41` |
| Dark | `color-footer-text` on `color-footer-bg` | `18.53` |
| Dark | `semantic-warning-text` on `semantic-warning-bg` | `5.98` |
| Dark | `semantic-warning-text-strong` on `semantic-warning-bg-strong` | `6.17` |
| Dark | `code-syntax-comment` on `code-block-bg` | `6.09` |

These passes are sampled evidence only. Component-level usage can still alter perception through size, weight, opacity, surrounding surfaces, or alpha overlays.

## Sampled Review Findings

These sampled pairs need later review because they miss the normal-text `4.5:1` target, the non-text `3:1` target, or sit close enough to the threshold that component context matters.

| Root | Pair | Ratio | Classification |
| --- | --- | ---: | --- |
| Light | `color-text-soft` on `color-bg` | `3.49` | `review` |
| Light | `color-border-subtle` on `color-bg` | `1.36` | `review` |
| Light | `color-border-subtle` on `color-surface` | `1.46` | `review` |
| Light | `color-border-strong` on `color-bg` | `2.19` | `review` |
| Light | `link-text` on `color-bg` | `2.75` | `release-risk candidate` |
| Light | `focus-ring-color` on `color-bg` | `2.75` | `review` |
| Light | `focus-ring-color` on `color-surface` | `2.95` | `review` |
| Light | `color-accent` on `color-bg` | `2.75` | `review` |
| Light | `semantic-warning-text` on `semantic-warning-bg` | `3.81` | `review` |
| Light | `semantic-warning-text-strong` on `semantic-warning-bg-strong` | `3.26` | `review` |
| Light | `code-syntax-comment` on `code-block-bg` | `3.33` | `review` |
| Dark | `color-border-subtle` on `color-bg` | `1.64` | `review` |
| Dark | `color-border-subtle` on `color-surface` | `1.49` | `review` |
| Dark | `color-border-strong` on `color-bg` | `2.34` | `review` |
| Dark | `semantic-info-text` on `semantic-info-bg` | `3.57` | `review` |
| Dark | `semantic-success-text` on `semantic-success-bg` | `4.03` | `review` |
| Dark | `semantic-danger-text` on `semantic-danger-bg` | `2.11` | `release-risk candidate` |
| Dark | `semantic-error-text` on `semantic-error-bg` | `2.11` | `release-risk candidate` |
| Dark | `semantic-info-text-strong` on `semantic-info-bg-strong` | `3.91` | `review` |
| Dark | `semantic-success-text-strong` on `semantic-success-bg-strong` | `4.39` | `review` |
| Dark | `semantic-error-text-strong` on `semantic-error-bg-strong` | `3.36` | `review` |

The release-risk candidates are not approved fixes in this item. They should be prioritized during Carbon token cleanup because they can affect meaningful text or critical semantic status.

## Manual Alpha and Composite Checks

Static hex contrast cannot fully evaluate these Carbon surfaces:

- Placeholders:
  - Light `color-placeholder`: `rgba(0, 0, 0, 0.30)`.
  - Dark `color-placeholder`: `rgba(245, 247, 247, 0.30)`.
- Selection:
  - Light and dark `color-selection-bg`: `rgba(43, 166, 166, 0.35)`.
- Translucent surfaces:
  - Any rgba surface, loading, or overlay value that composites with page content.
- Overlay backdrops:
  - default, light, heavy, and loading overlays use the same alpha black values in both roots.
- Table and data surfaces:
  - Table row backgrounds, borders, and text variants require context checks because several sampled table pairs resolve through aliases or alpha-adjacent surfaces.
- Brand sections:
  - `section-brand-accent-bg` uses layered radial gradients.

Later contrast automation or manual visual review must composite these against the expected surfaces before release.

## Component-Family Risk Notes

- Semantic states:
  - Light warning semantic pairs miss normal-text AA in sampled checks.
  - Dark danger/error semantic text is a release-risk candidate.
  - Dark success and info semantic text needs later review.
- Forms and placeholders:
  - Placeholder tokens require alpha compositing.
  - No disabled or selected theme tokens exist by name, so disabled/read-only visibility depends on component styling.
- Focus:
  - `#2BA6A6` passes sampled focus-ring checks in dark mode, but it is under the non-text `3:1` target on light `color-bg` and just under it on light `color-surface`.
- Tables and data:
  - Data and table trend colors need context checks on real table surfaces, especially row variants and muted states.
- Code and documentation surfaces:
  - Light code comments are a review finding in sampled contrast.
  - Code blocks and inline code need later component/context review.
- Overlay and dark surfaces:
  - Dark shadows are much stronger than light shadows, while overlay alphas are shared across roots. Later review should check whether dialogs, drawers, command surfaces, and popovers keep clear depth without over-darkening.

## Audit Rules for Later Carbon Work

- Preserve `carbon-light` and `carbon-dark` unless a later approved migration/deprecation plan changes them.
- Do not rename, remove, or alias Carbon tokens without source evidence, docs impact review, consumer override risk review, and migration notes.
- Do not change Carbon values solely from sampled ratios without checking component context for text size, weight, opacity, alpha, and adjacent surfaces.
- Treat release-risk candidates as priority findings for later Carbon cleanup, not approved edits here.
- Preserve token-name parity with other themes unless a later theme architecture item changes the matrix.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1120` Navy theme audit should follow this same per-theme audit shape for Navy-specific contrast, accent hierarchy, semantic states, charts, and focus risks.
- Carbon cleanup work must prioritize light link/accent/focus treatment, dark danger/error semantic text, dark border visibility, alpha/composite surfaces, and disabled/read-only visibility.
- Component audits for feedback, toasts, tooltips/popovers, tables, forms, buttons, overlays, command, doc blocks, hero, charts, and content blocks must review Carbon token use in context.
- Documentation rewrite work must show Carbon examples only after theme-sensitive contrast and visual hierarchy expectations are stable.
- Contrast automation should eventually composite alpha tokens and flag sampled release-risk pairs.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Theme architecture audit: `@24vlh/vds/docs/planning/tokens/vds-theme-architecture-audit.md`
- Theme contrast and visual baseline: `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
- Semantic token naming cleanup plan: `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
- Focus ring and interaction-state audit: `@24vlh/vds/docs/planning/tokens/vds-focus-ring-interaction-state-audit.md`
- Graphite theme audit precedent: `@24vlh/vds/docs/planning/tokens/vds-graphite-theme-audit.md`
- Carbon source: `@24vlh/vds/src/themes/carbon.css`
- Component sources: `@24vlh/vds/src/components/*.css`
- Raw docs: `@24vlh/vds/doc-raw/*.doc.html`
