import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/constants";
import { json } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    const timmer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timmer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestion(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col m-2 p-1 shadow-sm">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          alt="hambuger-logo"
        />
        <a href="/" />
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
          alt="youtube-logo"
        ></img>
      </div>
      <div className="col-span-10">
        <div className="flex justify-center">
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-gray-200 p-2 rounded-r-full bg-gray-200">
            Search
          </button>
          <div className=" absolute bg-white w-[33rem]  mr-16 mt-12 rounded-lg shadow-2xl border-b-fuchsia-400 py-2 px-5">
            <ul>
              {suggestion.map((s) => (
                <li key={s} className="py-2 shadow-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex justify-end px-5">
        <img
          className="h-10"
          src="https://www.shutterstock.com/image-vector/user-icon-person-profile-avatar-260nw-601712213.jpg "
          alt="user-icon"
        ></img>
      </div>
    </div>
  );
};

export default Header;
