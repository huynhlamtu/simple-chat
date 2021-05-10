import React from "react";
import { setActiveThread } from "../../actions";
import store from "../../store/index";
import "./Thread.css";

function Thread({ thread }) {
  const { title, id, lastMessage } = thread;

  const { activeThreadId } = store.getState();

  const handleThreadClick = ({ id }) => {
    store.dispatch(setActiveThread(id));
  };

  return (
    <div
      className={activeThreadId === id ? "thread thread-active" : "thread"}
      onClick={handleThreadClick.bind(null, thread)}
    >
      {/* <img src={profile_pic} alt={name} className="thread__pic" /> */}
      <div className="thread__details">
        {/* <p className="thread__details-name">{name}</p> */}
        <p className="thread__details-status">{title}</p>
        <p
          className={
            lastMessage.seen
              ? "thread__message"
              : "thread__message thread__message-unseen"
          }
        >
          {lastMessage.is_user_message && "You: "}
          {lastMessage.text}
        </p>
      </div>
    </div>
  );
}

export default Thread;
