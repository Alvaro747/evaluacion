import {Entity, Column, ManyToMany} from "typeorm";
import {ABaseEntity} from "./ABaseEntity";
import {Estudiante} from "./Estudiante";

@Entity("acudiente")
export class Acudiente extends ABaseEntity {
  @Column({length: 50, nullable: false, name: "nombres"})
  nombres!: string;

  @Column({length: 20, nullable: false, name: "telefono"})
  telefono!: string;

  @Column({length: 20, nullable: false, name: "celular"})
  celular!: string;

  @Column({length: 50, nullable: false, name: "ocupacion"})
  ocupacion!: string;

  @Column({length: 50, nullable: false, name: "parentesco"})
  parentesco!: string;

  @ManyToMany(() => Estudiante, (estudiante) => estudiante.acudientes)
  estudiantes!: Estudiante[];
}
