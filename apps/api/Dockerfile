FROM node:18-alpine AS base
WORKDIR /app
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable

FROM base AS deps
COPY apps/api/package.json apps/api/pnpm-lock.yaml ./
RUN apk add --no-cache --virtual .build-deps python3 make g++ \
  && pnpm install --no-frozen-lockfile \
  && npm rebuild bcrypt --build-from-source \
  && apk del .build-deps

FROM deps AS dev
ENV NODE_ENV=development
COPY apps/api/ ./
EXPOSE 2900
CMD ["pnpm", "dev"]

FROM deps AS builder
COPY apps/api/ ./
RUN pnpm build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY apps/api/package.json ./
COPY --from=builder /app/dist ./dist
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 2900
CMD ["node", "dist/server.js"]
