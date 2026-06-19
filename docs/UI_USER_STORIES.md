# LuxeStay/Stitch UI User Stories And Page Design Notes

This document describes the user-facing goals for the LuxeStay UI revamp. It adopts the **Luminous Teal** design direction defined in `docs/luminous_teal/DESIGN.md` and the screen mockups under `docs/*_teal/`.

The older MeroGhar blue visual direction (`#54A2C9`, `#22546D`, `#cee4ef`) is superseded for this UI revamp. Route and API identifiers (e.g. `/Home`, `/Home/rooms/[listingId]`, `/Admin`) remain unchanged.

This document guides visual design, page layout, copy, and acceptance checks while preserving existing application behavior:
- All existing route contracts, API contracts, Zustand stores, modal flows, booking validation, wishlist state, KYC gates, review flows, and auth behavior.
- No replacement of Zustand, no second styling framework, no provider secrets.

## Visitor / Public Browser

### User Goal

As a visitor, I want to browse trustworthy rental listings, filter quickly, inspect room details, and understand host credibility before creating an account.

### Relevant Screens

- `/Home`
- `/Home/rooms/[listingId]`
- `/Home/user/[userId]`
- `/Home/login`
- `/Home/signup`

### Current UX Issues

- Marketplace and detail pages are partly modernized, but page wrappers and secondary states are inconsistent.
- Some empty/error states still feel old or generic.
- Auth is available through modals/routes, but the visual shell should remain consistent with the rest of the marketplace.

### Target UI / Design Outcome

- Image-led browsing with stable listing cards following the teal marketplace mockup (`docs/home_discovery_marketplace_teal/`).
- Clear search/filter trigger using current URL-backed behavior.
- Room detail hierarchy with bento gallery, host card, amenities grid, and sticky booking panel following `docs/room_details_property_view_teal/`.
- Public host profile should show public trust signals and listings only.
- Auth modal should feel like part of the same system, not a separate old form.

### Acceptance Criteria

- Visitor can browse `/Home` and room details without login.
- Search/filter modal remains URL-compatible.
- Login/signup actions open the existing `LoginSignup` flow.
- No public page exposes private account editor UI.
- Mobile layout has no overlap at `390x844`, `768x1024`, `1440x1000`.
- Cards use Luminous Teal color tokens (primary `#006a65`, primary-container `#20b2aa`, surface hierarchy).
- Empty/error/loading states use teal-surface primitives and shared components.

## Guest

### User Goal

As a logged-in guest, I want to save listings, reserve demo stays, view trips, manage reviews, and update my profile details without confusion.

### Relevant Screens

- `/Home`
- `/Home/rooms/[listingId]`
- `/Home/Account`
- `/Home/Account/favourites`
- `/Home/Account/trips`
- `/Home/forgotpassword`

### Current UX Issues

- Favourites and trip empty states still use older ad hoc styles.
- Booking invoice and trip tables need more consistent table/card behavior.
- Some action buttons use inconsistent sizes and spacing.

### Target UI / Design Outcome

- Wishlist actions are accessible and visually consistent using lucide heart + teal active state.
- Booking panel is sticky on desktop and full-width on mobile.
- Demo checkout/invoice modal uses the same card, table, and button language.
- Trips page uses a valid responsive table or mobile cards.
- Empty states guide users back to browsing.

### Acceptance Criteria

- Guest can save/unsave listings.
- Guest can open booking modal after valid date/guest input.
- Demo checkout remains the safe default.
- Trips table has valid markup and responsive behavior.
- Review input and review actions remain available where allowed.

## Host

### User Goal

As a host, I want to complete KYC, create and edit listings, understand verification status, and manage reservations from a clear dashboard-like account area.

### Relevant Screens

- `/Home/Account`
- `/Home/Account/listings`
- `/Home/Account/reservations`
- `/Home/rooms/[listingId]`

### Current UX Issues

