const Sequelize = require('sequelize');

// Create an instance of Sequelize to set up the database connection.
// The instance is configured with the following connection details:
//   - 'database_name': The name of the PostgreSQL database to connect to.
//   - 'username': The username used to authenticate with the database.
//   - 'password': The password used to authenticate with the database.
//   - 'host': The hostname or IP address of the database server (use 'localhost' if the server is on the same machine).
//   - 'dialect': Specifies the type of database being used (in this case, 'postgres').

const sequelize = new Sequelize(
  'database_name',
  'username',
  'password',
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);

module.exports = sequelize;
