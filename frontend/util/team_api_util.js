class TeamApiUtil {
  static createTeam(team) {
    return $.ajax({
      method: "POST",
      url: "api/teams",
      data: {
        team
      }
    });
  }
}

export default TeamApiUtil;
