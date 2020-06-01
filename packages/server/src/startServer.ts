import "reflect-metadata";
import "dotenv/config";
// import { GraphQLServer } from "graphql-yoga";
import { ApolloServer } from "apollo-server-express";
// import {graphiqlExpress, graphqlExpress} from 'apollo-server-express';
// import express from 'express';
// tslint:disable-next-line: no-var-requires
const express = require('express');
// const bodyParser = require('body-parser');
import * as session from "express-session";
import * as connectRedis from "connect-redis";
import * as RateLimit from "express-rate-limit";
import * as RateLimitRedisStore from "rate-limit-redis";
// import { applyMiddleware } from "graphql-middleware";

import { redis } from "./redis";
import { createTypeormConn } from "./utils/createTypeormConn";
import { confirmEmail } from "./routes/confirmEmail";
import { genSchema } from "./utils/genSchema";
import { redisSessionPrefix } from "./constants";
import { createTestConn } from "./testUtils/createTestConn";
// import { Middleware } from "./middleware";
// import { MiddlewareShield } from "./middlewareShield";


const SESSION_SECRET = "ajslkjalksjdfkl";
const RedisStore = connectRedis(session as any);

export const startServer = async () => {
  if (process.env.NODE_ENV === "test") {
    await redis.flushall();
  }

  // const schema = genSchema() as any;
  // // applyMiddleware(schema, MiddlewareShield)
  // applyMiddleware(schema, Middleware);

  const app = express();
  // app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));

  // const server = new GraphQLServer({

  const server = new ApolloServer({
    schema: genSchema() as any,

    context: ( {req} ) => ({
      redis,
      // 10.0.2.2   
      url: req.protocol + "://" + req.get("host"),
      session: req.session,
      req
    })
    // typeDefs,
    // resolvers,
  });
  
  server.applyMiddleware({ app });
  //   schema: genSchema() as any,
  //   // schema,
  //   context: ({ request }) => ({
  //     redis,
  //     // 10.0.2.2   
  //     url: request.protocol + "://" + request.get("host"),
  //     session: request.session,
  //     req: request
  //   })
  // });

  app.use(
    new RateLimit({
      store: new RateLimitRedisStore({
        client: redis
      }),
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      delayMs: 0 // disable delaying - full speed until the max limit is reached
    })
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
        prefix: redisSessionPrefix
      }),
      name: "qid",
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
      }
    } as any)
  );

  const cors = {
    credentials: true,
    origin:
      process.env.NODE_ENV === "test"
        ? "*"
        : (process.env.FRONTEND_HOST as string)
  };

 app.get("/confirm/:id", confirmEmail);

  if (process.env.NODE_ENV === "test") {
    await createTestConn(true);
  } else {
    const conn = await createTypeormConn();
    // const isConnected: boolean = conn.isConnected;
    // console.log("연결 체크 : ", isConnected)
    // console.log("conn.showMigrations : ", conn.showMigrations)
    // console.log("conn : ", conn)
    await conn.runMigrations();
  }

  const port = process.env.PORT || 4000;
  const app2 = await app.listen({ // .start({
    cors,
    port: process.env.NODE_ENV === "test" ? 0 : port
  });
  console.log("Server is running on localhost:"+port);

  return app2;
};
