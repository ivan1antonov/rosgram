import React, { useEffect } from "react";
import Users from "./Users";
import { toggleFollow, fetchUsers } from "../../redux/users-reducer";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  users: state.usersPage.users,
});

const mapDispatchToProps = dispatch => ({
  toggleFollow: id => dispatch(toggleFollow(id)),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
