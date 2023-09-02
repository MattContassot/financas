import * as dotenv from 'dotenv';
import * as path from 'path';
import { DataSourceOptions } from 'typeorm';

dotenv.config({ path: path.resolve(__dirname, '..', '..', `.env.${ process.env.NODE_ENV }`) });

const DB = process.env;

const internalOptions: DataSourceOptions = {
  type: 'mysql',
  host: DB.DB_HOST,
  port: Number(DB.DB_PORT),
  username: DB.DB_USERNAME,
  password: DB.DB_PASSWORD,
  database: DB.DB_NAME,
  entities: [DB.ENTITIES_PATH],
  migrations: [DB.MIGRATIONS_PATH],
  logging: true,
};

export default internalOptions;