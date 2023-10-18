import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center ">
      <img
        className="h-10"
        src="https://www.shutterstock.com/image-vector/user-icon-person-profile-avatar-260nw-601712213.jpg "
        alt="user-icon"
      />
      <span className="p-2">{name}: </span>
      <spna>{message}</spna>
    </div>
  );
};

export default ChatMessage;
