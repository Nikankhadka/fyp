FROM node:18-alpine AS base
WORKDIR /workspace
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY apps/api/package.json apps/api/package.json
COPY apps/web/package.json apps/web/package.json
RUN apk add --no-cache --virtual .build-deps python3 make g++ \
  && pnpm install --filter @fyp/api... --no-frozen-lockfile \
  && pnpm approve-builds --all \
  && pnpm --filter @fyp/api rebuild bcrypt \
  && apk del .build-deps

FROM deps AS dev
ENV NODE_ENV=development
COPY . ./
EXPOSE 2900
CMD ["pnpm", "--filter", "@fyp/api", "dev"]

FROM deps AS builder
COPY . ./
RUN pnpm --filter @fyp/api build

FROM node:18-alpine AS runner
WORKDIR /workspace/apps/api
ENV NODE_ENV=production

COPY apps/api/package.json ./package.json
COPY apps/api/src/utils/swagger.yml ./dist/utils/swagger.yml
COPY --from=builder /workspace/apps/api/dist ./dist
COPY --from=deps /workspace/node_modules /workspace/node_modules
COPY --from=deps /workspace/apps/api/node_modules ./node_modules

EXPOSE 2900
CMD ["node", "dist/server.js"]
