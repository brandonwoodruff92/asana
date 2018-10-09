class TaskApiUtil {
  static fetchAllTasks() {
    return $.ajax({
      method: "GET",
      url: "api/tasks"
    });
  }

  static fetchTask(id) {
    return $.ajax({
      method: "GET",
      url: `api/tasks/${id}`
    });
  }

  static createTask(task) {
    return $.ajax({
      method: "POST",
      url: "api/tasks",
      data: {
        task
      }
    });
  }

  static updateTask(task) {
    return $.ajax({
      method: "PATCH",
      url: `api/tasks/${task.id}`,
      data: {
        task
      }
    });
  }

  static deleteTask(id) {
    return $.ajax({
      method: "DELETE",
      url: `api/tasks/${id}`
    });
  }
}

export default TaskApiUtil;
