// import * as bcrypt from "bcryptjs";
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  // BeforeInsert,
  OneToMany
} from "typeorm";
import { YearGoal } from "./YearGoal";

@Entity("DBboard")
export class EDboard extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id!: string;

  @Column("varchar", { length: 55 })
  name: string;

  @Column("text") 
  description: string;

  @OneToMany(_type => YearGoal, yeargoal => yeargoal.edboard)
  yeargoals: YearGoal[];

  // @BeforeInsert()
  // async hashPasswordBeforeInsert() {
  //   this.password = await bcrypt.hash(this.password, 10);
  // }
}
