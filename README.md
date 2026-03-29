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
pnpm dev:api
pnpm dev:web
pnpm build:api
pnpm build:web
pnpm lint:web
pnpm docker:dev
pnpm docker:prod
```

## Local App Development

Install dependencies per app with your preferred package manager, then run the app directly:

```bash
cd apps/api
npm install
npm run dev
```

```bash
cd apps/web
npm install
npm run dev
```

The current repo still contains app-level lockfiles from the previous layout. The next cleanup step should standardize installs on a single package manager across the whole repo.

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

## Notes

- The frontend now builds with Next.js standalone output for production containers.
- The legacy root `docker-compose.yml` has been removed in favor of explicit dev/prod compose files.
- A follow-up cleanup should regenerate lockfiles after standardizing on one package manager.
