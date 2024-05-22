import {DataSource} from "typeorm";
import {ModuloVista} from "../Entity/ModuloVista";
import {IModuloVistaService} from "../IService/IModuloVistaService";
import {ABaseService} from "./ABaseService";
import {IModuloVistaRepository} from "../IRepository/IModuloVistaRepository";
import {Modulo} from "../Entity/Modulo";
import {Vista} from "../Entity/Vista";
import {IModuloRepository} from "../IRepository/IModuloRepository";
import {IVistaRepository} from "../IRepository/IVistaRepository";

export class ModuloVistaService
  extends ABaseService<ModuloVista>
  implements IModuloVistaService
{
  protected repository: IModuloVistaRepository;
  protected ModuloRepository: IModuloRepository;
  protected VistaRepository: IVistaRepository;

  constructor(dataSource: DataSource) {
    super();
    this.repository = dataSource.getRepository(ModuloVista);
    this.ModuloRepository = dataSource.getRepository(Modulo);
    this.VistaRepository = dataSource.getRepository(Vista);
  }

  async save(moduloVista: ModuloVista): Promise<ModuloVista> {
    const modulo = await this.ModuloRepository.findOne({
      where: {id: moduloVista.modulo.id},
    });

    const vista = await this.VistaRepository.findOne({
      where: {id: moduloVista.vista.id},
    });

    if (!modulo || !vista) {
      throw new Error("Modulo or Vista not found");
    }

    moduloVista.modulo = modulo;
    moduloVista.vista = vista;
    return await super.save(moduloVista);
  }
}
