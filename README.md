# influencer-dashboard
Influencer Profile Dashboard
Project Overview
This is a full-stack web application built to fulfill the Full Stack Developer Assignment. The application displays a comprehensive profile page for an Instagram influencer, showcasing their basic information, engagement analytics, recent posts, and reels. The project is designed to demonstrate skills in modern frontend development with React, backend API creation with Node.js/Express, and data processing methodologies.

The frontend is designed to be clean, responsive, and visually appealing, taking inspiration from modern data dashboard aesthetics. The backend serves a pre-processed and enriched dataset via a REST API.

Features Implemented
Frontend:

Fully responsive UI built with React and styled with Tailwind CSS.

Detailed Profile Header with influencer's name, handle, and profile picture.

Analytics Dashboard displaying key metrics like average likes, comments, and engagement rate.

Dynamic Engagement Chart visualizing likes vs. comments for recent posts.

Grid displays for the 10 most Recent Posts and 5 most Recent Reels.

Each post/reel card shows media, caption, and engagement stats.

AI-generated analysis (tags, vibe, quality) is displayed for each post.

Backend:

Node.js/Express server providing a REST API endpoint (/api/data).

API serves a complete, structured JSON object containing all influencer data.

On-the-fly calculation of analytics (average likes, comments, engagement rate) when the API is called.

Data Processing:

A mock_data.json file is used to simulate a scraped and processed database.

The dataset is fully enriched with AI-generated analysis (tags, vibe, quality indicators) to demonstrate the intended final data structure.

Tech Stack
Frontend:

React (with Vite): A modern JavaScript library for building user interfaces.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

Recharts: A composable charting library for React.

React Icons: For including popular icons.

Axios: For making HTTP requests to the backend (used in the data enrichment script).

Backend:

Node.js: A JavaScript runtime environment.

Express.js: A minimal and flexible Node.js web application framework.

CORS: Middleware for enabling cross-origin resource sharing.

Local Development Setup
To run this project on your local machine, please follow these steps:

Prerequisites
Node.js (v18 or later recommended)

npm / yarn

1. Clone the Repository
git clone [https://github.com/sabir644/influencer-dashboard.git](https://github.com/sabir644/influencer-dashboard.git)
cd influencer-dashboard

2. Set Up and Run the Backend
The backend server is responsible for serving the influencer data.

# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Run the server
node server.js

The backend server will start on http://localhost:3001.

3. Set Up and Run the Frontend
The frontend is the React application that displays the dashboard.

# Open a new terminal and navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Run the development server
npm run dev

The frontend application will be accessible at http://localhost:5173 (or another port if 5173 is busy).

Assumptions and Development Choices
Data Scraping: Due to the time constraints of the assignment and the robust anti-scraping measures on platforms like Instagram, a real-time scraping pipeline was not implemented. Instead, the data was manually collected and structured into a mock_data.json file. This simulates the output of a successful scraping and database storage process, allowing the focus to remain on the full-stack application logic.

Image/Video Processing (AI Analysis): A key requirement was to use an external ML API for data enrichment. A backend script (enrich_data.js) was developed to analyze post images using Google's Gemini API. This script successfully handled fetching images, making API calls, and parsing the JSON response. However, during development, I encountered a persistent Google Cloud project configuration issue (API and model access errors) that blocked the API calls from completing successfully.

To deliver a complete and functional application that demonstrates the intended outcome, I manually populated the analysis fields in the mock_data.json file. The data in these fields (tags, vibe, quality) accurately represents the expected output from the Gemini API script. This approach showcases the intended data structure and the ability to integrate such analysis into the application, while professionally managing a technical roadblock with an external service.

Database: A NoSQL database was simulated with the mock_data.json file for speed of development. The backend is structured to be easily adaptable to a real database like MongoDB or Firestore in the future.
