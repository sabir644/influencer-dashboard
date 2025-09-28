// frontend/src/components/ReelModal.jsx

import React, { useState, useRef } from 'react';
import { FaTimes, FaVolumeMute, FaVolumeUp, FaPlay } from 'react-icons/fa'; // Updated icons

const ReelModal = ({ reel, onClose }) => {
  // --- NEW: State to manage mute and play status ---
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null); // Ref to directly control the video element

  if (!reel) {
    return null;
  }

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  // --- NEW: Function to toggle mute ---
  const handleToggleMute = (e) => {
    e.stopPropagation(); // Prevents the video click handler from firing
    setIsMuted(!isMuted);
  };

  // --- NEW: Function to toggle play/pause ---
  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 rounded-xl shadow-xl w-full max-w-sm h-[90vh] relative flex flex-col overflow-hidden"
        onClick={handleModalContentClick}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl hover:text-gray-400 z-20">
          <FaTimes />
        </button>

        <div className="relative flex-grow cursor-pointer" onClick={handleVideoClick}>
          {reel.videoUrl ? (
            <video 
              ref={videoRef} // Assign the ref to the video element
              src={`/assets/videos/${reel.videoUrl}`} 
              className="absolute top-0 left-0 w-full h-full object-contain"
              autoPlay 
              loop
              muted={isMuted} // Mute state is now controlled by React state
              // The 'controls' attribute has been removed
            />
          ) : (
            <img 
              src={`/assets/images/${reel.thumbnailUrl}`} 
              alt={reel.caption} 
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
          )}

          {/* --- NEW: Play icon overlay when paused --- */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <FaPlay className="text-white text-6xl" />
            </div>
          )}

          {/* Overlay with Caption, Stats, and our new Mute Button */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/70 to-transparent text-white">
            <p className="text-sm mb-3">{reel.caption}</p>
            <div className="flex items-center justify-around text-white border-t border-gray-700 pt-3">
              {/* Stats are now part of the main overlay */}
            </div>
          </div>
          
          {/* --- NEW: Custom Mute/Unmute Button --- */}
          {reel.videoUrl && (
            <button 
              onClick={handleToggleMute} 
              className="absolute bottom-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white text-xl hover:bg-opacity-75 z-20"
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default ReelModal;

