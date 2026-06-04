# VDS Planning

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

This folder is the compact operational memory for the next major `@24vlh/vds` update.

It replaces the previous micro-plan workflow. Do not create one numbered plan file per task. Use the session backlog instead.

## Active Files

- `master-feature-map.md`: short dashboard, current state, next session, and major programs.
- `vds-next-major-roadmap.md`: why the next major exists and what must improve.
- `vds-next-major-backlog.md`: executable session backlog for planning, components, documentation, and infrastructure.
- `vds-operational-memory.md`: repo facts, source truth, package surfaces, docs model, audits, known gaps, and history.

## Archive

The detailed planning ledger was preserved under `_archive/2026-05-planning-ledger/`.

Those files are evidence and history, not the active workflow. This includes the old selector inventory and consumer compatibility evidence previously under `api/`. Read archive files only when a session needs old detail that is not summarized in the active files.

## Operating Model

1. Pick the next session from `vds-next-major-backlog.md`.
2. Run that session directly when approved.
3. Update the backlog, roadmap, and operational memory with the durable result.
4. Do not add a new planning file unless the active model itself changes.

## Boundaries

Planning compression does not change runtime CSS, raw docs, generated docs metadata, package metadata, `dist`, workflows, selector generation, consumer reports, npm tags, or version fields.

Source and generated evidence remain where current tooling expects them:

- CSS source truth: `@24vlh/vds/src`
- Raw docs source: `@24vlh/vds/doc-raw`
- Generated VDS docs evidence: `@24vlh/agents/docs_vds`
