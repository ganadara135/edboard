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
exports.resolvers = {
    Query: {
        viewListingMN: (_) => __awaiter(void 0, void 0, void 0, function* () {
            const mnInfo = yield YearToMonthMN_1.YearToMonthMN.find({
                relations: ['ygid', 'mgid', 'ygid.ymmns', 'mgid.ymmns'],
            });
            console.log("mnInfo: ", mnInfo);
            return {
                mnInfo: mnInfo,
                monthInfo: null,
                yearInfo: null
            };
        })
    }
};
//# sourceMappingURL=resolvers.js.map