import React from "react";
import store from "../../store";
import Header from "./Header/Header";
import Chats from "./Chats/Chats";
import "./ChatWindow.css";

function ChatWindow() {
  const state = store.getState();
  const { activeThreadId, threads } = state;
  const activeThread = threads.find((t) => t.id === activeThreadId);
  const { messages: activeMsgs } = activeThread;
  return (
    <div className="ChatWindow">
      <Header activeThread={activeThread} />
      <Chats messages={activeMsgs} />
      {/* <MessageInput value={typing} /> */}
    </div>
  );
}

export default ChatWindow;
