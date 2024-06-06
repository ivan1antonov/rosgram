import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.profile}>
        <img
          src="https://cdn.shopify.com/s/files/1/0558/6413/1764/files/FreeLogoDesign.org_AI_Logo_Maker___Designer_s_Review_3_1024x1024.jpg?v=1692247733"
          alt="something_photo"
        />
      </div>
      <div className={style.profile_descr}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
