# Use an official Node.js image as a base
FROM node:16-alpine

# Create and change to the application directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the port the application will run on
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
