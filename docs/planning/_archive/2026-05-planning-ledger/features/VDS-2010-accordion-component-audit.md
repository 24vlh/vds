# VDS-2010 Accordion Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2010`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2010-accordion-component-audit.md`

## 1. Goal

Create the first component modernization audit for the accordion component. This item records the current native `<details>/<summary>` contract, public class surface, token/local-variable surface, open/focus/forced-colors behavior, docs/index metadata, APG alignment, and risks before any accordion fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/accordion.css` selector, token, state, media, motion, and forced-colors evidence.
- Record public and candidate-public selector inventory evidence.
- Record raw docs and generated docs-index metadata for `vds-accordion`.
- Record APG accordion alignment separately from the current native `<details>/<summary>` implementation.
- Record package-facing `dist/components/accordion.css` and `.min.css` presence.
- Add an accordion component audit artifact for later accordion CSS fixes, docs rewrite, accessibility review, theme/contrast checks, migration notes, and release verification.
- Update the master feature map so `VDS-0500` is in progress, `VDS-2010` is done, and the next recommended item is `VDS-2020`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Replacing native `<details>/<summary>` with custom ARIA button/panel behavior.
- Adding reduced-motion handling, responsive rules, docs examples, APG keyboard handling, selector reclassification, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local standards docs:
  - `@24vlh/agents/docs_md/design/patterns/accordion.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
  - `@24vlh/vds/docs/planning/foundation/vds-css-specificity-cascade-layer-strategy.md`
  - `@24vlh/agents/docs_vds/components/vds-accordion.json`
- Repo files:
  - `@24vlh/vds/src/components/accordion.css`
  - `@24vlh/vds/doc-raw/vds-accordion.doc.html`
  - `@24vlh/vds/dist/components/accordion.css`
  - `@24vlh/vds/dist/components/accordion.min.css`
  - `@24vlh/vds/src/index.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/accordion.css` has `309` lines.
- Selector blocks: `36`.
- Expanded selectors: `46`.
- Custom property declarations: `44`.
- Unique `--accordion-*` local token names: `25`.
- `var(...)` references: `100`.
- `!important` declarations: `0`.
- Hard-coded hex colors: `0`.
- `rgb(...)` / `rgba(...)` colors: `0`.
- Media blocks:
  - `(hover: hover) and (pointer: fine)`
  - `(forced-colors: active)`

State and interaction evidence:

- `[data-vds-accordion]` appears as a root/local-token scope.
- `.vds-accordion` appears as a root/local-token scope.
- `.accordion` appears as a root/local-token scope and wrapper.
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

Package-facing output evidence:

- `@24vlh/vds/dist/components/accordion.css` exists and has `309` lines.
- `@24vlh/vds/dist/components/accordion.min.css` exists and has non-empty minified output.
- `@24vlh/vds/src/index.css` imports `components/accordion.css`.

## 5. Local Token Surface

Accordion local tokens currently defined:

- `--accordion-gap`
- `--accordion-item-bg`
- `--accordion-item-bg-hover`
- `--accordion-item-bg-active`
- `--accordion-item-bg-open`
- `--accordion-item-border`
- `--accordion-item-border-open`
- `--accordion-item-rail`
- `--accordion-divider`
- `--accordion-shadow`
- `--accordion-rail-width`
- `--accordion-header-gap`
- `--accordion-header-padding-block`
- `--accordion-header-padding-inline`
- `--accordion-body-gap`
- `--accordion-body-padding-top`
- `--accordion-body-padding-inline`
- `--accordion-body-padding-bottom`
- `--accordion-title-size`
- `--accordion-title-line-height`
- `--accordion-description-size`
- `--accordion-meta-size`
- `--accordion-eyebrow-size`
- `--accordion-hit-area`
- `--accordion-icon-size`

Audit conclusions:

- Accordion uses component-local aliases extensively.
- Local aliases are currently compatibility-sensitive and must not be renamed or removed without later migration approval.
- Local token values are sourced from primitive, theme, focus, and semantic color tokens.
- Hard-coded values remain limited to hit-area reserves, eyebrow letter spacing, and icon rotation angles.

