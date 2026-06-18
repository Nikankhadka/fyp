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

## Session: Account Editor Shadcn Migration

Status: implemented after commit `dbb9196`.

Goal:

- Modernize the lazy-loaded profile, email, and password editors that sit inside the Phase 6 account/profile shell.

Changes:

- Rebuilt `apps/web/src/components/user/editProfile.tsx` with:
  - shared `Field`, `TextArea`, and `Button`
  - lucide upload/save/cancel icons
  - stable profile image preview using normalized existing URLs and selected file previews
  - separated form `FileList` type from the uploaded image API payload type
  - preserved Cloudinary upload, confirmation modal, profile update API call, and account close/refresh flow
- Rebuilt `apps/web/src/components/user/emailcomp.tsx` with shared `Field` and `Button`, valid form submit handling, and preserved email API/refresh behavior.
- Rebuilt `apps/web/src/components/user/pasword.tsx` with shared `Field`, `Button`, and `PageHeader`, password inputs, preserved confirm modal, and removed debug logging.

Verification:

- `pnpm lint:web`: passed
- `pnpm build:web`: passed

Updated first-load JS notes after account editor migration:

| Route | After account/profile overview migration | After account editor migration |
| --- | ---: | ---: |
| `/Home/Account` | about `160 kB` | about `160 kB` |
| `/Home/user/[userId]` | about `160 kB` | about `160 kB` |
| `/Admin/account` | about `160 kB` | about `160 kB` |

Smoke status:

- Playwright smoke still needs a running web/API stack. Manual follow-up should cover profile image upload preview, profile update confirmation, email add/update, and password update validation.

## Session: KYC and Phone Form Shadcn Migration

Status: implemented after account editor migration.

Goal:

- Migrate KYC form and phone verification to shared shadcn-style primitives while preserving existing API/confirmation flows.

Changes:

- Rebuilt `apps/web/src/components/user/kyc.tsx` with:
  - shared `Field`, `SelectField`, `Button`, `PageHeader`, and `Surface`
  - lucide `Camera`, `Save`, `X` icons instead of ad hoc markup
  - file upload replaced with accessible label + sr-only input pattern
  - preserved react-hook-form logic, Cloudinary upload flow, country→state→city cascading selects, confirmation modal flow
- Rebuilt `apps/web/src/components/user/phone.tsx` with:
  - shared `Button` variants for SendCode, Verify, and Cancel actions
  - lucide `Loader2` instead of `react-icons/im` spinner
  - preserved Firebase OTP flow, recaptcha logic, phone reuse check, error state machine

Verification:

- `pnpm lint:web`: passed
- `pnpm build:web`: passed
- `pnpm build:api`: passed

Updated first-load JS notes after KYC/phone migration:

| Route | After account editor migration | After KYC/phone migration |
| --- | ---: | ---: |
| `/Home/Account` | about `160 kB` | about `160 kB` |
| `/Home/user/[userId]` | about `160 kB` | about `160 kB` |
| `/Admin/account` | about `160 kB` | about `160 kB` |

Smoke status:

- Playwright smoke still needs a running web/API stack. Manual follow-up should cover KYC form pre-fill, country/state/city cascade, image preview, phone OTP flow with unconfigured Firebase.

## Session: Property Form Shadcn Migration

Status: implemented after KYC/phone migration.

Goal:

- Migrate the property post/edit form to shared shadcn-style primitives while preserving create/update branching logic, image array handling, and API contracts.

Changes:

- Rebuilt `apps/web/src/components/postproperty.tsx` with:
  - shared `Field`, `SelectField`, `TextArea`, `Button`, `PageHeader`, and `Surface`
  - lucide `Plus`, `Trash2`, `Camera` icons instead of `react-icons/ai`
  - image upload cards use accessible label + sr-only input pattern
  - removed ad hoc `inputStyle` string, replaced with shared primitives
  - preserved react-hook-form with `useFieldArray` for images, Cloudinary multi-image upload, country→state→city cascade, create vs update logic, confirmation modal flow, amenities checkboxes

