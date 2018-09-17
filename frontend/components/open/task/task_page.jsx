import React from "react";
import { connect } from "react-redux";
import * as RouteConstants from "../../../constants/route_constants";
import { createTask, mountTask, unmountTask, fetchAllTasks } from "../../../actions/task_actions";
import { withRouter } from "react-router-dom";

import TaskList from "./task_list";
import TaskForm from "./task_form";

// TODO: Figure out how to create task/section and mount to ui for rerouting
// TODO: Are sections tasks?

class TaskPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchAllTasks();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.mountedTaskId && this.props.mountedTaskId !== newProps.mountedTaskId) {
      this.props.history.push(RouteConstants.TASKS + `${newProps.mountedTaskId}`);
      this.props.unmountEntity();
    }
  }

  render() {
    //Query for all of the sections assigned to current user
    //and create section items to render in a list.
    //
    //Render tasks that are assigned to current user but not
    //linked to a section in a "blank" section.

    return (
      <div>
        <TaskList
          tasks={ this.props.tasks }
          createTask={ this.props.createTask }
          createSection={ this.props.createSection }/>
        <Route
          path={ RouteConstants.TASKS_FORM }
          render={ () => <TaskForm mountedTaskId={ this.props.mountedTaskId } />} />
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
    createTask: (task) => {
      return dispatch(createTask(task));
    },
    mountTask: (task) => {
      return dispatch(mountTask(task));
    },
    unmountTask: () => {
      return dispatch(unmountTask());
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskPage));
