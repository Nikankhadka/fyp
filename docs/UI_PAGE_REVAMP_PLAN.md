# LuxeStay/Stitch UI Page Revamp Plan

This document is the implementation handoff for a complete frontend UI revamp. It adopts the **Luminous Teal** design direction defined in `docs/luminous_teal/DESIGN.md` with mockups under `docs/*_teal/`.

The older MeroGhar blue visual direction (`#54A2C9`, `#22546D`, `#cee4ef`) is superseded for the UI presentation layer. Route and API identifiers (e.g. `/Home`, `/Home/rooms/[listingId]`, `/Admin`) remain unchanged.

## Goals

- Preserve existing routes, API contracts, Zustand stores, and user flows.
- Adopt the Luminous Teal color identity from `docs/luminous_teal/DESIGN.md`:
  - `primary`: `#006a65`
  - `primary-container`: `#20b2aa`
  - `on-primary`: `#ffffff`
  - `surface`: `#f8f9ff`
  - `surface-container-lowest`: `#ffffff`
  - `surface-container`: `#e5eeff`
  - `on-surface`: `#0d1c2e`
  - `on-surface-variant`: `#3c4948`
  - `outline`: `#6c7a78`
  - `outline-variant`: `#bbc9c7`
  - Full palette in `docs/luminous_teal/DESIGN.md`.
- Treat shadcn as an owned component architecture: Radix primitives, Tailwind, `cva`, local source components, and direct customization.
- Keep the bundle compact by avoiding heavy UI/animation libraries and removing unused packages after source usage is clean.
- Keep layout/component implementation close to the existing flow unless a structural change improves accessibility, responsiveness, validity, or maintainability.
- Use lucide-react for icons (preferred over Material Symbols used in mockups).

## Current Frontend Audit

### Strengths

- Core role workflows exist for visitors, guests, hosts, and admins.
- Next app router, Tailwind, Zustand, Radix primitives, and lucide are already in use.
- Shared UI foundation exists under `apps/web/src/components/ui`.
- Heavy flows such as PayPal, PDF generation, profile/account editors, KYC, and Firebase phone OTP are partially isolated or lazy-loadable.
- Route first-load JS has already improved significantly from the original multi-megabyte baseline.

### Main Mismatches

- Page wrappers still use inconsistent widths such as `w-[95%]`, `w-[98%]`, and route-specific margins.
- Admin shell and public shell use different navigation patterns and spacing rules.
- Some screens still use old one-off Tailwind buttons, tables, empty states, and surfaces.
- Some valid-HTML issues remain in booking/reservation table action cells.
- `apps/web/package.json` still lists likely stale dependencies.
- Root, error, loading, footer, social login, invoice, favourites, trips, and reservations screens need a final teal-style pass.

## Component Target Alignment With Teal Mockups

### Marketplace Home (`docs/home_discovery_marketplace_teal/`)

- Image-led cards with 1:1 square aspect ratio.
- Category bar with horizontal scroll (optional — only if filters support it).
- Bento-style page header or simplified PageHeader.
- Teal primary `#006a65` for active/pagination states.

### Room Detail (`docs/room_details_property_view_teal/`)

- Bento image gallery grid (2-col on desktop, single on mobile).
- Amenity grid (2-col on desktop).
- Sticky booking card with price breakdown.
- Teal primary for reserve CTA, teal container for hover states.

### Host Dashboard (`docs/host_reservations_dashboard_teal/`)

- KPI cards in 4-col grid with teal decorative accents.
- KYC banner with teal left-border accent.
- Reservations table with hover-show action buttons.
- Mobile bottom nav for key host actions.

### Admin Dashboard (`docs/admin_kyc_listing_moderation_teal/`)

- Compact sidebar with teal active state.
- Stat cards in bento grid (4-col desktop).
- KYC queue card with inline approve/reject.
- Bookings table with search and status pills.

## Target UI Components

Add or refine these owned components under `apps/web/src/components/ui`:

- `AppShell`
- `PageContainer`
- `SectionHeader`
- `Card`, `CardHeader`, `CardContent`, `CardFooter`
- `Avatar`
- `Separator`
- `Label`
- `FormField`
- `Alert`
- `Skeleton`
- `Sheet`
- `IconButton`
- `Button` size variants: `sm`, `default`, `icon`

Do not install a large UI kit or a new animation library. Use Radix only where behavior/accessibility is needed.

## Layout And Navigation Plan

### Public App Shell

