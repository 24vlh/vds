# VDS-2180 Header and Footer Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2180`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2180-header-footer-audit.md`

## 1. Goal

Create the header/footer component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only site chrome contract: headers, primary navigation, mobile nav state hooks, skip links, sticky/elevated variants, app-shell/sticky-footer helpers, footer columns/meta/actions, docs/index metadata, package-facing dist presence, and accessibility/theming/cascade risks before any header/footer CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/header-footer.css` selector, token, header, navigation, mobile-toggle, skip-link, footer, shell, responsive, z-index, focus, theme, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the header/footer class surface.
- Record raw docs and generated docs-index metadata for `vds-header-footer`.
- Record package-facing `dist/components/header-footer.css` and `.min.css` presence.
- Add a header/footer audit artifact for later CSS fixes, docs rewrite, selector classification, accessibility review, responsive/mobile QA, docs-only override cleanup, theme/contrast checks, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2180` is done, and the next recommended item is `VDS-2190`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding routing, nav-toggle JavaScript, focus management, skip-target creation, active-route synchronization, Escape/outside-click handling, or footer link behavior.
- Adding reduced-motion handling, forced-colors handling, responsive screenshots, visual checks, selector reclassification, docs rewrites, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-header-footer.json`
- Repo files:
  - `@24vlh/vds/src/components/header-footer.css`
  - `@24vlh/vds/doc-raw/vds-header-footer.doc.html`
  - `@24vlh/vds/dist/components/header-footer.css`
  - `@24vlh/vds/dist/components/header-footer.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/header-footer.css` has `512` lines.
- Selector blocks: `65`.
- Expanded selectors: `80`.
- Declarations: `234`.
- Custom property declaration lines: `22`.
- Unique local custom property names: `17`.
- `var(...)` references: `131`.
- `!important` declarations: `0`.
- Hard-coded color references: `0`.
- `color-mix(...)` uses: `0`.

State and motion evidence:

- `:hover` selector matches: `4`.
- `:focus` selector matches: `0`.
- `:focus-visible` selector matches: `6`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled/`aria-disabled` selector matches: `3`.
- Active class matches: `4`.
- Nav-open/open-related matches: `6`.
- Sticky matches: `4`.
- Elevated matches: `1`.
- Transition declarations: `3`.
- Transform declarations: `2`.
- Animation declarations: `0`.
- `@keyframes`: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Layout and style evidence:

- Media blocks: `2`, both at `max-width: 768px`.
- Grid display declarations: `1`.
- Flex display declarations: `12`.
- Inline-flex declarations: `3`.
- Gap declarations: `13`.
- Padding-related declarations: `14`.
- Position declarations: `8`.
- Z-index declarations: `3`.
- Overflow declarations: `1`.
- Width declarations: `10`.
- Height declarations: `6`.
- Max-height declarations: `3`.
- Grid-template-columns declarations: `1`.
- Box-shadow declarations: `4`.
- Outline declarations: `5`.
- Outline-offset declarations: `5`.
- Border-related declarations: `14`.
- Border-radius declarations: `6`.
- Background/background-color declarations: `9`.
- Color declarations: `9`.
- Opacity declarations: `5`.
- Cursor declarations: `2`.
- Pointer-events declarations: `1`.

Package-facing output evidence:

- `@24vlh/vds/dist/components/header-footer.css` exists.
- `@24vlh/vds/dist/components/header-footer.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/header-footer.css`.
- `@24vlh/vds/src/core.css` does not import header/footer.

## 5. Component Contract

Current header/footer source surfaces:

- Root/local variables:
  - `[data-vds-header-footer]`
  - `.vds-header-footer`
- Header container and variants:
  - `.header`
  - `.header--sticky`
  - `.header--elevated`
  - `.header--compact`
  - `.header--tall`
  - `.header--borderless`
  - `.header--transparent`
- Header structure:
  - `.header__inner`
  - `.header__left`
  - `.header__right`
  - `.header__center`
  - `.header__stack`
  - `.header__actions`
  - `.header__meta`
- Header logo and navigation hooks:
  - `.header .logo`
  - `.header .logo svg`
  - `.header .logo[href]:hover`
  - `.header .nav`
  - `.header .nav__item`
  - `.header .nav__link`
  - `.header .nav__item--active`
  - `.header .nav__link--active`
  - `.header .nav__item--disabled`
  - `.header .nav__link--disabled`
  - `.header .nav__item:focus-visible`
  - `.header .nav__link:focus-visible`
- Mobile nav and panel hooks:
  - `.header .header__toggle`
  - `.header .header__toggle svg`
  - `.header .header__toggle:focus-visible`
  - `.header__panel`
  - `.header__panel .nav`
  - `.header.header--nav-open .nav`
  - `.header.header--nav-open .nav__item`
  - `.header.header--nav-open .nav__link`
  - `.header--nav-panel .header__inner .nav`
  - `.header--nav-panel.header--nav-open .header__panel`
  - `.header--nav-panel.header--nav-open .nav`
- Skip links:
  - `.skip-link`
  - `.header .skip-link`
  - `.skip-link:focus-visible`
- Footer container and variants:
  - `.footer`
  - `.footer__inner`
  - `.footer--compact`
  - `.footer--borderless`
  - `.footer__columns`
  - `.footer__bottom`
  - `.footer__actions`
- Footer columns, links, logo, and meta:
  - `.footer__col`
  - `.footer__col-title`
  - `.footer__link`
  - `.footer__link:hover`
  - `.footer__link:focus-visible`
  - `.footer .logo`
  - `.footer .logo svg`
  - `.footer .logo-frame`
  - `.footer .logo-rail`
  - `.footer .logo-chevron`
  - `.footer__meta`
  - `.footer__meta a`
  - `.footer__meta a:focus-visible`
- App shell:
  - `.shell`
  - `.shell__main`
  - `.shell__footer`

Source interpretation:

- Header/footer CSS provides visual chrome, layout, sticky/elevated variants, active/disabled nav visuals, mobile nav state hooks, skip-link visibility, footer structure, and sticky-footer shell helpers.
- CSS does not provide routing, nav-toggle JavaScript, focus management, skip-target creation, active-route synchronization, Escape/outside-click handling, logo accessible names, or footer link behavior.
- Header/footer selectors, local variables, mobile nav hooks, active/disabled states, skip-link behavior, sticky/elevated variants, footer structures, docs examples, and package-facing outputs are compatibility-sensitive.

## 6. Local Token Surface

Current local variables:

| Variable | Role |
| --- | --- |
| `--header-height` | default header min-height |
| `--header-logo-height` | header logo SVG height |
| `--header-toggle-size` | mobile toggle square size |
| `--header-padding-inline` | header horizontal padding |
| `--header-gap` | header layout gap |
| `--header-max-width` | header content max width |
| `--header-panel-bg` | mobile/panel background alias |
| `--header-panel-border` | mobile/panel border alias |
| `--header-panel-shadow` | mobile/panel shadow alias |
| `--header-shadow` | elevated header shadow alias |
| `--header-sticky-offset` | sticky header top offset |
| `--footer-logo-height` | footer logo SVG height |
| `--footer-col-min-width` | footer column min width |
| `--footer-padding-block` | footer vertical padding |
| `--footer-padding-inline` | footer horizontal padding |
| `--footer-gap` | footer layout gap |
| `--footer-max-width` | footer content max width |

Audit conclusions:

- Local variables are component-owned aliases for site chrome layout, panel behavior, logo sizing, footer columns, and sticky/elevated presentation.
- They rely on primitive spacing, sizing, border, shadow, z-index, focus, logo, and footer/theme color tokens.
- No local variable or token reference is approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

Selector inventory totals:

- Header/footer-source classes: `45`.
- Public classes: `37`.
- Candidate-public classes: `8`.

Class family counts:

| Group | Total |
| --- | ---: |
| root | `1` |
| header | `18` |
| nav | `7` |
| footer | `11` |
| shell | `3` |
| skip | `1` |
| logo | `1` |

Candidate-public classes:

- `.vds-header-footer`
- `.header--tall`
- `.header--borderless`
- `.header--transparent`
- `.header__center`
- `.header__meta`
- `.nav__item--disabled`
- `.footer--borderless`

Audit conclusions:

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- Header-scoped `.nav` and `.logo` rules are cascade-sensitive because they compose with the navigation and identity/icon systems.
- Future selector pruning or reclassification requires migration approval.

## 8. Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-header-footer.doc.html` has `1033` lines.
- Docs cover structural model, app shell and sticky footer, header anatomy, header layout utilities, sticky/elevated headers, mobile header and nav toggle, skip-link helpers, footer anatomy, multi-column footers, footer meta/legal/actions, and usage/accessibility rules.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-header-footer.json`
- Blocks: `14`.
- Code examples: `14`.
- Generated class tokens: `45`.
- Generated `source_css`: `base.css`, `header-footer.css`, `navigation.css`, and `typography.css`.

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `header` | `208` |
| `footer` | `222` |
| `nav` | `115` |
| `navigation` | `18` |
| `skip-link` | `12` |
| `skip` | `13` |
| `sticky` | `17` |
| `elevated` | `6` |
| `compact` | `12` |
| `toggle` | `14` |
| `nav-open` | `6` |
| `nav-panel` | `9` |
| `aria-expanded` | `4` |
| `aria-controls` | `3` |
| `aria-label` | `16` |
| `aria-current` | `2` |
| `active` | `14` |
| `disabled` | `0` |
| `keyboard` | `3` |
| `focus` | `11` |
| `focus-visible` | `6` |
| `responsive` | `3` |
| `mobile` | `21` |
| `footer__link` | `43` |
| `columns` | `5` |
| `meta` | `17` |
| `legal` | `4` |
| `logo` | `11` |
| `role` | `5` |
| `landmark` | `4` |
| `contrast` | `3` |
| `reduced-motion` | `0` |
| `forced-colors` | `0` |
| `hover` | `0` |
| `JS` | `4` |
| `JavaScript` | `0` |

Audit conclusions:

- Generated `source_css` metadata is present and includes `header-footer.css`.
- Raw docs strongly cover header/footer anatomy, mobile nav hooks, skip links, and ARIA state examples.
- Raw docs do not mention disabled, reduced-motion, forced-colors, or hover directly.
- Docs examples include adjacent dependencies such as navigation, buttons, icons, cards, doc-block previews, and utilities; later docs rewrite should separate package runtime dependencies from demo scaffolding.

## 9. Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Route state and `aria-current` synchronization.
- Mobile nav open/close state, `aria-expanded`, and `aria-controls` synchronization.
- Escape handling, outside-click behavior, inert/background policy, and focus movement/restoration when mobile navigation behaves like a panel.
- Valid skip-link targets, such as `#main`.
- Logo accessible names and duplicate-name avoidance.
- Footer link semantics, legal link destinations, and any dynamic footer content updates.
- Keyboard behavior for any custom controls placed inside the header or footer.

