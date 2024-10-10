// Sidebar.js
import React, { useState } from "react";
import {
  FaBars,
  FaHome,
  FaHistory,
  FaFolderOpen,
  FaUserCircle,
  FaPlayCircle,
  FaClock,
  FaThumbsUp,
  FaVideo,
  FaFire,
} from "react-icons/fa";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={`bg-gray-900 max-h-full ${
        isExpanded ? "w-64" : "w-20"
      } p-5 text-white shadow-lg transition-width duration-300`}
    >
      {/* hamburger */}
      <div
        className="mb-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <FaBars className="text-2xl" />
      </div>

      <ul className="space-y-6">
        <li className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaHome className="text-xl" />
          {isExpanded && <span className="text-lg">Home</span>}
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaFire className="text-xl" />
          {isExpanded && <span className="text-lg">Gaming</span>}
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaUserCircle className="text-xl" />
          {isExpanded && <span className="text-lg">Subscriptions</span>}
        </li>

        <hr className="border-gray-600" />

        <li className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaUserCircle className="text-xl" />
          {isExpanded && <span className="text-lg">You</span>}
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaUserCircle className="text-xl" />
          {isExpanded && <span className="text-lg">Your channel</span>}
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaHistory className="text-xl" />
          {isExpanded && <span className="text-lg">History</span>}
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaFolderOpen className="text-xl" />
          {isExpanded && <span className="text-lg">Playlists</span>}
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaVideo className="text-xl" />
          {isExpanded && <span className="text-lg">Your videos</span>}
        </li>

        <hr className="border-gray-600" />

        <li className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaClock className="text-xl" />
          {isExpanded && <span className="text-lg">Watch later</span>}
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaThumbsUp className="text-xl" />
          {isExpanded && <span className="text-lg">Liked videos</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
