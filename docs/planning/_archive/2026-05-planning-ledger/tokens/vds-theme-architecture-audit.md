# VDS Theme Architecture Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-1090`

This file records the VDS theme architecture audit for the tokens, themes, and foundation track. It is a planning artifact only: no CSS, token names, token values, theme roots, raw docs, generated `dist`, package metadata, scripts, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/themes/*.css` remain pure token-layer files, not layout or component-rule files.
- Theme files own color, surface, border, shadow, focus, link, overlay, state, code, table, and selected component-scoped theme values.
- `@24vlh/vds/src/primitives.css` remains the owner of theme-independent primitive scales such as spacing, typography, radius, motion, z-index, and focus dimensions.
- Component-local aliases remain component-owned unless a later approved architecture item promotes them into theme or semantic tokens.
- Themes remain separate package-facing CSS files; they are not imported by `src/index.css` or `src/core.css`.
- Existing theme roots and theme token names remain compatibility-sensitive until a later approved cleanup or migration item says otherwise.

## Theme Files and Roots

Current theme files:

- `src/themes/graphite.css`
- `src/themes/carbon.css`
- `src/themes/navy.css`
- `src/themes/slate.css`

Current theme roots:

| Theme file | Light root | Dark root |
| --- | --- | --- |
| `src/themes/graphite.css` | `graphite-light` | `graphite-dark` |
| `src/themes/carbon.css` | `carbon-light` | `carbon-dark` |
| `src/themes/navy.css` | `navy-light` | `navy-dark` |
| `src/themes/slate.css` | `slate-light` | `slate-dark` |

Each theme file has:

- `416` custom property declarations.
- `208` declarations in the light root.
- `208` declarations in the dark root.
- `208` unique token names.

Token-name parity is currently complete across graphite, carbon, navy, and slate.

## Theme Loading and Package Surface

- No source CSS file imports themes.
- `src/index.css` and `src/core.css` do not import theme files.
- Theme files are built as separate package-facing CSS outputs.
- Theme CSS remains optional and consumer-selected; VDS does not currently bundle all themes into `vds.css`.

This matches the source/dist policy from `VDS-0220` and the package-surface review from `VDS-0230`.

## Theme Token Groups

Current theme token groups by name:

| Group | Unique token names |
| --- | ---: |
| `color-*` | `70` |
| `semantic-*` | `30` |
| State-soft aliases | `21` |
| Border-related | `34` |
| Surface-related | `15` |
| Shadow-related | `4` |
| Radius-related | `0` |

Selected component-prefixed theme-token groups:

| Prefix | Unique token names |
| --- | ---: |
| `table-*` | `21` |
| `button-*` | `13` |
| `hero-*` | `11` |
| `section-*` | `7` |
| `doc-*` | `3` |
| `flow-*` | `2` |
| `slider-*` | `2` |
| `blockquote-*` | `2` |
| `figure-*` | `1` |
| `footnote-*` | `1` |

These component-prefixed theme tokens are not automatically global semantic tokens. Later component audits must decide whether they remain theme-scoped, move toward component-local defaults, or become semantic roles.

## Referenced and Unreferenced Theme Tokens

Outside `src/themes`:

- Referenced theme token names: `180`.
- Unreferenced theme token names: `28`.

Unreferenced theme tokens currently include:

- `color-brand-accent`
- `color-error-soft`
- `color-error-strong`
- `color-icon-on-accent`
- `color-mono-soft-hover`
- `color-on-error`
- `figure-caption-color`
- `hero-error-text`
- `section-brand-accent-bg`
- `section-brand-body`
- `section-brand-metric-label`
- `section-brand-metric-value`
- `semantic-error-bg`
- `semantic-error-border`
- `semantic-error-text`
- `slider-thumb-bg`
- `slider-track-bg`
- table row variant text, border, and background tokens such as `table-row-bad-text`, `table-row-curious-border`, `table-row-flagged-text`, `table-row-good-text`, `table-row-info-text`, `table-row-muted-text`, `table-row-strange-bg`, `table-row-strange-text`, and `table-row-warning-text`.

Unreferenced tokens are audit findings only. They may be deliberate reserves, docs gaps, stale values, or cleanup candidates.

Top referenced theme tokens outside theme files include:

- `color-border-subtle`
- `color-text`
- `color-text-muted`
- `color-surface-subtle`
- `color-surface`
- `color-accent`
- `focus-ring-color`
- `color-accent-soft`
- `color-danger`
- `color-success`
- `color-border-strong`
- `color-muted-bg`
- `color-warning`
- `color-on-accent`
- `color-info`

These high-use tokens are especially compatibility-sensitive.

## Architecture Boundaries

### Primitive Layer

Owned by `@24vlh/vds/src/primitives.css`.

Current primitive responsibilities include typography, spacing, radii, borders, shadows, layout sizes, icons/avatars, motion/easing, z-index, and focus dimensions. Primitive tokens are theme-independent scale values and must stay separate from theme color and semantic-state decisions.

### Theme Role Layer

Owned by `@24vlh/vds/src/themes/*.css`.

Current theme responsibilities include brand, background, surface, border, text, icon, accent, mono, state, semantic, focus, link, overlay, shadow, code, selection, table, and selected component-scoped values.

### Semantic State Layer

Currently split across `--color-*`, `--semantic-*`, and state-soft aliases.

`--semantic-*` remains the preferred state-role direction from `VDS-1020`, but no state-soft alias or color-state token is removed without migration planning.

### Theme-Scoped Component Layer

Currently includes component-prefixed values for button, table, hero, section, doc, flow, slider, blockquote, figure, and footnote surfaces.

These values live in themes today because they vary by theme. They remain compatibility-sensitive until component audits classify them.

### Component-Local Alias Layer

Owned by `@24vlh/vds/src/components/*.css`.

Component-local aliases remain implementation-level aliases unless a later approved token architecture item promotes them into theme or semantic tokens.

## Current Risks

- `--color-*` is a role/palette hybrid and must be classified before cleanup.
- `--semantic-*`, `--color-*` state tokens, and state-soft aliases overlap.
- Theme files contain component-scoped values, so theme role tokens and component-local aliases are not cleanly separated yet.
- Theme shadow tokens use `shadow-1`, `shadow-2`, and `shadow-3`, while primitives use `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`, and `shadow-xl`.
- Theme files define no radius roles; `VDS-1080` recorded radii as primitive/component-owned for now.
- Theme comments say components should avoid hard-coded hex values, but current source evidence still includes component hard-coded color matches from earlier audits.
- Unreferenced theme tokens may be intentional reserves, docs gaps, future component support, or cleanup candidates.
- Changing theme roots or token names can affect consumer overrides even when tokens are not formally documented.

## Audit Rules for Later Work

- Preserve theme roots unless a later approved migration/deprecation plan changes them.
- Preserve token-name parity across graphite, carbon, navy, and slate unless a later approved architecture item changes the theme matrix.
- Classify theme token changes as primitive, theme role, semantic state, state-soft alias, theme-scoped component token, component-local alias, docs/demo-only, legacy-compatible, or deprecated before editing source.
- Do not remove unreferenced theme tokens only because this audit identifies them as unreferenced.
- Do not collapse `--color-*`, `--semantic-*`, and state-soft aliases without docs impact review, consumer override risk review, migration notes, and explicit approval.
- Do not move component-prefixed theme tokens into component CSS without checking theme parity, component needs, docs examples, and migration impact.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1100` Graphite theme audit must use this architecture contract and focus on graphite-specific contrast, semantic states, brand identity, disabled states, form surfaces, and focus color.
- `VDS-1110` Carbon theme audit must use this architecture contract and focus on carbon-specific contrast, dark-surface handling, semantic states, overlays, code, and data surfaces.
- `VDS-1120` Navy theme audit must use this architecture contract and focus on avoiding over-blue monotony, accent hierarchy, semantic states, charts, and focus.
- `VDS-1130` Slate theme audit must use this architecture contract and focus on neutral balance, contrast, muted text, charts, controls, and data density.
- `VDS-1140` theme switcher and docs theme behavior must keep the eight-theme validation matrix aligned with actual theme roots.
- Component audit waves must classify component-local aliases before promoting, renaming, or removing them.
- Documentation rewrite work must explain theme loading, theme roots, token ownership, and component-scoped theme values without promising aliases that do not exist.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Primitive token taxonomy: `@24vlh/vds/docs/planning/tokens/vds-primitives-token-taxonomy-audit.md`
- Semantic token naming cleanup plan: `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
- Radius, border, and shadow token audit: `@24vlh/vds/docs/planning/tokens/vds-radius-border-shadow-token-audit.md`
- Theme contrast and visual baseline: `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
- Source/dist policy: `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`
- Package metadata and exports review: `@24vlh/vds/docs/planning/architecture/vds-package-metadata-and-exports-review.md`
- Theme sources: `@24vlh/vds/src/themes/*.css`
- Primitive source: `@24vlh/vds/src/primitives.css`
- Component sources: `@24vlh/vds/src/components/*.css`
- Raw docs: `@24vlh/vds/doc-raw/*.doc.html`
