# Docker Base image
FROM node:19-alpine3.16

# Global installation of nodemon package
RUN npm install -g nodemon

# Set the Working Directory
WORKDIR /app

# Copy the package.json
# This improves the Docker response by leveraging part layer caching
COPY package.json .

# Initialize Node
RUN npm install 

# Copy all the files
COPY . .

# EXPOSE the PORT 
EXPOSE ${WEBAPP_PORT}

# Start the webapp by running the executable
CMD ["npm", "run", "dev"]