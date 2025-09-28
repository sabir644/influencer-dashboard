// frontend/src/App.jsx

import React, { useState, useEffect } from 'react';
import ProfileHeader from './components/ProfileHeader';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import EngagementChart from './components/EngagementChart';
import AudienceDemographics from './components/AudienceDemographics';
import PostGrid from './components/PostGrid';
import ReelsGrid from './components/ReelsGrid';
import ReelModal from './components/ReelModal';
import { FaHome, FaChartBar, FaUser, FaEnvelope, FaCog, FaLightbulb } from 'react-icons/fa';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedReel, setSelectedReel] = useState(null);

  const handleReelClick = (reel) => {
    setSelectedReel(reel);
  };

  const handleCloseModal = () => {
    setSelectedReel(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-xl">Loading...</div>;
  }
  if (error) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-red-500 text-xl">Error: {error}</div>;
  }

  return (
    <div className="flex bg-gray-900 min-h-screen text-white font-sans">
      <aside className="w-16 bg-gray-800 flex-col items-center py-6 shadow-lg hidden md:flex">
        <div className="mb-10 text-xl font-bold text-indigo-500">B</div>
        <nav className="flex flex-col space-y-6">
          <FaHome className="text-gray-400 hover:text-indigo-400 cursor-pointer text-xl" />
          <FaChartBar className="text-gray-400 hover:text-indigo-400 cursor-pointer text-xl" />
          <FaUser className="text-gray-400 hover:text-indigo-400 cursor-pointer text-xl" />
          <FaEnvelope className="text-gray-400 hover:text-indigo-400 cursor-pointer text-xl" />
        </nav>
        <div className="mt-auto flex flex-col space-y-6">
          <FaLightbulb className="text-gray-400 hover:text-indigo-400 cursor-pointer text-xl" />
          <FaCog className="text-gray-400 hover:text-indigo-400 cursor-pointer text-xl" />
        </div>
      </aside>

      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <ProfileHeader profile={data.profile} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-2 space-y-8">
            <AnalyticsDashboard analytics={data.analytics} profile={data.profile} />
            <EngagementChart posts={data.posts} />
            {/* --- THIS COMPONENT HAS BEEN MOVED BACK --- */}
            <AudienceDemographics demographics={data.analytics.audienceDemographics} />
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">PROFESSION</h3>
              <div className="space-y-3">
                <div><p className="text-sm text-gray-400">Occupation</p><p className="text-md font-medium">{data.profile.bioDetails?.occupation || 'N/A'}</p></div>
                <div><p className="text-sm text-gray-400">Team / Company</p><p className="text-md font-medium">{data.profile.bioDetails?.team || 'N/A'}</p></div>
              </div>
              <div className="flex space-x-4 mt-6 pt-4 border-t border-gray-700">
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-indigo-600 rounded-lg text-white font-medium hover:bg-indigo-700 transition-colors duration-200">
                  <FaEnvelope className="mr-2" /> Send Email
                </button>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-6">PERSONALITY</h3>
              <div className="space-y-4">
                <div><p className="text-gray-300 text-sm mb-2">Adventure</p><div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-green-500 h-2.5 rounded-full" style={{ width: '75%' }}></div></div></div>
                <div><p className="text-gray-300 text-sm mb-2">Extrovert</p><div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-green-500 h-2.5 rounded-full" style={{ width: '45%' }}></div></div></div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-6">INTERESTS</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex flex-col items-center justify-center bg-gray-700 rounded-full w-24 h-24 text-center text-sm font-medium"><p>64%</p><p className="text-xs text-gray-400">TRAVEL</p></div>
                <div className="flex flex-col items-center justify-center bg-gray-700 rounded-full w-28 h-28 text-center text-sm font-medium"><p>80%</p><p className="text-xs text-gray-400">CRICKET</p></div>
                <div className="flex flex-col items-center justify-center bg-gray-700 rounded-full w-24 h-24 text-center text-sm font-medium"><p>70%</p><p className="text-xs text-gray-400">FITNESS</p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
          <PostGrid posts={data.posts} />
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Recent Reels</h2>
          <ReelsGrid reels={data.reels} onReelClick={handleReelClick} />
        </div>
      </main>
      <ReelModal reel={selectedReel} onClose={handleCloseModal} />
    </div>
  );
}

export default App;



