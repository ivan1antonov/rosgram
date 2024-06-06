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
  updateState(observer) {
    this._callRender = observer;
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let post = {
        id: this._state.profilePage.post.length + 1,
        message: action.newMessage,
        likesCount: 0,
      };
      this._state.profilePage.post.push(post);
      this._state.profilePage.changePost = "";
      this._callRender(this._state);
    }
    if (action.type === "On-Change") {
      this._state.profilePage.changePost = action.newtext;
      this._callRender(this._state);
    }
    if (action.type === "ADD-Message") {
      let message = {
        id: this._state.messagesPage.message.length + 1,
        text: action.newMessage,
      };
      this._state.messagesPage.message.push(message);
      this._state.messagesPage.changeMessage = "";
      this._callRender(this._state);
    } else if (action.type === "On-Change-Message") {
      this._state.messagesPage.changeMessage = action.newtext;
      this._callRender(this._state);
    }
  },
};

export const addPostActionCreator = (type, message) => ({
  type: type,
  newMessage: message,
});

export const updatePostActionCreator = (type, text) => ({
  type: type,
  newtext: text,
});

export default store;
