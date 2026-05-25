# VDS Browser and CSS Support Matrix

Last updated: `2026-05-23`

Source item: `VDS-0050`

This file is the browser and CSS feature support contract for the VDS `1.0.0` release line. It is a planning artifact only: no runtime CSS, package metadata, workflow, generated `dist`, or version field changes happen here.

## Browser Support Posture

- Supported target: modern evergreen Chrome, Edge, Firefox, Safari, iOS Safari, and Android Chrome.
- Not supported as release targets: IE, old embedded WebViews, frozen enterprise browsers, and legacy Android browsers.
- Browser support is a release contract, not a runtime polyfill promise.
- Exact browser versions should be refreshed during release candidate work if the release date moves.

## Feature Matrix

| Feature | Current Source Evidence | Release Classification | Fallback Expectation |
| --- | --- | --- | --- |
| `color-mix()` | `25` matches in `7` files | Needs fallback review | Token/theme audits must verify color fallback and contrast impact. |
| Container queries | `6` matches in `1` file, currently `android-shell` | Accepted, layout-sensitive | Base layout must remain usable without query enhancements. |
| `:focus-visible` | `94` matches in `16` files | Accepted | Accessibility work must verify visible focus behavior. |
| `:is()` and `:where()` | `42` combined matches in `5` files | Accepted | Component audits must avoid specificity surprises. |
| Logical properties | `274` matches in `17` files | Accepted | Keep as default for modern layout direction support. |
| Grid and flex | `1129` broad matches in `35` files | Accepted | No legacy grid/flex fallback required for unsupported browsers. |
| `prefers-reduced-motion` | `12` matches in `9` files | Accepted | Motion audits must keep reduced-motion coverage. |
| `forced-colors` | `2` matches in `2` files | Accepted, needs expansion review | Accessibility/theme work must verify forced-color behavior. |
| Safe-area `env()` | `8` matches in `2` files | Accepted | Mobile audits must verify notch/safe-area behavior. |
| `svh` / `dvh` viewport units | `5` matches in `2` files | Accepted | Responsive audits must verify mobile viewport behavior. |
| `backdrop-filter` | `4` matches in `2` files | Enhancement-only | Readability must not depend on blur/filter support. |
| `@supports` | `1` match in `1` file | Accepted | Use for explicit fallback branches where needed. |
| `:has()` | `0` matches | Not approved source surface yet | Adding it later requires updating this matrix. |
| Native CSS nesting | `0` matches | Not approved source surface yet | Adding it later requires updating this matrix. |
| Cascade layers | `0` matches | Not approved source surface yet | Adding it later requires updating this matrix. |
| `@scope` | `0` matches | Not approved source surface yet | Adding it later requires updating this matrix. |
| `@property` | `0` matches | Not approved source surface yet | Adding it later requires updating this matrix. |
| Anchor positioning | `0` matches | Not approved source surface yet | Adding it later requires updating this matrix. |
| Subgrid | `0` matches | Not approved source surface yet | Adding it later requires updating this matrix. |

## Audit Rules for Later Work

- Component audits must classify feature usage as required, progressive enhancement, or needs fallback.
- Any feature that can break layout, legibility, focus visibility, or interaction when unsupported must get a follow-up item or explicit release deferral.
- `color-mix()` and other computed color features must be reviewed with theme contrast work.
- Container query work must preserve usable base layout before query-specific enhancements.
- `backdrop-filter` must remain enhancement-only.
- New modern CSS features outside this matrix require a matrix update before release readiness can be claimed.

## Reference Sources

- MDN `color-mix()`: `https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix`
- MDN CSS container queries: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries`
- MDN `:has()`: `https://developer.mozilla.org/en-US/docs/Web/CSS/%3Ahas`
- MDN CSS nesting: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting`
