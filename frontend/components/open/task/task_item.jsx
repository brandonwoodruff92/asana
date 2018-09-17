import React from "react";

const TaskItem = (props) => {
  return (
    <div onClick={ () => props.mountTask(props.task.id) }>
      <div onClick={ () => props.completeTask(props.task) }></div>
      <p>{ props.task.name }</p>
    </div>
  );
};

export default TaskItem;
