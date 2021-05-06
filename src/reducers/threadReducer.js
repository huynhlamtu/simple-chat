import { ADD_MESSAGE, DELETE_MESSAGE } from "../constants/threadAction";
import messagesReducer from "./messageReducer";
import findThreadIndex from "./findThreadIndex";

const threadReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
    case "DELETE_MESSAGE": {
      const threadIndex = findThreadIndex(state, action);
      const oldThread = state[threadIndex];
      const newThread = {
        ...oldThread,
        messages: messagesReducer(oldThread.messages, action),
      };
      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(threadIndex + 1, state.length),
      ];
    }
    default:
      return state;
  }
};

export default threadReducer;
