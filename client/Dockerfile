FROM node:alpine
WORKDIR /client
COPY package.json ./
COPY ./ ./
RUN yarn install
CMD ["yarn", "build"]