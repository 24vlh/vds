# VDS-0070 Responsive and Container Behavior Audit Plan

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0070`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0070-responsive-and-container-behavior-audit-plan.md`

## 1. Goal

Create the responsive and container behavior baseline required by the VDS `1.0.0` release gates. This item documents the default viewport matrix, source breakpoint evidence, safe-area and overflow expectations, and the responsive checks later component audits must apply.

## 2. Scope

### In scope

- Record the default VDS responsive validation matrix for mobile, tablet, desktop, and wide desktop.
- Record current source evidence for media queries, container queries, viewport units, safe-area usage, overflow, fixed/sticky positioning, and adaptive layout primitives.
- Define safe-area, viewport-height, overflow, touch/pointer, and sticky/fixed UI expectations for later component audits.
- Add a release responsive baseline artifact for later component, documentation, accessibility, theme, migration, and release work.
- Update the release policy gate and master feature map so future sessions use `VDS-0080` as the next recommended item.

### Out of scope

- Runtime CSS changes, selector changes, token changes, docs demo rewrites, package metadata changes, workflows, generated `dist`, build outputs, or version bumps.
- Playwright screenshots, real-device checks, visual regression tooling, or automated responsive test creation.
- Proving responsive correctness for current VDS examples; this item defines the audit baseline and evidence contract.
- Running `pnpm run build` or `pnpm run build:prod`.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/mobile-design/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/features/VDS-0060-accessibility-baseline-audit-plan.md`
  - `@24vlh/vds/docs/planning/release/vds-browser-css-support-matrix.md`
  - `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
  - `@24vlh/agents/docs_md/css/responsive/media-queries.md`
  - `@24vlh/agents/docs_md/css/responsive/container-queries.md`
  - `@24vlh/agents/docs_md/mobile-design/layout/adapt-layout.md`
  - `@24vlh/agents/docs_md/mobile-design/layout/edge-to-edge.md`
  - `@24vlh/agents/docs_md/mobile-design/foundations/system-bars.md`
  - `@24vlh/agents/docs_md/mobile-design/foundations/accessibility.md`
