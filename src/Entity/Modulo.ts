import {Entity, Column} from "typeorm";
import {ABaseEntity} from "./ABaseEntity";

@Entity("module")
export class Modulo extends ABaseEntity {
  @Column({length: 50, nullable: false, name: "name"})
  name!: string;

  @Column({length: 50, nullable: false, name: "description"})
  description!: string;

  @Column({nullable: true, name: "rute", type: "text"})
  rute!: string | null;
}
