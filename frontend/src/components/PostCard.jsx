// src/components/PostCard.jsx

import React from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';

const PostCard = ({ post }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105">
      <img 
        src={`/assets/images/${post.imageUrl}`} 
        alt={post.caption} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <p className="text-sm text-gray-300 mb-2 truncate">{post.caption}</p>
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <span className="flex items-center">
            <FaHeart className="text-red-500 mr-1" /> {post.likes?.toLocaleString()}
          </span>
          <span className="flex items-center">
            <FaComment className="text-blue-500 mr-1" /> {post.comments?.toLocaleString()}
          </span>
        </div>
        {post.analysis && post.analysis.tags && post.analysis.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {post.analysis.tags.map((tag, index) => (
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

export default PostCard;