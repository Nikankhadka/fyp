# OpenCode Task Plan

This document is the execution handoff for OpenCode. Codex remains the orchestrator/planner/reviewer. OpenCode should complete one task slice at a time, run the listed checks, and update `docs/REVAMP_LOG.md` before handoff.

## Operating Loop

For every task:

1. Read the task goal, files, constraints, and acceptance criteria.
2. Inspect the current implementation before editing.
3. Make the smallest coherent change that completes the task.
4. Run the required checks.
5. Update `docs/REVAMP_LOG.md` with:
   - task id
   - changed files
   - behavior changed
   - tests run
   - known follow-ups
6. Stop and hand back to Codex for review.

Do not:

- Change API contracts unless the task explicitly says to.
- Replace Zustand.
- Introduce a second styling framework.
- Add provider secrets.
- Hide failing checks.
- Rewrite unrelated files.

## Shared Checks

Run where relevant:

```bash
pnpm lint:web
pnpm build:web
pnpm build:api
BASE_URL=http://localhost:3000 node scripts/playwright-smoke.js
```

Use `pnpm build:api` for API/seed/auth changes. Use `pnpm build:web` and `pnpm lint:web` for frontend changes.

## Phase 1: Documentation Baseline

Status: completed by Codex in the current revamp session.

OpenCode follow-up:

- Keep `README.md`, `SERVICE_PROVIDERS.md`, `docs/TEST_PLAN.md`, `docs/UI_DESIGN_REVAMP.md`, and `docs/REVAMP_LOG.md` synchronized with future implementation changes.

Acceptance:

- Docs accurately describe implemented behavior.
- No doc claims a feature is complete unless source and tests support it.

## Phase 2: Demo Fixtures and Image Reliability

Status: implemented by Codex in the current revamp session.

Task P2.1: Verify seed assets

- Files: `apps/api/src/scripts/seedDemoData.ts`, `apps/web/public/seed/**`
- Goal: confirm seed validation passes locally and in Docker dev.
- Checks:
  - `pnpm build:api`
  - `pnpm seed:demo` when Docker dev stack is running
- Acceptance:
  - Missing seed asset produces a clear error.
  - Seeded records store non-empty local image URLs.

Task P2.2: Replace placeholder seed images

- Goal: replace copied placeholder assets with better curated property/profile images.
- Constraints:
  - Keep filenames stable.
  - Do not change seed data URLs unless README is updated.
- Acceptance:
  - Home cards and room gallery look credible.

## Phase 3: Auth and Provider Reconnection

Status: partially implemented by Codex in the current revamp session.

Task P3.1: Verify disabled social auth behavior

- Files: `apps/api/src/configs/strategy.ts`, `apps/api/src/routes/auth/auth.routes.ts`, `apps/web/src/components/loginSignup.tsx`
- Goal: social auth should not crash when provider credentials are absent.
- Checks:
  - `pnpm build:api`
  - `pnpm lint:web`
  - Manual: visit login page with `NEXT_PUBLIC_ENABLE_GOOGLE_AUTH=false` and `NEXT_PUBLIC_ENABLE_FACEBOOK_AUTH=false`
- Acceptance:
  - Username/password login still works.
  - Social buttons are hidden unless public flags are true.
  - Disabled API social route returns clear `503`.

Task P3.2: New provider account smoke

- Goal: reconnect Google OAuth using new account env vars.
- Acceptance:
  - Google login reaches provider and returns to app callback.
  - README callback instructions remain accurate.

## Phase 4: UI System Foundation

Status: started by Codex in the current revamp session.

Task P4.1: Complete Radix/shadcn-style UI primitives

- Files: `apps/web/src/components/ui/**`, `apps/web/src/utils/cn.ts`
- Goal: add and use owned primitives for Dialog, AlertDialog, DropdownMenu, Tabs, Select, Tooltip, and DataTable.
- Use:
  - Radix primitives
  - `class-variance-authority`
  - `clsx`
  - `tailwind-merge`
  - `lucide-react`
- Acceptance:
  - Primitives use current MeroGhar colors.
  - Components are accessible and keyboard-friendly.
  - Existing modals can migrate incrementally.
  - New visible UI should prefer these primitives over ad hoc Tailwind markup.

Status:

- Codex added the core primitive files and migrated the shared modal shell plus admin management table as the first worked examples.

Task P4.2: Normalize typography and spacing

- Files: `apps/web/src/styles/globals.css`, route shells, shared primitives
- Goal: remove inconsistent font size, letter spacing, card radius, borders, and shadow usage.
- Acceptance:
  - No global forced text color or global letter spacing.
  - Page headers and form controls share consistent sizing.

## Phase 5: Marketplace, Room, Booking, Wishlist

Task P5.1: Redesign listing cards

- Files: `apps/web/src/components/card/card.tsx`, `apps/web/src/app/Home/HomeClient.tsx`
- Goal: modern image-led listing card with stable dimensions and consistent actions.
- Acceptance:
  - Cards show image, title, city/state, rating, price, and status where relevant.
  - Wishlist button is accessible.
  - No layout shift when image missing.

Status:

- Codex migrated the shared `Card` component to shadcn-style primitives, lucide icons, stable image ratio, tooltip-backed image controls, and shared action/status components.
- Next OpenCode task: visually verify the card on Home, Favourites, Host Listings, Admin Listing Requests, and public profile listing grids.

Task P5.2: Redesign room detail

- Files: `apps/web/src/app/Home/rooms/[listingId]/client.tsx`, `apps/web/src/components/carousel.tsx`, `apps/web/src/components/listing/BookProperty.tsx`
- Goal: polished detail page with gallery, host summary, amenities, rules, reviews, and booking panel.
- Acceptance:
  - Public room page has no runtime crash.
  - Empty reviews render cleanly.
  - Unavailable listings show clear state.
  - Booking still rejects invalid/overlapping dates.

