FROM node:14.15.4

WORKDIR /app

COPY package.*json ./

RUN npm install && npm run test

COPY . ./


CMD [ "npm", "run", "dev" ]