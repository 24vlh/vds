# VDS Semantic Token Naming Cleanup Plan

Last updated: `2026-05-23`

Source item: `VDS-1020`

This file records the VDS semantic token naming cleanup plan for the tokens, themes, and foundation track. It is a planning artifact only: no CSS, token names, token values, themes, raw docs, generated `dist`, package metadata, scripts, workflows, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/primitives.css` owns primitive scale tokens.
- `@24vlh/vds/src/themes/*.css` owns current theme role, state, color, and theme-scoped component token values.
- `@24vlh/vds/src/components/*.css` owns component-local aliases unless a later approved token architecture item promotes them.
- Raw docs and docs shell examples can demonstrate tokens, but docs/demo-only tokens are not authoritative source tokens.
- Existing token names remain compatibility-sensitive until a later approved cleanup or migration item says otherwise.
- Any token rename, removal, or compatibility alias requires source evidence, docs impact review, theme impact review, consumer override risk review, migration notes, and explicit approval.

## Current Source Evidence

- Source CSS files scanned: `43`.
- Unique custom property names in source: `934`.
- Source-wide custom property declarations: `3097`.
- Source-wide `var(...)` references: `6749`.
- Primitive token source: `@24vlh/vds/src/primitives.css`.
- Primitive token names: `130`.
- Primitive tokens referenced somewhere in source: `118`.
- Primitive tokens currently without source `var(...)` references: `12`.

The primitive token layer contains no color or semantic-state tokens. Semantic color, state, theme value, and component-local alias cleanup must stay separate from primitive scale cleanup.

## Theme Token Naming Layers

Theme token-name parity is currently complete across the four theme files:

| Theme file | Declarations | Unique token names |
| --- | ---: | ---: |
| `src/themes/carbon.css` | `416` | `208` |
| `src/themes/graphite.css` | `416` | `208` |
| `src/themes/navy.css` | `416` | `208` |
| `src/themes/slate.css` | `416` | `208` |

Current theme naming groups include:

| Group | Unique tokens | Role |
| --- | ---: | --- |
| `color-*` | `70` | Current role/palette hybrid: backgrounds, surfaces, borders, text, icons, brand, state, logo, selection, header/footer, mono, and muted colors. |
| `semantic-*` | `30` | Preferred state-role direction for info, warning, success, danger, and error background, border, text, and strong variants. |
| state-soft aliases | `21` | Soft state aliases such as `accent-soft-*`, `success-soft-*`, `info-soft-*`, `warning-soft-*`, and `danger-soft-*`. |
| surface/text/border/focus/link/overlay/shadow/code/selection roles | `46` | Cross-component role tokens and supporting visual system tokens. |
| theme-scoped component tokens | `136` | Theme-owned values for button, table, hero, section, flow, doc, figure, blockquote, footnote, slider, and related surfaces. |

## Token Layer Contract

- Primitive scale tokens:
  - low-level, theme-independent scale values;
  - typography, spacing, radii, borders, shadows, layout sizes, icons/avatars, motion/easing, z-index, and focus dimensions;
  - not semantic colors or component aliases.
- Theme role tokens:
  - theme-owned values that define surfaces, text, borders, links, overlays, shadows, focus rings, code, tables, selection, and brand roles;
  - currently include `--color-*` names, which are a role/palette hybrid and need classification before cleanup.
- Semantic state tokens:
  - state-role tokens for success, info, warning, danger, and error;
  - `--semantic-*` is the preferred direction for state-role naming;
  - state-soft aliases are compatibility-sensitive and cannot be removed without migration planning.
- Theme-scoped component tokens:
  - component-adjacent values currently defined in theme files so components can vary by theme;
  - not automatically global semantic tokens;
  - later theme architecture work must decide whether they stay in themes or move toward component-local aliases.
- Component-local aliases:
  - custom properties defined by component CSS files;
  - implementation-level aliases unless separately documented and approved as public token surfaces;
  - not promoted to semantic tokens without approved architecture work.
- Docs/demo tokens:
  - token definitions or references inside raw docs and the docs shell;
  - useful evidence of teaching and demo intent;
  - not authoritative source definitions when absent from `src/**/*.css`.

## Component Alias Evidence

- Component files scanned: `33`.
- Component custom property declarations: `1277`.
- Unique component-defined token names: `581`.
- Large component-local alias surfaces:
  - `android`: `59`.
  - `content`: `48`.
  - `command`: `47`.
  - `chart`: `37`.
  - `hero`: `27`.
  - `flow`: `26`.
  - `accordion`: `25`.
  - `avatar`: `20`.
  - `action`: `18`.
  - `inbox`: `18`.
- Shared component-defined token names: `8`.
- Shared unscoped or weakly scoped names include:
  - `active`
  - `guidance-bg`
  - `guidance-text`
  - `info`
  - `interactive`
  - `loading`
  - `success`
  - `warning`

Shared names are naming risks only. Do not rename, remove, or deprecate them without later approved cleanup and migration review.

## Docs and Demo Evidence

Raw docs plus `@24vlh/vds/index.html` currently contain:

- Unique custom property definitions: `86`.
- Unique `var(...)` references: `138`.
- Docs-defined tokens absent from source definitions:
  - `color-brand`
  - `line-height-base`
- Docs-referenced tokens absent from source definitions:
  - `bp-lg`
  - `bp-sm`
  - `color-code-bg`
  - `color-text-strong`
  - `doc-collapsed-height`
  - `opacity-disabled`

These are docs/demo naming findings only. Actual raw-doc cleanup remains deferred to documentation and docs-token work.

## Cleanup Rules for Later Work

- Do not remove or rename any token only because this audit identifies it as mixed, duplicated, unscoped, or docs-only.
- Classify token changes as primitive, theme role, semantic state, theme-scoped component token, component-local alias, docs/demo-only, legacy-compatible, or deprecated before editing source.
- Treat consumer overrides as a compatibility risk even when a token is not formally documented.
- Preserve theme parity across graphite, carbon, navy, and slate unless a later approved theme architecture item changes the theme matrix.
- Keep state-soft aliases until a migration/deprecation plan explicitly approves aliasing or removal.
- Keep component-local aliases local unless a later token architecture item approves promotion into global theme or semantic tokens.
- If source CSS changes while generated output is out of scope, record `dist refresh pending` in the implementation log.

## Current Risks

- `--color-*` currently mixes palette, surface, text, brand, logo, state, and component-adjacent meanings.
- `--semantic-*` overlaps with state-soft aliases, especially for success, info, warning, danger, and error.
- Theme files contain component-scoped token values, so theme role and component alias boundaries are blurry.
- Component CSS defines many local custom properties, including a few unscoped names shared across files.
- Docs/demo examples contain token definitions and references that do not exist in source CSS.
- Token names may be used by consumers as override surfaces even when they are not documented.

## Future Work Contract

- `VDS-1030` must use this naming contract when auditing typography scale and rhythm.
- `VDS-1040` must use this naming contract when auditing spacing and layout rhythm.
- `VDS-1050` must use this naming contract when auditing motion and reduced-motion behavior.
- `VDS-1060` must use this naming contract when auditing focus rings and interaction states.
- `VDS-1090` and theme audit items must keep theme role tokens, semantic state tokens, and component-scoped theme tokens distinct.
- Component audit waves must classify component-local aliases before promoting, renaming, or removing them.
- Documentation rewrite work must resolve docs/demo token examples against source truth or explicitly mark them as illustrative.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Primitive token taxonomy: `@24vlh/vds/docs/planning/tokens/vds-primitives-token-taxonomy-audit.md`
- Primitive token source: `@24vlh/vds/src/primitives.css`
- Theme sources: `@24vlh/vds/src/themes`
- Component sources: `@24vlh/vds/src/components`
- Raw docs: `@24vlh/vds/doc-raw`
- Theme contrast baseline: `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
- Accessibility baseline: `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
