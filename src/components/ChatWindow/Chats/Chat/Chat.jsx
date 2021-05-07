import React from "react";
import { deleteMessage } from "../../../../actions";
import store from "../../../../store";
import "./Chat.css";

function Chat({ message }) {
  const { activeThreadId } = store.getState();

  const { text, is_user_message } = message;

  const onClick = ({ id }) => {
    store.dispatch(deleteMessage(id, activeThreadId));
  };

  return (
    // <span className="Chat is-thread-msg">{text}</span>
    <span
      onClick={onClick.bind(null, message)}
      className={`Chat ${is_user_message ? "is-user-msg" : ""}`}
    >
      {text}
    </span>
  );
}

export default Chat;
