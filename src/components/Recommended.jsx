import React, { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../data";
import { Link } from "react-router-dom";

function RecommendedVideos({ categoryId }) {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

    await fetch(relatedVideo_url)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.items) {
          setApiData(data.items);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div className="mt-4 space-y-6 w-full">
      <h3 className="text-2xl font-bold">Recommended Videos</h3>

      <div className="grid gap-2">
        {apiData.map(
          (item, index) =>
            item.snippet && (
              <Link
                to={`/video/${item.snippet.categoryId}/${item.id}`}
                key={index}
                className="flex space-x-4 bg-gray-800 p-4 rounded-md"
              >
                <img
                  src={item.snippet.thumbnails.medium.url}
                  alt="Thumbnail"
                  className="w-32 h-24 object-cover rounded-md"
                />
                <div className="flex flex-col justify-between">
                  <h4 className="font-semibold text-sm text-white">
                    {item.snippet.title}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {item.snippet.channelTitle}
                  </p>
                  <p className="text-xs text-gray-400">
                    {value_converter(item.statistics.viewCount)} Views
                  </p>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default RecommendedVideos;
