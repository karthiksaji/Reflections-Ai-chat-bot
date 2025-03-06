import React from "react";
import "./ChatBotStart.css";

const ChatBotStart = ({ onStartChat }) => {
  return (
    <div className="start-page">
      <button className="start-page-button" onClick={onStartChat}>
        REFLECTIONS AI CHAT BOT
      </button>
    </div>
  );
};

export default ChatBotStart;
