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
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const Listing_1 = require("../entity/Listing");
exports.createTypeormConn = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("check DB NODE_ENV : ", process.env.NODE_ENV);
    console.log("check DATABASE_URL : ", process.env.DATABASE_URL);
    const connectionOptions = yield typeorm_1.getConnectionOptions(process.env.NODE_ENV);
    console.log("체크 connectionOption : ", connectionOptions);
    return process.env.NODE_ENV === "production"
        ? typeorm_1.createConnection(Object.assign(Object.assign({}, connectionOptions), { url: process.env.DATABASE_URL, entities: [User_1.User, Listing_1.Listing], name: "default" }))
        : typeorm_1.createConnection({
            type: 'postgres',
            host: 'docker-db',
            username: 'postgres',
            password: 'postgres',
            database: 'graphql-ts-server-boilerplate',
            synchronize: false,
            logging: true,
            entities: [User_1.User, Listing_1.Listing],
            name: "default"
        });
});
//# sourceMappingURL=createTypeormConn.js.map