- Listing and KYC forms are mostly migrated but still need final spacing and upload consistency.
- Reservation table has invalid nested table cells in action rendering.
- Empty states should tell hosts what to do next.

### Target UI / Design Outcome

- KYC gate is clear and non-punitive.
- Listing form uses grouped sections, consistent labels, upload cards, and action footer.
- Listing cards clearly show pending, verified, rejected, or banned states.
- Reservation management is dense but readable, with status badges and consistent action buttons.
- Host dashboard follows `docs/host_reservations_dashboard_teal/` with KPI cards, KYC banner, and reservations table.

### Acceptance Criteria

- KYC verification still gates listing creation.
- Edit preserves existing images unless replaced.
- Host can check in, check out, or cancel reservations where allowed.
- Rejection messages are visible and readable.
- Reservation table/card markup is valid.

## Admin

### User Goal

As an admin, I want to review marketplace operations quickly, search users/properties, moderate content, review bookings, approve KYC, and approve listings.

### Relevant Screens

- `/Admin`
- `/Admin/users`
- `/Admin/listing`
- `/Admin/bookings`
- `/Admin/kycRequest`
- `/Admin/listingRequest`
- `/Admin/account`

### Current UX Issues

- Admin shell uses a separate manual sidebar/mobile menu pattern.
- Some admin pages have inconsistent empty states and wrappers.
- Dashboard table and booking table should use shared table primitives.

### Target UI / Design Outcome

- Admin area feels like a compact operations tool following `docs/admin_kyc_listing_moderation_teal/`.
- Sidebar is stable on desktop and sheet-based on mobile.
- Tables have search, status badges, clear actions, and horizontal scroll where needed.
- KYC/listing review queues use consistent cards or tables with approve/reject flows.
- Dashboard uses bento-style stat cards with teal accent on actionable items.

### Acceptance Criteria

- Admin redirects and auth gates remain unchanged.
- User/property search still works.
- Ban/unban and approve/reject flows still use existing modals.
- Dashboard metrics remain scannable on mobile and desktop.
- Admin booking table is valid and responsive.

## Account Owner

### User Goal

As an account owner, I want to manage profile, email, phone, password, and KYC details while seeing my public trust status.

### Relevant Screens

- `/Home/Account`
- `/Home/user/[userId]`
- `/Admin/account`

### Current UX Issues

- Profile overview is improved, but route wrappers differ between account/admin/public profile routes.
- Private editors should remain lazy and should not affect public profile rendering.
- Status information should stay concise.

### Target UI / Design Outcome

- Account overview shows profile image, trust, email/phone/KYC status, public listings, and editor tabs.
- Private editors load only when selected.
- Public profile remains read-only.
- Admin account view follows the same visual language without exposing unrelated public-user controls.

### Acceptance Criteria

- Account owner can update profile, email, phone, password, and KYC where allowed.
- Public profile never opens private editor state.
- Lazy-loaded editors do not bloat public profile route size.
- Verification state is shown through badges/items, not long raw text.

## Page-Level UI Notes

### `/Home`

- Use image-led listing cards with stable aspect ratio (1:1 square preferred).
- Keep URL-backed search/filter behavior.
- Use `PageContainer`, `PageHeader`, `EmptyState`, and consistent card grid gaps.
- Preserve wishlist and admin/owner card states.
- Reference: `docs/home_discovery_marketplace_teal/code.html` for bento header, category bar, and card layout.

### `/Home/rooms/[listingId]`

- Keep gallery (bento grid recommended), host summary, amenities, rules, reviews, and booking panel.
- Booking panel should be sticky on desktop and normal flow on mobile.
- Unavailable listings should show a clear status card.
- Preserve date overlap validation and booking modal behavior.
- Reference: `docs/room_details_property_view_teal/code.html` for bento gallery, amenity grid, and sticky booking card.

### `/Home/login`

- Use shared `LoginSignup`.
- Center the form in a consistent auth page container.
- Preserve redirect to `/Home` when already logged in.

### `/Home/signup`

