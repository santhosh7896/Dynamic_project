# Step 1: Use the official Node.js image as a base (use a lightweight version for smaller image size)
FROM node:16-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install only production dependencies (if not in development mode)
RUN npm install --production

# Step 5: Copy the rest of the application files into the container
COPY . .

# Step 6: Expose the application port
EXPOSE 3000

# Step 7: Run the application
CMD ["node", "server.js"]
