import {Vista} from "../Entity/Vista";
import {VistaService} from "../Service/VistaService";
import {ABaseController} from "./ABaseController";

export class VistaController extends ABaseController<Vista> {
  constructor(VistaService: VistaService) {
    super(VistaService, "Vista");
  }
}
