# Step 1: Use the official Node.js image as a base
FROM node:16-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (for npm)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files into the container
COPY . .

EXPOSE 3000

# Step 7: Run the application with server.js as the entry point
CMD ["node", "server.js"]
