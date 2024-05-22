import {ABaseService} from "./ABaseService";
import {DataSource} from "typeorm";
import {Curso} from "../Entity/Curso";
import {ICursoService} from "../IService/ICursoService";
import {ICursoRepository} from "../IRepository/CursoRepository";
import {Sede} from "../Entity/Sede";
import {ISedeRepository} from "../IRepository/SedeRepository";

export class CursoService extends ABaseService<Curso> implements ICursoService {
  protected repository: ICursoRepository;
  protected SedeRepository: ISedeRepository;

  constructor(dataSource: DataSource) {
    super();
    this.repository = dataSource.getRepository(Curso);
    this.SedeRepository = dataSource.getRepository(Sede);
  }

  async save(curso: Curso): Promise<Curso> {
    const sede = await this.SedeRepository.findOne({
      where: {id: curso.sede.id},
    });

    if (!sede) {
      throw new Error("Sede not found");
    }

    curso.sede = sede;
    return await super.save(curso);
  }
}
