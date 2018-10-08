import React from "react";
import { connect } from "react-redux";
import * as RouteConstants from "../../../constants/route_constants";
import { createTask, updateTask, mountTask, unmountTask, fetchAllTasks, fetchTask } from "../../../actions/task_actions";
import { Route, withRouter } from "react-router-dom";

import TaskList from "./task_list";
import TaskForm from "./task_form";
import TaskOptions from "./task_options";

class TaskPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllTasks();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.mountedTaskId && this.props.mountedTaskId !== newProps.mountedTaskId) {
      this.props.history.push(RouteConstants.TASKS + `${newProps.mountedTaskId}`);
    }
  }

  render() {
    return (
      <div className="task-page">
        <TaskList
          tasks={ this.props.tasks }
          createTask={ this.props.createTask }
          completeTask={ this.props.completeTask }
          mountTask={ this.props.mountTask } />
        <TaskOptions />
        <Route
          path={ RouteConstants.TASKS_FORM }
          render={ () => <TaskForm
            task={ fetchTask(this.props.match.params.id) }
            completeTask={ this.props.completeTask }
            unmountTask={ this.props.unmountTask } /> } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: Object.values(state.entities.tasks),
    mountedTaskId: state.ui.taskList.mountedTaskId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllTasks: () => {
      return dispatch(fetchAllTasks());
    },
    fetchTask: (id) => {
      return dispatch(fetchTask(id));
    },
    createTask: (task) => {
      return dispatch(createTask(task));
    },
    updateTask: (task) => {
      return dispatch(updateTask(task));
    },
    completeTask: (task) => {
      task.complete = true;
      return dispatch(updateTask(task));
    },
    mountTask: (taskId) => {
      return dispatch(mountTask(taskId));
    },
    unmountTask: () => {
      return dispatch(unmountTask());
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskPage));
