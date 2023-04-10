// Import the Sequelize instance from the configuration file
const sequelize = require('../config');

// Import the DataTypes object from the sequelize library
const { DataTypes } = require('sequelize');

// Define the GunplaModel schema using sequelize.define
const GunplaModel = sequelize.define('GunplaModel', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_url: DataTypes.STRING,
  description: DataTypes.TEXT,
  // additional gunpla model fields
});

// Export the GunplaModel for use in other parts of the application
module.exports = GunplaModel;
