import * as dotenv from 'dotenv';
import * as path from 'path';
import { App } from './app';

dotenv.config({ path: path.resolve(__dirname, '..', '..', `.env.${ process.env.NODE_ENV }`) });

const PORT = process.env.BACK_END_PORT;

new App().start(PORT);