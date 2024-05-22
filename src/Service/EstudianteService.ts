import {DataSource} from "typeorm";
import {Estudiante} from "../Entity/Estudiante";
import {IEstudianteRepository} from "../IRepository/IEstudianteRepository";
import {IEstudianteService} from "../IService/IEstudianteService";
import {ABaseService} from "./ABaseService";

export class EstudianteService
  extends ABaseService<Estudiante>
  implements IEstudianteService
{
  protected repository: IEstudianteRepository;

  constructor(dataSource: DataSource) {
    super();
    this.repository = dataSource.getRepository(Estudiante);
  }
}
