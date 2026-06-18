# MeroGhar

MeroGhar is a full-stack property rental marketplace built as a `pnpm` monorepo. It includes a Next.js web app, an Express + TypeScript API, MongoDB persistence, Docker-based local infrastructure, seeded demo data, and role-based guest, host, and admin workflows.

This repository is also being used as a portfolio-ready revamp case study: the current work documents the implemented product, fixes demo data reliability, improves provider configuration, redesigns the frontend, and records performance improvements from the original baseline.

## Product Features

### Public and Guest Browsing

- Browse verified, unbanned rental listings on `/Home`
- Search and filter listings by location, stay dates, price, property type, and amenities
- View listing details, image carousel, location, amenities, rules, reviews, host profile, and booking panel
- View public host/user profiles and their listings
- Register and log in with username/password
- Start Google or Facebook social login when provider credentials are configured
- See safe fallback UI when images or optional providers are unavailable

### Authenticated Guest

- Save and remove favourite listings
- Reserve available properties with overlap validation
- Complete demo checkout when `NEXT_PUBLIC_DEMO_PAYMENT_MODE=true`
- Download booking bill/invoice after checkout
- View trips and booking status
- Submit, edit, delete, and report reviews where allowed
- Maintain profile details, profile image, email, phone, password, and KYC information
- Verify email by backend mail link
- Verify phone number through Firebase OTP when Firebase is configured

### Host

- Create listings after KYC verification
- Upload listing images through Cloudinary
- Edit or delete owned listings
- See listing verification status and rejection message
- View reservations made on owned listings
- Confirm guest check-in and check-out
- Cancel bookings where allowed
- Receive booking/admin notifications through the configured mail provider

### Admin

- View dashboard totals for users, properties, bookings, and active records
- Review popular properties
- Search and manage users and properties
- View all bookings
- Approve or reject KYC requests
- Approve or reject property listing requests
- Ban or unban users and properties with admin messages
- Register additional admin accounts through protected admin API

## Architecture

```text
.
|-- apps/
|   |-- api/      # Express + TypeScript + Mongoose API
|   `-- web/      # Next.js 13 app router frontend
|-- docs/         # Test plan and revamp evidence
|-- infra/
|   `-- docker/   # Docker Compose and env examples
|-- scripts/      # Playwright smoke automation
|-- services/
|   `-- mongo/    # MongoDB service image customization
`-- package.json
```

### Frontend

- Next.js 13 app router
- React 18 client components for interactive flows
- Tailwind CSS styling
- Zustand stores for modal, account, booking, confirmation, and listing state
- Server-side fetch helpers under `apps/web/src/api/server`
- Client-side API helpers under `apps/web/src/api/client`
- `SafeImage` and `normalizeImageSrc` for resilient local, Cloudinary, Firebase, and social profile images

### Backend

- Express 4 API written in TypeScript
- Mongoose models for users, properties, bookings, payments, reviews, messages, and conversations
- JWT access/refresh token auth with HTTP-only cookies
- Passport strategies for Google and Facebook OAuth
- Joi input validation middleware
- Swagger UI mounted at `/apiDocs`
- Demo seed script with reset and bootstrap modes

### Database Models

- `Users`: credentials, profile, KYC, email, phone, wishlist, viewed properties, admin/ban state, ratings
- `Properties`: host, location, description, amenities, images, tenants, rating/view counts, booking and verification state
- `Booking`: guest, host, property, stay dates, guest count, payment, check-in/out, status
- `Payments`: payer, booking, amount breakdown, provider/demo payment id
- `Reviews`: guest, property, host, rating, text, report/admin review state
- `Conversation` and `Message`: messaging data model scaffold

## External Providers

See [SERVICE_PROVIDERS.md](SERVICE_PROVIDERS.md) for the complete provider map.

Current decisions:

