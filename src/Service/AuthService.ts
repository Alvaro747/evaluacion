import {DataSource} from "typeorm";
import {IAuthService} from "../IService/IAuthService";
import {LoginResponseDto} from "../Dto/loginResponseDto";
import {IUserRepository} from "../IRepository/IUserRepository";
import {User} from "../Entity/User";
import {BcryptAdapter} from "../Utils/BCrypt";
import {JwtAdapter} from "../Utils/Jwt";
import {UserRol} from "../Entity/UserRol";
import {IUserRolRepository} from "../IRepository/IUserRolRepository";
import {RolModulo} from "../Entity/RolModulo";
import {IRolModuloRepository} from "../IRepository/IRolModuloRepository";

export class AuthService implements IAuthService {
  protected UserRepository: IUserRepository;
  protected UserRolRepository: IUserRolRepository;
  protected RolModuloRepository: IRolModuloRepository;

  constructor(dataSource: DataSource) {
    this.UserRepository = dataSource.getRepository(User);
    this.UserRolRepository = dataSource.getRepository(UserRol);
    this.RolModuloRepository = dataSource.getRepository(RolModulo);
  }

  async login(userName: string, password: string): Promise<LoginResponseDto> {
    const user = await this.UserRepository.findOne({
      where: {user: userName},
      select: ["id", "user", "password", "state"],
    });

    if (!user) {
      throw new Error("Usuario o contraseña incorrectos");
    }

    const useRol = await this.UserRolRepository.findOne({
      where: {
        user: {id: user.id},
      },
      relations: ["rol"],
    });

    const rolModulos = await this.RolModuloRepository.find({
      where: {
        rol: {id: useRol?.rol.id},
      },
      relations: ["modulo"],
    });

    const validatePassword = BcryptAdapter.compare(password, user.password);

    if (!validatePassword) {
      throw new Error("Usuario o contraseña incorrectos");
    }

    const {id, user: username, state} = user;

    const generateToken = await JwtAdapter.generateToken({
      user: id,
      name: username,
      status: state,
    });

    const response = new LoginResponseDto({
      id: id,
      name: username,
      status: state,
      token: generateToken as string,
      rol: {
        id: useRol?.rol.id,
        name: useRol?.rol.name,
        descripcion: useRol?.rol.description,
      },
      modulos: rolModulos.map((rolModulo) => ({
        description: rolModulo.modulo.description,
        id: rolModulo.modulo.id,
        name: rolModulo.modulo.name,
        rute: rolModulo.modulo.rute,
      })),
    });

    return response;
  }
}
