"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redis = require("ioredis");
exports.redis = process.env.NODE_ENV === 'production'
    ? new Redis(process.env.REDIS_IP)
    : new Redis(process.env.REDIS_IP);
//# sourceMappingURL=redis.js.map