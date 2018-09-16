export default class SectionApiUtil {
  static fetchAllSections() {
    return $.ajax({
      method: "GET",
      url: "/api/sections"
    });
  }
}
