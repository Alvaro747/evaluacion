import {Entity, Column, ManyToOne, JoinColumn} from "typeorm";
import {ABaseEntity} from "./ABaseEntity";
import {Person} from "./Person";

@Entity("user")
export class User extends ABaseEntity {
  @Column({name: "user", length: 50, nullable: false, unique: true})
  user!: string;

  @Column({name: "password", length: 250, nullable: false})
  password!: string;

  @ManyToOne(() => Person, {eager: true, nullable: false})
  @JoinColumn({name: "person"})
  person!: Person;
}