CSS source currently provides:

- Sticky/elevated header positioning and z-index use.
- Active, hover, focus-visible, disabled, and mobile-collapsed nav visuals.
- CSS-complete mobile nav state hooks through `.header--nav-open` and `.header--nav-panel`.
- Skip-link reveal styling on `:focus-visible`.
- Footer layout, columns, links, logo color hooks, meta text, and sticky-footer app shell helpers.
- No file-local reduced-motion or forced-colors handling.

Audit findings:

- `.header--nav-open` is source truth for visual state but runtime state and ARIA sync are application-owned.
- Header-scoped `.nav` rules overlap with the standalone navigation component and need care before selector cleanup.
- Sticky header and mobile panel z-index behavior should coordinate with the z-index and overlay policies from earlier audits.
- Skip links depend on valid consumer/docs targets and should remain visible to keyboard users.
- Footer colors rely on footer/theme tokens, but docs-only `css/overrides.css` can mask package-facing footer behavior in the docs shell.
- Forced-colors handling is absent.

## 10. Responsive and Motion Evidence

Responsive source behavior:

- Two `max-width: 768px` blocks.
- Header mobile behavior hides `.header .nav` by default, shows `.header__toggle`, and exposes `.header.header--nav-open .nav` as an absolute panel.
- `.header--nav-panel.header--nav-open .header__panel` provides an alternate panel-hosted nav surface.
- Footer mobile behavior stacks `.footer__inner` into a column and increases vertical gap.