- Keep existing `/Home` layout flow: root modal registry, public navbar, route content.
- Preserve the single account dropdown auth pattern.
- Keep search in the navbar and preserve current search modal/query behavior.
- Replace route-specific content wrappers with `PageContainer`.
- Keep `LoginSignup` as the single auth form source for both pages and modals.

### Account Shell

- Preserve private account route guards.
- Standardize account content width with `PageContainer`.
- Keep private editors lazy-loaded.
- Use shared empty states and action buttons on favourites, trips, reservations, and listings.

### Admin Shell

- Preserve current auth/admin redirects.
- Replace manual mobile sidebar behavior with a `Sheet`-style mobile nav.
- Use a consistent desktop sidebar width and content offset.
- Use the same logo, spacing, icon sizes, hover states, and active route treatment across dashboard pages.

### Footer / Mobile Nav

- Fix stale routes in mobile footer.
- Keep only links that map to existing routes.
- Use a compact bottom nav pattern with lucide icons, active state, and safe bottom spacing.

## Screen-by-Screen Implementation Plan

### `/`

- Keep redirect behavior to `/Home`.
- If rendered, replace the loose button with a centered `EmptyState`/`LinkButton` fallback.

### `/Home`

- Keep image-first listing grid.
- Use `PageContainer` and `PageHeader`.
- Keep listing card behavior, wishlist behavior, admin/owner states, and URL-backed filters.
- Add skeleton/empty states for loading and no results.
- Apply teal surface hierarchy: `surface-container-lowest` for cards, `surface` for page background.

### `/Home/rooms/[listingId]`

- Preserve gallery, wishlist, host profile link, reviews, and booking rules.
- Tighten layout with `PageContainer`, `SectionHeader`, `Card`/`Surface`, and sticky booking panel.
- Keep unavailable state for banned/unverified listings.
- Do not alter booking validation or modal flow.
- Consider bento grid gallery from teal mockup if images support it.

### `/Home/login`, `/Home/signup`, Auth Modals

- Preserve `LoginSignup`.
- Replace remaining ad hoc social login styles with shared `Button`/`LinkButton`.
- Keep provider buttons hidden unless public flags are enabled.

### `/Home/forgotpassword`

- Use the same form card shell as auth.
- Preserve API flow and validation messages.

### `/Home/Account`

- Preserve profile overview and lazy editor switching.
- Improve tabs/segmented controls without changing Zustand account state.
- Keep public profile privacy behavior.

### `/Home/Account/favourites`

- Replace ad hoc heading/link/empty state with `PageHeader`, `EmptyState`, and `LinkButton`.
- Preserve listing grid and wishlist state.

### `/Home/Account/listings`

- Preserve KYC gate, listing cards, add/edit form, image handling, and verification status.
- Use consistent page headers, form sections, upload cards, and action footer.

### `/Home/Account/trips`

- Replace ad hoc empty state with shared `EmptyState`.
- Convert booking table markup to shared `DataTable` and valid action cells.
- On mobile, allow horizontal scroll or card fallback.

### `/Home/Account/reservations`

- Same table and empty-state treatment as trips.
- Preserve check-in, check-out, cancel, and confirmation modal behavior.

### `/Home/user/[userId]`

- Preserve public-only profile behavior.
- Standardize wrapper width and profile layout.
- Ensure no private editors appear for non-owner views.

### `/Admin`

- Keep metric cards and popular property table.
- Convert remaining raw table markup to shared `DataTable`.
- Use compact operations-first spacing.
- Apply teal bento-style stat cards.

### `/Admin/users`

- Preserve search, ban/unban, profile links, and status badges.
- Keep `DataTable`; standardize empty/search states.

### `/Admin/listing`

- Preserve property moderation actions and links.
- Keep `DataTable`; standardize property image/avatar fallback.

### `/Admin/bookings`

- Fix booking table valid markup.
- Use shared table primitives and compact action/status layout.

### `/Admin/kycRequest`

- Preserve approve/reject flow through existing modals.
- Use card grid or table consistently with `UserCard`.
- Add shared empty state and pagination footer.

### `/Admin/listingRequest`

- Preserve listing approval/rejection flow.
- Use listing card grid with clear moderation status and rejection message.

### `loading.tsx` and `error.tsx`

- Replace old custom UI with shared centered loading/error components.
- Use `Button`/`LinkButton`, lucide icons, and Luminous Teal colors.

## Animation Rules

