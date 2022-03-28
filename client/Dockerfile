FROM node:alpine
WORKDIR /client
COPY package.json ./
COPY ./ ./
RUN yarn install && yarn global add serve && yarn build
CMD ["serve", "-l", "3000", "-s", "build"]