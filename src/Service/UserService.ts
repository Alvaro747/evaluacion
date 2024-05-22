import {DataSource} from "typeorm";
import {User} from "../Entity/User";
import {IUserService} from "../IService/IUserService";
import {ABaseService} from "./ABaseService";
import {IUserRepository} from "../IRepository/IUserRepository";
import {BcryptAdapter} from "../Utils/BCrypt";
import {Person} from "../Entity/Person";
import {IPersonRepository} from "../IRepository/IPersonRepository";

export class UserService extends ABaseService<User> implements IUserService {
  protected repository: IUserRepository;
  protected personRepository: IPersonRepository;

  constructor(dataSource: DataSource) {
    super();
    this.repository = dataSource.getRepository(User);
    this.personRepository = dataSource.getRepository(Person);
  }

  async save(user: User): Promise<User> {
    const person = await this.personRepository.findOne({
      where: {id: user.person.id},
    });

    if (!person) {
      throw new Error("Person not found");
    }

    user.person = person;
    user.password = await BcryptAdapter.hash(user.password);
    return await super.save(user);
  }
}
