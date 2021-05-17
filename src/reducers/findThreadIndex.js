import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  OPEN_THREAD,
  SET_TYPING_VALUE,
  UPDATE_MESSAGE,
} from "../actions/constants/action-types";

function findThreadIndex(threads = {}, action) {
  switch (action.type) {
    case OPEN_THREAD: {
      return threads.findIndex((t) => t.id === action.payload);
    }
    case ADD_MESSAGE:
    case UPDATE_MESSAGE:
    case SET_TYPING_VALUE: {
      return threads.findIndex((t) => t.id === action.payload.activeThreadId);
    }
    case DELETE_MESSAGE: {
      return threads.findIndex((t) =>
        t.messages.find((m) => m.id === action.payload.id)
      );
    }
  }
}

export default findThreadIndex;
