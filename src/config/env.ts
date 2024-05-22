import "dotenv/config";
import {get} from "env-var";

export const env = {
  DB_PORT: get("DB_PORT").required().asPortNumber(),
  DB_HOST: get("DB_HOST").required().asString(),
  APP_PORT: get("APP_PORT").required().asPortNumber(),
  APP_HOST: get("APP_HOST").required().asString(),
  USER: get("USER").required().asString(),
  PASSWORD: get("PASSWORD").required().asString(),
  DATABASE: get("DATABASE").required().asString(),
  JWT_SECRET: get("JWT_SECRET").required().asString(),
  JWT_DURATION: get("JWT_DURATION").required().asString(),
};
