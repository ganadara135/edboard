import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  // ManyToMany,
  // JoinTable,

  // JoinColumn,
  // Generated,
} from "typeorm";
import { EDboard } from "./EDboard";
import { YearToMonthMN } from "./YearToMonthMN";
import { __Type } from "graphql";
// import { MonthGoal } from "./MonthGoal";


@Entity("YearGoals")
export class YearGoal extends BaseEntity {
  @PrimaryGeneratedColumn() id!: number;

  @Column("int", { nullable: true })
  year?: number;

  @Column("int", { nullable: true })
  goal?: number;

  @Column("varchar", { length: 255, nullable: true })
  description?: string;

  @ManyToOne(_type => EDboard, edboard => edboard.yeargoals)
  edboard: EDboard;

  @OneToMany(_type => YearToMonthMN, ymnn => ymnn.ygid)
  ymmns?: YearToMonthMN[];    // 테이블엔 속성 생성 안됨


  // @ManyToMany(_type => MonthGoal, monthgoal => monthgoal.yeargoals)
  // @JoinTable()
  // monthgoals: MonthGoal[]
}
