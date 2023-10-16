import React, { useEffect, useState } from "react";

import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoConatiner = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap mx-8">
      {videos.map((videos) => (
        <Link to={"/watch?v=" + videos.id}>
          <VideoCard key={videos.id} info={videos} />
        </Link>
      ))}
    </div>
  );
};

export default VideoConatiner;