- **Passport + JWT cookies** remain the primary authentication architecture.
- **Google OAuth** is supported through Passport when `googleClientId` and `googleClientSecret` are configured.
- **Facebook OAuth** is optional and should be disabled or hidden if provider credentials are not configured.
- **Firebase Authentication** is used only for phone OTP verification in account settings.
- **Cloudinary** is used for profile, KYC, and listing image uploads.
- **PayPal** is optional; demo checkout is the default portfolio-safe mode.
- **Zoho SMTP** is the current transactional email provider.
- **Vercel + Render** are suitable deployment targets, but URLs must come from environment configuration.

## Auth Flow

1. Username/password login validates input, checks bcrypt password, and returns user session data.
2. API sets `accessToken`, `refreshToken`, and `session` cookies.
3. Web middleware refreshes expired access/session cookies when a refresh token is available.
4. API protected routes verify `accessToken` and attach `req.userData`.
5. Role middleware gates user/admin routes.
6. Logout clears refresh token server-side and deletes auth cookies.

Social auth uses Passport callbacks:

- Google callback: `${API_BASE_URL}/auth/v1/google-callback`
- Facebook callback: `${API_BASE_URL}/auth/v1/facebook-callback`

## Media Flow

Demo seed data uses local public images:

- Profiles and KYC: `/seed/profiles/...`
- Properties: `/seed/properties/...`

User uploads currently use Cloudinary unsigned uploads from the web app with:

- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`

Production hardening should move upload signing and deletion to the API.

## Payment Flow

For portfolio demos, keep:

```env
NEXT_PUBLIC_DEMO_PAYMENT_MODE=true
```

This lets bookings complete without contacting a real payment provider. Real payment mode requires server-side verification before creating trusted booking/payment records.

## Getting Started

### Prerequisites

- Node.js `18.17+`
- `pnpm` `10+`
- Docker Desktop or Docker Engine + Docker Compose

### Install

```bash
pnpm install:api
pnpm install:web
```

### Environment Files

Copy and fill the relevant examples:

- `apps/api/.env.example` -> `apps/api/.env`
- `apps/web/.env.example` -> `apps/web/.env.local`
- Docker env examples under `infra/docker/env`

Important API variables:

```env
PORT=2900
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/meroghar
API_BASE_URL=http://localhost:2900
WEB_APP_URL=http://localhost:3000
CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
sessionSecret=replace-me
saltRounds=8
accessToken=replace-me
refreshToken=replace-me
accessTokenExpire=1800s
refreshTokenExpire=7d
googleClientId=replace-me
googleClientSecret=replace-me
facebookClientId=replace-me
facebookClientSecret=replace-me
user=replace-me
pass=replace-me
mailSecret=replace-me
```

Important web variables:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:2900
API_BASE_URL=http://localhost:2900
NEXT_PUBLIC_DEMO_PAYMENT_MODE=true
NEXT_PUBLIC_PAYPAL_CLIENT_ID=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

### Run Locally

Start API:

```bash
pnpm dev:api
```

Start web:

```bash
pnpm dev:web
```

Default URLs:

- Web: `http://localhost:3000`
- API: `http://localhost:2900`
- Health: `http://localhost:2900/health`
- Swagger: `http://localhost:2900/apiDocs`

### Docker Development

```bash
pnpm docker:dev
```

This starts MongoDB, API, and web using `infra/docker/compose.dev.yml`.

Stop the stack:

```bash
docker compose -f infra/docker/compose.dev.yml down
```

Stop and remove volumes:

```bash
docker compose -f infra/docker/compose.dev.yml down -v
```

## Database Seeding

The seed script lives at `apps/api/src/scripts/seedDemoData.ts`.

Modes:

- `reset`: clears demo collections and inserts the full launch dataset
- `bootstrap`: upserts curated launch data without clearing later real user data
- `clear`: clears seeded collections

Run against Docker dev stack:

```bash
pnpm seed:demo
```

Run locally from the API app:

```bash
cd apps/api
pnpm seed:reset
```

Seeded images are local public assets served by the web app. If a required seed image is missing, the seed script fails clearly before inserting broken image URLs.

### Demo Accounts

