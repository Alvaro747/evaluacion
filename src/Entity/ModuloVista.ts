import {Entity, ManyToOne, JoinColumn} from "typeorm";
import {ABaseEntity} from "./ABaseEntity";
import {Modulo} from "./Modulo";
import {Vista} from "./Vista";

@Entity("modulo_vista")
export class ModuloVista extends ABaseEntity {
  @ManyToOne(() => Modulo, {eager: true, nullable: false})
  @JoinColumn({name: "modulo"})
  modulo!: Modulo;

  @ManyToOne(() => Vista, {eager: true, nullable: false})
  @JoinColumn({name: "vista"})
  vista!: Vista;
}
