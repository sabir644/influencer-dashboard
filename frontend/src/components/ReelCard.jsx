// frontend/src/components/ReelCard.jsx

import React from 'react';
import { FaEye, FaHeart, FaComment } from 'react-icons/fa';

const ReelCard = ({ reel, onClick }) => { 
  return (
    <div 
      className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={`/assets/images/${reel.thumbnailUrl}`} 
          alt={reel.caption} 
          className="w-full h-auto object-cover aspect-[9/16]" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-opacity duration-300">
          <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-80 transform group-hover:scale-110 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-300 mb-2 truncate">{reel.caption}</p>
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <span className="flex items-center">
            <FaEye className="text-purple-500 mr-1" /> {reel.views?.toLocaleString()}
          </span>
          <span className="flex items-center">
            <FaHeart className="text-red-500 mr-1" /> {reel.likes?.toLocaleString()}
          </span>
          <span className="flex items-center">
            <FaComment className="text-blue-500 mr-1" /> {reel.comments?.toLocaleString()}
          </span>
        </div>
        
        {/* --- THIS IS THE FIX --- */}
        {/* Added the logic to display the analysis tags */}
        {reel.analysis && reel.analysis.tags && reel.analysis.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {reel.analysis.tags.map((tag, index) => (
              <span key={index} className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReelCard;

