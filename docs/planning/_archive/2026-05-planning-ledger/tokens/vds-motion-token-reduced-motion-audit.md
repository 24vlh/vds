# VDS Motion Token and Reduced-Motion Audit

Last updated: `2026-05-23`

Source item: `VDS-1050`

This file records the VDS motion token and reduced-motion audit for the tokens, themes, and foundation track. It is a planning artifact only: no CSS, token names, token values, raw docs, generated `dist`, package metadata, scripts, workflows, npm tags, or version fields change here.

## Policy Summary

- `@24vlh/vds/src/primitives.css` owns the low-level motion and easing primitives.
- `@24vlh/vds/src/base.css` owns the global reduced-motion safety net.
- Component CSS owns local transition, animation, keyframe, loading, shimmer, toast, progress, icon, skeleton, and overlay behavior.
- Raw docs explain motion expectations, but source CSS remains the behavior source of truth.
- Existing motion tokens, transitions, animations, keyframes, and reduced-motion behavior remain compatibility-sensitive until a later approved cleanup or migration item says otherwise.

## Primitive Motion Tokens

`@24vlh/vds/src/primitives.css` currently defines `7` motion/easing primitives:

| Token | References | Source files with references |
| --- | ---: | --- |
| `transition-fast` | `66` | `android-shell.css`, `authoring.css`, `badge-tag.css`, `buttons.css`, `command.css`, `content-blocks.css`, `doc-block.css`, `inbox.css`, `toasts.css`, `tooltips-popovers.css` |
| `transition-normal` | `44` | `base.css`, `accordion.css`, `buttons.css`, `command.css`, `content-blocks.css`, `feedback.css`, `flows.css`, `inbox.css`, `progress.css`, `tabs.css` |
| `transition-slow` | `0` | None |
| `ease-out` | `5` | `toasts.css`, `tooltips-popovers.css` |
| `ease-in` | `2` | `toasts.css` |
| `ease-in-out` | `0` | None |
| `motion-none` | `4` | `base.css`, `toasts.css` |

Unreferenced motion primitives:

- `transition-slow`
- `ease-in-out`

These unreferenced tokens are audit findings only. They may be public scale reserves or cleanup candidates, not approved removals.

## Source Roles and Evidence

| Source area | Role |
| --- | --- |
| `src/primitives.css` | Motion primitives: `--transition-fast`, `--transition-normal`, `--transition-slow`, `--ease-out`, `--ease-in`, `--ease-in-out`, and `--motion-none`. |
| `src/base.css` | Global reduced-motion safety net that overrides transition/easing tokens and suppresses animation/transition duration under `prefers-reduced-motion: reduce`. |
| `src/components/*.css` | Component-owned transition, animation, keyframe, loading, shimmer, toast, progress, icon, skeleton, overlay, and responsive motion behavior. |
| `doc-raw/*.doc.html` | Runnable examples and guidance. Source CSS remains authoritative when docs and source differ. |

`27` CSS files currently include transition, animation, keyframe, or reduced-motion behavior.

## Source-Wide Motion Declarations

| Declaration | Total | Tokenized | Hard-coded | Explicit `none` |
| --- | ---: | ---: | ---: | ---: |
| `transition` | `83` | `43` | `31` | `9` |
| `animation` | `36` | `12` | `15` | `9` |

Additional animation-related declarations:

| Declaration | Total | Notes |
| --- | ---: | --- |
| `transition-duration` | `1` | Explicit reduced-motion override in `base.css`. |
| `animation-duration` | `4` | Split between hard-coded values and explicit reduced-motion overrides. |
| `animation-direction` | `1` | Used in flow progress behavior. |
| `animation-iteration-count` | `1` | Used in global reduced-motion handling. |

Top transition declaration files:

- `forms-advanced.css`: `16`
- `content-blocks.css`: `10`
- `android-shell.css`: `8`
- `navigation.css`: `8`
- `command.css`: `7`
- `inbox.css`: `4`
- `accordion.css`, `doc-block.css`, `forms.css`, and `header-footer.css`: `3` each

Top animation declaration files:

- `toasts.css`: `7`
- `skeleton.css`: `6`
- `feedback.css`: `5`
- `icons.css`: `5`
- `buttons.css`, `flows.css`, `forms.css`, `hero.css`, and `progress.css`: `2` each
- `charts.css`: `1`

Hard-coded transition and animation durations are findings only. Later cleanup must classify whether each value is an intentional component behavior, a tokenization candidate, a component-local alias need, or a migration-sensitive public behavior.

## Reduced-Motion Coverage

Reduced-motion blocks: `10` across `9` files.

| File | Blocks |
| --- | ---: |
| `src/base.css` | `1` |
| `src/components/android-shell.css` | `1` |
| `src/components/buttons.css` | `1` |
| `src/components/command.css` | `1` |
| `src/components/doc-block.css` | `1` |
| `src/components/flows.css` | `2` |
| `src/components/icons.css` | `1` |
| `src/components/skeleton.css` | `1` |
| `src/components/toasts.css` | `1` |

The global `src/base.css` block is the current safety net. Missing file-local reduced-motion blocks are audit findings only; later component audits decide where local handling is required beyond the global baseline.

## Animation and Keyframe Coverage

`@keyframes` count: `19` across `11` files.

