import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUR_API_KEY } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false); // Add showMore state
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoDetail();
  }, []);

  const fetchVideoDetail = async () => {
    try {
      const data = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
          searchParams.get("v") +
          "&key=" +
          YOUR_API_KEY
      );
      const json = await data.json();
      if (json.items && json.items.length > 0) {
        console.log(json.items);
        setVideoData(json.items[0]);

        setLoading(false);
      } else {
        console.error("No video data found");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching video data:", error);
      setLoading(false);
    }
  };

  // Event handler to toggle showMore state
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="p-6">
        {loading && <p>Loading...</p>}
        {!loading && videoData && (
          <>
            <iframe
              className="rounded-2xl"
              width="1100"
              height="570"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h1 className="font-bold py-2 px-2 text-lg">
              {videoData.snippet.title}
            </h1>
          </>
        )}
      </div>
      {!loading && videoData && (
        <div className="flex mx-8 -my-5 w-4/4">
          <div>
            <img
              className="w-14 rounded-full my-1 "
              alt="channel-logo"
              src={videoData.snippet.thumbnails.default.url}
            />
          </div>
          <div className="px-2">
            <ul className="font-bold">{videoData.snippet.channelTitle} ☑️</ul>
            <ul className="text-xs">400K Subscribers</ul>
          </div>
          <div className="mx-2 my-1 px-8 py-2 bg-gray-200 rounded-full">
            <button>🔕 Subscribe ⌵ </button>
          </div>
          <div className="px-8">
            <button className="-mx-2 my-1 px-4 py-2 bg-gray-200 rounded-l-full">
              👍🏻 {videoData.statistics.likeCount}
            </button>
            <button className="mx-2 -my-12 px-3 py-2 bg-gray-200 rounded-r-full">
              ⎸ 👎🏻
            </button>
            <button className="mx-2 my-1 px-8 py-2 bg-gray-200 rounded-full">
              🔁 Share
            </button>
            <button className="mx-2 my-1 px-8 py-2 bg-gray-200 rounded-full">
              ↓ Download
            </button>
            <button className="mx-2 my-1 px-6 py-2 bg-gray-200 rounded-full">
              ...
            </button>
          </div>
        </div>
      )}
      {!loading && videoData && (
        <div className="bg-gray-200 mx-6 my-9 rounded-2xl px-5 py-2">
          <ul>{videoData.statistics.viewCount} views</ul>
          {showMore && <ul>{videoData.snippet.description}</ul>}
          <button onClick={handleShowMore}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
      {!loading && videoData && (
        <div className="px-7 -my-3 font-semibold ">
          <h1>{videoData.statistics.commentCount} Comments</h1>
        </div>
      )}
    </div>
  );
};

export default WatchPage;
