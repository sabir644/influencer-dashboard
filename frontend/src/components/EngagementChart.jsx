// src/components/EngagementChart.jsx

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EngagementChart = ({ posts }) => {
  // We need to format the data for the chart
  const chartData = posts.map((post, index) => ({
    name: `Post ${index + 1}`, // Label for the X-axis (e.g., "Post 1", "Post 2")
    Likes: post.likes,
    Comments: post.comments,
  }));

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg mt-8">
      <h3 className="text-lg font-semibold mb-6">Recent Post Engagement</h3>
      {/* ResponsiveContainer makes the chart adapt to the size of its parent container */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 20,
            left: 10,
            bottom: 5,
          }}
        >
          {/* A grid to make the chart easier to read */}
          <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
          
          {/* The X-axis of our chart (the post labels) */}
          <XAxis dataKey="name" stroke="#A0AEC0" />
          
          {/* The Y-axis of our chart (the like/comment counts) */}
          <YAxis stroke="#A0AEC0" />
          
          {/* A tooltip that appears when you hover over a bar */}
          <Tooltip contentStyle={{ backgroundColor: '#2D3748', border: 'none' }} />
          
          {/* A legend to label what each color represents */}
          <Legend />
          
          {/* The actual bars for the data */}
          <Bar dataKey="Likes" fill="#4299E1" /> 
          <Bar dataKey="Comments" fill="#667EEA" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EngagementChart;