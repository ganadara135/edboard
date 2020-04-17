#! /bin/bash
yarn build:server
docker build -f ./dockerfile/Dockerfile.server -t kcod/abb:latest ./
# docker build -t kcod/abb:latest .
docker tag kcod/abb:latest  ganadara135/abb:latest
docker push ganadara135/abb:latest
ssh root@49.236.137.191 -p 1025 -i ../abb_rsa "docker stop abb && docker rm abb && docker pull ganadara135/abb:latest && docker run -p 4000:4000 -p 5432:5432 -p 6379:6379 -d --name abb ganadara135/abb:latest node dist/index.js"