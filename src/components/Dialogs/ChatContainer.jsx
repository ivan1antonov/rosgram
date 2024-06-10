import Chat from "./Chat.jsx";
import { connect } from "react-redux";
import {
  addDialogsActionCreator,
  updateDialogsActionCreator,
} from "../../redux/dialogs-reducer.js";

const onAddMessage = state => ({
  messages: state.messagesPage.message,
  changeMessage: state.messagesPage.changeMessage,
  avatar: state.messagesPage.dialogs,
});

const updateChangeMessage = dispatch => ({
  onAddMessage: message => dispatch(addDialogsActionCreator(message)),
  onChangeMessage: text => dispatch(updateDialogsActionCreator(text)),
});
const ChatContainer = connect(onAddMessage, updateChangeMessage)(Chat);

export default ChatContainer;