Motion source behavior:

- Source has `3` transition declarations.
- Source has `2` transform declarations.
- Source has `0` animation declarations.
- Source has `0` `@keyframes`.
- No file-local `prefers-reduced-motion` block is present.
- No file-local `forced-colors` block is present.

Audit conclusions:

- Header/footer source behavior includes small transition/transform affordances for logo hover, skip-link reveal, and link opacity.
- Reduced-motion absence is an audit finding because transitions/transforms exist.
- Responsive mobile nav and footer stacking need later visual and accessibility QA.
- Forced-colors review remains future work.

## 11. Risks and Future Routing

- Header/footer is a cross-page chrome component; selector pruning or component splitting requires migration approval.
- Header-scoped navigation rules and standalone navigation CSS must remain distinct until a later approved cleanup classifies ownership.
- `.header--nav-open` and `.header--nav-panel` are CSS hooks only; application behavior must synchronize ARIA and focus.
- Sticky/elevated header and mobile panel z-index behavior needs overlay stack review before changes.
- Footer theme behavior can be masked by docs-only footer overrides from `VDS-1280`.
- Footer columns and shell helpers overlap conceptually with layout utilities, but remain package-facing header/footer surfaces.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Header/footer CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Mobile nav behavior and ARIA guidance: later approved accessibility/docs item.
- Responsive screenshots and visual QA: later approved responsive/visual verification item.
- Theme/contrast and docs-only override cleanup: later approved visual integrity or docs-shell cleanup item.

