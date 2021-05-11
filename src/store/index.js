import { createStore } from "redux";
import reducer from "../reducers/index";
import { v4 } from "uuid";

const id1 = v4();
const id2 = v4();

const initialState = {
  activeThreadId: null, // New state property
  user: {
    name: "Thomas Shelby",
    username: "tommy@gmail.com",
    password: "123456",
    avatar:
      "https://pbs.twimg.com/profile_images/1261126052694417409/v2XA89ja_400x400.jpg",
  },
  threads: [
    // Two threads in state
    {
      id: "1-fca2", // hardcoded pseudo-UUID
      title: "Arthur Shelby",
      avatar:
        "https://pbs.twimg.com/profile_images/1284179938464202754/nN_Za4ai.jpg",
      typing: "",
      lastMessage: {
        text: "We'll go to London...",
        timestamp: Date.now(),
        id: id1,
        is_user_message: true,
        seen: true,
      },
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
          id: id1,
          is_user_message: true,
        },
      ],
    },
    {
      id: "2-be91",
      title: "Alfie Solomons",
      avatar:
        "https://i.pinimg.com/originals/84/40/8e/84408e0b475d424a69551d981b801142.jpg",
      typing: "",
      lastMessage: {
        text: "Oh, did I?",
        timestamp: Date.now(),
        id: id2,
        is_user_message: false,
        seen: true,
      },
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
          id: id2,
          is_user_message: false,
        },
      ],
    },
  ],
};

const store = createStore(reducer, initialState);

export default store;
