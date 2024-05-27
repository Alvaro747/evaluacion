import {RolModulo} from "../Entity/RolModulo";
import {IBaseService} from "./IBaseService";

export interface IRolModuloService extends IBaseService<RolModulo> {
  getModuloByRolId(rolId: number): Promise<RolModulo[]>;
}
