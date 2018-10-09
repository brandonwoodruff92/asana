import React from "react";
import { withRouter } from "react-router-dom";
import SvgUtil from "../../../util/svg_util";

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.markComplete = this.markComplete.bind(this);
  }

  handleClick() {
    this.props.history.push(`/app/task/${this.props.task.id}`);
  }

  markComplete(e) {
    e.stopPropagation();
    this.props.completeTask(this.props.task);
  }

  render() {
    return (
      <div
        className="task-row task-type"
        onClick={ this.handleClick }>
        <div className="task-row-content">
          <div className="left-row-content">
            <div className="task-drag-button">
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

export default withRouter(TaskItem);
