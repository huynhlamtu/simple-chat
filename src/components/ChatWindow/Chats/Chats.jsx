import React, { useEffect, useState } from "react";
import "./Chats.css";
import HOCChat from "./HOCChat/HOCChat";

function Chats({ messages, avatar }) {
  const [selectedMsgId, setSelectedMsg] = useState(null);

  const chatsRef = React.createRef();

  const scrollToBottom = () => {
    chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
  };

  const onSelectMsg = (id) => {
    if (selectedMsgId === id) setSelectedMsg(null);
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
        <HOCChat
          avatar={avatar}
          message={message}
          onSelectMsg={onSelectMsg}
          selectedMsgId={selectedMsgId}
        />
      ))}
    </div>
  );
}

export default Chats;
