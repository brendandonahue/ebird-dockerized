FROM node:alpine
WORKDIR /client
COPY package.json ./
COPY ./ ./
RUN yarn install && yarn build
COPY ./build /usr/share/nginx/html