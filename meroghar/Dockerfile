FROM node:18-alpine AS deps
WORKDIR /app
COPY meroghar/package.json meroghar/package-lock.json* ./
RUN npm install

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY meroghar/ ./
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY meroghar/package.json ./

EXPOSE 3000
CMD ["npm", "run", "start"]