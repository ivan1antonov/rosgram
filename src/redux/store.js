import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
  _state: {
    profilePage: {
      post: [
        { id: 1, message: "Hi, how are you?", likesCount: 23 },
        { id: 2, message: "It's my first post", likesCount: 12 },
        { id: 3, message: "Hi, how are you?", likesCount: 2 },
        { id: 4, message: "Bye", likesCount: 34 },
      ],
      changePost: "",
    },
    messagesPage: {
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
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: "Serega",
          ava: "https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676296366191520185.png",
        },
        {
          id: 2,
          name: "Uliana",
          ava: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg",
        },
        {
          id: 3,
          name: "Maks",
          ava: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
        },
      ],
    },
  },
  _callRender() {
    alert("Hey ");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callRender = observer;
  },
  dispatch(action) {
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._subscriber(this._state);
  },
};

export default store;
