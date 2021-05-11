import { combineReducers } from "redux";
import threadReducer from "./threadReducer";
import activeThreadReducer from "./activeThreadReducer";
import UserReducer from "./userReducer";

const reducer = combineReducers({
  threads: threadReducer,
  activeThreadId: activeThreadReducer,
  user: UserReducer,
});

export default reducer;
