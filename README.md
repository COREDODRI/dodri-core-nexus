# Dodri Core Nexus

Build a professional web application called:

DODRI PLATFORM CORE

This is the CENTRAL CORE of a future modular SaaS platform.

IMPORTANT:

Do NOT build CMS, Catalog, CRM, Orders or other business modules yet.

Only build the CORE infrastructure and its administration/module management system.

The architecture must be designed from the beginning to allow independent modules to be added later without rebuilding the Core.

====================================================

1. AUTHENTICATION / CONNEXION

====================================================

Create a real authentication system.

The application must start with a professional LOGIN / CONNEXION page.

Login page:

- DODRI logo using the provided DODRI symbol/logo

- Email

- Password

- Show / hide password

- Remember me

- Forgot password

- Sign in button

- Loading state

- Error messages

- Successful authentication redirect to Dashboard

- Logout functionality

Authentication must be real and connected to the backend/database, not a fake frontend login.

Use Supabase Authentication if Supabase is connected.

Create protected routes:

- /login

- /dashboard

- /administration

- /administration/users

- /administration/roles

- /administration/permissions

- /parameters

- /parameters/modules

- /parameters/connections

Unauthenticated users must always be redirected to /login.

Authenticated users must not be able to access protected pages without the required permission.

Persist the authenticated session.

====================================================

2. DESIGN LANGUAGE

====================================================

Use the attached reference image as the main visual inspiration.

IMPORTANT:

Preserve the general visual structure and proportions of the reference image, but do NOT copy copyrighted branding from it.

The design must be:

- futuristic

- clean

- premium

- professional

- enterprise SaaS

- AI command-center inspired

- bright / light interface

- NOT dark

- NOT gaming

- NOT overly neon

Use a bright white / very light blue background.

Use:

- white cards

- light blue glassmorphism

- subtle blue gradients

- cyan accents

- blue/purple gradient accents

- soft shadows

- thin borders

- subtle glow

- clean typography

- rounded professional panels

The interface must feel like a futuristic operating system for managing a business platform.

Do not use Iron Man or JARVIS branding.

Do not use Marvel assets.

Use the DODRI identity only.

====================================================

3. DODRI LOGO

====================================================

Use the provided DODRI logo/symbol as the application's main visual identity.

IMPORTANT:

Do NOT display the old large "COM" or any slogan from the source logo.

Use only the DODRI symbol/logo provided by the user.

The logo should appear:

- on the login page

- top-left of the application

- in the Core visualization

- optionally in compact form in the sidebar

Keep the logo clean and recognizable.

====================================================

4. APPLICATION LAYOUT

====================================================

Create a desktop-first responsive application.

Main structure:

----------------------------------------------------

LEFT SIDEBAR

----------------------------------------------------

Top:

DODRI CORE logo

Navigation:

Dashboard

Administration

    Users

    Roles

    Permissions

    Activity Logs

Modules

    [Dynamic modules will appear here later]

Parameters

    General Settings

    Modules Management

    Connections

    System Configuration

    API & Integrations

The Modules section MUST be dynamic.

Do NOT hard-code future modules such as CMS or Catalog.

The sidebar must read enabled modules from the module registry/database.

Example:

If CMS is installed and enabled:

Modules

    CMS

If Catalog is installed:

Modules

    CMS

    Catalog

If no external modules are installed:

Modules

    No modules installed

Add a clear:

+ Add New Module

button.

====================================================

5. TOP HEADER

====================================================

Create a clean futuristic header.

Left:

current page title / breadcrumb

Center:

DODRI PLATFORM CORE

Right:

- global search

- notifications

- settings shortcut

- authenticated user avatar

- user name

- role

- dropdown

User dropdown:

Profile

My Account

Security

Logout

Display system status:

● CORE ONLINE

====================================================

6. CORE DASHBOARD

====================================================

Create the main Dashboard as a futuristic Core Command Center.

The CENTER of the dashboard must contain a large glowing ENERGY CORE.

This is NOT a normal chart.

Create a visual central energy sphere/orb representing:

DODRI PLATFORM CORE

The sphere should look like a futuristic energy core.

Around the energy core create orbit paths.

Modules connected to the Core should appear as nodes orbiting around it.

IMPORTANT:

Only installed/active modules should appear around the Core.

