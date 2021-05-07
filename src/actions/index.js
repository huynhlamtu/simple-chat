import {
  OPEN_THREAD,
  ADD_MESSAGE,
  SET_TYPING_VALUE,
  DELETE_MESSAGE,
} from "./constants/action-types";

export const setActiveThread = (id) => ({
  type: OPEN_THREAD,
  payload: id,
});

export const setTypingValue = (value, activeThreadId) => ({
  type: SET_TYPING_VALUE,
  payload: {
    text: value,
    activeThreadId,
  },
});

export const sendMessage = (message, activeThreadId) => ({
  type: ADD_MESSAGE,
  payload: {
    message,
    activeThreadId,
  },
});

export const deleteMessage = (id, activeThreadId) => {
  return {
    type: DELETE_MESSAGE,
    payload: {
      id,
      activeThreadId,
    },
  };
};
