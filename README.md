## 전체 설명

차례 : How to put a Yarn Workspace in a Docker Image - Part 10
추가고려사항 : postgres 와 redis 도 docker  위에서 작동시키고, docker container 들을 swarm 처리 

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
   => docker run -p 4000:4000 -p 5432:5432 -p 6379:6379 -d --name abb ganadara135/abb:1.0.0 node dist/index.js
7. docker 컨테이너 디버깅 <br>
   => docker commit 298b7344f067a4a1d96fa866ee93e1304c98d9b9c0124da616e80e5ef9d17f33 broken_container  && docker run -it broken_container /bin/bash <br>
   => node dist/index.js <br>
8. docker push on dockerhub
   8.1 docker tag kcod/abb:1.0.?  ganadara135/abb:1.0.?
   8.2 docker push ganadara135/abb:1.0.?
9. PostgreSQL 정보
   9.1 설치위치  /usr/lib/systemd/system/postgresql-9.6.service
   9.2 /var/lib/pgsql/9.6/data/    postgressql.conf  위치  
10. Redis 설정
   10.1 .env  와 .env.prod  두 개 다 사용함.  .env.prod  실제 production 환경에서 사용
   10.2 redis 가 설정이 안되면 아무 에러 메시지 없이 ERR_EMPTY_RESPONSE  메시지 받음
   
# ISUSE
1. 로컬에서 schema 읽어오는 것은 apollo.config.js 설정에서 못 읽어옮, 예제처럼 명령어에 옵션으로 처리해야 함 <br>
  ex) npx apollo client:codegen --target typescript --localSchemaFile ./schema.graphql <br>
2. apollo client:check 검증용 명령어는 apollo 사의 registry 만 됨, 로컬은 안됨. <br>

# 참고링크
1. apollo-codegen :   https://github.com/expo/apollo-codegen <br>
2. nohoist : https://classic.yarnpkg.com/blog/2018/02/15/nohoist/ <br>
3. node.js dockerizing : https://nodejs.org/en/docs/guides/nodejs-docker-webapp/ <br>

