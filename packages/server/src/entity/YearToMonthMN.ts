import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  // ManyToMany
  // JoinColumn,
  // Generated,
} from "typeorm";
import { YearGoal } from "./YearGoal";
import { MonthGoal } from "./MonthGoal";


@Entity("YearToMonthMN")
export class YearToMonthMN extends BaseEntity {
  @PrimaryGeneratedColumn() 
  public id!: string;

  @Column()
  yearid!: string;

  @Column()
  monthid!: string;

  @Column("char", { length: 100, nullable: true })
  description: string;

  @ManyToOne(_type => YearGoal, yeargoal => yeargoal.ymmns)
  yeargoal!: YearGoal;

  @ManyToOne(_type => MonthGoal, monthgoal => monthgoal.ymmns)
  monthgoal!: MonthGoal;

}
