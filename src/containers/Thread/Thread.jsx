import React from "react";
import { setActiveThread } from "../../actions";
import store from "../../store/index";
import "./Thread.css";

function Thread({ thread }) {
  const { title } = thread;

  const handleThreadClick = ({ id }) => {
    store.dispatch(setActiveThread(id));
  };

  return (
    <div className="thread" onClick={handleThreadClick.bind(null, thread)}>
      {/* <img src={profile_pic} alt={name} className="thread__pic" /> */}
      <div className="thread__details">
        {/* <p className="thread__details-name">{name}</p> */}
        <p className="thread__details-status">{title}</p>
      </div>
    </div>
  );
}

export default Thread;
