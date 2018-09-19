export default class OpenLandingPageUtil {
  static parseCurrentLocation() {
    const locationArray = window.location.array.split("/");

    switch (true) {
      case (locationArray.includes("home")):
        return "Home";
      default:

    }
  }
}
