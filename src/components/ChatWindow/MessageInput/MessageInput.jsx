import React from "react";
import store from "../../../store/index";
import { sendMessage, setTypingValue } from "../../../actions/index";
import "./MessageInput.css";

function MessageInput({ activeThread, value }) {
  const handleChange = (e) => {
    store.dispatch(setTypingValue(e.target.value, activeThread.id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { typing } = activeThread;
    store.dispatch(sendMessage(typing, activeThread.id));
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        autoFocus={true}
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="write a message..."
        className="Message__input"
      />
    </form>
  );
}

export default MessageInput;
