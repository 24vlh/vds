# VDS-1060 Focus Ring and Interaction State Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-1060`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1060-focus-ring-and-interaction-state-audit.md`

## 1. Goal

Create the focus ring and interaction-state audit for VDS before z-index, radius/border/shadow, and theme architecture work continues. This item records how primitive focus tokens, theme focus/hover/active tokens, `base.css`, component focus styles, ARIA/native state selectors, raw docs, forced-colors coverage, and public state classes currently work.

## 2. Scope

### In scope

- Record focus and interaction-state source roles across primitives, themes, base, component CSS, and raw docs.
- Record primitive and theme focus token evidence.
- Record focus, hover, active, disabled, readonly, invalid/error, selected/current, loading/busy, pressed, and expanded selector evidence.
- Record focus token references, focus-related declarations, and forced-colors coverage.
- Record state-like public and candidate-public class evidence from the selector inventory.
- Record raw-doc interaction-state coverage.
- Add a focus ring and interaction-state audit artifact for later token cleanup, component audits, accessibility checks, forced-colors review, migration notes, and release verification.
- Update the master feature map so the token/theme track continues to `VDS-1070`.

### Out of scope

- Changing CSS, token names, token values, docs demos, generated `dist`, package metadata, scripts, workflows, selector inventory, consumer reports, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing focus styles, forced-colors behavior, ARIA/native state selectors, docs examples, or generated docs metadata.
- Running contrast tooling, visual, browser, screenshot, or accessibility smoke checks.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/tokens/vds-primitives-token-taxonomy-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
  - `@24vlh/vds/docs/planning/tokens/vds-motion-token-reduced-motion-audit.md`
  - `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
  - `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Repo files:
  - `@24vlh/vds/src/primitives.css`
  - `@24vlh/vds/src/base.css`
  - `@24vlh/vds/src/themes/*.css`
  - `@24vlh/vds/src/components/*.css`
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/doc-raw/*.doc.html`
- Current audit results:
  - `pnpm run audit:tokens` passes.
  - `pnpm run audit` passes.
  - `pnpm run audit:consumers` passes.
  - `pnpm run audit:dist` passes.
- Standards baseline:
  - WCAG 2.2 AA from `VDS-0060`.
  - WAI-ARIA APG as the widget behavior reference.

## 4. Current Behavior Snapshot

- Source roles:
  - `@24vlh/vds/src/primitives.css` owns focus primitives: `--focus-ring-width` and `--focus-ring-offset`.
  - Theme files own `--focus-ring-color` plus hover/active role tokens.
  - `@24vlh/vds/src/base.css` owns global `:focus`, `:focus-visible`, focus suppression for pointer focus, link hover/active color, selection, and current forced-colors baseline.
  - Component CSS owns local focus rendering, hover, active, selected/current, disabled, readonly, invalid/error, loading/busy, pressed, expanded, and ARIA/native state styling.
  - Consumer/application code remains responsible for keyboard behavior, focus movement/restoration, ARIA state synchronization, modal trapping, and live updates.
- Source surface:
  - `43` CSS files total.
  - `26` CSS files include focus or interaction-state selectors.
  - Focus primitives: `2`.
  - `--focus-ring-color` appears `2` times in each theme file, `8` total across graphite, carbon, navy, and slate.
  - Each theme has `44` hover token definitions, `2` active token definitions, `2` loading token definitions, and no disabled/selected theme tokens by name.
- Selector evidence:
  - `:focus-visible`: `94` selectors in `16` files.
  - `:focus-within`: `12` selectors in `5` files.
  - broad focus selectors: `115` selectors in `18` files.
  - `:hover`: `132` selectors in `20` files.
  - `:active`: `38` selectors in `8` files.
  - disabled selectors: `129` in `14` files.
  - readonly selectors: `2` in `1` file.
  - invalid/error selectors: `37` in `7` files.
  - selected selectors: `18` in `7` files.
  - active/current class or ARIA selectors: `58` in `11` files.
  - loading/busy selectors: `18` in `7` files.
  - pressed selectors: `3` in `3` files.
  - expanded selectors: `2` in `1` file.
- Declaration and token evidence:
  - `outline`: `56` declarations in `17` files.
  - `outline-offset`: `33` declarations in `10` files.
  - `box-shadow`: `164` declarations in `26` files.
  - `opacity`: `135` declarations in `23` files.
  - `cursor`: `107` declarations in `20` files.
  - `pointer-events`: `74` declarations in `18` files.
  - `focus-ring-color`: `94` references in `15` files.
  - `focus-ring-width`: `27` references in `8` files.
  - `focus-ring-offset`: `24` references in `6` files.
  - Forced-colors blocks: `2` in `2` files, `base.css` and `accordion.css`.
- Public class evidence:
  - Selector inventory has `108` state-like classes.
  - `73` are `public`.
  - `35` are `candidate-public`.
  - Notable groups: active/current `23`, disabled `32`, error/invalid-adjacent `30`, selected `7`, loading `7`, expanded `4`, readonly `1`, focus `1`, and hover `3`.
- Raw-doc evidence:
  - Focus mentions: `162` across `25` docs.
  - Hover mentions: `41` across `13` docs.
  - Active mentions: `421` across `32` docs, broad because docs also discuss active themes.
  - Selected mentions: `164` across `12` docs.
  - Disabled mentions: `138` across `15` docs.
  - Loading mentions: `111` across `13` docs.
  - Readonly mentions: `15` across `2` docs.
  - Invalid mentions: `19` across `5` docs.
  - Pressed mentions: `11` across `3` docs.
  - Expanded mentions: `25` across `4` docs.
  - Current mentions: `20` across `6` docs.
  - `tabindex` mentions: `35` across `4` docs.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token name, token value, selector, theme, selector inventory, consumer report, or generated output changes.
- Treat focus primitives as the current canonical low-level width and offset tokens.
- Treat theme focus and hover/active tokens as theme-owned until theme architecture work decides otherwise.
- Treat `base.css` focus behavior as the current global focus baseline.
- Treat component-local focus, state, ARIA/native, and loading/busy styling as component-owned until later component audits decide whether normalization is required.
- Treat forced-colors gaps as audit findings only. Later accessibility/theme/component items decide where high-contrast fixes are needed.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.
- If future focus/interaction work changes source CSS while generated output is out of scope, its implementation log must record `dist refresh pending`.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/tokens/vds-focus-ring-interaction-state-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1060` and set next recommended item to `VDS-1070`.
- Do not change README, raw docs, docs shell, docs demos, generated docs indexes, or agents docs output in this item.

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None in this item.
- Breaking changes:
  - None in CSS, tokens, custom property names, package import paths, generated `dist`, workflows, docs routes, selector inventory, consumer reports, or package version fields.
- Migration notes:
  - None for package consumers in this item. Later focus, forced-colors, hover, active, disabled, readonly, invalid/error, selected/current, loading/busy, pressed, or expanded state changes must be migration-planned if they affect public, candidate-public, legacy-compatible, or consumer-overridden surfaces.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Future cleanup must preserve visible keyboard focus and APG-aligned state semantics.
- Semantics or ARIA:
  - No runtime behavior changes. CSS state styling must remain separate from consumer responsibility for ARIA state synchronization.
- Reduced motion:
  - No runtime behavior changes. Loading and busy states must coordinate with `VDS-1050` before any animation cleanup.
- Forced colors or contrast:
  - No runtime behavior changes. Forced-colors gaps and focus-ring contrast risks are recorded for later accessibility/theme work.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Future focus cleanup must preserve visible focus and hit targets at responsive breakpoints.
- Theme coverage:
  - No theme changes. Focus and state audit findings must preserve token naming boundaries from `VDS-1020` and contrast expectations from `VDS-0080`.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:consumers`
  - `pnpm run audit:dist`
- Focus/interaction audit scan:
  - Record primitive and theme focus token evidence.
  - Record focus, hover, active, disabled, readonly, invalid, selected/current, loading/busy, pressed, and expanded selector counts.
  - Record focus token references and declaration counts.
  - Record forced-colors coverage.
  - Record state-like public/candidate-public class inventory.
  - Record raw-doc interaction-state coverage.
  - Record future-work routing.
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, and focus/interaction audit artifact agree that no source CSS, token names, docs, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1070`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting focus rings and interaction states before z-index, radius/border/shadow, and theme architecture work.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later focus token, state class, ARIA/native selector, forced-colors, or component interaction changes may require migration notes.

## 10. Risks

- Focus rendering is split between global outlines and component-local `box-shadow` or inset treatments.
- Several component focus rules set `outline: none` and replace it with shadows, so forced-colors and high-contrast behavior must be reviewed before changes.
- Forced-colors coverage is thin and must be treated as an audit finding, not fixed in `VDS-1060`.
- Disabled, `aria-disabled`, readonly, invalid/error, selected, active, current, loading, busy, pressed, and expanded states are compatibility-sensitive when exposed through public or candidate-public classes.
- Active/current/selected terminology overlaps across navigation, tabs, command, flows, Android shell, and content blocks.
- Loading/busy state cleanup overlaps with `VDS-1050` motion findings.

## 11. Open Questions

- Should component focus rendering converge on outline, box-shadow, inset shadow, or a mixed policy by component type? Deferred to focus cleanup and theme contrast work.
- Which components need forced-colors fixes beyond `base.css` and `accordion.css`? Deferred to component audits and accessibility smoke work.
- Should active/current/selected naming be normalized across navigation, tabs, command, and content surfaces? Deferred to component cleanup and migration planning.
- Should disabled/read-only state tokens become theme-level roles? Deferred to theme architecture and semantic token work.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added focus ring and interaction-state audit artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1060` and set next recommended item to `VDS-1070`.
- `2026-05-23`: Ran/read a read-only focus/interaction audit scan. Summary: `43` CSS files total; `26` include focus or interaction-state selectors; focus primitives count `2`; `--focus-ring-color` appears `2` times in each theme file; each theme has `44` hover token definitions, `2` active token definitions, `2` loading token definitions, and no disabled/selected theme tokens by name; selector evidence includes `94` `:focus-visible`, `12` `:focus-within`, `115` broad focus, `132` hover, `38` active, `129` disabled, `2` readonly, `37` invalid/error, `18` selected, `58` active/current, `18` loading/busy, `3` pressed, and `2` expanded selectors; declaration evidence includes `56` outline, `33` outline-offset, `164` box-shadow, `135` opacity, `107` cursor, and `74` pointer-events declarations; focus token references are `focus-ring-color` `94`, `focus-ring-width` `27`, and `focus-ring-offset` `24`; forced-colors blocks count `2` in `base.css` and `accordion.css`; selector inventory has `108` state-like classes with `73` public and `35` candidate-public.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - `pnpm run audit:dist` passed.
  - Read-only focus/interaction audit scan completed.
  - VDS-1060 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1060-focus-ring-and-interaction-state-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-focus-ring-interaction-state-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; z-index and overlay stack audit continues in `VDS-1070`.