- Use Tailwind transitions and Radix data-state animations only.
- Allow subtle hover translate/shadow on cards.
- Use opacity/scale/slide for dropdowns, dialogs, and sheets if implemented locally.
- Do not add Framer Motion or another animation package.
- Avoid decorative gradients, blobs, or animation that hides product content.

## Dependency Cleanup Plan

Safe cleanup candidates after source verification:

- `react-icons`
- `lodash`
- `@types/lodash`
- unused old type packages for date range, date picker, slider, stars, and file-saver
- `@svgr/webpack` if SVG import usage remains absent

Keep:

- Radix packages already used by owned UI
- `lucide-react`
- `class-variance-authority`, `clsx`, `tailwind-merge`
- `react-hook-form`
- `zustand`
- `country-state-city`
- Firebase, PayPal, `html2canvas`, and `jspdf`, but keep them isolated/lazy where possible

Run dependency removal through `pnpm --dir apps/web remove ...` during implementation mode and verify lockfile changes.

## Implementation Phases

### Phase 0: Docs Baseline

- Update `docs/UI_USER_STORIES.md`, `docs/UI_PAGE_REVAMP_PLAN.md`, `docs/OPENCODE_TASK_PLAN.md`, `docs/REVAMP_LOG.md`.
- Declare Luminous Teal as the official UI revamp direction.
- Document role-based user stories, screen-by-screen completion criteria, phase loop, commit rules, context/limit guard, and definition of done.
- No source code changes.

### Phase 1: Foundation

- Add missing UI primitives with teal color tokens.
- Add page/container/shell utilities.
- No route behavior changes.

### Phase 2: Shells

- Public navbar polish with teal active states.
- Account wrappers.
- Admin sidebar/mobile sheet.
- Footer/mobile nav route cleanup.

### Phase 3: Customer Marketplace

- Home, search, room detail, booking panel, reviews, auth, forgot password.
- Apply teal card hierarchy and bento gallery where supported.

### Phase 4: Account And Host

- Favourites, profile/account, listings, KYC, phone, trips, reservations.
- Align with teal host dashboard mockup.

### Phase 5: Admin Operations

- Dashboard, users, properties, bookings, KYC queue, listing queue.
- Align with teal admin mockup.

### Phase 6: Performance And Cleanup

- Remove stale dependencies.
- Re-measure route bundles.
- Run smoke and screenshot evidence.

## OpenCode Implementation Handoff

### Phase Loop (per phase)

1. Read the task goal, files, constraints, and acceptance criteria.
2. Inspect current implementation before editing.
3. Make the smallest coherent change.
4. Run `pnpm lint:web` and `pnpm build:web` (and `pnpm build:api` if API touched).
5. Update `docs/REVAMP_LOG.md` with: phase id, changed files, behavior changed, checks run, known follow-ups.
6. Stop and hand back for review.

### Commit Rules

- One commit per logical slice.
- Commit message format: `phase <N>.<slice>: <description>`.
- Do not commit secrets, `.env` overrides, or debug code.
- Do not commit unrelated formatting or whitespace changes.
- Before commit: `git status`, `git diff`, `git log --oneline -5`.

### Context / Limit Guard

- If any task exceeds 10 files or 30 minutes of consecutive editing without a review checkpoint, split into smaller slices and document in `REVAMP_LOG.md`.
- If a build or lint error cannot be resolved in 15 minutes, document the blocker in `REVAMP_LOG.md` and stop for review.

## Testing And Acceptance Criteria

Run after each slice:

```bash
pnpm lint:web
pnpm build:web
```

Run after full UI revamp when Docker/dev stack is available:

```bash
pnpm seed:demo
BASE_URL=http://localhost:3000 node scripts/playwright-smoke.js
```

Manual responsive checks:

- Mobile: `390x844`
- Tablet: `768x1024`
- Desktop: `1440x1000`

### Definition of Done

A phase is done when:

- Source changes are complete.
- Required checks pass (`pnpm lint:web`, `pnpm build:web`, `pnpm build:api` if API touched).
- `docs/REVAMP_LOG.md` records the work.
- README/provider/test docs are updated if behavior changed.
- Review accepts the slice.

### Acceptance

- Existing flows still work.
- No duplicate auth/menu/layout implementations.
- No text or button overlap.
- Tables use valid HTML.
- Route first-load JS does not regress without a documented reason.
- Removed dependencies are not imported anywhere.
- All route UI changes preserve current API contracts and Zustand state flows.
- Color tokens match Luminous Teal spec.
(End of file - total 317 lines)
