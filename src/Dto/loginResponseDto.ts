interface Modulos {
  id?: number;
  name?: string;
  description?: string;
  rute?: string | null;
}

interface Options {
  token: string;
  name: string;
  status: boolean;
  id: number;
  rol: {
    id?: number;
    name?: string;
    descripcion?: string;
  };
  modulos?: Modulos[];
}

export class LoginResponseDto {
  private status: boolean;
  private name: string;
  private token: string;
  private id: number;
  private rol: {
    id?: number;
    name?: string;
    descripcion?: string;
  };
  private modulos?: Modulos[];

  constructor(data: Options) {
    this.token = data.token;
    this.name = data.name;
    this.status = data.status;
    this.id = data.id;
    this.rol = data.rol;
    this.modulos = data.modulos;
  }
}
