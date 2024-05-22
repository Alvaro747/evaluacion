import {EstudianteAcudiente} from "../Entity/EstudianteAcudiente";
import {EstudianteAcudienteService} from "../Service/EstudianteAcudienteService";
import {ABaseController} from "./ABaseController";

export class EstudianteAcudienteController extends ABaseController<EstudianteAcudiente> {
  constructor(EstudianteAcudienteService: EstudianteAcudienteService) {
    super(EstudianteAcudienteService, "EstudianteAcudiente");
  }
}
