import {FindOneOptions, FindOptions, FindOptionsWhere} from "typeorm";
import {ABaseEntity} from "../Entity/ABaseEntity";
import {IBaseRepository} from "../IRepository/IBaseRepository";
import {IBaseService} from "../IService/IBaseService";

export abstract class ABaseService<T extends ABaseEntity>
  implements IBaseService<T>
{
  protected abstract repository: IBaseRepository<T>;

  async all(): Promise<T[]> {
    return await this.repository.find();
  }

  async findByStateTrue(): Promise<T[]> {
    const option: FindOptionsWhere<T> = {state: true} as FindOptionsWhere<T>;
    return await this.repository.find({where: option});
  }

  async findById(id: number): Promise<T> {
    const option: FindOneOptions<T> = {where: {id}} as FindOneOptions<T>;
    const entity = await this.repository.findOne(option);
    if (!entity) {
      throw new Error("Registro no encontrado");
    }
    return entity;
  }

  async save(entity: T): Promise<T> {
    try {
      return await this.repository.save(entity);
    } catch (error: any) {
      throw new Error(
        "Error al guardar la entidad: " + (error as Error).message
      );
    }
  }

  async update(id: number, entity: Partial<T>): Promise<void> {
    const existingEntity = await this.findById(id);
    if (existingEntity.deletedAt) {
      throw new Error("Registro inhabilitado");
    }

    Object.assign(existingEntity, entity);
    existingEntity.updatedAt = new Date();
    await this.repository.save(existingEntity);
  }

  async delete(id: number): Promise<void> {
    const existingEntity = await this.findById(id);
    existingEntity.deletedAt = new Date();
    await this.repository.save(existingEntity);
  }
}
