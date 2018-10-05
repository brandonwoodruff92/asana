import { merge } from "lodash";
import * as ActionConstants from "../constants/action_constants";

const projectsReducer = (state = {}, action) => {
  const newState = merge({}, state);

  switch (action.type) {
    case ActionConstants.RECEIVE_PROJECTS:
      return action.projects;
    case ActionConstants.RECEIVE_PROJECT:
      newState[action.project.id] = action.project;
      return newState;
    case ActionConstants.REMOVE_PROJECT:
      delete newState[action.projectId];
      return newState;
    default:
      return state;
  }
};

export default projectsReducer;
