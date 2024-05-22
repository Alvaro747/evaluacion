import {ABaseEntity} from "../Entity/ABaseEntity";

export interface IBaseService<T extends ABaseEntity> {
  all(): Promise<T[]>;
  findByStateTrue(): Promise<T[]>;
  findById(id: number): Promise<T | undefined>;
  save(entity: T): Promise<T>;
  update(id: number, entity: T): Promise<void>;
  delete(id: number): Promise<void>;
}
