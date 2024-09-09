import React from "react";
import style from "./Users.module.css";
import axios from "axios";
import Preloader from "../Loader/Loader";

class Users extends React.Component {
  componentDidMount() {
    this.props.showSpinner(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`
      )
      .then(response => {
        this.props.showSpinner(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChange = pageNumber => {
    this.props.showSpinner(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}`
      )
      .then(response => {
        this.props.showSpinner(false);
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    let allPagePagination = Math.ceil(this.props.usersCount / 10);
    return (
      <>
      {this.props.isFetching ? <Preloader /> : <div className="users">
        <h2 className={style.users_title}>Users</h2>
        <ul className="users_list">
          {this.props.users && this.props.users.length > 0 ? (
            this.props.users.map(user => (
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
                    onClick={() => this.props.toggleFollow(user.id)}
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
        <ul className={style.pagination}>
          {[...Array(allPagePagination)].map((_, i) => (
            <li
              key={i + 1}
              className={
                i + 1 === this.props.currentPage
                  ? style.pagination_item__active
                  : style.pagination_item
              }
              onClick={() => this.onPageChange(i + 1)}
            >
              {i + 1}
            </li>
          ))}
        </ul>
      </div> }
      
      
      </>
    );
  }
}

export default Users;
