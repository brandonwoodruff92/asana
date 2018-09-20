import { merge } from "lodash";
import * as ActionConstants from "../constants/action_constants";

const defaultState = {
  showTeamOptions: false
};

const openLandingPageReducer = (state = defaultState, action) => {
  const newState = merge({}, state);

  switch (action.type) {
    case ActionConstants.SET_SELECTED_LINK:
      newState.selectedLink = action.link;
      return newState;
    case ActionConstants.TOGGLE_TEAM_OPTIONS:
      newState.showTeamOptions = state.showTeamOptions ? false : true;
      return newState;
    case ActionConstants.TOGGLE_USER_OPTIONS:
      newState.showUserOptions = state.showUserOptions ? false : true;
      return newState;
    case ActionConstants.TOGGLE_APP_OPTIONS:
      newState.showAppOptions = state.showAppOptions ? false : true;
      return newState;
    default:
      return state;
  }
};

export default openLandingPageReducer;
