# VDS-1140 Theme Switcher and Docs Theme Behavior

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-1140`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1140-theme-switcher-and-docs-theme-behavior.md`

## 1. Goal

Create the theme switcher and docs theme behavior audit after the four per-theme audits. This item records how the docs shell loads all theme files, how `data-theme` switching works, whether the eight-theme matrix is represented, and which docs/runtime gaps must be fixed later.

## 2. Scope

### In scope

- Record docs shell theme loading, default theme, theme radio coverage, script order, and favicon behavior.
- Record theme switcher JavaScript behavior and resilience/accessibility gaps.
- Record theme switcher CSS behavior and browser/accessibility/responsive gaps.
- Record raw-doc theme coverage and mismatches against the current four-theme/eight-root matrix.
- Add a theme switcher/docs behavior artifact for later docs shell fixes, theme-switcher accessibility work, docs rewrite theme guidance, visual QA, migration notes, and release verification.
- Update the master feature map so the token/theme track continues to `VDS-1150`.

### Out of scope

- Changing docs shell HTML, browser JS, CSS, raw docs, generated docs index, source themes, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing theme switcher accessibility/resilience, favicon behavior, docs examples, docs navigation, generated docs metadata, visual checks, or theme token values.
- Running visual, browser, screenshot, or accessibility smoke checks.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/tokens/vds-theme-architecture-audit.md`
  - `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
  - `@24vlh/vds/docs/planning/tokens/vds-graphite-theme-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-carbon-theme-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-navy-theme-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-slate-theme-audit.md`
  - `@24vlh/vds/docs/planning/architecture/vds-docs-indexing-pipeline-review.md`
  - `@24vlh/vds/docs/planning/architecture/vds-demo-server-doc-loader-review.md`
- Repo files:
  - `@24vlh/vds/index.html`
  - `@24vlh/vds/js/theme-switcher.js`
  - `@24vlh/vds/css/theme-switcher.css`
  - `@24vlh/vds/src/themes/*.css`
  - `@24vlh/vds/doc-raw/*.doc.html`
- Current audit results:
  - Validation recorded in the post-implementation update.
- Standards baseline:
  - WCAG 2.2 AA from `VDS-0060`.
  - Browser/CSS feature posture from `VDS-0050`.
  - Eight-theme validation matrix from `VDS-0080`.
  - Per-theme audit evidence from `VDS-1100` through `VDS-1130`.

## 4. Current Behavior Snapshot

- Docs shell evidence:
  - `@24vlh/vds/index.html` defaults to `data-theme="graphite-light"`.
  - `index.html` loads `43` CSS stylesheets.
  - The docs shell loads all four source theme files:
    - `src/themes/slate.css`
    - `src/themes/navy.css`
    - `src/themes/carbon.css`
    - `src/themes/graphite.css`
  - Theme switcher radio values total `8`, and all match real theme roots:
    - `graphite-light`
    - `graphite-dark`
    - `slate-light`
    - `slate-dark`
    - `navy-light`
    - `navy-dark`
    - `carbon-light`
    - `carbon-dark`
  - `index.html` loads `6` browser scripts, with `js/theme-switcher.js` first.
  - Favicon is fixed to `vlah-favicon-slate-light.svg`, not theme-switched.
- Theme switcher JS evidence:
  - `@24vlh/vds/js/theme-switcher.js` has `35` lines and passes `node --check`.
  - Uses localStorage key `vg-theme`.
  - Applies saved theme after a `300ms` timeout.
  - Does not validate saved theme against known roots.
  - Does not wrap localStorage access in `try/catch`.
  - Does not include null guards for required DOM nodes.
  - Does not include keyboard handling, `Escape`, `aria-expanded`, focus return, or system color-scheme preference.
- Theme switcher CSS evidence:
  - `@24vlh/vds/css/theme-switcher.css` has `88` lines and `9` selector groups.
  - Uses fixed bottom-left positioning, hard-coded z-index values, transitions, and `:has(...)`.
  - Does not include `:focus-visible`, reduced-motion handling, or mobile viewport media rules.
- Raw docs evidence:
  - `37` raw docs total.
  - `27` docs mention at least one theme name.
  - No raw doc mentions all four themes.
  - Only `2` raw docs mention Graphite by name.
  - `25` docs mention Slate, Navy, or Carbon but not Graphite in the current word-boundary scan.
  - Only `vds-index.doc.html` mentions `data-theme` and the theme switcher.

## 5. Proposed Architecture or Change

### Docs theme behavior

