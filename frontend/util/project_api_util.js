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

  static updateProject(project) {
    return $.ajax({
      method: "PATCH",
      url: `api/projects/${project.id}`,
      data: {
        project
      }
    });
  }
}
