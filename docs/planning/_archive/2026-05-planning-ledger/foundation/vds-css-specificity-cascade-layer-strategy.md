# VDS CSS Specificity and Cascade Layer Strategy

Last updated: `2026-05-24`

Source item: `VDS-1290`

This file records the CSS specificity and cascade-layer strategy for the base, layout, utilities, and global CSS track. It is a planning artifact only: no CSS, imports, cascade layers, docs shell CSS/HTML, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Strategy Summary

- VDS preserves source-order-only cascade as the `1.0.0` baseline.
- `@layer` is not introduced in `VDS-1290`.
- Adding cascade layers later is a CSS architecture and package behavior change that requires approved source, docs, build, dist, package, consumer, and migration review.
- Existing selector specificity and `!important` usage remain compatibility-sensitive until later approved cleanup work.
- Component audits must classify local specificity and override behavior before any global cascade refactor is attempted.

## Current Source-Order Contract

Foundation bundle:

- `@24vlh/vds/src/core.css`
  - imports `primitives.css`
  - imports `base.css`
  - imports `layout.css`

Full component bundle:

- `@24vlh/vds/src/index.css`
  - imports `primitives.css`
  - imports `base.css`
  - imports `layout.css`
  - imports all `33` component CSS files
  - imports `components/utilities.css` last

Separate load surfaces:

- Themes are separate top-level CSS files and are not imported by `core.css` or `index.css`.
- `identity.css` is a separate top-level CSS surface.
- Standalone component dist files remain package-facing and must be treated as compatibility-sensitive.

Policy conclusion:

- Current VDS cascade is explicit source order, not cascade-layer order.
- Source order remains the strategy until a later approved architecture item changes it.

## Layer and Import Evidence

Read-only scan scope:

- Source CSS files scanned: `43`.
- Top-level docs-only CSS files scanned: `2`.
- Total scanned CSS files: `45`.

Results:

- `@layer` rules: `0`.
- `@import` statements: `39`.
- Files containing `@import`:
  - `@24vlh/vds/src/core.css`
  - `@24vlh/vds/src/index.css`

Audit conclusions:

- There is no current cascade-layer implementation.
- Import order is the current source-of-truth ordering mechanism.
- Any later `@layer` proposal must preserve or intentionally migrate current import-order behavior.

## Specificity Evidence

ID selector evidence:

- `4` ID selectors, all in `@24vlh/vds/src/base.css`.
- Current ID selectors:
  - `#root`
  - `#app`
  - `#__next`
  - `#__nuxt`

Modern selector evidence:

- `:where(...)` uses: `27`.
  - Files: `authoring.css`, `command.css`, and `guidance.css`.
- `:is(...)` uses: `15`.
  - Found across component CSS.
- `:has(...)` uses: `1`.
  - File: `@24vlh/vds/css/theme-switcher.css`.
  - This is docs-only CSS and remains routed to `VDS-1140`.

High class-chain specificity candidates:

| File | Approximate max specificity | Audit note |
| --- | --- | --- |
| `@24vlh/vds/src/components/inbox.css` | `0,8,0` | Highest class-chain candidate in the read-only scan. |
| `@24vlh/vds/src/components/navigation.css` | `0,6,0` | Navigation state chains need component audit classification. |
| `@24vlh/vds/src/components/forms.css` | `0,5,1` | Form state selectors need component audit classification. |
| `@24vlh/vds/src/components/feedback.css` | `0,5,1` | Feedback/toast state selectors overlap with `!important` usage. |
| `@24vlh/vds/src/components/buttons.css` | `0,5,0` | Button variant/state chains need component audit classification. |

Audit conclusions:

- ID selector usage is limited to framework/root defaults in `base.css`.
- Some component files contain high class-chain selectors that need local audit before cleanup.
- `:where(...)` is already used in targeted component contexts, but not as a global specificity strategy.
- No selector is rewritten or deprecated in this item.

## `!important` Evidence

Read-only scan results:

| File | `!important` count |
| --- | ---: |
| `@24vlh/vds/src/components/utilities.css` | `413` |
| `@24vlh/vds/src/components/feedback.css` | `32` |
| `@24vlh/vds/src/components/inbox.css` | `15` |
| `@24vlh/vds/src/identity.css` | `8` |
| `@24vlh/vds/src/components/typography.css` | `7` |
| `@24vlh/vds/src/base.css` | `4` |
| `@24vlh/vds/src/components/icons.css` | `3` |
| `@24vlh/vds/src/components/skeleton.css` | `3` |
| `@24vlh/vds/src/components/charts.css` | `2` |
| `@24vlh/vds/src/components/command.css` | `1` |
| `@24vlh/vds/src/components/doc-block.css` | `1` |
| `@24vlh/vds/src/components/guidance.css` | `1` |

