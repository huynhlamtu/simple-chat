import React, { useRef, useEffect } from "react";
import { deleteMessage } from "../../../../actions";
import store from "../../../../store";
import "./Chat.css";

function Chat({ message, selectedMsg, onSelectMsg }) {
  const { activeThreadId, matchMessageId } = store.getState();

  const { text, is_user_message, id } = message;

  const chatRef = useRef();

  const onClick = ({ id }) => {
    store.dispatch(deleteMessage(id, activeThreadId));
  };

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollIntoView({ behavior: "auto" });
  });

  if (id === matchMessageId)
    return (
      <pre
        id={id}
        ref={chatRef}
        className={`Chat ${is_user_message ? "is-user-msg" : ""}`}
        onClick={() => onSelectMsg(id)}
      >
        {text}
        {selectedMsg === id && (
          <span
            className={`btn-del ${
              is_user_message ? "btn-del-user" : "btn-del-friend"
            }`}
            onClick={onClick.bind(null, message)}
          >
            X
          </span>
        )}
      </pre>
    );

  return (
    <pre
      id={id}
      className={`Chat ${is_user_message ? "is-user-msg" : ""}`}
      onClick={() => onSelectMsg(id)}
    >
      {text}
      {selectedMsg === id && (
        <span
          className={`btn-del ${
            is_user_message ? "btn-del-user" : "btn-del-friend"
          }`}
          onClick={onClick.bind(null, message)}
        >
          X
        </span>
      )}
    </pre>
  );
}

export default Chat;
