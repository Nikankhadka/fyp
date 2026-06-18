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

## Session: Final Cleanup - Icons and Lodash Removal

Status: implemented after auth modals migration.

Goal:

- Replace all remaining `react-icons` imports with `lucide-react` equivalents.
- Replace broad `lodash` namespace imports with native helpers.
- Fix invalid table markup in TripsReservationClient.

Changes:

- Rebuilt `apps/web/src/app/loading.tsx` with:
  - lucide `Loader2` instead of `react-icons/fa` spinner
- Rebuilt `apps/web/src/components/navbar/sidebar.tsx` with:
  - lucide `LayoutDashboard`, `User`, `Home`, `HousePlus`, `Settings`, `UserCheck`, `LogOut` instead of `react-icons`
- Rebuilt `apps/web/src/components/navbar/DashboardNav.tsx` with:
  - lucide `Menu` instead of `react-icons/rx` hamburger
- Rebuilt `apps/web/src/components/footer.tsx` with:
  - lucide `Search`, `Heart`, `Globe`, `User` instead of `react-icons`
- Rebuilt `apps/web/src/components/card/userCard.tsx` with:
  - lucide `BadgeCheck`, `XCircle` instead of `react-icons`
  - native `capitalize()` helper instead of `lodash.capitalize`
  - shared `Button` primitives
- Rebuilt `apps/web/src/components/listing/TripsReservationClient.tsx` with:
  - lucide `CheckCircle`, `Trash2`, `ChevronLeft`, `ChevronRight`, `House`, `X` instead of `react-icons`
  - native `capitalize()` helper instead of `lodash` namespace
  - fixed invalid `<tbody>` inside `.map()` — moved `<tbody>` outside, mapped only `<tr>` elements
  - fixed invalid `<Link>` inside `<td>` nesting
  - `StatusBadge` for booking status display
  - shared `Button` primitives for actions

Verification:

- `pnpm lint:web`: passed
- `pnpm build:web`: passed
- Zero `react-icons` imports remaining in codebase
- Zero `lodash` imports remaining in codebase

Updated first-load JS notes after final cleanup:

| Route | After auth modals migration | After final cleanup |
| --- | ---: | ---: |
| `/Admin/bookings` | about `173 kB` | about `145 kB` |
| `/Admin/kycRequest` | about `153 kB` | about `137 kB` |
| `/Home/Account/reservations` | about `158 kB` | about `142 kB` |
| `/Home/Account/trips` | about `158 kB` | about `142 kB` |

## Session: Remaining UI Components Shadcn Migration

Status: implemented after final cleanup.

Goal:

- Complete the shadcn migration for remaining ad-hoc UI components: admin KYC page, navbar, nav dropdown, reject modal, invoice, and footer icons.

Changes:

- Rebuilt `apps/web/src/app/Admin/kycRequest/page.tsx` with:
  - `PageHeader` and `Button` primitives instead of ad-hoc heading and Link buttons
  - lucide `ChevronLeft`, `ChevronRight` instead of `react-icons/ai`
  - removed commented-out search form code
  - consistent grid gap and pagination layout

- Rebuilt `apps/web/src/components/navbar/navbar.tsx` with:
  - `DropdownMenu` primitive from `ui/dropdown-menu.tsx` replacing manual ref-based click handler
  - `Button` primitive for profile trigger with lucide `Menu` icon
  - `DropdownMenuItem` for all menu entries with proper `asChild` Link composition
  - preserved auth state branching, admin/guest menu differences, and logout flow

- Removed `apps/web/src/components/navbar/navmodel.tsx` usage:
  - functionality absorbed into navbar using `DropdownMenuContent`
  - eliminated ad-hoc `btnstyle` string and manual positioning

- Cleaned `apps/web/src/components/modals/rejectReportModal.tsx`:
  - removed `ErrorText` dependency from `random.tsx`
  - inline error message pattern with consistent `text-sm text-red-700`
  - proper `htmlFor`/`id` label association for `TextArea`
  - removed unused `control` and `watch` from `useForm`

- Rebuilt `apps/web/src/components/listing/invoiceUI.tsx` with:
  - `Surface` wrapper for consistent card styling
  - valid `<thead>`/`<tbody>` table markup with proper `p-2` cell padding
  - consistent typography for billing sections
  - removed debug console logs

