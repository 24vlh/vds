# VDS Master Feature Map

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

This file is the master backlog, audit ledger, and planning map for `@24vlh/vds`.

Current package version: `0.3.8`
Target modernization release: `1.0.0 stable line; exact bump deferred to VDS-5020`

## Working Rules

1. Pick one `VDS-` item.
2. Create its plan file under `@24vlh/vds/docs/planning/features/`.
3. Get explicit user approval.
4. Implement and validate only the approved scope.
5. Update this file and the feature plan.
6. Add discovered work back to this file before closing the item.

## Status Legend

- `done`
- `in-progress`
- `approved`
- `planning`
- `todo`
- `blocked`

## Baseline Audit Snapshot

Snapshot date: `2026-05-23`

Inputs reviewed:

- Maintained router: `@24vlh/agents/agents-repo/vds/AGENTS.md`
- VDS docs index router: `@24vlh/agents/docs_vds/AGENTS.md`
- CSS router: `@24vlh/agents/docs_md/css/AGENTS.md`
- pnpm/Node router: `@24vlh/agents/docs_md/pnpm-node/AGENTS.md`
- Planning precedent: `@24vlh/family-relay/docs/planning`
- Package metadata: `@24vlh/vds/package.json`
- Source truth: `@24vlh/vds/src/**/*.css`
- Raw docs truth: `@24vlh/vds/doc-raw/*.doc.html`

Repository shape observed:

- Source CSS files under `@24vlh/vds/src`: `43`
- Component CSS files under `@24vlh/vds/src/components`: `33`
- Theme CSS files under `@24vlh/vds/src/themes`: `4`
- Raw docs under `@24vlh/vds/doc-raw`: `37`
- Large files that need special audit attention:
  - `@24vlh/vds/src/components/utilities.css`: `3312` lines
  - `@24vlh/vds/doc-raw/vds-content-blocks.doc.html`: `3008` lines
  - `@24vlh/vds/doc-raw/vds-command.doc.html`: `2530` lines
  - `@24vlh/vds/doc-raw/vds-inbox.doc.html`: `2606` lines
  - `@24vlh/vds/doc-raw/vds-overlays.doc.html`: `2459` lines
  - `@24vlh/vds/doc-raw/vds-tables.doc.html`: `2057` lines
  - `@24vlh/vds/doc-raw/vds-icons.doc.html`: `1997` lines
  - `@24vlh/vds/doc-raw/vds-base.doc.html`: `1918` lines

Audit command run:

```sh
pnpm run audit
```

Audit result:

- `audit:css`: passed for `43` CSS files
- `audit:classes`: passed; all HTML classes exist in CSS
- `audit:tokens`: passed for `43` files
- `audit:docs`: passed for `37` files

Not yet audited:

- Visual regression
- Browser compatibility
- Accessibility behavior beyond static selectors
- Keyboard interaction behavior
- Responsive behavior across real viewports
- Theme contrast across all components
- Package export correctness
- Documentation clarity and task completeness
- Consumer migration impact
- Dist freshness, because full build commands are guarded against in this environment

## Release Scope Defaults

- Release stance: `major-ready`
  - Breaking cleanup is allowed later if the audit justifies it, but only after the affected API is classified, documented, migration-planned, and approved through a later release/version item.
- Target modernization release line: `1.0.0 stable`
  - Current package version remains `0.3.8` until a later approved version bump item. Exact package version and release mechanics are deferred to `VDS-5020`.
- Consumer scope for `VDS-0010`: `VDS-first`
  - `VDS-0010` uses repo truth only. Real consumer scanning is deferred to `VDS-0030`.
- Current audit status:
  - Existing mechanical audits are baseline evidence, not release readiness.
  - Release readiness also requires selector/API inventory, accessibility review, responsive review, theme review, documentation/migration work, package verification, and final release gates.

## Next Recommended Item

Next item: `VDS-3070 Theming documentation rewrite`.

Reason: Shared accessibility and state/ARIA guidance are now recorded. The next documentation rewrite item defines theming, contrast, forced-colors, and custom-theme guidance.

## Epic Ledger

| ID | Status | Epic | Notes |
| --- | --- | --- | --- |
| VDS-0000 | `planning` | Planning and history system | This file, the plan template, and the future implementation log workflow. |
| VDS-0100 | `done` | Audit baseline and release strategy | Define modernization target, semver stance, release gates, and validation depth. |
| VDS-0200 | `done` | Library structure and packaging | Source, dist, imports, package metadata, generated artifacts, and build/audit scripts. |
| VDS-0300 | `done` | Design tokens and themes | Token taxonomy, semantic colors, density, motion, typography, focus, z-index, four themes, theme switcher behavior, and identity/SVG palette policy. |
| VDS-0400 | `done` | Base, layout, utilities, and primitives | Core CSS substrate and high-risk utility surface. |
| VDS-0500 | `in-progress` | Component modernization wave | Component-by-component audit, API contract, docs rewrite, validation, and examples. |
| VDS-0600 | `in-progress` | Documentation rewrite | Rewrite docs from scratch around consumption, composition, accessibility, and examples. |
| VDS-0700 | `todo` | Quality automation | Audits, visual checks, accessibility checks, docs index validation, and release checks. |
| VDS-0800 | `todo` | Migration and version bounce | Migration guide, changelog, package version, dist refresh, and release readiness. |

## VDS-0000 Planning and History System

Status: `done`

- [x] VDS-0001 Create planning folder and master feature map
  Plan file: `@24vlh/vds/docs/planning/master-feature-map.md`
  Notes: first backlog snapshot created from repo inspection and existing audit scripts.
- [x] VDS-0002 Create reusable feature plan template
  Plan file: `@24vlh/vds/docs/planning/feature-plan-template.md`
- [x] VDS-0003 Create feature-plan folder index
  Plan file: `@24vlh/vds/docs/planning/features/README.md`
- [x] VDS-0004 Add first approved work item plan after user review
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0010-audit-baseline-and-release-scope.md`
  Notes: `VDS-0010` records the audit baseline and release scope defaults.
- [ ] VDS-0005 Add implementation-log discipline to every completed plan
  Plan file: pending
  Notes: each completed plan must record commands run, files changed, mismatches found, and follow-up items.

## VDS-0100 Audit Baseline and Release Strategy

Status: `planning`

- [x] VDS-0010 Audit baseline and release scope
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0010-audit-baseline-and-release-scope.md`
  Notes: define audit dimensions, target release type, compatibility principles, and the minimum evidence needed before version bump. Defaults are major-ready release stance and VDS-first consumer scope.
- [x] VDS-0020 Public API inventory and class contract
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0020-public-api-inventory-and-class-contract.md`
  Notes: generated selector inventory and class contract are in `@24vlh/vds/docs/planning/api`; `pnpm run audit` now checks selector inventory freshness.
- [x] VDS-0030 Consumer compatibility review
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0030-consumer-compatibility-review.md`
  Notes: generated source-only compatibility reports for `@24vlh/keep-exec` and `@24vlh/vlah.io`; consumer scans remain outside aggregate `pnpm run audit` because they depend on sibling repositories.
- [x] VDS-0040 Versioning policy and release gates
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0040-versioning-policy-and-release-gates.md`
  Notes: locked modernization target to the `1.0.0` stable release line; release policy and gates are recorded in `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`; actual version bump remains deferred to `VDS-5020`.
- [x] VDS-0050 Browser support and CSS feature support matrix
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0050-browser-support-and-css-feature-support-matrix.md`
  Notes: modern evergreen browser posture and CSS feature support matrix are recorded in `@24vlh/vds/docs/planning/release/vds-browser-css-support-matrix.md`; no runtime CSS, package, build, workflow, or `dist` changes.
