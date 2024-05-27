import {Request, Response} from "express";
import {RolModulo} from "../Entity/RolModulo";
import {RolModuloService} from "../Service/RolModuloService";
import {ABaseController} from "./ABaseController";
import {ApiResponseDto} from "../Dto/ApiResponseDto";

export class RolModuloController extends ABaseController<RolModulo> {
  constructor(RolModuloService: RolModuloService) {
    super(RolModuloService, "RolModulo");
    this.initializeThisRoutes();
  }

  protected initializeThisRoutes() {
    this.router.get("/modulorol/rol/:id", this.getModuloByRolId.bind(this));
  }

  async getModuloByRolId(req: Request, res: Response) {
    try {
      const rolId = parseInt(req.params.id);
      const entities = await (
        this.service as RolModuloService
      ).getModuloByRolId(rolId);
      const response = new ApiResponseDto("Datos obtenidos", entities, true);
      res.json(response);
    } catch (error: any) {
      const response = new ApiResponseDto(error.message, null, false);
      res.status(500).json(response);
    }
  }
}
