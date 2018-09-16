import { combineReducers } from "redux";

import ModalReducer from "./modal_reducer";
import taskListReducer from "./task_list_reducer";

export default combineReducers({
  modal: ModalReducer,
  taskList: taskListReducer
});
