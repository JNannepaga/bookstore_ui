FROM node:19-alpine3.15 AS base

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN  npm ci --silent
COPY . .

ENTRYPOINT ["npm", "start"]