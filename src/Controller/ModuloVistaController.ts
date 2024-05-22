import {ModuloVista} from "../Entity/ModuloVista";
import {ModuloVistaService} from "../Service/ModuloVistaService";
import {ABaseController} from "./ABaseController";

export class ModuloVistaController extends ABaseController<ModuloVista> {
  constructor(ModuloVistaService: ModuloVistaService) {
    super(ModuloVistaService, "ModuloVista");
  }
}
