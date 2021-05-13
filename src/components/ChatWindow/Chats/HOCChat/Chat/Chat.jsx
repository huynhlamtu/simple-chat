import React, { useRef, useEffect } from "react";
import store from "../../../../../store";
import "./Chat.css";

function Chat({ message }) {
  const { matchMessageId } = store.getState();

  const { text, id, is_user_message } = message;

  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollIntoView({ behavior: "auto" });
  });

  if (id === matchMessageId)
    return (
      <pre
        id={id}
        ref={chatRef}
        className={`Chat ${is_user_message ? "is-user-msg" : "is-friend-msg"}`}
      >
        {text}
      </pre>
    );

  return (
    <pre
      id={id}
      className={`Chat ${is_user_message ? "is-user-msg" : "is-friend-msg"}`}
    >
      {text}
    </pre>
  );
}

export default Chat;