- Use shared `LoginSignup`.
- Keep form behavior and post-signup transition to login.
- Match `/Home/login` layout exactly.

### `/Home/forgotpassword`

- Use the same auth form shell and shared buttons/fields.
- Preserve password reset API flow.

### `/Home/Account`

- Show profile overview by default.
- Keep editor tabs/actions as the only way to open private forms.
- Use consistent profile metrics, verification badges, and public listing grid.

### `/Home/Account/favourites`

- Use `PageHeader` and `EmptyState`.
- Empty state action goes to `/Home`.
- Listing cards use the same marketplace card component.

### `/Home/Account/listings`

- Use host-focused page header.
- Show KYC gate if needed.
- Listing cards should show status, rejection message, and edit/delete actions.
- Form sections should be grouped and mobile-friendly.

### `/Home/Account/trips`

- Use a guest-focused header.
- Empty state action goes to `/Home`.
- Booking records use shared table/card pattern with status badges.

### `/Home/Account/reservations`

- Use a host-focused header.
- Empty state action should guide the host to listings.
- Check-in, check-out, and cancellation actions should be compact and clear.
- Reference: `docs/host_reservations_dashboard_teal/code.html` for KPI cards, KYC banner, and reservations table.

### `/Home/user/[userId]`

- Public profile only unless the viewer owns the account.
- Show trust cues and approved/public listings.
- Keep route wrapper consistent with account/profile pages.

### `/Admin`

- Compact metrics first using bento-style stat cards.
- Popular properties table uses shared `DataTable`.
- Empty popular-listing state should not collapse the page.
- Reference: `docs/admin_kyc_listing_moderation_teal/code.html` for sidebar, KYC queue, and bookings layout.

### `/Admin/users`

- Searchable users table.
- Show ban state, profile image fallback, and actions.
- Ban/unban flows preserve current modal behavior.

### `/Admin/listing`

- Searchable properties table.
- Show image, owner, status, and moderation actions.
- Property links open room details.

### `/Admin/bookings`

- Use shared booking table with valid markup.
- Show guest, host, property, dates, amount, and status.
- Keep compact row height and horizontal scroll.

### `/Admin/kycRequest`

- Use review cards or table consistently following teal mockup layout.
- Show user identity image/status and approve/reject actions.
- Empty state says there are no KYC requests to verify.

### `/Admin/listingRequest`

- Use listing cards with moderation controls.
- Status/rejection messaging should be clear.
- Empty state says there are no listing requests to verify.

## Visual QA Checklist

- Text does not overlap on `390x844`, `768x1024`, or `1440x1000`.
- Buttons keep stable height and do not wrap awkwardly.
- Modals fit viewport height and keep action buttons visible.
- Tables scroll horizontally on small screens.
- Cards keep stable image dimensions (1:1 square aspect preferred).
- Navbar/search/dropdown remain reachable on mobile.
- Admin sidebar does not cover content unexpectedly.
- Empty/error/loading states use Luminous Teal primitives and shared components.
- Color tokens match the `docs/luminous_teal/DESIGN.md` palette (`primary: #006a65`, `primary-container: #20b2aa`, surface hierarchy).
- Icons use lucide-react or Material Symbols (in mockups) — lucide-react preferred in source.
- Typography uses Inter at the sizes/weights defined in the design token spec.

## Screen-by-Screen Completion Criteria

Each screen is complete when:
1. Route renders without runtime error in all identified roles (visitor, guest, host, admin, account owner).
2. No invalid HTML (nested `<a>`, `<tbody>`, `<button>` violations fixed).
3. Color tokens match Luminous Teal spec.
4. Shared primitives replace ad hoc Tailwind markup.
5. Empty, error, and busy states use shared `EmptyState`, `Skeleton`, or `Alert`.
6. Mobile layout renders without overlap at `390x844`.
7. No console errors or warnings from the modified components.
8. Tested with both logged-in and logged-out state where applicable.
(End of file - total 300 lines)
