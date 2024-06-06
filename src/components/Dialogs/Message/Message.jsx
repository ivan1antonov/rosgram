import style from "./Message.module.css";

const Message = props => {
  return (
    <div className={style.message_item}>
      <div className={style.message_item_new}>2</div>
      <div className={style.message_item}>{props.message}</div>
      <div className={style.message_item_count}>32</div>
    </div>
  );
};

export default Message;
