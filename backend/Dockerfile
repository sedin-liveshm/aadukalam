# Multi-stage build for production
FROM node:18-alpine AS base

# Install Python for code execution
RUN apk add --no-cache python3 py3-pip

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Development and production build
FROM base AS runner
WORKDIR /app

# Install Python in runner stage as well
RUN apk add --no-cache python3 py3-pip

# Copy node modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy application code
COPY . .

# Generate Prisma Client
RUN npx prisma generate --schema=./dbSchema/prisma/schema.prisma

# Expose port
EXPOSE 4000

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["node", "server.js"]
