import * as ActionConstants from "../constants/action_constants";
import { merge } from "lodash";

const taskReducer = (state = {}, action) => {
  const newState = merge({}, state);

  switch (action.type) {
    case ActionConstants.RECEIVE_TASKS:
      return action.tasks;
    case ActionConstants.RECEIVE_TASK:
      newState[action.task.id] = action.task;
      return newState;
    case ActionConstants.REMOVE_TASK:
      delete newState[action.taskId];
      return newState;
    default:
      return state;
  }
};

export default taskReducer;
