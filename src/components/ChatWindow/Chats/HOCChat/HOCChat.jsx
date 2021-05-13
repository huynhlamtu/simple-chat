import React, { useState, useRef, useEffect } from "react";
import "./HOCChat.css";
import Chat from "./Chat/Chat";
import Tooltip from "./Tooltip/Tooltip";
import ChatInput from "./ChatInput/ChatInput";

function HOCChat({ message, onSelectMsg, selectedMsgId }) {
  const [onEdit, setOnEdit] = useState(false);

  const selectedChatRef = useRef(null);

  const handleClickOutside = (e) => {
    if (
      selectedChatRef.current &&
      !selectedChatRef.current.contains(e.target) &&
      id === selectedMsgId
    ) {
      onSelectMsg(null);
    }
  };

  useEffect(() => {
    // document.addEventListener('keydown', handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      // document.removeEventListener('keydown', handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const onSetOnEdit = (bool) => {
    setOnEdit(bool);
  };

  const { id, is_user_message, text } = message;

  const onSubmit = (newText) => {};

  if (id === selectedMsgId && !onEdit)
    return (
      <div
        ref={selectedChatRef}
        className={`Chat-content ${is_user_message ? "is-user-msg" : ""}`}
      >
        <Tooltip
          onSetOnEdit={onSetOnEdit}
          onSelectMsg={onSelectMsg}
          id={id}
          onEdit={onEdit}
        />
        <Chat message={message} />
      </div>
    );

  if (id === selectedMsgId && onEdit) {
    return (
      <div
        ref={selectedChatRef}
        className={`Chat-content ${is_user_message ? "is-user-msg" : ""}`}
      >
        <ChatInput
          onSubmit={onSubmit}
          onSetOnEdit={onSetOnEdit}
          message={message}
          onSelectMsg={onSelectMsg}
        />
      </div>
    );
  }

  return (
    <div className={`Chat-content ${is_user_message ? "is-user-msg" : ""}`}>
      {is_user_message && (
        <div className="openTooltipBtn" onClick={() => onSelectMsg(id)}>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      )}
      <Chat message={message} />
    </div>
  );
}

export default HOCChat;
