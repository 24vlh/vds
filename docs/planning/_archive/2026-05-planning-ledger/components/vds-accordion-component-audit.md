# VDS Accordion Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-2010`

This file records the accordion component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/accordion.css` is the source truth for current accordion CSS behavior.
- `@24vlh/vds/doc-raw/vds-accordion.doc.html` and `@24vlh/agents/docs_vds/components/vds-accordion.json` are docs/index evidence.
- The current implementation is native `<details>/<summary>` disclosure CSS.
- The native `[open]` attribute is the source state for open/closed styling.
- Existing accordion classes, density hooks, icon usage, state selectors, and `--accordion-*` variables are compatibility-sensitive.
- No APG-custom JavaScript behavior, selector rewrite, docs rewrite, or generated output refresh happens in `VDS-2010`.

## Source CSS Evidence

`@24vlh/vds/src/components/accordion.css` currently has:

- Lines: `309`.
- Selector blocks: `36`.
- Expanded selectors: `46`.
- Custom property declarations: `44`.
- Unique `--accordion-*` local token names: `25`.
- `var(...)` references: `100`.
- `!important` declarations: `0`.
- Hard-coded hex colors: `0`.
- `rgb(...)` / `rgba(...)` colors: `0`.

Media blocks:

- `(hover: hover) and (pointer: fine)`
- `(forced-colors: active)`

State and interaction evidence:

- `[open]` selector matches: `7`.
- `:focus-visible` selectors: `2`.
- `:focus-within` selectors: `1`.
- `:hover` selectors: `1`.
- `:active` selectors: `2`.
- Transition declarations: `3`.
- Transform declarations: `3`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `1`.
- Responsive viewport media queries: `0`.

## Component Contract

Current accordion source surfaces:

- Root/local-token scopes:
  - `[data-vds-accordion]`
  - `.vds-accordion`
  - `.accordion`
- Main structure:
  - `.accordion`
  - `.accordion-item`
  - `.accordion-header`
  - `.accordion-header-text`
  - `.accordion-title`
  - `.accordion-description`
  - `.accordion-meta`
  - `.accordion-icon`
  - `.accordion-body`
- State and variants:
  - `.accordion-item[open]`
  - `.accordion-item--info`
  - `.accordion-item--success`
  - `.accordion-item--warning`
  - `.accordion-item--danger`
  - `.accordion-title--truncate`
- Density hooks:
  - `.density-a .accordion`
  - `.density-a .accordion-item`
  - `.density-c .accordion`
  - `.density-c .accordion-item`

Source interpretation:

- Accordion structure is built around native `<details>` and `<summary>`.
- The component is pure CSS and does not require JavaScript for basic disclosure.
- Semantic modifiers change the rail color only.
- Density hooks change spacing and hit-area rhythm without changing markup.

## Local Token Surface

Current `--accordion-*` local token names:

| Token | Role |
| --- | --- |
| `--accordion-gap` | wrapper gap |
| `--accordion-item-bg` | item background |
| `--accordion-item-bg-hover` | header hover background |
| `--accordion-item-bg-active` | header active background |
| `--accordion-item-bg-open` | open item background |
| `--accordion-item-border` | default item border |
| `--accordion-item-border-open` | focus/open border |
| `--accordion-item-rail` | open state and semantic rail |
| `--accordion-divider` | body divider |
| `--accordion-shadow` | item shadow |
| `--accordion-rail-width` | open rail width |
| `--accordion-header-gap` | header grid gap |
| `--accordion-header-padding-block` | header block padding |
| `--accordion-header-padding-inline` | header inline padding |
| `--accordion-body-gap` | body content gap |
| `--accordion-body-padding-top` | body top padding when open |
| `--accordion-body-padding-inline` | body inline padding |
| `--accordion-body-padding-bottom` | body bottom padding |
| `--accordion-title-size` | title size |
| `--accordion-title-line-height` | title line height |
| `--accordion-description-size` | description size |
| `--accordion-meta-size` | meta size |
| `--accordion-eyebrow-size` | eyebrow size |
| `--accordion-hit-area` | header minimum hit area |
| `--accordion-icon-size` | chevron/icon size |

Audit conclusions:

- Local tokens are component-owned aliases.
- They pull from primitive spacing, typography, radius, focus, motion, and theme color tokens.
- They are not approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Public and documented accordion source classes:

| Class | Classification | Source | Docs |
| --- | --- | --- | --- |
| `.accordion` | `public` | `accordion.css` | `vds-accordion.doc.html` |
| `.accordion-body` | `public` | `accordion.css` | `vds-accordion.doc.html` |
| `.accordion-description` | `public` | `accordion.css` | `vds-accordion.doc.html` |
| `.accordion-eyebrow` | `public` | `accordion.css` | `vds-accordion.doc.html` |
| `.accordion-header` | `public` | `accordion.css` | `vds-accordion.doc.html` |
| `.accordion-header-text` | `public` | `accordion.css` | `vds-accordion.doc.html` |
| `.accordion-icon` | `public` | `accordion.css` | `vds-accordion.doc.html` |
| `.accordion-item` | `public` | `accordion.css` | `vds-accordion.doc.html` |
| `.accordion-item--danger` | `public` | `accordion.css` | `vds-accordion.doc.html` |
| `.accordion-item--info` | `public` | `accordion.css` | `vds-accordion.doc.html` |
| `.accordion-item--success` | `public` | `accordion.css` | `vds-accordion.doc.html` |
| `.accordion-item--warning` | `public` | `accordion.css` | `vds-accordion.doc.html` |
| `.accordion-meta` | `public` | `accordion.css` | `vds-accordion.doc.html` |
| `.accordion-title` | `public` | `accordion.css` | `vds-accordion.doc.html` |
| `.accordion-title--truncate` | `public` | `accordion.css` | `vds-accordion.doc.html` |

Adjacent classes:

- `.density-a`: public, documented, affects accordion spacing.
- `.density-c`: public, documented, affects accordion spacing.
- `.accordion__icon`: candidate-public, defined in `src/components/icons.css`, not documented in accordion docs.

Audit conclusions:

- The accordion source class surface is fully public in the current selector inventory.
- Density hooks are global public hooks, not accordion-private classes.
- `.accordion__icon` is an icon-system selector and should be routed to icon audit work if changed.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-accordion.doc.html` has `854` lines.
- Strongly covered terms include `<details>`, `<summary>`, `[open]`, `name`, semantic variants, density, icons, truncation, and native disclosure behavior.

