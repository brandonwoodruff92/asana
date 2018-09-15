import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";

import Root from "./components/root";

//TESTING IMPORTS//
import TaskApiUtil from "./util/task_api_util";
//TESTING IMPORTS//

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: {
        id: window.currentUser.id
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");

  //TESTING//
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.TaskApiUtil = TaskApiUtil;
  //TESTING//

  ReactDOM.render(<Root store={ store }/>, root);
});
