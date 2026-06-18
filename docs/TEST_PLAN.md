# MeroGhar Test Plan

This document records the regression checks for the revamp. Keep it updated whenever a feature, provider, or route behavior changes.

## Automated Checks

Run from the repository root:

```bash
pnpm lint:web
pnpm build:web
pnpm build:api
```

When the Docker dev stack is running:

```bash
pnpm seed:demo
BASE_URL=http://localhost:3000 node scripts/playwright-smoke.js
```

## Smoke Coverage

### Public

- `/Home` renders listing grid without console/runtime errors.
- Search modal opens, submits query params, and preserves valid filters.
- Room detail page renders image carousel, host, booking panel, reviews, and fallback states.
- Public user profile renders public information only.
- Login and signup pages render without requiring provider credentials.

### Guest

- Login with `guest.asha` / `guest1234`.
- Wishlist save and unsave works from listing or room page.
- Booking rejects invalid date, same-day date, overlapping date, and zero guests.
- Demo checkout opens bill view and can close/download.
- Trips page shows guest bookings.
- Favourites page shows saved properties.
- Review section handles empty and populated states.

### Host

- Login with `host.sita` / `host1234`.
- Listings page shows owned properties and verification state.
- KYC-verified host can open listing form.
- Listing images preview and submit.
- Reservation page shows bookings on owned properties.
- Check-in, check-out, and cancellation actions show correct confirmation and status.

### Admin

- Login with `admin` / `admin1234`.
- Dashboard metrics render.
- Users table renders search, status, ban, and unban actions.
- Properties table renders search, status, ban, and unban actions.
- Bookings table renders booking status and related users/properties.
- KYC request queue supports approve/reject.
- Listing request queue supports approve/reject.

## Provider Checks

- Google OAuth button is available only when API credentials are configured.
- Facebook OAuth button is available only when API credentials are configured.
- Firebase missing config shows a phone-verification configuration message.
- Cloudinary missing config blocks upload with a clear error.
- Demo payment mode completes without contacting PayPal.

## Seed Fixture Checks

- `pnpm seed:demo` fails clearly if a required local seed image is missing.
- Seeded properties have non-empty `images[].imgUrl`.
- Seeded profiles and KYC records have non-empty image URLs.
- Local seed URLs begin with `/seed/profiles/` or `/seed/properties/`.

## Performance Checks

Capture `pnpm build:web` route sizes before and after major frontend changes.

Focus routes:

- `/Home`
- `/Home/rooms/[listingId]`
- `/Home/Account`
- `/Home/user/[userId]`
- `/Home/Account/listings`
- `/Admin`
- `/Admin/account`
- `/Admin/listingRequest`

Pass criteria:

- Large account/profile/listing bundles shrink from the original `~2.43-2.49 MB` baseline.
- Heavy providers load only when their interaction is opened.
- No route regresses with avoidable client-only wrappers.

## Manual Responsive Checks

Test at:

- Mobile: `390x844`
- Tablet: `768x1024`
- Desktop: `1440x1000`

Check:

- Navbar and sidebars do not overlap content.
- Listing cards keep stable image dimensions.
- Room booking panel remains usable.
- Tables scroll horizontally where needed.
- Modals fit viewport height and preserve action buttons.
