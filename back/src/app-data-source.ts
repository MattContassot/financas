import { DataSource } from 'typeorm';
import dbOptions from './database/db.config';

const banco = new DataSource(dbOptions);

banco.initialize()
  .then(() => console.log('Banco de dados foi inicializado!'))
  .catch((err) => console.error('Ocorreu um erro durante a inicialização do banco de dados:', err));

export { banco };