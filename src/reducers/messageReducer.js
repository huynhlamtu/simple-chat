import { ADD_MESSAGE, DELETE_MESSAGE } from "../actions/constants/action-types";
import { v4 } from "uuid";

const messagesReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const message = action.payload.message;
      const checkSplit = message.includes("\n");

      if (checkSplit) {
        const messages = message.split("\n");
        const newMessage = {
          textArr: [...messages],
          timestamp: Date.now(),
          id: v4(),
          is_user_message: true,
        };
        return state.concat(newMessage);
      }

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
    default: {
      return state;
    }
  }
};

export default messagesReducer;
