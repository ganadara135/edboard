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
const EDboard_1 = require("./EDboard");
const YearToMonthMN_1 = require("./YearToMonthMN");
let YearGoal = class YearGoal extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], YearGoal.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("int", { nullable: true }),
    __metadata("design:type", Number)
], YearGoal.prototype, "year", void 0);
__decorate([
    typeorm_1.Column("int", { nullable: true }),
    __metadata("design:type", Number)
], YearGoal.prototype, "goal", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 255, nullable: true }),
    __metadata("design:type", String)
], YearGoal.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToOne(_type => EDboard_1.EDboard, edboard => edboard.yeargoals),
    __metadata("design:type", EDboard_1.EDboard)
], YearGoal.prototype, "edboard", void 0);
__decorate([
    typeorm_1.OneToMany(_type => YearToMonthMN_1.YearToMonthMN, ymnn => ymnn.ygid),
    __metadata("design:type", Array)
], YearGoal.prototype, "ymmns", void 0);
YearGoal = __decorate([
    typeorm_1.Entity("YearGoals")
], YearGoal);
exports.YearGoal = YearGoal;
//# sourceMappingURL=YearGoal.js.map