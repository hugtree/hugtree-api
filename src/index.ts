import config from 'config';
import app from './app';
import sequelize from './db';
import './models';
import routes from './routes';

const port = config.get('port');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  await sequelize.sync({
    force: true
  });

  app.use(routes);

  app.listen(port, () => {
    console.info(`server listening on ${port}`);
  });
})();
