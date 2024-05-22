import {Estudiante} from "../Entity/Estudiante";
import {EstudianteService} from "../Service/EstudianteService";
import {ABaseController} from "./ABaseController";

export class EstudianteController extends ABaseController<Estudiante> {
  constructor(EstudianteService: EstudianteService) {
    super(EstudianteService, "Estudiante");
  }
}
