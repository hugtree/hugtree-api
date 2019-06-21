const database = {
  dialect: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'redhat',
  database: 'hugtree'
};
module.exports = {
  port: 3000,
  database
};
