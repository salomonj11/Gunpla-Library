// Import the Sequelize instance from the configuration file
const sequelize = require('./database/config');

// Import the models and associations (if defined in a separate file)
const {
  User,
  GunplaModel,
  Review,
} = require('./database/associations');

// Synchronize the models with the PostgreSQL database
sequelize
  .sync()
  .then(() => {
    console.log('Database synchronized successfully.');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });
