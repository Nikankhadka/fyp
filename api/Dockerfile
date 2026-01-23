FROM node:18-alpine AS builder
WORKDIR /app

# Install deps
COPY api/package.json api/package-lock.json* ./ 
RUN npm install

# Copy source and build
COPY api/ ./ 
RUN npm run build || npm run tsc

# Runtime image
FROM node:18-alpine
WORKDIR /app

ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY api/package.json ./

EXPOSE 2900
CMD ["node", "dist/server.js"]