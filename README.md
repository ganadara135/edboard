## 전체 설명

차례 : How to put a Yarn Workspace in a Docker Image - Part 10

# 가동 절차

1. Redis-server start
    => redis-server
2. PostgreSQL start <br/>
    => postgres 설정 : https://seogenie2.tistory.com/5 <br>
     [마이컴용] <br/>
    => pg_ctl -D /Users/mac/work/mobileHomeHub/abb/db_postgre -l logfile start
3. Server start
    => npm start
4. client start (web)
    => npm start

5. docker 이미지 빌드 <br>
   => docker build -t kcod/abb:1.0.0 . <br>
6. docker 컨테이너 실행 <br>
   => docker run -p 3001:4000 --net="host" -d kcod/abb:1.0.0 <br>
   => docker run -it -p 3001:4000 -d kcod/abb:1.0.0 /bin/bash <br>
7. docker 컨테이너 디버깅 <br>
   => docker commit 298b7344f067a4a1d96fa866ee93e1304c98d9b9c0124da616e80e5ef9d17f33 broken_container  && docker run -it broken_container /bin/bash <br>
   => node dist/index.js <br>
8, 

# ISUSE
1. 로컬에서 schema 읽어오는 것은 apollo.config.js 설정에서 못 읽어옮, 예제처럼 명령어에 옵션으로 처리해야 함 <br>
  ex) npx apollo client:codegen --target typescript --localSchemaFile ./schema.graphql <br>
2. apollo client:check 검증용 명령어는 apollo 사의 registry 만 됨, 로컬은 안됨. <br>

# 참고링크
1. apollo-codegen :   https://github.com/expo/apollo-codegen <br>
2. nohoist : https://classic.yarnpkg.com/blog/2018/02/15/nohoist/ <br>
3. node.js dockerizing : https://nodejs.org/en/docs/guides/nodejs-docker-webapp/ <br>

