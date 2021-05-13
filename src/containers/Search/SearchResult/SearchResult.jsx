import React from "react";
import "./SearchResult.css";

function SearchResult({ matchMessages, onClickMatchItem, query, inputFocus }) {
  const style = {
    opacity: inputFocus ? "1" : "0",
  };

  if (query) {
    if (matchMessages.length > 0)
      return (
        <div className="search-result" style={style}>
          {matchMessages.map((m) => (
            <div className="match-item" onClick={() => onClickMatchItem(m)}>
              <img src={m.avatar} alt={m.title} />
              <div className="match-content">
                <h4>{m.title}</h4>
                <p>{`${m.message.is_user_message ? "You: " : ""}${
                  m.message.text
                }`}</p>
              </div>
            </div>
          ))}
        </div>
      );
    <div className="search-result">
      <div className="no-match">No match</div>
    </div>;
  }

  return null;
}

export default SearchResult;
