import {DataSource} from "typeorm";
import {Matricula} from "../Entity/Matricula";
import {IMatriculaService} from "../IService/IMatriculaService";
import {ABaseService} from "./ABaseService";
import {IMatriculaRepository} from "../IRepository/MatriculaRepository";
import {Estudiante} from "../Entity/Estudiante";
import {Curso} from "../Entity/Curso";
import {IEstudianteRepository} from "../IRepository/IEstudianteRepository";
import {ICursoRepository} from "../IRepository/CursoRepository";

export class MatriculaService
  extends ABaseService<Matricula>
  implements IMatriculaService
{
  protected repository: IMatriculaRepository;
  protected EstudianteRepository: IEstudianteRepository;
  protected CursoRepository: ICursoRepository;

  constructor(dataSource: DataSource) {
    super();
    this.repository = dataSource.getRepository(Matricula);
    this.EstudianteRepository = dataSource.getRepository(Estudiante);
    this.CursoRepository = dataSource.getRepository(Curso);
  }

  async save(matricula: Matricula): Promise<Matricula> {
    const estudiante = await this.EstudianteRepository.findOne({
      where: {id: matricula.estudiante.id},
    });

    const curso = await this.CursoRepository.findOne({
      where: {id: matricula.curso.id},
    });

    if (!estudiante || !curso) {
      throw new Error("Estudiante or Curso not found");
    }

    matricula.estudiante = estudiante;
    matricula.curso = curso;
    return await super.save(matricula);
  }

  async findByStateTrue(): Promise<Matricula[]> {
    const option = {state: true};
    return await this.repository.find({
      where: option,
      relations: ["estudiante", "curso"],
    });
  }
}
