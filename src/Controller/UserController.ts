import {User} from "../Entity/User";
import {UserService} from "../Service/UserService";
import {ABaseController} from "./ABaseController";

export class UserController extends ABaseController<User> {
  constructor(UserService: UserService) {
    super(UserService, "User");
  }
}
