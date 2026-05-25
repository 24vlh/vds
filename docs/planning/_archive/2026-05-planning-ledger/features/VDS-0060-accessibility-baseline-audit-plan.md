# VDS-0060 Accessibility Baseline Audit Plan

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0060`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0060-accessibility-baseline-audit-plan.md`

## 1. Goal

Create the accessibility baseline required by the VDS `1.0.0` release gates. This item sets WCAG 2.2 AA as the required release baseline and uses WAI-ARIA APG as the widget behavior reference for component examples and future audits.

## 2. Scope

### In scope

- Record WCAG 2.2 AA as the required accessibility target for VDS `1.0.0`.
- Record WAI-ARIA APG as the widget behavior reference for interactive component examples and audits.
- Define CSS-only VDS responsibilities separately from consumer/application JavaScript responsibilities.
- Add a release accessibility baseline artifact for later component, documentation, theme, responsive, migration, and release work.
- Update the release policy gate and master feature map so future sessions use `VDS-0070` as the next recommended item.

### Out of scope

- Runtime CSS changes, selector changes, token changes, docs demo rewrites, package metadata changes, workflows, generated `dist`, build outputs, or version bumps.
- Automated accessibility tooling, Playwright checks, contrast tooling, or component fixes.
- Proving accessibility conformance for current VDS examples; this item defines the audit baseline and evidence contract.
- Running `pnpm run build` or `pnpm run build:prod`.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
  - `@24vlh/agents/docs_md/html/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/features/VDS-0050-browser-support-and-css-feature-support-matrix.md`
  - `@24vlh/vds/docs/planning/release/vds-browser-css-support-matrix.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
  - `@24vlh/agents/docs_vds/README.md`
  - `@24vlh/agents/docs_vds/components/*.json`
- External reference docs:
  - `https://www.w3.org/WAI/standards-guidelines/wcag/`
  - `https://www.w3.org/WAI/WCAG22/quickref/`
  - `https://www.w3.org/WAI/ARIA/apg/`
  - `https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/`
- Repo files:
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/doc-raw/*.doc.html`
- Current audit results:
  - `VDS-0050` records a modern evergreen browser posture and accepts `:focus-visible`, `prefers-reduced-motion`, and `forced-colors` as current CSS feature surface.
- Legacy or consumer context reviewed:
  - Consumer compatibility is recorded by `VDS-0030`; this item does not scan consumer accessibility behavior.

## 4. Current Behavior Snapshot

- Source files:
  - CSS scan: `:focus-visible` `94` matches in `16` files; focus selectors `10` in `7`; `focus-within` `12` in `5`; outline declarations `188` in `22`; disabled selectors `123` in `14`; ARIA selectors `90` in `8`; reduced-motion `12` in `9`; forced-colors `2` in `2`; motion declarations `132` in `28`; `sr-only`/visually-hidden utility `4` in `2`.
- Raw docs:
  - Raw docs scan: role attributes `270` in `16` files; ARIA attributes `748` in `26`; `tabindex` `34` in `3`; buttons `745` in `29`; inputs `170` in `10`; dialogs `53` in `4`; tabs `104` in `3`; menu/popup attributes `11` in `1`; tooltip references `15` in `2`.
- Public classes/selectors:
  - No selector contract changes. Later component audits must attach accessibility expectations to public classes and documented markup patterns where relevant.
- Token usage:
  - Contrast-sensitive token and theme behavior remains deferred to token/theme work, but WCAG 2.2 AA is the baseline that those items must evaluate against.
- Known mismatches:
  - Forced-colors coverage is currently much smaller than the broader focus/state/motion surface and needs later audit attention.
  - CSS cannot implement JavaScript-driven widget behavior such as focus trapping, active descendant updates, route announcements, or live-region state changes.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No CSS implementation changes.
- Future component audits must classify accessibility responsibilities for each relevant class family:
  - CSS responsibility;
  - required semantic markup;
  - required ARIA state/relationship;
  - consumer JavaScript responsibility;
  - unsupported patterns.
- Theme and token work must evaluate contrast-sensitive surfaces against WCAG 2.2 AA expectations.

### Build, audit, or package surface

- Add `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`.
- Do not add package scripts, tooling dependencies, or automated accessibility checks in this item.
- Record automation as later quality/tooling work.

### Documentation or demo surface

- Add this feature plan.
- Update `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md` so the accessibility gate points to the new baseline.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0060` and set `VDS-0070` as next.

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
  - None in this item. Later migration notes must call out accessibility-sensitive behavior changes when public selectors, markup requirements, state classes, or ARIA expectations change.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - WCAG 2.2 AA and APG are the baseline. Later audits must verify visible focus, keyboard paths, focus order, focus trapping where applicable, and no keyboard traps.
- Semantics or ARIA:
  - Later audits must verify native semantics first and ARIA only where it improves required widget behavior.
- Reduced motion:
  - Later audits must verify that motion/animation does not violate reduced-motion expectations.
- Forced colors or contrast:
  - Later audits must verify forced-colors behavior and WCAG 2.2 AA contrast expectations.
- Mobile/adaptive behavior:
  - Later audits must verify accessible hit targets, focus visibility, and interaction states across responsive layouts.
- Theme coverage:
  - Later theme work must verify contrast, focus, disabled, selected, invalid, and semantic states across graphite, carbon, navy, and slate.

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
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, release policy, and accessibility baseline agree on WCAG 2.2 AA.
  - Confirm the accessibility baseline states that no runtime CSS or version change happens in `VDS-0060`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by satisfying the accessibility baseline gate from `VDS-0040`.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - Future migration/release notes must call out accessibility-sensitive breaking changes or changed markup/ARIA requirements.

## 10. Risks

- A planning baseline can be ignored unless later component audits explicitly attach findings to classes, examples, and docs.
- WCAG 2.2 AA conformance cannot be proven by CSS scans alone.
- Consumer applications must implement JavaScript-driven behavior correctly; VDS can document and style the expected states but cannot enforce runtime behavior by CSS alone.

## 11. Open Questions

- Which accessibility checks should become automated? Deferred to quality/tooling work.
- Which component families need immediate APG alignment fixes? Deferred to component audit wave plans.
- Which theme/token contrast failures exist? Deferred to `VDS-0080` and token/theme work.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added accessibility baseline artifact.
- `2026-05-23`: Updated release policy to link the accessibility baseline gate.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0060` and set next recommended item to `VDS-0070`.
- `2026-05-23`: Ran/read the accessibility source scan. CSS summary: `:focus-visible` `94` matches in `16` files; focus selectors `10` in `7`; `focus-within` `12` in `5`; outline declarations `188` in `22`; disabled selectors `123` in `14`; ARIA selectors `90` in `8`; reduced-motion `12` in `9`; forced-colors `2` in `2`; motion declarations `132` in `28`; `sr-only`/visually-hidden utility `4` in `2`.
- `2026-05-23`: Ran/read the raw docs accessibility scan. Docs summary: role attributes `270` in `16` files; ARIA attributes `748` in `26`; `tabindex` `34` in `3`; buttons `745` in `29`; inputs `170` in `10`; dialogs `53` in `4`; tabs `104` in `3`; menu/popup attributes `11` in `1`; tooltip references `15` in `2`.
- `2026-05-23`: Ran validation: `pnpm run audit`, `pnpm run audit:consumers`, VDS-0060 markdown sanity checks, and `git diff --check` passed.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - VDS-0060 markdown sanity checks passed.
  - `git diff --check` passed.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0060-accessibility-baseline-audit-plan.md`
  - `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; responsive baseline continues in `VDS-0070`.
