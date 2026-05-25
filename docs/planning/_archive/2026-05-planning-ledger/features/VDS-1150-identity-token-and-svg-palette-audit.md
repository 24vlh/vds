# VDS-1150 Identity Token and SVG Palette Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-1150`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-1150-identity-token-and-svg-palette-audit.md`

## 1. Goal

Create the identity token and SVG palette audit that closes the VDS tokens/themes track. This item records the current inline SVG identity CSS contract, static SVG asset matrix, theme logo-token coverage, palette-file evidence, docs/package mismatches, and the rules later identity/logo fixes must follow.

## 2. Scope

### In scope

- Record `src/identity.css` token, selector, class, and data-root evidence.
- Record theme `--color-logo-*` coverage across all eight theme roots.
- Record static SVG asset matrix completeness and SVG accessibility/color evidence.
- Record palette-file evidence and palette/theme mismatches.
- Record identity docs and package-surface mismatches.
- Add an identity audit artifact for later identity token cleanup, SVG asset policy, favicon behavior, docs rewrite, package asset decisions, migration notes, and release verification.
- Update the master feature map so `VDS-0300` closes and the next track starts at `VDS-1210`.

### Out of scope

- Changing CSS, SVG files, palette text files, raw docs, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Fixing identity CSS, token values, SVG palette alignment, package asset policy, favicon behavior, docs examples, visual checks, or contrast/accessibility automation.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/tokens/vds-theme-architecture-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-theme-switcher-docs-theme-behavior.md`
  - `@24vlh/vds/docs/planning/architecture/vds-package-metadata-and-exports-review.md`
  - `@24vlh/vds/docs/planning/architecture/vds-source-module-architecture-audit.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Repo files:
  - `@24vlh/vds/src/identity.css`
  - `@24vlh/vds/src/themes/*.css`
  - `@24vlh/vds/svg/*.svg`
  - `@24vlh/vds/static/SVG Palette - *.txt`
  - `@24vlh/vds/doc-raw/vds-identity.doc.html`
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/README.md`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

- `src/identity.css` evidence:
  - `354` lines by `wc -l`.
  - `19` unique custom property definitions, no duplicate definitions.
  - `60` `var(...)` references and no missing referenced token definitions in source.
  - `59` selector blocks.
  - `37` identity classes in selector inventory: `31` public and `6` candidate-public.
  - Data root evidence: `[data-vds-identity]` and `.vds-identity`.
  - Identity color token references: `--color-logo-ink`, `--color-logo-accent`, `--color-logo-mono`, `--color-logo-footer-ink`, `--color-logo-footer-accent`, `--color-logo-ink-inverse`, and `--color-logo-accent-inverse`.
- Theme logo-token evidence:
  - All `8` theme roots define the full `--color-logo-*` token set.
  - Graphite light uses `--color-logo-accent: #e31824`, while Graphite brand/palette accent is `#1371A3`.
  - Slate theme tokens use `#2A2F33/#997939` for light brand/logo ink/accent, while static Slate SVG/palette evidence uses `#1C2A38/#C6A667`.
- Static asset evidence:
  - `49` SVG files total: `1` KeepExec logo, `8` VLAH favicons, `16` VLAH horizontal logo variants, `16` VLAH mark variants, and `8` VLAH mask variants.
  - The expected VLAH SVG matrix is complete for four themes, light/dark roots, horizontal/mark shapes, color/mono modes, masks, and favicons.
  - All SVG files use hard-coded hex values; none use `currentColor` or CSS variables.
  - `48` VLAH SVGs are `aria-hidden="true"` with `role="img"`; `keepexec-logo.svg` has `role="img"` and `aria-label`.
- Palette/docs/package evidence:
  - Four palette files exist: Carbon, Graphite, Navy, Slate; each has `56` hex values.
  - `doc-raw/vds-identity.doc.html` has `1112` lines and documents logo tokens, variants, static assets, accessibility, clearspace, mono, inverse, and favicon usage.
  - Current package `files` includes only `dist`, so `svg/` and `static/` are not published package surfaces even though the identity doc describes packaged logo assets.
  - `dist/identity.css` and `dist/identity.min.css` exist as top-level generated package-facing CSS outputs.

## 5. Proposed Architecture or Change

### Identity CSS, tokens, and assets

- No source CSS, token, SVG, palette, raw-doc, package, or generated-output changes.
- Treat `src/identity.css` as the inline SVG logo CSS contract.
- Treat theme files as owners of `--color-logo-*` values.
- Treat static SVG files under `svg/` as hard-coded reference assets that do not inherit theme tokens.
- Treat palette text files under `static/` as audit/reference evidence, not runtime source of truth.
- Record SVG/package/docs mismatches for later approved asset policy and docs work.

### Build, audit, or package surface

