Instagram Influencer Profile Dashboard
This is a full-stack web application built to display a detailed profile page for an Instagram influencer, showcasing their statistics, recent posts, and audience analytics. The project was developed as a solution to the Full Stack Developer Assignment, demonstrating skills in modern frontend and backend development, and data handling.

The application features a dynamic dashboard for the public profile of Virat Kohli (@virat.kohli). The data used is a recent snapshot manually collected from his public profile to ensure a high degree of authenticity for the simulation.

🚀 Features Implemented
Frontend
Modern & Responsive UI: Built with React and styled with Tailwind CSS for a clean, dark-themed, and fully responsive user experience on all devices.

Dynamic Profile Header: Displays the influencer's name, username, profile picture, and key bio details (Country, Age, Marital Status).

Comprehensive Analytics Dashboard: Features cards for key metrics including Followers, Following, Post Count, Average Likes, Average Comments, and Engagement Rate.

Engagement Chart: A responsive bar chart visualizing the likes and comments for the 10 most recent posts.

Post & Reel Grids: Dynamically renders the latest 10 posts and 5 reels with their images, captions, and engagement numbers.

AI Analysis Display: Each post card shows simulated AI-generated tags and vibes, showcasing the data enrichment pipeline.

Bonus - Audience Demographics: A dedicated section with visually appealing charts (Pie and Bar) for the influencer's audience gender split and age distribution.

Backend
Node.js & Express API: A robust backend server that serves all influencer data through a RESTful API endpoint.

MongoDB Integration: The application is connected to a live MongoDB Atlas cloud database, which acts as the single source of truth for all data.

Mongoose Schema: A well-structured Mongoose schema defines the data models, ensuring data integrity and consistency.

Database Seeding: A seeder script is included to easily populate the MongoDB database with the initial, manually collected data.

🛠️ Tech Stack
Frontend: React, Vite, Tailwind CSS, Recharts (for charts), React Icons

Backend: Node.js, Express.js

Database: MongoDB Atlas, Mongoose

Development Tools: Git, VS Code, Postman (for API testing)

📂 Folder Structure
influencer-dashboard/
├── backend/
│ ├── config/
│ │ └── db.js # MongoDB connection logic
│ ├── models/
│ │ └── Influencer.js # Mongoose data schema
│ ├── .env # Environment variables
│ ├── mock_data.json # Seed data file
│ ├── seeder.js # Database import script
│ └── server.js # Main Express API server
└── frontend/
├── public/
│ └── assets/
│ └── images/ # Static image assets
├── src/
│ ├── components/ # All React components
│ └── App.jsx # Main application component
└── README.md

⚙️ Setup and Installation
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js (v18 or later recommended)

Git

A free MongoDB Atlas account

Installation & Setup
Clone the repository:

git clone [https://github.com/sabir644/influencer-dashboard.git](https://github.com/sabir644/influencer-dashboard.git)
cd influencer-dashboard

Setup the Backend:

Navigate to the backend folder: cd backend

Install NPM packages: npm install

Create a .env file in the backend root and add your MongoDB connection string:

MONGO_URI="YOUR_MONGODB_CONNECTION_STRING"

(Remember to replace <password> with your database user password in the string)

Setup the Frontend:

Navigate to the frontend folder: cd ../frontend

Install NPM packages: npm install

Place all post, reel, and profile picture images (as .png files) into the frontend/public/assets/images/ directory.

Seed the Database:

Go back to the backend directory: cd ../backend

Run the seeder script to import the data from mock_data.json into your MongoDB Atlas database. This only needs to be done once.

node seeder.js

Run the Application:

Start the backend server: (in the /backend directory)

node server.js

The server will be running on http://localhost:3001.

Start the frontend server: (in the /frontend directory)

npm run dev

Assumptions and Development Choices
Data Scraping: Due to the time constraints and the robust anti-scraping measures on Instagram, a live scraping pipeline was not implemented. Instead, a one-time manual data collection was performed on Virat Kohli's public profile. This mock_data.json file serves as a high-fidelity simulation of a scraper's output, providing realistic data for the application.

AI Data Enrichment: A backend script (enrich_with_clarifai.js) was developed to fulfill the image processing requirement using an external ML API. After exploring several services (including Google's Gemini API and various Clarifai SDKs) and encountering persistent, platform-specific configuration roadblocks (API access, billing requirements, SDK version conflicts), a final, robust script using the Clarifai REST API was created. To ensure a deliverable and fully functional project, the final mock_data.json was manually populated with high-quality, AI-like analysis that represents the successful output of this script. The script is left in the repository as a proof-of-concept of the intended data processing pipeline.

Database: The application uses MongoDB Atlas as its primary database. The mock_data.json file acts as the initial "seed" data, which is imported into the live database via the seeder.js script. The live application's API interacts exclusively with MongoDB, ensuring a scalable and professional architecture.

🌟 Potential Future Improvements
Implement a Live Scraping Service: Develop a scheduled, resilient scraping service (e.g., using Puppeteer or a third-party API) to periodically update the MongoDB database with the latest posts and stats.

Complete the AI Pipeline: Integrate the enrich_with_clarifai.js script into an automated flow, so that every new post added to the database is automatically sent for analysis.

User Authentication: Add a login system for users to track multiple influencers.

Deployment: Deploy the frontend to Vercel/Netlify and the backend to a service like Heroku or Render for public access.
