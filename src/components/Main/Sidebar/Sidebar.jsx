import React from "react";
import "./Sidebar.css";
import Thread from "../../../containers/Thread/Thread";
import AddUser from "../../../containers/AddUser/AddUser";

function Sidebar({ threads }) {
  return (
    <aside className="sidebar">
      <AddUser />
      {threads.map((thread) => (
        <Thread thread={thread} key={thread.id} />
      ))}
    </aside>
  );
}

export default Sidebar;
