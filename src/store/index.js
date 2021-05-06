import { createStore } from "redux";
import reducer from "../reducers/index";
import { v4 } from "uuid";

const initialState = {
  activeThreadId: "1-fca2", // New state property
  threads: [
    // Two threads in state
    {
      id: "1-fca2", // hardcoded pseudo-UUID
      title: "Buzz Aldrin",
      messages: [
        {
          // This thread starts with a single message already
          text: "Twelve minutes to ignition.",
          timestamp: Date.now(),
          id: v4(),
        },
      ],
    },
    {
      id: "2-be91",
      title: "Michael Collins",
      messages: [],
    },
  ],
};

const store = createStore(reducer, initialState);

export default store;
