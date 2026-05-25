# VDS 1.0.0 Roadmap

## Purpose

VDS `1.0.0` turns the current CSS library, docs, and tooling into a stable system that can be used, maintained, verified, documented, and published without manual archaeology.

The goal is not more planning. The goal is an executable release backlog with three improvement programs: components, documentation, and infrastructure.

## 1.0.0 Definition

VDS `1.0.0` is the first stable major line for the package.

It must make the current public surface honest and reliable:

- package paths under `dist/`;
- component CSS selectors;
- token and theme custom properties;
- raw docs and examples as user-facing usage contracts;
- docs shell/runtime scripts as documentation infrastructure only.

Breaking cleanup is allowed for `1.0.0`, but never silently. Preserve selectors where cheap, add aliases where useful, remove only with migration notes, and document changed selectors, imports, tokens, examples, and package surfaces.

## What We Learned

- Component CSS is the source truth when docs disagree.
- Raw docs are currently handwritten runnable docs, but they are inconsistent and hard to maintain.
- Generated docs metadata is useful evidence, but some `source_css` fields and extracted structures are incomplete.
- Package consumers currently see checked-in `dist/`; `src/` is repo authoring source.
- Existing audits catch useful static problems but do not prove visual, responsive, accessibility, theme, package, or release readiness.
- Planning became too noisy. Active planning is now compact; detailed history is archived.

## Program Direction

### Components

Every component session must produce implementation work, not just audit notes:

- CSS contract decision: preserve, fix, alias, split, deprecate, or remove with migration notes.
- Documentation decision: update raw docs/examples to match source truth and consumer responsibilities.
- Validation decision: run targeted CSS/token/docs checks and any family-specific smoke tests.
- Migration decision: record public selector/import/token impact before closing the session.

Priority components for early `1.0.0` work are `buttons`, `forms`, `navigation`, `overlays`, `tables`, `tabs`, `toasts`, `feedback`, `icons`, `utilities`, `content-blocks`, and `state`.

### Documentation

Docs must become product documentation, not raw class dumps.

Each component doc should explain what the component does, when to use it, how it looks, how it behaves, what JavaScript the consumer owns, what markup is required, what accessibility responsibilities apply, and which examples can be copied safely.

Docs infrastructure must reduce manual effort: examples, metadata, navigation, search, linting, and dependency checks should be reliable enough to maintain the docs over time.

### Infrastructure

VDS needs dependable infrastructure for:

- parsing selectors, tokens, source dependencies, and docs examples;
- generating and verifying docs metadata;
- building and verifying `dist`;
- testing package import surfaces;
- running visual, responsive, accessibility, theme, reduced-motion, and forced-colors smoke checks;
- publishing through a controlled release workflow.

Archived selector and consumer compatibility scripts may be reintroduced only through deliberate infrastructure sessions.

## Release Output

The output of this roadmap is `vds-next-major-backlog.md`: the `1.0.0` session backlog that can be executed without hand-writing hundreds of micro-plans.

