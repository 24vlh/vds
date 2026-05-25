# VDS-2210 Identity Component Audit

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2210`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2210-identity-component-audit.md`

## 1. Goal

Create the identity component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only identity contract: inline SVG logo styling, logo anatomy, mark/wordmark variants, size/layout/clearspace utilities, color modes, theme token dependencies, static logo asset guidance, docs/index metadata, package-facing dist presence, and accessibility/theming risks before any identity CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/identity.css` selector, logo anatomy, inline SVG, size/layout, clearspace, color-mode, theme-token, static asset, package, and accessibility evidence.
- Record public and candidate-public selector inventory evidence for the identity class surface.
- Record raw docs and generated docs-index metadata for `vds-identity`.
- Record package-facing `dist/identity.css` and `.min.css` presence.
- Add an identity component audit artifact for later CSS fixes, docs rewrite, selector classification, package guidance, static asset guidance, accessibility review, theme/contrast checks, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2210` is done, and the next recommended item is `VDS-2220`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding logo geometry changes, SVG asset regeneration, static asset policy changes, package export changes, selector reclassification, docs rewrites, accessibility smoke tests, visual checks, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-identity.json`
- Repo files:
  - `@24vlh/vds/src/identity.css`
  - `@24vlh/vds/doc-raw/vds-identity.doc.html`
  - `@24vlh/vds/dist/identity.css`
  - `@24vlh/vds/dist/identity.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
- Prior evidence:
  - `VDS-1150` identity token/SVG palette evidence.
  - Prior theme audits for logo color token and contrast context.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/identity.css` has `354` lines.
- Selector blocks: `59`.
- Expanded selectors: `81`.
- Declarations: `110`.
- Local custom property declaration lines: `19`.
- Unique local custom property names: `19`.
- `var(...)` references: `60`.
- `!important` declarations: `8`.
- Hard-coded hex/rgb color references: `0`.
- `color-mix(...)` uses: `0`.

State, motion, and media evidence:

- `:hover` selector matches: `0`.
- `:focus` selector matches: `0`.
- `:focus-visible` selector matches: `0`.
- `:focus-within` selector matches: `0`.
- `:active` selector matches: `0`.
- Disabled/`aria-disabled` selector matches: `0`.
- Transition declarations: `0`.
- Transform declarations: `0`.
- Animation declarations: `0`.
- `@keyframes`: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.
- Media queries: `0`.

Style and layout evidence:

- Fill declarations: `9`.
- Stroke declarations: `15`.
- Width declarations: `1`.
- Height declarations: `7`.
- Display declarations: `3`.
- Inline-flex declarations: `1`.
- Flex declarations: `1`.
- Position declarations: `0`.
- Z-index declarations: `0`.
- Overflow declarations: `1`.

Package-facing output evidence:

- `@24vlh/vds/dist/identity.css` exists.
- `@24vlh/vds/dist/identity.min.css` exists.
- `@24vlh/vds/dist/components/identity.css` does not exist and is not expected for this standalone identity surface.
- `@24vlh/vds/dist/components/identity.min.css` does not exist and is not expected for this standalone identity surface.
- `@24vlh/vds/src/index.css` does not import `identity.css`.
- `@24vlh/vds/src/core.css` does not import `identity.css`.

## 5. Identity Contract

Current identity source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Root scope | `[data-vds-identity]`, `.vds-identity` | local logo token scope |
| Base logo | `.logo` | inline SVG/logo foundation |
| Anatomy | `.logo-wordmark`, `.logo-frame`, `.logo-rail`, `.logo-chevron`, `.logo-text-primary`, `.logo-text-secondary` | Vlah lockup geometry and text styling |
| KeepExec helpers | `.ke-ink`, `.ke-accent`, `.ke-muted`, `.ke-frame`, `.ke-mark`, `.ke-text-primary`, `.ke-text-secondary` | KeepExec inline SVG mark and wordmark styling |
| Color modes | `.logo--mono`, `.logo--footer`, `.logo--inverse`, `.logo--ink` | theme-driven color treatments |
| Structure | `.logo--horizontal`, `.logo--mark-only` | lockup and mark-only variants |
| Size scale | `.logo--xs`, `.logo--sm`, `.logo--md`, `.logo--lg`, `.logo--xl`, `.logo--xxl` | tokenized logo sizing |
| Layout | `.logo--inline`, `.logo--block`, `.logo--center`, `.logo--left`, `.logo--right` | placement and alignment helpers |
| Clearspace | `.logo--pad-xs`, `.logo--pad-sm`, `.logo--pad-md`, `.logo--pad-lg`, `.logo--pad-xl` | padding/clearspace utilities |

Source interpretation:

- `@24vlh/vds/src/identity.css` is the source truth for current identity CSS behavior.
- Identity CSS is a standalone top-level package surface, not a component imported by `src/index.css` or a foundation imported by `src/core.css`.
- Inline SVG logo classes can inherit tokenized stroke, fill, color, size, spacing, and clearspace rules.
- External `<img>` logo assets must use static variants and cannot inherit inline SVG stroke/fill rules.
- CSS does not own logo placement semantics, accessible names, decorative treatment, link behavior, image `alt`, static asset selection, analytics, routing, or contrast validation in context.
- Existing identity selectors, local variables, inline SVG architecture, logo geometry, color modes, clearspace utilities, static asset guidance, docs examples, and package-facing outputs are compatibility-sensitive.

## 6. Token and Color Surface

Local custom properties:

- `--logo-clearspace`
- `--logo-doc-height`
- `--logo-ke-frame-stroke`
- `--logo-ke-mark-stroke`
- `--logo-ke-primary-letter-spacing`
- `--logo-ke-secondary-letter-spacing`
- `--logo-ke-text-primary-size`
- `--logo-ke-text-secondary-size`
- `--logo-min-horizontal`
- `--logo-min-mark`
- `--logo-primary-letter-spacing`
- `--logo-secondary-letter-spacing`
- `--logo-size-xs`
- `--logo-size-sm`
- `--logo-size-md`
- `--logo-size-lg`
- `--logo-size-xl`
- `--logo-size-xxl`
- `--logo-stroke-primary`

Theme token dependencies:

- `--color-logo-ink`
- `--color-logo-accent`
- `--color-logo-mono`
- `--color-logo-footer-ink`
- `--color-logo-footer-accent`
- `--color-logo-ink-inverse`
- `--color-logo-accent-inverse`
- Adjacent muted/text tokens such as `--color-text-muted`.

Audit conclusions:

- Geometry, stroke widths, clearspace, letter spacing, and size presets are identity-owned and tokenized.
- Themes supply logo color values; they should not redefine logo geometry.
- Source has no hard-coded runtime hex/rgb colors.
- Raw docs show theme-binding examples with `#FFFFFF` inverse values; that is docs evidence, not source truth.
- No local variable, theme token reference, geometry value, or static asset guidance is approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

