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
class ListingUser1587111363594 {
    constructor() {
        this.name = 'ListingUser1587111363594';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "listings" ADD "userId" uuid NOT NULL`, undefined);
            yield queryRunner.query(`ALTER TABLE "listings" ADD CONSTRAINT "FK_45d5c4642c4cad0229da0ec22e7" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "listings" DROP CONSTRAINT "FK_45d5c4642c4cad0229da0ec22e7"`, undefined);
            yield queryRunner.query(`ALTER TABLE "listings" DROP COLUMN "userId"`, undefined);
        });
    }
}
exports.ListingUser1587111363594 = ListingUser1587111363594;
//# sourceMappingURL=1587111363594-ListingUser.js.map