## 6. Selector/API Evidence

Selector inventory evidence:

- `15` accordion source classes are public and documented.
- `density-a` and `density-c` are public and documented density hooks used by accordion CSS/docs.
- `accordion__icon` is candidate-public, defined in `src/components/icons.css`, and not documented in `vds-accordion`; it is adjacent icon-system evidence, not an accordion source class.

Public accordion source classes:

- `.accordion`
- `.accordion-body`
- `.accordion-description`
- `.accordion-eyebrow`
- `.accordion-header`
- `.accordion-header-text`
- `.accordion-icon`
- `.accordion-item`
- `.accordion-item--danger`
- `.accordion-item--info`
- `.accordion-item--success`
- `.accordion-item--warning`
- `.accordion-meta`
- `.accordion-title`
- `.accordion-title--truncate`

Adjacent density hooks:

- `.density-a`
- `.density-c`

Audit conclusions:

- All accordion source classes are public and documented.
- Density hooks are not accordion-specific but affect accordion layout and must remain compatibility-sensitive.
- `.accordion__icon` should be routed to the icon system if it needs cleanup or docs classification.

## 7. Docs and Generated Index Evidence

Raw docs evidence:

- `@24vlh/vds/doc-raw/vds-accordion.doc.html` has `854` lines.
- Raw docs strongly cover `<details>`, `<summary>`, `[open]`, `name`, semantic variants, density, icons, truncation, and native disclosure behavior.
- Raw docs mention keyboard `3`, focus `2`, `focus-visible` `1`, ARIA `9`, expanded `3`, collapsed `1`, theme `7`, icon `128`, and chevron `32`.
- Raw docs mention reduced-motion `0`, forced-colors `0`, responsive `0`, mobile `0`, touch `0`, motion `0`, and transition `0`.

Generated docs index evidence:

- `@24vlh/agents/docs_vds/components/vds-accordion.json` has `9` blocks and `7` code examples.
- Generated `source_css` metadata lists:
  - `accordion.css`
  - `base.css`
  - `content-blocks.css`
  - `doc-block.css`
  - `icons.css`
  - `layout.css`
  - `sections.css`
  - `typography.css`
  - `utilities.css`
- Generated class tokens include accordion classes plus docs presentation helpers such as card, section stack, text, icon, and doc-block classes.

Docs/source interpretation:

- `accordion.css` is the component source.
- The generated `source_css` list mixes runtime component dependencies and docs presentation dependencies.
- CSS remains source truth where docs and source behavior diverge.

## 8. APG and Accessibility Alignment

Current implementation stance:

- Accordion is native `<details>/<summary>` based.
- The native `[open]` attribute is the CSS state source.
- The component does not require JavaScript for basic open/close behavior.
- Native `details[name]` exclusive groups are documented as an option.

APG reference evidence:

- WAI-ARIA APG describes accordion headers as controls that reveal or hide associated panels.
- APG keyboard reference includes Enter/Space, Tab/Shift+Tab, and optional Arrow/Home/End handling.
- APG ARIA reference describes heading/button wrappers, `aria-expanded`, `aria-controls`, optional `aria-disabled`, and optional panel `region`/`aria-labelledby`.

Audit interpretation:

- Native `<summary>` provides built-in disclosure activation and keyboard behavior for the current VDS implementation.
- Custom APG arrow-key navigation, heading/button wrappers, `aria-controls`, and optional panel regions are not implemented by CSS and are not required in this audit item.
- Consumer/application code remains responsible for any custom behavior beyond native details, including synchronized exclusive behavior when native `name` support is not acceptable for the target support matrix.

## 9. Current Risks

- Accordion has transition and rotation behavior but no file-local reduced-motion block.
- Forced-colors handling exists in source but is not covered in raw docs.
- Docs install examples use `/css/...` paths and mix runtime dependencies with docs presentation dependencies.
- Semantic variants only change the rail color and do not add semantic meaning or ARIA.
- `accordion-title--truncate` can hide meaningful labels and must coordinate with accessibility/readability guidance.
- Native `details[name]` exclusive behavior is documented, but browser support and fallback policy remain later docs/runtime work.
- APG button/panel and optional roving focus guidance is not the same as the current native details implementation, so docs must avoid implying custom JS behavior exists.
- Density hooks are global public utilities that affect accordion spacing and must not be treated as accordion-private classes.

