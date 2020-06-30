"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const apollo_server_express_1 = require("apollo-server-express");
const cors = require("cors");
const express = require("express");
const session = require("express-session");
const connectRedis = require("connect-redis");
const RateLimit = require("express-rate-limit");
const RateLimitRedisStore = require("rate-limit-redis");
const redis_1 = require("./redis");
const createTypeormConn_1 = require("./utils/createTypeormConn");
const genSchema_1 = require("./utils/genSchema");
const constants_1 = require("./constants");
const createTestConn_1 = require("./testUtils/createTestConn");
const SESSION_SECRET = "ajslkjalksjdfkl";
const RedisStore = connectRedis(session);
exports.startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    if (process.env.NODE_ENV === "test") {
        yield redis_1.redis.flushall();
    }
    const app = express();
    const corsOptions = {
        origin: process.env.FRONTEND_HOST,
        credentials: true
    };
    app.use(cors(corsOptions));
    const server = new apollo_server_express_1.ApolloServer({
        schema: genSchema_1.genSchema(),
        context: ({ req }) => __awaiter(void 0, void 0, void 0, function* () {
            return ({
                redis: redis_1.redis,
                url: req.protocol + "://" + req.get("host"),
                session: req.session,
                req
            });
        }),
        playground: true,
        introspection: true,
    });
    server.applyMiddleware({
        app,
        path: '/',
        cors: false,
    });
    app.use(new RateLimit({
        store: new RateLimitRedisStore({
            client: redis_1.redis
        }),
        windowMs: 15 * 60 * 1000,
        max: 100,
        delayMs: 0
    }));
    app.use(session({
        store: new RedisStore({
            client: redis_1.redis,
            prefix: constants_1.redisSessionPrefix
        }),
        name: "qid",
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    }));
    if (process.env.NODE_ENV === "test") {
        yield createTestConn_1.createTestConn(true);
    }
    else {
        const conn = yield createTypeormConn_1.createTypeormConn();
        yield conn.runMigrations();
    }
    const port = process.env.SERVER_PORT || 4000;
    const app2 = yield app.listen({
        port: process.env.NODE_ENV === "test" ? 0 : port
    });
    console.log("FRONTEND_HOST: ", process.env.FRONTEND_HOST);
    console.log("Server is running on localhost:" + port);
    return app2;
});
//# sourceMappingURL=startServer.js.map