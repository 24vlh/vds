# VDS-0010 Audit Baseline and Release Scope

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0010`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0010-audit-baseline-and-release-scope.md`

## 1. Goal

Define the modernization baseline for VDS before component work begins: what the audit must cover, what release ambition is allowed, what compatibility promises remain in force, and what evidence is required before any version bump.

## 2. Scope

### In scope

- Record the approved release stance: VDS modernization may become a major release if the audit justifies it.
- Record the approved consumer scope: `VDS-0010` is VDS-first and leaves cross-repo consumer scanning to `VDS-0030`.
- Define the audit dimensions every later structural, token, component, documentation, quality, and release item must report against.
- Define the minimum release gates required before any package version bump can be planned.
- Update the master feature map so future sessions can find this plan and its decisions.

### Out of scope

- Changing runtime CSS, selectors, tokens, themes, docs demos, JavaScript, package metadata, generated `dist/`, or package version fields.
- Scanning real consumers outside `@24vlh/vds`; that belongs to `VDS-0030`.
- Producing the public selector inventory; that belongs to `VDS-0020`.
- Choosing the exact semver target; that belongs to `VDS-0040` after the API inventory and risk classification exist.
- Rewriting documentation; that starts under `VDS-0090` and the `VDS-0600` documentation wave.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/pnpm-node/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/feature-plan-template.md`
  - `@24vlh/family-relay/docs/planning/README.md`
  - `@24vlh/family-relay/docs/planning/feature-plan-template.md`
- Repo files:
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/doc-raw/*.doc.html`
  - `@24vlh/vds/static/js/*.js`
- Current audit results:
  - `pnpm run audit` passed before this plan was created: CSS parse, documented classes, token usage, and doc dependencies were green.
- Legacy or consumer context reviewed:
  - None. Real consumer scanning is deliberately deferred to `VDS-0030`.

## 4. Current Behavior Snapshot

- Source files:
  - `43` source CSS files are present under `@24vlh/vds/src`.
  - `33` component CSS files are present under `@24vlh/vds/src/components`.
  - `4` theme CSS files are present under `@24vlh/vds/src/themes`.
- Raw docs:
  - `37` raw documentation HTML files are present under `@24vlh/vds/doc-raw`.
- Public classes/selectors:
  - No formal selector contract exists yet.
  - Existing doc/class audit confirms classes used in raw docs exist in CSS, but does not classify selectors as public, private, legacy, deprecated, or docs-only.
- Token usage:
  - Existing token audit passes, but does not classify token ownership, semantic role quality, theme coverage, contrast, or deprecation risk.
- Known mismatches:
  - No specific CSS/raw-doc mismatch is recorded in this plan.
  - The master map records large/high-risk areas for later audit, especially utilities, content blocks, command, inbox, overlays, tables, icons, and base docs.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No CSS implementation changes in `VDS-0010`.
- Later plans must audit each affected CSS module against these dimensions:
  - module boundary and import expectations;
  - public selectors and aliases;
  - token ownership and fallback behavior;
  - theme coverage across graphite, carbon, navy, and slate;
  - accessibility states, focus behavior, reduced-motion behavior, and contrast;
  - responsive behavior, overflow behavior, and mobile/narrow-container behavior.

### Build, audit, or package surface

- No build, package, dependency, or dist changes in `VDS-0010`.
- Later release work must not plan a version bump until these gates are satisfied or explicitly deferred with user approval:
  - `pnpm run audit` passes;
  - a public selector/API inventory exists from `VDS-0020`;
  - consumer compatibility risk is reviewed in `VDS-0030`;
  - versioning policy and release gates are finalized in `VDS-0040`;
  - browser support implications are documented in `VDS-0050`;
  - accessibility, responsive, and theme audit baselines are planned through `VDS-0060`, `VDS-0070`, and `VDS-0080`;
  - documentation and migration expectations are defined through `VDS-0090` and later documentation work.

### Documentation or demo surface

- No documentation rewrite in `VDS-0010`.
- This plan becomes the planning source for audit scope and release baseline.
- Later component plans must record their source paths, raw docs paths, public selector impact, validation evidence, and follow-up items.

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None in this item.
- Breaking changes:
  - None in this item.
- Migration notes:
  - VDS is allowed to become major-ready, but no breaking change may ship until it is classified, documented, migration-planned, and approved through a later release/version item.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - Later component plans must state whether keyboard/focus behavior is required, implemented by CSS alone, delegated to consumer JavaScript, or out of scope.
- Semantics or ARIA:
  - Later component plans must state the required markup semantics and ARIA responsibilities for examples and consumers.
- Reduced motion:
  - Later component plans must record whether transitions/animations exist and how `prefers-reduced-motion` is handled.
- Forced colors or contrast:
  - Later component plans must record contrast and forced-colors impact where relevant.
- Mobile/adaptive behavior:
  - Later component plans must record breakpoints, container behavior, overflow handling, and narrow-viewport examples.
- Theme coverage:
  - Later component plans must check graphite, carbon, navy, and slate theme implications before declaring release readiness.

## 8. Validation Plan

- Static audit:
  - Run `pnpm run audit`.
- Class/token/doc audit:
  - Covered by the existing aggregate audit command.
- Responsive/manual checks:
  - Not required for this planning-only item.
  - Required later by component and visual-regression items.
- Visual regression or screenshot checks:
  - Not required for this planning-only item.
  - Defined later under `VDS-4050` and `VDS-4070`.
- Consumer smoke checks:
  - Not required for this planning-only item.
  - Deferred to `VDS-0030` and `VDS-5040`.

## 9. Rollout and Version Notes

- Release target:
  - Major-ready modernization is allowed, but the exact version target remains TBD until `VDS-0040`.
- Version bump impact:
  - No version bump in `VDS-0010`.
  - Version bumps must happen only through a later approved release/version item.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - This plan requires later migration work to explain any breaking cleanup, deprecations, aliases, or removed docs-only patterns before release.

## 10. Risks

- Treating the current green mechanical audit as release readiness would miss accessibility, responsive, visual, browser support, theme, package, and documentation risks.
- Planning a major release without `VDS-0020` and `VDS-0030` would risk breaking consumers blindly.
- Deferring real consumer scanning is acceptable for `VDS-0010`, but it must happen before final release scope is locked.

## 11. Open Questions

- What exact semver target should the modernization use? Deferred to `VDS-0040`.
- Which selectors are public, private, legacy-compatible, deprecated, or docs-only? Deferred to `VDS-0020`.
- Which real products consume VDS and what compatibility shims do they need? Deferred to `VDS-0030`.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to mark `VDS-0010` as `planning`, link this plan, and record the major-ready/VDS-first defaults.
- `2026-05-23`: Ran validation: `pnpm run audit` passed, `git diff --check` passed, and the plan file/master map link sanity check passed.
- `2026-05-23`: Closed by `VDS-0020` implementation after selector inventory and class contract were created.

## 14. Post-Implementation Update

- Final status: `done`
- Validation run: `pnpm run audit`; `git diff --check -- docs/planning/master-feature-map.md docs/planning/features/VDS-0010-audit-baseline-and-release-scope.md`; plan file/master map link sanity check with `rg`
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0010-audit-baseline-and-release-scope.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; required follow-ups already exist as `VDS-0020`, `VDS-0030`, `VDS-0040`, `VDS-0050`, `VDS-0060`, `VDS-0070`, `VDS-0080`, and `VDS-0090`.
