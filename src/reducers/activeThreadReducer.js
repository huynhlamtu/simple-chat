import { OPEN_THREAD } from "../actions/constants/action-types";

const activeThreadReducer = (state = {}, action) => {
  switch (action.type) {
    case OPEN_THREAD:
      return action.payload;
    default:
      return state;
  }
};

export default activeThreadReducer;
