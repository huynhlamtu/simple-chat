import {
  ADD_MESSAGE,
  ADD_USER,
  DELETE_MESSAGE,
  OPEN_THREAD,
  SET_TYPING_VALUE,
  UPDATE_MESSAGE,
} from "../actions/constants/action-types";
import messagesReducer from "./messageReducer";
import findThreadIndex from "./findThreadIndex";
import activeThreadReducer from "./activeThreadReducer";
import { v4 } from "uuid";

const greeting = (username) => {
  return `You have just connected with ${username}`;
};

const threadReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
    case DELETE_MESSAGE: {
      const threadIndex = findThreadIndex(state, action);
      const oldThread = state[threadIndex];
      const messages = messagesReducer(oldThread.messages, action);
      const lastMessageIndex = messages.length - 1;
      const lastMessage = {
        ...messages[lastMessageIndex],
        seen: true,
      };
      const newThread = {
        ...oldThread,
        messages,
        typing: "",
        lastMessage,
      };
      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(threadIndex + 1, state.length),
      ];
    }

    case UPDATE_MESSAGE: {
      const threadIndex = findThreadIndex(state, action);
      const oldThread = state[threadIndex];
      const messages = messagesReducer(oldThread.messages, action);
      const newThread = {
        ...oldThread,
        messages,
      };
      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(threadIndex + 1, state.length),
      ];
    }

    case OPEN_THREAD: {
      const threadIndex = findThreadIndex(state, action);
      const oldThread = state[threadIndex];
      const newThread = {
        ...oldThread,
        lastMessage: {
          ...oldThread.lastMessage,
          seen: true,
        },
      };
      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(threadIndex + 1, state.length),
      ];
    }

    case SET_TYPING_VALUE: {
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
    }

    case ADD_USER: {
      const newThread = {
        id: v4(),
        title: action.payload,
        avatar:
          "https://p.kindpng.com/picc/s/78-785917_user-login-function-name-avatar-user-icon-hd.png",
        typing: "",
        lastMessage: {
          text: greeting(action.payload),
          seen: false,
        },
        messages: [],
      };

      return [newThread, ...state];
    }
    default:
      return state;
  }
};

export default threadReducer;
