# VDS Primitives Token Taxonomy Audit

## Path alias

Source of truth: `@24vlh/agents/path-roots.json`.

- `@24vlh` => WSL primary `/public_html/24vlh`
- `@24vlh` => Windows fallback `\\wsl.localhost\CentOS10\public_html\24vlh`
- `@24vlh` => legacy WSL fallback `/mnt/w/public_html/24vlh`
- `@24vlh` => legacy Windows fallback `W:/public_html/24vlh`

Last updated: `2026-05-23`

Source item: `VDS-1010`

This file records the VDS primitive token taxonomy audit for the tokens, themes, and foundation track. It is a planning artifact only: no CSS, token names, token values, themes, docs demos, generated `dist`, package metadata, scripts, workflows, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/primitives.css` is the canonical primitive-token source for this audit.
- Primitive tokens are stable low-level scale tokens, not component aliases.
- Primitive tokens should describe invariant values such as type scale, spacing, radii, shadows, layout sizes, icon/avatar sizes, motion/easing, z-index, and focus dimensions.
- Semantic colors, state tokens, theme values, and component-local aliases are separate taxonomy layers.
- Unused primitive tokens are audit findings only, not approved removals.
- Primitive token renames/removals require later approved cleanup with usage evidence and migration review.

## Current Primitive Families

| Family | Count | Token Scope |
| --- | ---: | --- |
| Typography | `28` | Font families, text sizes, line heights, weights, letter spacing, footnote size. |
| Spacing/rhythm | `42` | Raw spacing scale, section spacing, generic gaps, component gaps. |
| Radius/border/shadow | `16` | Corner radii, border widths, tab indicator height, elevation shadows. |
| Layout sizing | `8` | Layout max width, content widths, sidebar width, grid minimum. |
| Icons/avatars | `17` | Icon sizes, icon containers, icon stroke widths, avatar sizes. |
| Motion/easing | `7` | Transition presets, easing curves, motion-none. |
| Z-index | `10` | Base, header, backdrop, modal, drawer, toast, tooltip, sticky layers. |
| Focus/accessibility | `2` | Focus ring width and offset. |

## Current Evidence

- Primitive definitions: `130`.
- Unique primitive token names: `130`.
- Duplicate primitive definitions: `0`.
- Color or semantic-state-like primitive tokens: `0`.
- Primitive tokens referenced somewhere in `src/**/*.css`: `118`.
- Primitive tokens currently without `var(...)` references: `12`.
- Source CSS files scanned: `43`.
- Source files with token activity: `41`.
- Source-wide custom property declarations: `3097`.
- Source-wide `var(...)` references: `6749`.
- Theme files: `4`.
- Theme token-name parity: complete across graphite, carbon, navy, and slate.
- Each theme file has `416` custom property declarations and `208` unique token names.

## Unused Primitive Tokens

These tokens currently have no `var(...)` references in `@24vlh/vds/src/**/*.css`:

- `line-height-xs-tight`
- `font-weight-regular`
- `space-0`
- `space-28`
- `space-36`
- `space-44`
- `gap-xs`
- `gap-sm`
- `gap-xl`
- `shadow-lg`
- `transition-slow`
- `ease-in-out`

Do not remove these tokens in this item. Later cleanup must decide whether each token is a public scale reserve, a documentation gap, a stale value, or a deprecation candidate.

## Highest-Use Primitive Tokens

| Token | References |
| --- | ---: |
| `space-2` | `325` |
| `space-3` | `253` |
| `space-4` | `225` |
| `space-1` | `164` |
| `space-6` | `148` |
| `text-xs` | `145` |
| `text-sm` | `135` |
| `border-width` | `112` |
| `radius-md` | `77` |
| `space-8` | `74` |
| `transition-fast` | `66` |
| `font-weight-semibold` | `60` |
| `space-5` | `59` |
| `border-width-strong` | `51` |
| `radius-sm` | `49` |
| `space-10` | `49` |
| `text-xxs` | `44` |
| `transition-normal` | `44` |
| `space-12` | `43` |
| `radius-full` | `35` |

The highest-use tokens show that spacing, small text sizes, border widths, radii, and transition presets are the most deeply embedded primitive surfaces.

## Taxonomy Boundaries

- Primitive layer:
  - low-level scale and invariant system tokens;
  - stable naming expected to survive theme changes;
  - loaded before base, layout, utilities, components, and themes.
- Semantic/theme layer:
  - color roles, surface roles, state roles, contrast behavior, theme roots;
  - owned by semantic token and theme architecture work.
- Component alias layer:
  - component-local custom properties and implementation aliases;
  - owned by component audits and semantic token cleanup.
- Documentation/demo layer:
  - docs-only examples, generated docs metadata, README naming, demo-specific usage;
  - owned by docs rewrite and docs tooling work.

## Current Risks

- Primitive naming currently mixes raw scales, structural aliases, and component seed tokens.
- Focus/accessibility coverage has only width and offset primitives, while release baselines require visible focus, forced-colors awareness, and contrast-sensitive behavior.
- The spacing scale includes rarely used values that may be deliberate reserves or cleanup candidates.
- Layout width tokens overlap with responsive and container behavior concerns and need later foundation audit coordination.
- Motion/easing primitives do not by themselves prove reduced-motion behavior.
- Component files define many local custom properties, making primitive versus alias boundaries important before broad cleanup.
- Removing unused primitives would be risky without consumer and migration review.

## Audit Rules for Later Work

- Later token work must classify whether a token is primitive, semantic, theme, component alias, docs/demo-only, legacy-compatible, or deprecated.
- Do not rename or remove primitive tokens without usage evidence, consumer compatibility review, migration notes, and explicit approval.
- Do not use primitive taxonomy findings to bypass public selector/API protections from `VDS-0020`.
- Theme audits must keep primitive scale decisions separate from theme value decisions.
- Component audits must avoid inventing new primitive tokens when a component-local alias is sufficient.
- Source CSS changes in later token work must record `dist refresh pending` when generated `dist` refresh is out of scope.

## Future Work Contract

- `VDS-1020` must separate raw palette, semantic role, component alias, and docs/demo-only tokens.
- `VDS-1030` must use this taxonomy when auditing typography scale and rhythm.
- `VDS-1040` must use this taxonomy when auditing spacing and layout rhythm.
- `VDS-1050` must use this taxonomy when auditing motion and reduced-motion behavior.
- `VDS-1060` must use this taxonomy when auditing focus rings and interaction states.
- `VDS-1070` must use this taxonomy when auditing z-index and overlay stack behavior.
- `VDS-1090` and theme audit items must keep primitive tokens separate from theme-token values and semantic roles.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Primitive token source: `@24vlh/vds/src/primitives.css`
- Theme contrast baseline: `@24vlh/vds/docs/planning/release/vds-theme-contrast-visual-baseline.md`
- Accessibility baseline: `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
- Generated artifact freshness checker: `@24vlh/vds/docs/planning/architecture/vds-generated-artifact-freshness-checker.md`
- Theme sources: `@24vlh/vds/src/themes`
- Component sources: `@24vlh/vds/src/components`
