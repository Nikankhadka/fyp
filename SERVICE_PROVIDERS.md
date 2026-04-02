# Service Providers

This document summarizes the external service providers currently referenced by the application, what they are used for, the identifiable account or project details visible in the codebase, and reasonable alternatives.

Important:
- This document intentionally avoids copying secrets such as client secrets, SMTP passwords, or API secrets.
- Some provider ownership details cannot be determined from source alone. In those cases, the document lists the project, app, or client identifier that is visible in code.

## Current Providers

| Provider | Purpose in App | Identifiable Account / Project | Where It Appears |
| --- | --- | --- | --- |
| MongoDB | Primary application database for users, properties, bookings, payments, reviews, and admin data | Local/dev DB: `meroghar`; code comment also references an Atlas cluster `fypnikan.bud3xcp.mongodb.net` | `apps/api/src/configs/db.ts`, `apps/api/.env.example`, Docker env files |
| Google OAuth | Social login for users | Google OAuth client ID is configured in API env; exact owner account is not visible from source | `apps/api/src/configs/strategy.ts`, `apps/api/.env` |
| Facebook OAuth | Social login for users | Facebook app/client ID `527744295985309`; exact owner account is not visible from source | `apps/api/src/configs/strategy.ts`, `apps/api/.env` |
| Firebase Authentication | Phone number OTP verification in the web app | Firebase project `fypmeroghar-b2109`; auth domain `fypmeroghar-b2109.firebaseapp.com`; storage bucket `fypmeroghar-b2109.appspot.com`; Firebase dev tool account: `nikhil.khadka.925@gmail.com` | `apps/web/src/configs/firebase.ts` |
| Cloudinary | Image upload for listings, KYC, and profile images | Cloudinary cloud name `drpojzybw`; upload preset `FypMeroGhar` | `apps/web/src/api/client/uploadImag.ts` |
| PayPal | Booking payment button and checkout capture in the frontend | PayPal client ID is hardcoded in frontend; merchant account identity is not visible from source | `apps/web/src/components/modals/bookingBillModal.tsx` |
| Zoho Mail SMTP | Transactional email sending for signup, password reset, verification, booking notices, and admin notifications | Sender mailbox `nikantest@zohomail.com` | `apps/api/src/utils/zohoMailer.ts`, `apps/api/src/configs/mailtemplate.ts`, `apps/api/.env` |
| Vercel | Frontend hosting target referenced in allowed CORS origins and redirects | Frontend host `fyp-mero-ghar.vercel.app` / `meroghar.vercel.app` appears in code | `apps/api/src/server.ts`, auth controller redirects |
| Render | Backend hosting target referenced in callbacks and social auth entrypoints | Backend host `fyp-sever.onrender.com` | `apps/api/src/configs/strategy.ts`, `apps/web/src/components/loginSignup.tsx` |

## Provider Details

### MongoDB

- Role:
  Primary database used by the API through Mongoose.
- Current shape:
  Good fit for rapid development, but the booking/payment domain is fairly relational.
- Senior engineer take:
  MongoDB is workable here, but this product could also fit Postgres very well.
- Alternatives:
  - `Postgres + Prisma`: better for relational integrity, reporting, booking/payment workflows
  - `MongoDB Atlas`: keep MongoDB but move to a cleaner managed production setup if not already there

### Google OAuth

- Role:
  User sign-in with Google through Passport.
- Identifiable detail:
  Google OAuth client is configured through environment variables.
- Senior engineer take:
  Fine as a provider, but the app currently manages auth in a fragmented way across Passport, Firebase OTP, cookies, and custom JWT flows.
- Alternatives:
  - Keep Google as a provider, but move auth orchestration to `Auth.js`
  - `Clerk`: easiest modern hosted auth option with social login and OTP
  - `Auth0`: stronger enterprise option if SSO or B2B requirements grow

### Facebook OAuth

- Role:
  Secondary social login option.
- Identifiable detail:
  Facebook app ID `527744295985309`.
- Senior engineer take:
  Facebook login is lower value in many modern consumer apps unless there is a clear user demand for it.
- Alternatives:
  - Remove it if usage is low
  - Replace the overall auth layer with `Clerk`, `Auth.js`, or `Auth0`
  - Prefer Apple login before Facebook if mobile and consumer trust matter

