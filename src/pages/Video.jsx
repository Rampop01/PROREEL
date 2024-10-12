import React from "react";
import PlayVideo from "../components/PlayVideo";
import Recommended from "../components/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="md:flex gap-2 overflow-x-hidden ">
      <div className="md:w-[70%] w-full">
        <PlayVideo videoId={videoId} />
      </div>
      <div className="hidden md:flex mr-2 w-[30%]">
        <Recommended categoryId={categoryId} />
      </div>
    </div>
  );
};

export default Video;
