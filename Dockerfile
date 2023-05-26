FROM node:19-alpine3.15 AS base

LABEL version="1.0.1"
LABEL description="This is the Bookstore docker image"
LABEL maintainer = ["joseph.nannepaga@gmail.com"]

ARG PORT=3000
ARG REACT_APP_BASE_URL=http://localhost:5000

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

# Set the PATH environment variable
ENV PATH="app/node_modules/.bin:$PATH"

ENV REACT_APP_BASE_URL=${REACT_APP_BASE_URL}
RUN npm run build

EXPOSE ${PORT}

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]