## 10. Audit Rules for Later Accordion Work

- Do not rename, remove, or reclassify accordion source classes without later approved migration work.
- Do not rename, remove, or deprecate `--accordion-*` local variables without token and migration review.
- Do not replace native details behavior with custom ARIA behavior without accessibility, docs, and migration approval.
- Do not add local reduced-motion handling without coordinating with the motion baseline.
- Do not change semantic rail variants without theme/contrast review.
- Do not change truncation behavior without readability and accessible-name review.
- If accordion source CSS changes while generated output is out of scope, record `dist refresh pending`.

## 11. Future Work Contract

- Component implementation work should evaluate whether accordion needs file-local reduced-motion handling.
- Docs rewrite work should separate runtime dependencies from docs presentation dependencies.
- Docs rewrite work should explain native details behavior versus APG custom accordion behavior.
- Accessibility work should review focus visibility, keyboard expectations, truncation risks, and optional exclusive behavior.
- Theme/contrast work should review rail colors and forced-colors behavior in all themes.
- Icon system work should classify or document adjacent `.accordion__icon` if that selector remains relevant.

## 12. Public Interfaces and Compatibility

- Existing selectors preserved:
  - All accordion selectors remain unchanged.
- New selectors:
  - None.
- Deprecated selectors:
  - None in this item.
- Breaking changes:
  - None in CSS, selectors, tokens, custom property names, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, or package version fields.
- Migration notes:
  - None for package consumers in this item. Later selector changes, token changes, docs rewrite, APG behavior changes, or generated output refreshes may need migration notes.

## 13. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:dist`
  - `pnpm run audit:consumers`
- Accordion scan:
  - Record CSS line, selector, token, reference, media, state, motion, color, forced-colors, and reduced-motion counts.
  - Record public/candidate-public selector inventory evidence.
  - Record docs/index block, class-token, source-css, and code-example evidence.
  - Record APG alignment and native details/summary behavior.
  - Record package-facing `dist/components/accordion.css` and `.min.css` presence.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only. If it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Planning sanity checks:
  - Confirm master map, feature plan, and accordion artifact agree that no CSS, docs, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm `VDS-0500` is in progress.
  - Confirm the next recommended item is `VDS-2020`.

## 14. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting accordion behavior before component fixes.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later accordion selector, token, behavior, or docs changes may require migration notes.

## 15. Approval

- Requested on: `2026-05-24`
- Approved by: user
- Approved on: `2026-05-24`

## 16. Implementation Log

- `2026-05-24`: Created this plan file.
- `2026-05-24`: Added accordion component audit artifact.
- `2026-05-24`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to mark `VDS-0500` in progress, close `VDS-2010`, and set next recommended item to `VDS-2020`.
- `2026-05-24`: Ran/read a read-only accordion audit scan. Summary: `src/components/accordion.css` has `309` lines, `36` selector blocks, `46` selectors, `44` custom property declarations, `25` unique `--accordion-*` names, `100` `var(...)` references, `7` `[open]` selector matches, `2` `:focus-visible`, `1` `:focus-within`, `1` `:hover`, `2` `:active`, `3` transition declarations, `0` `!important`, `0` hard-coded hex/rgb colors, `0` reduced-motion blocks, and `1` forced-colors block; selector inventory records `17` public related classes including density hooks and `1` adjacent candidate-public icon class; raw docs have `854` lines; generated index has `9` blocks and `7` code examples; package-facing accordion dist files exist.

## 17. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed: generated artifacts are fresh with `80` CSS files checked.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-2010` forbids write/regeneration commands.
  - Read-only accordion audit scan completed.
  - VDS-2010 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-2010-accordion-component-audit.md`
  - `@24vlh/vds/docs/planning/components/vds-accordion-component-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None planned; component modernization continues with `VDS-2020`.
