require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Influencer = require('./models/Influencer');
const data = require('./mock_data.json'); // Imports your latest mock_data.json

// Connect to the database
connectDB();

/**
 * Imports data into the database.
 * It first deletes all existing data to prevent duplicates.
 */
const importData = async () => {
  try {
    // 1. Clear any existing influencer data from the collection
    await Influencer.deleteMany();

    // 2. Insert the single influencer object from our mock_data.json
    await Influencer.create(data);

    console.log('Data successfully imported to MongoDB!');
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error}`);
    process.exit(1);
  }
};

/**
 * Destroys all data in the database.
 */
const destroyData = async () => {
  try {
    // 1. Delete all influencer data from the collection
    await Influencer.deleteMany();

    console.log('Data successfully destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error with data destruction: ${error}`);
    process.exit(1);
  }
};

// Check for a '-d' flag in the command line argument
// e.g., 'node seeder.js -d' will run destroyData()
// 'node seeder.js' will run importData()
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

