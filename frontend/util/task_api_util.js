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
}

export default TaskApiUtil;