Selector inventory totals:

- Identity-source classes: `37`.
- Public classes: `31`.
- Candidate-public classes: `6`.

Candidate-public classes:

- `.logo--block`
- `.logo--ink`
- `.logo--left`
- `.logo--right`
- `.logo--xxl`
- `.vds-identity`

Audit conclusions:

- Candidate-public status reflects current selector inventory classification, not permission to remove or rename source-defined selectors.
- `.vds-identity` is a root scope candidate-public selector and must remain compatibility-sensitive.
- Layout and color-mode candidate classes need classification before cleanup.
- Future selector pruning or reclassification requires migration approval.

## 8. Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-identity.doc.html` has `1111` lines.
- Docs cover identity tokens, KeepExec lockup and mark, theme bindings, logo anatomy, core variants, size/layout utilities, clearspace utilities, mark-only and wordmark-only usage, inline versus external SVG usage, footer usage, color mode utilities, packaged logo assets, and accessibility/usage rules.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-identity.json`
- Blocks: `13`.
- Code examples: `14`.
- Generated class tokens: `53`.
- Generated `source_css`: `[]` (`source_css: []`).

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `identity` | `21` |
| `logo` | `395` |
| `brand` | `3` |
| `mark` | `73` |
| `wordmark` | `18` |
| `symbol` | `0` |
| `svg` | `134` |
| `palette` | `1` |
| `inverse` | `41` |
| `mono` | `41` |
| `monochrome` | `0` |
| `clearspace` | `9` |
| `minimum` | `2` |
| `size` | `35` |
| `aria` | `36` |
| `aria-label` | `4` |
| `alt` | `15` |
| `decorative` | `2` |
| `title` | `13` |
| `label` | `4` |
| `contrast` | `3` |
| `theme` | `17` |
| `currentColor` | `0` |
| `fill` | `5` |
| `stroke` | `32` |
| `focus` | `0` |
| `keyboard` | `0` |
| `responsive` | `0` |
| `mobile` | `0` |
| `forced-colors` | `0` |
| `reduced-motion` | `0` |
| `animation` | `2` |
| `motion` | `0` |

Audit conclusions:

- Generated `source_css: []` is a docs-index metadata gap and is not manually fixed here.
- Raw docs strongly cover inline SVG usage, external/static SVG usage, packaged asset naming, `alt`, `aria-label`, decorative logos, contrast, minimum size, clearspace, and no geometry edits.
- Raw docs do not mention focus, keyboard, responsive/mobile, reduced-motion, or forced-colors.
- Docs examples include adjacent section, doc-block, footer, layout, spacing, and typography dependencies; later docs rewrite should separate runtime requirements from demo scaffolding.

## 9. Static Asset and Package Evidence

Raw docs record packaged logo asset patterns:

- `/svg/vlah-horizontal-[theme]-[mode]-[color|mono].svg`
- `/svg/vlah-mark-[theme]-[mode]-[color|mono].svg`
- `/svg/vlah-favicon-[theme]-[mode].svg`

Audit conclusions:

- Inline SVG classes are token-driven and source-controlled by `src/identity.css`.
- External SVG/image assets are static artifacts and cannot inherit inline SVG CSS geometry, stroke, or fill rules.
- Static logo asset selection, image `alt`, decorative `alt=""`, link semantics, and contrast validation remain consumer/application responsibilities.
- Logo asset regeneration, package export changes, and docs package guidance changes are deferred to later approved work.

## 10. Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Meaningful logo accessible names.
- Decorative logo handling with empty `alt` or equivalent hiding.
- Linked-logo semantics and destination text.
- Static image `alt` text.
- Avoiding duplicate accessible names when a visible brand label is adjacent.
- Choosing inline SVG versus external image based on tokenization needs.
- Contrast validation on real backgrounds.
- Avoiding noisy, low-contrast, photographic, or animated logo backgrounds.

CSS source currently provides:

- Inline SVG stroke/fill/color styling hooks.
- Tokenized geometry, sizes, letter spacing, clearspace, and minimum sizing hooks.
- Color-mode classes for mono, footer, inverse, and ink treatments.
- No file-local focus-visible, responsive, reduced-motion, or forced-colors handling.

Audit findings:

- Identity accessibility cannot be solved by CSS; docs and consumers must preserve name, decorative, link, and image-alt rules.
- The component has no motion behavior, so missing reduced-motion handling is currently a docs/audit gap rather than a source behavior defect.
- Forced-colors handling is absent and remains future review.
- Logo contrast depends on theme tokens, chosen logo variant, background context, and static asset selection.
- Generated docs metadata does not list `identity.css`, weakening automated docs ownership checks until a later docs-index refresh/fix.

## 11. Risks and Future Routing

- Identity is a brand/asset surface; geometry, stroke, and packaged asset changes require careful migration approval.
- Inline SVG and external SVG/image paths are different public usage modes and must remain clearly separated.
- Theme token dependencies inherit risks from prior theme audits, especially inverse/footer/mono contrast on real surfaces.
- `source_css: []` is a generated docs metadata gap.
- Candidate-public layout and color-mode helpers need classification before cleanup.
- `!important` declarations are currently part of mono/inverse SVG override behavior and should not be removed without later approved cleanup.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Identity CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Static asset export or regeneration: later approved package/asset item.
- Forced-colors and logo accessibility wording: later approved accessibility/docs item.
- Theme/contrast checks: later approved visual integrity item.

## 12. Public Interfaces

- No runtime CSS APIs change.
- No CSS, raw docs, generated docs index, generated `dist`, package metadata, selector inventory, consumer reports, workflows, npm tags, or version fields change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-identity-component-audit.md` becomes the decision source for later identity CSS fixes, docs rewrite, selector classification, package guidance, static asset guidance, accessibility review, theme/contrast checks, migration notes, and release verification.

## 13. Validation Plan

Approved validation commands:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
- Read-only identity audit scan.
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
- Read-only identity audit scan confirmed CSS counts, local variables, selector inventory totals, docs/index evidence, import/package evidence, inline SVG anatomy, size/layout/clearspace utilities, color modes, theme-token dependencies, static asset guidance, accessibility gaps, generated metadata gap, and dist presence.
- Markdown sanity checks passed for master-map status, `VDS-0500` in-progress status, artifact path, no runtime/source/generated/inventory/consumer-report changes, and next recommended item.
- `git diff --check` for changed planning files passed.