- [x] VDS-0060 Accessibility baseline audit plan
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0060-accessibility-baseline-audit-plan.md`
  Notes: WCAG 2.2 AA accessibility baseline and WAI-ARIA APG widget reference are recorded in `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`; no runtime CSS, package, build, workflow, or `dist` changes.
- [x] VDS-0070 Responsive and container behavior audit plan
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0070-responsive-and-container-behavior-audit-plan.md`
  Notes: responsive/container behavior baseline and default validation matrix are recorded in `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`; no runtime CSS, package, build, workflow, or `dist` changes.
- [x] VDS-0080 Theme contrast and visual integrity audit plan
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0080-theme-contrast-and-visual-integrity-audit-plan.md`
  Notes: theme contrast/visual integrity baseline and eight-theme validation matrix are recorded in `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`; no runtime CSS, token, package, build, workflow, or `dist` changes.
- [x] VDS-0090 Documentation rewrite strategy
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0090-documentation-rewrite-strategy.md`
  Notes: documentation rewrite strategy and source-of-truth split are recorded in `@24vlh/vds/docs/planning/docs/vds-documentation-rewrite-strategy.md`; no README, raw docs, docs shell, generated index, package, build, workflow, or `dist` changes.

## VDS-0200 Library Structure, Packaging, and Tooling

Status: `done`

- [x] VDS-0210 Source module architecture audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0210-source-module-architecture-audit.md`
  Notes: source module architecture, entrypoint roles, import order, dist-facing assumptions, and architecture risks are recorded in `@24vlh/vds/docs/planning/architecture/vds-source-module-architecture-audit.md`; no source CSS, package metadata, build script, README, generated `dist`, or docs changes.
- [x] VDS-0220 Dist and source-of-truth policy
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0220-dist-and-source-of-truth-policy.md`
  Notes: source/dist policy is recorded in `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`; `src/` is canonical authoring truth, `dist/` is checked-in generated package output, manual `dist` edits are disallowed, and dist freshness tooling remains deferred to `VDS-0310`.
- [x] VDS-0230 Package metadata and exports review
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0230-package-metadata-and-exports-review.md`
  Notes: package metadata and package-facing surfaces are recorded in `@24vlh/vds/docs/planning/architecture/vds-package-metadata-and-exports-review.md`; `@24vlh/vds` remains the canonical package identity, current direct `dist` paths are compatibility-sensitive, and restrictive `exports` work is deferred to later approved package/release items.
- [x] VDS-0240 Build script modernization plan
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0240-build-script-modernization-plan.md`
  Notes: build-script behavior, output assumptions, source-map policy, stale build-adjacent helpers, and modernization direction are recorded in `@24vlh/vds/docs/planning/architecture/vds-build-script-modernization-plan.md`; no build script, package script, generated `dist`, workflow, or runtime CSS changes.
- [x] VDS-0250 Audit script modernization plan
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0250-audit-script-modernization-plan.md`
  Notes: audit script roles, aggregate audit behavior, generated report checks, coverage gaps, and modernization direction are recorded in `@24vlh/vds/docs/planning/architecture/vds-audit-script-modernization-plan.md`; no audit script, package script, generated report, generated output, or runtime CSS changes.
- [x] VDS-0260 Lint-staged and Husky policy review
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0260-lint-staged-and-husky-policy-review.md`
  Notes: lint-staged and Husky policy is recorded in `@24vlh/vds/docs/planning/architecture/vds-lint-staged-husky-policy-review.md`; `src/**/*.css` now runs targeted check-only audits instead of the guarded `pnpm run build`; `.husky/pre-commit` still runs `pnpm run lint-staged`.
- [x] VDS-0270 Docs indexing pipeline review
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0270-docs-indexing-pipeline-review.md`
  Notes: docs indexing pipeline policy is recorded in `@24vlh/vds/docs/planning/architecture/vds-docs-indexing-pipeline-review.md`; `@24vlh/agents/docs_vds` is generated metadata, current index freshness is hash-verified, and generated index refreshes remain explicit approved work.
- [x] VDS-0280 Demo server and doc loader review
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0280-demo-server-and-doc-loader-review.md`
  Notes: local docs runtime policy is recorded in `@24vlh/vds/docs/planning/architecture/vds-demo-server-doc-loader-review.md`; the docs site serves source CSS and raw docs through Express, `index.html`, and `js/doc-loader.js`; runtime fixes remain later approved work.
- [x] VDS-0290 Dependency and Node baseline review
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0290-dependency-and-node-baseline-review.md`
  Notes: dependency and Node baseline policy is recorded in `@24vlh/vds/docs/planning/architecture/vds-dependency-node-baseline-review.md`; VDS has no runtime dependencies, current tooling has an observed practical Node floor of `>=20.19.0`, local pnpm/Node and CI runtime drift are recorded, and package metadata, lockfile, dependency, workflow, and runtime changes remain later approved work.
- [x] VDS-0300 File naming and component alias policy
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0300-file-naming-and-component-alias-policy.md`
  Notes: file naming and component alias policy is recorded in `@24vlh/vds/docs/planning/architecture/vds-file-naming-component-alias-policy.md`; canonical component slugs are the `src/components/{slug}.css` filename stems, current package-facing component paths are direct `dist/components/{slug}.css` and `{slug}.min.css` paths, top-level docs are not component aliases, and `data-vds-*` normalization remains deferred to component audits and migration planning.
- [x] VDS-0310 Generated artifact freshness checker
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-0310-generated-artifact-freshness-checker.md`
  Notes: generated artifact freshness checker is recorded in `@24vlh/vds/docs/planning/architecture/vds-generated-artifact-freshness-checker.md`; `pnpm run audit:dist` now renders expected CSS into a temp directory and confirms checked-in `dist` freshness without refreshing generated output; aggregate audit, lint-staged, CI, and publish workflow remain unchanged.

## VDS-0300 Tokens, Themes, and Foundation

Status: `done`

- [x] VDS-1010 Primitives token taxonomy audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1010-primitives-token-taxonomy-audit.md`
  Source: `@24vlh/vds/src/primitives.css`
  Notes: primitive token taxonomy is recorded in `@24vlh/vds/docs/planning/tokens/vds-primitives-token-taxonomy-audit.md`; `src/primitives.css` defines `130` unique primitive tokens across typography, spacing/rhythm, radius/border/shadow, layout sizing, icons/avatars, motion/easing, z-index, and focus/accessibility; unused tokens are audit findings only and token changes remain later approved work.
- [x] VDS-1020 Semantic token naming cleanup plan
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1020-semantic-token-naming-cleanup-plan.md`
  Notes: semantic token naming cleanup policy is recorded in `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`; current token layers are classified as primitives, theme roles, semantic state tokens, state-soft aliases, theme-scoped component tokens, component-local aliases, and docs/demo token evidence; token renames, removals, aliases, docs cleanup, theme fixes, and component-local alias cleanup remain later approved work.
- [x] VDS-1030 Typography scale and rhythm audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1030-typography-scale-and-rhythm-audit.md`
  Source: `@24vlh/vds/src/components/typography.css`, `@24vlh/vds/src/base.css`
  Notes: typography scale and rhythm audit is recorded in `@24vlh/vds/docs/planning/tokens/vds-typography-scale-and-rhythm-audit.md`; primitive typography tokens, `base.css`, `typography.css`, text utilities, prose helpers, selector classifications, hard-coded typography declarations, and docs mismatch evidence are captured; CSS fixes, token renames, docs cleanup, utility restructuring, visual checks, and responsive/readability fixes remain later approved work.
