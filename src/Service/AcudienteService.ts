import {ABaseService} from "./ABaseService";
import {DataSource} from "typeorm";
import {Acudiente} from "../Entity/Acudiente";
import {IAcudienteService} from "../IService/IAcudienteService";
import {IAcudienteRepository} from "../IRepository/AcudienteRepository";

export class AcudienteService
  extends ABaseService<Acudiente>
  implements IAcudienteService
{
  protected repository: IAcudienteRepository;

  constructor(dataSource: DataSource) {
    super();
    this.repository = dataSource.getRepository(Acudiente);
  }
}
