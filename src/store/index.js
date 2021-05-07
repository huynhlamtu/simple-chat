import { createStore } from "redux";
import reducer from "../reducers/index";
import { v4 } from "uuid";

const initialState = {
  activeThreadId: null, // New state property
  threads: [
    // Two threads in state
    {
      id: "1-fca2", // hardcoded pseudo-UUID
      title: "Arthur Shelby",
      typing: "",
      messages: [
        {
          text: "Oit Tommay",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: false,
        },
        {
          text: "Today is a good day, right?",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: false,
        },
        {
          text: "Yeah Arthur",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: true,
        },
        {
          text: "Call John",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: true,
        },
        {
          text: "Now?",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: false,
        },
        {
          text: "Right",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: true,
        },
        {
          text: "We'll go to London...",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: true,
        },
      ],
    },
    {
      id: "2-be91",
      title: "Alfie Solomons",
      typing: "",
      messages: [
        {
          text: "Soooo",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: false,
        },
        {
          text: "How did you know that I'm not dead",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: false,
        },
        {
          // This thread starts with a single message already
          text: "You wrote me a letter Alfie",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: true,
        },
        {
          // This thread starts with a single message already
          text: "Oh, did I?",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: false,
        },
      ],
    },
  ],
};

const store = createStore(reducer, initialState);

export default store;
