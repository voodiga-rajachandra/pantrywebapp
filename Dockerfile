# Base image with Node.js
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json ./

# Install dependencies with legacy-peer-deps
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port your app runs on (default: 3000)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

