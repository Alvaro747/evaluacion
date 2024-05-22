import {UserRol} from "../Entity/UserRol";
import {UserRolService} from "../Service/UserRolService";
import {ABaseController} from "./ABaseController";

export class UserRolController extends ABaseController<UserRol> {
  constructor(UserRolService: UserRolService) {
    super(UserRolService, "UserRol");
  }
}
