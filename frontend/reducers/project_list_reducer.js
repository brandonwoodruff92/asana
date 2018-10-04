import { merge } from "lodash";
import * as ActionConstants from "../constants/action_constants";

const projectListReducer = (state = {}, action) => {
  const newState = merge({}, state);

  switch (action.type) {
    case ActionConstants.TOGGLE_PROJECT_OPTIONS:
      newState.showProjectOptions = action.projectId;
      return newState;
    default:
      return state;
  }
};

export default projectListReducer;
