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
exports.resolvers = {
    Mutation: {
        insertGoal: (parent, args, _) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("call inserGoal() hot reloading test");
            console.log("EDboard: ", EDboard_1.EDboard.name);
            console.log("YearGoal: ", YearGoal_1.YearGoal.name);
            console.log('parent: ', parent);
            console.log('args: ', args);
            const { name, description } = args;
            console.log(name, description);
            return null;
        })
    }
};
//# sourceMappingURL=resolvers.js.map