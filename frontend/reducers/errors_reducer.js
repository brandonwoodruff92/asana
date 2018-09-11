import { combineReducers } from "redux";

import sessionsErrorsReducer from "./session_errors_reducer";

export default combineReducers({
  session: sessionsErrorsReducer
});
