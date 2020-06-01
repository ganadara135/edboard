import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany
  // ManyToMany
  // JoinColumn,
  // Generated,
} from "typeorm";
import { EDboard } from "./EDboard";
import { YearToMonthMN } from "./YearToMonthMN";


@Entity("YearGoal")
export class YearGoal extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id!: string;

  @Column("varchar", { length: 100 })
  goal: string;

  @Column("varchar", { length: 255 })
  description: string;


  // @Column("char", { length: 10, nullable: true })
  // userId!: string;

  @ManyToOne(_type => EDboard, edboard => edboard.yeargoals)
  edboard: EDboard;

  @OneToMany(_type => YearToMonthMN, ymnn => ymnn.yeargoal)
  ymmns: YearToMonthMN[];
}