### Firebase Authentication

- Role:
  Phone number verification with OTP in the web app.
- Identifiable detail:
  Firebase project `fypmeroghar-b2109`.
- Additional note:
  Firebase dev tool usage is associated with `nikhil.khadka.925@gmail.com`.
- Senior engineer take:
  Firebase phone auth is common and viable, but using it only for OTP while everything else is custom auth increases system complexity.
- Alternatives:
  - `Clerk`: unify social login + phone verification
  - `Auth0`: strong hosted identity option
  - `Twilio Verify`: use if you want dedicated SMS verification without Firebase

### Cloudinary

- Role:
  Uploading and serving images.
- Identifiable detail:
  Cloud name `drpojzybw`, upload preset `FypMeroGhar`.
- Senior engineer take:
  Cloudinary is a reasonable choice and not the first thing I would replace.
- Alternatives:
  - Keep Cloudinary, but move upload signing and deletion to the server
  - `AWS S3 + CloudFront`: cheaper at scale, but more operational work
  - `UploadThing`: simpler developer experience for modern web apps

### PayPal

- Role:
  Payment button and checkout capture for bookings.
- Identifiable detail:
  PayPal client ID is embedded in frontend code.
- Senior engineer take:
  The current architecture is the bigger issue than PayPal itself. Payment capture is performed in the client, and the backend stores payment details without verifying them against PayPal server-side.
- Alternatives:
  - `Stripe`: recommended default for a booking marketplace
  - Keep `PayPal` only if business requirements demand it, but add server-side verification and webhooks

### Zoho Mail SMTP

- Role:
  Sending transactional emails through SMTP.
- Identifiable detail:
  Sender mailbox `nikantest@zohomail.com`.
- Senior engineer take:
  SMTP works, but it is a fairly low-level integration and tends to age poorly compared with dedicated transactional email APIs.
- Alternatives:
  - `Postmark`: best fit for transactional email reliability
  - `Resend`: excellent developer experience
  - `SendGrid`: broad adoption and ecosystem support

### Vercel

- Role:
  Frontend hosting platform.
- Identifiable detail:
  `fyp-mero-ghar.vercel.app` and `meroghar.vercel.app` are referenced in code.
- Senior engineer take:
  Good fit for Next.js. No strong reason to move unless you need more custom infrastructure control.
- Alternatives:
  - Keep Vercel
  - `Netlify`: similar frontend hosting option
  - Self-host on cloud infra only if there is a clear operational reason

### Render

- Role:
  Backend hosting platform.
- Identifiable detail:
  `fyp-sever.onrender.com` is hardcoded in OAuth callback and frontend social-login links.
- Senior engineer take:
  Fine for early-stage deployment, but hardcoding provider URLs into app code is brittle.
- Alternatives:
  - Keep Render, but move base URLs to environment configuration
  - `Railway`: strong developer experience for full-stack apps
  - `Fly.io`: good if you want more control and geographic placement
  - `AWS ECS / GCP Cloud Run`: if production scale and infra control become priorities

## Recommended Direction

If this app were being actively hardened for production, the highest-value changes would be:

1. Move all provider credentials and URLs fully into environment configuration.
2. Replace client-trusting payment flow with server-verified payment finalization.
3. Unify authentication instead of splitting it across custom JWTs, Passport, and Firebase OTP.
4. Remove secrets from frontend code, especially any Cloudinary secret or privileged credential.
5. Standardize transactional email on a dedicated provider API instead of raw SMTP.

## Suggested Keep / Replace Summary

| Provider | Recommendation |
| --- | --- |
| MongoDB | Keep for now unless reporting, relational consistency, or analytics needs grow |
| Google OAuth | Keep as a provider, but simplify auth architecture |
| Facebook OAuth | Optional; remove if low usage |
| Firebase OTP | Replace if you move to a unified auth platform |
| Cloudinary | Keep, but secure the integration |
| PayPal | Replace with Stripe, or harden server-side if PayPal must stay |
| Zoho SMTP | Replace with Postmark or Resend |
| Vercel | Keep |
| Render | Keep for now, but remove hardcoded URLs |

## Notes

- Some local files in this repository currently expose live-looking credentials. Those should be rotated and removed from source control.
- This document is based on code and environment files present in the repository and may not reflect hidden production configuration outside the repo.
