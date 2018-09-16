import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import sectionsReducer from "./sections_reducer";
import taskReducer from "./task_reducer";

export default combineReducers({
  users: usersReducer,
  sections: sectionsReducer,
  tasks: taskReducer
});