| Role | User ID | Password |
| --- | --- | --- |
| Admin | `admin` | `admin1234` |
| Host | `host.sita` | `host1234` |
| Host | `host.bikash` | `host1234` |
| Host | `host.priya` | `host1234` |
| Host | `host.aarav` | `host1234` |
| Host | `host.nima` | `host1234` |
| Host | `host.riya` | `host1234` |
| Guest | `guest.asha` | `guest1234` |
| Guest | `guest.noel` | `guest1234` |
| Guest | `guest.mina` | `guest1234` |
| Guest | `guest.kiran` | `guest1234` |

## Provider Account Reconnection

### Google OAuth

1. Create or open a Google Cloud project.
2. Configure OAuth consent.
3. Create an OAuth web client.
4. Add callback URI: `${API_BASE_URL}/auth/v1/google-callback`.
5. Put the client id and secret in API env as `googleClientId` and `googleClientSecret`.
6. Restart the API.

### Facebook OAuth

1. Create a Meta developer app.
2. Enable Facebook Login.
3. Add callback URI: `${API_BASE_URL}/auth/v1/facebook-callback`.
4. Put the app id and secret in API env as `facebookClientId` and `facebookClientSecret`.
5. Treat Facebook login as optional if not needed.

### Firebase Phone OTP

1. Create a Firebase project and web app.
2. Enable Phone provider in Firebase Authentication.
3. Add local and deployed web domains to authorized domains.
4. Fill all `NEXT_PUBLIC_FIREBASE_*` env vars.
5. If these vars are empty, phone verification shows a configured demo-safe error instead of breaking the account page.

### Cloudinary

1. Create a Cloudinary account/cloud.
2. Create an unsigned upload preset for current demo uploads.
3. Fill `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` and `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`.
4. For production, implement server-signed uploads before accepting real user media.

## Testing

Core checks:

```bash
pnpm lint:web
pnpm build:web
pnpm build:api
pnpm seed:demo
BASE_URL=http://localhost:3000 node scripts/playwright-smoke.js
```

Detailed manual and automated scenarios are tracked in [docs/TEST_PLAN.md](docs/TEST_PLAN.md).

## Revamp and Performance Roadmap

The revamp is tracked in [docs/REVAMP_LOG.md](docs/REVAMP_LOG.md).
The UI system decision, Stitch prompt pack, and redesign direction are tracked in [docs/UI_DESIGN_REVAMP.md](docs/UI_DESIGN_REVAMP.md).
The OpenCode implementation handoff is tracked in [docs/OPENCODE_TASK_PLAN.md](docs/OPENCODE_TASK_PLAN.md).

Original verified baseline:

- `pnpm lint:web`: passing
- `pnpm build:api`: passing
- `pnpm build:web`: passing
- Heavy initial JS routes:
  - `/Home/Account`: about `2.49 MB`
  - `/Home/user/[userId]`: about `2.49 MB`
  - `/Admin/account`: about `2.49 MB`
  - `/Home/Account/listings`: about `2.43 MB`
  - `/Admin/listingRequest`: about `2.43 MB`

Known issues linked to phases:

- Empty seeded image URLs: Phase 2
- Social provider reconnection and disabled-provider behavior: Phase 3
- Inconsistent visual system: Phase 4
- Room page crash, wishlist click instability, nested buttons, invalid SVG props: Phase 5
- Heavy account/profile/listing bundles: Phase 6 and Phase 8
- Admin table UX and broad utility imports: Phase 7
- Cloudinary/payment security hardening: Phase 9
- Smoke automation and before/after evidence: Phase 10

## Migration Notes

There is no formal database migration framework. Schema changes are currently handled through Mongoose models and targeted scripts under `apps/api/src/scripts`.

Recommended workflow:

1. Update the Mongoose model.
2. Update API and frontend code that reads or writes the changed shape.
3. Add a seed/backfill script when existing records need transformation.
4. Test against local Docker MongoDB.
5. Re-run the demo seed for a clean dataset.

## Portfolio Narrative

This project demonstrates more than a rental app. The revamp work shows how to audit an inherited full-stack codebase, document real features across roles, stabilize fixtures and providers, improve frontend architecture, reduce bundle cost, and leave a testable path from student project to credible portfolio product.
