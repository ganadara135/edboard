import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  // Generated,
} from "typeorm";
import { User } from "./User";


@Entity("listings")
export class Listing extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id!: string;

  @Column("varchar", { length: 100 })
  name: string;

  @Column("varchar", { length: 100 })
  category: string;

  @Column("text") pictureUrl: string;

  @Column("varchar", { length: 255 })
  description: string;

  @Column("int" ) price: number;

  @Column("int" ) beds: number;

  @Column("int" ) guests: number;

  @Column("double precision") latitude: number;

  @Column("double precision") longitude: number;

  // @Column("text", { array: true, nullable: true})
  @Column("text", { nullable: true})
  amenities: string[];

  // Only for postgres,  uuid type
  @Column("uuid") userId: string;   // 작동하네??   in Mariadb

  // For MySQL/MariaDB
  // @Column()
  // @Generated("uuid")
  // userId: string;

  // @Column("char", { length: 10, nullable: true })
  // userId!: string;

  @ManyToOne(() => User, user => user.listings)
  @JoinColumn({ name: "userId" })
  user: User;
  
}
