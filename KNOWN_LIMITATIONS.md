# Known Limitations For VDS 1.0.0

These items are known release review points. They are not silent changes in 1.0.0.

## Component Surface

- Utility and icon pruning policy remains deferred. The current public surface is intentionally preserved for 1.0.0.
- Some legacy compatibility aliases remain because removing them would require migration notes and consumer validation.
- Broad components such as content blocks, utilities, feedback, navigation, and tables still deserve deeper visual baselines after the first stable release.

## Documentation

- Raw docs remain handwritten HTML for the 1.0.0 cycle. A future template/data renderer may reduce manual maintenance work.
- Generated docs metadata is generated evidence, not the authoring source.
- The docs shell search is lightweight and route-based, not a full-text index.

## Validation

- Browser smoke checks cover representative routes, responsive overflow, theme values, reduced motion, forced colors, and serious or critical axe findings. They do not replace full visual regression testing.
- Scripted interaction tests for tabs, overlays, command palettes, tables, toasts, and mobile navigation remain future work.
- Browser smoke depends on a system Chromium binary or `VDS_CHROMIUM`.

## Release Operations

- Publishing depends on npm trusted publishing being configured for the GitHub repository and workflow.
- The publish workflow publishes checked-in `dist` after `dist:check` proves freshness. It does not rebuild `dist` inside the publish job.
- Source maps remain opt-in for local builds and are not part of the checked-in package surface.
- This WSL environment restricts direct `npm publish --dry-run`; local validation uses `pnpm run release:verify` and its `pnpm pack` fallback. Run the raw npm dry-run in CI or an unrestricted shell before tagging.
