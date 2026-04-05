# Production Tasks

This document is the ordered implementation runbook for stabilizing the repo without breaking the existing application. It combines production hardening, workspace alignment, Docker parity, and contributor onboarding into one sequence.

## Ground Rules

- Keep the app running while changes land.
- Prefer additive changes before removals.
- Do not remove compatibility paths until verification proves the replacement works.
- Capture evidence after each step so later contributors know what was actually validated.

## Phase 0: Baseline Snapshot

### Goal

Record the current working state before any mutation.

### Pre-checks

- `git status --short`
- `pnpm build:api`
- `pnpm lint:web`
- `pnpm build:web`
- `docker compose -f infra/docker/compose.dev.yml config`
- `docker compose -f infra/docker/compose.prod.yml config`

### Pass Criteria

- All commands complete successfully.
- Any failures are documented before proceeding.

### Evidence to Capture

- command timestamps
- command exit status
- notes about sandbox-only issues versus real failures

### Rollback

- No repo changes in this phase.

## Phase 1: Lock the Documentation Contract

### Goal

Create the durable references that all later changes must follow.

### Deliverables

- [`PRODUCTION_DECISIONS.md`](/home/nikan/projects/fyp/PRODUCTION_DECISIONS.md)
- [`PRODUCTION_TASKS.md`](/home/nikan/projects/fyp/PRODUCTION_TASKS.md)
- [`CONTRIBUTING.md`](/home/nikan/projects/fyp/CONTRIBUTING.md)
- [`docs/ENVIRONMENT_MATRIX.md`](/home/nikan/projects/fyp/docs/ENVIRONMENT_MATRIX.md)
- refreshed [`README.md`](/home/nikan/projects/fyp/README.md)

### Pass Criteria

- Docs describe current repo reality accurately.
- Docs clearly separate current behavior from target behavior.
- Docs do not claim commands exist before they are implemented.

### Rollback

- Revert doc-only changes if they misstate current behavior.

## Phase 2: Standardize the Repo Baseline

### Goal

Remove avoidable contributor confusion before touching runtime paths.

### Changes

- Standardize on Node `18.17+`.
- Add or align root-level runtime version metadata.
- Realign stray app-only version files with the repo baseline.
- Add root script placeholders and wrappers in [`package.json`](/home/nikan/projects/fyp/package.json).

### Required Files

- [`package.json`](/home/nikan/projects/fyp/package.json)
- root version file if chosen
- [`apps/web/.node-version`](/home/nikan/projects/fyp/apps/web/.node-version)
- docs that mention runtime versions

### Pass Criteria

- One Node baseline is documented everywhere.
- Existing app scripts still work.
- New root scripts do not break current usage.

### Rollback

- Revert root script additions if they shadow or break existing behavior.

## Phase 3: Add Root Commands Before Workspace Migration

### Goal

Give contributors a stable command surface before dependency layout changes.

### Required Commands

- `install`
- `dev`
- `build`
- `lint`
- `typecheck`
- `verify`
- `smoke`
- `docker:dev:up`
- `docker:dev:down`
- `docker:prod:config`

### Implementation Notes

- Use `pnpm --filter` or equivalent root orchestration.
- Keep app package scripts as wrappers.
- Do not remove the existing `dev:web`, `dev:api`, `build:web`, and `build:api` commands yet.

### Pass Criteria

- A contributor can discover the correct entrypoints from the root package alone.

### Rollback

- Revert any root script that introduces ambiguity or conflicts with existing scripts.

## Phase 4: Convert to a Shared Workspace Lockfile

### Goal

Make the repo a true workspace with one dependency source of truth.

### Changes

- Remove the split-lockfile behavior from [`.npmrc`](/home/nikan/projects/fyp/.npmrc).
- Regenerate the root lockfile from the workspace root.
- Keep app lockfiles temporarily while verifying migration.

### Risks

- Hidden dependency drift between root and app installs.
- Docker builds still assuming app-local lockfiles.

### Pass Criteria

- Root install completes cleanly.
- API build still passes.
- Web lint still passes.
- Web build still passes.
- Dockerfiles can be updated against the new install model without introducing regressions.

### Rollback

- Restore previous lockfile settings and lockfiles if workspace install resolution changes unexpectedly.

## Phase 5: Align Docker With the Workspace

### Goal

Make Docker dev and prod use the same dependency and script model as the repo root.

### Changes

- Update [`apps/api/Dockerfile`](/home/nikan/projects/fyp/apps/api/Dockerfile) to install from the repo root.
- Update [`apps/web/Dockerfile`](/home/nikan/projects/fyp/apps/web/Dockerfile) to install from the repo root.
- Update [`infra/docker/compose.dev.yml`](/home/nikan/projects/fyp/infra/docker/compose.dev.yml) to run workspace-aware commands.
- Update [`infra/docker/compose.prod.yml`](/home/nikan/projects/fyp/infra/docker/compose.prod.yml) if needed to match the workspace build flow.
- Mount the repo root in Docker dev.

### Constraints

- Keep service names and published ports unchanged unless there is a strong reason to change them.
- Keep app behavior unchanged from the browser point of view.

### Pass Criteria

- Native dev and Docker dev can both start from the documented commands.
- Compose config still validates.
- Docker build targets remain usable.

### Rollback

- Revert Dockerfile and compose changes together if container startup stops matching documented dev behavior.

## Phase 6: Fix Env Ownership and Topology Drift

### Goal

Make env files unambiguous across local, Docker, and production.

### Changes

