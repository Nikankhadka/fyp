#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}Starting deployment process...${NC}"

# Check if .env file exists
if [ ! -f .env ]; then
    echo -e "${RED}Error: .env file not found!${NC}"
    echo "Please create a .env file with the required environment variables."
    exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Error: Docker is not installed!${NC}"
    echo "Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo -e "${RED}Error: Docker Compose is not installed!${NC}"
    echo "Please install Docker Compose first."
    exit 1
fi

# Stop any running containers
echo -e "${GREEN}Stopping any running containers...${NC}"
docker-compose down

# Build and start the containers
echo -e "${GREEN}Building and starting containers...${NC}"
docker-compose up --build -d

# Wait for services to be healthy
echo -e "${GREEN}Waiting for services to be healthy...${NC}"
sleep 10

# Check if services are running
if docker-compose ps | grep -q "Up"; then
    echo -e "${GREEN}Deployment successful!${NC}"
    echo -e "Frontend is available at: http://localhost:3000"
    echo -e "Backend is available at: http://localhost:2900"
else
    echo -e "${RED}Error: Services failed to start!${NC}"
    echo "Check the logs with: docker-compose logs"
    exit 1
fi 