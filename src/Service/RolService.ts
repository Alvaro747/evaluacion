import {DataSource} from "typeorm";
import {Rol} from "../Entity/Rol";
import {IRolService} from "../IService/IRolService";
import {ABaseService} from "./ABaseService";
import {IRolRepository} from "../IRepository/IRolRepository";

export class RolService extends ABaseService<Rol> implements IRolService {
  protected repository: IRolRepository;

  constructor(dataSource: DataSource) {
    super();
    this.repository = dataSource.getRepository(Rol);
  }
}
