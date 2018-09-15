class UserApiUtil {
  static addUserToTask(userId, taskId) {
    return $.ajax({
      method: "PATCH",
      url: `api/users/${userId}/addTask/${taskId}`
    });
  }

  static removeUserFromTask(userId, taskId) {
    return $.ajax({
      method: "DELETE",
      url: `api/users/${userId}/removeTask/${taskId}`
    });
  }
}

export default UserApiUtil;
