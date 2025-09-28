// src/components/AudienceDemographics.jsx

import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FaMapMarkerAlt } from 'react-icons/fa';

// Define colors for the charts
const GENDER_COLORS = ['#4299E1', '#F56565']; // Blue for Male, Red for Female
const AGE_COLORS = ['#667EEA', '#ED8936', '#48BB78', '#ECC94B'];

const AudienceDemographics = ({ demographics }) => {
  // Format data for the charts
  const genderData = [
    { name: 'Male', value: demographics.genderSplit.male },
    { name: 'Female', value: demographics.genderSplit.female },
  ];

  const ageData = Object.entries(demographics.ageGroups).map(([name, value]) => ({ name, value }));
  const geoData = Object.entries(demographics.geography).sort(([, a], [, b]) => b - a); // Sort by percentage

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg mt-8">
      <h3 className="text-lg font-semibold mb-6">Audience Demographics (Inferred)</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Gender Split Pie Chart */}
        <div className="flex flex-col items-center">
          <h4 className="text-md font-medium text-gray-300 mb-4">Gender Split</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={genderData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={GENDER_COLORS[index % GENDER_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#2D3748', border: 'none' }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Age Groups Bar Chart */}
        <div className="lg:col-span-2">
          <h4 className="text-md font-medium text-gray-300 mb-4">Age Groups</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={ageData} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" width={60} stroke="#A0AEC0" />
              <Tooltip cursor={{ fill: '#4A5568' }} contentStyle={{ backgroundColor: '#2D3748', border: 'none' }} formatter={(value) => `${value}%`} />
              <Bar dataKey="value" barSize={20}>
                {ageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={AGE_COLORS[index % AGE_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Geography List */}
      <div className="mt-8">
        <h4 className="text-md font-medium text-gray-300 mb-4">Top Locations</h4>
        <ul className="space-y-3">
          {geoData.map(([name, value], index) => (
            <li key={index} className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-indigo-400" />
                {name}
              </span>
              <span className="font-semibold">{value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AudienceDemographics;
