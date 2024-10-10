// Navbar.js
import React from "react";
import logo from "./logo.jpeg";
import {
  FaYoutube,
  FaBell,
  FaUpload,
  FaUserCircle,
  FaMicrophone,
  FaSearch,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="w-full bg-gray-600 text-white py-4 md:px-6 px-2 shadow-md">
      <div className=" mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center md:space-x-2">
          <img
            src={logo}
            alt="logo"
            className="md:h-12 md:w-12 h-6 w-6 rounded-full"
          />
          <span className="md:text-2xl font-semibold ">
            PRO<span className="text-red-500">REEL</span>
          </span>
        </div>

        {/* Search Bar Section */}
        <div className="flex items-center md:mx-4 mx-2 md:gap-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="w-full md:p-2 md:pl-3 md:pr-10 rounded-l-full border-none focus:outline-none text-black"
            />

            <button className="bg-red-500 p-2  rounded-r-full hover:bg-red-600 transition">
              <FaSearch className=" text-gray-400" />
            </button>
          </div>
          <div className=" ">
            <FaMicrophone
              className="hover:text-gray-400 cursor-pointer text-xl hidden md:flex"
              title="Voice Search"
            />
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex items-center md:space-x-6">
          <FaBell
            className="hover:text-gray-400 cursor-pointer text-xl hidden md:flex"
            title="Notifications"
          />
          <FaUpload
            className="hover:text-gray-400 cursor-pointer text-xl hidden md:flex"
            title="Upload Video"
          />
          <FaUserCircle
            className="hover:text-gray-400 cursor-pointer text-2xl md:w-12 md:h-12"
            title="Profile"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
