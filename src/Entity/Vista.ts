import {Entity, Column} from "typeorm";
import {ABaseEntity} from "./ABaseEntity";

@Entity("view")
export class Vista extends ABaseEntity {
  @Column({name: "name", length: 50, nullable: false})
  name!: string;

  @Column({name: "descripcion", length: 50, nullable: false})
  description!: string;

  @Column({name: "rute", nullable: true, type: "text"})
  rute!: string | null;
}
