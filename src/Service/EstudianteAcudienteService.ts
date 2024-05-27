import {ABaseService} from "./ABaseService";
import {DataSource} from "typeorm";
import {EstudianteAcudiente} from "../Entity/EstudianteAcudiente";
import {IEstudianteAcudienteService} from "../IService/IEstudianteAcudienteService";
import {IEstudianteAcudienteRepository} from "../IRepository/EstudianteAcudienteRepository";
import {Estudiante} from "../Entity/Estudiante";
import {Acudiente} from "../Entity/Acudiente";
import {IEstudianteRepository} from "../IRepository/IEstudianteRepository";
import {IAcudienteRepository} from "../IRepository/AcudienteRepository";

export class EstudianteAcudienteService
  extends ABaseService<EstudianteAcudiente>
  implements IEstudianteAcudienteService
{
  protected repository: IEstudianteAcudienteRepository;
  protected EstudianteRepository: IEstudianteRepository;
  protected AcudienteRepository: IAcudienteRepository;

  constructor(dataSource: DataSource) {
    super();
    this.repository = dataSource.getRepository(EstudianteAcudiente);
    this.EstudianteRepository = dataSource.getRepository(Estudiante);
    this.AcudienteRepository = dataSource.getRepository(Acudiente);
  }

  async save(
    estudianteAcudiente: EstudianteAcudiente
  ): Promise<EstudianteAcudiente> {
    const estudiante = await this.EstudianteRepository.findOne({
      where: {id: estudianteAcudiente.estudiante.id},
    });

    const acudiente = await this.AcudienteRepository.findOne({
      where: {id: estudianteAcudiente.acudiente.id},
    });

    if (!estudiante || !acudiente) {
      throw new Error("Estudiante or Acudiente not found");
    }

    estudianteAcudiente.estudiante = estudiante;
    estudianteAcudiente.acudiente = acudiente;
    return await super.save(estudianteAcudiente);
  }

  async findByStateTrue(): Promise<EstudianteAcudiente[]> {
    const option = {state: true};
    return await this.repository.find({
      where: option,
      relations: ["estudiante", "acudiente"],
    });
  }
}
