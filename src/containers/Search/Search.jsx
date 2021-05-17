import React, { forwardRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { searchMessage } from "../../utils/searchMessage";
import { saveMatchMessage } from "../../actions/index";
import store from "../../store/index";
import "./Search.css";
import SearchResult from "./SearchResult/SearchResult";

function Search() {
  const { threads } = store.getState();
  const [query, setQuery] = useState("");
  const [inputFocus, setInputFocus] = useState(false);

  const [matchMessages, setMatchMessages] = useState([]);

  const onInputChange = (e) => {
    const _query = e.currentTarget.value;
    setQuery(_query);
    const validatedQuery = _query.replace(/[^a-z0-9]/gi, " ");
    const matchResult = searchMessage(threads, validatedQuery);
    setMatchMessages(matchResult);
  };

  const handleClearQuery = () => {
    setQuery("");
    setMatchMessages([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onClickMatchItem = (m) => {
    store.dispatch(saveMatchMessage(m.message.id, m.threadId));
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div className="search-input">
          <FontAwesomeIcon icon={faSearch} />
          <input
            onFocus={() => {
              setInputFocus(true);
            }}
            onBlur={() => {
              setInputFocus(false);
            }}
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
      <SearchResult
        matchMessages={matchMessages}
        onClickMatchItem={onClickMatchItem}
        query={query}
        inputFocus={inputFocus}
      />
    </div>
  );
}
export default Search;
