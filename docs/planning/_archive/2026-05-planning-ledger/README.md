# Archived VDS Planning Ledger

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

This archive preserves the detailed planning, audit, and feature-map history that existed before the next-major planning compression.

Archive created: `2026-05-25`

## Why This Exists

The previous planning tree became too large to serve as active operational memory: `166` Markdown files and about `41k` lines. The useful evidence is preserved here, but the active workflow now lives in the compact files at `@24vlh/vds/docs/planning`.

## Archive Contents

- `master-feature-map.md`: the detailed previous backlog and ledger.
- `planning-workflow-readme.md`: the previous micro-plan workflow instructions.
- `feature-plan-template.md`: the previous per-feature plan template.
- `features/`: individual `VDS-####` feature plans.
- `components/`: component audit artifacts.
- `architecture/`: build, package, docs pipeline, generated artifact, and tooling reviews.
- `tokens/`: token, theme, motion, focus, z-index, and identity audits.
- `foundation/`: base, layout, sections, utilities, cascade, and overrides audits.
- `release/`: release strategy, browser support, accessibility, responsive, and theme baselines.
- `docs/`: documentation rewrite planning artifacts.
- `api/`: previous selector inventory and consumer compatibility evidence.

## Status

These files are historical evidence only. They are not the active planning workflow and should not be updated during normal next-major work.

Use this archive only when an active backlog session needs specific old evidence that is not already summarized in:

- `@24vlh/vds/docs/planning/vds-operational-memory.md`
- `@24vlh/vds/docs/planning/vds-next-major-roadmap.md`
- `@24vlh/vds/docs/planning/vds-next-major-backlog.md`
