import React from "react";
import * as RouteConstants from "../../../constants/route_constants";

import SectionItem from "./section_item";
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

    return (e) => {
      switch (type) {
        case "task":
          return null;
        default:
          return null;
      }
    };
  }

  render() {
    //Query for all of the sections assigned to current user
    //and create section items to render in a list.
    //
    //Render tasks that are assigned to current user but not
    //linked to a section in a "blank" section.

    return (
      <div>
        <div className="task-list-header">
          <button onClick={ this.handleClick("task") }>Add Task</button>
          <button onClick={ this.handleClick("section") }>Add Section</button>
        </div>
        <div className="task-list-container">
          <ul className="task-list">
            <p>Render Sections</p>
          </ul>
        </div>
      </div>
    );
  }
}
