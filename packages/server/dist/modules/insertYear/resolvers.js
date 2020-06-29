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
const EDboard_1 = require("../../entity/EDboard");
const YearGoal_1 = require("../../entity/YearGoal");
const YearToMonthMN_1 = require("../../entity/YearToMonthMN");
exports.resolvers = {
    Mutation: {
        insertYear: (_, args, __, ___) => __awaiter(void 0, void 0, void 0, function* () {
            const { edboardName, yeargoals } = args;
            console.log("args: ", args);
            if (!yeargoals || !edboardName) {
                return {
                    ok: false,
                    message: "input value is null or undefined",
                    path: "yeargoals edboardName"
                };
            }
            const edboard = yield EDboard_1.EDboard.findOne({ name: edboardName });
            console.log("chk edboard: ", edboard);
            if (!edboard) {
                return {
                    ok: false,
                    message: "EDBoard name is empty or duplicated",
                    path: "edboard.id"
                };
            }
            const yeargoalchk = yield YearGoal_1.YearGoal.findOne({ year: yeargoals.year });
            console.log("chk yeargoalchk: ", yeargoalchk);
            if (yeargoalchk) {
                return {
                    ok: false,
                    message: yeargoalchk.year + " is already inputed",
                    path: "YearGoalInput.year"
                };
            }
            const yearGoalVal = yeargoals;
            const yr = new YearGoal_1.YearGoal();
            yr.goal = yearGoalVal === null || yearGoalVal === void 0 ? void 0 : yearGoalVal.goal;
            yr.year = yearGoalVal === null || yearGoalVal === void 0 ? void 0 : yearGoalVal.year;
            yr.description = yearGoalVal === null || yearGoalVal === void 0 ? void 0 : yearGoalVal.description;
            yr.edboard = edboard;
            yield yr.save();
            return {
                ok: true,
                message: 'succeed',
                path: 'insertYear Mutation'
            };
        }),
    },
    Query: {
        yearGoalQuery: () => __awaiter(void 0, void 0, void 0, function* () {
            const returnVal = yield YearGoal_1.YearGoal.find({
                relations: ['edboard', 'ymmns', 'ymmns.ygid']
            });
            console.log("chk : ", returnVal);
            return returnVal;
        }),
        yearGoalDeepQuery: () => __awaiter(void 0, void 0, void 0, function* () {
            const returnVal = yield YearToMonthMN_1.YearToMonthMN.find({
                relations: ['ygid', 'mgid',],
            });
            console.log("chk : ", returnVal);
            return returnVal;
        }),
    }
};
//# sourceMappingURL=resolvers.js.map