import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderEntireTree = state => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};
window.store = store;
store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});

renderEntireTree(store);
