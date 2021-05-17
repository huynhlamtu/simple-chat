import React, { useRef, useEffect } from "react";
import store from "../../../../../store";
import "./Chat.css";

function Chat({ message }) {
  const { matchMessageId } = store.getState();

  const { text, id, is_user_message, textArr } = message;

  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollIntoView({ behavior: "auto" });
  });

  if (id === matchMessageId)
    return (
      <div
        className={`Chat ${is_user_message ? "is-user-msg" : "is-friend-msg"}`}
        ref={chatRef}
      >
        {textArr &&
          textArr.map((text) => {
            text.length > 0 ? (
              <p>{text.length > 0 ? text : " "}</p>
            ) : (
              <pre> </pre>
            );
          })}
        {!textArr && <p>{text}</p>}
      </div>
    );

  return (
    <div
      id={id}
      className={`Chat ${is_user_message ? "is-user-msg" : "is-friend-msg"}`}
    >
      {textArr &&
        textArr.map((text) =>
          text.length > 0 ? <p>{text.length > 0 ? text : " "}</p> : <pre> </pre>
        )}
      {!textArr && <p id={id}>{text}</p>}
    </div>
  );
}

export default Chat;
