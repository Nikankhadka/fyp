# MeroGhar Revamp Log

This log records the portfolio revamp from the audited baseline to the improved implementation.

## Baseline

Verified before revamp implementation:

- `pnpm lint:web`: passing
- `pnpm build:api`: passing
- `pnpm build:web`: passing

Build-size concerns from the original baseline:

- `/Home/Account`: about `2.49 MB`
- `/Home/user/[userId]`: about `2.49 MB`
- `/Admin/account`: about `2.49 MB`
- `/Home/Account/listings`: about `2.43 MB`
- `/Admin/listingRequest`: about `2.43 MB`

Known issues from audit:

- Seed script stored empty image URLs for profiles, KYC, and properties.
- README did not inventory implemented features by role.
- Provider ownership and reconnection steps were not clear enough for new accounts.
- Room page had known browser smoke failures.
- Wishlist action had invalid nested button markup.
- Some SVG props used DOM attribute casing instead of React casing.
- Heavy account/listing modules loaded too early.
- Payment flow is safe only in demo mode unless server verification is added.

## Phase Progress

### Phase 1: Documentation Baseline

Status: implemented in this revamp pass.

Changes:

- README rewritten as product, architecture, setup, provider, testing, and portfolio documentation.
- Provider map updated with current keep/replace decisions and account reconnection steps.
- Test plan added under `docs/TEST_PLAN.md`.
- Revamp log added under `docs/REVAMP_LOG.md`.

### Phase 2: Demo Fixtures and Image Reliability

Status: implemented in this revamp pass.

Changes:

- Seed image helpers now return stable local public paths.
- Seed validation fails clearly for missing required assets.
- Public seed assets are exposed under `apps/web/public/seed` as lightweight symlinks to existing local images, keeping stable demo URLs without adding a large binary asset set.

### Phase 3: Auth and Provider Reconnection

Status: implemented in this revamp pass.

Changes:

- Passport strategies can be enabled only when matching credentials are configured.
- Social auth routes return a clear `503` when a provider is disabled.
- Social login buttons are hidden when provider availability is false.

### Phase 4-8: Frontend Redesign and Performance

Status: targeted implementation in this revamp pass.

Changes:

- Added shared UI primitives for buttons, fields, badges, empty states, page headers, surfaces, and pagination.
- Added shadcn/Radix-style foundation dependencies: Radix primitives, `class-variance-authority`, `clsx`, `tailwind-merge`, and `lucide-react`.
- Added `apps/web/src/utils/cn.ts` and converted primitives to `cva` variants and Radix `Slot` composition.
- Added Radix-backed Dialog, AlertDialog, DropdownMenu, Tabs, Select, Tooltip, and DataTable primitives.
- Migrated the shared modal shell to Radix Dialog while keeping Zustand modal state.
- Migrated admin user/property management tables to the new DataTable/Button/Field/StatusBadge primitives, valid table markup, lucide icons, and native debounced search.
- Removed global forced text color and letter spacing.
- Applied targeted marketplace/room/account/admin fixes that preserve current API contracts.
- Lazy-loaded heavy account/listing/payment modules where they were easiest to isolate safely.

### UI Design Documentation

Status: added in this revamp pass.

Changes:

- Added `docs/UI_DESIGN_REVAMP.md` with library research, current UI audit, design direction, component-system target, route-level redesign goals, and Stitch prompt pack.
- Added `docs/OPENCODE_TASK_PLAN.md` as the detailed OpenCode task handoff with goals, loops, phase tasks, checks, and definition of done.
- Updated the UI revamp direction to explicitly target replacing premade/ad hoc UI with owned shadcn-style components as much as possible without breaking application behavior.

### Phase 9: Backend and Security Hardening

Status: documented and partially implemented.

Changes:

- Demo payment mode is documented as safe default.
- Cloudinary server-signed uploads remain a future production-hardening task.
- Provider secrets and URLs are documented as env-driven.

### Phase 10: Portfolio Evidence

Status: in progress.

Evidence to keep current:

- `pnpm lint:web`
- `pnpm build:web`
- `pnpm build:api`
- `BASE_URL=http://localhost:3000 node scripts/playwright-smoke.js`

Current session verification:

- `pnpm lint:web`: passed
- `pnpm build:api`: passed
- `pnpm build:web`: passed after lazy-loading fixes

Measured first-load JS improvement from this session:

| Route | Baseline | After this session |
| --- | ---: | ---: |
| `/Home/Account` | about `2.49 MB` | about `146 kB` |
| `/Home/user/[userId]` | about `2.49 MB` | about `146 kB` |
| `/Admin/account` | about `2.49 MB` | about `146 kB` |
| `/Home/Account/listings` | about `2.43 MB` | about `145 kB` |
| `/Admin/listingRequest` | about `2.43 MB` | about `145 kB` |

Smoke automation update:

- `scripts/playwright-smoke.js` now discovers a current listing/user target from the API before falling back to legacy IDs.

## Session: Shadcn UI Foundation Expansion

Status: implemented after commit `c5ebdfa`.

Goal:

