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
        createEDBoard: (_, args, __, ___) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('args : ', args);
            if (!args.name) {
                return {
                    ok: false,
                    message: "edboard.name is null or undefined",
                    path: "args.name"
                };
            }
            const ed = new EDboard_1.EDboard();
            ed.name = args.name;
            ed.description = args.description;
            yield ed.save();
            console.log('ed: ', ed);
            console.log('ed.yeargoals: ', ed.yeargoals);
            return {
                ok: true,
                message: "Succeed",
                path: "createEDBoard Mutation"
            };
        })
    },
    Query: {
        edboardQuery: () => __awaiter(void 0, void 0, void 0, function* () {
            const returnVal = yield EDboard_1.EDboard.find({
                relations: ['yeargoals'],
            });
            return returnVal;
        }),
    }
};
//# sourceMappingURL=resolvers.js.map