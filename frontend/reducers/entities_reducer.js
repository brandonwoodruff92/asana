import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import taskReducer from "./task_reducer";

export default combineReducers({
  users: usersReducer,
  tasks: taskReducer
});
