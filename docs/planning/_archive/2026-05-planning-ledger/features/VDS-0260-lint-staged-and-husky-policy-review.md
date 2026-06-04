# VDS-0260 Lint-Staged and Husky Policy Review

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-23`
- Master item: `VDS-0260`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-0260-lint-staged-and-husky-policy-review.md`

## 1. Goal

Replace the unsafe pre-commit build hook with targeted repo-local validation for staged VDS source CSS, and record the Husky/lint-staged policy for future tooling work.

## 2. Scope

### In scope

- Record current Husky and lint-staged behavior.
- Replace the `src/**/*.css` lint-staged task so it no longer runs the guarded full build.
- Keep pre-commit validation check-only, repo-local, and deterministic.
- Add a hook-policy artifact for later hook, audit, generated artifact, quality, and release work.
- Update the master feature map so the library structure track continues to `VDS-0270`.

### Out of scope

- Changing source CSS, runtime behavior, docs demos, generated `dist`, generated reports, workflows, lockfiles, package version, selectors, or tokens.
- Changing `.husky/pre-commit`, `scripts.lint-staged`, or `scripts.prepare`.
- Adding raw-doc, planning-doc, JavaScript, external consumer, formatting, package smoke, visual, accessibility, responsive, or generated-artifact checks to lint-staged.
- Running `pnpm run build`, `pnpm run build:prod`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/pnpm-node/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/architecture/vds-build-script-modernization-plan.md`
  - `@24vlh/vds/docs/planning/architecture/vds-audit-script-modernization-plan.md`
  - `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`
  - `@24vlh/vds/docs/planning/architecture/vds-package-metadata-and-exports-review.md`
- Repo files:
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/.husky/pre-commit`
  - `@24vlh/vds/.husky/_/h`
  - `@24vlh/vds/.github/workflows/npm-publish.yml`
  - `@24vlh/vds/static/js/validate-css.js`
  - `@24vlh/vds/static/js/find-bogus-classes.js`
  - `@24vlh/vds/static/js/validate-used-tokens.js`
  - `@24vlh/vds/static/js/generate-selector-inventory.js`
- Current audit results:
  - `pnpm run audit` passes.
  - `pnpm run audit:consumers` passes.
  - All `static/js/*.js` files pass `node --check`.
- Legacy or consumer context reviewed:
  - `lint-staged` package docs bundled in `node_modules`.
  - `husky` package metadata bundled in `node_modules`.

## 4. Current Behavior Snapshot

- Package scripts:
  - `lint-staged`: `lint-staged`.
  - `prepare`: `husky`.
  - `build`: `NODE_ENV=development node static/js/build.js`.
  - `build:prod`: `NODE_ENV=production node static/js/build.js`.
- Hook behavior:
  - `@24vlh/vds/.husky/pre-commit` runs `pnpm run lint-staged`.
  - Husky is `9.1.7`.
  - lint-staged is `16.2.7`.
  - Husky can be disabled with `HUSKY=0` through its generated runner.
- Previous lint-staged behavior:
  - `src/**/*.css` ran `pnpm run build`.
  - The build script unconditionally deletes and recreates `dist`.
  - Full build commands are guarded in the VDS router and must not be used as local hook validation.
- Package workflow context:
  - `pnpm pack --dry-run` invokes `prepare`/`husky`.
  - The publish workflow sanitizes package scripts before publishing, but workflow changes remain deferred.
- lint-staged behavior from bundled docs:
  - Package-level object config appends matched staged file paths to commands.
  - Function-based config can suppress appended file arguments, but existing VDS audit commands tolerate extra positional arguments.

## 5. Proposed Architecture or Change

### CSS modules, tokens, or themes

- No source CSS, token, theme, selector, or generated report changes.
- Use existing audit scripts as the staged CSS validation surface.
- Keep component audits responsible for interpreting selector, token, accessibility, responsive, and theme findings.

### Build, audit, or package surface

- Keep `scripts.lint-staged` as `lint-staged`.
- Keep `scripts.prepare` as `husky`.
- Keep `.husky/pre-commit` as `pnpm run lint-staged`.
- Replace the `src/**/*.css` lint-staged task with this ordered check-only sequence:
  - `pnpm run audit:css`
  - `pnpm run audit:tokens`
  - `pnpm run audit:classes`
  - `pnpm run audit:selectors`
- Do not add a separate lint-staged config file in this item.
- Do not run builds, write/regeneration commands, consumer scans, package smoke, visual checks, accessibility checks, responsive screenshots, or generated artifact freshness checks from lint-staged.

### Documentation or demo surface

- Add `@24vlh/vds/docs/planning/architecture/vds-lint-staged-husky-policy-review.md`.
- Add this feature plan.
- Update `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0260` and set `VDS-0270` as next.
- Do not change README, raw docs, docs shell, docs demos, or generated docs indexes in this item.

## 6. Component API and Compatibility Impact

- Existing classes preserved:
  - All runtime selectors remain unchanged.
- New classes:
  - None.
- Deprecated classes:
  - None in this item.
- Breaking changes:
  - None in runtime CSS or package consumption.
- Migration notes:
  - Developer workflow note only: staged source CSS now runs targeted audits instead of the guarded full build.

## 7. Accessibility, Responsive, and Theme Requirements

