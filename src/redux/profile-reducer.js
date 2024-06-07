const addMyPost = "ADD-POST";
const onChange = "On-Change";

const initialState = {
  post: [
    { id: 1, message: "Hi, how are you?", likesCount: 23 },
    { id: 2, message: "It's my first post", likesCount: 12 },
    { id: 3, message: "Hi, how are you?", likesCount: 2 },
    { id: 4, message: "Bye", likesCount: 34 },
  ],
  changePost: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case addMyPost:
      let newPost = {
        id: state.post.length + 1,
        message: action.newMessage,
        likesCount: 0,
      };
      return {
        ...state,
        post: [...state.post, newPost],
        changePost: "",
      };
    case onChange:
      return {
        ...state,
        changePost: action.newtext,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = message => ({
  type: addMyPost,
  newMessage: message,
});

export const updatePostActionCreator = text => ({
  type: onChange,
  newtext: text,
});

export default profileReducer;
