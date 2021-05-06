import { OPEN_THREAD } from "../constants/activeThreadAction";

const activeThreadReducer = (state = {}, action) => {
  switch (action.type) {
    case OPEN_THREAD:
      return action.id;
    default:
      return state;
  }
};

export default activeThreadReducer;