For example, if only CMS and Catalog exist:

             CMS

              \

               \

             ENERGY

              CORE

               /

              /

          CATALOG

If more modules are installed, dynamically add them around the Core.

The orbiting module nodes must be generated dynamically from the module registry.

Each node displays:

- module icon

- module name

- status

- connection indicator

Example:

CMS

● Connected

Catalog

● Connected

====================================================

7. CORE STATUS PANEL

====================================================

Create a Core Status card showing:

Core Services       Online

Database            Online

Authentication      Online

Module Registry     Online

Connections         Online

System              Optimal

Use clear status indicators.

Green = operational

Orange = warning

Red = error

Gray = inactive

====================================================

8. SYSTEM METRICS

====================================================

Create clean metric cards:

TOTAL USERS

24

ACTIVE USERS

21

ACTIVE MODULES

2

CONNECTIONS

1

SYSTEM HEALTH

100%

These values must eventually come from the database.

Do NOT permanently hard-code them.

====================================================

9. RECENT ACTIVITY

====================================================

Create a Recent Activity panel.

Examples:

User logged in

New user created

Role updated

Permission changed

Module installed

Module activated

Module disabled

Connection created

System parameter updated

Store important activities in an activity_logs table.

Show:

- icon

- action

- user

- date/time

- status

====================================================

10. ADMINISTRATION

====================================================

Create a complete Administration section.

Administration contains:

Users

Roles

Permissions

Activity Logs

--------------------------------

USERS

--------------------------------

Create a professional users management interface.

Display:

Name

Email

Role

Status

Last Login

Created At

Actions

Actions:

- View

- Edit

- Activate

- Disable

- Reset Password where appropriate

Create User button.

User form:

First Name

Last Name

Email

Role

Status

Do not create passwords manually in the admin database.

Use the authentication system correctly.

Show:

Total Users

Active Users

Inactive Users

--------------------------------

ROLES

--------------------------------

Create a role management system.

Examples:

Super Admin

Administrator

Manager

Editor

Viewer

Roles must be database-driven.

--------------------------------

PERMISSIONS

--------------------------------

Create a granular permission system.

Permissions should be related to modules.

Example:

CORE

core.view

core.manage

USERS

users.view

users.create

users.edit

users.disable

MODULES

modules.view

modules.install

modules.activate

modules.disable

modules.configure

CONNECTIONS

connections.view

connections.create

connections.edit

connections.delete

Future modules will be able to define their own permissions.

====================================================

11. PARAMETERS

====================================================

Parameters is NOT just a simple settings page.

It is the CONTROL CENTER for the platform architecture.

Create:

General Settings

Modules Management

Connections

System Configuration

API & Integrations

--------------------------------

MODULE MANAGEMENT

--------------------------------

Create a module registry.

Database table:

modules

Fields:

id

name

slug

description

icon

version

route

status

enabled

configuration

created_at

updated_at

The interface must show:

Module

Version

Status

Enabled

Connection

Actions

Actions:

Configure

Activate

Disable

View

Remove / Uninstall where appropriate

Create:

+ Add New Module

====================================================

12. ADD NEW MODULE

====================================================

Create a dedicated interface for adding a new module.

The Core must be able to register future modules.

Form:

Module Name

Module Slug

Description

Icon

Version

Route

Status

Enabled

Do NOT execute arbitrary uploaded code.

For the first version, the module registration system should register modules that are already available inside the application architecture.

The Core should then expose the module dynamically through:

- sidebar

- dashboard

- permissions

- module registry

- connections

Example:

Add:

CMS

Then automatically show:

Modules

    CMS

and add CMS to the Core visualization.

====================================================

13. MODULE CONNECTIONS

====================================================

This is one of the most important parts of the architecture.

Create:

Parameters

→ Connections

The system must support:

MODULE → CORE

and

MODULE → MODULE

Examples:

CMS → Core

Catalog → Core

CMS → Catalog

Catalog → Orders

CRM → Catalog

Create:

+ New Connection

Form:

Source Module

Target Module

Connection Type

Status

Permissions

Configuration

Example:

Source:

CMS

Target:

Catalog

Permissions:

Read Products

Read Categories

Read Images

Read Prices

Do NOT automatically give write permissions.

Connections must be stored in:

module_connections

Fields:

id

source_module_id

target_module_id

connection_type

status

permissions

configuration

created_at

updated_at

====================================================

