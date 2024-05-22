import {Request, Response, Router} from "express";
import {AuthService} from "../Service/AuthService";
import {ABaseController} from "./ABaseController";
import {ApiResponseDto} from "../Dto/ApiResponseDto";

export class AuthController {
  protected service: AuthService;
  public router: Router;

  constructor(AuthService: AuthService) {
    this.service = AuthService;
    this.router = Router();
    this.initializeRoutes();
  }

  protected initializeRoutes() {
    this.router.post(`/login/`, this.login.bind(this));
  }

  async login(req: Request, res: Response) {
    try {
      if (!req.body.username || !req.body.password)
        throw new Error("Faltan datos");

      const {username, password} = req.body;
      const entities = await this.service.login(username, password);
      const response = new ApiResponseDto("Datos obtenidos", entities, true);
      res.json(response);
    } catch (error: any) {
      const response = new ApiResponseDto(error.message, null, false);
      res.status(500).json(response);
    }
  }
}
