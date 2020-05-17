"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redis = require("ioredis");
console.log("process.env.NODE_ENV : " + process.env.NODE_ENV);
console.log("process.env.REDIS_HOST : " + process.env.REDIS_HOST);
exports.redis = process.env.NODE_ENV === 'production'
    ? new Redis(process.env.REDIS_HOST)
    : new Redis(process.env.REDIS_HOST);
//# sourceMappingURL=redis.js.map