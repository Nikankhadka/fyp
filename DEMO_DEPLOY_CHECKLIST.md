# Demo Deploy Checklist

Use this checklist before showing or deploying the project for demo purposes.

## 1. Configure Environment

- Copy `apps/api/.env.example` to `apps/api/.env`
- Copy `apps/web/.env.example` to `apps/web/.env.local`
- For Docker, copy values from:
  - `infra/docker/env/api.dev.env.example`
  - `infra/docker/env/web.dev.env.example`
  - `infra/docker/env/mongo.dev.env.example`

Recommended demo defaults:

- Leave `NEXT_PUBLIC_DEMO_PAYMENT_MODE=true`
- Set `NEXT_PUBLIC_API_BASE_URL` to the public API URL used by the web app
- Set `API_BASE_URL` to the internal/server-side API URL used by Next.js
- Set `WEB_APP_URL` in the API env to the public web URL
- Set `CORS_ORIGINS` in the API env to include the public web URL
- Add Cloudinary and Firebase public config only if you want image upload and phone OTP in the demo

## 2. Verify Local Quality Gates

Run:

```bash
pnpm --dir apps/api build
pnpm --dir apps/web lint
pnpm --dir apps/web build
```

Expected result:

- API TypeScript build passes
- Web lint passes
- Web production build passes

## 3. Smoke Test Main Demo Flows

Guest flow:

- Open `/Home`
- Open a property card
- Navigate the image carousel
- Open login/signup modal

User flow:

- Log in with demo seed account
- Open `/Home/rooms/[listingId]`
- Save/remove wishlist
- Open booking modal
- Complete demo checkout
- Confirm bill/download step renders correctly
- Open `/Home/Account`, `/Home/Account/trips`, `/Home/Account/reservations`

Admin flow:

- Log in as demo admin
- Open `/Admin`
- Visit users, listings, bookings, KYC request, and listing request pages

## 4. Docker Demo Run

Run:

```bash
pnpm docker:dev
```

Verify:

- Web responds on `http://localhost:3000`
- API responds on `http://localhost:2900/health`
- Mongo is healthy

## 5. Demo Notes

- Payment is intentionally demo-safe when `NEXT_PUBLIC_DEMO_PAYMENT_MODE=true`
- Phone verification depends on Firebase public config being present
- Cloudinary upload depends on Cloudinary public config being present
- This checklist is for showcase deployment, not hardened production release
