import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";

import Root from "./components/root";

//TESTING IMPORTS//
import { addUserToTask, removeUserFromTask } from "./actions/user_actions";
import { fetchAllTasks } from "./actions/task_actions";
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
  window.addUserToTask = addUserToTask;
  window.removeUserFromTask = removeUserFromTask;
  window.fetchAllTasks = fetchAllTasks;
  //TESTING//

  ReactDOM.render(<Root store={ store }/>, root);
});
