import * as ActionConstants from "../constants/action_constants";

export const setSelectedLink = (link) => {
  return {
    type: ActionConstants.SET_SELECTED_LINK,
    link
  };
};

export const toggleTeamOptions = () => {
  return {
    type: ActionConstants.TOGGLE_TEAM_OPTIONS
  };
};

export const toggleUserOptions = () => {
  return {
    type: ActionConstants.TOGGLE_USER_OPTIONS
  };
};

export const toggleAppOptions = () => {
  return {
    type: ActionConstants.TOGGLE_APP_OPTIONS
  };
};
