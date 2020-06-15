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

@Entity("edboards")
export class EDboard extends BaseEntity {
  @PrimaryGeneratedColumn() id!: number;

  @Column("varchar", { length: 55 })
  name?: string;

  @Column("text",{nullable: true}) 
  description?: string;

  // OneToMany 는 테이블에 칼럼은 생성 안 됨  
  @OneToMany(_type => YearGoal, yeargoal => yeargoal.edboard)
  yeargoals: YearGoal[];

  
  // @BeforeInsert()
  // async hashPasswordBeforeInsert() {
  //   this.password = await bcrypt.hash(this.password, 10);
  // }
}
