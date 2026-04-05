FROM node:18-alpine AS base
WORKDIR /workspace
ENV NEXT_TELEMETRY_DISABLED=1
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY apps/api/package.json apps/api/package.json
COPY apps/web/package.json apps/web/package.json
RUN pnpm install --filter @fyp/web... --no-frozen-lockfile

FROM deps AS dev
ENV NODE_ENV=development
COPY . ./
EXPOSE 3000
CMD ["pnpm", "--filter", "@fyp/web", "dev"]

FROM deps AS builder
ENV NODE_ENV=production
COPY . ./
RUN pnpm --filter @fyp/web build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /workspace/apps/web/public ./public
COPY --from=builder /workspace/apps/web/.next/standalone ./
COPY --from=builder /workspace/apps/web/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
