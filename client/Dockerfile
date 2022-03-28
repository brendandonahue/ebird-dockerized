FROM node:alpine
WORKDIR /client
COPY package.json ./
COPY ./ ./
RUN yarn install && yarn global add serve
CMD ["serve", "-l", "3000", "-s", "build"]