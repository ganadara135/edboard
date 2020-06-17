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
const MonthGoal_1 = require("../../entity/MonthGoal");
const YearGoal_1 = require("../../entity/YearGoal");
const YearToMonthMN_1 = require("../../entity/YearToMonthMN");
exports.resolvers = {
    Mutation: {
        insertMonth: (_, args, __, ___) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("args : ", args);
            const yearVal = yield YearGoal_1.YearGoal.findOne({ year: args.yearName });
            console.log('yearVal :', yearVal);
            if (!yearVal) {
                return {
                    ok: false,
                    message: "yearName is null or undefined",
                    path: "args.yearName"
                };
            }
            const ymMN = new YearToMonthMN_1.YearToMonthMN();
            const monthGoal = new MonthGoal_1.MonthGoal();
            monthGoal.goal = args === null || args === void 0 ? void 0 : args.goal;
            monthGoal.month = args === null || args === void 0 ? void 0 : args.month;
            monthGoal.ymmns = [ymMN];
            yield monthGoal.save();
            ymMN.ygid = yearVal;
            ymMN.mgid = monthGoal;
            yield ymMN.save();
            console.log("ymMN: ", ymMN);
            console.log("monthGoal: ", monthGoal);
            return {
                ok: true,
                message: 'succeed',
                path: 'insertMonth Mutation'
            };
        })
    },
    Query: {
        monthGoalQuery: () => __awaiter(void 0, void 0, void 0, function* () {
            const returnVal = yield MonthGoal_1.MonthGoal.find({
                relations: ['ymmns', 'ymmns.yeargoal', 'ymmns.monthgoal'],
            });
            return returnVal;
        })
    }
};
//# sourceMappingURL=resolvers.js.map