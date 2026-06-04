# VDS-1210 Base Layer Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-1210`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1210-base-layer-audit.md`

## 1. Goal

Create the first audit item for the `VDS-0400 Base, Layout, Utilities, and Global CSS` track. This item records the current `src/base.css` contract: reset strategy, global element defaults, focus and selection behavior, reduced-motion and forced-colors baseline, code/table/form defaults, SPA root selectors, docs coverage, and compatibility rules for later base-layer cleanup.

## 2. Scope

### In scope

- Record `src/base.css` line, token, reference, selector, and at-rule evidence.
- Record global reset/default surfaces, including document defaults, media defaults, form inheritance, button reset, list reset, link states, table reset, code/pre defaults, body/main/footer flex structure, and SPA root container defaults.
- Record global focus, selection, reduced-motion, and forced-colors behavior.
- Record selector inventory evidence for base-defined class-like selectors.
- Record raw-doc coverage and gaps.
- Add a base-layer audit artifact for later base reset cleanup, import contract review, accessibility fixes, docs rewrite, global CSS policy, migration notes, and release verification.
- Update the master feature map so `VDS-0400` starts and the next recommended item is `VDS-1220`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, raw docs, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing import order, reset behavior, forced-colors behavior, docs wording, docs examples, visual checks, or accessibility automation.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
  - `@24vlh/vds/docs/planning/release/vds-browser-css-support-matrix.md`
  - `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`
  - `@24vlh/vds/docs/planning/tokens/vds-focus-ring-interaction-state-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-motion-token-reduced-motion-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-typography-scale-and-rhythm-audit.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Repo files:
  - `@24vlh/vds/src/base.css`
  - `@24vlh/vds/src/primitives.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
  - `@24vlh/vds/index.html`
  - `@24vlh/vds/doc-raw/vds-base.doc.html`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

- `src/base.css` evidence:
  - `305` lines.
  - `7` custom property definitions and `34` `var(...)` references.
  - `44` non-at-rule selector blocks in the current read-only scan.
  - At-rules: `prefers-reduced-motion: reduce` and `forced-colors: active`.
  - Global focus selectors: `:focus`, `:focus:not(:focus-visible)`, and `:focus-visible`.
  - Global selection selector: `::selection`.
  - Hard-coded hex/rgb color literals: `0`.
  - `!important` declarations: `4`, all inside the global reduced-motion safety net.
- Global reset/default surfaces:
  - `html`, universal box sizing, body text/background, media display, form inheritance, button reset, list reset, link hover/active states, table reset, code/pre styles, body/main/footer flex structure, and SPA root containers.
- Selector/API evidence:
  - Selector inventory currently finds `1` base-defined class-like selector: `.app-root`, classified `candidate-public`.
  - SPA root defaults also target `#root`, `#app`, `#__next`, `#__nuxt`, `app-root`, `svelte-root`, `astro-root`, `[qwik-root]`, `[data-app-root]`, and `[data-spa-root]`.
- Docs evidence:
  - `doc-raw/vds-base.doc.html` has `1918` lines.
  - Raw docs cover hybrid reset, browser reset/normalization, HTML/body defaults, lists, media, forms, SPA roots, buttons, focus-visible, selection, rem philosophy, typography baseline, box model, and token examples.
  - Raw docs mention `forced-colors` `0` times while source has a forced-colors block.
  - Raw docs include many token examples outside the base source contract; this is docs breadth, not base ownership.

## 5. Proposed Architecture or Change

### Base CSS contract

