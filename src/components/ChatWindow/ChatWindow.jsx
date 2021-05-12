import React from "react";
import Header from "./Header/Header";
import Chats from "./Chats/Chats";
import "./ChatWindow.css";
import MessageInput from "./MessageInput/MessageInput";

function ChatWindow({ activeThread, id = null }) {
  const { messages: activeMsgs, typing } = activeThread;
  return (
    <div className="ChatWindow">
      <Header activeThread={activeThread} />
      <Chats messages={activeMsgs} id={id} />
      <MessageInput activeThread={activeThread} value={typing} />
    </div>
  );
}

export default ChatWindow;
