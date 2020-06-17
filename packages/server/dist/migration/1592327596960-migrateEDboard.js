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
class migrateEDboard1592327596960 {
    constructor() {
        this.name = 'migrateEDboard1592327596960';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `listings` CHANGE `latitude` `latitude` double NOT NULL");
            yield queryRunner.query("ALTER TABLE `listings` CHANGE `longitude` `longitude` double NOT NULL");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `listings` CHANGE `longitude` `longitude` double(22) NOT NULL");
            yield queryRunner.query("ALTER TABLE `listings` CHANGE `latitude` `latitude` double(22) NOT NULL");
        });
    }
}
exports.migrateEDboard1592327596960 = migrateEDboard1592327596960;
//# sourceMappingURL=1592327596960-migrateEDboard.js.map