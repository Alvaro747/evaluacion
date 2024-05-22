import {Router} from "express";
import {PersonController} from "./PersonController";
import {PersonService} from "../Service/PersonService";
import {DataSource} from "typeorm"; // Asegúrate de importar DataSource correctamente
import {AcudienteController} from "./AcudienteController";
import {AcudienteService} from "../Service/AcudienteService";
import {Curso} from "../Entity/Curso";
import {CursoService} from "../Service/CursoService";
import {CursoController} from "./CursoController";
import {Estudiante} from "../Entity/Estudiante";
import {EstudianteAcudienteController} from "./EstudianteAcudienteController";
import {EstudianteAcudienteService} from "../Service/EstudianteAcudienteService";
import {EstudianteController} from "./EstudianteController";
import {EstudianteService} from "../Service/EstudianteService";
import {Matricula} from "../Entity/Matricula";
import {MatriculaController} from "./MatriculaController";
import {MatriculaService} from "../Service/MatriculaService";
import {ModuloController} from "./ModuloController";
import {ModuloService} from "../Service/ModuloService";
import {ModuloVistaController} from "./ModuloVistaController";
import {ModuloVistaService} from "../Service/ModuloVistaService";
import {RolController} from "./RolController";
import {RolService} from "../Service/RolService";
import {RolModulo} from "../Entity/RolModulo";
import {RolModuloService} from "../Service/RolModuloService";
import {RolModuloController} from "./RolModuloController";
import {SedeController} from "./SedeController";
import {SedeService} from "../Service/SedeService";
import {UserController} from "./UserController";
import {UserService} from "../Service/UserService";
import {UserRolController} from "./UserRolController";
import {UserRolService} from "../Service/UserRolService";
import {VistaController} from "./VistaController";
import {VistaService} from "../Service/VistaService";
import {AuthController} from "./AuthController";
import {AuthService} from "../Service/AuthService";

export const registerControllers = (router: Router, dataSource: DataSource) => {
  const controllers = [
    new PersonController(new PersonService(dataSource)),
    new AcudienteController(new AcudienteService(dataSource)),
    new CursoController(new CursoService(dataSource)),
    new EstudianteController(new EstudianteService(dataSource)),
    new EstudianteAcudienteController(
      new EstudianteAcudienteService(dataSource)
    ),
    new MatriculaController(new MatriculaService(dataSource)),
    new ModuloController(new ModuloService(dataSource)),
    new ModuloVistaController(new ModuloVistaService(dataSource)),
    new RolController(new RolService(dataSource)),
    new RolModuloController(new RolModuloService(dataSource)),
    new SedeController(new SedeService(dataSource)),
    new UserController(new UserService(dataSource)),
    new UserRolController(new UserRolService(dataSource)),
    new VistaController(new VistaService(dataSource)),
    new AuthController(new AuthService(dataSource)),
  ];

  controllers.forEach((controller) => {
    router.use(controller.router);
  });
};
