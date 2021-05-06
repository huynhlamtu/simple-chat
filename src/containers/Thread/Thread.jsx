import React from "react";
import store from "../../store/index";
import "./Thread.css";

function Thread({ thread }) {
  const { title, id } = thread;

  //   const handleUserClick = ({ user_id }) => {
  //     store.dispatch(setActiveUserId(user_id));
  //   };

  return (
    // <div className="thread" onClick={handlethreadClick.bind(null, thread)}>
    <div className="thread">
      {/* <img src={profile_pic} alt={name} className="thread__pic" /> */}
      <div className="thread__details">
        {/* <p className="thread__details-name">{name}</p> */}
        <p className="thread__details-status">{title}</p>
      </div>
    </div>
  );
}

export default Thread;