- Do not change package scripts, build scripts, generated reports, generated `dist`, package metadata, workflows, selector inventory, consumer reports, or release version fields.
- Use `pnpm run audit:dist` only as validation that no generated output changed in this planning item.
- Keep package asset publishing decisions deferred to later package/release work.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/tokens/vds-identity-token-svg-palette-audit.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1150`, mark `VDS-0300` done, and set next recommended item to `VDS-1210`.
- Do not change README, raw docs, docs shell, docs demos, generated docs indexes, or agents docs output in this item.

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None in this item.
- Breaking changes:
  - None in CSS, tokens, theme roots, SVG filenames, SVG contents, docs examples, package fields, generated `dist`, workflows, selector inventory, consumer reports, or package version fields.
- Migration notes:
  - None for package consumers in this item. Later identity token, SVG asset, package asset, or docs guidance changes may need migration notes if they affect public, candidate-public, legacy-compatible, or consumer-used surfaces.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes.
- Semantics or ARIA:
  - No runtime behavior changes. Future SVG asset work must classify decorative versus informative SVG usage because current VLAH SVGs are hidden while the KeepExec SVG has an accessible label.
- Reduced motion:
  - Not applicable; no animation changes.
- Forced colors or contrast:
  - No runtime behavior changes. Future identity work must review logo ink/accent, mono, inverse, footer, favicon, and mask usage against WCAG-backed visibility expectations.
- Mobile/adaptive behavior:
  - No runtime behavior changes. Future identity work must preserve minimum logo sizes and clearspace across the `VDS-0070` viewport matrix.
- Theme coverage:
  - All eight theme roots must continue to define the full `--color-logo-*` token set unless a later approved theme architecture item changes the matrix.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit:tokens`
  - `pnpm run audit`
  - `pnpm run audit:dist`
  - `pnpm run audit:consumers`
- Identity/SVG scan:
  - Record identity CSS token, selector, class, and data-root counts.
  - Record theme `--color-logo-*` coverage across all roots.
  - Record static SVG asset matrix completeness.
  - Record SVG accessibility, hard-coded hex, `currentColor`, and CSS-variable evidence.
  - Record palette-file counts and palette/theme mismatches.
  - Record docs/package mismatch evidence.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only. If it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Planning sanity checks:
  - Confirm master map, feature plan, and identity artifact agree that no CSS, SVG, palette, docs, generated output, selector inventory, consumer report, or runtime CSS changed.
  - Confirm the next recommended item is `VDS-1210`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by closing the token/theme audit track and documenting identity/SVG risks before base layer work begins.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - None.
- Migration guide impact:
  - None in this item. Later identity/SVG/package asset decisions may require migration notes.

## 10. Risks

- Static SVG palette values can drift from current theme tokens because SVGs are hard-coded.
- Graphite light logo accent differs from Graphite brand/palette accent.
- Slate theme token values differ from static Slate SVG and palette-file evidence.
- Raw docs describe packaged logo assets, but the current package publishes only `dist`.
- VLAH static SVGs are marked `aria-hidden` while still declaring `role="img"`; later accessibility review should classify intended usage.
- Identity classes are public/candidate-public compatibility surfaces and must not be renamed or removed casually.

## 11. Open Questions

- Should static SVG assets remain hard-coded, or should a later item generate them from theme tokens? Deferred to SVG asset policy work.
- Should `svg/` and palette files become package-published assets, or should docs stop describing them as packaged? Deferred to package metadata/release work.
- Should Graphite and Slate palette mismatches be fixed in theme tokens, static SVG files, palette reference files, or docs? Deferred to later approved identity/theme cleanup.
- Should favicon behavior become theme-aware after VDS-1140? Deferred to docs shell and identity asset work.

## 12. Approval

- Requested on: `2026-05-24`
- Approved by: user
- Approved on: `2026-05-24`

## 13. Implementation Log

- `2026-05-24`: Created this plan file.
- `2026-05-24`: Added identity token and SVG palette audit artifact.
- `2026-05-24`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-1150`, mark `VDS-0300` done, and set next recommended item to `VDS-1210`.
- `2026-05-24`: Ran/read a read-only identity/SVG scan. Summary: `src/identity.css` has `354` lines by `wc -l`, `19` unique custom property definitions, no duplicate definitions, `60` `var(...)` references, no missing referenced token definitions in source, `59` selector blocks, `37` identity classes in selector inventory, and data-root evidence for `[data-vds-identity]` and `.vds-identity`; all `8` theme roots define the full `--color-logo-*` token set; Graphite light and Slate have palette/theme review findings; `49` SVG files exist and the expected VLAH matrix is complete; all SVG files use hard-coded hex values and none use `currentColor` or CSS variables; four palette files exist and each has `56` hex values; `doc-raw/vds-identity.doc.html` has `1112` lines; current package `files` includes only `dist`, so `svg/` and `static/` are not published package surfaces.

## 14. Post-Implementation Update

- Final status: done with validation caveat
- Validation run:
  - `pnpm run audit:tokens` passed.
  - `pnpm run audit` passed.
  - `pnpm run audit:dist` passed: generated artifacts are fresh with `80` CSS files checked.
  - `pnpm run audit:consumers` failed because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale. `pnpm run consumer:scan` was not run because `VDS-1150` forbids write/regeneration commands.
  - Read-only identity/SVG scan completed.
  - VDS-1150 markdown sanity checks passed.
  - `git diff --check` passed for changed planning files.
- Files changed:
  - `@24vlh/vds/docs/planning/features/VDS-1150-identity-token-and-svg-palette-audit.md`
  - `@24vlh/vds/docs/planning/tokens/vds-identity-token-svg-palette-audit.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None planned; base layer audit continues in `VDS-1210`.
