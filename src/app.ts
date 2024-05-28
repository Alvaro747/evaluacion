import "reflect-metadata";
import {registerControllers} from "./Controller";
import {ExpressServer} from "./server";
import {env} from "./config/env";
import {AppDataSource} from "./Database/database";

async function main() {
  const dataSourceOptions = {
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.USER,
    password: env.PASSWORD,
    database: env.DATABASE,
  };

  try {
    const appDataSource = AppDataSource(dataSourceOptions);
    await appDataSource.initialize();

    const expressServer = new ExpressServer({
      port: env.APP_PORT || 3000,
      host: env.APP_HOST || "localhost",
    });

    expressServer.start();

    const mainRouter = expressServer.getRouter();
    registerControllers(mainRouter, appDataSource);
  } catch (error) {
    console.error("Error starting the server", error);
  }
}

main();
