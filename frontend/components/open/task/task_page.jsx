import React from "react";
import { connect } from "react-redux";
import * as RouteConstants from "../../../constants/route_constants";
import * as ActionConstants from "../../../constants/action_constants";
import { createTask, fetchAllTasks } from "../../../actions/task_actions";
import { createSection, fetchAllSections } from "../../../actions/section_actions";
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
    this.props.fetchAllSections();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.mountedEntity) {
      let path;
      if (newProps.mountedEntity.type === "task")
        path = RouteConstants.TASKS + `${newProps.mountedEntity.id}`;
      else {
        //Edit section?
      }
      this.props.history.push(RouteConstants.TASKS + `${newProps.mountedEntity.id}`);
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
          sections={ this.props.sections }
          createTask={ this.props.createTask }
          createSection={ this.props.createSection }/>
        <Route to={ RouteConstants.TASKS_FORM } component={ TaskForm } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sections: Object.values(state.entities.sections),
    tasks: Object.values(state.entities.tasks),
    mountedEntity: state.ui.taskList.mountedEntity
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllTasks: () => {
      return dispatch(fetchAllTasks()); //Fetch specific tasks instead
    },
    fetchAllSections: () => {
      return dispatch(fetchAllSections());
    },
    createTask: (task) => {
      dispatch(createTask(task));
    },
    createSection: (section) => {
      dispatch(createSection(section));
    },
    unmountEntity: () => {
      return dispatch({
        type: ActionConstants.UNMOUNT_ENTITY
      });
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskPage));