- Keep tracked templates as `*.example`.
- Create untracked runtime env copies for actual use.
- Correct host-local API examples to use local Mongo, not the Docker hostname.
- Correct Docker dev env examples to use Docker-only internal hosts only where appropriate.
- Correct production env examples so browser-facing values are always public URLs.
- Remove duplicate or contradictory env keys.

### Required Files

- [`apps/api/.env.example`](/home/nikan/projects/fyp/apps/api/.env.example)
- [`apps/web/.env.example`](/home/nikan/projects/fyp/apps/web/.env.example)
- [`infra/docker/env/api.dev.env.example`](/home/nikan/projects/fyp/infra/docker/env/api.dev.env.example)
- [`infra/docker/env/web.dev.env.example`](/home/nikan/projects/fyp/infra/docker/env/web.dev.env.example)
- [`infra/docker/env/api.prod.env.example`](/home/nikan/projects/fyp/infra/docker/env/api.prod.env.example)
- [`infra/docker/env/web.prod.env.example`](/home/nikan/projects/fyp/infra/docker/env/web.prod.env.example)

### Pass Criteria

- Local examples work for host-local development.
- Docker examples work for containerized development.
- Production examples do not point browser traffic at `localhost` or internal Docker hostnames.

### Rollback

- Restore previous env templates if a topology-specific change was applied to the wrong context.

## Phase 7: Add the Public/Internal URL Contract

### Goal

Stop using the same env field for both public and internal traffic.

### New Env Variables

- `PUBLIC_API_BASE_URL`
- `PUBLIC_WEB_APP_URL`
- `TRUST_PROXY`
- `COOKIE_SECURE`
- `COOKIE_SAME_SITE`

### Compatibility Policy

- Keep existing `API_BASE_URL` and `WEB_APP_URL` fallbacks for one release.
- Do not change current browser request paths.

### Required Code Areas

- [`apps/api/src/configs/constant.ts`](/home/nikan/projects/fyp/apps/api/src/configs/constant.ts)
- [`apps/api/src/server.ts`](/home/nikan/projects/fyp/apps/api/src/server.ts)
- [`apps/api/src/configs/strategy.ts`](/home/nikan/projects/fyp/apps/api/src/configs/strategy.ts)
- auth controllers and mail templates
- web config and rewrite assumptions if needed

### Pass Criteria

- OAuth callback URLs use public API URLs only.
- redirects and email links use public web or public API URLs only.
- internal SSR and server-to-server calls can still use internal URLs.

### Rollback

- Keep the fallback resolution path intact until all production envs have been updated.

## Phase 8: Centralize Proxy and Cookie Behavior

### Goal

Make cookie auth reliable in hosted and reverse-proxied production.

### Changes

- Add env-driven trust proxy handling in the API.
- Centralize cookie option calculation.
- Keep cookie semantics stable from the client point of view.

### Pass Criteria

- Login, refresh, and logout continue working locally.
- Production config can opt into secure cookies and proxy awareness.

### Rollback

- Revert centralized cookie config if it changes effective cookie behavior in development unexpectedly.

## Phase 9: Add Readiness and Deployment Checks

### Goal

Improve deployment safety without changing user-facing routes.

### Changes

- Keep `GET /health`.
- Add `GET /readyz`.
- Make readiness fail when Mongo is unavailable.
- Switch production-oriented API healthchecks to `/readyz`.

### Pass Criteria

- `/health` remains lightweight and stable.
- `/readyz` reflects real application readiness.

### Rollback

- Keep `/health` untouched so deployments always retain a fallback liveness check.

## Phase 10: Add Verification and Smoke Commands

### Goal

Create repeatable repo-level checks before CI enforcement.

### Static Verification

- API build
- web lint
- web build
- compose config validation
- env template validation

### Runtime Smoke

- public routes
- guest routes
- host routes
- admin routes
- basic API readiness
- basic web-to-API path validation

### Reuse

- Extend [`scripts/playwright-smoke.js`](/home/nikan/projects/fyp/scripts/playwright-smoke.js) rather than replacing it.

### Pass Criteria

- A contributor can run one documented verification path before opening a PR.

### Rollback

- If smoke automation is too brittle at first, keep the static verification path mandatory and document smoke as opt-in until stabilized.

## Phase 11: Add CI

### Goal

Enforce the stable local workflow in automation.

### Required Checks

- install
- lint
- typecheck
- build
- compose config validation

### Optional Checks

- manual smoke workflow
- scheduled smoke workflow

### Pass Criteria

- CI uses the same commands documented for contributors.

### Rollback

- If CI reveals command instability, fix the underlying root command first instead of bypassing the failing check.

## Phase 12: Remove Transitional Artifacts

### Goal

Finish the migration only after the new path is proven.

### Removal Candidates

- app-level lockfiles
- obsolete README workflow notes
- compatibility-only env guidance
- old fallback env names after the release window closes

### Pass Criteria

- root install is the only supported dependency path.
- Docker and native dev use the same documented concepts.
- no critical deployment still depends on removed compatibility behavior.

### Rollback

- Reintroduce compatibility artifacts only if removal breaks a real supported environment.

## Final Acceptance Checklist

- Docs reflect reality and planned migration clearly.
- The repo has one obvious command surface at the root.
- Native dev and Docker dev both work from documented instructions.
- Production env examples no longer mix public and internal URLs.
- Cookies and auth behavior are explicit for proxied production.
- Readiness checks exist.
- Verification exists before CI is enforced.
- Transitional cleanup only happens after proof, not before.
