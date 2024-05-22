import {DataSource} from "typeorm";
import {Modulo} from "../Entity/Modulo";
import {IModuloService} from "../IService/IModuloService";
import {ABaseService} from "./ABaseService";
import {IModuloRepository} from "../IRepository/IModuloRepository";

export class ModuloService
  extends ABaseService<Modulo>
  implements IModuloService
{
  protected repository: IModuloRepository;

  constructor(dataSource: DataSource) {
    super();
    this.repository = dataSource.getRepository(Modulo);
  }
}
