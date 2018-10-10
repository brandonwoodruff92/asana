import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ActionCable } from "react-actioncable-provider";
import SvgUtil from "../../../util/svg_util";
import * as RouteConstants from "../../../constants/route_constants";
import { receiveTask } from "../../../actions/task_actions";

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.handleReceiveTask = this.handleReceiveTask.bind(this);
  }

  handleClick() {
    this.props.history.push(RouteConstants.TASKS + "/" + this.props.task.id);
  }

  markComplete(e) {
    e.stopPropagation();
    this.props.completeTask(this.props.task);
  }

  handleReceiveTask(data) {
    this.props.receiveTask(data);
  }

  render() {
    return (
      <div
        className="task-row task-type"
        onClick={ this.handleClick }>
        <ActionCable ref="taskActionCable" channel={ {channel: "TaskChannel", room: "RoomRoom"} } onReceived={ this.handleReceiveTask } />
        <div className="task-row-content">
          <div className="left-row-content">
            <div className="task-drag-button">
              { SvgUtil.renderDragable() }
            </div>
            { SvgUtil.renderCheck("task-complete-button", this.markComplete) }
            <div className="task-name-display">
              { this.props.task.name }
            </div>
          </div>
          <div className="right-row-content">
            <div className="task-projects-container">
            </div>
            <div className="task-schedule-button">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    receiveTask: (task) => {
      return dispatch(receiveTask(task));
    }
  };
}

export default withRouter(connect(null, mapDispatchToProps)(TaskItem));
