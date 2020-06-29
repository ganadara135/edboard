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
const YearToMonthMN_1 = require("../../entity/YearToMonthMN");
const YearGoal_1 = require("../../entity/YearGoal");
const MonthGoal_1 = require("../../entity/MonthGoal");
const typeorm_1 = require("typeorm");
exports.resolvers = {
    Query: {
        viewListing: (_, { yearName }) => __awaiter(void 0, void 0, void 0, function* () {
            const ordered = yield typeorm_1.getConnection().createQueryBuilder()
                .select("mn")
                .addSelect("y")
                .addSelect("m")
                .from(YearToMonthMN_1.YearToMonthMN, "mn")
                .innerJoin(YearGoal_1.YearGoal, "y", "mn.ygid = y.id")
                .innerJoin(MonthGoal_1.MonthGoal, "m", "mn.mgid = m.id")
                .where("y.year = :pyearName", { pyearName: yearName })
                .getRawMany();
            console.log("ordered: ", ordered);
            return {
                ordered: ordered,
            };
        })
    }
};
//# sourceMappingURL=resolvers.js.map