Status:

- Codex migrated the room detail route, image carousel, booking panel, wishlist button, review card, and review input to the owned shadcn-style primitives/lucide icon stack.
- Removed the room surface's broad lodash import, react-icons imports, custom carousel SVG controls, and debug logs.
- Added null-safe `isBanned`/`isVerified` checks so incomplete listing status data renders a controlled unavailable state instead of crashing.
- Next OpenCode task: visually verify public guest, logged-in guest, owner, and admin room states on desktop and mobile after the dev stack is running.

Task P5.3: Search modal redesign

- Files: `apps/web/src/components/modals/searchModal.tsx`
- Goal: use consistent fields, sections, and action footer.
- Acceptance:
  - URL query behavior remains unchanged.
  - Mobile modal fits viewport.

Status:

- Codex migrated the search modal and navbar search trigger to shared shadcn-style primitives and lucide icons.
- Preserved the existing URL query keys for `minRate`, `maxRate`, `propertyType`, `country`, `state`, `city`, `rating`, and repeated `amenities`.
- Fixed state query conversion so selected states are pushed by state name instead of a numeric index.
- Converted server consumers of `SearchForm` to type-only imports so the client modal implementation is not imported as runtime code by server files.
- Next OpenCode task: manually verify country/state/city dependent selects, one-amenity and multi-amenity URLs, clear-filter behavior, and mobile scroll/footer layout.

## Phase 6: Account, Host, KYC, Profile

Task P6.1: Lazy-load private account editors

- Files: `apps/web/src/components/user/profile.tsx`, `apps/web/src/components/user/account.tsx`
- Goal: public profile should not eagerly load KYC, Firebase phone auth, profile editor, or password editor.
- Acceptance:
  - `/Home/user/[userId]` bundle size improves from original `~2.49 MB`.
  - Public profile does not expose private KYC fields.

Status:

- Codex migrated the profile overview and account information shell to shared shadcn-style primitives and lucide icons.
- Private editors remain lazy-loaded: edit profile, account/KYC, phone/Firebase OTP, email, and password.
- Public and non-owner profile views now force the overview state so a stale local account tab store cannot hide listings or show private edit panels.
- Removed old profile/account react-icons imports, ad hoc bordered/shadowed profile sections, invalid heading-in-paragraph markup, and account page debug logging.
- Next OpenCode task: visually verify own account, public profile, and admin KYC profile views; then migrate the inner `editProfile`, `kyc`, `emailcomp`, `phone`, and `pasword` forms to the same shared field/button primitives.

Task P6.2: Redesign host listing management

- Files: `apps/web/src/components/listing/listingcomp.tsx`, `apps/web/src/components/postproperty.tsx`
- Goal: clear listing status, rejection messages, add/edit form states.
- Acceptance:
  - KYC gate still blocks listing creation.
  - Edit preserves existing images unless replaced.

Status:

- Listing management shell now uses shared `Field`, `Button`, `PageHeader`, `EmptyState`, and the migrated `Card`; the property form itself still needs a deeper shadcn-form pass.

## Phase 7: Admin Operations UX

Task P7.1: Redesign admin dashboard

- Files: `apps/web/src/app/Admin/dashClient.tsx`
- Goal: compact operations dashboard with metric cards and popular listings table.
- Acceptance:
  - Dashboard remains scannable on desktop and mobile.

Task P7.2: Redesign admin tables

- Files: `apps/web/src/components/admin/table.tsx`
- Goal: consistent search, statuses, and actions for users/properties/bookings.
- Acceptance:
  - No invalid table/link nesting.
  - Ban/unban flows still work.
  - Broad `lodash` import is replaced with targeted/native helpers.

Status:

- User/property admin table was migrated to `DataTable`, `Field`, `Button`, `StatusBadge`, lucide icons, valid table markup, and native debounced search.

## Phase 8: Performance Optimization

Task P8.1: Route-size benchmark

- Goal: record current `pnpm build:web` route sizes after every major UI slice.
- Output: update `docs/REVAMP_LOG.md`.

Task P8.2: Remove broad imports

- Files: components using `lodash` namespace or large icon packages.
- Goal: reduce unnecessary client JS.
- Acceptance:
  - Build route sizes improve or no longer regress.

## Phase 9: Backend and Security Hardening

Task P9.1: Cloudinary signed upload design

- Goal: create API design doc or endpoint for server-signed uploads.
- Acceptance:
  - Existing unsigned demo path remains available.
  - Production path is documented and testable.

Task P9.2: Payment verification design

- Goal: document or implement server-side verification before real payment bookings.
- Acceptance:
  - Demo mode remains safe default.
  - Real payment mode is clearly blocked or verified.

## Phase 10: Tests and Portfolio Evidence

Task P10.1: Dynamic Playwright smoke data

- Files: `scripts/playwright-smoke.js`
- Goal: stop hardcoding stale property/user ObjectIds.
- Acceptance:
  - Smoke script resolves seeded room/profile IDs dynamically.

Task P10.2: Before/after screenshots

- Goal: collect screenshots for home, room, profile, listings, admin dashboard.
- Output:
  - `artifacts/playwright/**`
  - `docs/REVAMP_LOG.md` links/notes

## Definition of Done

A phase is done when:

- Source changes are complete.
- Required checks pass.
- `docs/REVAMP_LOG.md` records the work.
- README/provider/test docs are updated if behavior changed.
- Codex review accepts the slice.
