#! /bin/bash
yarn build:web
docker build -f ./dockerfile/Dockerfile.web -t kcod/abbweb:latest ./
docker tag kcod/abbweb:latest ganadara135/abbweb:latest
docker push ganadara135/abbweb:latest
# ssh root@49.236.137.191 -p 1027 -i ../abb_rsa "docker stop abbweb && docker rm abbweb && docker pull ganadara135/abbweb:latest && docker run -p 80:80 -v $(pwd)/default.conf:/etc/nginx/conf.d/default.conf -d --name abbweb ganadara135/abbweb:latest"
ssh root@49.236.137.191 -p 1027 -i ../abb_rsa "docker stop abbweb && docker rm abbweb && docker pull ganadara135/abbweb:latest && docker run -p 80:80 -v ~/default.conf:/etc/nginx/conf.d/default.conf -d --name abbweb ganadara135/abbweb:latest"

#docker run -d -p 80:80 -v $PWD/nginx_conf/default.conf:/etc/nginx/conf.d/default.conf --name abbweb kcod/abbweb:1.0.6
# netlify deploy
# docker build -t kcod/abb:latest .
# docker tag kcod/abb:latest  ganadara135/abb:latest
# docker push ganadara135/abb:latest
# ssh root@49.236.137.191 -p 1025 -i ../abb_rsa "docker stop abb && docker rm abb && docker pull ganadara135/abb:latest && docker run -p 4000:4000 -p 5432:5432 -p 6379:6379 -d --name abb ganadara135/abb:latest node dist/index.js"