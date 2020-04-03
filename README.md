## 전체 설명

차례 :  React Login Page - Part 20
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
   5.1. docker 컨테이너 실행 <br>
      => docker run -p 3001:4000 --net="host" -d kcod/abb:1.0.0 <br>
      => docker run -it -p 3001:4000 -d kcod/abb:1.0.0 /bin/bash <br>
      => docker run -p 4000:4000 -p 5432:5432 -p 6379:6379 -d --name abb ganadara135/abb:1.0.0 node dist/index.js
   5.2. docker 컨테이너 디버깅 <br>
      => docker commit 298b7344f067a4a1d96fa866ee93e1304c98d9b9c0124da616e80e5ef9d17f33 broken_container  &&={ ; } docker run -it broken_container /bin/bash <br>
      => node dist/index.js <br>
6. docker push on dockerhub
   docker tag local-image:tagname new-repo:tagname
   docker push new-repo:tagname
   6.1 docker tag kcod/abb:1.0.?  ganadara135/abb:latest
   6.2 docker push ganadara135/abb:latest
7. PostgreSQL 정보
   7.1 설치위치  /usr/lib/systemd/system/postgresql-9.6.service
   7.2 /var/lib/pgsql/9.6/data/    postgressql.conf  위치  
8. Redis 설정
   8.1 .env  와 .env.prod  두 개 다 사용함.  .env.prod  실제 production 환경에서 사용
   8.2 redis 가 설정이 안되면 아무 에러 메시지 없이 ERR_EMPTY_RESPONSE  메시지 받음
9. Web 설정 : deploy_web.sh  and check README.md on web folder
10. app 설정 주의사항
   10.1. expo 는 의존관계 모듈을 실행시 다가지고 있어야 함, workspaces nohoist 설정 주의
   10.2. dependency 설정시 react 관련 항목은 같은 버전이라도 2개 이상 갖고 있으면, 중복 예러 발생(react-hooks 때문), 따라서 의존소스를 복사해서 expo 내에서 옮겨놓고 코딩하기 
   10.3. npm is reac-dom     으로 확인


# ISUSE
1. 로컬에서 schema 읽어오는 것은 apollo.config.js 설정에서 못 읽어옴, 예제처럼 명령어에 옵션으로 처리해야 함 <br>
  ex) npx apollo client:codegen --target typescript --localSchemaFile ./schema.graphql <br>
2. apollo client:check 검증용 명령어는 apollo 사의 registry 만 됨, 로컬은 안됨. <br>
3. 매체별(server, web, app)로 전용 모듈은 해당 매체에서만 사용하게 하는 명령어 on package.json
   "nohoist": [
      "**/rimraf",
      "**/rimraf/**",
      "**/react-native",
      "**/react-native/**",
      "**/react-native-elements",
      "**/react-native-elements/**",
      "**/expo",
      "**/expo/**",
      "**/react-native-typescript-transformer",
      "**/react-native-typescript-transformer/**",
      "**/metro-bundler-config-yarn-workspaces",
      "**/metro-bundler-config-yarn-workspaces/**"
   ]
   3.1  check packages 상태 :  yarn workspaces info
4. remove well
   => rm -rf node_modules ../../node_modules  ../../yarn.lock
5. workspace 체크 명령어
   => yarn workspaces run
6. expo issue : expo 는 실행시 필요 모듈을 다 가지고 있어야 함
   => workspace 즉 yarn packages 가 작동하지 않는다, 아래 방식으로 해결가능
   6.1 expo package.json 에 nohoist 로 설치된 모듈을 전부 표시
7. keep watch SemVer  ^(caret, inverted caret) ~(tilde, swung dash)
8. VScode 는 탐색창에서 소스 복사나 옮기는거 금지, 큰 용량은 제대로 이동 안됨.
   
# 참고링크
1. apollo-codegen :   https://github.com/expo/apollo-codegen <br>
2. nohoist : https://classic.yarnpkg.com/blog/2018/02/15/nohoist/ <br>
3. node.js dockerizing : https://nodejs.org/en/docs/guides/nodejs-docker-webapp/ <br>
4. lerna : https://github.com/lerna/lerna#readme
5. netlify : https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file
8. monorepo : https://doppelmutzi.github.io/monorepo-lerna-yarn-workspaces/

