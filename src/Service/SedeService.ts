import {DataSource} from "typeorm";
import {Sede} from "../Entity/Sede";
import {ISedeService} from "../IService/ISedeService";
import {ABaseService} from "./ABaseService";
import {ISedeRepository} from "../IRepository/SedeRepository";

export class SedeService extends ABaseService<Sede> implements ISedeService {
  protected repository: ISedeRepository;

  constructor(dataSource: DataSource) {
    super();
    this.repository = dataSource.getRepository(Sede);
  }
}
