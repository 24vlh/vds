# VDS Operational Memory

## Repo Identity

- Package: `@24vlh/vds`
- Current version: `0.3.8`
- Target release version: `1.0.0`
- Package surface: checked-in `dist/`
- Published files policy: package metadata currently publishes `dist`
- Runtime stance: CSS-first; JavaScript behavior belongs to consumers or docs demos unless explicitly implemented in docs scripts.

## Public Interface Categories

For `1.0.0`, treat these as public or compatibility-sensitive until a session explicitly changes them:

- package paths under `dist/`;
- component CSS selectors and aliases;
- token and theme custom properties;
- raw docs examples that users can copy;
- docs shell behavior only as documentation infrastructure, not library runtime.

## Source Truth

- CSS authoring source: `src/`
- Component CSS source: `src/components/*.css`
- Standalone identity CSS: `src/identity.css`
- Theme CSS: `src/themes/*.css`
- Raw runnable docs: `doc-raw/*.doc.html`
- Generated docs evidence: `@24vlh/agents/docs_vds`
- Archived selector/consumer evidence: `docs/planning/_archive/2026-05-planning-ledger/api/`

If CSS and docs conflict, source CSS wins for current behavior and the mismatch becomes backlog work.

## Current Counts

- Source CSS files: `43`
- Component CSS files under `src/components`: `33`
- Theme files: `4`
- Raw docs: `37`
- Generated docs component JSON files: `37`
- Archived planning Markdown: `166` files before compression, about `41k` lines.

## Package and Docs Model

- `dist/vds.css` is the package-facing full bundle.
- Themes are separate files under `dist/themes/`.
- Component-level package imports use direct `dist/components/*.css` paths.
- `src/` is canonical authoring source in the repo, not the current package-facing published surface.
- Raw docs are currently loaded as HTML fragments by the docs shell.
- Generated metadata is evidence and index data, not the hand-edited docs source.
- Archived selector and consumer compatibility scripts are not active; `INFRA-S01` owns reintroducing them deliberately.

## Current Validation Commands

Useful checks in the cleaned package metadata:

```sh
pnpm run audit:css
pnpm run audit:classes
pnpm run audit:tokens
pnpm run audit:docs
pnpm run audit
git diff --check
```

Current guarded/write-like commands:

```sh
pnpm run build
pnpm run build:prod
```

Future `1.0.0` infrastructure sessions should restore deliberate selector, docs metadata, dist freshness, package smoke, visual, responsive, accessibility, theme, and consumer checks.

## Known System Gaps

- Component contracts are large and uneven; several files combine component, utility, docs-demo, and app-pattern responsibilities.
- Docs are manually authored raw HTML, inconsistent in structure, and sometimes stale against CSS.
- Generated docs metadata can miss source CSS evidence.
- Existing audits are useful but not enough for visual, responsive, accessibility, theme, package, and release readiness.
- Consumer/runtime responsibilities are often implied rather than documented.
- `dist` is checked in, but generation and freshness remain a maintenance risk.
- Release workflow needs stronger pre-publish gates and package smoke tests.

## 1.0.0 Working Rule

Use `vds-next-major-backlog.md` sessions. Do not revive the old pattern of creating a new long planning file for every small task.

Each implementation session must either:

- change real source/docs/tooling and validate it; or
- explicitly mark the work deferred with the reason and release impact.

