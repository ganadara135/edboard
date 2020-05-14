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
        deleteListing: (_, { id }, { session }) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(session);
            const listing = yield Listing_1.Listing.findOne({ where: { id } });
            if (!listing) {
                throw new Error("does not exist");
            }
            if (session.userId !== listing.userId) {
                console.log(`this user ${session.userId} is trying to delete a listing they don't own`);
                throw new Error("not authorized");
            }
            yield Listing_1.Listing.remove(listing);
            return true;
        })
    }
};
//# sourceMappingURL=resolvers.js.map