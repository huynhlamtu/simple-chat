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
      id: v4(), // hardcoded pseudo-UUID
      title: "Arthur Shelby",
      avatar:
        "https://pbs.twimg.com/profile_images/1284179938464202754/nN_Za4ai.jpg",
      typing: "",
      lastMessage: {
        text: "So you don't have to",
        timestamp: Date.now(),
        id: id1,
        is_user_message: true,
        seen: true,
      },
      messages: [
        {
          text: "Now, you was seen doing the powder trick down at the Garrison courts",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: false,
        },
        {
          text: "Time are hard",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: true,
        },
        {
          text: "People need a reason to lay a bet",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: true,
        },
        {
          text: "There was a Chinese",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: false,
        },
        {
          text: "The washer women say she she's a witch",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: true,
        },
        {
          text: "It's help them believe",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: true,
        },
        {
          text: "We don't mess with Chinese",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: false,
        },
        {
          text: "Look at the book",
          timestamp: Date.now(),
          id: id1,
          is_user_message: true,
        },
        {
          text: "Chinese have cutters of their own",
          timestamp: Date.now(),
          id: id1,
          is_user_message: false,
        },
        {
          text: "We agreed Arthur...",
          timestamp: Date.now(),
          id: id1,
          is_user_message: true,
        },
        {
          text: "I'm taking charge of drumming up new money",
          timestamp: Date.now(),
          id: id1,
          is_user_message: true,
        },
        {
          text: "You think we can take on the Chinese and Billy Kimber?",
          timestamp: Date.now(),
          id: id1,
          is_user_message: false,
        },
        {
          text: "Billy's got a bloody army!",
          timestamp: Date.now(),
          id: id1,
          is_user_message: false,
        },
        {
          text: "I think. Arthur",
          timestamp: Date.now(),
          id: id1,
          is_user_message: true,
        },
        {
          text: "That's what I do",
          timestamp: Date.now(),
          id: id1,
          is_user_message: true,
        },
        {
          text: "I think...",
          timestamp: Date.now(),
          id: id1,
          is_user_message: true,
        },
        {
          text: "So you don't have to",
          timestamp: Date.now(),
          id: id1,
          is_user_message: true,
        },
      ],
    },
    {
      id: v4(),
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
          text: "Life is so much easier to deal with when you are dead!",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: false,
        },
        {
          text: "Hello, Alfie",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: true,
        },
        {
          // This thread starts with a single message already
          text: "Now, how soon did you know that I was not dead?",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: true,
        },
        {
          // This thread starts with a single message already
          text: "You wrote me a letter, Alfie",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: true,
        },
        {
          // This thread starts with a single message already
          text: "Did I?",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: false,
        },
        {
          // This thread starts with a single message already
          text: "Yeah, you asked about your dog",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: true,
        },
        {
          // This thread starts with a single message already
          text: "Good Lord, your ducking condition has got worse, mate.",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: false,
        },
        {
          // This thread starts with a single message already
          text: "Mine, on the other hand, I've been living the dream. Sometimes, I will shoot at the side of a ship. And sometimes I'll sit here, I may shoot at the old seagull",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: false,
        },
        {
          // This thread starts with a single message already
          text: "Alfie...",
          timestamp: Date.now(),
          id: v4(),
          is_user_message: true,
        },
        {
          // This thread starts with a single message already
          text: "I'm going to shoot Oswald Mosley",
          timestamp: Date.now(),
          id: id2,
          is_user_message: true,
        },
      ],
    },
  ],
};

export default initialState;
