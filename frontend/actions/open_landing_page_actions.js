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
