// Import the Sequelize instance from the configuration file
const sequelize = require('../config');

// Import the DataTypes object from the sequelize library
const { DataTypes } = require('sequelize');

// Define the Review schema using sequelize.define
const Review = sequelize.define('Review', {
  rating: DataTypes.INTEGER,
  content: DataTypes.TEXT,
  // additional review fields
});

// Export the Review model for use in other parts of the application
module.exports = Review;
