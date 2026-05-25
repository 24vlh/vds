# VDS Graphite Theme Audit

Last updated: `2026-05-23`

Source item: `VDS-1100`

This file records the Graphite-specific theme audit for the tokens, themes, and foundation track. It is a planning artifact only: no CSS, token names, token values, theme roots, raw docs, generated `dist`, package metadata, scripts, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/themes/graphite.css` remains a pure token-layer file.
- Preserve `graphite-light` and `graphite-dark` roots.
- Graphite token names and theme roots are compatibility-sensitive.
- Contrast findings are classified as `pass`, `review`, `needs manual alpha/composite check`, or `release-risk candidate`.
- Sampled contrast findings are planning evidence, not approved token changes.
- Any future Graphite token change that touches source CSS while generated output is out of scope must record `dist refresh pending`.

## Source and Root Evidence

`@24vlh/vds/src/themes/graphite.css` currently has:

- Lines: `663`.
- Custom property declarations: `416`.
- `graphite-light` declarations: `208`.
- `graphite-dark` declarations: `208`.
- Unique token names: `208`.
- Hex colors: `333`.
- `rgb()`/`rgba()` values: `48`.
- Gradients: `4`.
- `var(...)` aliases: `39`.

The Graphite roots match the theme architecture contract from `VDS-1090`.

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

Component-prefixed Graphite tokens are theme-scoped values today, not automatically global semantic tokens.

## Brand, Focus, and Shadow Evidence

| Area | Light | Dark |
| --- | --- | --- |
| Brand ink | `#0E3D69` | `#F5F7FA` |
| Brand accent | `#1371A3` | `#1F3A4D` |
| Focus ring | `#1371A3` | `#1371A3` |

Light and dark Graphite currently use the same blue-tinted shadow values:

- `--shadow-1`: `0 8px 20px rgba(14, 61, 105, 0.07)`
- `--shadow-2`: `0 10px 30px rgba(14, 61, 105, 0.12)`
- `--shadow-3`: `0 16px 40px rgba(14, 61, 105, 0.18)`

Later visual review must decide whether this shared shadow color preserves depth in dark mode.

## Sampled Contrast Passes

These sampled pairs pass the relevant WCAG-backed threshold for their recorded role:

| Root | Pair | Ratio |
| --- | --- | ---: |
| Light | `color-text` on `color-bg` | `10.53` |
| Light | `color-text-muted` on `color-bg` | `6.16` |
| Light | `color-text` on `color-surface` | `11.11` |
| Light | `color-text-muted` on `color-surface` | `6.50` |
| Light | `color-accent` on `color-bg` as non-text | `5.08` |
| Light | `link-text` on `color-bg` | `5.08` |
| Light | `color-on-accent` on `color-accent` | `5.36` |
| Light | `color-footer-text` on `color-footer-bg` | `10.53` |
| Light | `focus-ring-color` on `color-bg` | `5.08` |
| Light | `focus-ring-color` on `color-surface` | `5.36` |
| Dark | `color-text` on `color-bg` | `17.62` |
| Dark | `color-text-muted` on `color-bg` | `9.04` |
| Dark | `color-text-soft` on `color-bg` | `5.31` |
| Dark | `color-text` on `color-surface` | `16.27` |
| Dark | `color-border-subtle` on `color-bg` as non-text | `3.21` |
| Dark | `color-border-strong` on `color-bg` as non-text | `3.98` |
| Dark | `color-accent` on `color-bg` as non-text | `3.53` |
| Dark | `color-on-accent` on `color-accent` | `5.36` |
| Dark | `color-footer-text` on `color-footer-bg` | `13.01` |
| Dark | `focus-ring-color` on `color-bg` | `3.53` |
| Dark | `focus-ring-color` on `color-surface` | `3.26` |
| Dark | `semantic-info-text` on `semantic-info-bg` | `5.01` |
| Dark | `semantic-warning-text` on `semantic-warning-bg` | `6.94` |
| Dark | `code-syntax-comment` on `code-block-bg` | `5.10` |

These passes are sampled evidence only. Component-level usage can still alter perception through size, weight, opacity, surrounding surfaces, or alpha overlays.

## Sampled Review Findings

These sampled pairs need later review because they miss the normal-text `4.5:1` target, the non-text `3:1` target, or sit close enough to the threshold that component context matters.

