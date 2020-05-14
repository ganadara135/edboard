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
class ListingTable1587109822597 {
    constructor() {
        this.name = 'ListingTable1587109822597';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "listings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "pictureUrl" text NOT NULL, "description" character varying(255) NOT NULL, "price" integer NOT NULL, "beds" integer NOT NULL, "quests" integer NOT NULL, "latitude" double precision NOT NULL, "longitude" double precision NOT NULL, "amenities" text array NOT NULL, CONSTRAINT "PK_520ecac6c99ec90bcf5a603cdcb" PRIMARY KEY ("id"))`, undefined);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "listings"`, undefined);
        });
    }
}
exports.ListingTable1587109822597 = ListingTable1587109822597;
//# sourceMappingURL=1587109822597-ListingTable.js.map