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
exports.resolvers = {
    Mutation: {
        insertGoal: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("call inserGoal()");
            console.log("EDboard: ", EDboard_1.EDboard.name);
            console.log('parent: ', parent);
            console.log('args: ', args);
            console.log('context: ', context);
            console.log('info: ', info);
            return null;
        })
    }
};
//# sourceMappingURL=resolvers.js.map