import React from "react";
import "./Main.css";
import ChatWindow from "../ChatWindow/ChatWindow";
import "./Main.css";

function Main({ title }) {
  return (
    <main className="main">
      <ChatWindow title={title} />
    </main>
  );
}

export default Main;
