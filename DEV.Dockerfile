# Import base image
FROM node:12.0-slim

# Set up a working dir for the app 
WORKDIR /app
# Copy over the package json
COPY package.json .

# Install typescript and app deps
RUN npm install typescript -g 
RUN npm install nodemon -g
RUN npm install

# Add remaining app files 
ADD . .

# Start app in dev
CMD [ "nodemon", "src/app.ts" ]