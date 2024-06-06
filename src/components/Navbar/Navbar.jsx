import React from "react";
import style from "./Navbar.module.css";
import Sidebar from "./Sidebar/Sidebar";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? style.active : undefined)}
        >
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/chat"
          className={({ isActive }) => (isActive ? style.active : undefined)}
        >
          Dialogs
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? style.active : undefined)}
        >
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? style.active : undefined)}
        >
          Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? style.active : undefined)}
        >
          Settings
        </NavLink>
      </div>
      <Sidebar state={props.state} />
    </nav>
  );
};

export default Navbar;
