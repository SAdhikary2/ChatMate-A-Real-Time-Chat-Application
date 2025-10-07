FROM node:20

WORKDIR /src

COPY package*.json ./

RUN npm ci

COPY . .

# Build the application 
RUN npm run build

# Install serve to serve static files
RUN npm install -g serve

# Expose port 5173 to match Vite's convention
EXPOSE 5173

# Serve the built application on port 5173
CMD ["serve", "-s", "dist", "-l", "5173"]