import React from "react";
import SvgUtil from "../../../util/svg_util";

class TaskOptions extends React.Component {
  constructor(props) {
    super(props);
  }

  update(field) {

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
          </div>
        </div>
        <div className="task-title-input-row">
          <input
            className="task-title-input task-options-input"
            type="text"
            placeholder="Write a task name"
            onChange={ this.update("title") }>
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
            onChange={ this.update("description") }>
          </textarea>
        </div>
      </div>
    );
  }
}

export default TaskOptions;
