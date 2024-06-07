const addMessage = "ADD-Message";
const onChangeMessage = "On-Change-Message";

const initialState = {
  message: [
    { id: 1, text: "Hi, how are you?" },
    { id: 2, text: "I will go to you" },
    { id: 3, text: "I was bored" },
    { id: 4, text: "Hi, how are you?" },
  ],
  changeMessage: "",
  dialogs: [
    {
      id: 1,
      name: "Sasha",
      ava: "https://avatars.mds.yandex.net/get-shedevrum/11511289/cc2855ebcbb411eea6ebbaaee90618f0/orig",
    },
    {
      id: 2,
      name: "Serega",
      ava: "https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676296366191520185.png",
    },
    {
      id: 3,
      name: "Uliana",
      ava: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg",
    },
    {
      id: 4,
      name: "Maks",
      ava: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addMessage:
      let message = {
        id: state.message.length + 1,
        text: action.newMessage,
      };
      return {
        ...state,
        message: [...state.message, message],
        changeMessage: "",
      };
    case onChangeMessage:
      return {
        ...state,
        changeMessage: action.newtext,
      };
    default:
      return state;
  }
};

export const addDialogsActionCreator = message => ({
  type: addMessage,
  newMessage: message,
});

export const updateDialogsActionCreator = text => ({
  type: onChangeMessage,
  newtext: text,
});

export default dialogsReducer;
