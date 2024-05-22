import {Acudiente} from "../Entity/Acudiente";
import {AcudienteService} from "../Service/AcudienteService";
import {ABaseController} from "./ABaseController";

export class AcudienteController extends ABaseController<Acudiente> {
  constructor(AcudienteService: AcudienteService) {
    super(AcudienteService, "Acudiente");
  }
}
