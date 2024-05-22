import {RolModulo} from "../Entity/RolModulo";
import {RolModuloService} from "../Service/RolModuloService";
import {ABaseController} from "./ABaseController";

export class RolModuloController extends ABaseController<RolModulo> {
  constructor(RolModuloService: RolModuloService) {
    super(RolModuloService, "RolModulo");
  }
}
