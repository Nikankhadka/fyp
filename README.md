# MeroGhar Monorepo

MeroGhar is a full-stack property rental platform organized as a `pnpm` monorepo. The repository contains the customer-facing web application, the backend API, Docker-based local infrastructure, and MongoDB service definitions used for development and deployment workflows.

## Overview

- Property rental platform with guest, host, and admin flows
- Monorepo structure for web, API, and infrastructure assets
- Next.js frontend and Express + TypeScript backend
- MongoDB as the primary application database
- Docker Compose workflows for local development and production-style runs

## Codebase Structure

```text
.
|-- apps/
|   |-- api/      # Express + TypeScript + Mongoose API
|   `-- web/      # Next.js frontend
|-- infra/
|   `-- docker/   # Docker Compose files and container env examples
|-- services/
|   `-- mongo/    # MongoDB image customization and init hook folder
|-- package.json
`-- pnpm-workspace.yaml
```

## Tech Stack

- Frontend: Next.js 13, React 18, Tailwind CSS
- Backend: Express, TypeScript, Mongoose
- Database: MongoDB 7
- Workspace tooling: `pnpm`
- Container orchestration: Docker Compose

## Getting Started

### Prerequisites

- Node.js `18.17+`
- `pnpm` `10+`
- Docker Desktop or Docker Engine + Docker Compose

### Clone the Repository

```bash
git clone git@github.com:Nikankhadka/fyp.git
cd fyp
```

### Install Dependencies

The workspace is managed from the repo root, but dependencies are currently installed per app using the existing lockfiles:

```bash
pnpm install:api
pnpm install:web
```

## Environment Setup

Use the example files in the repo as the source of truth:

- API app: [apps/api/.env.example](/home/nikan/projects/fyp/apps/api/.env.example)
- Web app: [apps/web/.env.example](/home/nikan/projects/fyp/apps/web/.env.example)
- Docker API env: [infra/docker/env/api.dev.env.example](/home/nikan/projects/fyp/infra/docker/env/api.dev.env.example)
- Docker web env: [infra/docker/env/web.dev.env.example](/home/nikan/projects/fyp/infra/docker/env/web.dev.env.example)
- Docker Mongo env: [infra/docker/env/mongo.dev.env.example](/home/nikan/projects/fyp/infra/docker/env/mongo.dev.env.example)

Recommended local setup:

1. Copy [apps/api/.env.example](/home/nikan/projects/fyp/apps/api/.env.example) to `apps/api/.env`
2. Copy [apps/web/.env.example](/home/nikan/projects/fyp/apps/web/.env.example) to `apps/web/.env.local`
3. Replace placeholder secrets before running the API in a real shared environment

## Running the Project

### Local Development Without Docker

Start the API:

```bash
pnpm dev:api
```

Start the web app in a second terminal:

```bash
pnpm dev:web
```

Default local URLs:

- Web: `http://localhost:3000`
- API: `http://localhost:2900`
- API health check: `http://localhost:2900/health`
- Swagger docs: `http://localhost:2900/apiDocs`

### Docker Development

Run the full development stack:

```bash
pnpm docker:dev
```

This starts:

- `mongo` on `27017`
- `api` on `2900`
- `web` on `3000`

Equivalent raw Docker command:

```bash
docker compose -f infra/docker/compose.dev.yml up --build
```

To run the stack in the background:

```bash
docker compose -f infra/docker/compose.dev.yml up --build -d
```

To stop it:

```bash
docker compose -f infra/docker/compose.dev.yml down
```

To stop it and remove volumes:

```bash
docker compose -f infra/docker/compose.dev.yml down -v
```

### Production-Style Docker Run

```bash
pnpm docker:prod
```

This uses [infra/docker/compose.prod.yml](/home/nikan/projects/fyp/infra/docker/compose.prod.yml) and starts the production-target container images in detached mode.

## Workspace Commands

From the repository root:

```bash
pnpm install:api
pnpm install:web
pnpm dev:api
pnpm dev:web
pnpm build:api
pnpm build:web
pnpm lint:web
pnpm seed:demo
pnpm docker:dev
pnpm docker:prod
```

## Docker and Database Operations

Docker assets live in [infra/docker](/home/nikan/projects/fyp/infra/docker).

- Development compose: [infra/docker/compose.dev.yml](/home/nikan/projects/fyp/infra/docker/compose.dev.yml)
- Production compose: [infra/docker/compose.prod.yml](/home/nikan/projects/fyp/infra/docker/compose.prod.yml)
- Mongo service image: [services/mongo/Dockerfile](/home/nikan/projects/fyp/services/mongo/Dockerfile)

### Check Running Containers

```bash
docker compose -f infra/docker/compose.dev.yml ps
docker ps
```

### View Container Logs

```bash
docker compose -f infra/docker/compose.dev.yml logs -f mongo
docker compose -f infra/docker/compose.dev.yml logs -f api
docker compose -f infra/docker/compose.dev.yml logs -f web
```

