import React, { useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import store from "../../../store/index";
import { sendMessage, setTypingValue } from "../../../actions/index";
import autosize from "autosize";
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

  // useEffect(() => {
  //   this.textarea.focus();
  //   autosize(this.textarea);
  // }, []);

  const style = {
    width: "100%",
    padding: ".5rem 1rem",
    background: "#9b9a9a77",
    color: "white",
    border: "0",
    borderRadius: "10px",
    fontSize: "1rem",
    outline: "0",
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <div className="messageInput">
        <TextareaAutosize
          style={style}
          value={value}
          onChange={handleChange}
          maxRows={5}
          rows={1}
          placeholder="type some thing..."
          autoFocus="on"
        />
        <button>Send</button>
      </div>
    </form>
  );
}

export default MessageInput;
