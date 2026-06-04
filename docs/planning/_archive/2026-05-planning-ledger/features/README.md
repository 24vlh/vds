# VDS Feature Plans

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

This folder stores one plan file per non-trivial `VDS-` item.

Use `@24vlh/vds/docs/planning/feature-plan-template.md` for new plans. Keep plan files even after implementation so future sessions have a history snapshot of why the change exists, what was validated, and what follow-up work was discovered.

Status comes from `@24vlh/vds/docs/planning/master-feature-map.md`.
