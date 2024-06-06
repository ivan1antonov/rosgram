import React from "react";
import style from "./Chat.module.css";
import { NavLink } from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {
  addPostActionCreator,
  updatePostActionCreator,
} from "../../redux/state.js";

const addMessage = "ADD-Message";
const onChangeMessage = "On-Change-Message";

const Chat = props => {
  const addPost = () => {
    props.dispatch(
      addPostActionCreator(addMessage, props.messagesPage.changeMessage)
    );
  };
  const updateChangePost = event => {
    props.dispatch(
      updatePostActionCreator(onChangeMessage, event.target.value)
    );
  };
  return (
    <div>
      <div className={style.dialogs}>
        <div className={style.dialogs_item}>
          {props.messagesPage.dialogs.map(el => (
            <DialogsItem key={el.id} name={el.name} id={el.id} ava={el.ava} />
          ))}
        </div>
        <div className={style.dialogs_message}>
          {props.messagesPage.message.map(el => {
            return <Message key={el.id} message={el.text} id={el.id} />;
          })}
        </div>
      </div>
      <textarea
        onChange={updateChangePost}
        value={props.messagesPage.changeMessage}
      ></textarea>
      <button onClick={addPost}>Add message</button>
    </div>
  );
};

export default Chat;
