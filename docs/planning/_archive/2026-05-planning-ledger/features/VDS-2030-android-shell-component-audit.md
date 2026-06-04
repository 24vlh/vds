# VDS-2030 Android Shell Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2030`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2030-android-shell-component-audit.md`

## 1. Goal

Create the Android shell component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only Android shell contract: device/adaptive frames, safe-area handling, top app bar, scroll body, grouped surfaces, dashboard/stat/action helpers, filters, banners/notices/timelines, list/settings rows, bottom navigation, FAB behavior, container-query adaptation, docs/index metadata, and mobile accessibility risks.

## 2. Scope

### In scope

- Record current `src/components/android-shell.css` selector, token, layout, safe-area, responsive, container-query, motion, and interaction evidence.
- Record public and candidate-public selector inventory evidence for the Android shell class surface.
- Record raw docs and generated docs-index metadata for `vds-android-shell`.
- Record Android mobile design alignment for safe areas, system bars, bottom navigation, FAB, adaptive panes, settings grouping, and touch targets.
- Record package-facing `dist/components/android-shell.css` and `.min.css` presence.
- Add an Android shell component audit artifact for later CSS fixes, docs rewrite, responsive/mobile QA, accessibility review, theme/contrast checks, component split discussions, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2030` is done, and the next recommended item is `VDS-2040`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding or changing JavaScript routing, navigation, filtering, notification, pane-management, settings, menu, drawer, overlay, toast, live-region, or toolbar roving-focus behavior.
- Adding forced-colors handling, responsive screenshots, visual checks, component splits, selector reclassification, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/mobile-design/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local standards docs:
  - `@24vlh/agents/docs_md/mobile-design/foundations/system-bars.md`
  - `@24vlh/agents/docs_md/mobile-design/foundations/accessibility.md`
  - `@24vlh/agents/docs_md/mobile-design/layout/edge-to-edge.md`
  - `@24vlh/agents/docs_md/mobile-design/layout/layout-and-navigation-patterns.md`
  - `@24vlh/agents/docs_md/mobile-design/layout/adapt-layout.md`
  - `@24vlh/agents/docs_md/mobile-design/patterns/settings.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-android-shell.json`
- Repo files:
  - `@24vlh/vds/src/components/android-shell.css`
  - `@24vlh/vds/doc-raw/vds-android-shell.doc.html`
  - `@24vlh/vds/dist/components/android-shell.css`
  - `@24vlh/vds/dist/components/android-shell.min.css`
  - `@24vlh/vds/src/index.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/android-shell.css` has `1535` lines.
- Selector blocks: `177`.
- Expanded selectors: `219`.
- Declarations: `756`.
- Custom property declarations: `134`.
- Unique `--android-shell-*` local token names: `59`.
- `var(...)` references: `557`.
- `!important` declarations: `0`.
- Hard-coded hex colors: `0`.
- `rgb(...)` / `rgba(...)` colors: `3`.
- Gradient declarations: `9`.

Media and container evidence:

- Media blocks:
  - `(max-width: 480px)`
  - `(prefers-reduced-motion: reduce)`
- Container queries:
  - `android-shell (min-width: 34rem)`
  - `android-shell (min-width: 42rem)`
  - `android-shell (max-width: 26rem)`
  - `android-shell (max-width: 22rem)`
- Container setup:
  - `container-type: inline-size`
  - `container-name: android-shell`

Safe-area and mobile frame evidence:

- Safe-area `env(...)` references: `4`.
- Safe-area inset references: `4`.
- Root safe-area tokens:
  - `--android-shell-safe-top`
  - `--android-shell-safe-right`
  - `--android-shell-safe-bottom`
  - `--android-shell-safe-left`
- Shell frame uses `min-block-size: 100svh` through `--android-shell-min-block-size`.
- `.android-shell__body` uses `overflow-y: auto` and `overscroll-behavior: contain`.

Interaction and state evidence:

- `:focus-visible` selectors: `5`.
- `:focus-within` selectors: `1`.
- `:hover` selectors: `14`.
- `:active` selectors: `0`.
- Disabled selector matches: `2`.
- Current/active selector matches: `4`.
- Expanded selector matches: `0`.
- Selected selector matches: `0`.
- Loading/busy selector matches: `0`.
- Transition declarations: `8`.
- Transform declarations: `18`.
- Animation declarations: `0`.
- `@keyframes`: `0`.
- Reduced-motion blocks: `1`.
- Forced-colors blocks: `0`.

Layout and depth evidence:

- `display` declarations: `54`.
- `gap` declarations: `50`.
- `grid-template-columns` declarations: `11`.
- `position` declarations: `8`.
- `z-index` declarations: `2`.
- `overflow` references: `3`.
- `overscroll-behavior` declarations: `1`.
- `backdrop-filter` declarations: `2`.
- `isolation` declarations: `1`.

Package-facing output evidence:

- `@24vlh/vds/dist/components/android-shell.css` exists and has `1540` lines.
- `@24vlh/vds/dist/components/android-shell.min.css` exists and is non-empty.
- `@24vlh/vds/src/index.css` imports `components/android-shell.css`.

## 5. Local Token Surface

Android shell local token groups currently include:

- Root/frame sizing and chrome: `--android-shell-nav-count`, `--android-shell-max-width`, `--android-shell-min-block-size`, `--android-shell-shell-radius`, `--android-shell-shell-border`, `--android-shell-shell-shadow`.
- Surface and body roles: `--android-shell-bg`, `--android-shell-body-bg`, `--android-shell-panel`, `--android-shell-panel-muted`, `--android-shell-panel-hover`, `--android-shell-panel-accent`.
- Border/text/accent roles: `--android-shell-border`, `--android-shell-border-strong`, `--android-shell-text`, `--android-shell-text-muted`, `--android-shell-text-soft`, `--android-shell-accent`, `--android-shell-accent-strong`, `--android-shell-on-accent`.
- Semantic state roles: `--android-shell-info-*`, `--android-shell-success-*`, `--android-shell-warning-*`, and `--android-shell-danger-*`.
- Spacing and hit-size roles: `--android-shell-inline-pad`, `--android-shell-section-gap`, `--android-shell-section-pad`, `--android-shell-list-pad`, `--android-shell-topbar-gap`, `--android-shell-bottom-gap`, `--android-shell-hit-size`, `--android-shell-icon-button-size`, `--android-shell-fab-size`.
- Safe-area roles: `--android-shell-safe-top`, `--android-shell-safe-right`, `--android-shell-safe-bottom`, and `--android-shell-safe-left`.
- Local pill/filter/banner/notice aliases are defined inside their component sections for active, status, and surface treatments.

Audit conclusions:

- Android shell local tokens are component-owned aliases.
- They pull from primitives, theme color roles, semantic tokens, focus tokens, shadow tokens, and safe-area environment insets.
- They are not approved for rename, removal, promotion, or deprecation in this item.

## 6. Selector/API Evidence

Selector inventory evidence:

- `134` Android shell source classes are defined in selector inventory.
- Classification totals:
  - `116` public.
  - `18` candidate-public.
- Major class groups include frame/root variants, topbar, body/stack/sections, surfaces/hero, metrics/dashboard/actions, chips/badges, filters/search, banners/notices/timelines, lists/settings rows, bottom navigation, FAB, and adaptive panes.

Candidate-public classes currently include:

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

- Android shell is one of the broadest component surfaces in VDS.
- Public and candidate-public classes are compatibility-sensitive until later approved selector classification or migration work.
- Candidate-public classes include meaningful source-defined variants and helpers that should not be removed only because current docs coverage is incomplete.

## 7. Docs and Generated Index Evidence

Raw docs evidence:

- `@24vlh/vds/doc-raw/vds-android-shell.doc.html` has `1308` lines.
- Raw docs cover Android-first screens, safe areas, bottom navigation, core shell anatomy, dashboards, filters/search helpers, push inbox/notification center, incident details, settings/grouped preferences, adaptive workspace panes, class contract, and accessibility rules.
- Raw docs include `aria-label`, `aria-current`, `aria-pressed`, labelled filter regions, and icon-only control labels.

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

Generated index evidence:

- `@24vlh/agents/docs_vds/components/vds-android-shell.json`
- Blocks: `10`.
- Code examples: `8`.
- Generated class tokens: `157`.
- Generated `source_css`: `[]`.

Docs/source interpretation:

- `android-shell.css` is the component source.
- Empty generated `source_css` metadata is a docs-index metadata gap, not an approved generated-index fix in this item.
- Raw docs strongly cover composition examples but under-document reduced-motion, forced-colors, overflow/overscroll, and container-query source behavior.
- CSS remains source truth where docs and source behavior diverge.

## 8. Mobile Design and Accessibility Alignment

Android mobile design reference evidence:

- System-bar guidance says layouts must account for safe zones, system interactions, display cutouts, status bars, caption bars, and navigation bars.
- Edge-to-edge guidance says tappable content should respect insets and avoid system gesture areas.
- Navigation guidance records bottom navigation as a three-to-five destination pattern.
- FAB guidance records FAB as the highest-importance action and recommends one such action at that level.
- Adaptive layout guidance recommends thinking in panes and allowing content to reflow as space changes.
- Settings guidance recommends grouping settings into smaller relevant groups and using list/detail structure for larger surfaces.
- Accessibility guidance records at least `48dp` touch targets and text alternatives for icons/images.

Current VDS interpretation:

- Android shell uses safe-area tokens and a `48px`-aligned hit-size floor through `--android-shell-hit-size: 3rem`.
- Bottom navigation, FAB, filters, topbar actions, settings controls, and list rows are CSS-rendered surfaces only.
- Consumer/application code remains responsible for route state, current destination, filter state, live announcements, keyboard behavior, TalkBack/Voice Access friendliness, and form control behavior.

Audit conclusion:

- The current implementation should be documented as a CSS Android-style shell kit that mirrors mobile design guidance, not as a complete Android app behavior framework.

## 9. Current Risks

- Android shell is a very broad public component surface; selector pruning, renaming, or reclassification requires later migration approval.
- Generated docs metadata currently omits `android-shell.css` from `source_css`.
- Safe-area CSS uses `env(safe-area-inset-*)`, but actual Android system-bar behavior still depends on host app/browser context.
- Bottom nav, FAB, topbar actions, filters, list rows, settings controls, notices, and panes need consumer-owned behavior and accessible state synchronization.
- Filter chips expose active and disabled styling, but source does not implement keyboard grouping, toolbar behavior, or live result announcements.
- Source has reduced-motion handling but no forced-colors block.
- Source uses backdrop blur, gradients, shadows, transforms, sticky positioning, and safe-area values that need visual/mobile QA before release.
- Container-query behavior is source truth and must not be inverted or replaced without responsive QA and migration notes.
- Rich docs examples mix runtime shell classes with buttons, icons, toggles, forms, sections, and docs presentation dependencies.
- Docs under-document source mechanics such as reduced-motion, forced-colors gaps, overflow/overscroll, and container-query behavior.

## 10. Audit Rules for Later Android Shell Work

- Do not rename, remove, or reclassify Android shell selectors without later approved migration work.
- Do not rename, remove, or deprecate `--android-shell-*` local variables without token and migration review.
- Do not change safe-area behavior without Android/mobile system-bar and visual QA.
- Do not change bottom-nav, FAB, topbar, or pane behavior without responsive screenshots and migration notes.
- Do not add toolbar/menu/drawer/routing/filter behavior without explicit accessibility and docs approval.
- Do not change filter, current, disabled, or semantic status styling without state and contrast review.
- Do not change container-query thresholds without responsive/mobile QA and docs updates.
- If Android shell source CSS changes while generated output is out of scope, record `dist refresh pending`.

## 11. Future Work Contract

- Component implementation work should evaluate forced-colors coverage, safe-area behavior, sticky/topbar/FAB overlap, and narrow-container behavior.
- Docs rewrite work should separate runtime Android shell guidance from docs presentation dependencies.
- Docs rewrite work should explain source-owned container queries, reduced-motion behavior, safe-area constraints, and consumer-owned behavior boundaries.
- Accessibility work should review focus visibility, icon-only labels, current destination state, filter state, TalkBack-friendly naming, touch targets, and live update patterns.
- Responsive/mobile QA should review device, adaptive, raised, bottom-nav, FAB, pane, filter, settings, and notification examples across narrow and wide containers.
- Theme/contrast work should review text-soft usage, semantic banners/notices/chips, active nav states, FAB contrast, backdrop blur, and gradient-backed surfaces across all themes.
- Component architecture work may later decide whether Android shell should remain one large component or split into smaller package-facing surfaces.

## 12. Public Interfaces and Compatibility

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

## 13. Implementation Log

Files changed:

- Added `@24vlh/vds/docs/planning/features/VDS-2030-android-shell-component-audit.md`.
- Added `@24vlh/vds/docs/planning/components/vds-android-shell-component-audit.md`.
- Updated `@24vlh/vds/docs/planning/master-feature-map.md`.

Validation commands:

- `pnpm run audit:tokens`
  - Passed: token usage audit passed for `43` files.
- `pnpm run audit`
  - Passed: CSS parse, class usage, token usage, docs dependency, and selector inventory checks passed.
- `pnpm run audit:dist`
  - Passed: generated artifacts are fresh with `80` CSS files checked.
- `pnpm run audit:consumers`
  - Failed only because generated consumer compatibility reports are stale:
    - `docs/planning/api/vds-consumer-compatibility.json`
    - `docs/planning/api/vds-consumer-compatibility.md`
  - Per `VDS-2030` scope, `pnpm run consumer:scan` was not run.
- Read-only Android shell audit scan:
  - Confirmed `1535` source CSS lines, `177` selector blocks, `219` selectors, `756` declarations, `134` custom property declarations, `59` unique `--android-shell-*` tokens, `557` `var(...)` references, `2` media blocks, `4` container queries, `4` safe-area inset references, `5` `:focus-visible` selectors, `1` reduced-motion block, `0` forced-colors blocks, `134` Android shell classes, `116` public classes, `18` candidate-public classes, `1308` raw-doc lines, `10` generated docs blocks, `8` code examples, `157` generated class tokens, empty generated `source_css`, and package-facing dist file presence.
- Markdown sanity checks:
  - Passed: `VDS-2030` appears as `done`, `VDS-0500` remains `in-progress`, the Android shell artifact path resolves, plan/artifact scope agrees that no runtime/generated files changed, and the next recommended item is `VDS-2040 Authoring layer audit`.
- `git diff --check`
  - Passed for changed planning files.

Notes:

- No source CSS, raw docs, generated docs index, generated `dist`, package metadata, selector inventory, consumer report, workflow, npm tag, or version field was changed.
