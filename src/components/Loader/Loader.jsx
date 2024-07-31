import React from "react";
import preloader from "../../assets/image/loader.gif";

const Preloader = (props) => {
  return (
    <>
      <img src={preloader} alt="spinner" />
    </>
  )
}

export default Preloader;