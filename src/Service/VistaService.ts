import {DataSource} from "typeorm";
import {Vista} from "../Entity/Vista";
import {IVistaService} from "../IService/IVistaService";
import {ABaseService} from "./ABaseService";
import {IVistaRepository} from "../IRepository/IVistaRepository";

export class VistaService
  extends ABaseService<Vista>
  implements IVistaService
{
  protected repository: IVistaRepository;

  constructor(dataSource: DataSource) {
    super();
    this.repository = dataSource.getRepository(Vista);
  }
}
