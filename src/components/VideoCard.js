import React from "react";

const VideoCard = ({ info }) => {
  if (!info) {
    return <h1>Video Not Available</h1>;
  }
  console.log(info);
  const { snippet, statistics } = info || {};
  const { channelTitle, title, thumbnails } = snippet || {};
  return (
    <div>
      <div className="p-2 m-2 w-64 h-72 shadow-xs">
        <img
          className="rounded-lg"
          alt="thumdnail"
          src={thumbnails.medium.url}
        />
        <ul>
          <li className="font-bold text-sm">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