Verification:

- `pnpm lint:web`: passed
- `pnpm build:web`: passed

Updated first-load JS notes after property form migration:

| Route | After KYC/phone migration | After property form migration |
| --- | ---: | ---: |
| `/Home/Account/listings` | about `159 kB` | about `159 kB` |
| `/Admin/listingRequest` | about `159 kB` | about `159 kB` |

Smoke status:

- Playwright smoke still needs a running web/API stack. Manual follow-up should cover create new property with images, update existing property, amenities selection, country/state/city cascade, validation errors.

## Session: Admin Dashboard Shadcn Migration

Status: implemented after property form migration.

Goal:

- Redesign the admin dashboard with metric cards, valid table markup, and lucide icons while preserving all data props and link behavior.

Changes:

- Rebuilt `apps/web/src/app/Admin/dashClient.tsx` with:
  - shared `Surface` and `StatusBadge` for metric cards
  - lucide `Users`, `Building2`, `CalendarCheck` icons instead of `react-icons/bs`
  - fixed invalid table markup: moved `<tbody>` outside `.map()`, mapped only `<tr>` elements
  - fixed invalid `<Link>` inside `<td>` nesting by wrapping content properly
  - responsive grid layout for metric cards (1/2/3 columns)
  - preserved all data props, popular properties listing, link targets, dark mode support

Verification:

- `pnpm lint:web`: passed
- `pnpm build:web`: passed

Updated first-load JS notes after admin dashboard migration:

| Route | After property form migration | After admin dashboard migration |
| --- | ---: | ---: |
| `/Admin` | about `97.6 kB` | about `109 kB` |

Smoke status:

- Playwright smoke still needs a running web/API stack. Manual follow-up should cover dashboard with zero data, popular properties table with empty array, links opening in new tabs, responsive layout on mobile.

## Session: Auth Modals Shadcn Migration

Status: implemented after admin dashboard migration.

Goal:

- Migrate login/signup, forgot password, and booking bill modals to shared shadcn-style primitives while preserving auth flows, social login, and payment checkout.

Changes:

- Rebuilt `apps/web/src/components/loginSignup.tsx` with:
  - shared `Field` and `Button` instead of ad hoc inputs and submit buttons
  - lucide `X` icon for close button instead of image-based cross
  - preserved login/signup toggle, social login conditional rendering, form validation, API calls, modal state management
- Rebuilt `apps/web/src/components/fogotpassword.tsx` with:
  - shared `Field` and `Button` instead of `inputStyle` from variants
  - proper form submit handling with Cancel/Reset layout
  - preserved email validation and API flow
- Rebuilt `apps/web/src/components/modals/bookingBillModal.tsx` with:
  - shared `Button` variants for demo checkout, cancel, and download actions
  - lucide `Star` icon instead of `react-icons/ai`
  - preserved booking flow, demo/PayPal checkout branching, bill PDF generation

Verification:

- `pnpm lint:web`: passed
- `pnpm build:web`: passed

Updated first-load JS notes after auth modals migration:

| Route | After admin dashboard migration | After auth modals migration |
| --- | ---: | ---: |
| `/Home/login` | about `135 kB` | about `148 kB` |
| `/Home/signup` | about `135 kB` | about `148 kB` |
| `/Home/forgotpassword` | about `120 kB` | about `139 kB` |

Smoke status:

- Playwright smoke still needs a running web/API stack. Manual follow-up should cover login with invalid credentials, signup with duplicate user, forgot password flow, booking bill modal rendering, demo checkout completion.

## Remaining Production Hardening

- Add API-side Cloudinary signed upload and deletion endpoints.
- Verify real PayPal or Stripe payments server-side before booking finalization.
- Add API integration tests for auth, booking, admin moderation, and seed validation.
- Add bundle analyzer for richer before/after route-size reports.
- Replace remaining broad icon/utility imports where measurable.
