import {Request, Response, Router} from "express";
import {ABaseEntity} from "../Entity/ABaseEntity";
import {IBaseService} from "../IService/IBaseService";
import {ApiResponseDto} from "../Dto/ApiResponseDto";

export abstract class ABaseController<T extends ABaseEntity> {
  protected service: IBaseService<T>;
  protected entityName: string;
  public router: Router;

  constructor(service: IBaseService<T>, entityName: string) {
    this.service = service;
    this.entityName = entityName;
    this.router = Router();
    this.initializeRoutes();
  }

  protected initializeRoutes() {
    const entityName = this.entityName.toLowerCase();
    this.router.get(`/${entityName}/`, this.findByStateTrue.bind(this));
    this.router.get(`/${entityName}/:id`, this.show.bind(this));
    this.router.post(`/${entityName}/`, this.save.bind(this));
    this.router.put(`/${entityName}/:id`, this.update.bind(this));
    this.router.delete(`/${entityName}/:id`, this.delete.bind(this));
  }

  async findByStateTrue(req: Request, res: Response) {
    try {
      const entities = await this.service.findByStateTrue();
      const response = new ApiResponseDto("Datos obtenidos", entities, true);
      res.json(response);
    } catch (error: any) {
      const response = new ApiResponseDto(error.message, null, false);
      res.status(500).json(response);
    }
  }

  async show(req: Request, res: Response) {
    try {
      const entity = await this.service.findById(Number(req.params.id));
      const response = new ApiResponseDto("Registro encontrado", entity, true);
      res.json(response);
    } catch (error: any) {
      const response = new ApiResponseDto(error.message, null, false);
      res.status(500).json(response);
    }
  }

  async save(req: Request, res: Response) {
    try {
      const entity = await this.service.save(req.body);
      const response = new ApiResponseDto("Datos guardados", entity, true);
      res.json(response);
    } catch (error: any) {
      const response = new ApiResponseDto(error.message, null, false);
      res.status(500).json(response);
    }
  }

  async update(req: Request, res: Response) {
    try {
      await this.service.update(Number(req.params.id), req.body);
      const response = new ApiResponseDto("Datos actualizados", null, true);
      res.json(response);
    } catch (error: any) {
      const response = new ApiResponseDto(error.message, null, false);
      res.status(500).json(response);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await this.service.delete(Number(req.params.id));
      const response = new ApiResponseDto("Registro eliminado", null, true);
      res.json(response);
    } catch (error: any) {
      const response = new ApiResponseDto(error.message, null, false);
      res.status(500).json(response);
    }
  }
}
