import React from "react";
import "./Main.css";
import ChatWindow from "../ChatWindow/ChatWindow";
import "./Main.css";
import Empty from "../Empty/Empty";

function Main({ activeThread, activeThreadId }) {
  const renderMainContent = () => {
    if (!activeThreadId) {
      return <Empty />;
    }

    return <ChatWindow activeThread={activeThread} />;
  };

  return <main className="main">{renderMainContent()}</main>;
}

export default Main;
