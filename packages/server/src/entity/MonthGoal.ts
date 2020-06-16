import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,

  OneToMany,
  // ManyToMany,
  // JoinTable,
  // ManyToMany
  // JoinColumn,
  // Generated,
} from "typeorm";

import { YearToMonthMN } from "./YearToMonthMN";
import { __Type } from "graphql";
// import { YearGoal } from "./YearGoal";


@Entity("MonthGoals")
export class MonthGoal extends BaseEntity {
  @PrimaryGeneratedColumn() 
  public id!: number;

  @Column("int")
  month!: number;

  @Column("int",)
  goal?: number;

  @OneToMany(_type => YearToMonthMN, ymnn => ymnn.mgid)
  ymmns: YearToMonthMN[];

  // @ManyToMany(_type => YearGoal, yeargoal => yeargoal.monthgoals)
  // // @JoinTable()
  // yeargoals: YearGoal[];

  //  @JoinColumn decorator, which indicates that this side of the relationship will own the relationship. 
  // Relations can be unidirectional or bidirectional
}