- Repo files:
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/doc-raw/*.doc.html`
- Current audit results:
  - `VDS-0050` records a modern evergreen browser posture and accepts media queries, container queries, `env()` safe-area values, `svh`/`dvh`, grid/flex, logical properties, `prefers-reduced-motion`, and `forced-colors` within the current CSS support surface.
  - `VDS-0060` records WCAG 2.2 AA as the accessibility baseline; responsive audits must preserve focus visibility, readable density, and usable hit targets.
- Legacy or consumer context reviewed:
  - Consumer compatibility is recorded by `VDS-0030`; this item does not scan consumer responsive behavior.

## 4. Current Behavior Snapshot

- Source files:
  - Responsive scan summary: media queries `83` matches in `30` files; media `max-width` queries `66` in `25`; media `min-width` queries `4` in `2`; container queries `4` in `1`; container declarations `2` in `1`; safe-area `env()` usage `8` in `2`; `svh`/`dvh` units `5` in `2`; overflow declarations `84` in `25`; sticky positioning `10` in `6`; fixed positioning `11` in `7`.
  - Adaptive layout primitives are already broad: `minmax()` `117` matches in `15` files; `auto-fit`/`auto-fill` `35` in `12`; `flex-wrap` `105` in `22`; grid-template-family declarations are widespread across `19` files.
- Raw docs:
  - No raw docs rewrite in this item. Later documentation audits must verify that examples demonstrate the responsive states documented by component plans.
- Public classes/selectors:
  - No selector contract changes. Later component audits must attach responsive expectations to public classes and documented layout patterns where relevant.
- Token usage:
  - Spacing, sizing, width, and safe-area token decisions remain deferred to foundation and token work, but responsive behavior is now a release gate input.
- Known mismatches:
  - Breakpoint usage is not centralized. `768px`, `1024px`, and `640px` dominate, with smaller clusters around `720px`, `1280px`, and one-off values.
  - Container queries currently appear only in `android-shell`; other adaptive behavior relies mainly on media queries, grid, flex, and overflow rules.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No CSS implementation changes.
- Later component audits must classify responsive behavior for each relevant class family:
  - required behavior;
  - progressive enhancement;
  - acceptable overflow;
  - needs fallback;
  - release-blocking responsive issue.
- Safe-area, viewport-height, overflow, sticky/fixed placement, touch/pointer affordances, and container-query reliance must be called out when present.

### Build, audit, or package surface

- Add `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`.
- Do not add package scripts, tooling dependencies, screenshot automation, or build configuration changes in this item.
- Record automation as later quality/tooling work.

### Documentation or demo surface

- Add this feature plan.
- Update `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md` so the responsive gate points to the new baseline.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0070` and set `VDS-0080` as next.

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
  - None in this item. Later migration notes must call out responsive behavior changes when public layout selectors, breakpoints, overflow rules, safe-area behavior, or stacking behavior change.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - Later responsive audits must verify focus visibility, focus order, and no hidden focused content at narrow widths and inside overflow containers.
- Semantics or ARIA:
  - Responsive layout changes must not reorder content in ways that break semantic or keyboard reading order.
- Reduced motion:
  - Responsive behavior must preserve the reduced-motion expectations defined by `VDS-0050` and `VDS-0060`.
- Forced colors or contrast:
  - Responsive density changes must preserve readable surfaces and focus indicators; theme contrast measurement is deferred to `VDS-0080`.
- Mobile/adaptive behavior:
  - Default viewport matrix: `360x740`, `390x844`, `768x1024`, `1024x768`, `1280x800`, and `1440x900`.
  - Special checks: no unintended horizontal page scroll; usable touch and mouse/trackpad layouts; sticky/fixed UI does not hide content; safe-area `env()` usage remains compatible with edge-to-edge surfaces; `svh`/`dvh` usage is reviewed for browser chrome and keyboard behavior; overflow containers remain keyboard and pointer usable.
- Theme coverage:
  - Later theme work must verify that responsive density and state changes remain visually legible across graphite, carbon, navy, and slate.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit`
  - `pnpm run audit:consumers`
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
  - Read-only responsive CSS source scan must be recorded in the implementation log.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, release policy, and responsive baseline agree on the default viewport matrix.
  - Confirm the responsive baseline states that no runtime CSS, build output, or version change happens in `VDS-0070`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by satisfying the responsive baseline gate from `VDS-0040`.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - Future migration/release notes must call out responsive-sensitive breaking changes or changed breakpoint, overflow, stacking, or safe-area expectations.

## 10. Risks

- A planning baseline can be ignored unless later component audits explicitly attach findings to classes, examples, and docs.
- Static CSS scans cannot prove real viewport behavior, keyboard accessibility inside scroll containers, or mobile browser chrome/keyboard behavior.
- Breakpoint values are currently distributed across component files, so future cleanup must avoid casual breakpoint edits without component and consumer context.

## 11. Open Questions

- Which responsive checks should become automated? Deferred to quality/tooling work.
- Which components need immediate responsive fixes? Deferred to component audit wave plans.
- Whether breakpoint tokens should be introduced is deferred to foundation/token work.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added responsive and container behavior baseline artifact.
- `2026-05-23`: Updated release policy to link the responsive baseline gate.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0070` and set next recommended item to `VDS-0080`.
- `2026-05-23`: Ran/read the responsive CSS source scan. Summary: media queries `83` matches in `30` files; media `max-width` queries `66` in `25`; media `min-width` queries `4` in `2`; container queries `4` in `1`; container declarations `2` in `1`; safe-area `env()` usage `8` in `2`; `svh`/`dvh` units `5` in `2`; overflow declarations `84` in `25`; sticky positioning `10` in `6`; fixed positioning `11` in `7`; `minmax()` `117` in `15`; `auto-fit`/`auto-fill` `35` in `12`; `flex-wrap` `105` in `22`; grid-template-family declarations across `19` files.
- `2026-05-23`: Ran validation: `pnpm run audit`, `pnpm run audit:consumers`, VDS-0070 markdown sanity checks, and `git diff --check` passed.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - VDS-0070 markdown sanity checks passed.
  - `git diff --check` passed.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0070-responsive-and-container-behavior-audit-plan.md`
  - `@24vlh/vds/docs/planning/release/vds-responsive-container-baseline.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; theme contrast and visual integrity baseline continues in `VDS-0080`.
