#! /bin/bash

# .env 파일에서 NODE_ENV 를  production 으로 변경
# docker-compose -f ./dockerCompose/prod.server.yml build
# docker-compose -f ./dockerCompose/prod.web.yml build
yarn build:server

docker build -f ./dockerCompose/Dockerfile.server.prod -t ganadara135/abbback:latest ./
docker build -f ./dockerCompose/Dockerfile.web.prod -t ganadara135/abbfront:latest ./


# docker tag kcod/abbback:latest  ganadara135/abbback:latest
# docker tag kcod/abbfront:latest  ganadara135/abbfront:latest

docker push ganadara135/abbback:latest
docker push ganadara135/abbfront:latest
# ssh root@49.236.137.191 -p 1025 -i ../abb_rsa "docker stop abb && docker rm abb && docker pull ganadara135/abb:latest && docker run -p 4000:4000 -p 5432:5432 -p 6379:6379 -d --name abb ganadara135/abb:latest node dist/index.js"


