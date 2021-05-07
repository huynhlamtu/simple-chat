import React from "react";
import "./Empty.css";

function Empty({ title }) {
  return (
    <div className="Empty">
      <h1 className="Empty__name">Welcome, user</h1>
      {/* <img src={profile_pic} alt={name} className="Empty__img" />
      <p className="Empty__status">
        <b>Status</b> {status}
      </p> */}
      <button className="Empty__btn">
        Start a conversation by click on a thread
      </button>
      <p className="Empty__info">
        Search for someone to start chatting with or go to Contacts to see who
        is available
      </p>
    </div>
  );
}

export default Empty;
