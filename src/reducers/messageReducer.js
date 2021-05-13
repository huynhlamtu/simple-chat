import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  UPDATE_MESSAGE,
} from "../actions/constants/action-types";
import { v4 } from "uuid";

const messagesReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        text: action.payload.message,
        timestamp: Date.now(),
        id: v4(),
        is_user_message: true,
      };
      return state.concat(newMessage);
    }
    case DELETE_MESSAGE: {
      return state.filter((m) => m.id !== action.payload.id);
    }

    case UPDATE_MESSAGE: {
      const messageIndex = state.findIndex(
        (m) => m.id === action.payload.messageId
      );
      const oldMessage = state[messageIndex];
      const updatedMessage = {
        ...oldMessage,
        text: action.payload.newText,
      };
      return [
        ...state.slice(0, messageIndex),
        updatedMessage,
        ...state.slice(messageIndex + 1, state.length),
      ];
    }
    default: {
      return state;
    }
  }
};

export default messagesReducer;
