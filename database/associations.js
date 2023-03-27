// Import the models
const User = require('./models/User');
const GunplaModel = require('./models/GunplaModel');
const Review = require('./models/Review');

// Define the relationships between the models
User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId' });

GunplaModel.hasMany(Review, { foreignKey: 'gunplaModelId' });
Review.belongsTo(GunplaModel, { foreignKey: 'gunplaModelId' });

// Export the models with their associations defined
module.exports = {
  User,
  GunplaModel,
  Review,
};
