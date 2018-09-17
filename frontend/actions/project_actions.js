import * as ActionConstants from "../constants/action_constants";
import ProjectApiUtil from "../util/project_api_util";

export const receiveProjects = (projects) => {
  return {
    type: ActionConstants.RECEIVE_PROJECTS,
    projects
  };
};

export const fetchAllProjects = () => {
  return (dispatch) => {
    return ProjectApiUtil.fetchAllProjects().then( (projects) => {
      return dispatch(receiveProjects(projects));
    });
  };
};
