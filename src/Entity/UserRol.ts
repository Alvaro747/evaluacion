import {Entity, ManyToOne, JoinColumn} from "typeorm";
import {ABaseEntity} from "./ABaseEntity";
import {User} from "./User";
import {Rol} from "./Rol";

@Entity("user_rol")
export class UserRol extends ABaseEntity {
  @ManyToOne(() => User, {eager: true, nullable: false})
  @JoinColumn({name: "user"})
  user!: User;

  @ManyToOne(() => Rol, {eager: true, nullable: false})
  @JoinColumn({name: "rol"})
  rol!: Rol;
}