- Move from ad hoc/premade UI toward a complete shadcn-style owned component layer while preserving Zustand and existing route/API contracts.

Changes:

- Added Radix-backed UI primitives:
  - `apps/web/src/components/ui/dialog.tsx`
  - `apps/web/src/components/ui/alert-dialog.tsx`
  - `apps/web/src/components/ui/dropdown-menu.tsx`
  - `apps/web/src/components/ui/tabs.tsx`
  - `apps/web/src/components/ui/select.tsx`
  - `apps/web/src/components/ui/tooltip.tsx`
  - `apps/web/src/components/ui/data-table.tsx`
- Migrated the shared modal shell to the new Dialog primitive while keeping the existing Zustand `useModal` store.
- Migrated confirm/reject modals to use shared Button/TextArea/Dialog typography primitives.
- Rebuilt the admin user/property table with DataTable, Field, Button, StatusBadge, lucide icons, native debounced search, and valid table/link markup.
- Updated `docs/UI_DESIGN_REVAMP.md` to explicitly target replacing premade/ad hoc UI with owned shadcn-style components as much as possible without breaking the application.
- Updated `docs/OPENCODE_TASK_PLAN.md` with the new primitive and admin-table status.

Verification:

- `pnpm lint:web`: passed
- `pnpm build:api`: passed
- `pnpm build:web`: passed

Updated first-load JS notes:

| Route | After previous session | After shadcn table/modal slice |
| --- | ---: | ---: |
| `/Home/Account` | about `146 kB` | about `146 kB` |
| `/Home/user/[userId]` | about `146 kB` | about `146 kB` |
| `/Admin/account` | about `146 kB` | about `146 kB` |
| `/Home/Account/listings` | about `145 kB` | about `145 kB` |
| `/Admin/listingRequest` | about `145 kB` | about `145 kB` |
| `/Admin/users` | about `162 kB` | about `174 kB` |
| `/Admin/listing` | about `162 kB` | about `174 kB` |

Smoke status:

- Playwright smoke was not run in this session because `http://127.0.0.1:3000/Home` and `http://127.0.0.1:2900/health` were not running locally.
- Next evidence task: start the Docker/dev stack, run `pnpm seed:demo`, then run `BASE_URL=http://localhost:3000 node scripts/playwright-smoke.js`.

## Session: Marketplace Card Shadcn Migration

Status: implemented after commit `c795c96`.

Goal:

- Replace the legacy marketplace/listing card and surrounding listing-grid shell with shadcn-style owned primitives without breaking wishlist, moderation, owner edit/delete, or listing approval flows.

Changes:

- Rebuilt `apps/web/src/components/card/card.tsx` with:
  - stable image aspect ratio
  - `SafeImage`
  - accessible carousel controls
  - Radix Tooltip wrappers
  - shared `Button` and `StatusBadge`
  - lucide icons
  - preserved wishlist, admin verify/reject, host update/delete behavior
- Rebuilt `apps/web/src/app/Home/HomeClient.tsx` with `PageHeader`, `EmptyState`, and shared `Button` for load-more state.
- Updated `apps/web/src/components/listing/listingcomp.tsx` to use shared `Field`, `Button`, `PageHeader`, `EmptyState`, and lucide icons.

Verification:

- `pnpm lint:web`: passed
- `pnpm build:api`: passed
- `pnpm build:web`: passed

Updated first-load JS notes after card migration:

| Route | After shadcn table/modal slice | After card migration |
| --- | ---: | ---: |
| `/Home` | about `132 kB` | about `158 kB` |
| `/Home/Account/favourites` | about `131 kB` | about `157 kB` |
| `/Home/Account/listings` | about `145 kB` | about `159 kB` |
| `/Admin/listingRequest` | about `145 kB` | about `159 kB` |
| `/Home/Account` | about `146 kB` | about `162 kB` |
| `/Home/user/[userId]` | about `146 kB` | about `162 kB` |

Note:

- The card routes increased modestly because cards now use Tooltip/lucide/shared primitives, but the main previously heavy routes remain far below the original `~2.43-2.49 MB` baseline.

## Session: Room Detail and Booking Shadcn Migration

Status: implemented after commit `4afec05`.

Goal:

- Replace the room-detail customer surface with owned shadcn-style primitives while preserving booking validation, wishlist behavior, review editing, and route/API contracts.

Changes:

- Rebuilt `apps/web/src/app/Home/rooms/[listingId]/client.tsx` with:
  - `Surface`, `LinkButton`, `StatusBadge`, and `EmptyState`
  - lucide icons
  - native title casing instead of the broad lodash namespace import
  - null-safe banned/verification checks to avoid room-page status crashes
  - responsive host, amenity, rules, unavailable, and reviews sections
- Rebuilt `apps/web/src/components/carousel.tsx` with stable aspect ratio, shared `Button`, lucide image controls, and accessible image indicators.
- Rebuilt `apps/web/src/components/listing/BookProperty.tsx` with shared `Surface`, `Field`, `Button`, and `StatusBadge`; removed debug logs while preserving date, guest, owner, anonymous, and overlap validation.
- Rebuilt `apps/web/src/components/Svg/wishSvg.tsx` with a lucide heart button and removed debug logs/custom SVG markup.
- Rebuilt `apps/web/src/components/review.tsx` and `apps/web/src/components/reviewInput.tsx` with shared controls, lucide icons, valid React key usage, and a fixed `preventDefault()` call.
- Removed the server-side room-route debug log from `apps/web/src/app/Home/rooms/[listingId]/page.tsx`.

