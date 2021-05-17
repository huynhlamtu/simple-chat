import { combineReducers } from "redux";
import threadReducer from "./threadReducer";
import activeThreadReducer from "./activeThreadReducer";
import userReducer from "./userReducer";
import matchMessageReducer from "./matchMessageReducer";

const reducer = combineReducers({
  matchMessageId: matchMessageReducer,
  activeThreadId: activeThreadReducer,
  user: userReducer,
  threads: threadReducer,
});

export default reducer;
