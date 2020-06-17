"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const YearGoal_1 = require("./YearGoal");
const MonthGoal_1 = require("./MonthGoal");
let YearToMonthMN = class YearToMonthMN extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], YearToMonthMN.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("char", { length: 100, nullable: true }),
    __metadata("design:type", String)
], YearToMonthMN.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToOne(_type => YearGoal_1.YearGoal, yeargoal => yeargoal.ymmns),
    __metadata("design:type", YearGoal_1.YearGoal)
], YearToMonthMN.prototype, "ygid", void 0);
__decorate([
    typeorm_1.ManyToOne(_type => MonthGoal_1.MonthGoal, monthgoal => monthgoal.ymmns),
    __metadata("design:type", MonthGoal_1.MonthGoal)
], YearToMonthMN.prototype, "mgid", void 0);
YearToMonthMN = __decorate([
    typeorm_1.Entity("YearToMonthMNs")
], YearToMonthMN);
exports.YearToMonthMN = YearToMonthMN;
//# sourceMappingURL=YearToMonthMN.js.map