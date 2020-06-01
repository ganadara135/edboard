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


@Entity("MonthGoal")
export class MonthGoal extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") 
  public id!: string;

  @Column("varchar", { length: 13 })
  month!: string;

  @Column("varchar", { length: 100 })
  goal: string;

  @OneToMany(_type => YearToMonthMN, ymnn => ymnn.monthgoal)
  ymmns: YearToMonthMN[];
}
