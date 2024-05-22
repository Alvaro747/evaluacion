import {DataSource} from "typeorm";
import {UserRol} from "../Entity/UserRol";
import {IUserRolService} from "../IService/IUserRolService";
import {ABaseService} from "./ABaseService";
import {IUserRolRepository} from "../IRepository/IUserRolRepository";
import {User} from "../Entity/User";
import {Rol} from "../Entity/Rol";
import {IRolRepository} from "../IRepository/IRolRepository";
import {IUserRepository} from "../IRepository/IUserRepository";

export class UserRolService
  extends ABaseService<UserRol>
  implements IUserRolService
{
  protected repository: IUserRolRepository;
  protected userRepository: IUserRepository;
  protected rolRepository: IRolRepository;

  constructor(dataSource: DataSource) {
    super();
    this.repository = dataSource.getRepository(UserRol);
    this.userRepository = dataSource.getRepository(User);
    this.rolRepository = dataSource.getRepository(Rol);
  }

  async save(userRol: UserRol): Promise<UserRol> {
    const user = await this.userRepository.findOne({
      where: {id: userRol.user.id},
    });
    const rol = await this.rolRepository.findOne({where: {id: userRol.rol.id}});

    if (!user || !rol) {
      throw new Error("User or Rol not found");
    }

    userRol.user = user;
    userRol.rol = rol;

    return await super.save(userRol);
  }
}
