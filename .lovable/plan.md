# DODRI Dashboard Workspace Redesign

## Goal
Restructure the existing authenticated dashboard to closely match the supplied reference while preserving authentication, database access, roles, permissions, module registry, connections, and all existing routes.

## What will change
- Recompose the dashboard into five coordinated areas: existing sidebar, module file explorer, large central energy core, code editor, and compact bottom monitoring panels.
- Keep all module navigation, orbit nodes, statistics, activity, and connection states driven by current database data.
- Add a connected module workspace: selecting a module changes its file tree; selecting a file opens it in the editor; edits show an unsaved state and Save persists module file metadata through the existing module configuration.
- Upgrade the energy core with layered light effects, orbital paths, particles, and both core-to-module and module-to-module links without changing connection rules.
- Add responsive workspace modes: desktop multi-column layout, tablet/mobile tabs or drawers for Files, Core, and Editor.
- Refine the header, sidebar, footer, metrics, recent activity, system resources, quick actions, connected modules, and service status to match the bright professional reference.
- Preserve the existing Administration, Parameters, Module Management, Connections, login, and protected-route behavior.

## Technical details
- Reuse existing React/TanStack routes and current backend hooks.
- Introduce focused dashboard components for the module workspace, file tree, editor, connected modules, and resource indicators.
- Store optional per-module file metadata inside each module's existing `configuration` field; provide a generated starter tree only when no metadata exists, keeping the architecture module-aware rather than globally hard-coded.
- Save file changes using existing permission-aware module update access and record activity through the current activity log.
- Keep all visual values in semantic theme tokens and retain reduced-motion handling.
- Validate login, module/file/editor interaction, save behavior, dashboard rendering, and desktop/mobile layouts in the live preview.

## Out of scope
- No CMS, Catalog, CRM, Orders, POS, or Inventory business features.
- No replacement of authentication, database schema, role model, permissions, or route structure.
