# VDS Avatar Component Audit

Last updated: `2026-05-24`

Source item: `VDS-2050`

This file records the avatar component audit for the component modernization wave. It is a planning artifact only: no CSS, raw docs, generated docs metadata, generated `dist`, package metadata, workflows, selector inventory, consumer reports, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/components/avatar.css` is the source truth for current avatar CSS behavior.
- `@24vlh/vds/doc-raw/vds-avatar.doc.html` and `@24vlh/agents/docs_vds/components/vds-avatar.json` are docs/index evidence.
- The current implementation is a pure CSS identity/media primitive.
- Consumer/application code owns meaningful image `alt`, decorative image handling, initials accessible names, visible labels, status text, interactive avatar semantics, image loading/fallbacks, and dynamic overflow counts.
- Existing avatar classes, size modifiers, shape modifiers, status classes, group behavior, overflow count behavior, semantic color variants, and local variables are compatibility-sensitive.
- No selector rewrite, docs rewrite, behavior implementation, generated index refresh, or generated output refresh happens in `VDS-2050`.

## Source CSS Evidence

`@24vlh/vds/src/components/avatar.css` currently has:

- Lines: `234`.
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
- `.avatar__image` uses `object-fit: cover`.
- `.avatar__media` clips image content through inherited radius and `overflow: hidden`.
- `.avatar` itself uses `overflow: visible` so status dots can sit outside the avatar edge.

Package-facing output:

- `@24vlh/vds/dist/components/avatar.css` exists.
- `@24vlh/vds/dist/components/avatar.min.css` exists.
- `@24vlh/vds/src/index.css` imports `components/avatar.css`.
- `@24vlh/vds/src/core.css` does not import avatar.

## Component Contract

Current avatar source surfaces:

| Surface | Selectors | Role |
| --- | --- | --- |
| Scope root | `[data-vds-avatar]`, `.vds-avatar` | activate avatar-local variables |
| Base | `.avatar` | avatar frame, initials container, image container host |
| Media | `.avatar__media`, `.avatar__image` | image clipping and cover-fit behavior |
| Initials | `.avatar__initials` | uppercase text fallback |
| Size modifiers | `.avatar--xs`, `.avatar--sm`, `.avatar--lg`, `.avatar--xl` | tokenized dimensions and font sizes |
| Shape/treatment | `.avatar--square`, `.avatar--sharp`, `.avatar--ring`, `.avatar--bordered` | shape and emphasis variants |
| Status | `.avatar__status`, `.avatar__status--online`, `.avatar__status--away`, `.avatar__status--busy` | visual presence indicators |
| Groups | `.avatar-group`, `.avatar-group--spread`, `.avatar-group__more` | stacked/spread groups and overflow counts |
| Color variants | `.avatar--accent`, `.avatar--success`, `.avatar--info`, `.avatar--warning`, `.avatar--danger`, `.avatar--mono`, `.avatar--neutral` | semantic/team/role color treatments |

Source interpretation:

- Avatar is an identity/media primitive, not a presence or identity runtime.
- CSS provides visual treatment, but identity meaning and accessible names are markup responsibilities.
- Status dots are visual affordances and need paired text when status is meaningful.
- Avatar groups are visual composition helpers; overflow count values are provided by application code.

## Local Token Surface

Current local variable groups:

| Family | Variables | Role |
| --- | --- | --- |
| Size | `--avatar-size-xs`, `--avatar-size-sm`, `--avatar-size-md`, `--avatar-size-lg`, `--avatar-size-xl` | dimensions and scale variants |
| Surface | `--avatar-bg`, `--avatar-border`, `--avatar-text` | default and variant colors |
| Border/ring | `--avatar-border-width`, `--avatar-border-strong-width`, `--avatar-ring`, `--avatar-ring-width` | outlines, stacked separation, and emphasis |
| Status | `--avatar-status-size`, `--avatar-status-bg`, `--avatar-status-ring`, `--avatar-status-ring-width`, `--avatar-status-border-width`, `--avatar-status-offset` | dot size, color, ring, and placement |
| Group | `--avatar-stack-offset` | negative stack overlap and spread gap |
| Typography | `--avatar-font-weight` | initials weight |

Top referenced upstream token groups:

- Primitive sizing/typography: `--text-xxs`, `--text-xs`, `--text-sm`, `--text-md`, `--font-weight-semibold`.
- Radius and border: `--radius-full`, `--radius-md`, `--radius-none`, `--border-width`.
- Spacing: `--space-1_5`.
- Theme surfaces/text: `--color-surface`, `--color-surface-subtle`, `--color-border-subtle`, `--color-border-strong`, `--color-text`, `--color-text-muted`.
- Theme status colors: `--color-success`, `--color-warning`, `--color-danger`, plus soft/strong role colors for color variants.

Audit conclusions:

- Local variables are component-owned aliases.
- They are not approved for rename, removal, promotion, or deprecation in this item.
- Future semantic cleanup must coordinate with theme contrast work and docs rewrite work.

## Selector Inventory Evidence

Selector inventory totals:

- Avatar source classes: `27`.
- Public classes: `25`.
- Candidate-public classes: `2`.

Class family counts:

| Group | Total |
| --- | ---: |
| root | `1` |
| base | `1` |
| media/image | `2` |
| initials | `1` |
| status | `4` |
| group/overflow | `3` |
| size | `4` |
| shape/ring/border | `4` |
| color | `7` |

Candidate-public classes:

- `.vds-avatar`
- `.avatar--neutral`

Audit conclusions:

- Candidate-public status reflects current docs coverage, not permission to remove or rename source-defined selectors.
- `.avatar--neutral` and `.vds-avatar` should be classified before later cleanup or migration decisions.

## Docs and Generated Index Evidence

Raw docs:

- `@24vlh/vds/doc-raw/vds-avatar.doc.html` has `301` lines.
- Docs cover sizes, shape variants, image avatars, rings/borders, color variants, presence status, avatar groups, overflow counts, usage guidance, and accessibility rules.
- Docs include guidance for image `alt`, decorative avatars, `role="img"`, `aria-label`, status text pairing, and duplicate-name avoidance.

Generated index:

- `@24vlh/agents/docs_vds/components/vds-avatar.json`
- Blocks: `7`.
- Code examples: `6`.
- Generated class tokens: `33`.
- Generated `source_css`: `avatar.css`, `base.css`, `primitives.css`, and `typography.css`.

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
- Generated `source_css` does not list a theme file even though avatar color variants rely on theme tokens.
- Docs cover accessibility responsibilities, but they do not describe forced-colors, responsive/mobile, focus, loading, or reduced-motion behavior directly.

## Accessibility and Behavior Boundaries

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
- Image clipping and cover-fit behavior.
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

## Risks and Future Routing

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