Total `!important` declarations across source and top-level docs-only CSS: `490`.

Strategy interpretation:

- Utility `!important` usage is treated as intentional atomic utility behavior for now.
- Non-utility `!important` usage is an audit finding for source/component follow-up.
- No `!important` usage is removed, added, normalized, or deprecated in this item.

## Docs-Shell Cascade Exceptions

`@24vlh/vds/index.html` currently loads `43` stylesheet links.

The last eight stylesheet links are:

| Order | Stylesheet |
| ---: | --- |
| `36` | `src/components/toasts.css` |
| `37` | `src/components/tooltips-popovers.css` |
| `38` | `src/components/typography.css` |
| `39` | `src/components/utilities.css` |
| `40` | `src/identity.css` |
| `41` | `css/theme-switcher.css` |
| `42` | `src/components/doc-block.css` |
| `43` | `css/overrides.css` |

Docs-only CSS evidence:

- `css/theme-switcher.css` is docs tooling and contains the only scanned `:has(...)` use.
- `css/overrides.css` is the final docs-shell stylesheet.
- `css/overrides.css` has no `!important` declarations but can still override package-facing behavior through load order.

Audit conclusions:

- Docs shell order is not equivalent to package bundle order.
- Docs-only CSS can mask source/package behavior and must stay separated from runtime cascade policy.
- `VDS-1280` remains the decision source for global overrides and docs-only CSS cleanup.

## Raw Docs Evidence

Raw docs scanned: `37`.

Current coverage:

| Term | Total mentions | Files |
| --- | ---: | ---: |
| `cascade` | `0` | `0` |
| `specificity` | `0` | `0` |
| `!important` | `96` | `3` |
| `override` | `64` | `23` |
| `overrides` | `14` | `8` |

Top `!important` coverage:

- `@24vlh/vds/doc-raw/vds-utilities.doc.html`: `85`.
- `@24vlh/vds/doc-raw/vds-identity.doc.html`: `7`.
- `@24vlh/vds/doc-raw/vds-base.doc.html`: `4`.

Audit conclusions:

- Raw docs do not currently explain cascade or specificity as a formal VDS strategy.
- Utility docs are the main current place where `!important` behavior is explained.
- Future docs rewrite work must explain source order, utilities, docs-only CSS, and any later cascade-layer decision.

## Cascade Layer Decision Rules

Do not introduce `@layer` unless a later approved item:

- audits current source order and standalone component behavior;
- classifies utility `!important` behavior;
- verifies package-facing `dist` paths and consumer override expectations;
- defines docs-shell versus package cascade behavior;
- updates raw docs and migration notes;
- refreshes generated `dist` through an approved build/release item;
- validates consumer compatibility and visual/accessibility behavior.

If cascade layers are proposed later, required migration questions include:

- Which layers exist and in what order?
- Do themes and identity join layers or remain separate?
- How do standalone component CSS files behave when loaded alone?
- Do utilities remain last, important, layered, or some combination?
- How do consumer overrides target or avoid VDS layers?
- What is the fallback plan for any consumers depending on current source order?

## Current Risks

- `@layer` adoption could change override semantics even without selector changes.
- Utility `!important` behavior is broad and must be treated as compatibility-sensitive.
- Docs-only CSS can mask package-facing behavior in local docs review.
- High-specificity component selectors may require component-by-component cleanup rather than a global strategy.
- Raw docs do not currently document cascade or specificity clearly.
- Standalone component CSS files may not have the same effective cascade context as `vds.css`.

## Future Work Contract

- `VDS-2010` and later component audits must classify component specificity, state selectors, and override behavior before changing selectors.
- Utility pruning work must decide whether `!important` is permanent atomic behavior or a migration target.
- Docs rewrite work must document source order, themes, identity, utilities, docs-only CSS, and package load guidance.
- Package/release work must treat any cascade-layer introduction as a package-facing compatibility change.
- Quality automation may later add specificity budgets or cascade checks, but no tooling is introduced in `VDS-1290`.

## Reference Sources

- `@24vlh/vds/src/core.css`
- `@24vlh/vds/src/index.css`
- `@24vlh/vds/src/**/*.css`
- `@24vlh/vds/css/*.css`
- `@24vlh/vds/index.html`
- `@24vlh/vds/doc-raw/*.doc.html`
- `@24vlh/vds/docs/planning/foundation/vds-core-import-contract-audit.md`
- `@24vlh/vds/docs/planning/foundation/vds-global-overrides-docs-only-css-audit.md`
- `@24vlh/vds/docs/planning/architecture/vds-source-module-architecture-audit.md`
