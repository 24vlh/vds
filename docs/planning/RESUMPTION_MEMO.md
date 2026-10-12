# VDS resumption memo

Recorded: 12 October 2026. VDS is deferred. The owner withdrew previous planning and outstanding
work because continuing from that disconnected context is no longer feasible. Resume with a general
assessment, then establish a new direction. This memo does not start that assessment or approve a release.

## Quick branch comparison

Remote refs were fetched before inspection. Before this retirement commit:

- `origin/master`: `306d7b8b42f9a1c05f2a1b84459f4dc29a9f0a16` (Finalize VDS 1.0.0 release checklist).
- `origin/next-v1`: `67151bafc6ca3cdd885b57ad30941c0853b83af8`.
- `next-v1` contains master and four additional commits. Both package manifests declare `1.0.0`.
- The four commits restore richer V1 docs, fix an inbox documentation snippet, fix inbox full-width
  action overlap, and change WSL path guidance. Overall: 215 changed files, 54,211 additions and
  9,020 deletions, including 37 raw HTML documentation files. Much of the remaining volume is old
  planning prose and regenerated selector inventory, not new component implementation.
- Implementation differences include `src/components/inbox.css` stacked action layout;
  `css/overrides.css` documentation overflow handling; `js/doc-loader.js` heading detection;
  `static/js/server.js` configurable host/port and error handling; browser smoke and documentation
  quality checks. Package metadata, lockfile, production dist and CI workflows have no branch diff.

## Starting point when work resumes

Refresh refs and inspect actual branch state first; these hashes and counts will become historical.
Determine what the documentation restoration and inbox changes aim to achieve, how source, documentation,
inventory and package output align, and which current checks establish usable behaviour. Reconsider the
purpose and scope before choosing work. Old completion statuses, release-readiness claims and task IDs
are not accepted starting assumptions. No build, runtime audit, browser test or release verification was
run for this quick scan. The development branch was neither merged nor altered.
