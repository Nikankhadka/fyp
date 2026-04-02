# FYP Monorepo

This repository is now structured as a small monorepo for a property rental platform.

## Layout

```text
.
|-- apps/
|   |-- api/      # Express + TypeScript + MongoDB API
|   `-- web/      # Next.js frontend
|-- infra/
|   `-- docker/   # Dev/prod compose files and env examples
|-- services/
|   `-- mongo/    # Mongo image customization and init scripts
|-- package.json
`-- pnpm-workspace.yaml
```

## Workspace Commands

The root workspace uses `pnpm`.

```bash
pnpm install:api
pnpm install:web
pnpm dev:api
pnpm dev:web
pnpm build:api
pnpm build:web
pnpm lint:web
pnpm docker:dev
pnpm docker:prod
```

## Local App Development

Install dependencies with `pnpm`, then run the app directly:

```bash
cd apps/api
pnpm install --frozen-lockfile
pnpm dev
```

```bash
cd apps/web
pnpm install --frozen-lockfile
pnpm dev
```

This repo now treats `pnpm` as the primary package manager. App-level `pnpm-lock.yaml` files are the current source of truth.

## Docker Setup

Docker orchestration now lives under [`infra/docker`](/home/nikan/projects/fyp/infra/docker).

- Development compose: [`infra/docker/compose.dev.yml`](/home/nikan/projects/fyp/infra/docker/compose.dev.yml)
- Production compose: [`infra/docker/compose.prod.yml`](/home/nikan/projects/fyp/infra/docker/compose.prod.yml)
- Env examples: [`infra/docker/env`](/home/nikan/projects/fyp/infra/docker/env)

Services:

- `mongo`: MongoDB with persistent volume and healthcheck
- `api`: Express API container on port `2900`
- `web`: Next.js container on port `3000`

## Environment Files

Use these examples as the source of truth:

- [`apps/api/.env.example`](/home/nikan/projects/fyp/apps/api/.env.example)
- [`apps/web/.env.example`](/home/nikan/projects/fyp/apps/web/.env.example)
- [`infra/docker/env/api.dev.env.example`](/home/nikan/projects/fyp/infra/docker/env/api.dev.env.example)
- [`infra/docker/env/web.dev.env.example`](/home/nikan/projects/fyp/infra/docker/env/web.dev.env.example)
- [`infra/docker/env/mongo.dev.env.example`](/home/nikan/projects/fyp/infra/docker/env/mongo.dev.env.example)

Do not commit real secrets. The previous hardcoded credentials have been removed from the tracked setup.

## Demo Seed Data

The API includes a demo reset-and-seed script that loads a coherent development dataset for:

- admin moderation
- verified and pending KYC profiles
- verified, pending, and rejected property listings
- completed, upcoming, and cancelled bookings
- payments, reviews, wishlists, and viewed-property history

Run it against the dev stack with:

```bash
docker compose -f infra/docker/compose.dev.yml exec -T api pnpm seed
```

Demo logins:

- `admin` / `admin1234`
- `host.sita` / `host1234`
- `host.bikash` / `host1234`
- `guest.asha` / `guest1234`
- `guest.noel` / `guest1234`
- `guest.mina` / `guest1234`

## Notes

- The frontend now builds with Next.js standalone output for production containers.
- The legacy root `docker-compose.yml` has been removed in favor of explicit dev/prod compose files.
- `package-lock.json` should not be reintroduced.
- A later follow-up can consolidate app-level pnpm lockfiles into a single root workspace lockfile if you want one shared lockfile for the whole monorepo.
