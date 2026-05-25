# VDS Planning Workflow

This folder is the planning source of truth for `@24vlh/vds`.

## Files

- `@24vlh/vds/docs/planning/master-feature-map.md`: full backlog, status map, audit snapshot, and release ledger
- `@24vlh/vds/docs/planning/feature-plan-template.md`: required template for non-trivial VDS plans
- `@24vlh/vds/docs/planning/features/`: one approved-or-pending plan file per VDS work item

## Workflow

1. Pick the next `VDS-` item from `@24vlh/vds/docs/planning/master-feature-map.md`.
2. Create or update `@24vlh/vds/docs/planning/features/VDS-<id>-<slug>.md` from the template.
3. Fill in scope, source paths, docs paths, component API impact, accessibility impact, validation, risks, and open questions.
4. Get explicit user approval for that plan.
5. Only after approval, implement the item.
6. After implementation, update both the feature plan and `master-feature-map.md`.
7. If new work is discovered, add it back to `master-feature-map.md` before closing the task.

## Next-Thing Protocol

When the user asks what to do next:

1. Open `@24vlh/vds/docs/planning/master-feature-map.md`.
2. Find the highest-priority `todo`, `planning`, or `approved` item that is not blocked.
3. Tell the user the next item and why it is next.
4. If the item does not have a plan file, create it from the template and mark the item `planning`.
5. Stop for approval before changing VDS source, docs, build scripts, package metadata, or generated dist files.

## Status Vocabulary

- `todo`: listed, not yet planned
- `planning`: plan file exists or is being refined
- `approved`: plan approved, ready for implementation
- `in-progress`: implementation started
- `blocked`: waiting on decision, environment, or upstream work
- `done`: implemented and validated

## Rules

- Do not implement non-trivial VDS work directly from chat text.
- Do not hide discovered scope. Add follow-up items to the master map.
- Treat `@24vlh/vds/src/**/*.css` as implementation truth and `@24vlh/vds/doc-raw/*.doc.html` as documentation/demo truth.
- If CSS and raw docs disagree, prefer CSS for behavior and record the mismatch in the relevant plan.
- Version bumps must go through an approved release/version item.
- Never run `pnpm run build` or `pnpm run build:prod` in this environment.
- Use targeted audits unless an approved plan says a full audit is needed.

## Validation Commands

- Full audit pass:
  - `wsl sh -lc "cd /mnt/w/public_html/24vlh/vds && pnpm run audit"`
- Targeted audits:
  - `wsl sh -lc "cd /mnt/w/public_html/24vlh/vds && pnpm run audit:css"`
  - `wsl sh -lc "cd /mnt/w/public_html/24vlh/vds && pnpm run audit:classes"`
  - `wsl sh -lc "cd /mnt/w/public_html/24vlh/vds && pnpm run audit:tokens"`
  - `wsl sh -lc "cd /mnt/w/public_html/24vlh/vds && pnpm run audit:docs"`
