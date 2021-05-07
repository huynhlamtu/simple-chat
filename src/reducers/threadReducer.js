import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  SET_TYPING_VALUE,
} from "../actions/constants/action-types";
import messagesReducer from "./messageReducer";
import findThreadIndex from "./findThreadIndex";

const threadReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
    case DELETE_MESSAGE: {
      const threadIndex = findThreadIndex(state, action);
      const oldThread = state[threadIndex];
      const newThread = {
        ...oldThread,
        messages: messagesReducer(oldThread.messages, action),
        typing: "",
      };
      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(threadIndex + 1, state.length),
      ];
    }
    case SET_TYPING_VALUE:
      const text = action.payload.text;
      const threadIndex = findThreadIndex(state, action);
      const oldThread = state[threadIndex];
      const newThread = {
        ...oldThread,
        typing: text,
      };
      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(threadIndex + 1, state.length),
      ];
    // return state;
    default:
      return state;
  }
};

export default threadReducer;
