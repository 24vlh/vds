# VDS-1010 Primitives Token Taxonomy Audit

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-1010`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1010-primitives-token-taxonomy-audit.md`

## 1. Goal

Create the first VDS token taxonomy audit for `src/primitives.css`. This item classifies primitive token families, records usage evidence, identifies taxonomy risks, and defines how later semantic token, theme, foundation, and component audits must treat primitive tokens.

## 2. Scope

### In scope

- Classify current primitive token families.
- Record primitive definition, duplicate, usage, and unused-token evidence.
- Record source-wide custom property definition/reference evidence.
- Record theme token parity context for later semantic/theme work.
- Define the primitive taxonomy contract for later token and component audits.
- Add a token taxonomy artifact for later semantic token naming, typography, spacing, motion, focus, z-index, theme architecture, foundation, migration, and release work.
- Update the master feature map so the token/theme track continues to `VDS-1020`.

### Out of scope

- Changing CSS, token names, token values, themes, component-local aliases, docs demos, generated `dist`, package metadata, scripts, workflows, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Removing unused primitive tokens or adding missing primitive tokens.
- Reclassifying semantic, theme, or component-local tokens beyond recording boundaries.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
  - `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
  - `@24vlh/vds/docs/planning/architecture/vds-generated-artifact-freshness-checker.md`
- Repo files:
  - `@24vlh/vds/src/primitives.css`
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/src/themes/*.css`
- Current audit results:
  - `pnpm run audit:tokens` passes.
  - `pnpm run audit` passes.
  - `pnpm run audit:consumers` passes.
  - `pnpm run audit:dist` passes.
- Legacy or consumer context reviewed:
  - No consumer-facing CSS or package output changes happen in this planning item.

## 4. Current Behavior Snapshot

- Primitive source:
  - `@24vlh/vds/src/primitives.css` is the canonical primitive-token source for this item.
  - It declares only `:root` custom properties and no rendering selectors beyond the root token layer.
  - It must load before base, layout, utilities, components, and themes.
- Primitive definitions:
  - `130` primitive token definitions.
  - `130` unique primitive token names.
  - Duplicate primitive definitions: `0`.
  - Color or semantic-state-like primitive tokens: `0`.
- Primitive family counts:
  - Typography: `28`.
  - Spacing/rhythm: `42`.
  - Radius/border/shadow: `16`.
  - Layout sizing: `8`.
  - Icons/avatars: `17`.
  - Motion/easing: `7`.
  - Z-index: `10`.
  - Focus/accessibility: `2`.
- Primitive usage:
  - `118` primitive tokens are referenced somewhere in `@24vlh/vds/src/**/*.css`.
  - `12` primitive tokens currently have no `var(...)` references:
    - `line-height-xs-tight`
    - `font-weight-regular`
    - `space-0`
    - `space-28`
    - `space-36`
    - `space-44`
    - `gap-xs`
    - `gap-sm`
    - `gap-xl`
    - `shadow-lg`
    - `transition-slow`
    - `ease-in-out`
- Top primitive usages:
  - `space-2`: `325`.
  - `space-3`: `253`.
  - `space-4`: `225`.
  - `space-1`: `164`.
  - `space-6`: `148`.
  - `text-xs`: `145`.
  - `text-sm`: `135`.
  - `border-width`: `112`.
  - `radius-md`: `77`.
  - `space-8`: `74`.
- Full source token surface:
  - Source CSS files: `43`.
  - Files with token activity: `41`.
  - Custom property declarations: `3097`.
  - `var(...)` references: `6749`.
- Theme parity context:
  - Theme files: `4`.
  - Each theme file has `416` custom property declarations.
  - Each theme file has `208` unique token names.
  - Theme token-name parity is currently complete across graphite, carbon, navy, and slate.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token name, token value, theme, selector, or generated output changes.
