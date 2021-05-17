import {
  OPEN_THREAD,
  SAVE_MATCH_MESSAGE,
} from "../actions/constants/action-types";

const activeThreadReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_MATCH_MESSAGE:
      return action.payload.threadId;
    case OPEN_THREAD:
      return action.payload;
    default:
      return state;
  }
};

export default activeThreadReducer;
