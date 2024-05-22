import {Repository} from "typeorm";
import {ABaseEntity} from "../Entity/ABaseEntity";



export interface IBaseRepository<T extends ABaseEntity> extends Repository<T> {
}