- Define primitive tokens as stable low-level scale tokens, not component aliases.
- Treat semantic colors, state tokens, theme values, and component-local aliases as separate taxonomy layers for later work.
- Treat unused primitive tokens as audit findings only, not approved removals.
- Require any future primitive token rename/removal to include token usage evidence, consumer/migration review, and a later approved cleanup item.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.
- If future token work changes source CSS while generated output is out of scope, its implementation log must record `dist refresh pending`.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/tokens/vds-primitives-token-taxonomy-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to mark the token/theme track `in-progress`, close `VDS-1010`, and set `VDS-1020` as next.
- Do not change README, raw docs, docs shell, docs demos, generated docs indexes, or agents docs output in this item.

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None in this item.
- Breaking changes:
  - None in CSS, tokens, custom property names, package import paths, generated `dist`, workflows, docs routes, or package version fields.
- Migration notes:
  - None for package consumers. Later token renames/removals must be migration-planned if they affect public, candidate-public, or legacy-compatible surfaces.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Focus primitive coverage is recorded as a taxonomy risk because only `focus-ring-width` and `focus-ring-offset` exist in `primitives.css`.
- Semantics or ARIA:
  - No runtime behavior changes.
- Reduced motion:
  - No runtime behavior changes. Motion/easing primitive coverage is recorded for later motion audit work.
- Forced colors or contrast:
  - No runtime behavior changes. Theme contrast and forced-colors work remains governed by release baselines and later theme/component audits.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Layout sizing values need later coordination with responsive and foundation audits.
- Theme coverage:
  - Theme token parity is recorded as context. Theme architecture and per-theme audits remain later approved items.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:consumers`
  - `pnpm run audit:dist`
- Primitive token scan:
  - Record primitive token count and duplicate count.
  - Record family counts.
  - Record unused primitive token list.
  - Record top primitive token usages.
  - Record source-wide custom property definition/reference counts.
  - Record theme parity summary.
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, and token taxonomy artifact agree that no source CSS, token names, generated output, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1020`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting primitive token taxonomy before semantic/theme/component token cleanup.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later primitive token changes may require migration notes.

## 10. Risks

- Primitive naming mixes raw scales, structural aliases, and component seed tokens.
- Focus/accessibility primitive coverage is thin compared with the accessibility baseline.
- Spacing scale includes rarely used values that may be intentional reserves or cleanup candidates.
- Layout widths and breakpoint-like values need coordination with responsive and foundation audits.
- Component files define many local custom properties, so primitive versus component-alias boundaries need later cleanup.
- Unused primitive tokens may still be deliberate public scale values and must not be removed casually.

## 11. Open Questions

- Should unused primitive tokens be preserved as public scale reserves or deprecated later? Deferred to later token cleanup/migration work.
- Should focus and state primitives be expanded before component audits? Deferred to focus/interaction and semantic token work.
- Should layout width tokens move toward a responsive/breakpoint taxonomy? Deferred to responsive/foundation audits.
- Should component-local aliases be standardized against primitives? Deferred to semantic token and component audit waves.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added primitives token taxonomy audit artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to mark the token/theme track `in-progress`, close `VDS-1010`, and set next recommended item to `VDS-1020`.
- `2026-05-23`: Ran/read a read-only primitive token scan. Summary: `src/primitives.css` defines `130` unique primitive tokens with `0` duplicate definitions and `0` color/semantic-like tokens; family counts are typography `28`, spacing/rhythm `42`, radius/border/shadow `16`, layout sizing `8`, icons/avatars `17`, motion/easing `7`, z-index `10`, focus/accessibility `2`; `118` primitive tokens are referenced in source and `12` are currently unreferenced; full source token surface has `3097` custom property declarations and `6749` `var(...)` references across `43` source CSS files; theme token-name parity remains complete across `4` theme files with `208` unique token names each.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - `pnpm run audit:dist` passed.
  - Read-only primitive token scan completed.
  - VDS-1010 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1010-primitives-token-taxonomy-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-primitives-token-taxonomy-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; semantic token naming cleanup continues in `VDS-1020`.
