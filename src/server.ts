import express, {Express, Router} from "express";
import cors from "cors";

interface Options {
  port: number;
  host: string;
}

export class ExpressServer {
  public readonly app: Express = express();
  private readonly port: number;
  private readonly host: string;
  private readonly routes: Router = express.Router();

  constructor(options: Options) {
    const {port, host} = options;

    this.port = port;
    this.host = host;
  }

  async start() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(cors());

    // load routes
    this.app.use(this.routes);

    // start server
    this.app.listen(this.port, () => {
      console.log(`Server is running on ${this.host}:${this.port}`);
    });
  }

  getApp() {
    return this.app;
  }

  getRouter() {
    return this.routes;
  }
}