- [x] VDS-1040 Spacing and layout rhythm audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1040-spacing-and-layout-rhythm-audit.md`
  Source: `@24vlh/vds/src/primitives.css`, `@24vlh/vds/src/layout.css`, `@24vlh/vds/src/components/sections.css`
  Notes: spacing and layout rhythm audit is recorded in `@24vlh/vds/docs/planning/tokens/vds-spacing-layout-rhythm-audit.md`; primitive spacing and layout tokens, `layout.css`, `sections.css`, `utilities.css`, selector classifications, declaration counts, unreferenced spacing tokens, and docs metadata gaps are captured; CSS fixes, token renames, docs cleanup, utility restructuring, visual checks, and responsive behavior fixes remain later approved work.
- [x] VDS-1050 Motion token and reduced-motion audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1050-motion-token-and-reduced-motion-audit.md`
  Source: `@24vlh/vds/src/primitives.css`, `@24vlh/vds/src/base.css`, `@24vlh/vds/src/components/*.css`
  Notes: motion token and reduced-motion audit is recorded in `@24vlh/vds/docs/planning/tokens/vds-motion-token-reduced-motion-audit.md`; primitive motion tokens, transition declarations, animation declarations, keyframes, reduced-motion blocks, file-local reduced-motion gaps, and raw-doc motion coverage are captured; CSS fixes, token renames, animation changes, docs cleanup, visual checks, and accessibility smoke tests remain later approved work.
