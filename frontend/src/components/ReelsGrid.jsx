// src/components/ReelsGrid.jsx

import React from 'react';
import ReelCard from './ReelCard'; // Make sure to import the new ReelCard

const ReelsGrid = ({ reels }) => {
  if (!reels || reels.length === 0) {
    return <p className="text-gray-400">No reels to display.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Slightly fewer columns for reels generally */}
      {reels.map((reel) => (
        <ReelCard key={reel.id} reel={reel} />
      ))}
    </div>
  );
};

export default ReelsGrid;