# VDS-3020 README Rewrite From Scratch

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-25`
- Master item: `VDS-3020`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-3020-readme-rewrite-from-scratch.md`

## 1. Goal

Rewrite `@24vlh/vds/README.md` from scratch around the `VDS-3010` Start IA: overview, installation, loading model, package surfaces, compatibility, validation, and contribution workflow. This item changes README documentation only plus planning ledger files.

## 2. Scope

### In scope

- Replace the README with a current-state package and maintainer overview.
- Correct install and import examples to use `@24vlh/vds`.
- Correct package-surface wording so `dist/` is package-facing and `src/` is repo authoring source.
- Clarify that themes are loaded separately from `dist/vds.css`.
- Remove stale examples that mention non-current component paths such as `button.css` and `card.css`.
- Record package/version/dist facts from `VDS-0220`, `VDS-0230`, and `VDS-3010`.
- Update the master feature map so `VDS-0600` remains in progress, `VDS-3020` is done, and the next recommended item is `VDS-3030 Component docs template rewrite`.

### Out of scope

- Changing `package.json`, `dist`, source CSS, raw docs, docs shell HTML, loader scripts, generated docs metadata, selector inventory, consumer reports, workflows, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Writing migration guide details, changelog content, release notes, component docs templates, docs navigation/search behavior, or raw-doc content.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/docs/vds-documentation-information-architecture.md`
  - `@24vlh/vds/docs/planning/architecture/vds-dist-source-of-truth-policy.md`
  - `@24vlh/vds/docs/planning/architecture/vds-package-metadata-and-exports-review.md`
  - `@24vlh/vds/docs/planning/release/vds-release-policy-and-gates.md`
- Repo files:
  - `@24vlh/vds/README.md`
  - `@24vlh/vds/package.json`
  - `@24vlh/vds/dist`

## 4. Current Behavior Snapshot

Current package facts:

- Package name: `@24vlh/vds`.
- Current version: `0.3.8`.
- Package `main`: `dist/vds.css`.
- Package `style`: `dist/vds.css`.
- Package `files`: `dist`.
- No package `exports` map is currently defined.

Previous README evidence:

- Lines: `148`.
- Sections: Installation, Directory Structure, Loading Model, Production Builds, Source Consumption, Note.
- Install example used bare `vds`.
- Import examples used bare `vds/dist/...`.
- Component examples mentioned `button.css` and `card.css`, which are not current dist component filenames.
- README stated the full framework load included themes, while themes are separate package files.
- README stated all outputs included maps, while checked-in `dist` does not currently include map files.
- README implied package source consumption even though current package metadata publishes only `dist`.

## 5. README Contract

The rewritten README uses these sections, in order:

- Overview
- Installation
- Package Surfaces
- Loading VDS
- Themes
- Component-Level Imports
- Source vs Distribution
- Documentation and Planning Status
- Validation for Maintainers
- Compatibility and Release Status
- Contributing

Required examples:

- `npm install @24vlh/vds`
- `@import "@24vlh/vds/dist/vds.css";`
- `@import "@24vlh/vds/dist/themes/graphite.css";`
- `@import "@24vlh/vds/dist/core.css";`
- `@import "@24vlh/vds/dist/components/buttons.css";`
- `@import "@24vlh/vds/dist/components/forms.css";`

Documentation rules:

- Describe the current package surface honestly, not a future exports model.
- State that `src/` is canonical authoring source in the repo.
- State that `dist/` is the package-facing surface under current package metadata.
- Mention direct `dist` subpaths as compatibility-sensitive without adding or promising an `exports` map.
- Keep migration guide, changelog, release notes, and detailed selector deprecation content deferred to later VDS items.

## 6. Public Interfaces and Compatibility Impact

- README content changes: yes.
- Runtime CSS APIs: unchanged.
- Package metadata: unchanged.
- Generated `dist`: unchanged.
- Raw docs and docs shell: unchanged.
- Generated docs metadata: unchanged.
- Selector inventory and consumer reports: unchanged.
- Version fields, npm tags, and workflows: unchanged.

## 7. Validation Plan

Approved validation for this README-only item:

- Run `pnpm run audit:tokens`.
- Run `pnpm run audit`.
- Run `pnpm run audit:dist`; if the generated-artifact checker hangs again, stop it after a reasonable wait and record that validation limitation without running regeneration.
- Run `pnpm run audit:consumers`; if it fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Run/read a README sanity scan confirming:
  - README uses `@24vlh/vds`, not bare package examples.
  - README does not mention `button.css`, `card.css`, or map files.
  - README says themes are separate from `dist/vds.css`.
  - README documents `dist` as package-facing and `src` as repo authoring source.
  - README includes installation, loading, package surfaces, validation, compatibility, and contributing sections.
- Run markdown sanity checks:
  - `VDS-3020` appears as `done`.
  - `VDS-0600` remains `in-progress`.
  - Next item is `VDS-3030 Component docs template rewrite`.
  - Plan and README agree that no package metadata, generated output, raw docs, docs shell, selector inventory, consumer report, or version changed.
- Run `git diff --check` for changed planning files and `README.md`.

Forbidden validation:

- Do not run `pnpm run build`.
- Do not run `pnpm run build:prod`.
- Do not run `pnpm run docs:vds:index`.
- Do not run `pnpm run inventory:selectors`.
- Do not run `pnpm run consumer:scan`.
- Do not run any write/regeneration command.

## 8. Risks

- README package-surface wording can drift if package metadata changes later without a docs update.
- README must not over-promise generated outputs, exports, migration status, or release readiness.
- README should stay concise enough to be useful as a package landing page while linking planning details for maintainers.

## 9. Assumptions

- Approval of `VDS-3020` approves README and planning documentation only.
- `VDS-3010` is the IA source for README structure.
- `VDS-0220` and `VDS-0230` are the package/dist truth sources.
- Component docs template work remains in `VDS-3030`.
- Migration guide, changelog, and release notes remain in `VDS-3090` and `VDS-3100`.

## 10. Implementation Log

- `2026-05-25`: Rewrote `@24vlh/vds/README.md` from scratch around the VDS-3010 Start IA and current package/dist evidence. Added this VDS-3020 feature plan. Updated the master feature map to mark `VDS-3020` done and point the next recommended item at `VDS-3030 Component docs template rewrite`.
- `2026-05-25`: README sanity scan passed: scoped package examples use `@24vlh/vds`; stale `button.css`, `card.css`, and map-file claims are absent; themes are documented as separate from `dist/vds.css`; `dist` is package-facing; `src` is repo authoring source; required README sections are present in order.
- `2026-05-25`: `pnpm run audit:tokens` passed.
- `2026-05-25`: `pnpm run audit` passed, including CSS parse, class, token, docs dependency, and selector inventory freshness checks.
- `2026-05-25`: `timeout 120s pnpm run audit:dist` reached the timeout while running `node static/js/check-generated-artifacts.js --check`; no generated artifact refresh was run.
- `2026-05-25`: `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `docs/planning/api/vds-consumer-compatibility.md` are stale; `pnpm run consumer:scan` was not run because it is a write/regeneration command.
- `2026-05-25`: Markdown sanity checks passed for `VDS-3020` done status, `VDS-0600` in-progress status, next recommended item, and no-runtime/package/generated-output agreement.
- `2026-05-25`: `git diff --check -- README.md docs/planning/master-feature-map.md` passed; `git diff --no-index --check` reported no whitespace errors for the new VDS-3020 planning file.
