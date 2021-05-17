import {
  OPEN_THREAD,
  ADD_MESSAGE,
  SET_TYPING_VALUE,
  DELETE_MESSAGE,
  ADD_USER,
  SEARCH_MESSAGE,
  SAVE_MATCH_MESSAGE,
  UPDATE_MESSAGE,
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

export const addUser = (username) => {
  return {
    type: ADD_USER,
    payload: username,
  };
};

export const searchMessage = (query) => {
  return {
    type: SEARCH_MESSAGE,
    payload: query,
  };
};

export const saveMatchMessage = (messageId, threadId) => {
  return {
    type: SAVE_MATCH_MESSAGE,
    payload: {
      messageId,
      threadId,
    },
  };
};

export const updateMessage = (messageId, newText, activeThreadId) => {
  return {
    type: UPDATE_MESSAGE,
    payload: {
      messageId,
      newText,
      activeThreadId,
    },
  };
};
