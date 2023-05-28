FROM node:19-alpine3.15 AS base

LABEL version="1.0.4"
LABEL description="This is the Bookstore docker image"
LABEL maintainer = ["joseph.nannepaga@gmail.com"]

ARG PORT=3000

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

# Set the PATH environment variable
#ENV PATH="app/node_modules/.bin:$PATH"
ENV NODE_ENV=production
ENV REACT_APP_BOOKSTORE_API_BASE_URL=http://localhost:5000

RUN npm run build

EXPOSE ${PORT}

COPY generate-env.js . 
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]