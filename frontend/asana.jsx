import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";

import Root from "./components/root";

//TESTING IMPORTS//
import { fetchAllProjects, createProject } from "./actions/project_actions";
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
  window.fetchAllProjects = fetchAllProjects;
  window.createProject = createProject;
  //TESTING//

  ReactDOM.render(<Root store={ store }/>, root);
});
