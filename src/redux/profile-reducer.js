const addMyPost = "ADD-POST";
const onChange = "On-Change";

const profileReducer = (state, action) => {
  switch (action.type) {
    case addMyPost:
      let post = {
        id: state.post.length + 1,
        message: action.newMessage,
        likesCount: 0,
      };
      state.post.push(post);
      state.changePost = "";
      return state;
    case onChange:
      state.changePost = action.newtext;
      return state;
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
