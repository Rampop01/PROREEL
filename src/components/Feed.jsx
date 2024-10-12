import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../data";
import moment from "moment";

function Feed({ category }) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {data &&
        data.map((item, index) => (
          <div className="p-2 flex" key={index}>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <Link to={`video/${item.snippet.categoryId}/${item.id}`}>
                <img
                  src={item.snippet.thumbnails.medium.url}
                  className="rounded-t-lg w-full h-48 object-cover"
                  alt={item.snippet.title}
                />
              </Link>
              <div className="p-5 flex-grow">
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                  {item.snippet.title}
                </h5>
                <h1 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                  {item.snippet.channelTitle}
                </h1>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
                  {value_converter(item.statistics.viewCount)} views &bull;{" "}
                  {moment(item.snippet.publishedAt).fromNow()}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Feed;