- No source CSS, selector, token, raw-doc, package, or generated-output changes.
- Treat `src/base.css` as owner of global reset/normalize behavior, document defaults, global focus outline, selection colors, reduced-motion safety net, forced-colors baseline, table reset, media defaults, form inheritance, code/pre defaults, body/main/footer flex structure, and SPA root container defaults.
- Treat `src/primitives.css` as owner of primitive token definitions.
- Allow `src/base.css` to define base-local custom properties such as link underline thickness and reduced-motion overrides.
- Treat component CSS as owner of component-specific resets, variants, and interaction states.
- Keep layout and utility cleanup deferred to `VDS-1230` through `VDS-1270`.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/foundation/vds-base-layer-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1210`, mark `VDS-0400` in progress, and set next recommended item to `VDS-1220`.
- Do not change README, raw docs, docs shell, docs demos, generated docs indexes, or agents docs output in this item.

## 6. Component API and Compatibility Impact

- Existing selectors preserved:
  - All runtime selectors remain unchanged.
- New selectors:
  - None.
- Deprecated selectors:
  - None in this item.
- Breaking changes:
  - None in CSS, tokens, custom property names, raw docs, package fields, generated `dist`, workflows, selector inventory, consumer reports, or package version fields.
- Migration notes:
  - None for package consumers in this item. Later reset, SPA root, focus, forced-colors, button, form, code/pre, or table defaults may need migration notes if changed.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future cleanup must preserve visible focus and coordinate with `VDS-0060` and `VDS-1060`.
- Semantics or ARIA:
  - No runtime behavior changes. Future base changes must not imply JavaScript-driven accessibility behavior that CSS cannot provide.
- Reduced motion:
  - No runtime behavior changes. The current global reduced-motion safety net remains compatibility-sensitive.
- Forced colors or contrast:
  - No runtime behavior changes. The broad `forced-color-adjust: none` baseline is recorded as a review risk, not fixed here.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Future base/root sizing changes must coordinate with `VDS-0070`.
- Theme coverage:
  - No theme values change. Base continues to consume theme tokens for body, links, focus, selection, code, and borders.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:dist`
  - `pnpm run audit:consumers`
- Base-layer scan:
  - Record line, token, reference, selector, and at-rule counts.
  - Record global reset/default selector groups.
  - Record focus, selection, reduced-motion, forced-colors, table, form, media, code/pre, and SPA root evidence.
  - Record base selector inventory classification.
  - Record raw-doc coverage and gaps.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only. If it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Planning sanity checks:
  - Confirm master map, feature plan, and base-layer artifact agree that no CSS, docs, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1220`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by opening the base/layout/utilities audit track.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later base-default changes may require migration notes.

## 10. Risks

- `base.css` comments say base must load before themes, while current source/docs shell behavior loads primitives first and keeps themes separate; this needs wording/source-of-truth review in later docs/import items.
- `@media (forced-colors: active) { * { forced-color-adjust: none; } }` is broad and must be reviewed before any accessibility or forced-colors cleanup.
- Global button reset and pointer cursor defaults are broad behavioral defaults and must be treated carefully.
- The SPA root selector list may affect consumers using those IDs/elements.
- Base code/pre styles overlap with typography and docs code-block styling and need later docs/component context review.
- Raw docs include token examples outside the base source contract, which could blur ownership during docs rewrite.

## 11. Open Questions

- Should base comments be rewritten to describe current source truth once import-contract work is approved? Deferred to `VDS-1220` and docs rewrite work.
- Should broad forced-colors behavior be narrowed or expanded? Deferred to later accessibility/theme work.
- Should SPA root defaults remain in base or move to layout/utilities? Deferred to later base/layout/global CSS policy work.
- Should code/pre defaults remain in base or move closer to typography/docs components? Deferred to typography/docs component cleanup.

## 12. Approval

- Requested on: `2026-05-24`
- Approved by: user
- Approved on: `2026-05-24`

## 13. Implementation Log

- `2026-05-24`: Created this plan file.
- `2026-05-24`: Added base-layer audit artifact.
- `2026-05-24`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1210`, mark `VDS-0400` in progress, and set next recommended item to `VDS-1220`.
- `2026-05-24`: Ran/read a read-only base-layer scan. Summary: `src/base.css` has `305` lines; `7` custom property definitions; `34` `var(...)` references; `44` non-at-rule selector blocks; `prefers-reduced-motion: reduce` and `forced-colors: active` at-rules; global focus, selection, media, form, button, list, link, table, code/pre, body/main/footer, and SPA root defaults; selector inventory finds `.app-root` as one candidate-public base-defined class-like selector; `doc-raw/vds-base.doc.html` has `1918` lines; docs mention `forced-colors` `0` times while source has a forced-colors block.

## 14. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed: generated artifacts are fresh with `80` CSS files checked.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-1210` forbids write/regeneration commands.
  - Read-only base-layer scan completed.
  - VDS-1210 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1210-base-layer-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-base-layer-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None planned; core import contract audit continues in `VDS-1220`.
