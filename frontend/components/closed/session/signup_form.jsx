import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as RouteConstants from "../../../constants/route_constants";
import * as ErrorConstants from "../../../constants/error_constants";

import { signup, clearSessionErrors } from "../../../actions/session_actions";
import { createTeam } from "../../../actions/team_actions";

// TODO: Add main errors bar at the top

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      teamName: "",
      isHidden: true
    };

    this.errorBlocks = {
      name: false,
      email: false,
      password: false,
      team: false
    };

    this.errors = this.props.sessionErrors;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.sessionErrors.length > 0 && this.state.isHidden) {
      this.errors = newProps.sessionErrors;
      this.setState({
        isHidden: false
      });
    } else if (newProps.sessionErrors.length <= 0 && !this.state.isHidden) {
      this.setState({
        isHidden: true
      });
    }
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.checkFields();
    const user = { name: this.state.name,
      email: this.state.email,
      password: this.state.password };

    const team = { name: this.state.teamName };

    this.props.createTeam(team);
    this.props.signup(user);
  }

  renderErrors() {
    const errors = (
      <div className="errors-container">
        <div id="signup-name-errors"
          className={ this.errorBlocks.name ? "session-errors open" : "session-errors hidden" }>
          <div className="arrow-up"></div>
          <div id="exclamation"></div>
          <p>{ ErrorConstants.BLANK_FIELD }</p>
        </div>

        <div id="signup-email-errors"
          className={ this.errorBlocks.email ? "session-errors open" : "session-errors hidden" }>
          <div className="arrow-up"></div>
          <div id="exclamation"></div>
          <p>{ ErrorConstants.BLANK_FIELD }</p>
        </div>

        <div id="signup-password-errors"
          className={ this.errorBlocks.password ? "session-errors open" : "session-errors hidden" }>
          <div className="arrow-up"></div>
          <div id="exclamation"></div>
          <p>{ ErrorConstants.BLANK_FIELD }</p>
        </div>
      </div>
    );

    this.errorBlocks = {
      name: false,
      email: false,
      password: false
    };

    return errors;
  }

  checkFields() {
    if (this.state.name.replace(/\s+/g, '') === "") {
      this.errorBlocks.name = true;
    }

    if (this.state.email.replace(/\s+/g, '') === "") {
      this.errorBlocks.email = true;
    }

    if (this.state.password.replace(/\s+/g, '') === "") {
      this.errorBlocks.password = true;
    }

    if (this.state.teamName.replace(/\s+/g, '') === "") {
      this.errorBlocks.teamName = true;
    }
  }

  render() {
    if (this.props.sessionErrors.length > 0) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.props.clearSessionErrors, 5000);
    }

    return (
      <div>
        <div className="session-modal-child">
          <div className="session-modal-container">
            <Link className="session-modal-exit" to={ RouteConstants.SPLASH_ROOT }>&#10005;</Link>
            { this.renderErrors() }
            <form className="session-form" onSubmit={ this.handleSubmit }>
              <div className="form-content">
                <h3 className="session-header">Sign Up</h3>

                <label className="session-label">
                  Name
                  <br/>
                  <input className="session-form-input"
                    type="text" value={ this.state.name }
                    onChange={ this.update("name") }
                    placeholder="Name" />
                </label>

                <label className="session-label">
                  Email
                  <br/>
                  <input className="session-form-input"
                    type="text" value={ this.state.email }
                    onChange={ this.update("email") }
                    placeholder="name@company.com" />
                </label>

                <label className="session-label">
                  Team Name
                  <br/>
                  <input className="session-form-input"
                    tyee="text" value={ this.state.teamName}
                    onChange={ this.update("teamName") }
                    placeholder="Team Name" />
                </label>

                <label className="session-label">
                  Password
                  <br/>
                  <input className="session-form-input"
                    type="password" value={ this.state.password }
                    onChange={ this.update("password") }
                    placeholder="Password" />
                </label>

                <input className="session-submit" type="submit" value="Sign Up!" />

                <p id="login-message">{"Already have an account? "}
                  <Link id="login-link" to={ RouteConstants.LOGIN }>Log in</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="session-modal-background"
          onClick={ () => this.props.history.push(RouteConstants.SPLASH_ROOT) }>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sessionErrors: state.errors.session
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signup: (user) => {
      return dispatch(signup(user));
    },
    createTeam: (team) => {
      return dispatch(createTeam(team));
    },
    clearSessionErrors: () => {
      return dispatch(clearSessionErrors());
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));
