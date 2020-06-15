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


@Entity("YearToMonthMNs")
export class YearToMonthMN extends BaseEntity {
  @PrimaryGeneratedColumn() 
  public id!: number;

  @Column()
  yearid!: number;

  @Column()
  monthid!: number;

  @Column("char", { length: 100, nullable: true })
  description: string;

  @ManyToOne(_type => YearGoal, yeargoal => yeargoal.ymmns)
  yeargoal!: YearGoal;

  @ManyToOne(_type => MonthGoal, monthgoal => monthgoal.ymmns)
  monthgoal!: MonthGoal;

}
