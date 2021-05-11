import React from "react";
import "./Sidebar.css";
import Thread from "../../../containers/Thread/Thread";
import AddUser from "../../../containers/AddUser/AddUser";

function Sidebar({ threads }) {
  return (
    <aside className="sidebar">
      <AddUser />
      <div className="thread-container">
        {threads.map((thread) => (
          <Thread thread={thread} key={thread.id} />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
