import React, { useState } from "react";
import { addUser } from "../../actions/index";
import store from "../../store/index";
import "./AddUser.css";

function AddUser() {
  const [username, setUsername] = useState("");

  const onUsernameChange = (e) => {
    setUsername(e.currentTarget.value);
  };

  const onAddUsername = (e) => {
    e.preventDefault();
    if (username) store.dispatch(addUser(username));
    setUsername("");
  };

  return (
    <div className="form-container">
      <form onSubmit={onAddUsername} className="form">
        <input
          type="text"
          id="username"
          value={username}
          onChange={onUsernameChange}
          autoComplete="off"
          placeholder="Add new user to chat..."
        />
        <button>+</button>
      </form>
    </div>
  );
}

export default AddUser;
