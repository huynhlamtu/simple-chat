import { combineReducers } from "redux";
import threadReducer from "./threadReducer";
import activeThreadReducer from "./activeThreadReducer";

const reducer = combineReducers({
  threads: threadReducer,
  activeThreadId: activeThreadReducer,
});

export default reducer;
