// Import the GunplaModel model
const GunplaModel = require('./database/models/GunplaModel');

// Delete all rows from the GunplaModel table
GunplaModel.destroy({
  where: {}, // Empty where condition to match all rows
})
  .then(() => {
    console.log(
      'All rows have been deleted from the GunplaModel table.'
    );
  })
  .catch((error) => {
    console.error(
      'Error deleting rows from the GunplaModel table:',
      error
    );
  });
