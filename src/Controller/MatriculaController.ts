import {Matricula} from "../Entity/Matricula";
import {MatriculaService} from "../Service/MatriculaService";
import {ABaseController} from "./ABaseController";

export class MatriculaController extends ABaseController<Matricula> {
  constructor(MatriculaService: MatriculaService) {
    super(MatriculaService, "Matricula");
  }
}
