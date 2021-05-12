import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faCheckSquare,
  faFolder,
} from "@fortawesome/free-regular-svg-icons";
import Search from "../../containers/Search/Search";

function Header({ user }) {
  const { name, avatar } = user;

  return (
    <div className="container">
      <div className="container-left">
        <div className="logo">
          <img
            src="https://logos-download.com/wp-content/uploads/2021/01/Discord_Logo_full.png"
            alt=""
          />
        </div>
        <Search />
      </div>
      <div className="menu">
        <ul className="menu-icons">
          <li className="menu-icon">
            <a href="">
              <FontAwesomeIcon icon={faCheckSquare} />
            </a>
          </li>
          <li className="menu-icon">
            <a href="">
              <FontAwesomeIcon icon={faFolder} />
            </a>
          </li>
          <li className="menu-icon">
            <a href="">
              <FontAwesomeIcon icon={faUserPlus} />
            </a>
          </li>
          <li className="menu-icon">
            <a href="">
              <FontAwesomeIcon icon={faBell} />
            </a>
          </li>
        </ul>
        <div className="user-dropdown">
          <img src={avatar} alt={name} />
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
