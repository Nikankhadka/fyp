# Contributing

This repository is in a stabilization phase. The goal is to keep the app usable today while moving it toward a cleaner monorepo, better Docker parity, and safer production defaults.

## Current Repo Reality

- The repo has a `pnpm` workspace file, but dependency management is still partly app-local.
- Docker dev and native dev both work, but they are not fully aligned yet.
- Production hardening is being documented and rolled out in stages.

Because of that, contributors should follow the documented commands here instead of inferring workflow from one app directory alone.

## Baseline Requirements

- Node.js `18.17+`
- `pnpm` `10+`
- Docker Engine or Docker Desktop

The repo baseline is Node `18.17.x`, which now matches the root metadata, Docker images, and checked-in version files.

## Repo Layout

```text
.
|-- apps/
|   |-- api/
|   `-- web/
|-- infra/docker/
|-- services/mongo/
|-- scripts/
|-- README.md
|-- PRODUCTION_DECISIONS.md
|-- PRODUCTION_TASKS.md
`-- docs/ENVIRONMENT_MATRIX.md
```

## Before You Start

1. Read [`README.md`](/home/nikan/projects/fyp/README.md) for quickstart context.
2. Read [`docs/ENVIRONMENT_MATRIX.md`](/home/nikan/projects/fyp/docs/ENVIRONMENT_MATRIX.md) before changing env usage.
3. Read [`PRODUCTION_DECISIONS.md`](/home/nikan/projects/fyp/PRODUCTION_DECISIONS.md) if your change affects Docker, auth, redirects, email links, or deployment behavior.

## Current Install Workflow

Until the shared-workspace migration is completed, use the current install path:

```bash
pnpm install:api
pnpm install:web
```

Do not assume a fresh root `pnpm install` is the only supported path yet.

## Native Development

### Env Setup

Copy these files:

- [`apps/api/.env.example`](/home/nikan/projects/fyp/apps/api/.env.example) -> `apps/api/.env`
- [`apps/web/.env.example`](/home/nikan/projects/fyp/apps/web/.env.example) -> `apps/web/.env.local`

Important:

- Local host env files are for host-local development, not Docker.
- If you change env behavior, also update [`docs/ENVIRONMENT_MATRIX.md`](/home/nikan/projects/fyp/docs/ENVIRONMENT_MATRIX.md).

### Start the Apps

In separate terminals:

```bash
pnpm dev:api
pnpm dev:web
```

Default URLs:

- Web: `http://localhost:3000`
- API: `http://localhost:2900`
- API health: `http://localhost:2900/health`

## Docker Development

### Env Setup

Use the Docker env templates in [`infra/docker/env`](/home/nikan/projects/fyp/infra/docker/env).

Initialize the untracked runtime env files once per clone:

```bash
pnpm docker:env:init
```

This copies `*.example` templates to ignored `*.env` files only if the runtime files do not already exist.

### Start the Stack

```bash
pnpm docker:dev
```

Equivalent raw command:

```bash
docker compose -f infra/docker/compose.dev.yml up --build
```

Useful commands:

```bash
docker compose -f infra/docker/compose.dev.yml ps
docker compose -f infra/docker/compose.dev.yml logs -f api
docker compose -f infra/docker/compose.dev.yml logs -f web
docker compose -f infra/docker/compose.dev.yml down
```

## Production-Style Docker Run

```bash
pnpm docker:prod
```

This uses [`infra/docker/compose.prod.yml`](/home/nikan/projects/fyp/infra/docker/compose.prod.yml).

Before changing production env handling, read [`PRODUCTION_TASKS.md`](/home/nikan/projects/fyp/PRODUCTION_TASKS.md).

## Verification Before Opening a PR

Run the current minimum checks:

```bash
pnpm verify
```

If your change affects runtime behavior, also run the smoke path when possible:

```bash
pnpm smoke
```

Notes:

- The smoke script depends on a running app and a local Chrome installation.
- The smoke script now discovers a current property and host from the live API instead of relying on hardcoded demo IDs.
- If smoke cannot find usable demo data, refresh the dev dataset with `pnpm seed:demo`.
- Smoke failures should be attached to the PR with the generated artifacts.

## Seed Data

Current commands from the root:

```bash
pnpm seed:clear
pnpm seed:demo
pnpm seed:bootstrap
```

Use seeded/demo data when reproducing guest, host, and admin regressions.

## Rules for Changes in This Stabilization Phase

- Keep native dev and Docker dev both working.
- Do not mix internal service URLs with public URLs.
- Do not remove compatibility behavior before verification exists.
- Do not change env semantics without updating [`docs/ENVIRONMENT_MATRIX.md`](/home/nikan/projects/fyp/docs/ENVIRONMENT_MATRIX.md).
- Do not change deployment assumptions without updating [`PRODUCTION_DECISIONS.md`](/home/nikan/projects/fyp/PRODUCTION_DECISIONS.md).

## When to Update Which Document

- Update [`README.md`](/home/nikan/projects/fyp/README.md) when the quickstart changes.
- Update [`CONTRIBUTING.md`](/home/nikan/projects/fyp/CONTRIBUTING.md) when contributor workflow changes.
- Update [`docs/ENVIRONMENT_MATRIX.md`](/home/nikan/projects/fyp/docs/ENVIRONMENT_MATRIX.md) when env names or meanings change.
- Update [`PRODUCTION_DECISIONS.md`](/home/nikan/projects/fyp/PRODUCTION_DECISIONS.md) when deployment or runtime rules change.
- Update [`PRODUCTION_TASKS.md`](/home/nikan/projects/fyp/PRODUCTION_TASKS.md) when implementation order or rollout checkpoints change.

## Pull Request Expectations

- Explain what changed.
- State which workflow you verified:
  - native dev
  - Docker dev
  - production-style Docker
- List the commands you ran.
- Mention any env assumptions or local overrides used for testing.

## Known Friction Points

- The repo is not yet fully aligned on one shared lockfile.
- Docker dev and native dev still rely on different install shapes.
- The shared workspace lockfile migration still needs a successful root install in a network-enabled environment.
- CI is not yet enforcing the eventual stable workflow.

If your change touches one of these areas, keep the change small and update the docs in the same PR.
