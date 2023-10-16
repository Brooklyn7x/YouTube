import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Game",
  "Songs",
  "Movies",
  "News",
  "Live",
  "Buttons",
  "Shubham",
  "Cricket",
  "FootBall",
  "PLays",
  "Cool",
  "LetGo",
  "Yooo",
  ,
  "weq",
  "QWEwewq",
];

const ButtonList = () => {
  return (
    <div className="w-screen overflow-x-scroll">
      <div className="flex">
        {list.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
