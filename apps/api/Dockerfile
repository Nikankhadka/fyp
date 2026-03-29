FROM node:18-alpine AS base
WORKDIR /app

FROM base AS deps
COPY apps/api/package.json apps/api/package-lock.json* ./
RUN npm install

FROM deps AS dev
ENV NODE_ENV=development
COPY apps/api/ ./
EXPOSE 2900
CMD ["npm", "run", "dev"]

FROM deps AS builder
COPY apps/api/ ./
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY apps/api/package.json ./
COPY --from=builder /app/dist ./dist
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 2900
CMD ["node", "dist/server.js"]
