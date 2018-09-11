import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";

import SessionApiUtil from "./util/session_api_util";

import { login, logout } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  window.SessionApiUtil = SessionApiUtil;
  const root = document.getElementById("root");
  const store = configureStore();
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  ReactDOM.render(<h1>Asana</h1>, root);
});
