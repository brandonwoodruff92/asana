import { combineReducers } from "redux";

import entitiesReducer from "./entitites_reducer";
import sessionsReducer from "./sessions_reducer";

export default combineReducers({
  entities: entitiesReducer,
  session: sessionsReducer,
  errors: errorsReducer
});