### Open a Shell in a Container

```bash
docker compose -f infra/docker/compose.dev.yml exec mongo mongosh
docker compose -f infra/docker/compose.dev.yml exec api sh
docker compose -f infra/docker/compose.dev.yml exec web sh
```

## Visualizing Containers with Portainer

Portainer is not part of the project Compose stack, but you can run it alongside the project to inspect containers, volumes, logs, and environment configuration through a UI.

Start Portainer locally:

```bash
docker volume create portainer_data
docker run -d \
  --name portainer \
  --restart=always \
  -p 9000:9000 \
  -p 9443:9443 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v portainer_data:/data \
  portainer/portainer-ce:latest
```

Then open:

- `https://localhost:9443`, or
- `http://localhost:9000`

Inside Portainer you can:

- inspect the `fyp-mongo-dev`, `fyp-api-dev`, and `fyp-web-dev` containers
- review logs and restart services
- inspect the `mongo_data_dev` volume
- confirm port bindings and mounted directories

## Accessing and Visualizing MongoDB Data

The development MongoDB container exposes port `27017`, so you can connect using external database clients.

### Option 1: MongoDB Compass

Use this connection string:

```text
mongodb://localhost:27017/meroghar
```

Compass is the most straightforward GUI for browsing collections, documents, indexes, and query results.

### Option 2: Other Database GUIs

Any MongoDB-compatible client can be used if it supports a standard MongoDB connection string, for example:

- Studio 3T
- TablePlus
- DataGrip with MongoDB support

Use the same local connection target:

```text
Host: localhost
Port: 27017
Database: meroghar
```

### Option 3: Shell Access

```bash
docker compose -f infra/docker/compose.dev.yml exec mongo mongosh
```

Example commands:

```javascript
show dbs
use meroghar
show collections
db.users.find().pretty()
db.properties.find().pretty()
```

## Database Seeding

The project includes a dedicated demo seed script at [apps/api/src/scripts/seedDemoData.ts](/home/nikan/projects/fyp/apps/api/src/scripts/seedDemoData.ts).

What the seed script does:

- connects to the configured `MONGODB_URI`
- clears existing demo records from the main collections
- inserts a coherent demo dataset for users, properties, bookings, payments, reviews, and conversations
- creates realistic admin, host, guest, verified, pending, approved, rejected, completed, upcoming, and cancelled states

Run the seed script against the Docker dev stack:

```bash
pnpm seed:demo
```

Equivalent command:

```bash
docker compose -f infra/docker/compose.dev.yml exec -T api pnpm seed
```

If you are running MongoDB outside Docker and have the API dependencies installed locally, you can also run:

```bash
cd apps/api
pnpm seed
```

Important seed behavior:

- the script is a reset-and-seed workflow, not an additive seed
- existing data in the targeted collections is deleted before demo data is inserted
- use it for local development and demo environments, not against production data

### Demo Accounts

- `admin` / `admin1234`
- `host.sita` / `host1234`
- `host.bikash` / `host1234`
- `guest.asha` / `guest1234`
- `guest.noel` / `guest1234`
- `guest.mina` / `guest1234`

## Database Migrations and Schema Changes

This repository does not currently include a formal migration framework such as Prisma Migrate, TypeORM migrations, or standalone Mongo migration runners.

Current implementation details:

- schema evolution is driven by the Mongoose models under [apps/api/src/models](/home/nikan/projects/fyp/apps/api/src/models)
- application startup connects directly to MongoDB through [apps/api/src/configs/db.ts](/home/nikan/projects/fyp/apps/api/src/configs/db.ts)
- there is no dedicated `pnpm migrate` command in the current workspace

What that means in practice:

- adding a new field usually means updating the relevant Mongoose schema and application code
- existing documents may need a manual backfill script if the new field is required for old records
- for non-trivial data updates, create a script under `apps/api/src/scripts/` and run it intentionally against the target database

Recommended workflow for schema changes in this project:

1. Update the relevant Mongoose model
2. Update API and frontend code that reads or writes the changed shape
3. Add or update a seed/backfill script if existing records need transformation
4. Test locally against the Docker MongoDB instance
5. Re-run the demo seed when you need a clean development dataset

The existing seed script is currently the main example of repo-native database data management automation.

## Notes

- The API health endpoint is defined in [apps/api/src/routes/index.routes.ts](/home/nikan/projects/fyp/apps/api/src/routes/index.routes.ts)
- The API connects to MongoDB using `MONGODB_URI`, falling back to local Mongo when needed
- The Mongo image includes an init hook directory at [services/mongo/init](/home/nikan/projects/fyp/services/mongo/init), which is currently empty except for `.gitkeep`
- The frontend uses `NEXT_PUBLIC_API_BASE_URL` to target the backend
- `pnpm` is the expected package manager for this repository