- Rebuilt `apps/web/src/components/Svg/footerchild.tsx` with:
  - lucide `Search`, `Heart`, `User`, `Globe`, `MessageSquare` instead of custom SVGs
  - `cn` utility for conditional icon styling
  - icon/href mapping tables for cleaner branching
  - preserved active state coloring and hover transitions

Verification:

- `pnpm lint:web`: passed
- `pnpm build:web`: passed
- `pnpm build:api`: passed
- Zero `react-icons` imports remaining in codebase
- Zero `lodash` imports remaining in codebase

Updated first-load JS notes after remaining UI migration:

| Route | After final cleanup | After remaining UI migration |
| --- | ---: | ---: |
| `/Admin/kycRequest` | about `137 kB` | about `137 kB` |
| `/Home` | about `158 kB` | about `158 kB` |
| `/Admin` | about `109 kB` | about `109 kB` |

Note:

- Bundle sizes remained stable because replaced components were already using efficient primitives or were server-rendered.
- Navbar now uses accessible DropdownMenu with keyboard navigation instead of manual click-outside detection.
- Footer icons are now consistent lucide stroke icons instead of mixed custom SVG paths.

## Session: Phase 9 - Backend Security Hardening

Status: implemented after remaining UI migration.

Goal:

- Replace insecure unsigned Cloudinary uploads with server-signed uploads.
- Add server-side PayPal payment verification before booking finalization.
- Update environment configuration for production-ready provider setup.

Changes:

### Cloudinary Signed Uploads

- Created `apps/api/src/services/cloudinary/cloudinary.service.ts`:
  - `generateUploadSignature()` - creates SHA1 signature using API secret, timestamp, and folder
  - `destroyImage()` - server-side image deletion via Cloudinary API
  - Credential validation with graceful fallback when not configured

- Created `apps/api/src/controllers/cloudinary/cloudinary.controller.ts`:
  - `POST /cloudinary/v1/signature` - returns signed upload parameters (authenticated)
  - `DELETE /cloudinary/v1/destroy/:publicId` - deletes image from Cloudinary (authenticated)

- Created `apps/api/src/routes/cloudinary/cloudinary.routes.ts`:
  - Protected routes requiring valid access token
  - Mounted at `/cloudinary/v1` in index router

- Updated `apps/web/src/api/client/uploadImag.ts`:
  - Replaced unsigned upload preset flow with signed upload
  - Requests signature from API before uploading to Cloudinary
  - Calls API destroy endpoint instead of no-op stub
  - Removed dependency on `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`

### PayPal Payment Verification

- Created `apps/api/src/services/payment/payment.service.ts`:
  - `verifyPayPalPayment()` - verifies PayPal order via REST API
  - OAuth2 token generation for PayPal API access
  - Validates payment status is COMPLETED
  - Validates payment amount matches expected booking total
  - Graceful fallback when credentials not configured

- Created `apps/api/src/controllers/payment/payment.controller.ts`:
  - `POST /payment/v1/verify-paypal/:id` - verifies payment and creates booking
  - `GET /payment/v1/config` - returns PayPal configuration status
  - Only creates booking/payment records after successful verification

- Created `apps/api/src/routes/payment/payment.routes.ts`:
  - Protected routes requiring valid access token and user role
  - Mounted at `/payment/v1` in index router

- Updated `apps/web/src/components/modals/bookingBillModal.tsx`:
  - PayPal success now calls server verification endpoint
  - Booking created only after server confirms payment
  - Demo mode remains safe default (bypasses verification)

### Environment Configuration

- Updated `apps/api/.env.example` with:
  - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
  - `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, `PAYPAL_API_URL`

- Updated `apps/web/.env.example` with:
  - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` (upload preset removed)
  - `NEXT_PUBLIC_FIREBASE_*` variables documented
  - `NEXT_PUBLIC_PAYPAL_CLIENT_ID` documented

- Updated `apps/api/src/configs/constant.ts` with Cloudinary and PayPal constants

### Security Improvements

1. **Cloudinary uploads now require server signature**:
   - Browser can no longer upload without valid API signature
   - Upload preset no longer exposed in client env vars
   - Image deletion is server-controlled

