# VDS Android Shell Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-24`

Source item: `VDS-2030`

This file records the Android shell component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/android-shell.css` is the source truth for current Android shell CSS behavior.
- `@24vlh/vds/doc-raw/vds-android-shell.doc.html` and `@24vlh/agents/docs_vds/components/vds-android-shell.json` are docs/index evidence.
- The current implementation is a pure CSS Android-style app-shell composition kit.
- Consumer/application code owns route state, current destination state, filter state, live announcements, focus management, menu/drawer behavior, form control behavior, overlays/toasts, and any toolbar roving-focus behavior.
- Existing Android shell classes, variants, local variables, safe-area behavior, bottom-nav/FAB behavior, and container-query behavior are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, component split, or generated output refresh happens in `VDS-2030`.

## Source CSS Evidence

`@24vlh/vds/src/components/android-shell.css` currently has:

- Lines: `1535`.
- Selector blocks: `177`.
- Expanded selectors: `219`.
- Declarations: `756`.
- Custom property declarations: `134`.
- Unique `--android-shell-*` local token names: `59`.
- `var(...)` references: `557`.
- `!important` declarations: `0`.
- Hard-coded hex colors: `0`.
- `rgb(...)` / `rgba(...)` colors: `3`.
- Gradients: `9`.

Media blocks:

- `(max-width: 480px)`
- `(prefers-reduced-motion: reduce)`

Container queries:

- `android-shell (min-width: 34rem)`
- `android-shell (min-width: 42rem)`
- `android-shell (max-width: 26rem)`
- `android-shell (max-width: 22rem)`

State and interaction evidence:

- `:focus-visible` selectors: `5`.
- `:focus-within` selectors: `1`.
- `:hover` selectors: `14`.
- `:active` selectors: `0`.
- Disabled selector matches: `2`.
- Current/active selector matches: `4`.
- Loading/busy selector matches: `0`.
- Transition declarations: `8`.
- Transform declarations: `18`.
- Animation declarations: `0`.
- `@keyframes`: `0`.
- Reduced-motion blocks: `1`.
- Forced-colors blocks: `0`.

Layout and mobile evidence:

- Safe-area `env(...)` references: `4`.
- Safe-area inset references: `4`.
- `container-type` declarations: `1`.
- `container-name` declarations: `1`.
- `position: sticky` declarations: `1`.
- `position: fixed` declarations: `0`.
- `z-index` declarations: `2`.
- `overflow` references: `3`.
- `overscroll-behavior` declarations: `1`.
- `backdrop-filter` declarations: `2`.
- `isolation` declarations: `1`.

## Component Contract

Current Android shell source surfaces:

- Root/local-token scopes:
  - `[data-vds-android-shell]`
  - `.vds-android-shell`
- Shell frame:
  - `.android-shell`
  - `.android-shell--device`
  - `.android-shell--adaptive`
  - `.android-shell--raised`
- App chrome:
  - `.android-shell__topbar`
  - `.android-shell__topbar--sticky`
  - `.android-shell__topbar-row`
  - `.android-shell__leading`
  - `.android-shell__actions`
  - `.android-shell__titles`
  - `.android-shell__icon-button`
  - `.android-shell__bottom-bar`
  - `.android-shell__bottom-actions`
  - `.android-shell__bottom-nav`
  - `.android-shell__nav-link`
  - `.android-shell__fab`
- Content and adaptive layout:
  - `.android-shell__body`
  - `.android-shell__stack`
  - `.android-shell__section`
  - `.android-shell__panes`
  - `.android-shell__panes--supporting`
  - `.android-shell__surface`
  - `.android-shell__hero`
- App content helpers:
  - dashboard/stat/action helpers
  - chips and list badges
  - filters/search helpers
  - banners, notices, and timelines
  - list/settings rows

Source interpretation:

- Android shell is a screen-composition kit, not an app runtime.
- The shell can render a handset-like device frame or a wider adaptive surface.
- The shell uses safe-area tokens to protect top, bottom, and side chrome.
- The shell uses container queries so it can adapt inside a host surface instead of depending only on viewport width.
- The bottom navigation and FAB are CSS surfaces; current route and primary action behavior are consumer/application responsibilities.

## Local Token Surface

Current `--android-shell-*` local token families:

| Family | Examples | Role |
| --- | --- | --- |
| Frame | `--android-shell-max-width`, `--android-shell-min-block-size`, `--android-shell-shell-radius` | shell sizing and frame treatment |
| Surfaces | `--android-shell-bg`, `--android-shell-panel`, `--android-shell-panel-muted` | background and panel roles |
| Border/text/accent | `--android-shell-border`, `--android-shell-text`, `--android-shell-accent` | theme-driven role aliases |
| Semantic states | `--android-shell-info-*`, `--android-shell-success-*`, `--android-shell-warning-*`, `--android-shell-danger-*` | status chips, banners, notices, and timelines |
| Rhythm/hit targets | `--android-shell-inline-pad`, `--android-shell-section-gap`, `--android-shell-hit-size`, `--android-shell-fab-size` | spacing and touch-target scale |
| Safe area | `--android-shell-safe-top`, `--android-shell-safe-right`, `--android-shell-safe-bottom`, `--android-shell-safe-left` | system-bar and display-cutout protection |
| Local state aliases | `--android-shell-pill-*`, `--android-shell-filter-*`, `--android-shell-banner-*`, `--android-shell-notice-*` | section-scoped status and surface aliases |

Audit conclusions:

- Local tokens are component-owned aliases.
- They pull from primitive spacing, typography, radius, motion, z-index, focus, shadow, theme color, and semantic tokens.
- Safe-area tokens wrap `env(safe-area-inset-*)` with spacing fallbacks.
- They are not approved for rename, removal, promotion, or deprecation in this item.

## Selector Inventory Evidence

Selector inventory totals:

- Android shell source classes: `134`.
- Public classes: `116`.
- Candidate-public classes: `18`.

Class family counts:

| Group | Total | Public | Candidate-public |
| --- | ---: | ---: | ---: |
| root/variant | `4` | `4` | `0` |
| frame/body | `2` | `2` | `0` |
| topbar | `6` | `5` | `1` |
| typography | `3` | `3` | `0` |
| sections | `6` | `5` | `1` |
| surfaces | `3` | `2` | `1` |
| hero | `5` | `5` | `0` |
| metrics | `5` | `0` | `5` |
| dashboard | `10` | `9` | `1` |
| actions | `5` | `5` | `0` |
| chips/badges | `7` | `7` | `0` |
| filters | `11` | `9` | `2` |
| banners | `11` | `10` | `1` |
| notices | `14` | `12` | `2` |
| timeline | `11` | `11` | `0` |
| lists | `19` | `15` | `4` |
| bottom-nav | `7` | `7` | `0` |
| FAB | `2` | `2` | `0` |
| panes | `2` | `2` | `0` |

Candidate-public classes:

- `.android-shell__banner--accent`
- `.android-shell__filter-group--grow`
- `.android-shell__filters--muted`
- `.android-shell__leading`
- `.android-shell__list--plain`
- `.android-shell__list-badge--accent`
- `.android-shell__list-badge--danger`
- `.android-shell__list-meta`
- `.android-shell__metric`
- `.android-shell__metric-grid`
- `.android-shell__metric-label`
- `.android-shell__metric-support`
- `.android-shell__metric-value`
- `.android-shell__notice--accent`
- `.android-shell__notice--success`
- `.android-shell__section-meta`
- `.android-shell__stat-trend--bad`
- `.android-shell__surface--accent`

Audit conclusions:

- Android shell is a large compatibility surface.
- Candidate-public status reflects current docs coverage, not permission to remove or rename source-defined classes.
- Later selector cleanup must classify the metric, accent, plain, grow, muted, meta, and leading helpers before any migration decision.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-android-shell.doc.html` has `1308` lines.
- Docs cover Android-first screens, safe areas, bottom navigation, core shell anatomy, dashboards, filters/search helpers, push inbox/notification center, incident details, settings/grouped preferences, adaptive workspace panes, class contract, and accessibility rules.
- Docs use examples with buttons, icons, toggles, forms, sections, and docs presentation helpers in addition to Android shell classes.