- [x] VDS-1060 Focus ring and interaction state audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1060-focus-ring-and-interaction-state-audit.md`
  Source: `@24vlh/vds/src/primitives.css`, `@24vlh/vds/src/base.css`, `@24vlh/vds/src/themes/*.css`, `@24vlh/vds/src/components/*.css`
  Notes: focus ring and interaction-state audit is recorded in `@24vlh/vds/docs/planning/tokens/vds-focus-ring-interaction-state-audit.md`; primitive focus tokens, theme focus/hover/active tokens, base focus behavior, component state selectors, forced-colors coverage, state-like public classes, and raw-doc interaction-state coverage are captured; CSS fixes, token changes, forced-colors fixes, docs cleanup, APG behavior updates, contrast tooling, visual checks, and accessibility smoke tests remain later approved work.
- [x] VDS-1070 Z-index and overlay stack audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1070-z-index-and-overlay-stack-audit.md`
  Source: `@24vlh/vds/src/primitives.css`, `@24vlh/vds/src/layout.css`, `@24vlh/vds/src/components/*.css`
  Notes: z-index and overlay stack audit is recorded in `@24vlh/vds/docs/planning/tokens/vds-z-index-overlay-stack-audit.md`; primitive z-index tokens, z-index declaration counts, tokenized versus hard-coded stack values, positioned surfaces, stacking-context contributors, utility z-index classes, overlay/stack selector inventory evidence, and raw-doc stack guidance are captured; CSS fixes, token changes, utility changes, overlay behavior changes, docs cleanup, visual checks, accessibility smoke tests, and portal/mount-order policy remain later approved work.
- [x] VDS-1080 Radius, border, and shadow token audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1080-radius-border-and-shadow-token-audit.md`
  Source: `@24vlh/vds/src/primitives.css`, `@24vlh/vds/src/themes/*.css`, `@24vlh/vds/src/components/*.css`
  Notes: radius, border, and shadow token audit is recorded in `@24vlh/vds/docs/planning/tokens/vds-radius-border-shadow-token-audit.md`; primitive radius/border/shadow tokens, declaration counts, tokenized versus hard-coded surface values, component-local aliases, theme border/shadow/surface roles, surface/depth selector inventory evidence, docs coverage, and shadow utility naming mismatch are captured; CSS fixes, token changes, utility changes, theme fixes, docs cleanup, visual checks, and contrast/accessibility automation remain later approved work.
- [x] VDS-1090 Theme architecture audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1090-theme-architecture-audit.md`
  Source: `@24vlh/vds/src/themes`
  Notes: theme architecture audit is recorded in `@24vlh/vds/docs/planning/tokens/vds-theme-architecture-audit.md`; theme root matrix, token-name parity, token groups, component-prefixed theme-token surface, referenced and unreferenced theme token evidence, import/build-surface evidence, and architecture boundaries are captured; CSS fixes, token changes, theme value changes, aliases, contrast fixes, docs cleanup, and visual/contrast automation remain later approved work.
- [x] VDS-1100 Graphite theme audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1100-graphite-theme-audit.md`
  Source: `@24vlh/vds/src/themes/graphite.css`
  Notes: Graphite theme audit is recorded in `@24vlh/vds/docs/planning/tokens/vds-graphite-theme-audit.md`; `graphite-light` and `graphite-dark` root evidence, token group counts, brand/focus/shadow evidence, sampled contrast pass/review/release-risk findings, alpha/composite checks, semantic-state risks, and component-family routing are captured; CSS fixes, token changes, theme value changes, aliases, docs cleanup, visual checks, and contrast automation remain later approved work.
- [x] VDS-1110 Carbon theme audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1110-carbon-theme-audit.md`
  Source: `@24vlh/vds/src/themes/carbon.css`
  Notes: Carbon theme audit is recorded in `@24vlh/vds/docs/planning/tokens/vds-carbon-theme-audit.md`; `carbon-light` and `carbon-dark` root evidence, token group counts, brand/focus/shadow/overlay evidence, sampled contrast pass/review/release-risk findings, alpha/composite checks, dark-surface handling, semantic-state risks, and data/code surface routing are captured; CSS fixes, token changes, theme value changes, aliases, docs cleanup, visual checks, and contrast automation remain later approved work.
- [x] VDS-1120 Navy theme audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1120-navy-theme-audit.md`
  Source: `@24vlh/vds/src/themes/navy.css`
  Notes: Navy theme audit is recorded in `@24vlh/vds/docs/planning/tokens/vds-navy-theme-audit.md`; `navy-light` and `navy-dark` root evidence, token group counts, brand/focus/shadow/overlay evidence, sampled contrast pass/review/release-risk findings, alpha/composite checks, accent hierarchy, semantic-state risks, chart/data surface routing, and visual monotony risks are captured; CSS fixes, token changes, theme value changes, aliases, docs cleanup, visual checks, and contrast automation remain later approved work.
- [x] VDS-1130 Slate theme audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1130-slate-theme-audit.md`
  Source: `@24vlh/vds/src/themes/slate.css`
  Notes: Slate theme audit is recorded in `@24vlh/vds/docs/planning/tokens/vds-slate-theme-audit.md`; `slate-light` and `slate-dark` root evidence, token group counts, brand/focus/shadow/overlay evidence, sampled contrast pass/review/release-risk findings, alpha/composite checks, muted text risks, warm neutral control/data-density risks, chart/data surface routing, and visual integrity risks are captured; CSS fixes, token changes, theme value changes, aliases, docs cleanup, visual checks, and contrast automation remain later approved work.
- [x] VDS-1140 Theme switcher and docs theme behavior
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1140-theme-switcher-and-docs-theme-behavior.md`
  Source: `@24vlh/vds/css/theme-switcher.css`, `@24vlh/vds/js/theme-switcher.js`
  Notes: theme switcher and docs theme behavior audit is recorded in `@24vlh/vds/docs/planning/tokens/vds-theme-switcher-docs-theme-behavior.md`; docs shell all-theme loading, eight-root radio coverage, default theme/fixed favicon evidence, theme switcher JS/CSS behavior, raw-doc theme coverage gaps, accessibility/resilience risks, and future work routing are captured; docs shell/JS/CSS/raw-doc/generated index fixes remain later approved work.
- [x] VDS-1150 Identity token and SVG palette audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1150-identity-token-and-svg-palette-audit.md`
  Source: `@24vlh/vds/src/identity.css`, `@24vlh/vds/svg`, `@24vlh/vds/static/SVG Palette - *.txt`
  Notes: identity token and SVG palette audit is recorded in `@24vlh/vds/docs/planning/tokens/vds-identity-token-svg-palette-audit.md`; inline SVG identity CSS, logo tokens, theme `--color-logo-*` coverage, static SVG matrix completeness, palette files, docs/package mismatches, Graphite/Slate palette review findings, and future package/SVG/docs routing are captured; CSS, SVG, palette, package, docs, generated output, and selector inventory changes remain later approved work.

## VDS-0400 Base, Layout, Utilities, and Global CSS

Status: `done`

- [x] VDS-1210 Base layer audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1210-base-layer-audit.md`
  Source: `@24vlh/vds/src/base.css`
  Notes: base layer audit is recorded in `@24vlh/vds/docs/planning/foundation/vds-base-layer-audit.md`; reset strategy, document defaults, focus and selection behavior, reduced-motion and forced-colors baseline, media/form/button/list/link/table/code defaults, SPA root selectors, docs coverage gaps, and future cleanup routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-1220 Core import contract audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1220-core-import-contract-audit.md`
  Source: `@24vlh/vds/src/core.css`, `@24vlh/vds/src/index.css`
  Notes: core import contract audit is recorded in `@24vlh/vds/docs/planning/foundation/vds-core-import-contract-audit.md`; `core.css` is the foundation bundle, `index.css` is the full component bundle, themes and identity remain separate top-level surfaces, package-facing dist paths and standalone component dependency risks are captured, and docs/README import mismatches are documented; CSS imports, docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-1230 Layout system audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1230-layout-system-audit.md`
  Source: `@24vlh/vds/src/layout.css`, `@24vlh/vds/doc-raw/vds-layout.doc.html`
  Notes: layout system audit is recorded in `@24vlh/vds/docs/planning/foundation/vds-layout-system-audit.md`; page frame, content regions, containers, full/bleed helpers, section spacing helpers, structural grids, sidebar/split layouts, responsive collapse behavior, selector classifications, docs coverage gaps, safe-area/overflow gaps, and future cleanup routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-1240 Section system audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1240-section-system-audit.md`
  Source: `@24vlh/vds/src/components/sections.css`, `@24vlh/vds/doc-raw/vds-sections.doc.html`
  Notes: section system audit is recorded in `@24vlh/vds/docs/planning/foundation/vds-section-system-audit.md`; section bands, inner rhythm, density variants, section headers, surfaces, split/reverse layouts, grids, stacks, lists, responsive behavior, selector classifications, docs coverage gaps, safe-area/overflow gaps, and `.section` ownership overlap with `layout.css` are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-1250 Utilities taxonomy and pruning plan
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1250-utilities-taxonomy-and-pruning-plan.md`
  Source: `@24vlh/vds/src/components/utilities.css`
  Notes: utilities taxonomy and pruning plan is recorded in `@24vlh/vds/docs/planning/foundation/vds-utilities-taxonomy-and-pruning-plan.md`; utility families, selector classifications, `!important` policy risk, responsive selector metadata gaps, layout/section overlap, z-index and accessibility-helper routing, docs coverage gaps, and generated docs metadata gaps are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-1260 Utility responsive variants audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1260-utility-responsive-variants-audit.md`
  Source: `@24vlh/vds/src/components/utilities.css`, `@24vlh/vds/doc-raw/vds-utilities.doc.html`
  Notes: utility responsive variants audit is recorded in `@24vlh/vds/docs/planning/foundation/vds-utility-responsive-variants-audit.md`; show/hide helper ranges, responsive grid/flex prefixed classes, layout-grid collapse behavior, selector inventory representation gaps, raw-doc mobile-first mismatch, safe-area documentation gap, and future responsive cleanup routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-1270 Utility accessibility helpers audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1270-utility-accessibility-helpers-audit.md`
  Source: `@24vlh/vds/src/components/utilities.css`, `@24vlh/vds/doc-raw/vds-utilities.doc.html`
  Notes: utility accessibility helpers audit is recorded in `@24vlh/vds/docs/planning/foundation/vds-utility-accessibility-helpers-audit.md`; `.hidden`, `.sr-only`, `.sr-only-focusable`, `.safe-area`, overflow/scroll helpers, cursor and pointer-events helpers, truncation/readability helpers, selector classifications, reduced-motion/forced-colors gaps, raw-doc accessibility guidance, and generated docs metadata gaps are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-1280 Global overrides and docs-only CSS audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1280-global-overrides-and-docs-only-css-audit.md`
  Source: `@24vlh/vds/css/overrides.css`
  Notes: global overrides and docs-only CSS audit is recorded in `@24vlh/vds/docs/planning/foundation/vds-global-overrides-docs-only-css-audit.md`; top-level docs CSS boundaries, `css/overrides.css` Graphite footer link overrides, docs shell stylesheet order, package publication boundary, source footer/theme-token ownership, adjacent theme-switcher CSS routing, and future cascade cleanup rules are captured; CSS, docs shell, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-1290 CSS specificity and cascade layer strategy
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-1290-css-specificity-and-cascade-layer-strategy.md`
  Notes: CSS specificity and cascade-layer strategy is recorded in `@24vlh/vds/docs/planning/foundation/vds-css-specificity-cascade-layer-strategy.md`; source-order-only cascade is preserved as the `1.0.0` baseline, `@layer` adoption is deferred as a later package-facing architecture change, import order, specificity evidence, `!important` usage, docs-shell exceptions, raw-doc coverage gaps, and component-audit routing are captured; CSS, imports, cascade layers, docs shell, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.

## VDS-0500 Component Modernization Wave

Status: `in-progress`

Each component item must audit source CSS, raw docs, public classes, accessibility states, responsive behavior, theme behavior, examples, and migration notes.

- [x] VDS-2010 Accordion component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2010-accordion-component-audit.md`
  Source: `@24vlh/vds/src/components/accordion.css`
  Docs: `@24vlh/vds/doc-raw/vds-accordion.doc.html`
  Focus: disclosure states, keyboard affordances, icons, density, nested content, border/radius rules.
  Notes: accordion component audit is recorded in `@24vlh/vds/docs/planning/components/vds-accordion-component-audit.md`; native `<details>/<summary>` behavior, public selector surface, `--accordion-*` local variables, open/focus/hover/active/forced-colors behavior, docs/index metadata, APG alignment, package-facing dist presence, and future reduced-motion/docs/accessibility routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2020 Action bar component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2020-action-bar-component-audit.md`
  Source: `@24vlh/vds/src/components/action-bar.css`
  Docs: `@24vlh/vds/doc-raw/vds-action-bar.doc.html`
  Focus: command grouping, overflow, destructive actions, sticky variants, compact/mobile behavior.
  Notes: action bar component audit is recorded in `@24vlh/vds/docs/planning/components/vds-action-bar-component-audit.md`; CSS-only bulk-action grouping behavior, public selector surface, `--action-bar-*` local variables, sticky/floating/stacked/compact responsive behavior, docs/index metadata gaps, APG toolbar alignment, package-facing dist presence, and future focus/overflow/responsive/accessibility routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2030 Android shell component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2030-android-shell-component-audit.md`
  Source: `@24vlh/vds/src/components/android-shell.css`
  Docs: `@24vlh/vds/doc-raw/vds-android-shell.doc.html`
  Focus: device frames, app bars, navigation, panes, status areas, container queries, product-demo usefulness.
  Notes: Android shell component audit is recorded in `@24vlh/vds/docs/planning/components/vds-android-shell-component-audit.md`; CSS-only Android-style app shell behavior, safe-area handling, public/candidate-public selector surface, `--android-shell-*` local variables, topbar/body/surfaces/dashboard/filters/banners/notices/timeline/lists/bottom-nav/FAB/adaptive-pane behavior, generated docs metadata gaps, Android mobile design alignment, package-facing dist presence, and future responsive/mobile/accessibility/component-split routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2040 Authoring layer audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2040-authoring-layer-audit.md`
  Source: `@24vlh/vds/src/components/authoring.css`
  Docs: `@24vlh/vds/doc-raw/vds-authoring.doc.html`
  Focus: prose blocks, heading anchors, callouts, inline markers, code, generated content, long-form docs.
  Notes: authoring layer audit is recorded in `@24vlh/vds/docs/planning/components/vds-authoring-layer-audit.md`; CSS-only documentation/prose composition behavior, public/candidate-public selector surface, local authoring variables, admonition/Markdown callout/heading anchor/footnote/inline marker/prose helper/doc-block integration behavior, docs/index metadata, package-facing dist presence, and future accessibility/theme/docs-index routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2050 Avatar component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2050-avatar-component-audit.md`
  Source: `@24vlh/vds/src/components/avatar.css`
  Docs: `@24vlh/vds/doc-raw/vds-avatar.doc.html`
  Focus: sizes, initials, images, status badges, groups, overflow, contrast and accessible naming.
  Notes: avatar component audit is recorded in `@24vlh/vds/docs/planning/components/vds-avatar-component-audit.md`; CSS-only identity/media primitive behavior, public/candidate-public selector surface, `--avatar-*` local variables, size/shape/ring/border/color/status/group/overflow behavior, docs/index metadata, package-facing dist presence, and future accessibility/theme/image-fallback routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2060 Badge and tag component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2060-badge-tag-component-audit.md`
  Source: `@24vlh/vds/src/components/badge-tag.css`
  Docs: `@24vlh/vds/doc-raw/vds-badge-tag.doc.html`
  Focus: semantic colors, removable tags, pressed/disabled state, compact density, wrapping.
  Notes: badge and tag component audit is recorded in `@24vlh/vds/docs/planning/components/vds-badge-tag-component-audit.md`; CSS-only compact label/status/count/tag behavior, public/candidate-public selector surface, `--badge-tag-*` local variables, semantic/mode/size/shape/count/icon/dot/remove/tag/disabled/focus behavior, docs/index metadata, package-facing dist presence, and future accessibility/theme/pressed-disabled routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2070 Buttons component audit
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2070-buttons-component-audit.md`
  Source: `@24vlh/vds/src/components/buttons.css`
  Docs: `@24vlh/vds/doc-raw/vds-buttons.doc.html`
  Focus: button variants, anchors-as-buttons, icon buttons, loading, pressed, disabled, focus, reduced motion.
- [x] VDS-2080 Charts component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2080-charts-component-audit.md`
  Source: `@24vlh/vds/src/components/charts.css`
  Docs: `@24vlh/vds/doc-raw/vds-charts.doc.html`
  Focus: data visualization primitives, series tokens, legends, axes, empty states, contrast, responsive sizing.
  Notes: charts component audit is recorded in `@24vlh/vds/docs/planning/components/vds-charts-component-audit.md`; CSS-only chart shell behavior, public/candidate-public selector surface, `--chart-*` local variables, SVG/canvas wrappers, legends, axes, gridlines, series/area/bar hooks, empty/error/loading states, responsive behavior, docs/index metadata, package-facing dist presence, and future accessibility/theme/data-visualization routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2090 Command surface audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2090-command-surface-audit.md`
  Source: `@24vlh/vds/src/components/command.css`
  Docs: `@24vlh/vds/doc-raw/vds-command.doc.html`
  Focus: modal overlay, search input, item states, groups, keyboard semantics, mobile behavior, z-index.
  Notes: command surface audit is recorded in `@24vlh/vds/docs/planning/components/vds-command-surface-audit.md`; CSS-only command palette and command-page behavior, public/candidate-public selector surface, `--command-*` local variables, modal overlay/panel/search/list/item state surfaces, empty/footer helpers, command page/action/card/queue/progress helpers, responsive behavior, z-index, docs/index metadata, package-facing dist presence, and future accessibility/APG/theme/overlay routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2100 Content blocks audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2100-content-blocks-audit.md`
  Source: `@24vlh/vds/src/components/content-blocks.css`
  Docs: `@24vlh/vds/doc-raw/vds-content-blocks.doc.html`
  Focus: cards, media, lists, feature blocks, chips, facts, interactive variants, spacing duplication.
  Notes: content blocks audit is recorded in `@24vlh/vds/docs/planning/components/vds-content-blocks-audit.md`; CSS-only composition behavior, public/candidate-public selector surface, `--content-block-*` local variables, card/media/list/callout/empty/stat/tag/chip/badge/avatar/feature/process/highlight/fact/content-block surfaces, interactive/selected/disabled/responsive behavior, docs/index metadata, package-facing dist presence, and future accessibility/theme/spacing-layout routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2110 Description list audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2110-description-list-audit.md`
  Source: `@24vlh/vds/src/components/description-list.css`
  Docs: `@24vlh/vds/doc-raw/vds-description-list.doc.html`
  Focus: key/value layout, responsive stacking, dense data, semantic `dl` usage.
  Notes: description list audit is recorded in `@24vlh/vds/docs/planning/components/vds-description-list-audit.md`; CSS-only key/value list behavior, semantic `dl/dt/dd` guidance, public/candidate-public selector surface, local `--dl-*` variables, inline/stacked/columns layouts, bordered/striped surfaces, compact/spacious density, responsive stacking, docs/index metadata gap, package-facing dist presence, and future accessibility/theme/docs-index routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2120 Documentation block audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2120-documentation-block-audit.md`
  Source: `@24vlh/vds/src/components/doc-block.css`
  Docs: `@24vlh/vds/doc-raw/vds-doc-block.doc.html`
  Focus: code examples, copy affordances, preview/code split, docs-only boundaries, mobile behavior.
  Notes: documentation block audit is recorded in `@24vlh/vds/docs/planning/components/vds-documentation-block-audit.md`; CSS-only documentation engine behavior, public/candidate-public selector surface, local doc-block variables, shells, previews, code frames, toolbars/actions, copy/collapsed/expanded hooks, numbered code, syntax token hooks, diff/change-log blocks, helper layouts, semantic presets, responsive and reduced-motion behavior, docs/index metadata, package-facing dist presence, and future accessibility/theme/docs-runtime routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2130 Feedback system audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2130-feedback-system-audit.md`
  Source: `@24vlh/vds/src/components/feedback.css`
  Docs: `@24vlh/vds/doc-raw/vds-feedback.doc.html`
  Focus: alerts, banners, inline validation, empty/error states, status semantics, dismissible controls.
  Notes: feedback system audit is recorded in `@24vlh/vds/docs/planning/components/vds-feedback-system-audit.md`; CSS-only feedback behavior, public/candidate-public selector surface, local feedback variables, semantic `data-variant` mapping, alert/banner/toast/form-feedback/status/progress/guidance/info/result surfaces, dismissible controls, sticky/stacked positioning, animation behavior, docs/index metadata, package-facing dist presence, and future accessibility/theme/motion/docs-runtime routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2140 Flows component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2140-flows-component-audit.md`
  Source: `@24vlh/vds/src/components/flows.css`
  Docs: `@24vlh/vds/doc-raw/vds-flows.doc.html`
  Focus: steps, journeys, process flows, branches, progress states, current state semantics, mobile collapse.
  Notes: flows component audit is recorded in `@24vlh/vds/docs/planning/components/vds-flows-component-audit.md`; CSS-only flow behavior, public/candidate-public selector surface, local flow variables, steps, timelines, journeys, process flows, branches, state/form flows, progress bars, current/disabled semantics, responsive collapse, reduced-motion evidence, docs/index metadata, package-facing dist presence, and future accessibility/theme/motion/progress/docs-runtime routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2150 Forms component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2150-forms-component-audit.md`
  Source: `@24vlh/vds/src/components/forms.css`
  Docs: `@24vlh/vds/doc-raw/vds-forms.doc.html`
  Focus: fields, labels, help/error text, validation states, field groups, file surfaces, required/disabled/readonly.
  Notes: forms component audit is recorded in `@24vlh/vds/docs/planning/components/vds-forms-component-audit.md`; CSS-only UFAL forms behavior, public/candidate-public selector surface, local forms variables, controls, wrappers, labels, help/error text, validation states, field groups, file surfaces, native checkbox/radio choices, required/disabled/readonly/loading states, responsive grid behavior, docs/index metadata, package-facing dist presence, and future accessibility/theme/motion/validation/docs-runtime routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2160 Advanced forms component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2160-advanced-forms-component-audit.md`
  Source: `@24vlh/vds/src/components/forms-advanced.css`
  Docs: `@24vlh/vds/doc-raw/vds-forms-advanced.doc.html`
  Focus: multiselect, tag input, choice buttons/cards/chips, segmented controls, toggles, steppers.
  Notes: advanced forms component audit is recorded in `@24vlh/vds/docs/planning/components/vds-advanced-forms-component-audit.md`; CSS-only advanced form controls behavior, public/candidate-public selector surface, local advanced forms variables, multiselects, tag inputs, choice buttons/cards/chips, selected chip fields, segmented controls, toggles, steppers, native date/time normalization, calendar scaffolding, density variants, docs/index metadata, package-facing dist presence, and future accessibility/theme/motion/JavaScript-boundary/date-calendar routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2170 Guidance blocks audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2170-guidance-blocks-audit.md`
  Source: `@24vlh/vds/src/components/guidance.css`
  Docs: `@24vlh/vds/doc-raw/vds-guidance.doc.html`
  Focus: tips, do/don't, decision aids, warnings, severity hierarchy, content density.
  Notes: guidance blocks audit is recorded in `@24vlh/vds/docs/planning/components/vds-guidance-blocks-audit.md`; CSS-only guidance behavior, public/candidate-public selector surface, local guidance variables, panels, form guidance, decision briefs, comparison blocks, strips, education cards, steps, scopes, rows, stats, checklists, semantic variants, density behavior, docs/index metadata, package-facing dist presence, and future accessibility/theme/contrast/forced-colors routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2180 Header and footer audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2180-header-footer-audit.md`
  Source: `@24vlh/vds/src/components/header-footer.css`
  Docs: `@24vlh/vds/doc-raw/vds-header-footer.doc.html`
  Focus: nav semantics, skip links, responsive nav toggle, active states, footer columns and meta.
  Notes: header/footer audit is recorded in `@24vlh/vds/docs/planning/components/vds-header-footer-audit.md`; CSS-only site chrome behavior, public/candidate-public selector surface, local header/footer variables, headers, primary navigation, mobile nav state hooks, skip links, sticky/elevated variants, app-shell/sticky-footer helpers, footer columns/meta/actions, responsive behavior, docs/index metadata, package-facing dist presence, and future accessibility/theme/responsive/docs-only override routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2190 Hero component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2190-hero-component-audit.md`
  Source: `@24vlh/vds/src/components/hero.css`
  Docs: `@24vlh/vds/doc-raw/vds-hero.doc.html`
  Focus: product-first composition, media behavior, height rules, CTA layout, responsive text fit.
  Notes: hero component audit is recorded in `@24vlh/vds/docs/planning/components/vds-hero-component-audit.md`; CSS-only hero behavior, public/candidate-public selector surface, declared local hero variables and fallback aliases, page-intro composition, density/layout variants, media handling, full/inset surfaces, CTA/action groups, metrics, points, loading skeletons, error states, responsive collapse, docs/index metadata, package-facing dist presence, and future accessibility/theme/motion/responsive routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2200 Icons system audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2200-icons-system-audit.md`
  Source: `@24vlh/vds/src/components/icons.css`
  Docs: `@24vlh/vds/doc-raw/vds-icons.doc.html`
  Focus: sizing, status variants, animation, accessible labels, icon-only buttons, dependency docs.
  Notes: icons system audit is recorded in `@24vlh/vds/docs/planning/components/vds-icons-system-audit.md`; CSS-only icon behavior, public/candidate-public selector surface, inline SVG base styling, mask glyph data URI classes, size scale, semantic/status icons, loader animations, reduced-motion handling, icon containers, color utilities, icon badges, density layers, cross-component integration hooks, transforms, stroke/opacity helpers, docs/index metadata gap, package-facing dist presence, and future accessibility/theme/motion/forced-colors routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2210 Identity component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2210-identity-component-audit.md`
  Source: `@24vlh/vds/src/identity.css`
  Docs: `@24vlh/vds/doc-raw/vds-identity.doc.html`
  Focus: logos, brand marks, inverse/mono variants, clearspace, SVG styling, package identity.
  Notes: identity component audit is recorded in `@24vlh/vds/docs/planning/components/vds-identity-component-audit.md`; CSS-only identity behavior, public/candidate-public selector surface, local identity variables, inline SVG logo styling, logo anatomy, mark/wordmark variants, size/layout/clearspace utilities, color modes, theme token dependencies, static logo asset guidance, docs/index metadata gap, package-facing top-level dist presence, and future accessibility/theme/package/static-asset routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2220 Inbox component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2220-inbox-component-audit.md`
  Source: `@24vlh/vds/src/components/inbox.css`
  Docs: `@24vlh/vds/doc-raw/vds-inbox.doc.html`
  Focus: dense rows, search, filters, tabs, selection, actions, virtualization-readiness, empty states.
  Notes: inbox component audit is recorded in `@24vlh/vds/docs/planning/components/vds-inbox-component-audit.md`; CSS-only inbox behavior, public/candidate-public selector surface, local inbox variables, dense row lists, top navigation, search open state, tabs, filters, row densities, flat/card rendering, badges, status icons, actions, expandable details, component-local responsive helpers, docs/index metadata gap, package-facing dist presence, and future accessibility/theme/motion/responsive/z-index/virtualization routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2230 Navigation component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2230-navigation-component-audit.md`
  Source: `@24vlh/vds/src/components/navigation.css`
  Docs: `@24vlh/vds/doc-raw/vds-navigation.doc.html`
  Focus: primary nav, sidebars, breadcrumbs, pagination, tabs, announcements, active/current semantics.
  Notes: navigation component audit is recorded in `@24vlh/vds/docs/planning/components/vds-navigation-component-audit.md`; CSS-only navigation behavior, public/candidate-public selector surface, local pagination variables, primary nav, mobile panel/backdrop hooks, sidebars, breadcrumbs, pagination, tabs, toolbar, footer navigation, announcement bars, brand/action slots, responsive toggle behavior, docs/index metadata, package-facing dist presence, and future accessibility/theme/motion/responsive/z-index/mobile-panel routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2240 Overlays component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2240-overlays-component-audit.md`
  Source: `@24vlh/vds/src/components/overlays.css`
  Docs: `@24vlh/vds/doc-raw/vds-overlays.doc.html`
  Focus: modals, drawers, sheets, scrims, scroll lock expectations, focus trap docs, stacking.
  Notes: overlays component audit is recorded in `@24vlh/vds/docs/planning/components/vds-overlays-component-audit.md`; CSS-only overlay behavior, public/candidate-public selector surface, local modal/drawer variables, backdrops, centered modals, mobile fullscreen/sheet variants, drawers, inline overlays, loading overlays, semantic modal states, body scroll-lock hooks, stacking levels, docs/index metadata gap, package-facing dist presence, and future accessibility/theme/motion/responsive/z-index/focus-scroll-lock routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2250 Progress component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2250-progress-component-audit.md`
  Source: `@24vlh/vds/src/components/progress.css`
  Docs: `@24vlh/vds/doc-raw/vds-progress.doc.html`
  Focus: progress bars, steps, spinners, determinate/indeterminate semantics, reduced motion.
  Notes: progress component audit is recorded in `@24vlh/vds/docs/planning/components/vds-progress-component-audit.md`; CSS-only progress behavior, public/candidate-public selector surface, local progress and stepper variables, determinate and indeterminate progress bars, labels/meta/value text, density/size/style variants, semantic fill variants, striped/animated behavior, stepper indicators, active/complete/disabled step states, responsive stepper collapse, docs/index metadata gap, package-facing dist presence, and future accessibility/theme/motion/forced-colors/ARIA routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2260 Skeleton component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2260-skeleton-component-audit.md`
  Source: `@24vlh/vds/src/components/skeleton.css`
  Docs: `@24vlh/vds/doc-raw/vds-skeleton.doc.html`
  Focus: loading placeholders, shimmer, motion reduction, layout stability, theme contrast.
  Notes: skeleton component audit is recorded in `@24vlh/vds/docs/planning/components/vds-skeleton-component-audit.md`; CSS-only skeleton behavior, public/candidate-public selector surface, local skeleton variables, shimmer primitives, lines, avatars, blocks, cards, table rows, list items, composition helpers, static/reduced-motion behavior, layout-stability guidance, docs/index metadata, package-facing dist presence, and future accessibility/theme/motion/forced-colors/loading-state routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2270 State component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2270-state-component-audit.md`
  Source: `@24vlh/vds/src/components/state.css`
  Docs: `@24vlh/vds/doc-raw/vds-state.doc.html`
  Focus: empty, loading, error, success, blocked, permission, recovery states.
  Notes: state component audit is recorded in `@24vlh/vds/docs/planning/components/vds-state-component-audit.md`; CSS-only state behavior, public/candidate-public selector surface, local state variables, current empty/zero-state source truth, icon/media/title/text/action/meta slots, inline/split/compact/plain/soft/center variants, responsive inline/split collapse, backlog/source mismatch for loading/error/success/blocked/permission/recovery taxonomy, docs/index metadata gap, package-facing dist presence, and future accessibility/theme/forced-colors/state-taxonomy routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2280 Tables component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2280-tables-component-audit.md`
  Source: `@24vlh/vds/src/components/tables.css`
  Docs: `@24vlh/vds/doc-raw/vds-tables.doc.html`
  Focus: dense data, sticky header/columns, responsive overflow, row states, sorting, selection, captions.
  Notes: tables component audit is recorded in `@24vlh/vds/docs/planning/components/vds-tables-component-audit.md`; CSS-only table behavior, public/candidate-public selector surface, local table variables, semantic wrappers and captions, density and visual variants, sticky headers/columns/footers, row states, selection and expandable hooks, empty/loading states, responsive collapse, metric/numeric/currency/trend helpers, docs/index metadata, package-facing dist presence, source/backlog sorting mismatch, and future accessibility/theme/motion/forced-colors/sorting-selection-expansion routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2290 Tabs component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2290-tabs-component-audit.md`
  Source: `@24vlh/vds/src/components/tabs.css`
  Docs: `@24vlh/vds/doc-raw/vds-tabs.doc.html`
  Focus: tablist semantics, overflow, pills/underline variants, panels, selected/disabled state.
  Notes: tabs component audit is recorded in `@24vlh/vds/docs/planning/components/vds-tabs-component-audit.md`; CSS-only tabs behavior, public/candidate-public selector surface, local tabs variables, tablist/tab/panel structure, active/hidden/disabled hooks, underline/pill/segmented variants, density and alignment modes, vertical orientation, icon-only tabs, icon/badge slots, scrollable tab lists, responsive vertical collapse, docs/index metadata, package-facing dist presence, and future APG keyboard/focus/ARIA/theme/forced-colors/responsive routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2300 Toasts component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2300-toasts-component-audit.md`
  Source: `@24vlh/vds/src/components/toasts.css`
  Docs: `@24vlh/vds/doc-raw/vds-toasts.doc.html`
  Focus: stack placement, live regions, severity, timeout affordances, actions, mobile safe areas.
  Notes: toasts component audit is recorded in `@24vlh/vds/docs/planning/components/vds-toasts-component-audit.md`; CSS-only toast behavior, public/candidate-public selector surface, local toast variables, floating stacks, inline toasts, semantic variants, lifecycle classes, close/action slots, progress timers, compact/no-icon/no-close/no-progress layouts, mobile stack reflow, reduced-motion behavior, docs/index metadata, package-facing dist presence, and future ARIA/live-region/queue-lifecycle/mobile-safe-area/theme/motion/forced-colors routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2310 Tooltips and popovers component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2310-tooltips-popovers-component-audit.md`
  Source: `@24vlh/vds/src/components/tooltips-popovers.css`
  Docs: `@24vlh/vds/doc-raw/vds-tooltips-popovers.doc.html`
  Focus: pointer/keyboard behavior, positioning contract, arrow styles, dismiss behavior, touch fallback.
  Notes: tooltips/popovers component audit is recorded in `@24vlh/vds/docs/planning/components/vds-tooltips-popovers-component-audit.md`; CSS-only tooltip/popover behavior, public/candidate-public selector surface, local tooltip/popover variables, tooltip triggers, non-interactive tooltip surfaces, popover anchors, interactive popover shells, placement modifiers, arrow controls, density variants, semantic variants, open/visible state hooks, docs/index metadata, package-facing dist presence, source/docs reduced-motion and focus-visible mismatch, and future APG/ARIA/trigger-dismiss-touch/positioning-portal/theme/motion/forced-colors routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.
- [x] VDS-2320 Typography component audit
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-2320-typography-component-audit.md`
  Source: `@24vlh/vds/src/components/typography.css`
  Docs: `@24vlh/vds/doc-raw/vds-typography.doc.html`
  Focus: display text, prose, captions, links, inline code, truncation, balanced wrapping.
  Notes: typography component audit is recorded in `@24vlh/vds/docs/planning/components/vds-typography-component-audit.md`; CSS-only typography behavior, public/candidate-public selector surface, local typography variables, prose wrappers, heading hierarchy, body rhythm, inline semantics, code/pre styling, list/blockquote/pullquote/figure/prose-table/footnote helpers, docs/index metadata, package-facing dist presence, cross-component `.table code` evidence, `!important` code reset evidence, and future prose/accessibility/responsive/readability/theme/forced-colors routing are captured; CSS, raw docs, generated output, selector inventory, and consumer report changes remain later approved work.

## VDS-0600 Documentation Rewrite

Status: `in-progress`

- [x] VDS-3010 Documentation information architecture
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-3010-documentation-information-architecture.md`
  Notes: documentation information architecture is recorded in `@24vlh/vds/docs/planning/docs/vds-documentation-information-architecture.md`; Start, Foundations, Components, Patterns and recipes, Reference, and Release IA are defined; current README/raw-doc/generated-index/docs-shell evidence and duplicate docs-shell link/path evidence are captured; README, raw docs, docs shell, generated docs metadata, generated output, selector inventory, consumer reports, and runtime behavior changes remain later approved work.
- [x] VDS-3020 README rewrite from scratch
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-3020-readme-rewrite-from-scratch.md`
  Source: `@24vlh/vds/README.md`
  Notes: README was rewritten from scratch around the VDS-3010 Start IA and current package/dist evidence; install/import examples now use `@24vlh/vds`, package-facing `dist` surfaces and separate theme loading are documented, stale component/source-map/source-consumption claims are removed, and validation/compatibility/contribution guidance is captured; package metadata, generated output, raw docs, docs shell, selector inventory, consumer reports, workflows, npm tags, and version fields remain unchanged.
- [x] VDS-3030 Component docs template rewrite
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-3030-component-docs-template-rewrite.md`
  Notes: component docs template is recorded in `@24vlh/vds/docs/planning/docs/vds-component-docs-template.md`; required component-doc section order, source references, selector compatibility notes, variant/state/runtime boundaries, accessibility and keyboard/ARIA responsibilities, responsive/mobile behavior, theme/contrast/forced-colors/reduced-motion notes, example rules, migration/release placeholders, and validation checklist are defined; raw docs, generated metadata, docs shell, package metadata, generated output, selector inventory, consumer reports, workflows, npm tags, version fields, and runtime behavior changes remain later approved work.
- [x] VDS-3040 Raw docs HTML ownership plan
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-3040-raw-docs-html-ownership-plan.md`
  Notes: raw-doc ownership is recorded in `@24vlh/vds/docs/planning/docs/vds-raw-docs-html-ownership-plan.md`; handwritten `doc-raw/*.doc.html` remains the canonical runnable docs source for the current VDS-0600 rewrite cycle; generated docs metadata remains evidence only; docs shell, doc loader, local docs scripts, raw docs, README, generated metadata, generated output, package metadata, selector inventory, consumer reports, workflows, npm tags, version fields, and runtime behavior changes remain later approved work.
- [x] VDS-3050 Docs example quality pass
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-3050-docs-example-quality-pass.md`
  Notes: docs example quality standard and triage evidence are recorded in `@24vlh/vds/docs/planning/docs/vds-docs-example-quality-pass.md`; future examples must use source-backed selectors or documented helper/runtime hooks, be realistic, name interactive runtime responsibilities, avoid color-only semantics, use accessible control/media patterns, and state responsive/theme-sensitive behavior; raw docs, generated docs metadata, docs shell, README, generated output, package metadata, selector inventory, consumer reports, workflows, npm tags, version fields, and runtime behavior changes remain later approved work.
- [x] VDS-3060 Accessibility documentation rewrite
  Status: `done`
  Plan file: `@24vlh/vds/docs/planning/features/VDS-3060-accessibility-documentation-rewrite.md`
  Notes: shared accessibility documentation guidance and responsibility matrix are recorded in `@24vlh/vds/docs/planning/docs/vds-accessibility-documentation-rewrite.md`; WCAG 2.2 AA, APG reference posture, native-first semantics, ARIA/state guidance, keyboard/focus/live-region/runtime responsibility boundaries, and family-level matrices for interactive widgets, forms, feedback/status/loading, data/content, overlays/dialog-like surfaces, navigation/routing, and foundation utilities are defined; raw docs, generated docs metadata, docs shell, README, runtime CSS, generated output, package metadata, selector inventory, consumer reports, workflows, npm tags, version fields, and runtime behavior changes remain later approved work.
- [ ] VDS-3070 Theming documentation rewrite
  Plan file: pending
  Notes: explain theme files, semantic tokens, brand overrides, contrast checks, and custom theme creation.
- [ ] VDS-3080 Utility documentation rewrite
  Plan file: pending
  Notes: document utility taxonomy without making the docs unwieldy; flag utility vs component responsibilities.
- [ ] VDS-3090 Migration guide for version bounce
  Plan file: pending
  Notes: document changed classes, deprecations, renamed imports, removed docs-only classes, and compatibility shims.
- [ ] VDS-3100 Changelog and release notes workflow
  Plan file: pending
  Notes: introduce changelog discipline tied to implementation logs and version bump plans.
- [ ] VDS-3110 Docs search and navigation review
  Plan file: pending
  Notes: inspect docs site navigation, title handling, doc loader, component index, and deep-link behavior.
- [ ] VDS-3120 Consumer recipe docs
  Plan file: pending
  Notes: add recipes for Angular app shell, plain HTML, product dashboards, docs/prose pages, and dense admin tools.
- [ ] VDS-3130 Documentation lint rules
  Plan file: pending
  Notes: validate code snippets, dependencies, class existence, heading structure, and missing accessibility sections.

## VDS-0700 Quality Automation

Status: `todo`

- [ ] VDS-4010 Audit coverage expansion
  Plan file: pending
  Notes: expand existing audits to catch duplicate selectors, missing docs sections, selector drift, invalid token fallbacks, and docs/source mismatch.
- [ ] VDS-4020 CSS selector inventory generator
  Plan file: pending
  Notes: generate a stable public/private selector ledger per module.
- [ ] VDS-4030 Token inventory and unused token reporter
  Plan file: pending
  Notes: detect defined-but-unused, used-but-undefined, component-local alias drift, and theme coverage gaps.
- [ ] VDS-4040 Theme contrast checker
  Plan file: pending
  Notes: automate WCAG contrast checks for text/surface/semantic/focus combinations where feasible.
- [ ] VDS-4050 Visual regression smoke plan
  Plan file: pending
  Notes: define Playwright screenshots for documentation demos across themes and viewport sizes.
- [ ] VDS-4060 Accessibility smoke plan
  Plan file: pending
  Notes: add keyboard/focus/manual checklist and automated checks where practical.
- [ ] VDS-4070 Responsive screenshot matrix
  Plan file: pending
  Notes: desktop, tablet, mobile, narrow mobile, reduced motion, forced colors when possible.
- [ ] VDS-4080 Package smoke tests
  Plan file: pending
  Notes: verify full import, core import, component import, theme import, and package `files` behavior.
- [ ] VDS-4090 Docs dependency audit expansion
  Plan file: pending
  Notes: catch component demos missing foundation imports, icons imports, script dependencies, or theme dependencies.
- [ ] VDS-4100 CI and publish workflow review
  Plan file: pending
  Source: `@24vlh/vds/.github/workflows/npm-publish.yml`
  Notes: validate release triggers, provenance, package registry, secrets, and pre-publish gates.

## VDS-0800 Migration, Version Bounce, and Release

Status: `todo`

- [ ] VDS-5010 Deprecation and compatibility shim plan
  Plan file: pending
  Notes: decide which legacy classes remain, which get aliases, and which are removed in the target release.
- [ ] VDS-5020 Release branch and version bump plan
  Plan file: pending
  Notes: choose target version, update package metadata, lockfile if needed, changelog, and release notes.
- [ ] VDS-5030 Dist refresh and verification plan
  Plan file: pending
  Notes: plan how to regenerate and verify `dist/` while respecting build timeout guardrails.
- [ ] VDS-5040 Consumer migration test plan
  Plan file: pending
  Notes: smoke VDS in at least one real product or fixture before release.
- [ ] VDS-5050 Documentation release bundle
  Plan file: pending
  Notes: publish-ready docs, migration guide, examples, and known limitations.
- [ ] VDS-5060 Final audit and release candidate checklist
  Plan file: pending
  Notes: full audit, targeted visual checks, accessibility checks, package smoke, docs index refresh, changelog check.
- [ ] VDS-5070 Post-release follow-up plan
  Plan file: pending
  Notes: record follow-up backlog for the next minor/major after the version bounce.

## Cross-Cutting Work That Must Be Reflected In Every Component Plan

- Public classes and any aliases
- Component anatomy and required markup
- Optional markup and unsupported patterns
- Keyboard and focus behavior
- ARIA and semantic HTML responsibilities
- Disabled, loading, selected, active, current, invalid, expanded, and pressed states
- Reduced-motion behavior
- Forced-colors or high-contrast behavior where relevant
- Mobile and narrow container behavior
- Theme contrast in graphite, carbon, navy, and slate
- Dependencies on icons, forms, buttons, overlays, utilities, or docs-only scripts
- Dist impact and source-map expectations
- Raw docs examples and docs index impact
- Migration notes for renamed, deprecated, or removed classes

## Deferred Parking Lot

- Decide if VDS should add CSS cascade layers.
- Decide if VDS should publish design token JSON alongside CSS.
- Decide if VDS should generate utilities instead of maintaining the large utility file manually.
- Decide if docs should move from raw HTML to a data/template pipeline.
- Decide if VDS should provide optional framework adapters or stay CSS-only.
- Decide if component demos should live in isolated fixtures for screenshot testing.
