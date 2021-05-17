import { SAVE_MATCH_MESSAGE } from "../actions/constants/action-types";

const matchMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_MATCH_MESSAGE:
      return action.payload.messageId;

    default:
      return state;
  }
};

export default matchMessageReducer;
