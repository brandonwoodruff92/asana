export default class ProjectApiUtil {
  static fetchAllProjects() {
    return $.ajax({
      method: "GET",
      url: "api/projects"
    });
  }

  static createProject(project) {
    return $.ajax({
      method: "POST",
      url: "api/projects",
      data: {
        project
      }
    });
  }
}
