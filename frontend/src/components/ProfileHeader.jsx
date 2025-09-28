// src/components/ProfileHeader.jsx

import React from 'react';
import { FaFlag, FaCalendarAlt, FaUser } from 'react-icons/fa';

const ProfileHeader = ({ profile }) => {
  // Placeholder data for the new metrics inspired by the image
  const sentimentScore = "85%";
  const extrovertLevel = "Mid";
  const socialTopics = "8.2/10";
  const hateSpeechRisk = "Low Risk";
  const fairPlayRating = "8.0/10";

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      <img
        src={`/assets/images/${profile.profilePictureUrl}`}
        alt={profile.name}
        className="w-32 h-32 rounded-full object-cover ring-4 ring-indigo-500 flex-shrink-0"
      />

      <div className="flex-1 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-white text-center sm:text-left">{profile.name}</h1>
          {/* This section is now dynamic */}
          <div className="flex items-center space-x-4 text-gray-400 text-sm mt-2 sm:mt-0">
            {profile.bioDetails?.country && <span className="flex items-center"><FaFlag className="mr-1" /> {profile.bioDetails.country.toUpperCase()}</span>}
            {profile.bioDetails?.age && <span className="flex items-center"><FaCalendarAlt className="mr-1" /> {profile.bioDetails.age} YEARS OLD</span>}
            {profile.bioDetails?.maritalStatus && <span className="flex items-center"><FaUser className="mr-1" /> {profile.bioDetails.maritalStatus.toUpperCase()}</span>}
          </div>
        </div>
        <p className="text-gray-400 text-lg text-center sm:text-left mb-4">{profile.username}</p>


        {/* Metrics Grid (Sentiment, Extrovert, etc.) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6 text-center">
          <div className="flex flex-col items-center bg-gray-700 p-3 rounded-lg">
            <span className="text-indigo-400 text-xl mb-1">😊</span>
            <p className="text-lg font-semibold">{sentimentScore}</p>
            <p className="text-xs text-gray-400 uppercase">Sentiment Score</p>
          </div>
          <div className="flex flex-col items-center bg-gray-700 p-3 rounded-lg">
            <span className="text-green-400 text-xl mb-1">↔️</span>
            <p className="text-lg font-semibold">{extrovertLevel}</p>
            <p className="text-xs text-gray-400 uppercase">Extrovert Level</p>
          </div>
          <div className="flex flex-col items-center bg-gray-700 p-3 rounded-lg">
            <span className="text-yellow-400 text-xl mb-1">💡</span>
            <p className="text-lg font-semibold">{socialTopics}</p>
            <p className="text-xs text-gray-400 uppercase">Social Topics</p>
          </div>
          <div className="flex flex-col items-center bg-gray-700 p-3 rounded-lg">
            <span className="text-red-400 text-xl mb-1">⚠️</span>
            <p className="text-lg font-semibold">{hateSpeechRisk}</p>
            <p className="text-xs text-gray-400 uppercase">Hate Speech Risk</p>
          </div>
          <div className="flex flex-col items-center bg-gray-700 p-3 rounded-lg col-span-2 sm:col-span-1 md:col-span-1">
            <span className="text-pink-400 text-xl mb-1">💖</span>
            <p className="text-lg font-semibold">{fairPlayRating}</p>
            <p className="text-xs text-gray-400 uppercase">Fair Play Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;



