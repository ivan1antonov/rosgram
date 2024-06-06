import style from "./Sidebar.module.css";

const Sidebar = props => {
  return (
    <div className={style.sidebar}>
      <h3 className={style.friend_title}>Friends</h3>
      <div className={style.friend_items}>
        {props.state.friends.map(el => (
          <div key={el.id}>
            <img src={el.ava} alt="friends_ava" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