Term evidence:

| Term | Mentions |
| --- | ---: |
| `android` | `670` |
| `shell` | `684` |
| `safe` | `4` |
| `safe-area` | `1` |
| `navigation` | `10` |
| `bottom` | `21` |
| `topbar` | `23` |
| `fab` | `3` |
| `pane` | `16` |
| `adaptive` | `8` |
| `dashboard` | `9` |
| `filter` | `42` |
| `search` | `15` |
| `notification` | `7` |
| `incident` | `3` |
| `alert` | `16` |
| `settings` | `12` |
| `timeline` | `47` |
| `touch` | `1` |
| `keyboard` | `1` |
| `focus` | `5` |
| `aria` | `75` |
| `aria-label` | `20` |
| `aria-current` | `3` |
| `aria-live` | `0` |
| `role` | `3` |
| `tabindex` | `0` |
| `disabled` | `1` |
| `loading` | `0` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |
| `responsive` | `0` |
| `overflow` | `0` |
| `overscroll` | `0` |

Generated index:

- `@24vlh/agents/docs_vds/components/vds-android-shell.json`
- Blocks: `10`.
- Code examples: `8`.
- Generated class tokens: `157`.
- Generated `source_css`: `[]`.

Audit conclusions:

- The generated index currently omits `android-shell.css` from `source_css`.
- Empty `source_css` is a docs-index metadata gap and must not be fixed by hand in this item.
- Later docs rewrite should separate runtime Android shell dependencies from docs presentation dependencies.
- Reduced-motion, forced-colors, overflow/overscroll, and container-query behavior need better docs coverage.

