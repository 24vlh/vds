# VDS-1020 Semantic Token Naming Cleanup Plan

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-1020`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1020-semantic-token-naming-cleanup-plan.md`

## 1. Goal

Create the semantic token naming cleanup plan for VDS before typography, spacing, theme, and component token work continues. This item classifies the current token naming layers, records naming risks, and defines how future token cleanup must separate primitive scales, theme roles, semantic state tokens, component aliases, and docs/demo-only token usage.

## 2. Scope

### In scope

- Classify current token naming layers across primitives, themes, components, and docs/demo examples.
- Record source-wide token counts, theme naming groups, component-local alias evidence, and docs/demo token mismatches.
- Define cleanup rules for semantic token naming work.
- Add a token naming artifact for later semantic token cleanup, theme architecture, docs token cleanup, component alias cleanup, migration notes, and release verification.
- Update the master feature map so the token/theme track continues to `VDS-1030`.

### Out of scope

- Changing CSS, token names, token values, themes, raw docs, generated `dist`, package metadata, scripts, workflows, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Renaming, removing, adding, aliasing, or deprecating tokens.
- Fixing docs/demo token mismatches.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/tokens/vds-primitives-token-taxonomy-audit.md`
  - `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
  - `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
- Repo files:
  - `@24vlh/vds/src/primitives.css`
  - `@24vlh/vds/src/themes/*.css`
  - `@24vlh/vds/src/components/*.css`
  - `@24vlh/vds/src/**/*.css`
  - `@24vlh/vds/doc-raw/*.doc.html`
  - `@24vlh/vds/index.html`
- Current audit results:
  - `pnpm run audit:tokens` passes.
  - `pnpm run audit` passes.
  - `pnpm run audit:consumers` passes.
  - `pnpm run audit:dist` passes.
- Legacy or consumer context reviewed:
  - No consumer-facing CSS, package output, or token compatibility behavior changes happen in this planning item.

## 4. Current Behavior Snapshot

- Source token surface:
  - Source CSS files: `43`.
  - Unique custom property names: `934`.
  - Custom property declarations: `3097`.
  - `var(...)` references: `6749`.
- Primitive evidence from `VDS-1010`:
  - `@24vlh/vds/src/primitives.css` defines `130` unique primitive tokens.
  - `118` primitive tokens are referenced somewhere in source.
  - `12` primitive tokens are currently unreferenced.
  - Primitive tokens contain no color or semantic-state token layer.
- Theme evidence:
  - Theme files: `4`.
  - Each theme file has `416` custom property declarations and `208` unique token names.
  - Theme token-name parity is complete across graphite, carbon, navy, and slate.
  - Theme naming groups include `70` `color-*` tokens, `30` `semantic-*` tokens, and `21` state-soft alias tokens.
- Component evidence:
  - Component files: `33`.
  - Component files define `1277` custom properties.
  - Component files define `581` unique component-scoped token names.
  - Large local alias surfaces include android, content, command, chart, hero, flow, accordion, avatar, action, and inbox.
  - `8` component-defined token names are shared across multiple component files, including `active`, `interactive`, `loading`, `success`, `warning`, and `info`.
- Docs/demo evidence:
  - Raw docs plus `index.html` contain `86` unique custom property definitions.
  - Raw docs plus `index.html` contain `138` unique `var(...)` references.
  - Docs define `color-brand` and `line-height-base` outside current source definitions.
  - Docs reference `bp-lg`, `bp-sm`, `color-code-bg`, `color-text-strong`, `doc-collapsed-height`, and `opacity-disabled` without source definitions.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token name, token value, theme, selector, or generated output changes.
- Define token layers for future audits:
  - primitive scale tokens from `@24vlh/vds/src/primitives.css`;
  - theme role tokens, including `--color-*`, `--semantic-*`, focus, overlay, link, shadow, code, table, and selection tokens;
  - state-soft aliases such as `--success-soft-*`, `--warning-soft-*`, `--danger-soft-*`, `--info-soft-*`, and `--accent-soft-*`;
  - theme-scoped component tokens such as button, table, hero, section, flow, doc, figure, blockquote, footnote, and slider tokens;
  - component-local aliases from `@24vlh/vds/src/components/*.css`;
  - docs/demo token definitions and references from raw docs.
- Define cleanup rules:
  - primitive tokens remain low-level scale tokens, not semantic color or component aliases;
  - `--color-*` is currently a role/palette hybrid and must be classified before any rename;
  - `--semantic-*` is the preferred state-role direction, but no state-soft alias is removed without migration planning;
  - component-local aliases must not be promoted to global semantic tokens without an approved token architecture item;
  - unscoped names like `--active`, `--success`, `--warning`, `--info`, `--danger`, and `--loading` are naming risks, not approved removals.
- Require any token rename, removal, or compatibility alias to go through later approved cleanup work with source evidence, docs impact, theme impact, consumer override risk, migration notes, and `dist refresh pending` if generated output is out of scope.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.
- If future token work changes source CSS while generated output is out of scope, its implementation log must record `dist refresh pending`.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1020` and set next recommended item to `VDS-1030`.
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
  - None for package consumers in this item. Later token renames/removals must be migration-planned if they affect public, candidate-public, legacy-compatible, or consumer-overridden token surfaces.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes. Focus token naming remains part of later focus/interaction work.
- Semantics or ARIA:
  - No runtime behavior changes.
- Reduced motion:
  - No runtime behavior changes.
- Forced colors or contrast:
  - No runtime behavior changes. Theme role and state token naming must preserve the WCAG-backed contrast baseline in later cleanup work.
- Mobile/adaptive behavior:
  - No runtime behavior changes.
- Theme coverage:
  - Theme parity is recorded as evidence. Later theme work must keep graphite, carbon, navy, and slate aligned across light and dark roots.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:consumers`
  - `pnpm run audit:dist`
- Semantic token naming scan:
  - Record source-wide token counts.
  - Record theme role and semantic-state groups.
  - Record component-local alias counts and shared unscoped names.
  - Record docs/demo token definitions and unresolved references.
  - Record naming risks and follow-up routing.
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, and token naming artifact agree that no source CSS, token names, docs, generated output, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1030`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by documenting semantic token naming boundaries before theme and component token cleanup.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later token renames, removals, and aliases may require migration notes.

## 10. Risks

- `--color-*` currently mixes palette-like names, role names, brand names, state names, and component-adjacent names.
- `--semantic-*` overlaps with state-soft aliases, especially for success, info, warning, danger, and error.
- Theme files contain some component-scoped tokens, which can blur the line between global theme roles and component implementation aliases.
- Component files contain many local custom properties and a few unscoped shared names that could collide or confuse future cleanup.
- Docs/demo examples define and reference some tokens outside the current source token surface.
- Token names may be used by consumers as override surfaces even when they are not formally documented.

## 11. Open Questions

- Should `--color-*` be split into raw palette, role, and state namespaces later? Deferred to semantic token cleanup and theme architecture work.
- Should state-soft aliases become compatibility aliases for `--semantic-*` tokens? Deferred to migration planning.
- Should theme files keep component-specific tokens or move them closer to component modules? Deferred to theme architecture and component audit waves.
- Should docs/demo token definitions be normalized or removed? Deferred to docs token cleanup and documentation rewrite work.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added semantic token naming cleanup artifact.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1020` and set next recommended item to `VDS-1030`.
- `2026-05-23`: Ran/read a read-only semantic token naming scan. Summary: source CSS contains `934` unique custom property names, `3097` declarations, and `6749` `var(...)` references; themes maintain complete token-name parity across four theme files with `208` unique names each; theme naming includes `70` `color-*`, `30` `semantic-*`, and `21` state-soft alias tokens; component files define `1277` custom properties and `581` unique component-scoped token names; docs plus `index.html` define `86` unique custom properties and reference `138` unique `var(...)` tokens, including `6` references without source definitions.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - `pnpm run audit:dist` passed.
  - Read-only semantic token naming scan completed.
  - VDS-1020 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1020-semantic-token-naming-cleanup-plan.md`
  - `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; typography scale and rhythm audit continues in `VDS-1030`.
