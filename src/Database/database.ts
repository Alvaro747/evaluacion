import {DataSource} from "typeorm";
import {Person} from "../Entity/Person";
import {User} from "../Entity/User";
import {Modulo} from "../Entity/Modulo";
import {Vista} from "../Entity/Vista";
import {ModuloVista} from "../Entity/ModuloVista";
import {Rol} from "../Entity/Rol";
import {UserRol} from "../Entity/UserRol";
import {RolModulo} from "../Entity/RolModulo";
import {Acudiente} from "../Entity/Acudiente";
import {Curso} from "../Entity/Curso";
import {Estudiante} from "../Entity/Estudiante";
import {EstudianteAcudiente} from "../Entity/EstudianteAcudiente";
import {Matricula} from "../Entity/Matricula";
import {Sede} from "../Entity/Sede";

interface Options {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export function AppDataSource(options: Options) {
  return new DataSource({
    type: "postgres",
    host: options.host,
    port: options.port,
    username: options.username,
    password: options.password,
    database: options.database,
    synchronize: true,
    logging: false,
    entities: [
      Person,
      User,
      Modulo,
      Vista,
      ModuloVista,
      Rol,
      UserRol,
      RolModulo,
      Acudiente,
      Curso,
      Estudiante,
      EstudianteAcudiente,
      Matricula,
      Sede,
    ],
    subscribers: [],
    migrations: [],
    ssl: true,
  });
}
