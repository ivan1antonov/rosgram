import React from "react";
import style from "./Chat.module.css";
import { NavLink } from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import ChatContainer from "./ChatContainer";

const Chat = ({
  messages,
  changeMessage,
  avatar,
  onAddMessage,
  onChangeMessage,
}) => {
  const addMessage = () => {
    onAddMessage(changeMessage);
  };
  const updateChangeMessage = event => {
    onChangeMessage(event.target.value);
  };
  return (
    <div>
      <div className={style.dialogs}>
        <div className={style.dialogs_item}>
          {avatar.map(el => (
            <DialogsItem key={el.id} name={el.name} id={el.id} ava={el.ava} />
          ))}
        </div>
        <div className={style.dialogs_message}>
          {messages.map(el => {
            return <Message key={el.id} message={el.text} id={el.id} />;
          })}
        </div>
      </div>
      <textarea onChange={updateChangeMessage} value={changeMessage}></textarea>
      <button onClick={addMessage}>Add message</button>
    </div>
  );
};

export default Chat;
