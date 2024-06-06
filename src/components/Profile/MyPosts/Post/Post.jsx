import React from "react";
import style from "./Post.module.css";

const Post = props => {
  return (
    <div className={style.item}>
      <img
        src="https://sputnik.kg/img/101808/12/1018081237_0:0:5184:3456_1440x900_80_0_1_5842cff5fa23b60f9e77b575d56794ab.jpg.webp?source-sid=afp"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>Like {props.likeQuontety}</span>
      </div>
    </div>
  );
};

export default Post;
