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
const YearGoal_1 = require("../../entity/YearGoal");
exports.resolvers = {
    Query: {
        listYearQuery: (_, { yearName }) => __awaiter(void 0, void 0, void 0, function* () {
            let returnVal;
            if (yearName === 1970) {
                returnVal = yield YearGoal_1.YearGoal.find();
            }
            else {
                returnVal = yield YearGoal_1.YearGoal.find({
                    where: { year: yearName }
                });
            }
            console.log("chk : ", returnVal);
            const yearListVal = returnVal.map(val => val.year);
            return yearListVal;
        })
    }
};
//# sourceMappingURL=resolvers.js.map