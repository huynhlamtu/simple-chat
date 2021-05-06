import React from "react";
import "./Chat.css";

function Chat({ message }) {
  const { text } = message;
  return (
    <span className="Chat thread-msg">{text}</span>
    // <span className={`Chat ${is_thread_msg ? "is-thread-msg" : ""}`}>{text}</span>
  );
}

export default Chat;
