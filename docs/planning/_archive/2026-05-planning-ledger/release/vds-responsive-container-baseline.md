# VDS Responsive and Container Behavior Baseline

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-0070`

This file is the responsive and container behavior baseline for the VDS `1.0.0` release line. It is a planning artifact only: no runtime CSS, package metadata, workflow, generated `dist`, build output, or version field changes happen here.

## Responsive Standard

- Browser target: modern evergreen browsers from `VDS-0050`.
- Accessibility target: WCAG 2.2 AA from `VDS-0060`.
- Responsive posture: VDS components must remain usable across narrow mobile, modern mobile, tablet, small desktop, desktop, and wide desktop contexts.
- Browser support is a release contract, not a runtime polyfill promise.

## Default Validation Matrix

| Viewport | Label | Release Expectation |
| --- | --- | --- |
| `360x740` | Narrow mobile | No horizontal page scroll, usable primary actions, readable text, visible focus. |
| `390x844` | Modern mobile | Primary mobile layout works with browser chrome and edge-to-edge spacing. |
| `768x1024` | Tablet | Layouts avoid cramped desktop assumptions and preserve touch ergonomics. |
| `1024x768` | Tablet landscape / small desktop | Navigation, panels, and data surfaces remain usable in shorter viewports. |
| `1280x800` | Desktop | Default desktop composition works without overflow or clipped sticky/fixed UI. |
| `1440x900` | Wide desktop | Content does not over-stretch; max-width and grid behavior remain intentional. |

## Special Checks

- No unintended horizontal page scroll at the document level.
- Touch and mouse/trackpad input both remain usable where components expose interactive states.
- Sticky and fixed UI must not cover focused content, form controls, primary actions, or status messages.
- Safe-area `env()` usage must remain compatible with edge-to-edge mobile surfaces.
- `svh` and `dvh` usage must be reviewed for mobile browser chrome and virtual keyboard behavior.
- Overflow containers must remain keyboard and pointer usable, with visible focus and reachable content.
- Responsive layout changes must not create visual order that contradicts semantic or keyboard order.

## Current Evidence Snapshot

- Media queries: `83` matches in `30` files.
- Media `max-width` queries: `66` matches in `25` files.
- Media `min-width` queries: `4` matches in `2` files.
- Dominant media breakpoints: `768px` (`29`), `1024px` (`14`), `640px` (`13`), with smaller clusters around `720px` and `1280px`.
- Container queries: `4` matches in `1` file, all in `android-shell`.
- Container declarations: `2` matches in `1` file.
- Safe-area `env()` usage: `8` matches in `2` files.
- `svh`/`dvh` viewport units: `5` matches in `2` files.
- Overflow declarations: `84` matches in `25` files.
- Sticky positioning: `10` matches in `6` files.
- Fixed positioning: `11` matches in `7` files.
- Adaptive layout primitives: `minmax()` `117` matches in `15` files; `auto-fit`/`auto-fill` `35` in `12`; `flex-wrap` `105` in `22`; grid-template-family declarations across `19` files.

## Component Family Audit Expectations

| Family | Components | Required Responsive Focus |
| --- | --- | --- |
| Foundation and layout | Base, layout, utilities, sections, typography | Content widths, spacing rhythm, page overflow, safe-area behavior, readable density. |
| Navigation and persistent UI | Navigation, header/footer, action bar, toolbars | Sticky/fixed placement, wrapping, tap targets, short viewport behavior, safe-area offsets. |
| App shells and work surfaces | Android shell, inbox, command, overlays | Container queries, panel overflow, viewport height, keyboard risk, bottom actions. |
| Forms and interactive widgets | Forms, choices, upload, tabs, tooltips/popovers | Mobile stacking, scroll containers, focus visibility, hit targets, trigger/content alignment. |
| Data and content | Tables, charts, content blocks, hero, cards, guidance | Grid reflow, table overflow, media scaling, min/max width behavior, content density. |

## Audit Rules for Later Work

- Every component audit must state whether responsive behavior is required, progressive enhancement, acceptable overflow, needs fallback, or release-blocking.
- Public, candidate-public, and legacy-compatible selectors must not be renamed or removed to solve responsive issues without an approved migration/deprecation plan.
- Any responsive issue that breaks layout, hides interactive content, blocks keyboard/pointer access, or makes text unreadable must be fixed, deferred with reason, or tracked as release-blocking before `1.0.0`.
- Container query use must include a usable base layout when the query enhancement is not active.
- Safe-area and viewport-height behavior must be reviewed anywhere bottom bars, floating actions, full-height panels, or fixed/sticky surfaces are used.
- Documentation rewrite work must show the responsive state when a component has materially different narrow and wide behavior.

## Reference Sources

- VDS browser support matrix: `@24vlh/vds/docs/planning/release/vds-browser-css-support-matrix.md`
- VDS accessibility baseline: `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
- CSS media queries reference: `@24vlh/agents/docs_md/css/responsive/media-queries.md`
- CSS container queries reference: `@24vlh/agents/docs_md/css/responsive/container-queries.md`
- Mobile adaptive layout guidance: `@24vlh/agents/docs_md/mobile-design/layout/adapt-layout.md`
- Mobile edge-to-edge guidance: `@24vlh/agents/docs_md/mobile-design/layout/edge-to-edge.md`
- Mobile system bars guidance: `@24vlh/agents/docs_md/mobile-design/foundations/system-bars.md`
- Mobile accessibility guidance: `@24vlh/agents/docs_md/mobile-design/foundations/accessibility.md`