## 12. Public Interfaces

- No runtime CSS APIs change.
- No CSS, raw docs, generated docs index, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-header-footer-audit.md` becomes the decision source for later header/footer CSS fixes, docs rewrite, selector classification, accessibility review, responsive/mobile QA, docs-only override cleanup, theme/contrast checks, migration notes, and release verification.

## 13. Validation Plan

Approved validation commands:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
- Read-only header/footer audit scan.
- Markdown sanity checks for master-map status, artifact path, no runtime/source/generated changes, and next recommended item.
- `git diff --check` for changed planning files.

Forbidden commands for this item:

- `pnpm run build`
- `pnpm run build:prod`
- `pnpm run docs:vds:index`
- `pnpm run inventory:selectors`
- `pnpm run consumer:scan`

## 14. Post-Implementation Validation Log

- `pnpm run audit:tokens` passed: token usage audit passed for `43` files.
- `pnpm run audit` passed: CSS parse, class, token, doc dependency, and selector inventory freshness checks passed.
- `pnpm run audit:dist` was attempted with a `120s` timeout. It started `node static/js/check-generated-artifacts.js --check` but did not complete before timing out. No write/regeneration command was run.
- `pnpm run audit:consumers` failed only because `docs/planning/api/vds-consumer-compatibility.json` and `.md` are stale; per plan, `pnpm run consumer:scan` was not run.
- Read-only header/footer audit scan confirmed CSS counts, local variables, selector inventory totals, docs/index evidence, import/package evidence, header/nav/mobile-toggle/skip-link/footer/shell evidence, active/disabled/sticky/z-index/responsive behavior, reduced-motion gap, and forced-colors gap.
- Markdown sanity checks passed after this validation log update.
- `git diff --check` for changed planning files passed.
