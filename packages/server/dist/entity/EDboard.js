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
let EDboard = class EDboard extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], EDboard.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 55, charset: "utf8mb4", collation: "utf8mb4_unicode_ci" }),
    __metadata("design:type", String)
], EDboard.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: "text", nullable: true, charset: "utf8mb4", collation: "utf8mb4_unicode_ci" }),
    __metadata("design:type", String)
], EDboard.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(_type => YearGoal_1.YearGoal, yeargoal => yeargoal.edboard),
    __metadata("design:type", Array)
], EDboard.prototype, "yeargoals", void 0);
EDboard = __decorate([
    typeorm_1.Entity("edboards")
], EDboard);
exports.EDboard = EDboard;
//# sourceMappingURL=EDboard.js.map