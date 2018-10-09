import React from "react";

import TaskItem from "./task_item";

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    //Depending on type, create a blank task or section,
    //add it to the list, and redirect to that task/section's
    //edit route.

    return () => {
      switch (type) {
        case "task":
          const task = {
            assignee_id: this.props.currentUser.id
          };
          this.props.createTask(task);
          break;
        case "section":
        //Ignore for now...
          break;
        default:
          return null;
      }
    };
  }

  renderEmptyTasks() {
    const emptyTasks = [];

    for (let i = 1; i <= 11; i++) {
      const emptyTask = (
        <div className="task-row">
          <div className="task-row-content">
          </div>
        </div>
      );

      emptyTasks.push(emptyTask);
    }

    return emptyTasks;
  }

  render() {
    const tasks = this.props.tasks.map( (task) => {
      if (!task.complete) {
        return (
          <TaskItem
            task={ task }
            mountTask={ this.props.mountTask}
            completeTask={ this.props.completeTask } />
        );
      }
    });

    return (
      <div className="task-list task-list-pane">
        <div className="task-list-header">
          <div className="task-button-section">
            <div
              id="add-task"
              className="task-list-button"
              onClick={ this.handleClick("task") }>
              Add Task
            </div>
            <div
              id="add-section"
              className="task-list-button"
              onClick={ this.handleClick("section") }>
              Add Section
            </div>
          </div>
        </div>
        <div className="task-list-container">
          <ul className="task-list-content">
            <div className="today-task-list task-collection">
              <div className="list-title">
              </div>
              <div className="list-content">
                { tasks }
              </div>
            </div>
            <div className="empty-task-list task-collection">
              { this.renderEmptyTasks() }
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
