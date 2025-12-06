# Vlah Design System (VDS)

VDS provides a controlled, minimal front-end substrate designed for rapid prototyping and long-term product evolution.
It delivers a predictable structural layer with a small footprint, enabling high-velocity iteration without sacrificing
consistency or brand positioning.
The objective is stable execution across interfaces that must operate through long life cycles, regulatory expectations
and multi-team delivery environments.

VDS is the architectural substrate for environments where predictability, auditability and controlled modification are
required. It supports high-value technical surfaces such as architecture material, analytical interfaces, high-frequency
updates, dense data displays and application shells.

The system applies enterprise architecture principles to the presentation layer: narrow responsibilities, explicit
boundaries and consistent behaviour under change.
Its purpose is structural integrity rather than visual styling.
Interfaces built on VDS inherit a governed execution model that remains coherent regardless of implementing team,
product lifecycle or delivery context.
Its structure aligns cleanly with Angular component design, allowing the system to be transposed into reusable,
domain-specific UI modules without friction.

VDS operates as a long-term invariant.
Once defined, it removes unnecessary re-decision of presentation mechanics and stabilises modification boundaries.
It prevents drift, constrains variation and enables higher-order systems—prototypes, internal tools, customer-facing
products and consulting assets—to evolve on top of a consistent, non-negotiable presentation substrate.

-------------------------------------------------------------------------------

## Installation

npm install vds

-------------------------------------------------------------------------------

## Directory Structure

The package ships two surfaces.

### src/ — Authoring Source

Raw uncompiled modules intended for teams integrating PostCSS or internal pipelines.

```
src/
  core.css
  index.css
  identity.css
  primitives.css
  base.css
  layout.css
  utilities.css
  components/
    *.css
  themes/
    *.css
```

### dist/ — Compiled Output

Production-ready bundles and modular components/themes.

```
dist/
  vds.css
  vds.min.css
  core.css
  core.min.css
  identity.css
  identity.min.css

  components/
    *.css
    *.min.css

  themes/
    *.css
    *.min.css
```

All outputs include source maps.

-------------------------------------------------------------------------------

## Loading Model

VDS provides two consumption models.

-------------------------------------------------------------------------------

### 1. Full Framework Load

Load the complete system (foundation + components + themes):

```
@import "vds/dist/vds.css";
```

-------------------------------------------------------------------------------

### 2. Component-Level Load

For optimised builds, load the foundation once:

```
@import "vds/dist/core.css";
```

Then import only required components:

```
@import "vds/dist/components/button.css";
@import "vds/dist/components/card.css";
```

Themes are optional:

```
@import "vds/dist/themes/graphite.css";
```

Core must be loaded once before any component-level imports.

-------------------------------------------------------------------------------

## Production Builds

Minified outputs are available for all artifacts:

```
dist/vds.min.css
dist/core.min.css
dist/identity.min.css
dist/components/*.min.css
dist/themes/*.min.css
```

Each minified file includes a corresponding ```.map.```

-------------------------------------------------------------------------------

## Source Consumption

Teams integrating VDS into a custom toolchain may import directly from src. When consuming raw modules, the foundational
order (primitives → base → layout → utilities) must be preserved manually.

## Note

Development requires a POSIX environment (Linux/macOS).
