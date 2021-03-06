import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ActionCable } from "react-actioncable-provider";
import SvgUtil from "../../../util/svg_util";
import * as RouteConstants from "../../../constants/route_constants";
import { debounce } from "../../../util/debounce_util";

class TaskOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };

    this.closeTaskOptions = this.closeTaskOptions.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.update = this.update.bind(this);
    this.handleKeyPress = debounce(this.handleKeyPress.bind(this), 500);
  }

  componentDidMount() {
    this.props.fetchTask(this.props.match.params.id);
  }

  componentWillUpdate(newProps) {
    if (newProps.task && !this.state.id) {
      this.setState(newProps.task);
    }
  }

  markComplete() {
    this.props.completeTask(this.props.task);
    this.closeTaskOptions();
  }

  closeTaskOptions() {
    this.props.history.push(RouteConstants.TASKS);
  }

  update(field) {
    let that = this;
    return (e) => {
      that.props.task[field] = e.target.value;
      that.refs.taskActionCable.perform("speak_task", that.props.task);
    };
  }

  handleKeyPress() {
    this.props.updateTask(this.props.task);
  }

  render() {
    const task = this.props.task;

    return (
      <div className="task-options task-list-pane">
        <ActionCable ref="taskActionCable" channel={ {channel: "TaskChannel", room: "RoomRoom"} } />
        <div className="task-options-header">
          <div className="task-button-section">
            <div
              className="mark-complete-button task-list-button"
              onClick={ this.markComplete }>
              { SvgUtil.renderCheckMark() }
              Mark Complete
            </div>
          </div>
          <div className="task-options-section">
            <div className="task-options-section-icons">
              { SvgUtil.renderSubtask() }
            </div>
            <div className="task-options-section-icons">
              { SvgUtil.renderLike() }
            </div>
            <div className="task-options-section-icons">
              { SvgUtil.renderEllipsis("task-options-ellipsis") }
            </div>
            <div
              className="task-options-close"
              onClick={ this.closeTaskOptions }>
              &#10005;
            </div>
          </div>
        </div>
        <div className="task-title-input-row">
          <input
            className="task-title-input task-options-input"
            type="text"
            placeholder="Write a task name"
            value={ task ? task.name : "" }
            onChange={ this.update("name") }
            onKeyDown={ this.handleKeyPress }>
          </input>
        </div>
        <div className="task-assignment-row">
          <div
            id="unassigned-token"
            className="assignment-token">
            <div className="token-icon">
              { SvgUtil.renderUser("assignee", "task-token-icon")}
            </div>
            Unassigned
          </div>
          <div
            id="due-date-token"
            className="assignment-token">
            <div className="token-icon">
              { SvgUtil.renderCalendar() }
            </div>
            Due Date
          </div>
        </div>
        <div className="task-description-row">
          <div className="task-description-icon">
            { SvgUtil.renderParagraph() }
          </div>
          <textarea
            className="task-description-input task-options-input"
            placeholder="Description"
            value={ task ? task.description : "" }
            onChange={ this.update("description") }
            onKeyDown={ this.handleKeyPress }>
          </textarea>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, oldProps) {
  return {
    task: state.entities.tasks[oldProps.match.params.id]
  };
}

export default withRouter(connect(mapStateToProps)(TaskOptions));
