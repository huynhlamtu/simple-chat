import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { updateMessage } from "../../../../../actions";
import store from "../../../../../store";
import "./ChatInput.css";

function ChatInput({ message, onSelectMsg, onSetOnEdit }) {
  const { activeThreadId } = store.getState();
  const { text, id, textArr } = message;

  let initialText = "";

  if (textArr) {
    for (var i = 0; i < textArr.length; i++) {
      if (i === 0) {
        initialText += textArr[i];
      }
      if (i > 0) {
        initialText += "\n";
        initialText += textArr[i];
      }
    }
  } else {
    initialText = text;
  }

  const [newText, setNewText] = useState(initialText);

  const handleChange = (e) => {
    setNewText(e.currentTarget.value);
  };

  const onCancel = () => {
    onSetOnEdit(false);
    onSelectMsg(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newText) {
      store.dispatch(updateMessage(id, newText, activeThreadId));
      onSelectMsg(null);
      onSetOnEdit(false);
    }
  };

  const style = {
    maxWidth: "200%",
    padding: ".975rem",
    background: "#2b2c33",
    color: "white",
    fontSize: "13px",
    outline: "0",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  };

  const btnDisableStyle = {
    backgroundColor: "rgb(18, 206, 18, 0.5)",
  };

  const btnStyle = {
    backgroundColor: "rgb(18, 206, 18)",
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <TextareaAutosize
          style={style}
          value={newText}
          onChange={handleChange}
          maxRows={5}
          autoFocus="on"
        />
        <button
          style={newText.length > 0 ? btnStyle : btnDisableStyle}
          className="checkBtn tooltip-item"
        >
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </form>
      <div className="tooltip">
        <div
          className="tooltip-item cancel onEdit"
          title="cancel"
          onClick={onCancel}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
