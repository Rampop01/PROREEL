import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaShare, FaSave } from "react-icons/fa";
import { API_KEY, value_converter } from "../data";
import moment from "moment";
import { useParams } from "react-router-dom";

function PlayVideo() {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [commentData, setCommentData] = useState(null);
  const [channelData, setChannelData] = useState(null);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY} `;

    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchChannelData = async () => {
    if (apiData && apiData.snippet) {
      const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;

      await fetch(channelData_url)
        .then((res) => res.json())
        .then((data) => setChannelData(data.items[0]));

      const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
      await fetch(comment_url)
        .then((res) => res.json())
        .then((data) => setCommentData(data.items));
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchChannelData();
  }, [apiData]);
  return (
    <div className="flex flex-col p-6 bg-gray-900 md:h-full  text-white space-y-4 ">
      <iframe
        className="w-full  md:h-[37vw] h-[50vw]"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-bold">
          {apiData ? apiData.snippet.title : "Title Here"}
        </h1>
        <p className="mb-3 font-normal text-gray-300 dark:text-gray-400">
          {apiData ? value_converter(apiData.statistics.viewCount) : "0"} views
          &bull; {apiData ? moment(apiData?.snippet.publishedAt).fromNow() : ""}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 ">
            <img
              src={
                channelData ? channelData.snippet.thumbnails.default.url : ""
              }
              alt="Channel Logo"
              className="rounded-full w-10 h-10 -mt-2"
            />

            <div>
              <h2 className="font-semibold text-lg">
                {apiData ? apiData.snippet.channelTitle : ""}
              </h2>
              <p className="text-sm text-gray-400">
                {channelData
                  ? value_converter(channelData.statistics.subscriberCount)
                  : "0"}{" "}
                subscribers
              </p>
            </div>
          </div>

          <button className="bg-red-600 md:px-4 px-2 py-1 md:py-2 rounded-md text-white font-semibold md:text-lg hover:bg-red-700 transition">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          className="flex items-center space-x-2 bg-gray-700 p-2 rounded-md hover:bg-gray-600"
          title="Like"
        >
          <FaThumbsUp className="text-xl" />
          <span className="text-lg">
            {apiData ? value_converter(apiData.statistics.likeCount) : "0"}
          </span>
        </button>

        <button
          className="flex items-center space-x-2 bg-gray-700 p-2 rounded-md hover:bg-gray-600"
          title="Dislike"
        >
          <FaThumbsDown className="text-xl" />
          <span className="text-lg">0</span>
        </button>

        <button
          className="flex items-center space-x-2 bg-gray-700 p-2 rounded-md hover:bg-gray-600"
          title="Share"
        >
          <FaShare className="text-xl" />
        </button>

        <button
          className="flex items-center space-x-2 bg-gray-700 p-2 rounded-md hover:bg-gray-600"
          title="Save"
        >
          <FaSave className="text-xl" />
        </button>
      </div>

      <div className="mt-4 p-4 bg-gray-800 rounded-md">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-sm text-gray-300">
          {apiData
            ? apiData.snippet.description.slice(0, 250) +
              "  " +
              " " +
              "readmore..."
            : ""}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Uploaded on: January 1, 2024
        </p>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2 mt-4">
          {apiData ? value_converter(apiData.statistics.commentCount) : "0"}
          Comments
        </h3>
      </div>

      {commentData &&
        commentData.map((item, index) => {
          return (
            <div key={index} className="flex space-x-2 mb-6">
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt="avate"
                className="rounded-full h-fit object-contain"
              />

              <div className="bg-gray-800 p-4 rounded-md flex flex-col space-y-2 w-full">
                <h4 className="font-semibold">
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                </h4>

                <p className="text-sm text-gray-300">
                  {item.snippet.topLevelComment.snippet.textDisplay}
                </p>

                <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-gray-200 transition">
                      <FaThumbsUp />
                      <span className="text-sm">
                        {value_converter(
                          item.snippet.topLevelComment.snippet.likeCount
                        )}
                      </span>
                    </button>

                    <button className="flex items-center space-x-1 text-gray-400 hover:text-gray-200 transition">
                      <FaThumbsDown />
                      <span className="text-sm">0</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default PlayVideo;
