// Import the GunplaModel model
const GunplaModel = require('../../database/models/GunplaModel');

// Define the API route handler
export default async function handler(req, res) {
  // Check the request method (only allow POST requests)
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Extract the Gunpla data from the request body
  const gunplaData = req.body;

  // Iterate over the Gunpla data and insert each model into the database
  try {
    for (const gunpla of gunplaData) {
      await GunplaModel.create(gunpla);
    }
    // Respond with a success message
    return res
      .status(200)
      .json({ message: 'Gunpla data added successfully' });
  } catch (error) {
    // Respond with an error message
    return res
      .status(500)
      .json({ message: 'Error adding Gunpla data', error });
  }
}
