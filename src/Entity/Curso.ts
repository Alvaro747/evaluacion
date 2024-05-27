import {Entity, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import {ABaseEntity} from "./ABaseEntity";
import {Sede} from "./Sede";
import {Matricula} from "./Matricula";

@Entity("curso")
export class Curso extends ABaseEntity {
  @ManyToOne(() => Sede, {nullable: false, eager: true})
  @JoinColumn({name: "sede"})
  sede!: Sede;

  @Column({length: 100, nullable: false, name: "nombre"})
  nombre!: string;

  @Column({nullable: false, name: "cupo"})
  cupo!: number;

  @Column({nullable: false, name: "horario_inicio"})
  horarioInicio!: string;

  @Column({nullable: false, name: "horario_fin"})
  horarioFin!: string;

  @Column({length: 100, nullable: false, name: "dias"})
  dias!: string;

  @OneToMany(() => Matricula, (matricula) => matricula.curso)
  matriculas!: Matricula[];
}
