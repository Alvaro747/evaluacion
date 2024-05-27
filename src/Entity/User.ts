import {Entity, Column, JoinColumn, OneToOne} from "typeorm";
import {ABaseEntity} from "./ABaseEntity";
import {Person} from "./Person";

@Entity("user")
export class User extends ABaseEntity {
  @Column({name: "user", length: 50, nullable: false, unique: true})
  user!: string;

  @Column({name: "password", length: 250, nullable: false})
  password!: string;

  @OneToOne(() => Person, {eager: true, nullable: false})
  @JoinColumn({name: "person"})
  person!: Person;
}
