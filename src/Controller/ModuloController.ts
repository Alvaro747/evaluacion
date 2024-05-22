import {Modulo} from "../Entity/Modulo";
import {ModuloService} from "../Service/ModuloService";
import {ABaseController} from "./ABaseController";

export class ModuloController extends ABaseController<Modulo> {
  constructor(ModuloService: ModuloService) {
    super(ModuloService, "Modulo");
  }
}
