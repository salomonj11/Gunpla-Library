const { DataTypes } = require('sequelize');
const sequelize = require('../config');

// Define the User model with only the auth0UserId and username fields.
// The auth0UserId is a unique identifier provided by Auth0 for each authenticated user.
const User = sequelize.define('User', {
  auth0UserId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // additional user fields (excluding email and password_hash)
});

module.exports = User;
