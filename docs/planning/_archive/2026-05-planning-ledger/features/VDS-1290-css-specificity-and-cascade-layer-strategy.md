# VDS-1290 CSS Specificity and Cascade Layer Strategy

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-1290`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1290-css-specificity-and-cascade-layer-strategy.md`

## 1. Goal

Create the CSS specificity and cascade-layer strategy that closes the `VDS-0400 Base, Layout, Utilities, and Global CSS` track. This item records the current source-order cascade contract, selector specificity evidence, `!important` usage, docs-shell exceptions, and the decision for whether cascade layers belong in the VDS `1.0.0` baseline.

## 2. Scope

### In scope

- Record current source-order cascade behavior for `core.css`, `index.css`, themes, identity, standalone component files, and docs-shell CSS.
- Record `@layer`, `@import`, `:where(...)`, `:is(...)`, `:has(...)`, ID selector, and `!important` evidence.
- Record high-specificity selector candidates for later component audits.
- Record raw-doc cascade, specificity, override, and `!important` coverage.
- Decide and document the VDS `1.0.0` cascade baseline.
- Add a CSS specificity and cascade-layer strategy artifact for later component audits, utility pruning, docs-shell cleanup, cascade refactors, package guidance, migration notes, and release verification.
- Update the master feature map so `VDS-1290` and the `VDS-0400` track are done and the next recommended item is `VDS-2010`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, cascade layers, docs shell CSS/HTML, raw docs, README, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Introducing, prototyping, or partially staging `@layer`.
- Rewriting selectors, removing `!important`, pruning utilities, changing docs-only overrides, or changing import order.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/foundation/vds-base-layer-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-core-import-contract-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-layout-system-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-section-system-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-utilities-taxonomy-and-pruning-plan.md`
  - `@24vlh/vds/docs/planning/foundation/vds-utility-responsive-variants-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-utility-accessibility-helpers-audit.md`
  - `@24vlh/vds/docs/planning/foundation/vds-global-overrides-docs-only-css-audit.md`
  - `@24vlh/vds/docs/planning/architecture/vds-source-module-architecture-audit.md`
  - `@24vlh/vds/docs/planning/architecture/vds-demo-server-doc-loader-review.md`
- Repo files:
  - `@24vlh/vds/src/core.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/css/*.css`
  - `@24vlh/vds/index.html`
  - `@24vlh/vds/doc-raw/*.doc.html`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Strategy Decision

VDS preserves source-order-only cascade as the `1.0.0` baseline.

No `@layer` rules are introduced in `VDS-1290`.

Rationale:

- Current source contains `0` `@layer` rules.
- Current package and docs evidence relies on explicit import and stylesheet order.
- Adding cascade layers would be a package-facing behavior change because layer order can change override semantics even when selectors stay the same.
- Utilities intentionally rely on late load order and `!important` for atomic helper behavior.
- Docs-only CSS currently has explicit load-order exceptions that need cleanup before layering is evaluated.
- Component audits are the right next place to classify selector specificity and local override needs before a global cascade architecture change.

## 5. Current Cascade Contract

Source bundle order:

- `@24vlh/vds/src/core.css` imports:
  - `primitives.css`
  - `base.css`
  - `layout.css`
- `@24vlh/vds/src/index.css` imports:
  - `primitives.css`
  - `base.css`
  - `layout.css`
  - all `33` component CSS files
  - `components/utilities.css` last

Separate load surfaces:

- Theme files remain separate top-level package-facing CSS files.
- `identity.css` remains a separate top-level CSS surface.
- Standalone component dist files remain package-facing, but dependency assumptions are deferred to package/source policy work.

Docs-shell exceptions:

- `@24vlh/vds/index.html` loads `43` stylesheets.
- Docs-only `css/theme-switcher.css` loads near the end of the docs shell.
- `css/overrides.css` is the final stylesheet and can mask package-facing behavior.
- Top-level `css/*.css` files are docs-shell assets under the current package policy, not package-published runtime CSS.

## 6. Cascade and Specificity Evidence

Read-only scan scope:

- Source CSS files scanned: `43`.
- Top-level docs-only CSS files scanned: `2`.
- Total scanned CSS files: `45`.

Layer and import evidence:

- `@layer` rules: `0`.
- `@import` statements: `39`.
- `@import` usage is limited to `src/core.css` and `src/index.css`.

Selector and specificity evidence:

- ID selectors: `4`, all in `src/base.css`.
  - `#root`
  - `#app`
  - `#__next`
  - `#__nuxt`
- `:where(...)` uses: `27`, across `authoring.css`, `command.css`, and `guidance.css`.
- `:is(...)` uses: `15`, across component CSS.
- `:has(...)` uses: `1`, in docs-only `css/theme-switcher.css`.

High class-chain specificity candidates:

| File | Approximate max specificity | Notes |
| --- | --- | --- |
| `@24vlh/vds/src/components/inbox.css` | `0,8,0` | Highest class-chain candidate in the read-only scan. |
| `@24vlh/vds/src/components/navigation.css` | `0,6,0` | Navigation state chains need component audit classification. |
| `@24vlh/vds/src/components/forms.css` | `0,5,1` | Form state selectors need component audit classification. |
| `@24vlh/vds/src/components/feedback.css` | `0,5,1` | Feedback/toast state selectors overlap with `!important` usage. |
| `@24vlh/vds/src/components/buttons.css` | `0,5,0` | Button variant/state chains need component audit classification. |

These are audit findings only, not approved selector rewrites.

## 7. `!important` Evidence

Read-only scan evidence:

- Total `!important` declarations across source and top-level docs-only CSS: `490`.
- `src/components/utilities.css`: `413`.
- `src/components/feedback.css`: `32`.
- `src/components/inbox.css`: `15`.
- `src/identity.css`: `8`.
- `src/components/typography.css`: `7`.
- `src/base.css`: `4`.
- `src/components/icons.css`: `3`.
- `src/components/skeleton.css`: `3`.
- `src/components/charts.css`: `2`.
- Single-use files include `command.css`, `doc-block.css`, and `guidance.css`.
- `css/overrides.css`: `0`.

Strategy interpretation:

- Utility `!important` usage is intentional atomic utility behavior until a later approved utility pruning item changes the policy.
- Non-utility `!important` usage must be classified in component or source-surface audits before cleanup.
- No `!important` declaration is removed, added, or deprecated in this item.

## 8. Raw Docs Evidence

Raw docs scanned: `37`.

Current raw-doc coverage:

- Direct `cascade` mentions: `0`.
- Direct `specificity` mentions: `0`.
- `!important` mentions: `96` across `3` docs.
  - `vds-utilities`: `85`.
  - `vds-identity`: `7`.
  - `vds-base`: `4`.
- `override` mentions: `64` across `23` docs.
- `overrides` mentions: `14` across `8` docs.
- General `layer` mentions are present but do not document CSS cascade layers as a VDS strategy.

Audit conclusions:

- Raw docs discuss overrides and utility importance in scattered places.
- No formal cascade or specificity strategy is documented in raw docs.
- Future docs rewrite work must explain source order, docs-only CSS exceptions, utility behavior, and any later cascade-layer decision clearly.

## 9. Public Interfaces and Compatibility

- Existing selectors preserved:
  - All runtime and docs-shell selectors remain unchanged.
- New selectors:
  - None.
- Deprecated selectors:
  - None in this item.
- New cascade layers:
  - None.
- Breaking changes:
  - None in CSS, selectors, tokens, custom property names, imports, docs shell CSS/HTML, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, or package version fields.
- Migration notes:
  - None for package consumers in this item. Any future `@layer` adoption would require migration notes and package-consumer review.

## 10. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Focus selectors and component state chains remain compatibility-sensitive.
- Semantics or ARIA:
  - No runtime behavior changes.
- Reduced motion:
  - No runtime behavior changes.
- Forced colors or contrast:
  - No runtime behavior changes.
- Mobile/adaptive behavior:
  - No runtime behavior changes.
- Theme coverage:
  - No theme values change. Themes remain separate load surfaces.

## 11. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:dist`
  - `pnpm run audit:consumers`
- Cascade and specificity scan:
  - Record `@layer`, `@import`, `:where(...)`, `:is(...)`, `:has(...)`, ID selector, and `!important` counts.
  - Record source import order for `core.css` and `index.css`.
  - Record docs-shell stylesheet order and docs-only CSS exceptions.
  - Record raw-doc cascade, specificity, override, and `!important` coverage.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only. If it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Planning sanity checks:
  - Confirm master map, feature plan, and cascade strategy artifact agree that no CSS, imports, cascade layers, docs, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm `VDS-0400` is done.
  - Confirm the next recommended item is `VDS-2010`.

## 12. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting the cascade baseline before component audits begin.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later cascade-layer adoption, selector rewrites, or utility changes may require migration notes.

## 13. Risks

- Adding cascade layers later could change override semantics for existing package consumers.
- Utility `!important` declarations are a broad compatibility surface and need pruning policy before cleanup.
- Docs-only CSS can mask source/package behavior in the local docs shell.
- High-specificity component selector chains can make later component fixes harder if not classified during component audits.
- Raw docs do not currently document cascade or specificity strategy directly.
- Standalone component files may behave differently from full bundle source order if they rely on foundation or theme context.

## 14. Open Questions

- Should VDS ever introduce `@layer` for reset, foundation, components, utilities, and docs-shell CSS? Deferred to a later approved CSS architecture item.
- Should utility `!important` declarations remain permanent API behavior or be reduced after component audits? Deferred to utility pruning and migration work.
- Should selector specificity budgets be enforced by tooling? Deferred to quality automation and component audit waves.
- Should docs-only CSS have a separate lint/audit policy? Deferred to docs-shell and quality work.
- Should standalone component CSS declare dependency metadata? Deferred to package/source policy and component audits.

## 15. Approval

- Requested on: `2026-05-24`
- Approved by: user
- Approved on: `2026-05-24`

## 16. Implementation Log

- `2026-05-24`: Created this plan file.
- `2026-05-24`: Added CSS specificity and cascade-layer strategy artifact.
- `2026-05-24`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1290`, close the `VDS-0400` track, and set next recommended item to `VDS-2010`.
- `2026-05-24`: Ran/read a read-only cascade and specificity scan. Summary: `43` source CSS files and `2` docs-only CSS files were scanned; `0` `@layer` rules found; `39` `@import` statements found, limited to `src/core.css` and `src/index.css`; `4` ID selectors found in `src/base.css`; `27` `:where(...)` uses, `15` `:is(...)` uses, `1` docs-only `:has(...)` use, and `490` `!important` declarations recorded; raw docs have `0` direct `cascade` and `specificity` mentions.

## 17. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed: generated artifacts are fresh with `80` CSS files checked.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-1290` forbids write/regeneration commands.
  - Read-only cascade and specificity scan completed.
  - VDS-1290 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1290-css-specificity-and-cascade-layer-strategy.md`
  - `@24vlh/vds/docs/planning/foundation/vds-css-specificity-cascade-layer-strategy.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None planned; component modernization begins with `VDS-2010`.