| Root | Pair | Ratio | Classification |
| --- | --- | ---: | --- |
| Light | `color-text-soft` on `color-bg` | `3.43` | `review` |
| Light | `color-border-subtle` on `color-bg` | `1.34` | `review` |
| Light | `color-border-subtle` on `color-surface` | `1.41` | `review` |
| Light | `color-border-strong` on `color-bg` | `2.00` | `review` |
| Light | `semantic-info-text` on `semantic-info-bg` | `3.70` | `review` |
| Light | `semantic-warning-text` on `semantic-warning-bg` | `4.28` | `review` |
| Light | `semantic-success-text` on `semantic-success-bg` | `3.82` | `review` |
| Light | `semantic-danger-text` on `semantic-danger-bg` | `4.11` | `review` |
| Light | `semantic-error-text` on `semantic-error-bg` | `4.11` | `review` |
| Light | `semantic-info-text-strong` on `semantic-info-bg-strong` | `3.33` | `review` |
| Light | `semantic-warning-text-strong` on `semantic-warning-bg-strong` | `3.70` | `review` |
| Light | `semantic-success-text-strong` on `semantic-success-bg-strong` | `3.44` | `review` |
| Light | `semantic-error-text-strong` on `semantic-error-bg-strong` | `3.45` | `review` |
| Light | `code-syntax-comment` on `code-block-bg` | `2.66` | `release-risk candidate` |
| Dark | `color-border-subtle` on `color-surface` | `2.96` | `review` |
| Dark | `link-text` on `color-bg` | `4.24` | `review` |
| Dark | `semantic-success-text` on `semantic-success-bg` | `4.03` | `review` |
| Dark | `semantic-danger-text` on `semantic-danger-bg` | `2.66` | `release-risk candidate` |
| Dark | `semantic-error-text` on `semantic-error-bg` | `2.66` | `release-risk candidate` |
| Dark | `semantic-success-text-strong` on `semantic-success-bg-strong` | `4.39` | `review` |
| Dark | `semantic-error-text-strong` on `semantic-error-bg-strong` | `2.85` | `release-risk candidate` |

The release-risk candidates are not approved fixes in this item. They should be prioritized during Graphite token cleanup because they can affect meaningful text or critical semantic status.

## Manual Alpha and Composite Checks

Static hex contrast cannot fully evaluate these Graphite surfaces:

- Placeholders:
  - Light `color-placeholder`: `rgba(0, 0, 0, 0.30)`.
  - Dark `color-placeholder`: `rgba(245, 247, 250, 0.30)`.
- Selection:
  - Light `color-selection-bg`: `rgba(45, 65, 73, 11%)`.
  - Dark `color-selection-bg`: `rgba(237, 23, 23, 0.40)`.
- Translucent surfaces:
  - `color-surface-translucent-strong`: `rgba(255, 255, 255, 0.28)` in both roots.
- Overlay backdrops:
  - default, light, heavy, and loading overlays use alpha black values.
- Brand sections:
  - `section-brand-accent-bg` uses layered radial gradients.

Later contrast automation or manual visual review must composite these against the expected surfaces before release.

## Component-Family Risk Notes

- Semantic states:
  - Light semantic state text pairs frequently miss normal-text AA.
  - Dark danger/error semantic text is notably weak.
- Forms and placeholders:
  - Placeholder tokens require alpha compositing.
  - No disabled or selected theme tokens exist by name, so disabled/read-only visibility depends on component styling.
- Focus:
  - `#1371A3` passes sampled focus-ring checks in light and dark, but component shadows and adjacent borders still need component-level review.
- Tables and data:
  - Table row state tokens are dense and include text, background, and border variants. Some table row tokens are unreferenced outside themes per `VDS-1090`.
- Code and documentation surfaces:
  - Light code comments are a release-risk candidate in sampled contrast.
  - Code blocks and inline code need later component/context review.
- Hero and brand surfaces:
  - Brand identity is blue-forward and can over-tint links, focus, accents, charts, and data/status surfaces if hierarchy is not checked in component context.

## Audit Rules for Later Graphite Work

- Preserve `graphite-light` and `graphite-dark` unless a later approved migration/deprecation plan changes them.
- Do not rename, remove, or alias Graphite tokens without source evidence, docs impact review, consumer override risk review, and migration notes.
- Do not change Graphite values solely from sampled ratios without checking component context for text size, weight, opacity, alpha, and adjacent surfaces.
- Treat release-risk candidates as priority findings for later Graphite cleanup, not approved edits here.
- Preserve token-name parity with other themes unless a later theme architecture item changes the matrix.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1110` Carbon theme audit should follow this same per-theme audit shape for Carbon-specific contrast and dark-surface risks.
- Graphite cleanup work must prioritize semantic state text, light code comments, dark danger/error, alpha/composite surfaces, and disabled/read-only visibility.
- Component audits for feedback, toasts, tooltips/popovers, tables, forms, buttons, doc blocks, hero, charts, and content blocks must review Graphite token use in context.
- Documentation rewrite work must show Graphite examples only after theme-sensitive contrast and visual hierarchy expectations are stable.
- Contrast automation should eventually composite alpha tokens and flag sampled release-risk pairs.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Theme architecture audit: `@24vlh/vds/docs/planning/tokens/vds-theme-architecture-audit.md`
- Theme contrast and visual baseline: `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
- Semantic token naming cleanup plan: `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
- Focus ring and interaction-state audit: `@24vlh/vds/docs/planning/tokens/vds-focus-ring-interaction-state-audit.md`
- Graphite source: `@24vlh/vds/src/themes/graphite.css`
- Component sources: `@24vlh/vds/src/components/*.css`
- Raw docs: `@24vlh/vds/doc-raw/*.doc.html`
