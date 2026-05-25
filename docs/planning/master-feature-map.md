# VDS 1.0.0 Master Feature Map

Last updated: `2026-05-25`

This is the compact dashboard for the `@24vlh/vds` `1.0.0` major release.

Current package version: `0.3.8`
Target release version: `1.0.0`

## Current State

- VDS is a CSS-first design system with source CSS under `src/`, checked-in package output under `dist/`, raw runnable docs under `doc-raw/`, and generated docs metadata under `@24vlh/agents/docs_vds`.
- The previous planning tree was archived under `_archive/2026-05-planning-ledger/`; active planning is now session-based, not micro-plan based.
- The previous selector inventory and consumer compatibility evidence is archived because the matching audit script changes are not active in the cleaned package metadata.
- `1.0.0` may include breaking cleanup, but every breaking selector, token, import, docs example, or package-surface change must be documented with migration guidance.

## Next Recommended Session

Next session: `DOCS-S02 Raw docs authoring model`.

Reason: `DOCS-S01` converted the documentation IA and quality rules into an executable raw-doc rewrite queue. The next useful step is to lock the authoring model before heavy raw-doc rewrites begin.

## Release Programs

| Program | Status | Purpose | Source |
| --- | --- | --- | --- |
| `REL` | `in-progress` | Coordinate `1.0.0` release sessions, gates, version bump, and publish readiness. | `vds-next-major-backlog.md` |
| `COMP` | `done` | Modernize every VDS component through family sessions and component rows. | `vds-next-major-backlog.md` |
| `DOCS` | `in-progress` | Rebuild docs content, examples, ownership, shell, metadata, and linting. | `vds-next-major-backlog.md` |
| `INFRA` | `ready` | Make build, audit, generated metadata, package checks, CI, and publishing reliable. | `vds-next-major-backlog.md` |

## Active Planning Files

- `README.md`
- `master-feature-map.md`
- `vds-next-major-roadmap.md`
- `vds-next-major-backlog.md`
- `vds-operational-memory.md`

## Archived Ledger

Detailed historical planning, audits, and previous feature maps are preserved at:

- `_archive/2026-05-planning-ledger/`

Use the archive as evidence only. Do not restart the previous one-plan-per-task workflow.

## 1.0.0 Release Gates

VDS `1.0.0` cannot ship until:

- all component family sessions are complete or explicitly deferred with a release note;
- docs explain package surfaces, component usage, examples, accessibility, theming, recipes, and migration;
- generated docs metadata and docs shell behavior are reproducible and verified;
- selector, token, docs, dist, package, visual, responsive, theme, reduced-motion, forced-colors, and accessibility checks pass at the agreed smoke-test depth;
- migration guide, changelog, release notes, package smoke tests, version bump, dist refresh, and publish checklist are complete.

## Stop Conditions

Pause the release instead of pushing through if:

- package import paths under `dist/` cannot be verified;
- generated `dist` cannot be reproduced from source;
- docs examples are not source-backed or accessible enough to copy;
- breaking changes do not have migration notes;
- release automation cannot prove what is being published;
- a component family still has unknown public selector or token impact.
