import {Curso} from "../Entity/Curso";
import {CursoService} from "../Service/CursoService";
import {ABaseController} from "./ABaseController";

export class CursoController extends ABaseController<Curso> {
  constructor(CursoService: CursoService) {
    super(CursoService, "Curso");
  }
}
