import { ADD_MESSAGE, DELETE_MESSAGE } from "../constants/threadAction";
import { v4 } from "uuid";

const messagesReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        text: action.text,
        timestamp: Date.now(),
        id: v4(),
      };
      return state.concat(newMessage);
    }
    case DELETE_MESSAGE: {
      return state.filter((m) => m.id !== action.id);
    }
    default: {
      return state;
    }
  }
};

export default messagesReducer;