## Mobile Design Alignment

Local Android mobile design evidence:

- `system-bars.md` records that layouts must account for system bars, safe zones, display cutouts, navigation bars, and system interactions.
- `edge-to-edge.md` records that tappable content should avoid system gesture insets and that content can draw behind system bars when protected.
- `layout-and-navigation-patterns.md` records bottom navigation as a three-to-five destination pattern and FAB as a single highest-importance action.
- `adapt-layout.md` records adaptive layouts as pane-based and responsive to available space.
- `settings.md` records grouped settings and list/detail layouts for larger screens.
- `accessibility.md` records at least `48dp` touch targets and textual descriptions for icons/images.

Current VDS interpretation:

- `--android-shell-hit-size: 3rem` aligns to the `48px` touch-target floor.
- Safe-area tokens protect shell padding and bottom chrome in source CSS.
- Bottom navigation examples use four destinations and `aria-current="page"`.
- FAB examples use a single floated primary action.
- Adaptive panes are driven by container queries rather than viewport-only media queries.
- Settings examples pair shell rows with existing VDS form controls.

Audit conclusion:

- The shell mirrors Android mobile design guidance, but it remains CSS-only. Host application code still owns behavior, accessibility state, and native-platform edge cases.

## Dist and Package-Facing Evidence

Current checked-in dist files:

- `@24vlh/vds/dist/components/android-shell.css`
- `@24vlh/vds/dist/components/android-shell.min.css`

Evidence:

- `dist/components/android-shell.css` exists and currently has `1540` lines.
- `dist/components/android-shell.min.css` exists and is non-empty.
- `src/index.css` imports `components/android-shell.css`.

Audit conclusions:

- Android shell has package-facing standalone component output.
- No generated `dist` file is changed in `VDS-2030`.
- If future Android shell source CSS changes while generated output is out of scope, implementation logs must record `dist refresh pending`.

## Current Risks

- Android shell has a broad selector surface and may need future component split or selector taxonomy review.
- Generated docs metadata omits `android-shell.css` from `source_css`.
- Safe-area behavior depends on browser/host support for `env(safe-area-inset-*)` and app-level system-bar setup.
- Bottom navigation, FAB, filters, topbar actions, settings controls, notices, panes, and live notification flows require consumer-owned behavior.
- Source has reduced-motion handling but no forced-colors block.
- Filter chip active/disabled states exist, but keyboard grouping, toolbar behavior, and live result announcements are not implemented by CSS.
- Container-query thresholds are compatibility-sensitive and need visual QA before changes.
- Backdrop blur, gradients, shadows, sticky positioning, transforms, and safe-area padding require theme/mobile visual review.
- Docs examples mix runtime shell classes with button, icon, toggle, form, section, utility, and docs presentation classes.
- Raw docs under-document reduced-motion, forced-colors, overflow/overscroll, and container-query mechanics.

## Audit Rules for Later Android Shell Work

- Do not rename, remove, or reclassify Android shell selectors without later approved migration work.
- Do not rename, remove, or deprecate `--android-shell-*` local variables without token and migration review.
- Do not change safe-area behavior without Android/mobile system-bar and visual QA.
- Do not change container-query thresholds without responsive screenshots and migration notes.
- Do not change bottom-nav, FAB, topbar, pane, filter, list, settings, banner, notice, or timeline behavior without docs and accessibility review.
- Do not add toolbar/menu/drawer/routing/filter behavior without explicit behavior and keyboard approval.
- Do not change semantic status colors or active/current state treatments without theme/contrast review.
- If Android shell source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-2040` and later component audits should continue separating source CSS truth from docs/index evidence.
- Android shell implementation work should evaluate forced-colors coverage, safe-area behavior, sticky/topbar/FAB overlap, and narrow-container behavior.
- Docs rewrite work should clarify safe areas, system-bar limits, container queries, reduced motion, runtime dependencies, and consumer-owned behavior boundaries.
- Accessibility work should review focus visibility, icon-only labels, `aria-current`, filter `aria-pressed`, live announcements, TalkBack-friendly naming, touch targets, and form-control handoff.
- Responsive/mobile QA should review device, adaptive, raised, bottom-nav, FAB, pane, filter, settings, notification, and incident examples across narrow and wide containers.
- Theme/contrast work should review text-soft usage, status banners/notices/chips, active nav states, FAB contrast, blur, shadows, and gradient-backed surfaces across all themes.
- Component architecture work may later decide whether Android shell remains one large component or splits into smaller package-facing surfaces.

## Public Interfaces and Compatibility

- Existing selectors preserved:
  - All Android shell selectors remain unchanged.
- New selectors:
  - None.
- Deprecated selectors:
  - None in this item.
- Breaking changes:
  - None in CSS, selectors, tokens, custom property names, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, or package version fields.
- Migration notes:
  - No migration is required for `VDS-2030`.
