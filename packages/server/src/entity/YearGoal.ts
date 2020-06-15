import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  // ManyToMany
  // JoinColumn,
  // Generated,
} from "typeorm";
import { EDboard } from "./EDboard";
import { YearToMonthMN } from "./YearToMonthMN";


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

  @OneToMany(_type => YearToMonthMN, ymnn => ymnn.yeargoal)
  ymmns?: YearToMonthMN[];
}
