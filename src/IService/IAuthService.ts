import {LoginResponseDto} from "../Dto/loginResponseDto";

export interface IAuthService {
  login(userName: string, password: string): Promise<LoginResponseDto>;
}
