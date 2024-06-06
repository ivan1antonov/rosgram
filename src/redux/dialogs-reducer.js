const addMessage = "ADD-Message";
const onChangeMessage = "On-Change-Message";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case addMessage:
      let message = {
        id: state.message.length + 1,
        text: action.newMessage,
      };
      state.message.push(message);
      state.changeMessage = "";
      return state;
    case onChangeMessage:
      state.changeMessage = action.newtext;
      return state;
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
