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
const EDboard_1 = require("../entity/EDboard");
const YearGoal_1 = require("../entity/YearGoal");
const YearToMonthMN_1 = require("../entity/YearToMonthMN");
const MonthGoal_1 = require("../entity/MonthGoal");
exports.createTypeormConn = () => __awaiter(void 0, void 0, void 0, function* () {
    return process.env.NODE_ENV === "production"
        ? typeorm_1.createConnection({
            type: process.env.TYPEORM_CONNECTION,
            host: process.env.TYPEORM_HOST,
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            database: process.env.TYPEORM_DATABASE,
            synchronize: true,
            logging: true,
            charset: "utf8mb4_unicode_ci",
            entities: [EDboard_1.EDboard, YearGoal_1.YearGoal, YearToMonthMN_1.YearToMonthMN, MonthGoal_1.MonthGoal],
            name: "default"
        })
        : typeorm_1.createConnection({
            type: process.env.TYPEORM_CONNECTION,
            host: process.env.TYPEORM_HOST,
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            database: process.env.TYPEORM_DATABASE,
            synchronize: true,
            logging: true,
            entities: [EDboard_1.EDboard, YearGoal_1.YearGoal, YearToMonthMN_1.YearToMonthMN, MonthGoal_1.MonthGoal],
            name: "default"
        });
});
//# sourceMappingURL=createTypeormConn.js.map