import {Entity, ManyToOne, JoinColumn} from "typeorm";
import {ABaseEntity} from "./ABaseEntity";
import {Rol} from "./Rol";
import {Modulo} from "./Modulo";

@Entity("rol_modulo")
export class RolModulo extends ABaseEntity {
  @ManyToOne(() => Rol, {eager: true, nullable: false})
  @JoinColumn({name: "rol"})
  rol!: Rol;

  @ManyToOne(() => Modulo, {eager: true, nullable: false})
  @JoinColumn({name: "modulo"})
  modulo!: Modulo;
}
