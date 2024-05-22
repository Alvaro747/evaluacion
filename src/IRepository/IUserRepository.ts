import {User} from "../Entity/User";
import {IBaseRepository} from "./IBaseRepository";

export interface IUserRepository extends IBaseRepository<User> {}
