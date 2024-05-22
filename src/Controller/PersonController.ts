import {Request, Response, Router} from "express";
import {Person} from "../Entity/Person";
import {PersonService} from "../Service/PersonService";
import {ABaseController} from "./ABaseController";
import {ApiResponseDto} from "../Dto/ApiResponseDto";

export class PersonController extends ABaseController<Person> {
  protected servicePerson: PersonService;
  constructor(personService: PersonService) {
    super(personService, "Person");
    this.initializeThisRoutes();
    this.servicePerson = personService;
  }

  protected initializeThisRoutes() {
    this.router.get(`/evaluacion/`, this.personModulo.bind(this));
  }

  async personModulo(req: Request, res: Response) {
    try {
      const entities = await this.servicePerson.personModulo();
      const response = new ApiResponseDto("Datos obtenidos", entities, true);
      res.json(response);
    } catch (error: any) {
      const response = new ApiResponseDto(error.message, null, false);
      res.status(500).json(response);
    }
  }
}
