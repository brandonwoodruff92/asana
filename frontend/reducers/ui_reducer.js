import { combineReducers } from "redux";

import ModalReducer from "./modal_reducer";
import taskListReducer from "./task_list_reducer";
import openLandingPageReducer from "./open_landing_page_reducer";

export default combineReducers({
  modal: ModalReducer,
  taskList: taskListReducer,
  openLandingPage: openLandingPageReducer
});
