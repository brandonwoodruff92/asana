import { merge } from "lodash";
import * as ActionConstants from "../constants/action_constants";

const projectsReducer = (state = {}, action) => {
  const newState = merge({}, state);

  switch (action.type) {
    case ActionConstants.RECEIVE_PROJECTS:
      return action.projects;
    default:
      return state;
  }
};

export default projectsReducer;
