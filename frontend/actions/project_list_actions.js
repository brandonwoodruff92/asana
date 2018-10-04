import * as ActionConstants from "../constants/action_constants";

export const toggleProjectOptions = (projectId) => {
  return {
    type: ActionConstants.TOGGLE_PROJECT_OPTIONS,
    projectId
  };
};
