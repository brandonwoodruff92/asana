import React from "react";

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
      this.updateTask(this.state);
    };
  }

  render() {
    return (
      <div className="task-form">
        <button onClick={ () => this.props.completeTask(this.props.task) }>Mark Complete</button>
        <input
          id="task-name-input"
          type="text"
          value={ this.state.name }
          onChange={ this.update("name") } />

        <div id="task-assignee-input" />
        <div id="task-due-date-input" />

        <input
          id="task-description-input"
          type="text"
          value={ this.state.description }
          onChange={ this.update("description") } />

        <div id="sub-task-list">
          <ul>

          </ul>
        </div>

        <div id="task-log">
        </div>
      </div>
    );
  }
}
