import config from 'config';
import { Sequelize, Options } from 'sequelize';

const databaseOpts: Options = config.get('database');

const sequelize = new Sequelize({
  ...databaseOpts
});

export default sequelize;
