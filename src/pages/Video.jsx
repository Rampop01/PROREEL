import React from "react";

const videos = [
  {
    id: 1,
    title: "React Tutorial for Beginners",
    channel: "Code Academy",
    views: "1.5M views",
    duration: "12:34",
    thumbnail: "https://via.placeholder.com/300x180",
  },
];

const Video = () => {
  return (
    <div className="mt-4 p-4  flex gap-6 h-80 w-32">
      {videos.map((video) => (
        <div
          key={video.id}
          className="bg-gray-900 rounded-lg shadow-md hover:scale-105 transform transition duration-300"
        >
          <div className="relative">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="rounded-t-lg"
            />

            <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-1 rounded">
              {video.duration}
            </span>
          </div>

          <div className="p-4">
            <h3 className="text-white font-bold text-sm truncate">
              {video.title}
            </h3>
            <p className="text-gray-400 text-xs">{video.channel}</p>
            <p className="text-gray-500 text-xs">{video.views}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Video;
