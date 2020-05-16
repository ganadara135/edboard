#! /bin/bash
# docker rmi kcod/abbback
# docker-compose stop abb-server
# docker-compose rm abb-server

# yarn build:server
# yarn build:web
# docker-compose -f ./dockerCompose/dev.yml up --build

docker tag kcod/abbback:latest  ganadara135/abbback:latest
docker tag kcod/abbfront:latest  ganadara135/abbfront:latest
docker push ganadara135/abbback:latest
docker push ganadara135/abbfront:latest

# docker build -t kcod/abb:latest .
# docker tag kcod/abb:latest  ganadara135/abbback:latest
# docker push ganadara135/abbback:latest
# ssh root@49.236.137.191 -p 1025 -i ../abb_rsa "docker stop abb && docker rm abb && docker pull ganadara135/abb:latest && docker run -p 4000:4000 -p 5432:5432 -p 6379:6379 -d --name abb ganadara135/abb:latest node dist/index.js"


