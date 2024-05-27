import {Entity, Column, ManyToMany} from "typeorm";
import {ABaseEntity} from "./ABaseEntity";
import {Acudiente} from "./Acudiente";

@Entity("estudiante")
export class Estudiante extends ABaseEntity {
  @Column({length: 50, nullable: false, name: "nombres"})
  nombres!: string;

  @Column({length: 50, nullable: false, name: "identificacion"})
  identificacion!: string;

  @Column({length: 50, nullable: false, name: "tipo_identificacion"})
  tipoIdentificacion!: string;

  @Column({type: "date", nullable: false, name: "fecha_nacimiento"})
  fechaNacimiento!: Date;

  @Column({nullable: false, name: "edad"})
  edad!: number;

  @Column({nullable: false, name: "estrato"})
  estrato!: number;

  @Column({length: 100, nullable: false, name: "direccion"})
  direccion!: string;

  @Column({length: 100, nullable: false, name: "barrio"})
  barrio!: string;

  @Column({length: 20, nullable: false, name: "telefono"})
  telefono!: string;

  @Column({length: 20, nullable: false, name: "celular"})
  celular!: string;

  @Column({length: 100, nullable: false, name: "institucion_educativa"})
  institucionEducativa!: string;

  @Column({length: 50, nullable: false, name: "grado"})
  grado!: string;

  @Column({length: 50, nullable: false, name: "jornada"})
  jornada!: string;

  @Column({length: 100, nullable: false, name: "email"})
  email!: string;

  @Column({length: 10, nullable: false, name: "rh"})
  rh!: string;

  @Column({length: 50, nullable: false, name: "eps"})
  eps!: string;

  @Column({type: "date", nullable: false, name: "fecha_ingreso"})
  fechaIngreso!: Date;

  @Column({type: "date", nullable: false, name: "fecha_renovacion"})
  fechaRenovacion!: Date;

  @Column({length: 100, nullable: false, name: "programa"})
  programa!: string;

  @Column({length: 50, nullable: false, name: "processo"})
  processo!: string;

  @ManyToMany(() => Acudiente, (acudiente) => acudiente.estudiantes)
  acudientes!: Acudiente[];
}
