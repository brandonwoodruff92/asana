import React from "react";

export default class SectionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  rener() {
    const tasks = this.props.section.tasks.map( (task) => {
      return (
        <TaskItem task={ task } />
      );
    });

    return (
      <div>
        <ul>
          { tasks }
        </ul>
      </div>
    );
  }
}
