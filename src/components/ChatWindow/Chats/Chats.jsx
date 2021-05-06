import React, { useEffect } from "react";
import Chat from "./Chat/Chat";
import "./Chats.css";

function Chats({ messages }) {
  const chatsRef = React.createRef();

  const scrollToBottom = () => {
    chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="Chats" ref={chatsRef}>
      {messages.map((message) => (
        <Chat message={message} key={message.id} />
      ))}
    </div>
  );
}

export default Chats;
