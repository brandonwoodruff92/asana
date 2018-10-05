import * as ActionConstants from "../constants/action_constants";
import ProjectApiUtil from "../util/project_api_util";

export const receiveProjects = (projects) => {
  return {
    type: ActionConstants.RECEIVE_PROJECTS,
    projects
  };
};

export const receiveProject = (project) => {
  return {
    type: ActionConstants.RECEIVE_PROJECT,
    project
  };
};

export const fetchAllProjects = () => {
  return (dispatch) => {
    return ProjectApiUtil.fetchAllProjects().then( (projects) => {
      return dispatch(receiveProjects(projects));
    });
  };
};

export const createProject = (project) => {
  return (dispatch) => {
    return ProjectApiUtil.createProject(project).then( (project) => {
      return dispatch(receiveProject(project));
    });
  };
};

export const updateProject = (project) => {
  return (dispatch) => {
    return ProjectApiUtil.updateProject(project).then( (project) => {
      return dispatch(receiveProject(project));
    });
  };
};
