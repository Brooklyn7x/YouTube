import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import store from "../utils/store";

const LiveChat = () => {
  const dispatch = useDispatch();

  const message = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: "Shubham kk",
          message: " 🤪",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="ml-2 mt-1 p-2 border w-full h-[570px] border-black rounded-xl bg-slate-100 overflow-y-scroll flex flex-col-reverse ">
      {message.map((c,index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
