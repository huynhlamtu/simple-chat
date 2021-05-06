import React from "react";
import Thread from "../../containers/Thread/Thread";
import "./Sidebar.css";

function Sidebar({ threads }) {
  return (
    <aside className="sidebar">
      {threads.map((thread) => (
        <Thread thread={thread} key={thread.id} />
      ))}
    </aside>
  );
}

export default Sidebar;
