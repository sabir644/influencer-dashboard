// frontend/src/components/ReelsGrid.jsx

import React from 'react';
import ReelCard from './ReelCard';

const ReelsGrid = ({ reels, onReelClick }) => {
  if (!reels || reels.length === 0) {
    return <p className="text-gray-400">No reels to display.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {reels.map((reel) => (
        <ReelCard key={reel.id} reel={reel} onClick={() => onReelClick(reel)} />
      ))}
    </div>
  );
};

export default ReelsGrid;

