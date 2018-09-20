import React from "react";

export default class TeamForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: "",
      teamType: ""
    };
  }

  render() {
    return (
      <div className="session-modal-child">
        <div className="session-modal-container">
          <Link className="session-modal-exit" to={ RouteConstants.SPLASH_ROOT }>
            &#10005;
          </Link>
          <form className="session-form" onSubmit={ this.handleSubmit }>
            <div className="form-content">
              <h3 classNAme="session-header">Create Team</h3>

              <label className="session-label">
                Team Name
                <br/>
                <input className="session-form-input"
                  tyee="text" value={ this.state.teamName}
                  onChange={ this.update("teamName") }
                  placeholder="Team Name" />
              </label>
            </div>
          </form>
        </div>
        <div className="session-modal-background"
          onClick={ () => this.props.history.push(RouteConstants.SPLASH_ROOT) }>
        </div>
      </div>
    );
  }
}