- Keyboard and focus:
  - No runtime behavior changes.
- Semantics or ARIA:
  - No runtime behavior changes.
- Reduced motion:
  - No runtime behavior changes.
- Forced colors or contrast:
  - No runtime behavior changes.
- Mobile/adaptive behavior:
  - No runtime behavior changes.
- Theme coverage:
  - No runtime behavior changes.

## 8. Validation Plan

- Static audit:
  - `pnpm run audit`
  - `pnpm run audit:consumers`
- Script syntax checks:
  - `node --check` for every `static/js/*.js` file.
- Hook policy checks:
  - `pnpm run lint-staged -- --diff=HEAD --debug`
  - Confirm by inspection that `package.json` lint-staged config no longer references `pnpm run build`.
- Hook inventory scan:
  - Read-only scan of package scripts, lint-staged config, Husky hook files, bundled package versions, and workflow references.
- Class/token/doc audit:
  - Covered by aggregate `pnpm run audit`.
- Responsive/manual checks:
  - Not required; no runtime UI changes.
- Visual regression or screenshot checks:
  - Not required; no runtime UI changes.
- Consumer smoke checks:
  - Static consumer compatibility freshness check only.
- Planning sanity checks:
  - Confirm master map, feature plan, and hook-policy artifact agree that `.husky/pre-commit` still runs lint-staged.
  - Confirm the next recommended item is `VDS-0270`.

## 9. Rollout and Version Notes

- Release target:
  - Supports the `1.0.0` stable line by removing a local hook conflict with the source/dist and build guardrail policies.
- Version bump impact:
  - None.
- Dist or package metadata impact:
  - Package metadata changes only in the development lint-staged configuration; no package entrypoint, package version, or published file policy changes.
- Migration guide impact:
  - None for package consumers.

## 10. Risks

- Targeted lint-staged checks are safer for local commits but do not prove generated `dist` freshness.
- `audit:classes` and `audit:selectors` inspect raw docs and selector inventory, so a source CSS change can still fail because of documentation or planning inventory state.
- `audit:selectors` is check-only and can fail when source selectors change before inventory refresh is approved.
- Package-level lint-staged config still appends staged file paths, but current audit commands ignore extra positional arguments.
- Raw docs, JavaScript scripts, planning files, and generated artifact freshness remain outside pre-commit coverage for now.

## 11. Open Questions

- Should VDS later move lint-staged config out of `package.json` into a JS config to suppress filename arguments explicitly? Deferred to later tooling work if the current config becomes limiting.
- Should raw docs or static JS receive their own lint-staged checks? Deferred to broader audit coverage work.
- Should generated artifact freshness join hooks or stay release-only? Deferred to `VDS-0310`.
- Should `prepare`/Husky behavior change for package dry runs or CI? Deferred to workflow and release items.

## 12. Approval

- Requested on: `2026-05-23`
- Approved by: user
- Approved on: `2026-05-23`

## 13. Implementation Log

- `2026-05-23`: Created this plan file.
- `2026-05-23`: Added hook-policy artifact.
- `2026-05-23`: Updated `@24vlh/vds/package.json` lint-staged config so `src/**/*.css` runs targeted audit checks instead of `pnpm run build`.
- `2026-05-23`: Left `@24vlh/vds/.husky/pre-commit`, `scripts.lint-staged`, and `scripts.prepare` unchanged.
- `2026-05-23`: Updated `@24vlh/vds/docs/planning/master-feature-map.md` to close `VDS-0260` and set next recommended item to `VDS-0270`.
- `2026-05-23`: Ran/read a read-only Husky/lint-staged inventory scan. Summary: `.husky/pre-commit` runs `pnpm run lint-staged`; package scripts keep `lint-staged` and `prepare`; Husky is `9.1.7`; lint-staged is `16.2.7`; publish workflow still runs `pnpm run build:prod` and sanitizes scripts in the publish directory; generated Husky runner supports `HUSKY=0`.
- `2026-05-23`: Ran `pnpm exec lint-staged --diff=HEAD --debug`; lint-staged loaded the package config with the new targeted audit sequence and found no matching staged `src/**/*.css` files in the current diff.

## 14. Post-Implementation Update

- Final status: done
- Validation run:
  - `pnpm run audit` passed.
  - `pnpm run audit:consumers` passed.
  - `node --check` passed for all `static/js/*.js` files.
  - `pnpm run lint-staged -- --diff=HEAD --debug` completed without invoking `pnpm run build`.
  - `pnpm exec lint-staged --diff=HEAD --debug` loaded the package config and confirmed the `src/**/*.css` task list is `audit:css`, `audit:tokens`, `audit:classes`, and `audit:selectors`.
  - Confirmed `package.json` lint-staged config no longer references `pnpm run build`.
  - VDS-0260 markdown sanity checks passed.
  - `git diff --check` passed for changed tracked files and planning files.
- Files changed:
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/docs/planning/features/VDS-0260-lint-staged-and-husky-policy-review.md`
  - `@24vlh/vds/docs/planning/architecture/vds-lint-staged-husky-policy-review.md`
  - `@24vlh/vds/docs/planning/master-feature-map.md`
- Follow-up items added back to `@24vlh/vds/docs/planning/master-feature-map.md`:
  - None; docs indexing pipeline review continues in `VDS-0270`.
