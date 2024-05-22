import {Entity, Column} from "typeorm";
import {ABaseEntity} from "./ABaseEntity";

@Entity("rol")
export class Rol extends ABaseEntity {
  @Column({name: "name", length: 50, nullable: false})
  name!: string;

  @Column({name: "descripcion", length: 50, nullable: false})
  description!: string;
}