Term evidence:

| Term | Mentions |
| --- | ---: |
| `details` | `77` |
| `summary` | `75` |
| `open` | `36` |
| `name` | `15` |
| `keyboard` | `3` |
| `focus` | `2` |
| `focus-visible` | `1` |
| `aria` | `9` |
| `expanded` | `3` |
| `collapsed` | `1` |
| `truncate` | `5` |
| `density` | `9` |
| `semantic` | `9` |
| `theme` | `7` |
| `icon` | `128` |
| `chevron` | `32` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |
| `responsive` | `0` |
| `mobile` | `0` |
| `touch` | `0` |

Generated index:

- `@24vlh/agents/docs_vds/components/vds-accordion.json`
- Blocks: `9`.
- Code examples: `7`.
- Generated `source_css`:
  - `accordion.css`
  - `base.css`
  - `content-blocks.css`
  - `doc-block.css`
  - `icons.css`
  - `layout.css`
  - `sections.css`
  - `typography.css`
  - `utilities.css`

Audit conclusions:

- Generated metadata correctly identifies `accordion.css` but also includes docs presentation CSS.
- Later docs rewrite should separate runtime component dependency guidance from docs page presentation dependencies.
- Forced-colors and reduced-motion source evidence is under-documented.

## APG Alignment

WAI-ARIA APG accordion reference records:

- Accordion headers are controls that reveal or hide associated panels.
- Enter and Space activate the focused accordion header.
- Tab and Shift+Tab move through focusable elements in document order.
- Arrow, Home, and End header navigation are optional custom behavior.
- APG custom implementations use heading/button wrappers, `aria-expanded`, `aria-controls`, optional `aria-disabled`, and optional panel `region`/`aria-labelledby`.

Current VDS interpretation:

- VDS Accordion currently uses native `<details>/<summary>` rather than a custom ARIA button/panel implementation.
- Native summary activation supplies the baseline open/close behavior.
- CSS cannot implement APG roving arrow-key navigation or ARIA state synchronization.
- Consumer/application code is responsible for any custom keyboard behavior, fallback exclusive behavior, or APG-style custom markup beyond native details.

Audit conclusion:

- The current implementation should be documented as native disclosure first, with APG used as the behavior reference for any future custom accordion implementation.

## Dist and Package-Facing Evidence

Current checked-in dist files:

- `@24vlh/vds/dist/components/accordion.css`
- `@24vlh/vds/dist/components/accordion.min.css`

Evidence:

- `dist/components/accordion.css` exists and currently has `309` lines.
- `dist/components/accordion.min.css` exists and is non-empty.
- `src/index.css` imports `components/accordion.css`.

Audit conclusions:

- Accordion has package-facing standalone component output.
- No generated `dist` file is changed in `VDS-2010`.
- If future accordion source CSS changes while generated output is out of scope, implementation logs must record `dist refresh pending`.

## Current Risks

- Accordion has transition and chevron rotation behavior but no file-local reduced-motion block.
- Forced-colors handling exists in CSS but is not documented in raw docs.
- Docs install examples use `/css/...` paths instead of current package-facing `@24vlh/vds/dist/...` paths.
- Docs source metadata mixes runtime component dependencies with docs presentation dependencies.
- Semantic variants only change rail color and do not add semantic state.
- `accordion-title--truncate` can hide meaningful text.
- Native `details[name]` exclusive groups are documented, but browser support and fallback policy are deferred.
- APG custom accordion guidance differs from native details behavior; docs must avoid implying custom JS behavior exists.
- Density hooks are shared public classes and must not be treated as accordion-private.

## Audit Rules for Later Accordion Work

- Do not rename, remove, or reclassify accordion selectors without later approved migration work.
- Do not rename, remove, or deprecate `--accordion-*` local variables without token and migration review.
- Do not replace native details behavior with custom ARIA behavior without accessibility and docs approval.
- Do not change semantic rail colors without theme and contrast review.
- Do not change truncation behavior without readability and accessible-name review.
- Do not add or remove motion behavior without reduced-motion review.
- If accordion source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-2020` and later component audits should follow this component audit structure.
- Accordion implementation work should evaluate file-local reduced-motion handling.
- Accordion docs rewrite should clarify native details behavior, runtime dependencies, package-facing paths, APG differences, forced-colors behavior, and truncation warnings.
- Accordion accessibility review should cover focus visibility, keyboard expectations, native versus custom behavior, semantic variant warnings, and exclusive behavior fallback.
- Theme/contrast review should check semantic rail colors and focus/forced-colors states across all themes.

## Reference Sources

- `@24vlh/vds/src/components/accordion.css`
- `@24vlh/vds/doc-raw/vds-accordion.doc.html`
- `@24vlh/agents/docs_vds/components/vds-accordion.json`
- `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- `@24vlh/agents/docs_md/design/patterns/accordion.md`
- `@24vlh/vds/dist/components/accordion.css`
- `@24vlh/vds/dist/components/accordion.min.css`
