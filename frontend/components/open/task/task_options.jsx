import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SvgUtil from "../../../util/svg_util";
import * as RouteConstants from "../../../constants/route_constants";

// TODO: REPLACE INTERVAL REQUESTS WITH ACTION CABLES

class TaskOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };

    this.task = this.props.task;
    this.closeTaskOptions = this.closeTaskOptions.bind(this);
  }

  componentDidMount() {
    this.props.fetchTask(this.props.match.params.id);
    // this.interval = setInterval(() => this.props.updateTask(this.state), 100);
  }

  componentWillUpdate(newProps) {
    if (newProps.task && parseInt(this.props.match.params.id) !== newProps.task.id) {
      this.setState(newProps.task);
    }

    if (newProps.task && !this.state.id) {
      this.setState(newProps.task);
    }
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  closeTaskOptions() {
    this.props.history.push(RouteConstants.TASKS);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  render() {
    return (
      <div className="task-options task-list-pane">
        <div className="task-options-header">
          <div className="task-button-section">
            <div className="mark-complete-button task-list-button">
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
            defaultValue={ this.state.name }
            onChange={ this.update("name") }>
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
            value={ this.state.description }
            onChange={ this.update("description") }>
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
