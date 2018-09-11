import React from "react";
import ReactDOM from "react-dom";

import SessionApiUtil from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  window.SessionApiUtil = SessionApiUtil;
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Asana</h1>, root);
});
