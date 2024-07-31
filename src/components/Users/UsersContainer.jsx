import Users from "./Users";
import {
  toggleFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  showSpinner
} from "../../redux/users-reducer";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  usersCount: state.usersPage.totalUsersCount,
  isFetching: state.usersPage.isFetching
});

const mapDispatchToProps = dispatch => ({
  toggleFollow: id => dispatch(toggleFollow(id)),
  setUsers: users => dispatch(setUsers(users)),
  setCurrentPage: pageNumber => dispatch(setCurrentPage(pageNumber)),
  setTotalUsersCount: count => dispatch(setTotalUsersCount(count)),
  showSpinner: bool => dispatch(showSpinner(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
