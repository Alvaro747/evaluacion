import {Rol} from "../Entity/Rol";
import {RolService} from "../Service/RolService";
import {ABaseController} from "./ABaseController";

export class RolController extends ABaseController<Rol> {
  constructor(RolService: RolService) {
    super(RolService, "Rol");
  }
}
