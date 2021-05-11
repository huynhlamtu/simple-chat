import React, { forwardRef, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCheckSquare,
  faFolder,
} from "@fortawesome/free-regular-svg-icons";
import { faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { searchMessage } from "../../utils/searchMessage";

function Header(user, threads) {
  const { avatar, name } = user.user;

  console.log(threads);

  const [query, setQuery] = useState("");

  const onInputChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleClearQuery = () => {
    setQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMessage(threads, query);
  };

  return (
    <div className="container">
      <div className="container-left">
        <div className="logo">
          <img
            src="https://logos-download.com/wp-content/uploads/2021/01/Discord_Logo_full.png"
            alt=""
          />
        </div>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <div className="search-input">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                placeholder="Type to search to message..."
                onChange={onInputChange}
                value={query}
              />
              {query.length > 0 && (
                <span className="clearBtn" onClick={handleClearQuery}>
                  x
                </span>
              )}
            </div>
          </form>
        </div>
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
