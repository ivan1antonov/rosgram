import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Chat from "./components/Dialogs/Chat";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.sidebar} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/*"
            element={
              <Chat
                messagesPage={props.state.messagesPage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/profile/*"
            element={
              <Profile
                state={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/settings/*" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