- No runtime docs shell, browser JS, CSS, raw-doc, theme, package, or generated-output changes.
- Treat the theme switcher as documentation tooling, not a runtime VDS package API.
- Record docs shell all-theme loading as acceptable for the local docs shell because theme roots are scoped by `data-theme`.
- Preserve public package guidance as "load one active theme" unless a later docs rewrite changes that guidance.
- Use the eight-theme validation matrix from `VDS-0080` and the per-theme audits from `VDS-1100` through `VDS-1130` as the docs theme behavior baseline.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.
- Keep theme switcher runtime fixes, docs navigation generation, theme-guidance rewrite, docs index refresh, and visual QA deferred to later approved items.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/tokens/vds-theme-switcher-docs-theme-behavior.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1140` and set next recommended item to `VDS-1150`.
- Do not change README, raw docs, docs shell, docs demos, generated docs indexes, or agents docs output in this item.

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None in this item.
- Breaking changes:
  - None in CSS, tokens, theme roots, docs shell markup, browser JS behavior, package import paths, generated `dist`, workflows, docs routes, selector inventory, consumer reports, or package version fields.
- Migration notes:
  - None for package consumers in this item. Later docs theme guidance changes may need migration notes if they alter package-consumer recommendations for theme loading or theme roots.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future theme switcher fixes must review keyboard interaction, `Escape`, focus return, visible focus, and `aria-expanded`.
- Semantics or ARIA:
  - No runtime behavior changes. Future fixes must distinguish docs-tool UI state from VDS package API.
- Reduced motion:
  - No runtime behavior changes. Future CSS fixes should avoid relying on transitions without a reduced-motion path.
- Forced colors or contrast:
  - No runtime behavior changes. Future fixes should preserve focus visibility and control contrast in every supported theme root.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Future fixes should check fixed bottom-left placement, viewport height, safe area, and small-screen overlap against the `VDS-0070` viewport matrix.
- Theme coverage:
  - The supported docs theme roots remain `graphite-light`, `graphite-dark`, `carbon-light`, `carbon-dark`, `navy-light`, `navy-dark`, `slate-light`, and `slate-dark`.

## 8. Validation Plan

- Static audit:
  - `node --check js/theme-switcher.js`
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:dist`
  - `pnpm run audit:consumers`
- Theme switcher/docs scan:
  - Record theme root matrix and radio coverage.
  - Record index stylesheet, script, default theme, and favicon evidence.
  - Record theme switcher JS behavior.
  - Record theme switcher CSS behavior.
  - Record raw-doc theme coverage and omissions.
  - Record future-work routing.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only. If it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Planning sanity checks:
  - Confirm master map, feature plan, and theme switcher artifact agree that no docs shell, JS, CSS, raw docs, source themes, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1150`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting docs theme behavior after the four per-theme audits.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later docs theme guidance changes may need migration notes if public theme-loading guidance changes.

## 10. Risks

- Docs examples are not aligned with the current four-theme/eight-root matrix.
- The docs shell theme switcher lacks accessibility and resilient runtime behavior.
- Docs shell all-theme loading differs from package-consumer guidance.
- `:has()` use in `css/theme-switcher.css` should be reviewed against the browser support matrix before relying on it for essential state styling.
- Favicon is fixed to the Slate light identity asset and does not follow the active docs theme.
- A saved invalid theme value can set an unsupported `data-theme` until later validation logic is approved.
- The `300ms` saved-theme timeout can create theme or radio state lag before the saved theme is applied.

## 11. Open Questions

- Should theme switcher accessibility/resilience fixes happen before the docs rewrite, or as part of the docs rewrite implementation? Deferred to later approved docs/runtime work.
- Should the docs favicon switch with theme roots or remain a fixed identity marker? Deferred to identity and docs shell work.
- Should the theme switcher use a generated theme matrix from docs metadata or a local hard-coded matrix? Deferred to docs indexing and docs shell work.
- Should raw docs mention all four theme families consistently, or should theme guidance be centralized in a single rewritten theme page? Deferred to documentation rewrite work.

## 12. Approval

- Requested on: `2026-05-24`
- Approved by: user
- Approved on: `2026-05-24`

## 13. Implementation Log

- `2026-05-24`: Created this plan file.
- `2026-05-24`: Added theme switcher/docs behavior artifact.
- `2026-05-24`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1140` and set next recommended item to `VDS-1150`.
- `2026-05-24`: Ran/read a read-only theme switcher/docs scan. Summary: `index.html` defaults to `data-theme="graphite-light"`; loads `43` CSS stylesheets, including all four source theme files; exposes `8` theme radio values matching real theme roots; loads `6` browser scripts with `js/theme-switcher.js` first; uses a fixed `vlah-favicon-slate-light.svg` favicon; `js/theme-switcher.js` has `35` lines, uses localStorage key `vg-theme`, applies saved theme after `300ms`, and lacks saved-theme validation, storage guards, null guards, keyboard handling, `aria-expanded`, focus return, and system color-scheme handling; `css/theme-switcher.css` has `88` lines and `9` selector groups, uses fixed positioning, hard-coded z-index values, transitions, and `:has(...)`, and lacks focus-visible, reduced-motion, and mobile viewport rules; `37` raw docs exist, `27` mention at least one theme name, no raw doc mentions all four themes, only `2` docs mention Graphite by name, `25` docs mention Slate/Navy/Carbon but not Graphite in the current word-boundary scan, and only `vds-index.doc.html` mentions `data-theme` and the theme switcher.

## 14. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `node --check js/theme-switcher.js` passed.
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed: generated artifacts are fresh with `80` CSS files checked.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-1140` forbids write/regeneration commands.
  - Read-only theme switcher/docs scan completed.
  - VDS-1140 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1140-theme-switcher-and-docs-theme-behavior.md`
  - `@24vlh/vds/docs/planning/tokens/vds-theme-switcher-docs-theme-behavior.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None planned; identity token and SVG palette audit continues in `VDS-1150`.
