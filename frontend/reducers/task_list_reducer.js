import * as ActionConstants from "../constants/action_constants";
import { merge } from "lodash";

const defaultState = {
  mountedTaskId: null
};

const taskListReducer = (state = {}, action) => {
  const newState = merge({}, state);

  switch (action.type) {
    case ActionConstants.MOUNT_TASK:
      newState.mountedTaskId = action.taskId;
      return newState;
    case ActionConstants.UNMOUNT_TASK:
      return defaultState;
    default:
      return state;
  }
};

export default taskListReducer;