Verification:

- `pnpm lint:web`: passed
- `pnpm build:api`: passed
- `pnpm build:web`: passed

Updated first-load JS notes after room migration:

| Route | After card migration | After room migration |
| --- | ---: | ---: |
| `/Home/rooms/[listingId]` | not recorded in prior table | about `145 kB` |
| `/Home` | about `158 kB` | about `158 kB` |
| `/Home/Account/favourites` | about `157 kB` | about `157 kB` |
| `/Home/Account/listings` | about `159 kB` | about `159 kB` |
| `/Home/Account` | about `162 kB` | about `161 kB` |
| `/Home/user/[userId]` | about `162 kB` | about `161 kB` |

Smoke status:

- Playwright smoke still needs a running web/API stack. Next evidence task remains: start the dev stack, run `pnpm seed:demo`, then run `BASE_URL=http://localhost:3000 node scripts/playwright-smoke.js`.

## Session: Search Filter Shadcn Migration

Status: implemented after commit `7af0dd3`.

Goal:

- Replace the customer search/filter modal and navbar trigger with owned shadcn-style primitives while preserving URL-backed marketplace filtering.

Changes:

- Rebuilt `apps/web/src/components/modals/searchModal.tsx` with:
  - shared `Button`, `Field`, `SelectField`, and `StatusBadge`
  - lucide icons
  - accessible checkbox rows for amenities
  - sticky header and footer
  - mobile-safe modal scrolling
  - cleaner query generation that omits no-op numeric filters
- Preserved the existing filter keys: `minRate`, `maxRate`, `propertyType`, `country`, `state`, `city`, `rating`, and repeated `amenities`.
- Fixed state filter conversion so selected states are sent by name instead of leaving the numeric UI index in the query.
- Rebuilt `apps/web/src/components/navbar/searchButton.tsx` with a real button, lucide icon, accessible label, and active-filter summary text.
- Converted `SearchForm` imports in server files to type-only imports and removed the Home route query debug log.

Verification:

- `pnpm lint:web`: passed
- `pnpm build:web`: passed

Updated first-load JS notes after search migration:

| Route | After room migration | After search migration |
| --- | ---: | ---: |
| `/Home` | about `158 kB` | about `158 kB` |
| `/Home/rooms/[listingId]` | about `145 kB` | about `145 kB` |
| `/Home/Account` | about `161 kB` | about `161 kB` |
| `/Home/user/[userId]` | about `161 kB` | about `161 kB` |

Smoke status:

- Playwright smoke still needs a running web/API stack. Manual follow-up should cover country/state/city selects, one and multiple amenities, clear-filter behavior, and mobile modal scroll.

## Session: Account/Profile Shadcn Overview Migration

Status: implemented after commit `2028506`.

Goal:

- Modernize the Phase 6 account/profile overview shell while preserving lazy-loaded private editors and current profile/account behavior.

Changes:

- Rebuilt `apps/web/src/components/user/profile.tsx` with:
  - shared `Surface`, `Button`, `PageHeader`, `StatusBadge`, and `EmptyState`
  - lucide icons instead of react-icons
  - public overview sections for profile image, trust metrics, verification states, about text, and public listings
  - stable non-owner/public overview behavior even if the local account tab store was previously opened
- Rebuilt `apps/web/src/components/user/account.tsx` with:
  - shared `Surface`, `Button`, `PageHeader`, and `StatusBadge`
  - lucide KYC/email/phone/document status icons
  - valid markup for information rows
  - preserved lazy loading for KYC, phone/Firebase OTP, and email editors
- Removed the account page debug log and simplified public profile page wrapper styling.

Verification:

- `pnpm lint:web`: passed
- `pnpm build:web`: passed

Updated first-load JS notes after account/profile overview migration:

| Route | After search migration | After account/profile overview migration |
| --- | ---: | ---: |
| `/Home/Account` | about `161 kB` | about `160 kB` |
| `/Home/user/[userId]` | about `161 kB` | about `160 kB` |
| `/Admin/account` | about `161 kB` | about `160 kB` |
| `/Home/Account/reservations` | about `159 kB` | about `158 kB` |
| `/Home/Account/trips` | about `159 kB` | about `158 kB` |

Smoke status:

- Playwright smoke still needs a running web/API stack. Manual follow-up should cover own account tabs, public profile listing visibility, admin KYC profile viewing, and lazy editor loading.

## Remaining Production Hardening

- Add API-side Cloudinary signed upload and deletion endpoints.
- Verify real PayPal or Stripe payments server-side before booking finalization.
- Add API integration tests for auth, booking, admin moderation, and seed validation.
- Add bundle analyzer for richer before/after route-size reports.
- Replace remaining broad icon/utility imports where measurable.
