# Migration Guide: 0.3.8 To 1.0.0

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

VDS 1.0.0 is a stable-major release of the CSS-first package. The modernization work focused on compatibility aliases, stronger docs, and verifiable package infrastructure rather than silent selector removals.

## Compatibility Stance

- Package imports remain under `dist/`.
- No intentional selector, token, or package-path removals are part of the 1.0.0 release checklist.
- Compatibility aliases were added where practical for ARIA and `data-*` state hooks.
- Raw docs are now treated as user-facing usage contracts, so examples may be clearer or more prescriptive than older examples.
- Consumer code remains responsible for JavaScript behavior and ARIA state synchronization.

## Package Imports

Keep using package-facing `dist` imports:

```css
@import "@24vlh/vds/dist/vds.css";
@import "@24vlh/vds/dist/core.css";
@import "@24vlh/vds/dist/components/forms.css";
@import "@24vlh/vds/dist/themes/slate.css";
@import "@24vlh/vds/dist/identity.css";
```

Do not rely on `src/` as the published package surface. It is the repository authoring source.

## Application Review Checklist

1. Review direct component imports and keep them pointed at `@24vlh/vds/dist/components/*.css`.
2. Review theme loading and load themes separately from the full bundle.
3. Review custom selectors or overrides against `docs/planning/api/vds-selector-inventory.md`.
4. Review custom token overrides against `docs/planning/api/vds-token-inventory.md`.
5. Review interactive examples in raw docs and make sure application JavaScript owns the documented runtime behavior.
6. Run package import smoke tests in the consuming app when possible.

## Runtime Responsibilities

The 1.0.0 docs are more explicit about application-owned behavior. Check integrations for:

- routing and current page state;
- validation and error lifecycle;
- focus traps, focus return, roving focus, and keyboard handling;
- modal, drawer, tooltip, popover, command, tab, accordion, and menu state;
- sorting, filtering, selection, expansion, pagination, and virtualization;
- toast timers, pause policy, dismissal, and live-region announcements;
- progress values, loading state, skeleton replacement, and `aria-busy`;
- icon-only controls, image alternatives, chart summaries, and non-color-only status meaning.

## Docs And Generated Metadata

Raw docs live under `doc-raw/` and are the canonical handwritten docs source for this release. Generated docs metadata lives under `@24vlh/agents/docs_vds` and is refreshed with:

```sh
pnpm run docs:vds:index
```

Do not hand-edit generated docs metadata.

## Validation Before Upgrading

In VDS, the release candidate should pass:

```sh
pnpm run audit
pnpm run release:verify
```

In consuming applications, smoke-test the screens that use VDS components, especially overlays, navigation, forms, data tables, toasts, charts, and dense work surfaces.
