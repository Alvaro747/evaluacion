import {ABaseService} from "./ABaseService";
import {Person} from "../Entity/Person";
import {IPersonRepository} from "../IRepository/IPersonRepository";
import {IPersonService} from "../IService/IPersonService";
import {DataSource} from "typeorm";

export class PersonService
  extends ABaseService<Person>
  implements IPersonService
{
  protected repository: IPersonRepository;

  constructor(dataSource: DataSource) {
    super();
    this.repository = dataSource.getRepository(Person);
  }

  async personModulo() {
    const queryBuilder = this.repository
      .createQueryBuilder("person")
      .innerJoin("person.users", "user")
      .innerJoin("user.userRoles", "userRol")
      .innerJoin("userRol.rol", "rol")
      .innerJoin("rol.modulos", "modulo")
      .select("person.name", "persona_nombre")
      .addSelect("COUNT(DISTINCT modulo.id)", "modulo_count")
      .groupBy("person.id")
      .having("COUNT(DISTINCT modulo.id) > :count", {count: 2});

    const results = await queryBuilder.getRawMany();

    return results.map((result) => ({
      nombre: result.persona_nombre,
      moduloCount: result.modulo_count,
    }));
  }
}
