import {Entity, Column, OneToOne} from "typeorm";
import {ABaseEntity} from "./ABaseEntity";
import {User} from "./User";

@Entity("person")
export class Person extends ABaseEntity {
  @Column({length: 50, nullable: false, name: "name"})
  name!: string;

  @Column({name: "last_name", length: 50, nullable: false})
  lastName!: string;

  @Column({nullable: false, name: "age"})
  edad!: number;

  @OneToOne(() => User, (user) => user.person)
  user!: User;
}
