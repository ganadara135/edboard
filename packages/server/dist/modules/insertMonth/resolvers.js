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
const typeorm_1 = require("typeorm");
exports.resolvers = {
    Mutation: {
        insertMonth: (_, args, __, ___) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("args : ", args);
            const yearVal = yield YearGoal_1.YearGoal.findOne({ year: args.yearName });
            console.log('chk yearVal :', yearVal);
            if (!yearVal) {
                return {
                    ok: false,
                    message: "yearName is null or undefined",
                    path: "args.yearName"
                };
            }
            const mnVal = yield typeorm_1.getRepository(MonthGoal_1.MonthGoal)
                .createQueryBuilder("monthgoals")
                .where((qb) => {
                const subQuery = qb.subQuery()
                    .select("mn.mgid")
                    .from(YearToMonthMN_1.YearToMonthMN, "mn")
                    .where("mn.ygid = :yeargoalId", { yeargoalId: yearVal.id })
                    .getQuery();
                return "monthgoals.id IN " + subQuery;
            })
                .andWhere("monthgoals.month = " + args.month)
                .getMany();
            console.log('chk mnVal :', mnVal);
            if (mnVal.length !== 0) {
                return {
                    ok: false,
                    message: "month or year are dupulicated",
                    path: "YearToMonthMN"
                };
            }
            const ymMN = new YearToMonthMN_1.YearToMonthMN();
            const monthGoal = new MonthGoal_1.MonthGoal();
            monthGoal.goal = args === null || args === void 0 ? void 0 : args.goal;
            monthGoal.month = args === null || args === void 0 ? void 0 : args.month;
            monthGoal.description = args === null || args === void 0 ? void 0 : args.description;
            console.log("chk myTimestamp :  ", (args === null || args === void 0 ? void 0 : args.yearName) + '-' + ((args === null || args === void 0 ? void 0 : args.month) + 1));
            monthGoal.myTimestamp = (args === null || args === void 0 ? void 0 : args.yearName) + '-' + ((args === null || args === void 0 ? void 0 : args.month) + 1);
            console.log("monthGoal.myTimestamp : ", monthGoal.myTimestamp);
            monthGoal.ymmns = [ymMN];
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