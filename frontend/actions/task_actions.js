import TaskApiUtil from "../util/task_api_util";
import * as ActionConstants from "../constants/action_constants";

export const receiveTasks = (tasks) => {
  return {
    type: ActionConstants.RECEIVE_TASKS,
    tasks
  };
};

export const receiveTask = (task) => {
  return {
    type: ActionConstants.RECEIVE_TASK,
    task
  };
};

export const removeTask = (taskId) => {
  return {
    type: ActionConstants.REMOVE_TASK,
    taskId
  };
};

export const fetchAllTasks = () => {
  return (dispatch) => {
    return TaskApiUtil.fetchAllTasks().then( (tasks) => {
      return dispatch(receiveTasks(tasks));
    });
  };
};

export const fetchTask = (id) => {
  return (dispatch) => {
    return TaskApiUtil.fetchTask(id).then( (task) => {
      return dispatch(receiveTask(task));
    });
  };
};

export const createTask = (task) => {
  return (dispatch) => {
    return TaskApiUtil.createTask(task).then( (task) => {
      return dispatch(receiveTask(task));
    });
  };
};

export const updateTask = (task) => {
  return (dispatch) => {
    return TaskApiUtil.updateTask(task).then( (task) => {
      return dispatch(receiveTask(task));
    });
  };
};

export const deleteTask = (id) => {
  return (dispatch) => {
    return TaskApiUtil.deleteTask(id).then( (task) => {
      return dispatch(removeTask(task.id));
    });
  };
};