14. CONNECTION VISUALIZATION

====================================================

Display module relationships visually.

Example:

          CMS

           │

           │

       ┌───▼───┐

       │ DODRI │

       │ CORE  │

       └───┬───┘

           │

           ▼

        CATALOG

Use animated but subtle connection lines.

The central energy Core should visually show active connections.

When a connection is active:

show a flowing light animation along the connection.

When inactive:

show a neutral line.

When there is an error:

show an alert indicator.

====================================================

15. DYNAMIC MODULE ARCHITECTURE

====================================================

This is critical.

Do NOT hard-code CMS, Catalog, CRM, Orders or future modules into the Core.

The Core must use:

Module Registry

to determine:

- which modules exist

- which are enabled

- which route they use

- their icon

- their permissions

- their status

- their connections

The navigation, dashboard visualization and module statistics should all be dynamically generated from the module registry.

====================================================

16. FUTURE MODULE COMPATIBILITY

====================================================

The architecture must be ready for future modules:

CMS

Catalog

Orders

CRM

POS

Inventory

Marketing

HR

Support

Accounting

But DO NOT implement these modules now.

Only prepare the architecture for them.

====================================================

17. DATABASE ARCHITECTURE

====================================================

Use Supabase/PostgreSQL.

Create the Core database structure.

Tables should include at minimum:

profiles

roles

permissions

user_roles

role_permissions

modules

module_permissions

module_connections

activity_logs

system_settings

Use proper foreign keys.

Use timestamps.

Use UUID identifiers.

Use Row Level Security.

Authentication and authorization must be enforced server-side.

Do not rely only on hiding buttons in the frontend.

====================================================

18. SECURITY

====================================================

Implement:

Supabase Authentication

Protected routes

Role-based access control

Permission-based authorization

Row Level Security

Secure database policies

Activity logging

Session handling

Logout

Password reset flow

Never expose service-role keys in frontend code.

Never store plain text passwords.

====================================================

19. RESPONSIVE DESIGN

====================================================

Desktop is the primary target.

Also support:

- tablet

- mobile

On mobile:

convert the sidebar into a collapsible navigation.

Keep the futuristic Core visualization responsive.

====================================================

20. UX

====================================================

The application must feel like:

A professional futuristic operating system for a modular business platform.

Avoid:

- excessive animations

- excessive neon

- dark cyberpunk styling

- gaming UI

- unnecessary decorative elements

Use animations only for:

- Core energy

- module orbit

- connection activity

- loading

- status changes

Animations must be subtle and performant.

====================================================

21. IMPORTANT DEVELOPMENT RULE

====================================================

Build this in a clean modular architecture.

Separate:

CORE

ADMINISTRATION

PARAMETERS

MODULE REGISTRY

CONNECTION SYSTEM

AUTHENTICATION

Do not mix future CMS or Catalog business logic into the Core.

The Core must remain independent from future business modules.

====================================================

22. FIRST VERSION

====================================================

For the first implementation, deliver only:

1. Login / Connexion

2. Authentication

3. Dashboard

4. Administration

5. Users

6. Roles

7. Permissions

8. Activity Logs

9. Parameters

10. Module Registry

11. Add New Module

12. Module Management

13. Module Connections

14. Core Visualization

15. Dynamic Sidebar

16. System Status

17. Database schema

18. Supabase security/RLS

19. Protected routes

Do NOT build:

CMS

Catalog

CRM

Orders

POS

Inventory

yet.

After the Core is tested and stable, future modules will be added separately.

====================================================

23. FINAL DESIGN GOAL

====================================================

The final result should visually resemble the supplied reference:

- bright futuristic interface

- white/light blue background

- left navigation

- project/module area

- central energy Core

- orbiting modules

- right-side technical/system panel

- bottom system/activity panels

- futuristic but professional

- clean enterprise SaaS UX

The main visual concept is:

DODRI PLATFORM CORE

The Core is the central energy intelligence of the entire platform.

Every future module connects to the Core.

The Core controls:

Authentication

Users

Roles

Permissions

Modules

Connections

Configuration

Parameters controls how modules connect to the Core and to each other.

Make the UI polished, production-quality and coherent.

Before implementing any future module, keep the Core architecture stable and extensible.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://dodri-core-nexus.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0c1cecd3-0020-41e6-bce1-3592dae9d449).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
