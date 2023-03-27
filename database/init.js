const sequelize = require('./config');
const User = require('./models/User');
const GunplaModel = require('./models/GunplaModel');
const Review = require('./models/Review');

sequelize
  .sync()
  .then(() => console.log('Database synchronized'))
  .catch((error) =>
    console.error('Error synchronizing database:', error)
  );
