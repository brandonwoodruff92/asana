import TeamApiUtil from "../util/team_api_util";
import * as ActionConstants from "../constants/action_constants";

export const receiveTeam = (team) => {
  return {
    type: ActionConstants.RECEIVE_TEAM,
    team: team
  };
};

export const createTeam = (team) => {
  return (dispatch) => {
    return TeamApiUtil.createTeam(team).then( (team) => {
      return dispatch(receiveTeam(team));
    });
  };
};
