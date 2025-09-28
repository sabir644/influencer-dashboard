// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path'); // Import the 'path' module
const connectDB = require('./config/db');
const Influencer = require('./models/Influencer');

// Connect to Database
connectDB();

const app = express();
// The PORT variable will be provided by Render in production
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// --- API Endpoint ---
app.get('/api/data', async (req, res) => {
  try {
    const influencerData = await Influencer.findOne();
    if (!influencerData) {
      return res.status(404).json({ error: 'No influencer data found in database' });
    }
    const data = influencerData.toObject();
    const totalLikes = data.posts.reduce((sum, post) => sum + post.likes, 0);
    const totalComments = data.posts.reduce((sum, post) => sum + post.comments, 0);
    data.analytics.averageLikes = Math.round(totalLikes / data.posts.length);
    data.analytics.averageComments = Math.round(totalComments / data.posts.length);
    data.analytics.engagementRate = (((totalLikes + totalComments) / data.profile.followers) * 100).toFixed(2);
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// --- DEPLOYMENT LOGIC ---
// This section serves the frontend's static files in a production environment.
if (process.env.NODE_ENV === 'production') {
  // Set the static folder
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  // For any route that is not our API, send the frontend's index.html file
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'));
  });
}

// Start the Server
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});

