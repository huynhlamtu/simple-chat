import React from "react";
import TextareaAutosize from "react-textarea-autosize";
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
    if (typing) store.dispatch(sendMessage(typing, activeThread.id));
  };

  const style = {
    width: "100%",
    padding: ".5rem 1rem",
    background: "white",
    color: "black",
    border: "1px solid #a9bace",
    borderRadius: "10px",
    fontSize: "1rem",
    outline: "0",
  };

  const btnDisableStyle = {
    backgroundColor: "rgb(7, 65, 255, 0.5)",
  };

  const btnStyle = {
    backgroundColor: "rgb(7, 65, 255)",
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <div className="messageInput">
        <TextareaAutosize
          style={style}
          value={value}
          onChange={handleChange}
          maxRows={5}
          minRows={2}
          placeholder="type some thing..."
          autoFocus="on"
        />
        <button style={value.length > 0 ? btnStyle : btnDisableStyle}>
          Send
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
