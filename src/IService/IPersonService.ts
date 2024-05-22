import {Person} from "../Entity/Person";
import {IBaseService} from "./IBaseService";

export interface IPersonService extends IBaseService<Person> {
  personModulo(): any;
}
