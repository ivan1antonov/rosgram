import Sidebar from "./Sidebar";
import { connect } from "react-redux";

const sidebarFriends = state => ({
  friends: state.sidebar.friends,
});

const SidebarContainer = connect(sidebarFriends)(Sidebar);

export default SidebarContainer;
