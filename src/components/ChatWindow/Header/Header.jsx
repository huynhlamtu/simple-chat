import React from "react";
import "./Header.css";

function Header({ activeThread }) {
  return (
    <header className="Header">
      <h3 className="Header__name">{activeThread.title}</h3>
      {/* <p className="Header__status">{status}</p> */}
    </header>
  );
}

export default Header;
