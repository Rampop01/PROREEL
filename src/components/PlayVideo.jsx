import React from "react";
import { FaThumbsUp, FaThumbsDown, FaShare, FaSave } from "react-icons/fa";

function PlayVideo() {
  return (
    <div className="flex flex-col p-6 bg-gray-900 md:h-full h-screen text-white space-y-4">
      <video className="w-full h-auto max-w-full" autoPlay muted controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>

      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-bold">
          Amazing React Tutorial for Beginners
        </h1>
        <p className="mb-3 font-normal text-gray-300 dark:text-gray-400">
          2.5M views &bull; 2 days ago
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Channel Logo"
              className="rounded-full"
            />

            <div>
              <h2 className="font-semibold text-lg">Coding Channel</h2>
              <p className="text-sm text-gray-400">1.2M subscribers</p>
            </div>
          </div>

          <button className="bg-red-600 md:px-4 px-2 py-1 md:py-2 rounded-md text-white font-semibold md:text-lg hover:bg-red-700 transition">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex space-x-3">
        <button className="flex items-center space-x-2 bg-gray-700 p-2 rounded-md hover:bg-gray-600">
          <FaThumbsUp className="text-xl" />
          <span className="text-lg">1.2M</span>
        </button>

        <button className="flex items-center space-x-2 bg-gray-700 p-2 rounded-md hover:bg-gray-600">
          <FaThumbsDown className="text-xl" />
          <span className="text-lg">0</span>
        </button>

        <button className="flex items-center space-x-2 bg-gray-700 p-2 rounded-md hover:bg-gray-600">
          <FaShare className="text-xl" />
          <span className="text-lg">Share</span>
        </button>

        <button className="flex items-center space-x-2 bg-gray-700 p-2 rounded-md hover:bg-gray-600">
          <FaSave className="text-xl" />
          <span className="text-lg">Save</span>
        </button>
      </div>

      <div className="mt-4 p-4 bg-gray-800 rounded-md">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-sm text-gray-300">
          This tutorial covers the basics of React for beginners, including
          components, state, and props. It provides a comprehensive introduction
          to help new developers get started with React.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Uploaded on: January 1, 2024
        </p>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2 mt-4"> 1.5M Comments</h3>

        <div className="flex space-x-4 mb-6">
          <img
            src="https://via.placeholder.com/35"
            alt="User Avatar"
            className="rounded-full h-fit object-contain"
          />

          <div className="bg-gray-800 p-4 rounded-md flex flex-col space-y-2 w-full">
            <h4 className="font-semibold">John Doe</h4>

            <p className="text-sm text-gray-300">
              This video was really helpful! I learned a lot about React basics.
            </p>

            <div className="flex justify-between items-center pt-2 border-t border-gray-700">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-gray-400 hover:text-gray-200 transition">
                  <FaThumbsUp />
                  <span className="text-sm">10</span>
                </button>

                <button className="flex items-center space-x-1 text-gray-400 hover:text-gray-200 transition">
                  <FaThumbsDown />
                  <span className="text-sm">2</span>
                </button>
              </div>

              <span className="text-xs text-gray-500">3 days ago</span>
            </div>
          </div>
        </div>

        {/* Comment Input */}
        {/* <div className="flex space-x-4 items-start">
          <img
            src="https://via.placeholder.com/35"
            alt="User Avatar"
            className="rounded-full"
          />
          <textarea
            className="w-full p-2 bg-gray-800 rounded-md text-sm text-gray-200"
            rows="3"
            placeholder="Add a comment..."
          ></textarea>
        </div> */}

        {/* Post Comment Button */}
        {/* <div className="mt-2">
          <button className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700 transition">
            Post Comment
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default PlayVideo;
