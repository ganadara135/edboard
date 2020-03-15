FROM node

WORKDIR /abb

RUN ls -a
RUN pwd

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json .
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/common/package.json ./packages/common/


COPY /abb/packages/server/dist /abb/packages/server/dist
COPY /abb/packages/common/dist /abb/packages/common/dist
COPY /abb/packages/server/.env.prod /abb/packages/server/.env
COPY /abb/packages/server/.env.example /abb/packages/server/
COPY /abb/ormconfig.json .

# RUN npm i -g yarn 999   # node 13 버전은 yarn 사전 탑재됨
RUN yarn install --production

WORKDIR /abb/packages/server

RUN ls

ENV NODE_ENV production

EXPOSE 4000

CMD [ "node","dist/index.js" ]
# CMD [ "node","dist/startServer.js" ]
