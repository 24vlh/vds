# VDS-0050 Browser Support and CSS Feature Support Matrix

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0050`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0050-browser-support-and-css-feature-support-matrix.md`

## 1. Goal

Create the browser and CSS feature support contract required by the `1.0.0` release gates. This item documents the default support posture as modern evergreen browsers, records the current VDS CSS feature surface, and defines which modern CSS features are allowed, enhancement-only, or require fallback review in later component audits.

## 2. Scope

### In scope

- Record the approved browser support posture: modern evergreen Chrome, Edge, Firefox, Safari, iOS Safari, and Android Chrome.
- Record that VDS does not support IE, old embedded WebViews, frozen enterprise browsers, or legacy Android browsers as release targets.
- Add the browser/CSS support matrix artifact for later component, responsive, accessibility, theme, and release work.
- Link the browser support matrix from the release policy gates.
- Update the master feature map so future sessions use `VDS-0060` as the next recommended item.

### Out of scope

- Runtime CSS changes, selector changes, token changes, package metadata changes, workflow changes, generated `dist`, build outputs, or version bumps.
- Adding browser compatibility automation or changing PostCSS/browser transpilation behavior.
- Adding fallbacks for existing CSS features; this item records which later audits must review.
- Running `pnpm run build` or `pnpm run build:prod`.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/pnpm-node/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/features/VDS-0040-versioning-policy-and-release-gates.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
  - `@24vlh/agents/docs_md/css/responsive/container-queries.md`
  - `@24vlh/agents/docs_md/css/guides/color-values.md`
  - `@24vlh/agents/docs_md/css/guides/specificity.md`
- External reference docs:
  - `https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix`
  - `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries`
  - `https://developer.mozilla.org/en-US/docs/Web/CSS/%3Ahas`
  - `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting`
- Repo files:
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/static/js/build.js`
- Current audit results:
  - `VDS-0040` release policy requires browser support matrix documentation before any version bump.
  - Current package version remains `0.3.8`; target modernization release line is `1.0.0`.
- Legacy or consumer context reviewed:
  - Consumer compatibility is recorded by `VDS-0030`; this item does not rescan consumer browser behavior.

## 4. Current Behavior Snapshot

- Source files:
  - `43` source CSS files are present under `@24vlh/vds/src`.
  - Feature scan evidence: `color-mix()` appears `25` times in `7` files; container queries appear `6` times in `1` file; `:focus-visible` appears `94` times in `16` files; logical properties appear `274` times in `17` files.
  - Feature scan evidence also found `:is()` in `2` files, `:where()` in `3` files, `prefers-reduced-motion` in `9` files, `forced-colors` in `2` files, `backdrop-filter` in `2` files, `svh/dvh` viewport units in `2` files, and safe-area `env()` in `2` files.
- Raw docs:
  - Raw docs remain unchanged by this item.
- Public classes/selectors:
  - No selector contract changes. Browser compatibility notes must be reflected by later component audits where a public selector depends on a feature-sensitive pattern.
- Token usage:
  - `color-mix()` is token/color fallback-sensitive and must be reviewed in token/theme work before release readiness.
- Known mismatches:
  - No `:has()`, native CSS nesting, cascade layers, `@scope`, `@property`, subgrid, or anchor positioning usage was found in the current source scan.
  - Build transpilation behavior is informational only here; build config remains unchanged.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No CSS implementation changes.
- Later component and token audits must classify feature usage as required, progressive enhancement, or needs fallback.
- `color-mix()` requires fallback review where unsupported color computation could affect legibility, semantic state clarity, or theme contrast.
- Container query usage must keep base layout usable without query enhancements.
- `backdrop-filter` is enhancement-only; readable surfaces must not depend on it.

### Build, audit, or package surface

- Add `@24vlh/vds/docs/planning/release/vds-browser-css-support-matrix.md`.
- Do not add package scripts or modify PostCSS/browser transpilation settings.
- Keep browser support as a release contract and planning artifact, not a runtime polyfill promise.

### Documentation or demo surface

- Add this feature plan.
- Update `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md` so the browser support gate points to the new matrix.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0050` and set `VDS-0060` as next.

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
  - None in this item. Later migration notes must mention browser-sensitive changes if a release changes a public selector's fallback, feature dependency, or minimum browser posture.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - `:focus-visible` is accepted for the evergreen target. Accessibility baseline work must still verify visible focus behavior and fallback expectations.
- Semantics or ARIA:
  - No behavior changes.
- Reduced motion:
  - `prefers-reduced-motion` is accepted and must remain part of later component audit criteria.
- Forced colors or contrast:
  - `forced-colors` usage is accepted and must be expanded or reviewed by accessibility/theme work.
- Mobile/adaptive behavior:
  - `svh/dvh`, safe-area `env()`, and container queries are accepted, but responsive work must verify base layout and narrow viewport behavior.
- Theme coverage:
  - `color-mix()` and feature-sensitive color effects must be reviewed by token/theme contrast work.

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
  - Confirm master map, feature plan, release policy, and support matrix agree on modern evergreen support.
  - Confirm the support matrix states that no version bump or runtime CSS change happens in `VDS-0050`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by satisfying the browser support matrix gate from `VDS-0040`.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - Future migration/release notes must call out any browser-sensitive breaking changes or fallback changes.

## 10. Risks

- Exact browser support data can drift before release; final release candidate work must refresh compatibility evidence.
- Modern evergreen posture may exclude old embedded WebViews or frozen enterprise browsers that some consumers could still run.
- Documentation-only policy can be ignored unless later component plans actively classify feature usage against the matrix.

## 11. Open Questions

- Should automated browser compatibility checks be added later? Deferred to quality/tooling work.
- Should VDS define a package-level `browserslist` later? Deferred to package metadata and build tooling work.
- Which existing feature usages need concrete fallback edits? Deferred to component, responsive, accessibility, and theme audits.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added browser/CSS support matrix artifact.
- `2026-05-23`: Updated release policy to link the browser support matrix gate.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0050` and set next recommended item to `VDS-0060`.
- `2026-05-23`: Ran a read-only CSS feature scan. Summary: `color-mix()` `25` matches in `7` files; container queries `6` in `1`; `:focus-visible` `94` in `16`; `:is()` `15` in `2`; `:where()` `27` in `3`; logical properties `274` in `17`; `prefers-reduced-motion` `12` in `9`; `forced-colors` `2` in `2`; `backdrop-filter` `4` in `2`; `svh/dvh` units `5` in `2`; safe-area `env()` `8` in `2`; no `:has()`, native CSS nesting, cascade layers, `@scope`, `@property`, subgrid, or anchor positioning found.
- `2026-05-23`: Ran validation: `pnpm run audit`, `pnpm run audit:consumers`, VDS-0050 markdown sanity checks, and `git diff --check` passed.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - VDS-0050 markdown sanity checks passed.
  - `git diff --check` passed.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-0050-browser-support-and-css-feature-support-matrix.md`
  - `@24vlh/vds/docs/planning/release/vds-browser-css-support-matrix.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; accessibility baseline continues in `VDS-0060`.
