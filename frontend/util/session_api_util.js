

export default class SessionApiUtil {
  static signup(user) {
    return $.ajax({
      method: "POST",
      url: "api/users",
      data: {
        user: user
      }
    });
  }

  static login(user) {
    return $.ajax({
      method: "POST",
      url: "api/session",
      data: {
        user: user
      }
    });
  }

  static logout() {
    return $.ajax({
      method: "DELETE",
      url: "api/session"
    });
  }
}
