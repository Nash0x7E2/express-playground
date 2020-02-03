FROM node:10.15.3-alpine

WORKDIR /app
ADD . .

RUN npm ci

USER node

EXPOSE 3000

CMD [ "node", "dist/app.js" ]