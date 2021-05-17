import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  UPDATE_MESSAGE,
} from "../actions/constants/action-types";
import { v4 } from "uuid";

const messagesReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const messages = action.payload.message;
      const fmtMsg = formatMessage(messages);

      if (fmtMsg.checkSplit) {
        const newMessage = {
          textArr: [...fmtMsg.messageArr],
          timestamp: Date.now(),
          id: v4(),
          is_user_message: true,
        };
        return state.concat(newMessage);
      }

      const newMessage = {
        text: fmtMsg.text,
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

      const messages = action.payload.newText;
      const fmtMsg = formatMessage(messages);

      if (fmtMsg.checkSplit) {
        const updatedMessage = {
          ...oldMessage,
          textArr: fmtMsg.messageArr,
        };
        return [
          ...state.slice(0, messageIndex),
          updatedMessage,
          ...state.slice(messageIndex + 1, state.length),
        ];
      }

      const updatedMessage = {
        ...oldMessage,
        text: fmtMsg.text,
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

const formatMessage = (messages) => {
  const checkSplit = messages.includes("\n");

  if (checkSplit) {
    const messageArr = messages.split("\n");

    // let num = messageArr.length;

    // while (messageArr[num - 1].length === 0) {
    //   console.log("alo", num);
    //   messageArr.pop();
    //   num--;
    // }

    while (messageArr[messageArr.length - 1].length === 0) {
      messageArr.pop();
    }

    return {
      checkSplit,
      messageArr,
    };
  }

  return {
    text: messages,
  };
};
