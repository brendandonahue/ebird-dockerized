FROM node:alpine
WORKDIR /api
COPY package.json ./
COPY ./ ./
RUN yarn install
CMD ["yarn", "start"]