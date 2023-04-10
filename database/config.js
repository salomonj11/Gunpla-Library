const Sequelize = require('sequelize');

// Create an instance of Sequelize to set up the database connection.
// The instance is configured with the following connection details:
//   - 'database_name': The name of the PostgreSQL database to connect to.
//   - 'username': The username used to authenticate with the database.
//   - 'password': The password used to authenticate with the database.
//   - 'host': The hostname or IP address of the database server (use 'localhost' if the server is on the same machine).
//   - 'dialect': Specifies the type of database being used (in this case, 'postgres').

// Set up the Sequelize instance with the actual database connection details
const sequelize = new Sequelize(
  'gunpla_library', // The name of the PostgreSQL database
  'gunpla_user', // The username of the user (role) for the database
  'gunpla_password', // The password for the user (role) in the database
  {
    host: 'localhost', // The hostname or IP address of the database server
    dialect: 'postgres', // Specifies the type of database being used (PostgreSQL)
  }
);

module.exports = sequelize;
