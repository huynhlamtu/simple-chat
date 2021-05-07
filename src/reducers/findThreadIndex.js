import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  SET_TYPING_VALUE,
} from "../actions/constants/action-types";

function findThreadIndex(threads = {}, action) {
  switch (action.type) {
    case ADD_MESSAGE:
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
