import React, { useEffect, useState } from "react";
import Chat from "./Chat/Chat";
import "./Chats.css";

function Chats({ messages }) {
  const [selectedMsg, setSelectedMsg] = useState(null);

  const chatsRef = React.createRef();

  const scrollToBottom = () => {
    chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
  };

  const onSelectMsg = (id) => {
    if (selectedMsg === id) setSelectedMsg(null);
    else setSelectedMsg(id);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (messages.length === 0)
    return (
      <div className="Chats" ref={chatsRef}>
        <h3>Send something to say hi</h3>
      </div>
    );
  return (
    <div className="Chats" ref={chatsRef}>
      {messages.map((message) => (
        <Chat
          message={message}
          key={message.id}
          onSelectMsg={onSelectMsg}
          selectedMsg={selectedMsg}
        />
      ))}
    </div>
  );
}

export default Chats;
