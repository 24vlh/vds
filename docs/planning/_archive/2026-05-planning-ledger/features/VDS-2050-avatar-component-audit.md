# VDS-2050 Avatar Component Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

- Status: `done`
- Last updated: `2026-05-24`
- Master item: `VDS-2050`
- Plan file: `@24vlh/vds/docs/planning/features/VDS-2050-avatar-component-audit.md`

## 1. Goal

Create the avatar component audit for the `VDS-0500 Component Modernization Wave`. This item records the current CSS-only avatar contract: sizes, shapes, initials, image media, status dots, avatar groups, overflow counts, semantic color variants, selector classifications, docs/index metadata, package-facing dist presence, and accessibility/theming risks before any avatar CSS fixes or docs rewrites begin.

## 2. Scope

### In scope

- Record current `src/components/avatar.css` selector, token, media, group, status, shape, size, and color-variant evidence.
- Record public and candidate-public selector inventory evidence for the avatar class surface.
- Record raw docs and generated docs-index metadata for `vds-avatar`.
- Record package-facing `dist/components/avatar.css` and `.min.css` presence.
- Add an avatar component audit artifact for later CSS fixes, docs rewrite, accessibility review, theme/contrast checks, selector classification, image/fallback guidance, migration notes, and release verification.
- Update the master feature map so `VDS-0500` remains in progress, `VDS-2050` is done, and the next recommended item is `VDS-2060`.

### Out of scope

- Changing CSS, selectors, tokens, custom property names, CSS imports, raw docs, README, docs shell HTML, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields.
- Running `pnpm run build` or `pnpm run build:prod`.
- Running write/regeneration commands such as `pnpm run docs:vds:index`, `pnpm run inventory:selectors`, or `pnpm run consumer:scan`.
- Adding JavaScript identity, presence, image-loading, group-overflow, or accessible-name behavior.
- Adding focus styles, forced-colors handling, responsive screenshots, visual checks, selector reclassification, docs rewrites, image fallbacks, or generated output.

## 3. Inputs Used

- Router(s):
  - `@24vlh/agents/agents-repo/vds/AGENTS.md`
  - `@24vlh/agents/docs_vds/AGENTS.md`
  - `@24vlh/agents/docs_md/css/AGENTS.md`
  - `@24vlh/agents/docs_md/design/AGENTS.md`
- Local standards docs:
  - `@24vlh/agents/docs_md/design/w3c/wcag-2-2-quick-reference.md`
  - `@24vlh/agents/docs_md/design/w3c/aria-authoring-practices-guide.md`
