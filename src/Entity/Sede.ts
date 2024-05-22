import {Entity, Column} from "typeorm";
import {ABaseEntity} from "./ABaseEntity";

@Entity("sede")
export class Sede extends ABaseEntity {
  @Column({length: 50, nullable: false, name: "nombre"})
  nombre!: string;
}
