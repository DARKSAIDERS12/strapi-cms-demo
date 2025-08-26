FROM node:18-alpine

WORKDIR /app

# Install sqlite3 dependencies
RUN apk add --no-cache sqlite

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including dev for build)
RUN npm ci

# Copy source code
COPY . .

# Create .tmp directory for SQLite database
RUN mkdir -p .tmp

# Build the application
RUN npm run build

# Remove dev dependencies after build
RUN npm prune --production

# Expose port
EXPOSE 1337

# Start the application
CMD ["npm", "start"]