- Local docs:
  - `@24vlh/vds/docs/planning/master-feature-map.md`
  - `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
  - `@24vlh/agents/docs_vds/components/vds-avatar.json`
- Repo files:
  - `@24vlh/vds/src/components/avatar.css`
  - `@24vlh/vds/doc-raw/vds-avatar.doc.html`
  - `@24vlh/vds/dist/components/avatar.css`
  - `@24vlh/vds/dist/components/avatar.min.css`
  - `@24vlh/vds/src/index.css`
  - `@24vlh/vds/src/core.css`
- Current audit results:
  - Validation recorded in the post-implementation update.

## 4. Current Behavior Snapshot

Source CSS evidence:

- `@24vlh/vds/src/components/avatar.css` has `234` lines.
- Selector blocks: `30`.
- Expanded selectors: `38`.
- Declarations: `113`.
- Custom property declarations: `46`.
- Unique `--avatar-*` local token names: `20`.
- `var(...)` references: `79`.
- `!important` declarations: `0`.
- Hard-coded hex colors: `0`.
- `rgb(...)` / `rgba(...)` colors: `0`.

Media and interaction evidence:

- Media blocks: `0`.
- `:hover` selectors: `0`.
- `:focus-visible` selectors: `0`.
- `:focus-within` selectors: `0`.
- `:active` selectors: `0`.
- Disabled selector matches: `0`.
- Transition declarations: `0`.
- Transform declarations: `1`.
- Animation declarations: `0`.
- `@keyframes`: `0`.
- Reduced-motion blocks: `0`.
- Forced-colors blocks: `0`.

Layout and media evidence:

- Overflow declarations: `2`.
- `object-fit` declarations: `1`.
- Position declarations: `4`.
- `z-index` declarations: `0`.
- `box-shadow` declarations: `3`.
- Responsive behavior is modifier/host controlled rather than viewport-query based.

Package-facing output evidence:

- `@24vlh/vds/dist/components/avatar.css` exists.
- `@24vlh/vds/dist/components/avatar.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/avatar.css`.
- `@24vlh/vds/src/core.css` does not import avatar.

## 5. Component Contract

Current avatar source surfaces:

- Root/local-token scopes:
  - `[data-vds-avatar]`
  - `.vds-avatar`
- Base avatar:
  - `.avatar`
  - `.avatar__media`
  - `.avatar__image`
  - `.avatar__initials`
- Shape and treatment modifiers:
  - `.avatar--square`
  - `.avatar--sharp`
  - `.avatar--ring`
  - `.avatar--bordered`
- Size modifiers:
  - `.avatar--xs`
  - `.avatar--sm`
  - `.avatar--lg`
  - `.avatar--xl`
- Status indicators:
  - `.avatar__status`
  - `.avatar__status--online`
  - `.avatar__status--away`
  - `.avatar__status--busy`
- Groups and overflow counts:
  - `.avatar-group`
  - `.avatar-group--spread`
  - `.avatar-group__more`
- Color variants:
  - `.avatar--accent`
  - `.avatar--success`
  - `.avatar--info`
  - `.avatar--warning`
  - `.avatar--danger`
  - `.avatar--mono`
  - `.avatar--neutral`

Source interpretation:

- Avatar is an identity/media primitive, not an app identity or presence runtime.
- CSS provides visual sizing, cropping, rings, status dots, group stacking, and variant colors.
- Consumer/application code owns meaningful `alt`, decorative image handling, visible labels, initials accessible names, interactive avatar semantics, status text, image loading/fallbacks, and dynamic overflow counts.
- Avatar classes and local variables are compatibility-sensitive.

## 6. Local Token Surface

Current local token names:

- `--avatar-bg`
- `--avatar-border`
- `--avatar-border-strong-width`
- `--avatar-border-width`
- `--avatar-font-weight`
- `--avatar-ring`
- `--avatar-ring-width`
- `--avatar-size-lg`
- `--avatar-size-md`
- `--avatar-size-sm`
- `--avatar-size-xl`
- `--avatar-size-xs`
- `--avatar-stack-offset`
- `--avatar-status-bg`
- `--avatar-status-border-width`
- `--avatar-status-offset`
- `--avatar-status-ring`
- `--avatar-status-ring-width`
- `--avatar-status-size`
- `--avatar-text`

Audit conclusions:

- Local variables are component-owned aliases.
- They pull from primitive sizing, spacing, radius, border, typography, surface, text, semantic color, and theme tokens.
- They are not approved for rename, removal, promotion, or deprecation in this item.

## 7. Selector/API Evidence

Selector inventory evidence:

- `27` avatar source classes are defined in selector inventory.
- Classification totals:
  - `25` public.
  - `2` candidate-public.
- Class family counts:
  - root: `1`.
  - base: `1`.
  - media/image: `2`.
  - initials: `1`.
  - status: `4`.
  - group/overflow: `3`.
  - size: `4`.
  - shape/ring/border: `4`.
  - color: `7`.

Candidate-public classes:

- `.vds-avatar`
- `.avatar--neutral`

Audit conclusions:

- Candidate-public status reflects current docs coverage, not permission to remove or rename source-defined selectors.
- `.avatar--neutral` and `.vds-avatar` must remain compatibility-sensitive until later approved selector classification or migration work.

## 8. Docs and Generated Index Evidence

Raw docs evidence:

- `@24vlh/vds/doc-raw/vds-avatar.doc.html` has `301` lines.
- Raw docs cover sizes, shape variants, image avatars, rings/borders, color variants, presence status, avatar groups, overflow counts, usage guidance, and accessibility rules.
- Raw docs examples include image `alt`, initials-only `role="img"` examples, `aria-label`, decorative-image guidance, and status-dot pairing guidance.

Generated index evidence:

- `@24vlh/agents/docs_vds/components/vds-avatar.json`
- Blocks: `7`.
- Code examples: `6`.
- Generated class tokens: `33`.
- Generated `source_css`:
  - `avatar.css`
  - `base.css`
  - `primitives.css`
  - `typography.css`

Raw-doc term evidence:

| Term | Mentions |
| --- | ---: |
| `avatar` | `159` |
| `initials` | `31` |
| `image` | `15` |
| `status` | `17` |
| `presence` | `4` |
| `group` | `9` |
| `overflow` | `1` |
| `aria` | `16` |
| `alt` | `11` |
| `label` | `9` |
| `decorative` | `1` |
| `contrast` | `3` |
| `keyboard` | `0` |
| `focus` | `0` |
| `disabled` | `0` |
| `loading` | `0` |
| `responsive` | `0` |
| `mobile` | `0` |
| `forced-colors` | `0` |
| `reduced-motion` | `0` |

Audit conclusions:

- Generated avatar `source_css` metadata is present.
- Generated `source_css` does not list a theme file even though avatar color variants rely on theme color tokens; this is dependency metadata evidence, not a manual generated-index fix.
- Docs cover accessibility responsibilities, but do not mention forced-colors, responsive/mobile, focus, loading, or reduced-motion behavior.

## 9. Accessibility and Behavior Boundaries

Consumer/application code remains responsible for:

- Meaningful image `alt` when the avatar conveys identity.
- Empty `alt=""` for decorative images inside already-labelled controls.
- `role="img"` and `aria-label` for initials-only avatars when the avatar itself conveys identity.
- Avoiding duplicate accessible names when visible text already labels the person/entity.
- Text labels or nearby status text for critical presence/status information.
- Interactive avatar semantics when avatars are wrapped in links, buttons, menus, or controls.
- Image loading, broken-image fallbacks, and dynamic overflow counts.

CSS source currently provides:

- Fixed avatar size tokens and modifiers.
- Circular, square, sharp, ring, and bordered visual treatments.
- Image cropping through `.avatar__media` and `.avatar__image`.
- Initial text styling.
- Visual status-dot placement and status colors.
- Avatar group stacking and spread variants.
- Overflow count styling through `.avatar-group__more`.

Audit findings:

- No file-local focus styles because avatars are not inherently interactive.
- No forced-colors block.
- No responsive viewport media block.
- No loading/broken-image handling.
- Status dots are visual-only unless paired with consumer-provided text.

## 10. Risks and Future Routing

- Avatar image meaning cannot be solved by CSS; non-text-content handling remains a markup and application responsibility.
- Status dots are visual color indicators and must not be the only way to communicate critical status.
- Color variants and status colors inherit contrast risks from theme audits, especially for initials and soft semantic surfaces.
- `.avatar-group` uses negative margins and ring shadows; future changes must preserve group stacking and overflow-count compatibility.
- Interactive avatar usage must be handled by the wrapping control/link pattern and relevant component behavior.
- Any future source CSS change with generated output out of scope must record `dist refresh pending`.

Future work routing:

- Avatar CSS fixes: later approved component cleanup item.
- Docs rewrite/package guidance: later approved docs item.
- Generated docs metadata refresh: later approved docs-index item.
- Selector classification changes: later approved selector inventory item.
- Theme/contrast checks: later approved visual/contrast QA items.
- Dist refresh: later approved release/build-output item.

## 11. Public Interfaces

- No runtime CSS APIs change.
- No selectors, tokens, custom property names, imports, raw docs, generated docs metadata, generated `dist`, package fields, workflows, selector inventory, consumer reports, npm tags, or version fields change.
- Planning interface added: `@24vlh/vds/docs/planning/components/vds-avatar-component-audit.md` becomes the decision source for later avatar CSS fixes, docs rewrite, accessibility review, theme/contrast checks, selector classification, image/fallback guidance, migration notes, and release verification.

## 12. Validation Plan

Run after documentation updates:

- `pnpm run audit:tokens`
- `pnpm run audit`
- `pnpm run audit:dist`
- `pnpm run audit:consumers`
  - If this fails only because consumer compatibility reports are stale, record the caveat and do not run `pnpm run consumer:scan`.
- Read-only avatar audit scan.
- Markdown sanity checks.
- `git diff --check`

Forbidden commands:

- `pnpm run build`
- `pnpm run build:prod`
- `pnpm run docs:vds:index`
- `pnpm run inventory:selectors`
- `pnpm run consumer:scan`
- any write/regeneration command.

## 13. Implementation Log

- Added `@24vlh/vds/docs/planning/features/VDS-2050-avatar-component-audit.md`.
- Added `@24vlh/vds/docs/planning/components/vds-avatar-component-audit.md`.
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
  - Per `VDS-2050` scope, `pnpm run consumer:scan` was not run.
- Read-only avatar audit scan:
  - Confirmed `234` source CSS lines, `30` selector blocks, `38` selectors, `113` declarations, `46` custom property declarations, `20` unique `--avatar-*` tokens, `79` `var(...)` references, `0` media blocks, `0` hover/focus/active/disabled selectors, `0` transitions, `1` transform declaration, `0` animations/keyframes, `0` reduced-motion blocks, `0` forced-colors blocks, `2` overflow declarations, `1` `object-fit` declaration, `4` position declarations, `0` z-index declarations, `3` box-shadow declarations, `0` hard-coded hex/rgb colors, `0` `!important`, `27` avatar classes, `25` public classes, `2` candidate-public classes, `301` raw-doc lines, `7` generated docs blocks, `6` code examples, `33` generated class tokens, non-empty generated `source_css`, index import presence, core import absence, and package-facing dist file presence.
- Markdown sanity checks:
  - Passed: `VDS-2050` appears as `done`, `VDS-0500` remains `in-progress`, the avatar artifact path resolves, plan/artifact scope agrees that no runtime/generated files changed, and the next recommended item is `VDS-2060 Badge and tag component audit`.
- `git diff --check`
  - Passed for changed planning files.

Notes:

- The WSL wrapper command is not available in this shell, so validation commands were run directly from `@24vlh/vds`.
