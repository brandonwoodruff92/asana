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
          this.props.createTask({});
          break;
        case "section":
        //Ignore for now...
          break;
        default:
          return null;
      }
    };
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
      <div>
        <div className="task-list-header">
          <button onClick={ this.handleClick("task") }>Add Task</button>
          <button onClick={ this.handleClick("section") }>Add Section</button>
        </div>
        <div className="task-list-container">
          <ul className="task-list">
            { tasks }
          </ul>
        </div>
      </div>
    );
  }
}
