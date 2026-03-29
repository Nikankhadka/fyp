# services/mongo/Dockerfile
FROM mongo:7

# Default DB name used when running init scripts
ENV MONGO_INITDB_DATABASE=meroghar

# Copy initialization scripts (run once when the DB is first created)
COPY init/ /docker-entrypoint-initdb.d/
