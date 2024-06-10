import MyPosts from "./MyPosts.jsx";
import {
  addPostActionCreator,
  updatePostActionCreator,
} from "../../../redux/profile-reducer.js";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  posts: state.profilePage.post,
  changePost: state.profilePage.changePost,
});

const mapDispatchToProps = dispatch => ({
  onAddPost: message => dispatch(addPostActionCreator(message)),
  onChangePost: text => dispatch(updatePostActionCreator(text)),
});

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;
