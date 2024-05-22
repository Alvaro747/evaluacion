import {DataSource} from "typeorm";
import {RolModulo} from "../Entity/RolModulo";
import {IRolModuloService} from "../IService/IRolModuloService";
import {ABaseService} from "./ABaseService";
import {IRolModuloRepository} from "../IRepository/IRolModuloRepository";
import {Modulo} from "../Entity/Modulo";
import {Rol} from "../Entity/Rol";
import {IModuloRepository} from "../IRepository/IModuloRepository";
import {IRolRepository} from "../IRepository/IRolRepository";

export class RolModuloService
  extends ABaseService<RolModulo>
  implements IRolModuloService
{
  protected repository: IRolModuloRepository;
  protected ModuloRepository: IModuloRepository;
  protected RolRepository: IRolRepository;

  constructor(dataSource: DataSource) {
    super();
    this.repository = dataSource.getRepository(RolModulo);
    this.ModuloRepository = dataSource.getRepository(Modulo);
    this.RolRepository = dataSource.getRepository(Rol);
  }

  async save(rolModulo: RolModulo): Promise<RolModulo> {
    const modulo = await this.ModuloRepository.findOne({
      where: {id: rolModulo.modulo.id},
    });

    const rol = await this.RolRepository.findOne({
      where: {id: rolModulo.rol.id},
    });

    if (!modulo || !rol) {
      throw new Error("Modulo or Rol not found");
    }

    rolModulo.modulo = modulo;
    rolModulo.rol = rol;
    return await super.save(rolModulo);
  }
}