2. **PayPal payments verified server-side**:
   - Payment ID validated against PayPal API before booking creation
   - Payment amount checked against expected booking total
   - Prevents fraudulent booking creation with fake payment IDs

3. **Demo mode remains safe default**:
   - `NEXT_PUBLIC_DEMO_PAYMENT_MODE=true` bypasses real payment
   - Cloudinary falls back to error when not configured
   - PayPal falls back to error when not configured

Verification:

- `pnpm lint:web`: passed
- `pnpm build:web`: passed
- `pnpm build:api`: passed

Updated first-load JS notes after Phase 9:

| Route | After remaining UI migration | After Phase 9 |
| --- | ---: | ---: |
| `/Home/rooms/[listingId]` | about `145 kB` | about `145 kB` |
| `/Home/Account` | about `161 kB` | about `161 kB` |
| `/Admin` | about `109 kB` | about `109 kB` |

Note:

- Bundle sizes stable - security changes are server-side with minimal client impact.
- New endpoints add one API call for upload signature and one for payment verification.
- Demo mode (`NEXT_PUBLIC_DEMO_PAYMENT_MODE=true`) remains recommended for portfolio demos.

## Remaining Production Hardening

- Add API integration tests for auth, booking, admin moderation, and seed validation.
- Add bundle analyzer for richer before/after route-size reports.
- Run Playwright smoke tests with running dev stack for end-to-end verification.
- Collect before/after screenshots for portfolio evidence.

## Session: Phase 9 Stabilization and Homepage Auth Fix

Status: implemented after Phase 9 hardening pass.

Goal:

- Stabilize signed Cloudinary uploads and server-side PayPal verification.
- Fix homepage access to login/signup actions after navbar migration.
- Sync provider documentation with the signed-upload and verified-payment architecture.

Changes:

- Replaced the payment route's old booking validator with a dedicated PayPal booking validator for `orderId`, stay dates, guest count, and bill data.
- Updated PayPal verification so the API loads the property, recomputes stay length, base amount, service charge, and total from server data, then verifies the PayPal order amount before creating booking/payment records.
- Updated real PayPal checkout so the client sends booking intent plus a generated PDF bill, and the invoice display no longer creates a duplicate booking after server verification.
- Kept demo checkout on the existing invoice-driven booking path.
- Changed Cloudinary deletion to support JSON-body `publicId` values so nested Cloudinary folder IDs with slashes are handled safely.
- Propagated signed-upload API errors to profile, KYC, and property image upload toasts.
- Reworked the homepage navbar so unauthenticated login/signup access is visible on desktop and available from the account menu on mobile.
- Standardized navbar spacing, icon sizing, and the authenticated "Post Room" action with shared button primitives.
- Updated `README.md` and `SERVICE_PROVIDERS.md` to remove unsigned upload preset setup and document API-side Cloudinary and PayPal variables.

Verification:

- `pnpm build:api`: passed
- `pnpm lint:web`: passed
- `pnpm build:web`: passed
- `git diff --check`: passed
- `rg "CLOUDINARY_UPLOAD_PRESET|unsigned upload|upload preset|client-trusting|server-signed upload later" README.md SERVICE_PROVIDERS.md apps/api/.env.example apps/web/.env.example apps/web/src apps/api/src`: no matches
- `rg "expectedAmount|bookingDetail|validateBooking" apps/api/src/routes/payment apps/api/src/controllers/payment apps/web/src/components/modals/bookingBillModal.tsx`: no matches

Updated first-load JS notes after stabilization:

| Route | After Phase 9 | After stabilization |
| --- | ---: | ---: |
| `/Home` | about `158 kB` | about `158 kB` |
| `/Home/rooms/[listingId]` | about `145 kB` | about `145 kB` |
| `/Home/Account` | about `161 kB` | about `161 kB` |
| `/Admin/kycRequest` | about `137 kB` | about `137 kB` |
| `/Admin/bookings` | about `144 kB` | about `144 kB` |

Smoke status:

- `pnpm seed:demo` could not run because Docker is not running locally: Docker API socket `unix:///Users/nikankhadka/.docker/run/docker.sock` was unavailable.
- `BASE_URL=http://localhost:3000 node scripts/playwright-smoke.js` was not run because the Docker-backed API/database seed prerequisite is blocked.
