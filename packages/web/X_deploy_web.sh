#! /bin/bash
yarn build:web
docker build -t kcod/abbweb:latest .
docker tag kcod/abbweb:latest ganadara135/abbweb:latest
docker push ganadara135/abbweb:latest
ssh root@49.236.137.191 -p 1027 -i ../../../abb_rsa "docker stop abbweb"
# netlify deploy
# docker build -t kcod/abb:latest .
# docker tag kcod/abb:latest  ganadara135/abb:latest
# docker push ganadara135/abb:latest
# ssh root@49.236.137.191 -p 1025 -i ../abb_rsa "docker stop abb && docker rm abb && docker pull ganadara135/abb:latest && docker run -p 4000:4000 -p 5432:5432 -p 6379:6379 -d --name abb ganadara135/abb:latest node dist/index.js"