FROM node:18-alpine AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable

FROM base AS deps
COPY apps/web/package.json apps/web/pnpm-lock.yaml ./
RUN pnpm install --no-frozen-lockfile

FROM deps AS dev
ENV NODE_ENV=development
COPY apps/web/ ./
EXPOSE 3000
CMD ["pnpm", "dev"]

FROM deps AS builder
ENV NODE_ENV=production
COPY apps/web/ ./
RUN pnpm build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
