# Service Providers

This document records the external systems referenced by MeroGhar, their current purpose, how to reconnect them with new accounts, and the recommended hardening path.

No secrets should be committed to this repository. If a previous account or credential was exposed, rotate it in the provider dashboard and update local/deployment environment variables.

## Current Provider Map

| Provider | Purpose | Current Decision | Configuration |
| --- | --- | --- | --- |
| MongoDB | Primary database for users, properties, bookings, payments, reviews, and admin data | Keep for this project | `MONGODB_URI` |
| Passport.js | Auth orchestration for Google/Facebook OAuth | Keep | API runtime imports `apps/api/src/configs/strategy.ts` |
| Custom JWT cookies | Username/password auth and app sessions | Keep | `accessToken`, `refreshToken`, `sessionSecret`, expiry vars |
| Google OAuth | Social login | Keep when credentials exist | `googleClientId`, `googleClientSecret` |
| Facebook OAuth | Optional social login | Optional; hide or disable if unused | `facebookClientId`, `facebookClientSecret` |
| Firebase Auth | Phone OTP verification in account settings only | Keep optional | `NEXT_PUBLIC_FIREBASE_*` |
| Cloudinary | Profile, KYC, and listing image upload/hosting | Keep; harden later | `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` |
| PayPal | Optional real checkout button | Demo mode by default | `NEXT_PUBLIC_PAYPAL_CLIENT_ID`, `NEXT_PUBLIC_DEMO_PAYMENT_MODE` |
| Zoho SMTP | Transactional email sending | Keep unless replacing with Postmark/Resend | `user`, `pass`, `mailSecret` |
| Vercel | Frontend deployment target | Keep suitable | `WEB_APP_URL`, `NEXT_PUBLIC_API_BASE_URL` |
| Render | API deployment target | Keep suitable | `API_BASE_URL`, `CORS_ORIGINS` |

## Provider Roles

### MongoDB

MongoDB is the primary application database through Mongoose. It stores users, listings, bookings, payments, reviews, and moderation state.

Recommendation: keep MongoDB for the portfolio version. A later production rewrite could consider Postgres + Prisma if reporting, relational integrity, or payment reconciliation becomes central.

### Passport, JWT, Google, and Facebook

The app uses local username/password auth plus Passport OAuth strategies. After login, the API issues HTTP-only cookies:

- `accessToken`
- `refreshToken`
- `session`

Google and Facebook are identity providers only. They do not replace the app session model.

Reconnect with a new Google account:

1. Create a Google Cloud OAuth web client.
2. Add `${API_BASE_URL}/auth/v1/google-callback` as an authorized redirect URI.
3. Set `googleClientId` and `googleClientSecret`.
4. Restart the API.

Reconnect with a new Facebook account:

1. Create a Meta app.
2. Enable Facebook Login.
3. Add `${API_BASE_URL}/auth/v1/facebook-callback` as a valid callback.
4. Set `facebookClientId` and `facebookClientSecret`.
5. Treat Facebook as optional if it is not important for the portfolio demo.

Hardening path:

- Keep username/password as the reliable local demo path.
- Hide or disable social buttons when provider credentials are missing.
- Reduce sensitive request/token logging.
- Keep provider URLs environment-driven.

### Firebase Authentication

Firebase is used only by the web account phone component for OTP verification. It is not the primary auth system and does not own the app session.

Reconnect with a new Firebase account:

1. Create a Firebase project.
2. Add a web app.
3. Enable Phone provider in Firebase Authentication.
4. Add local and deployed frontend domains to authorized domains.
5. Fill all `NEXT_PUBLIC_FIREBASE_*` environment variables.

If Firebase env vars are missing, phone verification should show a clear “not configured” message while the rest of account settings continues to work.

### Cloudinary

Cloudinary stores user-uploaded images:

- property listing images
- profile images
- KYC document images

The current frontend upload path uses an unsigned upload preset. That is acceptable for a controlled demo if the preset is limited, but production should use server-signed uploads.

Recommended hardening:

1. Add an API endpoint that signs Cloudinary uploads.
2. Move privileged deletion to the API.
3. Store only `imgId` and `imgUrl` in MongoDB.
4. Validate file type, size, and count before upload.
5. Keep local seed images for demo fixtures.

### PayPal

PayPal can render a checkout button when `NEXT_PUBLIC_PAYPAL_CLIENT_ID` is set and demo mode is off. The portfolio-safe default is:

```env
NEXT_PUBLIC_DEMO_PAYMENT_MODE=true
```

Important risk: the current real-payment path is client-trusting. Real production checkout must verify payment server-side before finalizing booking/payment records.

Recommended alternative: Stripe is usually a better default for a marketplace, but replacing PayPal is outside the current revamp scope.

### Zoho SMTP

Zoho SMTP sends transactional email for signup, password reset, email verification, KYC decisions, property decisions, bans, and booking notifications.

Recommended hardening:

- Move sender address to env.
- Replace raw SMTP with Postmark or Resend if reliability becomes important.
- Keep templates versioned and testable.

## Required Environment Variables

API:

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

Web:

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

## Keep / Replace Recommendation

| Area | Recommendation |
| --- | --- |
| Database | Keep MongoDB for the portfolio project |
| Auth | Keep Passport + custom JWT cookies, make disabled social providers graceful |
| Phone OTP | Keep Firebase optional |
| Media | Keep Cloudinary, add server-signed upload later |
| Payments | Keep demo checkout; document real-payment server verification gap |
| Email | Keep Zoho for now; consider Postmark or Resend later |
| Hosting | Keep Vercel/Render viable, remove hardcoded URLs |

## Security Notes

- Rotate any real-looking credentials that were ever committed.
- Do not rely on public Cloudinary upload presets for production without restrictions.
- Do not trust client payment capture for real bookings.
- Keep auth cookies HTTP-only.
- Use `secure: true` and `sameSite: none` for production cross-site deployment cookies.
