import React from "react";
import style from "./Users.module.css";

const Users = ({ users, toggleFollow, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="users">
      <h2 className={style.users_title}>Users</h2>
      <ul className="users_list">
        {users && users.length > 0 ? (
          users.map(user => (
            <li key={user.id} className={style.users_item}>
              <div className={style.users_item__followimg}>
                <div className={style.users_item__followimg_image}>
                  <img
                    src="https://static.kinoafisha.info/k/persons/1080x1920/upload/persons/358732453407.jpg"
                    alt="ava"
                  />
                </div>
                <button
                  className="users_item__followimg_follow"
                  onClick={() => toggleFollow(user.id)}
                >
                  {user.followed ? "unfollow" : "follow"}
                </button>
              </div>
              <div className={style.users_item__info}>
                <div className={style.users_item__context}>
                  <h3 className={style.users_item__name}>{user.name}</h3>
                  <div className="users_item__status">{user.status}</div>
                </div>
                <div className={style.users_item__location}>
                  <div className="users_item__location_city">
                    {user.location?.city || "Unknown city"},
                  </div>
                  <div className="users_item__location_country">
                    {user.location?.country || "Unknown country"}
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </div>
  );
};

export default Users;
