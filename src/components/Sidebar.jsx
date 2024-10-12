import React, { useState } from "react";
import {
  FaBars,
  FaHome,
  FaGamepad,
  FaCar,
  FaBasketballBall,
  FaFilm,
  FaLaptopCode,
  FaMusic,
  FaBloggerB,
  FaNewspaper,
  FaHeart,
} from "react-icons/fa";

const Sidebar = ({ category, setCategory }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-gray-900 shadow-lg md:h-full p-5 text-white transition-width duration-300">
      <div
        className="mb-6 cursor-pointer md:flex hidden "
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <FaBars className="text-2xl" />
      </div>

      <ul
        className={`flex md:flex-col overflow-x-auto md:overflow-hidden md:space-y-6 space-x-6 md:space-x-0 py-2`}
      >
        <li
          className={`flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer ${
            category === 0 ? "bg-gray-700" : ""
          }`}
          onClick={() => setCategory(0)}
        >
          <FaHome className="text-xl" />
          {isExpanded && <span className="text-lg hidden md:block">Home</span>}
        </li>

        <li
          className={`flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer ${
            category === 20 ? "bg-gray-700" : ""
          }`}
          onClick={() => setCategory(20)}
        >
          <FaGamepad className="text-xl" />
          {isExpanded && (
            <span className="text-lg hidden md:block">Gaming</span>
          )}
        </li>

        <li
          className={`flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer ${
            category === 2 ? "bg-gray-700" : ""
          }`}
          onClick={() => setCategory(2)}
        >
          <FaCar className="text-xl" />
          {isExpanded && (
            <span className="text-lg hidden md:block">Automobiles</span>
          )}
        </li>

        <hr className="border-gray-600 md:hidden" />

        <li
          className={`flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer ${
            category === 17 ? "bg-gray-700" : ""
          }`}
          onClick={() => setCategory(17)}
        >
          <FaBasketballBall className="text-xl" />
          {isExpanded && (
            <span className="text-lg hidden md:block">Sports</span>
          )}
        </li>

        <li
          className={`flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer ${
            category === 24 ? "bg-gray-700" : ""
          }`}
          onClick={() => setCategory(24)}
        >
          <FaFilm className="text-xl" />
          {isExpanded && (
            <span className="text-lg hidden md:block">Entertainment</span>
          )}
        </li>

        <li
          className={`flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer ${
            category === 28 ? "bg-gray-700" : ""
          }`}
          onClick={() => setCategory(28)}
        >
          <FaLaptopCode className="text-xl" />
          {isExpanded && (
            <span className="text-lg hidden md:block">Technology</span>
          )}
        </li>

        <li
          className={`flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer ${
            category === 10 ? "bg-gray-700" : ""
          }`}
          onClick={() => setCategory(10)}
        >
          <FaMusic className="text-xl" />
          {isExpanded && <span className="text-lg hidden md:block">Music</span>}
        </li>

        <hr className="border-gray-600 md:hidden" />

        <li
          className={`flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer ${
            category === 22 ? "bg-gray-700" : ""
          }`}
          onClick={() => setCategory(22)}
        >
          <FaBloggerB className="text-xl" />
          {isExpanded && <span className="text-lg hidden md:block">Blogs</span>}
        </li>

        <li
          className={`flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer ${
            category === 25 ? "bg-gray-700" : ""
          }`}
          onClick={() => setCategory(25)}
        >
          <FaNewspaper className="text-xl" />
          {isExpanded && <span className="text-lg hidden md:block">News</span>}
        </li>

        <li
          className={`flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md cursor-pointer ${
            category === 0 ? "bg-gray-700" : ""
          }`}
          onClick={() => setCategory(0)}
        >
          <FaHeart className="text-xl" />
          {isExpanded && (
            <span className="text-lg hidden md:block">Liked Videos</span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
