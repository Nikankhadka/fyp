# MeroGhar Monorepo

MeroGhar is a full-stack property rental platform organized as a `pnpm` monorepo. This repository contains the customer-facing Next.js web app, the Express API, Docker-based infrastructure, and MongoDB service definitions used for both development and deployment workflows.

## Quickstart

### Prerequisites

- Node.js `18.17+`
- `pnpm` `10+`
- Docker Engine or Docker Desktop

### Clone

```bash
git clone git@github.com:Nikankhadka/fyp.git
cd fyp
```

### Current Install Path

The repo is in the middle of a workspace stabilization pass. Until that migration is complete, use the current install commands:

```bash
pnpm install:api
pnpm install:web
```

### Native Dev

Copy:

- [`apps/api/.env.example`](/home/nikan/projects/fyp/apps/api/.env.example) -> `apps/api/.env`
- [`apps/web/.env.example`](/home/nikan/projects/fyp/apps/web/.env.example) -> `apps/web/.env.local`

Run:

```bash
pnpm dev:api
pnpm dev:web
```

Default URLs:

- Web: `http://localhost:3000`
- API: `http://localhost:2900`
- API health: `http://localhost:2900/health`

### Docker Dev

Initialize the Docker runtime env files once per clone:

```bash
pnpm docker:env:init
```

Then run:

```bash
pnpm docker:dev
```

Equivalent raw command:

```bash
docker compose -f infra/docker/compose.dev.yml up --build
```

### Seed Data

Use the current root seed helpers:

```bash
pnpm seed:clear
pnpm seed:demo
pnpm seed:bootstrap
```

For workflow details and seeded account expectations, use [`CONTRIBUTING.md`](/home/nikan/projects/fyp/CONTRIBUTING.md).

### Current Verification Baseline

```bash
pnpm verify
```

## Documentation Index

- Contributor workflow: [CONTRIBUTING.md](/home/nikan/projects/fyp/CONTRIBUTING.md)
- Production rules and guardrails: [PRODUCTION_DECISIONS.md](/home/nikan/projects/fyp/PRODUCTION_DECISIONS.md)
- Ordered implementation runbook: [PRODUCTION_TASKS.md](/home/nikan/projects/fyp/PRODUCTION_TASKS.md)
- Env ownership and topology mapping: [docs/ENVIRONMENT_MATRIX.md](/home/nikan/projects/fyp/docs/ENVIRONMENT_MATRIX.md)
- External providers and integration notes: [SERVICE_PROVIDERS.md](/home/nikan/projects/fyp/SERVICE_PROVIDERS.md)

## Repo Structure

```text
.
|-- apps/
|   |-- api/
|   `-- web/
|-- docs/
|-- infra/docker/
|-- scripts/
|-- services/mongo/
|-- README.md
|-- CONTRIBUTING.md
|-- PRODUCTION_DECISIONS.md
`-- PRODUCTION_TASKS.md
```

## Important Notes

- Native dev and Docker dev are both supported and must stay supported.
- Public URLs and internal service URLs must not be mixed.
- Tracked `*.example` files are templates; runtime env handling is being tightened as part of the stabilization work.
- Before changing Docker, auth cookies, redirects, email links, or env names, read the linked docs first.
