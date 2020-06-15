import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,

  OneToMany
  // ManyToMany
  // JoinColumn,
  // Generated,
} from "typeorm";

import { YearToMonthMN } from "./YearToMonthMN";


@Entity("MonthGoals")
export class MonthGoal extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") 
  public id!: number;

  @Column("int")
  month!: number;

  @Column("int",)
  goal?: number;

  @OneToMany(_type => YearToMonthMN, ymnn => ymnn.monthgoal)
  ymmns: YearToMonthMN[];

  //  @JoinColumn decorator, which indicates that this side of the relationship will own the relationship. 
  // Relations can be unidirectional or bidirectional
}
