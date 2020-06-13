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
const MonthGoal_1 = require("../../entity/MonthGoal");
exports.resolvers = {
    Mutation: {
        insertGoal: (_, args, __, ___) => __awaiter(void 0, void 0, void 0, function* () {
            const { name, description, yeargoals } = args;
            console.log("체크: ", name, description, yeargoals);
            console.log('yeargoals: ', yeargoals);
            console.log('args: ', args);
            const yearGoalVal = yeargoals === null || yeargoals === void 0 ? void 0 : yeargoals.pop();
            const yr = new YearGoal_1.YearGoal();
            yr.goal = yearGoalVal === null || yearGoalVal === void 0 ? void 0 : yearGoalVal.goal;
            yr.description = yearGoalVal === null || yearGoalVal === void 0 ? void 0 : yearGoalVal.description;
            yield yr.save();
            const ed = new EDboard_1.EDboard();
            ed.name = name;
            ed.description = description;
            ed.yeargoals = [yr];
            yield ed.save();
            console.log('ed: ', ed);
            console.log('ed.yeargoals: ', ed.yeargoals);
        })
    },
    Query: {
        edboardQuery: () => __awaiter(void 0, void 0, void 0, function* () {
            const returnVal = yield EDboard_1.EDboard.find({
                relations: ['yeargoals'],
            });
            return returnVal;
        }),
        yeargoalQuery: () => __awaiter(void 0, void 0, void 0, function* () {
            const returnVal = yield YearGoal_1.YearGoal.find({
                relations: ['edboard', 'ymmns']
            });
            console.log("chk : ", returnVal);
            return returnVal;
        }),
        monthgoalQuery: () => __awaiter(void 0, void 0, void 0, function* () {
            const returnVal = yield MonthGoal_1.MonthGoal.find();
            console.log("chk : ", returnVal);
            return returnVal;
        })
    }
};
//# sourceMappingURL=resolvers.js.map