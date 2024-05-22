import {Estudiante} from "../Entity/Estudiante";
import {Rol} from "../Entity/Rol";
import {IBaseRepository} from "./IBaseRepository";

export interface IEstudianteRepository extends IBaseRepository<Estudiante> {}