| File | Keyframes |
| --- | --- |
| `src/components/buttons.css` | `button-spinner` |
| `src/components/charts.css` | `chart-loading-shimmer` |
| `src/components/feedback.css` | `toast-enter`, `progress-stripes`, `progress-stripes-relaxed`, `progress-sheen` |
| `src/components/flows.css` | `flow-progress-stripes` |
| `src/components/forms.css` | `input-loading-shimmer`, `formControlLoading` |
| `src/components/hero.css` | `hero-skeleton-shimmer` |
| `src/components/icons.css` | `icon-spin`, `icon-pulse` |
| `src/components/progress.css` | `vds-progress-stripes`, `progress-indeterminate` |
| `src/components/skeleton.css` | `vds-skeleton-shimmer` |
| `src/components/tables.css` | `table-loading` |
| `src/components/toasts.css` | `toast-slide-in`, `toast-slide-out`, `toast-progress` |

Files with animation/keyframes but no file-local reduced-motion block:

- `src/components/charts.css`
- `src/components/feedback.css`
- `src/components/forms-advanced.css`
- `src/components/forms.css`
- `src/components/hero.css`
- `src/components/progress.css`
- `src/components/tables.css`

## Docs Motion Coverage

`18` raw docs mention motion-related terms.

Strongest coverage:

- `doc-raw/vds-base.doc.html`: `45` motion mentions, including `3` reduced-motion mentions.
- `doc-raw/vds-toasts.doc.html`: `23` motion mentions, including `4` reduced-motion mentions and `3` keyframe mentions.
- `doc-raw/vds-overlays.doc.html`: `16` motion mentions, including `3` reduced-motion mentions.
- `doc-raw/vds-icons.doc.html`: `7` motion mentions, including `3` reduced-motion mentions.
- `doc-raw/vds-flows.doc.html`: `6` motion mentions, including `1` reduced-motion mention.
- `doc-raw/vds-skeleton.doc.html`: `6` motion mentions, including `1` reduced-motion mention.
- `doc-raw/vds-command.doc.html`: `5` motion mentions, including `2` reduced-motion mentions.

Other docs with motion mentions:

- `vds-buttons`
- `vds-content-blocks`
- `vds-doc-block`
- `vds-feedback`
- `vds-hero`
- `vds-identity`
- `vds-index`
- `vds-layout`
- `vds-navigation`
- `vds-progress`
- `vds-tooltips-popovers`

Docs are secondary to source truth for behavior, but docs rewrite work should preserve accessibility expectations around reduced motion.

## Current Risks

- Many transitions use hard-coded `0.15s` or `0.2s` values instead of primitives.
- Animation duration is split between tokens, hard-coded values, component variables, and explicit `none`.
- Some animated components rely on the base reduced-motion safety net rather than file-local reduced-motion handling.
- `transition-slow` and `ease-in-out` may be public scale reserves or cleanup candidates, not approved removals.
- Motion cleanup overlaps with focus, loading states, progress indicators, skeletons, overlays, toasts, icons, and responsive layout behavior.
- Animation and keyframe behavior can be user-visible even when selectors do not change, so later cleanup may still need migration notes or release notes.

## Audit Rules for Later Work

- Classify each motion change as primitive token, component-local alias, component behavior, accessibility fix, docs-only cleanup, legacy-compatible behavior, or deprecated behavior.
- Preserve public and candidate-public behavior unless a later approved migration/deprecation plan allows changes.
- Do not remove `transition-slow` or `ease-in-out` without token usage evidence, migration review, and explicit approval.
- Treat hard-coded motion values as findings until component context proves they should be tokenized, kept local, or deprecated.
- Components with animation/keyframes but no local reduced-motion block must be reviewed during component audits, but the existing global safety net remains valid baseline evidence.
- If source CSS changes while generated output is out of scope, record `dist refresh pending`.

## Future Work Contract

- `VDS-1060` must use this audit when focus or interaction states rely on transitions.
- `VDS-1070` must use this audit when overlay stack changes affect animated surfaces.
- `VDS-1080` must account for shadow, border, and radius transitions when auditing visual tokens.
- Loading, progress, skeleton, toast, icon, overlay, command, and form component audits must record whether animation is tokenized, hard-coded, local, or reduced-motion-sensitive.
- Accessibility and quality automation items must use this audit when defining reduced-motion smoke checks.
- Documentation rewrite work must explain motion/reduced-motion behavior without promising more than source CSS and component audits support.

## Reference Sources

- Master feature map: `@24vlh/vds/docs/planning/master-feature-map.md`
- Primitive token taxonomy: `@24vlh/vds/docs/planning/tokens/vds-primitives-token-taxonomy-audit.md`
- Semantic token naming cleanup plan: `@24vlh/vds/docs/planning/tokens/vds-semantic-token-naming-cleanup-plan.md`
- Spacing and layout rhythm audit: `@24vlh/vds/docs/planning/tokens/vds-spacing-layout-rhythm-audit.md`
- Accessibility baseline: `@24vlh/vds/docs/planning/release/vds-accessibility-baseline.md`
- Selector inventory: `@24vlh/vds/docs/planning/api/vds-selector-inventory.json`
- Primitive source: `@24vlh/vds/src/primitives.css`
- Base source: `@24vlh/vds/src/base.css`
- Component sources: `@24vlh/vds/src/components/*.css`
- Raw docs: `@24vlh/vds/doc-raw/*.doc.html`
