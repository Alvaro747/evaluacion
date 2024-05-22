import jwt from "jsonwebtoken";
import {env} from "../config/env";

export class JwtAdapter {
  static async generateToken(
    payload: Object,
    duration: string = env.JWT_DURATION
  ): Promise<string | null> {
    return new Promise((resolve) => {
      jwt.sign(payload, env.JWT_SECRET, {expiresIn: duration}, (err, token) => {
        if (err) return resolve(null);
        resolve(token!);
      });
    });
  }
}
