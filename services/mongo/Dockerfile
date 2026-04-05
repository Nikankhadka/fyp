# services/mongo/Dockerfile
FROM mongo:7

# Default DB name used when running init scripts
ENV MONGO_INITDB_DATABASE=meroghar

# The compose build context is the repo root, so copy from the repo-relative path.
COPY services/mongo/init/ /docker-entrypoint-initdb.d/
