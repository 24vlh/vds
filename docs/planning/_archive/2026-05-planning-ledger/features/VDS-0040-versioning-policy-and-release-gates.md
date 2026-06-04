# VDS-0040 Versioning Policy and Release Gates

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0040`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0040-versioning-policy-and-release-gates.md`

## 1. Goal

Create the VDS release decision contract before component cleanup begins. This item locks the modernization target to the `1.0.0` stable release line, defines semver and deprecation rules, defines pre-release gate expectations, and records what must be true before any later version bump item is allowed to change `package.json`.

## 2. Scope

### In scope

- Record that the current package remains `0.3.8` until a later approved version bump item.
- Record that the modernization target is the `1.0.0` stable release line.
- Define the release policy and gate artifact for later migration, changelog, release candidate, dist, package smoke, and publish work.
- Update the master feature map so future sessions use `VDS-0050` as the next recommended item.

### Out of scope

- Changing runtime CSS, selectors, tokens, docs demos, package version fields, npm tags, Git tags, workflow triggers, generated `dist`, or build outputs.
- Creating final changelog or migration guide content.
- Refreshing `dist` or running `pnpm run build` / `pnpm run build:prod`.
- Changing publish workflow, package smoke automation, or package metadata beyond planning docs.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/pnpm-node/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/feature-plan-template.md`
  - `@24vlh/vds/docs/planning/features/VDS-0010-audit-baseline-and-release-scope.md`
  - `@24vlh/vds/docs/planning/features/VDS-0020-public-api-inventory-and-class-contract.md`
  - `@24vlh/vds/docs/planning/features/VDS-0030-consumer-compatibility-review.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.md`
  - `@24vlh/vds/docs/planning/api/vds-consumer-compatibility.md`
- Repo files:
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/.github/workflows/npm-publish.yml`
  - `@24vlh/vds/README.md`
- Current audit results:
  - `VDS-0020` selector inventory reports `2775` classes, `1905` public, `870` candidate-public, and `0` docs-only.
  - `VDS-0030` consumer compatibility reports `320` scanned source files, `363` matched VDS classes, `24` candidate-public usages, `0` legacy-compatible usages, `0` deprecated usages, and `7` unknown VDS-like usages.
- Legacy or consumer context reviewed:
  - Tags exist through `v0.3.8`.
  - Publish workflow triggers on `v*` tags and runs `pnpm run build:prod` in CI.

## 4. Current Behavior Snapshot

- Source files:
  - Runtime source remains unchanged by this item.
- Raw docs:
  - Raw docs remain unchanged by this item.
- Public classes/selectors:
  - The selector inventory and consumer compatibility report provide the current release-risk inputs.
- Token usage:
  - Existing token usage audit is part of aggregate `pnpm run audit`, but token taxonomy and theme contrast release readiness remain future work.
- Known mismatches:
  - `README.md` still describes source maps for output files, while the current local build script disables maps by default; this plan does not resolve that mismatch.
  - `lint-staged` still references the guarded `pnpm run build`; that remains planned under tooling work.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No CSS, token, theme, or selector changes.
- Later release decisions must use the selector inventory and consumer compatibility report before approving breaking selector cleanup.

### Build, audit, or package surface

- Add `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`.
- Keep `package.json` version at `0.3.8`.
- Do not change package scripts, publish workflow, npm metadata, tags, lockfile, or generated `dist`.
- Record that actual version bump work belongs to `VDS-5020`.

### Documentation or demo surface

- Add this feature plan.
- Add a release policy artifact that future release, migration, changelog, package smoke, and publish workflow items must consult.
- Update the master feature map release target and next recommended item.

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
  - Breaking changes later require selector classification, consumer impact review, migration notes, and explicit release-item approval.
  - `public`, `candidate-public`, and `legacy-compatible` selectors remain protected unless a later migration/deprecation plan approves removal or rename.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No behavior changes; release readiness requires an accessibility baseline in `VDS-0060`.
- Semantics or ARIA:
  - No behavior changes; release readiness requires component documentation and migration coverage later.
- Reduced motion:
  - No behavior changes; release readiness requires the accessibility and motion baseline work.
- Forced colors or contrast:
  - No behavior changes; release readiness requires theme contrast baseline work in `VDS-0080`.
- Mobile/adaptive behavior:
  - No behavior changes; release readiness requires responsive baseline work in `VDS-0070`.
- Theme coverage:
  - No behavior changes; release readiness requires theme contrast and visual integrity coverage.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit`
  - `pnpm run audit:consumers`
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only; real consumer migration smoke remains later release work.

## 9. Rollout and Version Notes

- Release target:
  - `1.0.0` stable release line.
  - Exact package version bump remains deferred to `VDS-5020`.
- Version bump impact:
  - None in this item.
- Dist or package metadata impact:
  - None in this item.
- Migration guide impact:
  - The release policy requires migration guide, changelog, and release notes completeness before later version bump approval.

## 10. Risks

- Treating `VDS-0040` as permission to bump the package would bypass required component, docs, dist, package smoke, and publish gates.
- A `1.0.0` target increases the importance of migration documentation and selector deprecation discipline before release.
- Consumer scans depend on sibling repositories, so release items must refresh or explicitly waive that evidence.

## 11. Open Questions

- Which selectors will actually be deprecated, renamed, shimmed, or removed? Deferred to component audits and `VDS-5010`.
- Which pre-release tags will be needed? Deferred to `VDS-5020` after audit waves produce release evidence.
- Should publish workflow checks change before release? Deferred to `VDS-4100`.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added release policy and gate artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to record the `1.0.0` stable release line and set the next recommended item to `VDS-0050`.
- `2026-05-23`: Ran validation: `pnpm run audit`, `pnpm run audit:consumers`, markdown sanity checks, and `git diff --check` passed.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - VDS-0040 markdown sanity checks passed.
  - `git diff --check` passed.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0040-versioning-policy-and-release-gates.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; browser support continues in `VDS-0050`, and release execution remains covered by existing release items.
