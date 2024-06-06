import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderEntireTree = state => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

store.updateState(renderEntireTree);

renderEntireTree(store);
