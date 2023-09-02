import * as express from 'express';
import * as cors from 'cors';
import router from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (_req, res) => res.json({ ok: true }));
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');

      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use(router);
    this.app.use(cors());
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Aguardando na porta ${ PORT }`));
  }
}

export { App };
export const { app } = new App();