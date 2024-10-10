import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

function Feed() {
  return (
    <div>
      <div className="p-4 ">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={`video/20/4521`}>
            <video
              className="rounded-t-lg w-full"
              poster="https://img.youtube.com/vi/YxlAt7kNP9U/maxresdefault.jpg"
              muted
              autoplay
              controls
            >
              <source
                src="https://www.storyblocks.com/video/search/short-clip"
                type="video/mp4"
              ></source>
            </video>
          </Link>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 md:text-xl text-md font-bold tracking-tight text-gray-900 dark:text-white">
                How to learn programming and become an expert in just 3days
              </h5>
            </a>
            <a href="">
              <h1 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Rampop Channel
              </h1>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              2.5M views &bull; 2 days ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
