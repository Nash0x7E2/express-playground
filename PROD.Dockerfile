# Import base image
FROM node:12.0-slim

# Set up a working dir for the app
WORKDIR /app
# Copy over the package json
COPY package.json .

# Install typescript and app deps
RUN npm install typescript -g
RUN npm install

# Add remaining app files
ADD . .
# Build typescript
RUN npm run build

# Start app in prod
CMD [ "npm", "start" ]