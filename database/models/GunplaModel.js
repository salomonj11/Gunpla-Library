const GunplaModel = sequelize.define('GunplaModel', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_url: DataTypes.STRING,
  description: DataTypes.TEXT,
  // additional gunpla model fields
});

module.exports = GunplaModel;
