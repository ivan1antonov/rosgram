import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ posts, changePost, onAddPost, onChangePost }) => {
  const addPost = () => onAddPost(changePost);
  const updateChangePost = event => onChangePost(event.target.value);
  return (
    <div className={style.post}>
      <h3>My posts</h3>
      <textarea onChange={updateChangePost} value={changePost}></textarea>
      <div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>
        <div className={style.post_title}>New post</div>
        <div className="post">
          {posts.map(el => (
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
