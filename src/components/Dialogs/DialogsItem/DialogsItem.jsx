import { NavLink } from "react-router-dom";
import style from "./DialogsItem.module.css";

const DialogsItem = props => {
  return (
    <div className={style.dialog}>
      <div className={style.dialog_wramper}>
        <img className={style.dailog_ava} src={props.ava} alt="avatar" />
        <NavLink
          to={"/chat/" + props.id}
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default DialogsItem;
