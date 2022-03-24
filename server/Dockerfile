FROM node:alpine
WORKDIR /server
COPY package.json ./
COPY ./ ./
RUN yarn install
CMD ["yarn", "start"]