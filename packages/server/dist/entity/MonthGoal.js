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
const YearToMonthMN_1 = require("./YearToMonthMN");
let MonthGoal = class MonthGoal extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], MonthGoal.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], MonthGoal.prototype, "month", void 0);
__decorate([
    typeorm_1.Column({ type: 'timestamp', nullable: false }),
    __metadata("design:type", String)
], MonthGoal.prototype, "myTimestamp", void 0);
__decorate([
    typeorm_1.Column("float"),
    __metadata("design:type", Number)
], MonthGoal.prototype, "goal", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 255, nullable: true }),
    __metadata("design:type", String)
], MonthGoal.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(_type => YearToMonthMN_1.YearToMonthMN, ymnn => ymnn.mgid),
    __metadata("design:type", Array)
], MonthGoal.prototype, "ymmns", void 0);
MonthGoal = __decorate([
    typeorm_1.Entity("MonthGoals")
], MonthGoal);
exports.MonthGoal = MonthGoal;
//# sourceMappingURL=MonthGoal.js.map