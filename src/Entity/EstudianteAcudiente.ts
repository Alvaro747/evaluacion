import {Entity, ManyToOne, JoinColumn, Column} from "typeorm";
import {ABaseEntity} from "./ABaseEntity";
import {Acudiente} from "./Acudiente";
import {Estudiante} from "./Estudiante";

@Entity("estudiante_acudiente")
export class EstudianteAcudiente extends ABaseEntity {
  @ManyToOne(() => Acudiente, {nullable: false})
  @JoinColumn({name: "acudiente"})
  acudiente!: Acudiente;

  @ManyToOne(() => Estudiante, {nullable: false})
  @JoinColumn({name: "estudiante"})
  estudiante!: Estudiante;
}
