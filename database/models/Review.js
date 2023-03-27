const Review = sequelize.define('Review', {
  rating: DataTypes.INTEGER,
  content: DataTypes.TEXT,
  // additional review fields
});

module.exports = Review;
