import { Person } from "../Entity/Person";
import {IBaseRepository} from "./IBaseRepository";

export interface IPersonRepository extends IBaseRepository<Person> {}
