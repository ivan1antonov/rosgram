import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updatePostActionCreator,
} from "../../../redux/state.js";

const addMyPost = "ADD-POST";
const onChange = "On-Change";

const MyPosts = props => {
  const addPost = () => {
    props.dispatch(
      addPostActionCreator(addMyPost, props.profilePage.changePost)
    );
  };
  const updateChangePost = event => {
    props.dispatch(updatePostActionCreator(onChange, event.target.value));
  };
  return (
    <div className={style.post}>
      <h3>My posts</h3>
      <textarea
        onChange={updateChangePost}
        value={props.profilePage.changePost}
      ></textarea>
      <div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>
        <div className={style.post_title}>New post</div>
        <div className="post">
          {props.profilePage.post.map(el => (
            <Post
              key={el.id}
              message={el.message}
              likeQuontety={el.likesCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;