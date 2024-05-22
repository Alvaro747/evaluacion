import {Sede} from "../Entity/Sede";
import {SedeService} from "../Service/SedeService";
import {ABaseController} from "./ABaseController";

export class SedeController extends ABaseController<Sede> {
  constructor(SedeService: SedeService) {
    super(SedeService, "Sede");
  }
}
