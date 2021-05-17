import React, { useState } from "react";
import { deleteMessage } from "../../../../actions";
import store from "../../../../store";
import "./Chat.css";

function Chat({ message, selectedMsg, onSelectMsg }) {
  const { activeThreadId } = store.getState();

  const { text, is_user_message, id, textArr } = message;

  const onClick = ({ id }) => {
    store.dispatch(deleteMessage(id, activeThreadId));
  };

  if (textArr)
    return (
      <div
        className={`Chat ${is_user_message ? "is-user-msg" : ""}`}
        onClick={() => onSelectMsg(id)}
      >
        {textArr.map((text) => (
          <p>{text}</p>
        ))}

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
      </div>
    );

  return (
    <p
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
    </p>
  );
}

export default Chat;
