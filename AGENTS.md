# VDS AI Router

Use this file as the thin routing entry point for VDS tasks.

The maintained router lives at:
- `@24vlh/agents/agents-repo/vds/AGENTS.md`

Load the maintained router for actual routing, guardrails, and validation commands.
Do not duplicate the full router here.

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

## Project root reference

- `@24vlh/vds`

## Command execution policy (WSL-first, mandatory)

- Run commands through WSL shell:
  - `wsl sh -lc "cd /public_html/24vlh/vds && <command>"`

## Routing

- Maintained router:
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
- Emit:
  - `Routing: vds + @24vlh/agents/agents-repo/vds/AGENTS.md [+ other routers]`
