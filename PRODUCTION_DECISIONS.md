# Production Decisions

This document records the operating rules for the repository as of `2026-04-05`. It is meant to stay stable while implementation details evolve.

## Purpose

- Keep deployment and development changes aligned across code, Docker, and docs.
- Prevent future contributors from mixing internal service URLs with public URLs.
- Define what must remain backward compatible during the stabilization pass.

## Verified Baseline

These checks were verified from the repo before writing this plan:

- `pnpm build:api` passes.
- `pnpm lint:web` passes.
- `pnpm build:web` passes when run outside the sandbox.
- `docker compose -f infra/docker/compose.dev.yml config` passes.
- `docker compose -f infra/docker/compose.prod.yml config` passes.

Known current gaps:

- There is no real CI pipeline yet.
- There is no stable automated test suite yet.
- The repo declares a `pnpm` workspace, but still behaves like two app-local installs plus Docker overlays.
- Current env examples blur local, Docker, and production responsibilities.

## Supported Operating Modes

The repository must support all four of these modes:

1. Host-local development
   - API and web run directly on the developer machine.
2. Docker development
   - Mongo, API, and web run through `docker compose`.
3. Docker production-style deployment
   - The stack runs through `infra/docker/compose.prod.yml`.
4. Hosted split deployment
   - Web and API may be deployed to separate public hosts.

No change in this stabilization pass may support one of these modes by breaking another.

## Decision 1: True Workspace Is the Target Shape

- The repository will converge on one root install and one shared lockfile.
- Root scripts will become the primary interface for developers.
- Existing app-level scripts stay temporarily as compatibility wrappers during migration.
- Per-app lockfiles are not removed until root install, builds, Docker builds, and verification all pass.

Reason:

- The current mixed model is the main source of drift between native dev and Docker dev.

## Decision 2: Native Dev and Docker Dev Are Equal First-Class Workflows

- Native development is required for fast day-to-day iteration.
- Docker development is required for parity and onboarding.
- Documentation must show both workflows clearly.
- Docker must follow the workspace shape instead of acting like a separate installation model.

Reason:

- The team needs both fast iteration and deployment parity.

## Decision 3: Public URLs and Internal URLs Must Never Be Mixed

Use public URLs for:

- OAuth callback URLs
- redirect destinations
- email links
- browser-visible documentation

Use internal service URLs only for:

- server-to-server calls inside Docker or internal hosting networks
- SSR and backend calls that never leave trusted infrastructure

Required contract:

- API:
  - `PUBLIC_API_BASE_URL` is the public API URL
  - `PUBLIC_WEB_APP_URL` is the public web URL
- Web:
  - `NEXT_PUBLIC_API_BASE_URL` is the browser-facing API base
  - `API_BASE_URL` is the server/internal API base

Compatibility rule:

- `API_BASE_URL` and `WEB_APP_URL` remain supported as API fallbacks for one release during migration.

## Decision 4: Env Templates and Runtime Env Files Must Be Separate

- Tracked `*.example` files are templates only.
- Runtime env files are copied from templates and remain untracked.
- Docker services must not use tracked example files as if they were live deployment config forever.
- Every env var must be documented in [`docs/ENVIRONMENT_MATRIX.md`](/home/nikan/projects/fyp/docs/ENVIRONMENT_MATRIX.md).

Reason:

- The current setup makes it too easy to deploy with placeholder values or topology-specific values in the wrong context.

## Decision 5: Production Auth Requires HTTPS or Trusted Proxy Support

- Cookie-based auth is supported in production only behind HTTPS or a trusted proxy.
- API cookie behavior must be controlled by:
  - `TRUST_PROXY`
  - `COOKIE_SECURE`
  - `COOKIE_SAME_SITE`
- Cookie behavior must be centralized rather than duplicated ad hoc.

Reason:

- The app already depends on cookies for login, refresh, and session state.
- Hosted and reverse-proxied deployments need explicit proxy awareness.

## Decision 6: Health and Readiness Are Separate Concerns

- `GET /health` remains the lightweight liveness endpoint.
- `GET /readyz` is added as the readiness endpoint.
- Readiness must fail when Mongo is not ready.
- Production-oriented healthchecks should prefer `/readyz`.

Reason:

- A running process is not the same thing as a ready application.

## Decision 7: Verification Must Exist Before CI Becomes Mandatory

The repository will gain root-level verification commands before strict CI enforcement:

- `verify`
- `verify:production`
- `smoke`
- `smoke:production`

Minimum responsibilities:

- build and lint checks
- compose config validation
- env/template validation
- runtime smoke coverage against known demo routes

Reason:

- CI should enforce a workflow that contributors can already run locally.

## Decision 8: Migration Must Be Additive First, Cleanup Later

Required order:

1. docs and interface contracts
2. root scripts
3. workspace alignment
4. Docker alignment
5. env cleanup
6. runtime hardening
7. verification
8. CI
9. removal of transitional artifacts

Never do these too early:

- deleting per-app lockfiles
- removing existing env variable names
- changing current frontend request paths
- making Docker the only supported dev mode

## Out of Scope for This Pass

These items are important, but not part of this stabilization phase:

- auth architecture redesign
- payment architecture redesign
- provider replacement or migration
- large UI or domain refactors
- moving to Turbo or Nx

## Review Triggers

This document should be reviewed if any of these change:

- a new deployment target is introduced
- cookies/auth flow changes materially
- the workspace gains shared packages
- CI becomes required for merges
- the one-release compatibility window is ready to end
