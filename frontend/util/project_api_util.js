export default class ProjectApiUtil {
  static fetchAllProjects() {
    return $.ajax({
      method: "GET",
      url: "api/projects"
    });
  }
}
