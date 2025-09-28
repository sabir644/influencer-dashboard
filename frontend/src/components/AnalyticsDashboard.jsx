import React from 'react';
import { FaHeart, FaCommentDots, FaChartLine, FaUsers, FaUserPlus, FaFileAlt } from 'react-icons/fa';

// We now accept 'profile' as a prop to get the new stats
const AnalyticsDashboard = ({ analytics, profile }) => {
  // Helper function to format large numbers
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold mb-6">OVERVIEW ANALYTICS</h3>
      {/* --- THIS GRID NOW HAS 6 ITEMS --- */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* --- NEW: Followers Card --- */}
        <div className="flex flex-col items-center justify-center bg-gray-700 p-4 rounded-lg">
          <FaUsers className="text-teal-400 text-3xl mb-2" />
          <p className="text-2xl font-bold">{formatNumber(profile?.followers) || 'N/A'}</p>
          <p className="text-sm text-gray-400">Followers</p>
        </div>

        {/* --- NEW: Following Card --- */}
        <div className="flex flex-col items-center justify-center bg-gray-700 p-4 rounded-lg">
          <FaUserPlus className="text-orange-400 text-3xl mb-2" />
          <p className="text-2xl font-bold">{profile?.following?.toLocaleString() || 'N/A'}</p>
          <p className="text-sm text-gray-400">Following</p>
        </div>

        {/* --- NEW: Posts Card --- */}
        <div className="flex flex-col items-center justify-center bg-gray-700 p-4 rounded-lg">
          <FaFileAlt className="text-yellow-400 text-3xl mb-2" />
          <p className="text-2xl font-bold">{profile?.postsCount?.toLocaleString() || 'N/A'}</p>
          <p className="text-sm text-gray-400">Posts</p>
        </div>

        {/* Average Likes */}
        <div className="flex flex-col items-center justify-center bg-gray-700 p-4 rounded-lg">
          <FaHeart className="text-red-400 text-3xl mb-2" />
          <p className="text-2xl font-bold">{formatNumber(analytics.averageLikes) || 'N/A'}</p>
          <p className="text-sm text-gray-400">Avg. Likes</p>
        </div>

        {/* Average Comments */}
        <div className="flex flex-col items-center justify-center bg-gray-700 p-4 rounded-lg">
          <FaCommentDots className="text-blue-400 text-3xl mb-2" />
          <p className="text-2xl font-bold">{formatNumber(analytics.averageComments) || 'N/A'}</p>
          <p className="text-sm text-gray-400">Avg. Comments</p>
        </div>

        {/* Engagement Rate */}
        <div className="flex flex-col items-center justify-center bg-gray-700 p-4 rounded-lg">
          <FaChartLine className="text-green-400 text-3xl mb-2" />
          <p className="text-2xl font-bold">{analytics.engagementRate ? `${analytics.engagementRate}%` : 'N/A'}</p>
          <p className="text-sm text-gray-400">Engagement Rate</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
