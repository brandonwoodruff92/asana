import * as ActionConstants from "../constants/action_constants";

export const toggleSidebar = () => {
  return {
    type: ActionConstants.TOGGLE_SIDEBAR
  };
};

export const toggleSidebarProjectOptions = (projectId) => {
  return {
    type: ActionConstants.TOGGLE_SIDEBAR_PROJECT_OPTIONS,
    projectId
  };
};
