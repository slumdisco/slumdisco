
FROM node:14.17.5

WORKDIR /app

COPY ["package.json", "./"]

RUN yarn install --production=false

COPY . .