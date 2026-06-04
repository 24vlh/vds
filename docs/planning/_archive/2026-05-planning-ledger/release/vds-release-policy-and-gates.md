# VDS Release Policy and Gates

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-0040`

This file is the release decision source for VDS modernization work. It does not change runtime CSS, package metadata, npm tags, Git tags, workflows, or generated output.

## Release Line

- Current package version remains `0.3.8`.
- Target modernization release line: `1.0.0` stable.
- Exact package version bump is deferred to `VDS-5020`.
- Version bumps must happen only through an approved release/version item.

## Semver Policy

- Patch releases after `1.0.0` are for compatible fixes only.
- Minor releases after `1.0.0` may add compatible selectors, tokens, documentation, or package surfaces.
- Major releases after `1.0.0` are required for removed or renamed public selectors, incompatible token semantics, incompatible package surfaces, or removed compatibility shims.
- Before `1.0.0`, modernization work may plan breaking cleanup, but the cleanup must still be classified, documented, migration-planned, and approved before it ships.

## Selector Compatibility Rules

- `public`, `candidate-public`, and `legacy-compatible` selectors must not be removed or renamed without an approved migration/deprecation plan.
- `candidate-public` is compatibility-sensitive by default because consumers may use CSS-defined selectors that are not yet documented.
- `legacy-compatible` selectors must remain until a migration plan approves their removal or replacement.
- `deprecated` selectors require migration notes before any release that keeps or removes them.
- Unknown VDS-like consumer usage from `VDS-0030` must be reviewed before selector cleanup is finalized.

## Pre-Release Defaults

- `1.0.0-alpha.N`: allowed only for internal audit/testing packages.
- `1.0.0-beta.N`: allowed after component audit waves and docs rewrite are substantially complete.
- `1.0.0-rc.N`: allowed only after final release gates pass except final tag/publish approval.
- Stable `1.0.0`: allowed only through a later approved release/version item.

## Required Gates Before Any Version Bump

- `pnpm run audit` passes.
- Selector inventory is fresh.
- Consumer compatibility report is refreshed or explicitly waived with reason.
- Modern evergreen browser support matrix is documented in `@24vlh/vds/docs/planning/release/vds-browser-css-support-matrix.md`.
- WCAG 2.2 AA accessibility baseline is documented in `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`.
- Responsive and container behavior baseline is documented in `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`.
- Theme contrast and visual integrity baseline is documented in `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`.
- Component audit wave is complete or each deferral is listed.
- Documentation rewrite strategy is documented in `@24vlh/vds/docs/planning/docs/vds-documentation-rewrite-strategy.md`; migration guide, changelog, and release notes are complete enough for the chosen release.
- Package smoke, dist refresh, and publish workflow checks are completed by later release items.

## Deferred Release Execution Items

- `VDS-0050`: browser support and CSS feature support matrix.
- `VDS-0060`: accessibility baseline audit plan.
- `VDS-0070`: responsive and container behavior audit plan.
- `VDS-0080`: theme contrast and visual integrity audit plan.
- `VDS-0090`: documentation rewrite strategy.
- `VDS-4080`: package smoke tests.
- `VDS-4100`: CI and publish workflow review.
- `VDS-5010`: deprecation and compatibility shim plan.
- `VDS-5020`: release branch and version bump plan.
- `VDS-5030`: dist refresh and verification plan.
- `VDS-5040`: consumer migration test plan.
- `VDS-5050`: documentation release bundle.
- `VDS-5060`: final audit and release candidate checklist.
