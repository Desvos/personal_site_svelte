#Build Image
FROM node:12 AS build

WORKDIR /app

COPY . ./
RUN npm install
RUN npm run build

#-------------------

#Deploy Image
FROM nginx:1.19-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/build .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]