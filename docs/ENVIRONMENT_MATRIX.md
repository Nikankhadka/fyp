# Environment Matrix

This document maps each environment variable to its purpose, scope, and expected values across supported topologies.

## Rules

- Public URLs are for browsers, OAuth providers, redirects, and email links.
- Internal URLs are for trusted server-to-server traffic only.
- Tracked `*.example` files are templates.
- Runtime env files should be copied from templates and kept untracked.
- If an env var changes meaning, this file must be updated in the same change.

## Topologies

| Topology | Meaning |
| --- | --- |
| Host local | API and web run directly on the developer machine |
| Docker dev | Services talk over the Docker network during local development |
| Docker prod | Production-style compose stack |
| Hosted split | Web and API deployed on separate public hosts |

## API Variables

| Variable | Scope | Purpose | Host local | Docker dev | Docker prod | Hosted split | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `NODE_ENV` | server | runtime mode | `development` | `development` | `production` | `production` | current |
| `PORT` | server | API listen port | `2900` | `2900` | `2900` | provider port or `2900` | current |
| `MONGODB_URI` | internal | Mongo connection string | `mongodb://localhost:27017/meroghar` | `mongodb://mongo:27017/meroghar` | `mongodb://mongo:27017/meroghar` or managed DB | managed DB URL | current |
| `API_BASE_URL` | internal fallback | server/internal API base and temporary compatibility fallback | `http://localhost:2900` | `http://api:2900` | internal host only | internal/private API URL if needed | current |
| `WEB_APP_URL` | public fallback | temporary compatibility fallback for public web URL | `http://localhost:3000` | `http://localhost:3000` | public web URL | public web URL | current |
| `PUBLIC_API_BASE_URL` | public | OAuth callback and public API links | `http://localhost:2900` | `http://localhost:2900` | public API URL | public API URL | current |
| `PUBLIC_WEB_APP_URL` | public | redirects and email links back to web | `http://localhost:3000` | `http://localhost:3000` | public web URL | public web URL | current |
| `CORS_ORIGINS` | public allowlist | allowed browser origins | local hosts | local hosts | public web origin list | public web origin list | current |
| `TRUST_PROXY` | server | express proxy trust | `false` | `false` | `true` behind proxy | `true` behind proxy | current |
| `COOKIE_SECURE` | server | whether auth cookies require HTTPS | `false` | `false` | `true` | `true` | current |
| `COOKIE_SAME_SITE` | server | auth cookie same-site mode | `lax` | `lax` | `none` for cross-site HTTPS | `none` for cross-site HTTPS | current |
| `sessionSecret` | secret | session middleware secret | local secret | local secret | production secret | production secret | current |
| `accessToken` | secret | JWT signing secret | local secret | local secret | production secret | production secret | current |
| `refreshToken` | secret | refresh JWT signing secret | local secret | local secret | production secret | production secret | current |
| `accessTokenExpire` | server | access token lifetime | `1800s` | `1800s` | deployment choice | deployment choice | current |
| `refreshTokenExpire` | server | refresh token lifetime | `7d` | `7d` | deployment choice | deployment choice | current |
| `googleClientId` | provider | Google OAuth client ID | local/dev credential | dev credential | production credential | production credential | current |
| `googleClientSecret` | provider | Google OAuth client secret | local/dev secret | dev secret | production secret | production secret | current |
| `facebookClientId` | provider | Facebook OAuth app ID | local/dev credential | dev credential | production credential | production credential | current |
| `facebookClientSecret` | provider | Facebook OAuth app secret | local/dev secret | dev secret | production secret | production secret | current |
| `user` | provider secret | SMTP username | optional local | optional local | production secret | production secret | current |
| `pass` | provider secret | SMTP password | optional local | optional local | production secret | production secret | current |
| `mailSecret` | secret | email token signing secret | local secret | local secret | production secret | production secret | current |

## Web Variables

| Variable | Scope | Purpose | Host local | Docker dev | Docker prod | Hosted split | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `NODE_ENV` | app | runtime mode | `development` | `development` | `production` | `production` | current |
| `NEXT_PUBLIC_API_BASE_URL` | public | browser-facing API base | `http://localhost:2900` | `http://localhost:2900` | public API URL | public API URL | current |
| `API_BASE_URL` | internal | server-side API base for rewrites and SSR | `http://localhost:2900` | `http://api:2900` | internal/private API URL | internal/private API URL if available | current |
| `NEXT_PUBLIC_DEMO_PAYMENT_MODE` | public | demo payment behavior toggle | `true` or `false` | `true` or `false` | business choice | business choice | current |
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | public | PayPal client-side ID | optional | optional | production value if PayPal is used | production value if PayPal is used | current |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | public | Cloudinary cloud name | optional | optional | deployment value | deployment value | current |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` | public | upload preset | optional | optional | deployment value | deployment value | current |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | public | Firebase config | optional | optional | deployment value | deployment value | current |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | public | Firebase config | optional | optional | deployment value | deployment value | current |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | public | Firebase config | optional | optional | deployment value | deployment value | current |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | public | Firebase config | optional | optional | deployment value | deployment value | current |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | public | Firebase config | optional | optional | deployment value | deployment value | current |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | public | Firebase config | optional | optional | deployment value | deployment value | current |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | public | Firebase config | optional | optional | deployment value | deployment value | current |

## Current Drift to Fix

- [`apps/api/.env.example`](/home/nikan/projects/fyp/apps/api/.env.example) currently points `MONGODB_URI` at Docker Mongo instead of host-local Mongo.
- [`infra/docker/env/web.dev.env.example`](/home/nikan/projects/fyp/infra/docker/env/web.dev.env.example) contains a duplicated `API_BASE_URL`.
- Production examples currently use internal Docker hostnames for values that should be public browser-facing URLs.
- Docker compose currently reads tracked example env files as runtime env sources.

## Required Invariants

- `NEXT_PUBLIC_API_BASE_URL` must always be safe for a browser to call.
- `API_BASE_URL` must never be exposed as the user-facing public URL in docs or provider setup if it points to an internal host.
- `PUBLIC_API_BASE_URL` and `PUBLIC_WEB_APP_URL` become the authoritative public URLs for API-side redirects and provider integrations.
- Any variable containing a secret or token-signing value must never be committed with a real production value.

## Update Checklist

When adding or changing an env variable:

1. Add or update the relevant template file.
2. Update this matrix.
3. Update `README.md` if setup instructions change.
4. Update `CONTRIBUTING.md` if contributor workflow changes.
5. Update `PRODUCTION_DECISIONS.md` if the change alters deployment rules.
