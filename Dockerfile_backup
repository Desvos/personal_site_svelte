#Build Image
FROM node:18 AS build

WORKDIR /app

COPY . ./
RUN npm install
RUN npm run build

#-------------------

#Deploy Image
FROM node:18-alpine AS deploy-node

WORKDIR /app

RUN rm -rf ./*

COPY --from=build /app/package.json .
COPY --from=build /app/build .

RUN npm install

ENTRYPOINT [ "node", "index.js" ]
