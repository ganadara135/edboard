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
const Listing_1 = require("../../../entity/Listing");
exports.resolvers = {
    Mutation: {
        createListing: (_, { input }, { session }) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(session);
            const list = yield Listing_1.Listing.create(Object.assign(Object.assign({}, input), { name: "", pictureUrl: "", userId: session.userId })).save();
            console.log("list : ", list);
            Array.prototype.forEach.call(list, (el) => console.log("mmmm : ", el));
            return true;
        })
    }
};
//# sourceMappingURL=resolvers.js.map