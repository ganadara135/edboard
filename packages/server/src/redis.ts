import * as Redis from "ioredis";

console.log("process.env.NODE_ENV : "+process.env.NODE_ENV)
console.log("process.env.REDIS_IP : "+process.env.REDIS_IP) 

export const redis = 
process.env.NODE_ENV === 'production'
   ? new Redis(process.env.REDIS_IP)
   : new Redis(process.env.REDIS_IP);
   // : new Redis(process.env.REDIS_IP)
