import {Entity, Column, ManyToOne, JoinColumn} from "typeorm";
import {ABaseEntity} from "./ABaseEntity";
import {Curso} from "./Curso";
import {Estudiante} from "./Estudiante";

@Entity("matricula")
export class Matricula extends ABaseEntity {
  @ManyToOne(() => Curso, {nullable: false})
  @JoinColumn({name: "curso"})
  curso!: Curso;

  @ManyToOne(() => Estudiante, {nullable: false})
  @JoinColumn({name: "estudiante"})
  estudiante!: Estudiante;

  @Column({type: "date", nullable: false, name: "fecha_matricula"})
  fechaMatricula!: Date;
}
